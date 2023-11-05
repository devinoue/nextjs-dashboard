import { Inter, Lusitana } from "next/font/google";

/**
 * Google Fontsからフォントをインポートする
 * https://fonts.google.com/
 */

/**
 * 複数のフォントを使用する場合は、
 * ２つのアプローチがある
 * https://nextjs.org/docs/app/building-your-application/optimizing/fonts#using-multiple-fonts
 * interの方がたぶん楽
 */

// どのサブセットを読み込むかを指定する。この場合は'latin'
// Webサイトで使用する文字のみ、つまりラテン文字のみ抽出するという意味
export const inter = Inter({ subsets: ["latin"] });

/**
 * 練習のため、Lusitanaというセカンダリーフォントをインポートしている
 */
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
