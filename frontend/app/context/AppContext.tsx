"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { auth } from "@/lib/firebase";

/* ── Cart item type ── */
export interface CartItem {
  id: number;
  title: string;
  image: string;
  price: string;
  originalPrice: string;
  quantity: number;
  delivery: string;
  category: string;
}

/* ── Wishlist item type ── */
export interface WishlistItem {
  id: number;
  title: string;
  image: string;
  price: string;
  originalPrice: string;
  delivery: string;
  category: string;
}

interface AppContextType {
  /* Cart */
  cartCount: number;
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateCartQuantity: (id: number, delta: number) => void;
  clearCart: () => void;

  /* Wishlist */
  wishlistCount: number;
  wishlistItems: WishlistItem[];
  toggleWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
  moveToCart: (id: number) => void;

  /* User & Address */
  user: FirebaseUser | null;
  savedAddress: string | null;
  setSavedAddress: (addr: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [savedAddress, setSavedAddress] = useState<string | null>(null);

  // Listen to Auth State and load data from LocalStorage
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Load cart items
        const savedCart = localStorage.getItem(`cartItems_${currentUser.uid}`);
        if (savedCart) {
          try {
            setCartItems(JSON.parse(savedCart));
          } catch {
            setCartItems([]);
          }
        }

        // Load wishlist items
        const savedWishlist = localStorage.getItem(
          `wishlistItems_${currentUser.uid}`,
        );
        if (savedWishlist) {
          try {
            setWishlistItems(JSON.parse(savedWishlist));
          } catch {
            setWishlistItems([]);
          }
        }
      } else {
        setCartItems([]);
        setWishlistItems([]);
      }
    });

    // Load saved address
    const globalAddress = localStorage.getItem("savedAddress");
    if (globalAddress) setSavedAddress(globalAddress);

    return () => unsubscribe();
  }, []);

  // Save Cart and Wishlist to LocalStorage whenever they change
  useEffect(() => {
    if (user) {
      localStorage.setItem(`cartItems_${user.uid}`, JSON.stringify(cartItems));
      localStorage.setItem(
        `wishlistItems_${user.uid}`,
        JSON.stringify(wishlistItems),
      );
    }
  }, [cartItems, wishlistItems, user]);

  // Persist address changes
  useEffect(() => {
    if (savedAddress) {
      localStorage.setItem("savedAddress", savedAddress);
    } else {
      localStorage.removeItem("savedAddress");
    }
  }, [savedAddress]);

  /* ── Cart helpers ── */
  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((ci) => ci.id !== id));
  };

  const updateCartQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) =>
          ci.id === id
            ? { ...ci, quantity: Math.max(0, ci.quantity + delta) }
            : ci,
        )
        .filter((ci) => ci.quantity > 0),
    );
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((sum, ci) => sum + ci.quantity, 0);

  /* ── Wishlist helpers ── */
  const toggleWishlist = (item: WishlistItem) => {
    setWishlistItems((prev) => {
      const exists = prev.find((wi) => wi.id === item.id);
      if (exists) {
        return prev.filter((wi) => wi.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id: number) => {
    setWishlistItems((prev) => prev.filter((wi) => wi.id !== id));
  };

  const isInWishlist = (id: number) => {
    return wishlistItems.some((wi) => wi.id === id);
  };

  const moveToCart = (id: number) => {
    const item = wishlistItems.find((wi) => wi.id === id);
    if (item) {
      addToCart({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        originalPrice: item.originalPrice,
        delivery: item.delivery,
        category: item.category,
      });
      removeFromWishlist(id);
    }
  };

  const wishlistCount = wishlistItems.length;

  return (
    <AppContext.Provider
      value={{
        cartCount,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        wishlistCount,
        wishlistItems,
        toggleWishlist,
        removeFromWishlist,
        isInWishlist,
        moveToCart,
        user,
        savedAddress,
        setSavedAddress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
