import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های PHP - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/php.svg"
        alt="php"
      />
      <div className="page-title">
        <h1>برنامه‌های PHP</h1>
        <span className="page-description">(PHP Apps)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>
    <p>
      در این بخش به شما کمک می‌کنیم که در سریع‌ترین زمان ممکن برنامه PHP ای‌ که
      نوشتید را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک قابلیت مهم
      در لیارا آشنا می‌شوید و می‌توانید از آن‌ها در استقرار برنامه‌ی‌تان استفاده
      کنید.
    </p>
    {/* <Notice variant="info"> */}
    <p> لیارا از PHP 7.2 برای اجرای برنامه‌های شما استفاده می‌کند.</p>

    <Link href="/app-deploy/php/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
