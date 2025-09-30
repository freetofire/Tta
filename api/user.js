export default async function handler(req, res) {
  const { userId } = req.query;

  // ⚠️ সরাসরি Bot Token (Risky)
  const BOT_TOKEN = "8247959997:AAEFYduLniuFlcL--G4D2z2-w0Mtj52IsOo";

  try {
    // টেলিগ্রাম বটের তথ্য আনতে getMe API কল
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/getMe`
    );
    const botInfo = await response.json();

    // ডেমো ডেটা
    const userData = {
      reflink: `https://t.me/Testttab_bot?start=${userId || "guest"}`,
      refcount: 5,
      balance: 200,
      bot: botInfo
    };

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ error: "Telegram API error", details: err.message });
  }
}
