import Seo from "@/components/Seo";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Seo title="About" />
      <Head>
        <title>About | Next Movie</title>
      </Head>
    </div>
  );
}
