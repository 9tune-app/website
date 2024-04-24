import React from "react";

export default function Page() {
    return(
        <React.Fragment>
		<main className="flex min-h-screen flex-col items-center p-24">
                <h1>特定商取引法に関する表記</h1>
                <ul>
                    <li>販売業者: CreateArk Inc.</li>
                    <li>運営統括責任者: 高橋克典</li>
                    <li>郵便番号: 〒141-0033</li>
                    <li>電話番号: 080-5005-8065</li>
                    <li>メールアドレス: support@createark.net</li>
                    <li>住所: 東京都品川区西品川１丁目１−１ 住友不動産大崎ガーデンタワー 9F</li>
                    <li>商品代金以外の料金の説明: ありません</li>
                    <li>お支払い方法: クレジットカード払い</li>
                    <li>お支払い期限: 月末に翌月分を自動引き落としいたします</li>
                    <li>サービス名: 9tune</li>
                    <li>交換および返品（返金ポリシー）: 体験期間中はキャンセル可能です。メールアドレスへご連絡ください。</li>
                    <li>引渡時期: 支払いを確認した時点でサービスの利用が可能です。</li>
                    <li>決済期間: 1,500円</li>
                </ul>
            </main>
        </React.Fragment>
    );
}