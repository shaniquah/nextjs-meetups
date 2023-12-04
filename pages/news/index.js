// mydomain.com/news

import Link from "next/link";

export default function NewsPage() {
  return (
    <div>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">NextJS is a great framework</Link>
        </li>
        <li>
          <Link href="/news/otshepeng-made-this">Otshepeng made this</Link>
        </li>
        <li>
          <Link href="/news/i&apos;m-amazing-bruh">I&apos;m amazing bruh</Link>
        </li>
      </ul>
    </div>
  );
}
