import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <div className="container mx-auto px-4 py-16">Amazing content</div>
      <main>
        <h1 className="text-3xl font-bold underline">
          Build is in progress! Hang on{" "}
        </h1>
        <h2>Till then check out my</h2>
        <Link href={"https://twitter.com/jatinsehrwt"}>
          Twitter
        </Link>
      </main>
    </div>
  );
}
