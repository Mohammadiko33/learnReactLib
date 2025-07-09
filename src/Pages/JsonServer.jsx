import React, { useEffect, useState } from "react";
import "../Components/2.JsonServer/JsonServer.css";
import ProductBox from "../Components/2.JsonServer/ProductBox";

export default function JsonServer() {
  const [products, setProducts] = useState([]);
  const [searchValIpt, setSearchValIpt] = useState("");

  const getAllProduct = async () => {
    await fetch(`http://localhost:4000/products`)
    // await fetch(`http://localhost:4000/products?_sort=id&_order=desc`) // این خط کد باید ایتم هارو درعکس برگردانند که اینطور عمل نمیکند
    // await fetch(`http://localhost:4000/products?_start=7&_end=8`) // ایتم هارو استلایس میکنه
    // await fetch(`http://localhost:4000/courses?_embed=comments`) // اگه در فایل جیسون  زیر ارایه پروداکت ها ارایه باشه با کی کامنت ها با کورس ایدی های وصل شده به همون ایدی کوس ها 
    // await fetch(`http://localhost:4000/courses/1/comment`) // اگر بخایم ققط کامنت های دوره اول رو برگردونه میایم این حرکت رو میزنیم
      .then((res) => {
        if (!res.ok) {
          return console.log("error in get product");
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch(err => console.log(err))
  };

  const serchingForUserFood = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:4000/products?name=${searchValIpt}`) // بر اساس برچ کار بر ولی این سرچ باید اسم کامل محصول رو بنویسیم
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) {
            return console.log(`no data with ${searchValIpt} in database`);
          }
          return console.log("error in get product");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data || []);
      })
      .catch(err => console.log(err))
  };

  useEffect(() => {
    getAllProduct();
    console.log("mount");
  }, []);

  return (
    <>
      <div className="app">
        <header className="header">
          <div className="logo">رستوران دل‌انگیز</div>
          <nav>
            <ul>
              <li>
                <a href="#">صفحه اصلی</a>
              </li>
              <li>
                <a href="#">منو</a>
              </li>
              <li>
                <a href="#">درباره ما</a>
              </li>
              <li>
                <a href="#">تماس با ما</a>
              </li>
            </ul>
          </nav>
          <form className="search djac" onSubmit={serchingForUserFood}>
            <input
              className="ipt ipt2 w75"
              type="text"
              placeholder="لطفا نام کامل محصول را وارد کنید ... "
              value={searchValIpt}
              onChange={(e) => setSearchValIpt(e.target.value)}
            />
            <button
              type="submit"
              className="b btn1"
              onSubmit={serchingForUserFood}
            >
              سرچ محصول
            </button>
          </form>
          <div className="header-actions">
            <button className="cart-btn">🛒 سبد خرید</button>
          </div>
        </header>
        <div className="products-container">
          {products.length ? (
            <>
              {products.map((product) => (
                <ProductBox key={product.id} product={product} />
              ))}
            </>
          ) : (
            <div>هیچ غذایی پیدا نشد</div>
          )}
        </div>
      </div>
    </>
  );
}

// برای اجرا فایل جیسون بکند فقط کافیه این کد رو بزنیم npx json-server db.json
// برای تغییر پورت میایم همچین کدی رو میزنیم (json-server --watch db.json --port 3000)
// ما میتونیم لوکال پروژه خودمون رو از یک فایل جیسون توی فضای ابری اینترنت وصلش بکنیم
// json-server http://jsonplaceholder.typicode.com/db
// localhost:4000/users 
// العان ما موفق شدیم جیسون پلیس هولدر رو به پروژه خودمون وصل کنی و به طور مثال خط بالا کاربر هارو برمیگردونه