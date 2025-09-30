export default async function handler(req, res) {
  const { userId } = req.query;

  // এখানে Bot Token
  const BOT_TOKEN = "8247959997:AAEFYduLniuFlcL--G4D2z2-w0Mtj52IsOo";

  // ডাটাবেজ বা অন্য সোর্স থেকে ইউজারের ডেটা বের করবেন
  // এখানে শুধু ডেমো পাঠানো হচ্ছে
  const userData = {
    reflink: `https://t.me/Testttab_bot?start=${userId}`,
    refcount: 5,
    balance: 200
  };

  res.status(200).json(userData);
}
