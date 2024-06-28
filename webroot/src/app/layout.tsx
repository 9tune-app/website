import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/basic/header";

const noto = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "9tune",
	description: "9tuneはクリエイターとミュージシャンをつなぐプラットフォームです。",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={noto.className}>
				<Header></Header>
				{children}
			</body>
			</html>
	);
}
