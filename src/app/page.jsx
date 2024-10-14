import "@/styles/global.css";
import "@/styles/top-page.css";

import SectionLayout from "@/components/SectionLayout";
import MyProfile from "../components/MyProfile";
import WorksList from "@/components/WorkList";
import PageTitle from "@/components/PageTitle";

import * as motion from "framer-motion/client";

export default function Home() {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1.5, // アニメーションの速度
  };

  const aboutMe = `1997年4月9日生まれで、滋賀県で生まれ育ちました。\n高校卒業後は京都外国語専門学校で英語を学び、2018年の3月に卒業いたしました。在学中、将来やりたい事を考えた際に、手に職をつけて活躍できるようになりたい思いがあり、卒業後はWEBエンジニアとして働くことを目標にTECH::EXPERTでプログラミングの学習をしました。現在は株式会社ニューコムの営業企画部にて、WEBサイトの情報更新やWEBページの作成、展示会スタッフなどの業務を担当しています。`;
  const titleText = `KITAGAWA\nFUMIAKI\nPORTFOLIO WEBSITE.`;

  return (
    <main>
      <motion.div
        initial="initial" // 初期状態
        animate="in" // 表示状態
        exit="out" // 終了状態
        variants={pageVariants} // 定義したアニメーションを適用
        transition={pageTransition} // アニメーションの遷移
      >
        <SectionLayout styleName={"first-view top-page"}>
          <PageTitle word={titleText} />
        </SectionLayout>

        <MyProfile profile={"profile"} aboutMe={aboutMe} moreBtnShow />

        <SectionLayout styleName={"work"} id={"works"}>
          <h2 className="section-title">Work</h2>
          <div className="contents">
            <WorksList />
          </div>
        </SectionLayout>
      </motion.div>
    </main>
  );
}
