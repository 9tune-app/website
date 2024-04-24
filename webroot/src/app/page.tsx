import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<h1>9tune --クリエイターとミュージシャンとをつなぐプラットフォーム--</h1>
			<ul>
				<li>9tuneは、動画クリエイターがYoutubeで使う楽曲を選ぶプラットフォームです。</li>
				<li>動画クリエイター、ミュージシャンとが共栄する健全な枠組みを目指します。</li>
			</ul>
			<h2>はじめかた</h2>
			<ul>
				<li>アカウント登録を一週間は体験版が利用できます。</li>
				<li>動画に使いたい音楽を見つけたら、クリエイター登録をすることで利用できます。</li>
				<li>ミュージシャンの方は、ミュージシャン登録をする必要があります。</li>
			</ul>
			<h2>価格</h2>
			<ul>
				<li>月額3000円で、共用楽曲は使いたい放題です。</li>
			</ul>
			<h2>リンク</h2>
			<ul>
				<li><Link href="./legal-notice">特定商取引法に関する表記</Link></li>
			</ul>
		</main>
	);
}
