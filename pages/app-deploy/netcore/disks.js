import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import ZoomableImage from "../../../components/ZoomableImage";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استفاده از دیسک‌ها در برنامه‌های .Net Core - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/netcore.svg"
        alt="netcore"
      />
      <div className="page-title">
        <h1>برنامه‌های ASP.Net Core</h1>
        <span className="page-description">(ASP.Net Core Apps)</span>
      </div>
    </div>

    <h3>استفاده از دیسک‌ها</h3>
    <p>
      فایل سیستم برنامه‌های لیارا،{" "}
      <a href="/app-features/file-system">Read-Only</a> است. به عبارتی، بعد از
      عملیات استقرار، امکان ذخیره‌سازی فایل‌های جدید در کنار فایل‌های پروژه،
      وجود ندارد. به همین دلیل از قابلیتی تحت عنوان <b>دیسک‌ها</b> در اینجا
      استفاده می‌کنیم تا بتوانیم اطلاعات را ذخیره کنیم.
    </p>
    <p>
      به صورت خلاصه روند کار بدین‌صورت خواهد‌بود که ابتدا یک دیسک به اندازه
      دلخواه میسازید، و سپس آن دایرکتوری خاصی که مد‌نظرتان است را به آن دیسک
      متصل کنید تا اطلاعات آن همیشه محفوظ بماند. برای مثال فرض کنید میخواهید کل
      دایرکتوری MyStaticFiles را به یک دیسک متصل کنید تا داده‌های آن همیشه محفوظ
      باقی‌بماند.
    </p>
    <p>
      <b>گام اول)</b> ساخت یک دیسک جدید در منوی <b>دیسک‌های</b> پنل لیارا:{" "}
    </p>
    <ZoomableImage src="/static/laravel-create-disk.gif" />

    <p>
      <b>گام دوم)</b> اضافه کردن بخش اتصال دیسک به دایرکتوری در فایل{" "}
      <span className="code">liara.json</span>
    </p>
    <Highlight className="json">
      {`{
  "platform": "netcore",
  "app": "dotnets-starter",
  "port": "5000",
  "disks": [
    {
      "name": "disk1",
      "mountTo": "MyStaticFiles"
    }
  ]
}`}
    </Highlight>
    <p>
      همانطور که در فایل بالا می‌بینید، دیسک با شناسه disk1 به دایرکتوری
      MyStaticFiles برنامه متصل شده‌است. از حالا به بعد هر چیزی داخل دایرکتوری
      MyStaticFiles قرار بگیرد در هر استقرار یا ری‌استارت پاک نخواهد شد.
    </p>
    <Notice variant="info">
      همانطور که می‌بینید، بخش disks در فایل بالا یک آرایه است که یعنی شما
      می‌تواند دیسک‌های جدیدتری بسازید و دایرکتوری های دیگری را به آن ها متصل
      کنید.
      <Highlight className="json">
        {`{
  "disks": [
    {
      "name": "disk1",
      "mountTo": "MyStaticFiles"
    },
    {
      "name": "disk2",
      "mountTo": "Logs"
    }
  ]
}`}
      </Highlight>
    </Notice>
    <Notice variant="info">
      همانطور که در فایل‌های بالا می‌بینید آدرس دهی‌ها از ریشه هر برنامه داده
      شده است.
    </Notice>
    <br />

    <Link href="/app-deploy/netcore/domain">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
