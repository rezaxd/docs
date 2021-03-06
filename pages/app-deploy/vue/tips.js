import Layout from "../../../components/Layout";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>توضیحات و نکات تکمیلی در برنامه‌های Vue - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/vue.svg"
        alt="vue"
      />
      <div className="page-title">
        <h1>برنامه‌های VueJS</h1>
        <span className="page-description">(VueJS Apps)</span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h3>تنظیمات Nginx</h3>
    <p>
      استقرار برنامه‌های VueJS توسط وب‌سرور
      <span className="code">Nginx</span>
      انجام می‌گیرد. در شرایط مختلف، ممکن است که نیاز داشته باشید این وب‌سرور را
      مطابق با نیازهای‌تان تنظیم کنید. برای این کار، کافیست که در ریشه‌ی
      برنامه‌ی‌تان، فایلی با نام
      <span className="code">liara_nginx.conf</span>
      ایجاد کنید. به‌صورت پیش‌فرض، برای برنامه‌های VueJS این فایل به شکل زیر
      تعریف شده‌است:
    </p>
    <pre>
      <code>
        {`location / {
  index index.html index.htm;
  try_files $uri $uri/ /index.html =404;
}`}
      </code>
    </pre>
    <p>که شما می‌توانید آن را به شیوه‌ی خودتان گسترش دهید:</p>
    <pre>
      <code>
        {`location / {
  # ...
}
location /api {
  # ...
}
location /images {
  # ...
}`}
      </code>
    </pre>
  </Layout>
);
