// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAfe0VTjbUZiPGXTOmPtuKaKM2Lmr4onOk",
  authDomain: "webdevai-c4345.firebaseapp.com",
  projectId: "webdevai-c4345",
  storageBucket: "webdevai-c4345.firebasestorage.app",
  messagingSenderId: "1023932204163",
  appId: "1:1023932204163:web:42c4bc78218dde9c45c7b6",
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
