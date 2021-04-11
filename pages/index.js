import Head from "next/head";

import Header from "../components/Home/Header";
import Form from "../components/Home/Form";
import Footer from "../components/Home/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Form />
      <Footer />
    </div>
  );
}
