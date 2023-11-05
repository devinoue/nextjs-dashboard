/**
 * appディレクトリにはルート・レイアウトが含まれていなければならない。
 * Next.jsは<html>タグと<body>タグを自動的に作成しないので、ルートレイアウトは<html>タグと<body>タグを定義する必要があります。
 *  内蔵のSEOサポートを使って、<head>HTML要素、たとえば<title>要素を管理することができます。
 * ルートレイアウトはデフォルトでサーバーコンポーネントであり、クライアントコンポーネントに設定することはできません。
 */

import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body>要素に追加することで、アプリケーション全体にフォントが適用され */}
      {/* フォントを滑らかにする Tailwind antialiasedクラスも追加 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
