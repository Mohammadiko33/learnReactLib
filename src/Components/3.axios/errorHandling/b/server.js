const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");

// اضافه کردن مقدار پیش‌فرض برای پورت
const port = +process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});