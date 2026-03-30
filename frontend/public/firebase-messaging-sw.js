// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  // These values should be injected or handled via environment variables
  apiKey: "REMOVED_FOR_SECURITY",
  authDomain: "REMOVED_FOR_SECURITY",
  projectId: "REMOVED_FOR_SECURITY",
  storageBucket: "REMOVED_FOR_SECURITY",
  messagingSenderId: "REMOVED_FOR_SECURITY",
  appId: "REMOVED_FOR_SECURITY",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/blog/next.js.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
