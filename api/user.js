import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Firebase config (আপনার প্রজেক্টের থেকে কপি করতে হবে)
const firebaseConfig = {
  apiKey: "AIzaSyB2UyrZZ5yu9N4EJLELXBkcLRYe6OA4IJM",
  authDomain: "tta-mo.firebaseapp.com",
  projectId: "tta-mo",
  storageBucket: "tta-mo.firebasestorage.app",
  messagingSenderId: "768846766181",
  appId: "1:768846766181:web:a2c2af74b6e3c087b4268c"
};

// Firebase init
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req, res) {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ error: "userId missing" });
  }

  try {
    const userRef = doc(db, "users", userId.toString());
    const snap = await getDoc(userRef);

    let userData;

    if (snap.exists()) {
      // পুরানো ডেটা নেবো
      userData = snap.data();
    } else {
      // নতুন ইউজার হলে ডিফল্ট ডেটা সেট করবো
      userData = {
        reflink: `https://t.me/Testttab_bot?start=${userId}`,
        refcount: 0,
        balance: 0
      };
      await setDoc(userRef, userData);
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ error: "Firebase error", details: err.message });
  }
}
