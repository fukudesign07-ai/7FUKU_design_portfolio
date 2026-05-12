// ==========================================
// 🎨 画像の差し替えについて (Image Replacement)
// ==========================================
// チャットで共有いただいた素晴らしいポートフォリオ画像を反映するため、
// 画像のファイル名を整理し、デザインに合わせて各セクションの解説文も詳細にアップデートしました。
// 
// 実際の画像をプレビューに反映させるには：
// 左のファイルエクスプローラーから `public` フォルダを作成し、以下の名前で画像をアップロードしてください：
// 
// 1. miyamoto-logo.jpg (宮本工業のパイプ背景ロゴ)
// 2. miyamoto-card.jpg (宮本工業の名刺)
// 3. journey-poster.jpg (Journey. 映画ポスター)
// 4. core-card.jpg (CORE 谷口様の名刺)
// 5. arashiyama-beer.jpg (ARASHIYAMA AMBER ビール)
// 6. baled-logo.jpg (bAled systems メタルロゴ)
// 7. baled-corridor.jpg (bAled ホテル廊下)
// 8. baled-office.jpg (bAled オフィス受付)
// 9. ichi-fridge.jpg (ICHI techs 冷蔵庫)
// 10. soratowa-tea.jpg (空と和 茶畑)
// 11. soundmaster.jpg (Sound Master ヘッドホン)
// ==========================================

import imgMiyamotoPipe from './assets/images/miyamoto_pipe_main.jpg';
import imgMiyamotoCard from './assets/images/miyamoto_business_card.jpg';
import imgJourneyPoster from './assets/images/journey_poster_main.jpg';
import imgCoreCard from './assets/images/core_business_card_main.jpg';
import imgAmberPackage from './assets/images/amber_package_main.jpg';
import imgBaledDark from './assets/images/baled_dark_mockup_main.jpg';
import imgBaledHallway from './assets/images/baled_hallway.jpg';
import imgBaledOffice from './assets/images/baled_office_mockup.jpg';

export type Work = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageMain: string;
  imageSub?: string;
  imageExtra?: string;
  color: string;
};

export const works: Work[] = [
  {
    id: "01",
    title: "MIYAMOTO KOGYO",
    category: "Branding / Logo Design",
    description: "給排水設備の無骨さと、\n洗練された印象を両立したブランドビジュアルを設計。\n\n配管の質感や陰影を活かし、\n設備工事会社としての “信頼感” と\n“プロフェッショナル性” を表現しました。",
    imageMain: imgMiyamotoPipe,
    imageSub: imgMiyamotoCard,
    color: "#2B2B2B"
  },
  {
    id: "02",
    title: "JOURNEY.",
    category: "Art Direction / Poster",
    description: "やわらかな光と空気感を大切に、\n“人生を共に奏でる” という世界観をポスターとして表現。\n\n映画のワンシーンのような静けさと、\n温度感のあるビジュアルを目指しました。",
    imageMain: imgJourneyPoster,
    color: "#A28458"
  },
  {
    id: "03",
    title: "CORE",
    category: "Business Card Design",
    description: "「とにかくカッコイイ名刺をつくりたい」\nという想いから生まれたデザイン。\n\n厚みのある特殊紙と箔押し加工を用い、\n手に取った瞬間に印象に残る存在感を追求しました。",
    imageMain: imgCoreCard,
    color: "#1E2A3A"
  },
  {
    id: "04",
    title: "ARASHIYAMA AMBER",
    category: "Package Design",
    description: "温かみのあるアンバーカラーを基調に、\nクラフト感と上品さが共存するパッケージを制作。\n\n風景写真を取り入れることで、\n“土地の空気感” まで伝わる世界観を意識しました。",
    imageMain: imgAmberPackage,
    color: "#D05A32"
  },
  {
    id: "05",
    title: "bAled Systems",
    category: "Brand Identity",
    description: "“空間を整え、体験へと昇華する” をテーマに、\nリゾート・不動産事業を見据えたブランドロゴを制作。\n\n静けさと高級感を軸に、\n空間そのものの価値が伝わるビジュアルを設計しました。",
    imageMain: imgBaledDark,
    imageSub: imgBaledHallway,
    imageExtra: imgBaledOffice,
    color: "#1A1A1A"
  }
];
