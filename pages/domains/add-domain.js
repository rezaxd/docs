import Layout from '../../components/Layout'
import Head from 'next/head'
import Notice from '../../components/Notice'

export default () => (
  <Layout>
    <Head>
      <title>Liara | افزودن دامنه</title>
    </Head>

    <h1>افزودن دامنه</h1>
    <p>
      بعد از ایجاد هر برنامه در لیارا، یک ساب‌دامنه‌ی اختصاصی به شما اختصاص داده می‌شود.
      برای مثال، اگر نام برنامه‌ی‌تان my-app باشد،
      ساب‌دامنه‌ی my-app.liara.run
      به شما اختصاص داده می‌شود که از طریق آن می‌توانید به برنامه‌ی‌تان دسترسی داشته باشید.
    </p>
    <p>
      اما معمولا برنامه‌ها دارای دامنه‌ی اختصاصی هستند. در این بخش، به توضیح این قابلیت
      در لیارا می‌پردازیم که چگونه می‌توانید دامنه‌ای مانند example.com
      را به برنامه‌ی‌تان متصل کنید.
    </p>

    <h3>تنظیم DNS</h3>
    <p>
    برای افزودن دامنه در لیارا، نیاز به استفاده از یک سرویس DNS دارید.
      ما سرویس
      {' '}
      <a href="https://cloudflare.com">Cloudflare</a>
      {' '}
      را پیشنهاد می‌کنیم.
      {/* TODO: How to add a domain to cloudflare with pictures. */}
    </p>

    <Notice variant="info">
      این بخش در حال تکمیل است. در حال حاضر،
      {' '}
      <a href="https://liara.ir/blog/add-domain">
        «راهنمای اتصال دامنه‌ی اختصاصی»
      </a>
      {' '}
      را مطالعه بفرمایید.
    </Notice>


    {/* <h3>فعال‌سازی دامنه</h3>

    <h3>اتصال دامنه به برنامه</h3>

    <h3>نحوه‌ی افزودن Subdomain</h3> */}

    <h3>از دامنه‌های 
      <span className="code">.ir</span>
       هم پشتیبانی می‌کنید؟</h3>
    <p>
      بله. محدودیتی از لحاظ TLD وجود ندارد و می‌توانید از هر پسوند دلخواهی استفاده کنید.
    </p>

    <h3>
      حتی بعد از تغییر DNS ها،
      وضعیت همچنان «در انتظار تغییر DNS ها...» است.
    </h3>
    <p>
      تغییر DNS های
      دامنه‌های <span className="code">.ir</span>
      ممکن است بین ۴ تا ۷۲ ساعت زمان‌بر باشد.
      سرعت اعمال این تغییرات وابسته به nic.ir است، بنابراین باید صبور باشید.
       در صورتی که
      بعد از طی این مدت، باز هم مورد رفع نشد، با پشتیبانی لیارا ارتباط بگیرید.
    </p>

    <h3>چرا لیارا دامنه نمی‌فروشد؟ و یا چرا سرویس DNS ارائه نمی‌کند؟</h3>
    <p>
      برای خرید دامنه، در حال حاظر سرویس‌های مختلفی وجود دارند که با قیمت مناسبی
      امکان خرید دامنه را برای‌تان فراهم می‌کنند. برای سرویس DNS هم همین‌طور.
      در حال حاظر، برنامه‌ی ما این است که سرویس‌هایی را ارائه دهیم که کمبود آن‌ها احساس می‌شود.
      شاید در آینده این خدمات را هم ارائه دهیم.
    </p>
  </Layout>
)
