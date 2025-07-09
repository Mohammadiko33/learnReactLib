import React from 'react'
import _, { isNumber, isString } from "lodash"

export default function Lodash() {

  const product = [
    { id: 1 , title: "samsung a10" , price: 100 , isActivate: false},
    { id: 2 , title: "samsung a11" , price: 200 , isActivate: false},
    { id: 3 , title: "samsung a12" , price: 300 , isActivate: true},
    { id: 4 , title: "samsung a13" , price: 400 , isActivate: false},
    { id: 5 , title: "samsung a54" , price: 9_000 , isActivate: false},
  ]

  const userInfo = {
    id: 1,
    name: "mohammad",
    age: 18,
    city: "moscow",
    basketMoney: 90_000
  }

  const getNameAndAgeFromUserInfo = _.pick(userInfo,  ["name" , "age"])
  const isNumberRequiment = _.pickBy(userInfo , isNumber)
  const isStringRequiment = _.pickBy(userInfo , isString)

  return (
    <div className='djc tt bgblack cwhite'>
      <div className='mt2 mb2 p51 br-7 hmax' style={{border: "1px solid #3b3b3b", boxShadow: "1px 1px 1rem -10px #3b3b3b"}}>
        <h3 className='fs2'>is acolad empty ? {_.isEmpty({}) ? "true" : "false" }</h3>
        <h3 className='fs2'>is braket empty ? {_.isEmpty([]) ? "true" : "false"}</h3>
      -------------------------------------------------------------------------------------------------------------------------------------------------------------------
      <h3 className='fs2'> pick name & age : | user name : {getNameAndAgeFromUserInfo.name} | user age : {getNameAndAgeFromUserInfo.age}</h3>
      <h3 className='fs2'> pickBy number : | user age : {isNumberRequiment.age} | user basket price : {isNumberRequiment.basketMoney.toLocaleString()}</h3>
      <h3 className='fs2'> pickBy string : | user name : {isStringRequiment.name} | user city : {isStringRequiment.city}</h3>
      -------------------------------------------------------------------------------------------------------------------------------------------------------------------
      <h3 className='fs2'>map array : {_.map(product,  "title").map(product => ( <div key={product}>product name : {product}</div> ))}</h3>
      <h3 className='fs2'>map array : {_.map(product, product => {
         product.price += 800
          return product
      }).map(product => ( <div key={product.id}>product name : {product.title} | product price : {product.price.toLocaleString()}</div> ))}
      </h3>
      -------------------------------------------------------------------------------------------------------------------------------------------------------------------
      <h3 className='fs2'>filter array normal : {_.filter(product , product => product.price > 300).map(product => ( <h3 className='fs2' key={product.id}>product name : { product.title } | product price : { product.price.toLocaleString() }</h3> ))}</h3>
      <h3 className='fs2'>filter array with key : {_.filter(product , {price: 200}).map(product => ( <h3 className='fs2' key={product.id}>product name : { product.title } | product price : { product.price.toLocaleString() }</h3> ))}</h3>
      <h3 className='fs2'>filter array with array : {_.filter(product , ["price", 200]).map(product => ( <h3 className='fs2' key={product.id}>product name : { product.title } | product price : { product.price.toLocaleString() }</h3> ))}</h3>
      <h3 className='fs2'>filter array with count true value : {_.filter(product , "isActivate").map(product => ( <h3 className='fs2' key={product.id}>product name : { product.title } | product price : { product.price.toLocaleString() }</h3> ))}</h3>
      -------------------------------------------------------------------------------------------------------------------------------------------------------------------
      <h3 className='fs2'>sum [1,2,3,4,90] : {_.sum([1,2,3,4,90])}</h3> 
      <h3 className='fs2'>sumBy [acolad prices 100 + 200 + 300 + 400 + 9,000] : {_.sumBy(product , product => product.price).toLocaleString()}</h3>
      </div>
    </div>
  )
}
// _.sum  یک ارایه میگیره که توش مستقیما عدد باشه و خروجیش جمع اعداد ارایس
// _.sumBy یک ارایه میگیره که توش ابجکت باشه مثلا با کی پرایس  و ما خاسته باشیم مقادیر پرایس رو جمع کنیم میایم ارایه رو بهش پاس میدیم و یک ارو فانکشن اجرا مکینم تا بگیم ما از کدوم کی میخایم استفاده کنیم

// filter array with key میتونم با کی ابجکت هارو فیلترکنیم
// filter array with array , object همچنین میتوانیم با ابجکت و ارایه هم دیتا هارو فیلترکنیم برای پیدا کردن یک ابجکت
// filter array with count true value میتونیم بگیم اگه تورو بود برگردونش

// map with key میتونیم بگیم فقط title هارو برگردون
// map add price for all product میتونم بگیم همه ایتم ها بیا قیمتشون رو افزایش بده

// pick پیک برای اینکه از ابجکت ها با کی دریافت کنیم کی ولیو رو 
// pickBy پیک بای تایپ رو بهش میدیم و تمام مقادیر که با اون تایپ بودن رو میده

// _.get(user, 'profile.name', 'ناشناس'); 
// توضیح اگر مقدار موردنظر وجود نداشته باشه قدار پیش‌فرض برمی‌گردونه. (برای api & data های پیچیده خیلی مفیده)

// _.set(user, 'profile.name', 'علی');
// توضیح: آبجکت‌های تو در تو رو خودکار می‌سازه، مفید برای ساخت response یا تنظیمات دینامیک.

// _.merge(configDefault, configEnv);
// توضیح: مقادیر تو در تو رو هم ترکیب می‌کنه (بر خلاف Object.assign). خیلی کاربردی برای کانفیگ‌ها. 

// const userCopy = _.cloneDeep(user);
// توضیح: مطمئن می‌شی که تغییرات روی نسخه‌ی اصلی تأثیر نمی‌ذاره. مناسب در منطق‌هایی که state حساسه.

// const save = _.debounce(() => db.save(data), 1000);
// توضیح: در بک‌اند هم برای throttle کردن درخواست‌ها مفیده، مثلاً ذخیره اتوماتیک یا rate limit ساده.

// _.groupBy(users, 'role');
//توضیح: بسیار کاربردی برای آمارگیری، گزارش‌گیری یا دسته‌بندی دیتا.

// _.uniqBy(users, 'email');
// توضیح: برای پاک‌سازی دیتا قبل از ذخیره یا پردازش خیلی مهمه.

// _.orderBy(users, ['age', 'name'], ['desc', 'asc']);
// توضیح: خیلی قوی‌تر از Array.sort هست، مخصوصاً برای مرتب‌سازی دیتاهای پیچیده سمت سرور.

// _.isEqual(user1, user2);
// توضیح: مناسب برای تشخیص تغییرات، validation، کش و غیره.

// _.omit(user, ['password', 'token']);
// توضیح: فوق‌العاده کاربردی برای پاک‌سازی اطلاعات حساس قبل از ارسال به کلاینت یا لاگ‌گرفتن. 