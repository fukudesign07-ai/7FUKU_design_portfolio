const imgMiyamotoPipe = "/images/miyamoto_pipe_main.jpg";
const imgMiyamotoCard = "/images/miyamoto_business_card.jpg";
const imgJourneyPoster = "/images/journey_poster_main.jpg";
const imgCoreCard = "/images/core_business_card_main.jpg";
const imgAmberPackage = "/images/amber_package_main.jpg";
const imgBaledDark = "/images/baled_dark_mockup_main.jpg";
const imgBaledHallway = "/images/baled_hallway.jpg";
const imgBaledOffice = "/images/baled_office_mockup.jpg";

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
