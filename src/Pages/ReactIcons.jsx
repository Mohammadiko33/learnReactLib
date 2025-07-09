import React from "react";
import MohammadIkoSVG from "../Components/1.React-icons/MohammadIkoSVG";
import { IoHome, IoCallSharp } from "react-icons/io5";
import {
  MdFeaturedPlayList,
  MdOutlineMailOutline,
  MdOutlineSecurity,
} from "react-icons/md";
import {
  FaComment,
  FaSearch,
  FaUser,
  FaDownload,
  FaPlay,
  FaStar,
  FaArrowUp,
  FaArrowRight,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { FaArrowLeftLong, FaUserPen, FaLocationDot } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { RiSingleQuotesR } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { BiSupport } from "react-icons/bi";
import "../Components/1.React-icons/ReactIcons.css";

export default function ReactIcons() {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <MohammadIkoSVG width={50} height={50} />
          <span className="logo-text">Mohammadiko</span>
        </div>

        <nav className="nav-links">
          <a href="#" className="nav-link">
            <IoHome />
            <span>خانه</span>
          </a>
          <a href="#" className="nav-link">
            <MdFeaturedPlayList />
            <span>ویژگی‌ها</span>
          </a>
          <a href="#" className="nav-link">
            <FaComment />
            <span>نظرات</span>
          </a>
          <a href="#" className="nav-link">
            <IoCallSharp />
            <span>تماس</span>
          </a>
        </nav>

        <div className="header-actions">
          <button className="search-btn">
            <FaSearch />
          </button>
          <button className="user-btn">
            <FaUser />
            <span>ورود</span>
          </button>
        </div>
      </header>

      {/* بخش هیرو */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">محصول فوق‌العاده ما</h1>
          <p className="hero-subtitle">
            راه‌حلی نوآورانه برای نیازهای روزمره شما
          </p>

          <div className="hero-buttons">
            <button className="download-btn">
              <FaDownload />
              <span>دانلود رایگان</span>
            </button>
            <button className="demo-btn">
              <FaPlay />
              <span>نمایش دمو</span>
            </button>
          </div>

          <div className="ratings">
            <div className="stars">
              <FaStar />
            </div>
            <span>۴.۹ امتیاز از ۱۰۰۰+ کاربر</span>
          </div>
        </div>

        <div className="hero-image">
          {/* <GrDomain /> */}
          <div className="image-placeholder">
            <img className="hero" src="/ReactIcons/OIP.jpg" alt="hero" />
          </div>
        </div>
      </section>

      {/* بخش ویژگی‌ها */}
      <section className="features-section">
        <h2 className="section-title">ویژگی‌های منحصر به فرد</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <MdFeaturedPlayList />
            </div>
            <h3>طراحی واکنش‌گرا</h3>
            <p>سازگار با تمام دستگاه‌ها</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <MdOutlineSecurity />
            </div>
            <h3>امنیت بالا</h3>
            <p>حفاظت از داده‌های شما</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <BiSupport />
            </div>
            <h3>پشتیبانی ۲۴/۷</h3>
            <p>همیشه در دسترس</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <RxUpdate />
            </div>
            <h3>به‌روزرسانی مداوم</h3>
            <p>همیشه از آخرین تکنولوژی‌ها استفاده می‌کنیم</p>
          </div>
        </div>
      </section>

      {/* بخش نظرات */}
      <section className="testimonials-section">
        <h2 className="section-title">نظرات مشتریان</h2>

        <div className="testimonials-container">
          <button className="slider-btn left">
            <FaArrowLeftLong />
          </button>

          <div className="testimonial">
            <div className="quote-icon">
              <RiSingleQuotesR />
            </div>
            <p className="testimonial-text">
              "این محصول زندگی من را متحول کرده است. کارایی فوق‌العاده‌ای دارد و
              استفاده از آن بسیار ساده است."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <FaUserPen />
              </div>
              <div className="author-info">
                <h4>سارا محمدی</h4>
                <p>مدیر محصول</p>
              </div>
            </div>
          </div>

          <button className="slider-btn right">
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* بخش تماس */}
      <section className="contact-section">
        <h2 className="section-title">تماس با ما</h2>

        <div className="contact-methods">
          <div className="contact-method">
            <div className="contact-icon">
              <IoCallSharp />
            </div>
            <p>۰۲۱-۱۲۳۴۵۶۷۸</p>
          </div>

          <div className="contact-method">
            <div className="contact-icon">
              <MdOutlineMailOutline />
            </div>
            <p>info@example.com</p>
          </div>

          <div className="contact-method">
            <div className="contact-icon">
              <FaLocationDot />
            </div>
            <p>تهران، خیابان آزادی</p>
          </div>
        </div>

        <div className="social-icons">
          <a href="#" className="social-icon">
            <FaFacebook />
          </a>
          <a href="#" className="social-icon">
            <FaTwitter />
          </a>
          <a href="#" className="social-icon">
            <FiInstagram />
          </a>
          <a href="#" className="social-icon">
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* فوتر */}
      <footer className="footer">
        <div className="footer-logo">
          <MohammadIkoSVG />
          <span>Mohammadiko</span>
        </div>

        <p className="copyright">© 2023 تمامی حقوق محفوظ است.</p>

        <a href="#" className="back-to-top">
          <FaArrowUp />
        </a>
      </footer>
    </>
  );
}
