import React from "react";
import Image from "next/image";
import * as motion from "framer-motion/client";

import PageTitle from "@/components/PageTitle";
import SectionLayout from "@/components/SectionLayout";
import WorksList from "@/components/WorkList";

import styles from "@/app/works/works.module.css";

export const metadata = {
  title: "Kitagawa Fumiaki Portfolio WebSite | Works - カメラ方式タッチパネル",
  description:
    "株式会社ニューコムのシロク事業部が提供する製品「カメラ方式タッチパネル」の製品紹介サイトをリニューアルいたしました。",
};

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

const myWork = () => {
  return (
    <>
      <main>
        <motion.div
          initial="initial" // 初期状態
          animate="in" // 表示状態
          exit="out" // 終了状態
          variants={pageVariants} // 定義したアニメーションを適用
          transition={pageTransition} // アニメーションの遷移
        >
          <SectionLayout styleName={"first-view works"}>
            <PageTitle word="カメラ方式タッチパネル製品紹介サイト" />
            <a
              href="https://www.xiroku.com/touchpanel/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://www.xiroku.com/touchpanel/index.html
            </a>
          </SectionLayout>

          <SectionLayout styleName={styles.worksImg}>
            <Image
              src="/touchpanel_mockup.png"
              width="638"
              height="398"
              alt="mockup"
              priority
            ></Image>
            <ul>
              <li>目的： 既存サイトのリニューアル</li>
              <li>製作期間： 約1ヶ月</li>
              <li>使用ツール： Illustrator、Dreamweaver</li>
              <li>使用言語： HTML、CSS、JavaScript</li>
            </ul>
          </SectionLayout>

          <SectionLayout styleName={`${styles.worksAbout} gray-back`}>
            <div className={styles.textBox}>
              <p className={styles.heading}>概要</p>
              <p className={styles.description}>
                株式会社ニューコムのシロク事業部で取り扱っている製品「カメラ方式タッチパネル」のwebサイトをリニューアルいたしました。
                <br />
                既存のWebページは一昔前のデザインであったので、上司から新しくリニューアルして、問い合わせ数を増やしたいとの要望があり、作成いたしました。
              </p>
            </div>
            <div className={styles.textBox}>
              <p className={styles.heading}>課題</p>
              <p className={styles.description}>
                リニューアル以前のサイトの課題として、どの様な製品なのかが一目でわからない事や、製品の特徴や仕様など知りたい情報へのアクセスのしづらさ、レスポンシブ対応が出来ていない点がありました。
              </p>
            </div>
            <div className={styles.textBox}>
              <p className={styles.heading}>工夫したこと</p>
              <p className={styles.description}>
                ファーストビューにキャッチコピーと製品のイメージ写真を使用し、どのような製品なのかをイメージしやすいようにしました。
                <br />
                カメラ方式タッチパネルは画面に触れなくても画面操作が可能になるという現代的な技術なので、サイト全体を通してアニメーションを取り入れることで、よりモダンな印象を持っていただけるように意識しました。その他、旧サイトの問い合わせや製品概要への動線が分かりづらかった点を改善するためにサイトの上部にナビゲーションバーを固定し、訪問者が迷わないように意識して設計いたしました。
              </p>
            </div>
          </SectionLayout>

          <SectionLayout styleName={styles.otherWorks}>
            <h2 className="section-title">Other Works</h2>
            <div className="contents">
              <WorksList />
            </div>
          </SectionLayout>
        </motion.div>
      </main>
    </>
  );
};

export default myWork;
