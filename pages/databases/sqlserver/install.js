import Layout from "../../../components/Layout";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات نصب و راه‌اندازی دیتابیس‌های SQL Server - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/mssql.svg"
        alt="mssql"
      />
      <div className="page-title">
        <h1>دیتابیس SQL Server</h1>
        <span className="page-description">(SQL Server Database)</span>
      </div>
    </div>

    <h3>نصب و راه‌اندازی</h3>
    <p>
      برای راه‌اندازی SQL Server ابتدا وارد منوی <b>دیتابیس‌ها</b> شوید و سپس
      روی <b>راه‌اندازی دیتابیس‌</b> کلیک کنید.
    </p>
    <ZoomableImage
      src="/static/databases/mysql-create-1.png"
      alt="صفحه‌ لیست دیتابیس‌ها"
    />
    <p>
      سپس دیتابیس‌ <b>SQL Server</b> و نسخه مدنظرتان را انتخاب کنید و با انتخاب
      شناسه برای دیتابیس‌‌تان و پلن دلخواه، دیتابیس را <b>راه‌اندازی و نصب</b>{" "}
      کنید.
    </p>
    <ZoomableImage
      src="/static/databases/sqlserver-create-1.png"
      alt="صفحه‌ ساخت دیتابیس‌ها"
    />
    <p>
      ممکن است راه‌اندازی دیتابیس چند ثانیه‌ای زمان ببرد و بعد از آن دیتابیس شما
      آماده استفاده می‌شود.
    </p>
  </Layout>
);
