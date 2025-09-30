// ডেমো ডাটাবেজ (Vercel সার্ভার restart হলে reset হবে)
let users = {};

export default async function handler(req, res) {
  const { userId } = req.query;

  // Bot Token (⚠️ নিরাপদ হলে Vercel Environment Variable ব্যবহার করুন)
  const BOT_TOKEN = "8247959997:AAEFYduLniuFlcL--G4D2z2-w0Mtj52IsOo";

  if (!userId) {
    return res.status(400).json({ error: "userId missing" });
  }

  // যদি নতুন ইউজার হয়, তার জন্য ডিফল্ট ডেটা তৈরি করবো
  if (!users[userId]) {
    users[userId] = {
      reflink: `https://t.me/Testttab_bot?start=${userId}`,
      refcount: 0,
      balance: 0
    };
  }

  // ডেমো হিসেবে: রেফার কাউন্ট ১ বাড়ানো
  users[userId].refcount += 1;
  users[userId].balance += 200;

  // রেসপন্সে ডেটা পাঠানো
  res.status(200).json(users[userId]);
    }
