import React from "react";
import Image from "next/image";

import SectionLayout from "@/components/SectionLayout";
import WorksList from "@/components/WorkList";

import styles from "@/app/works/works.module.css";

export const metadata = {
  title: "Kitagawa Fumiaki Portfolio WebSite | Works - llsensor",
  description:
    "株式会社ニューコムのシロク事業部が提供する製品「llsensor」の製品紹介サイトをリニューアルいたしました。",
};

const myWork = () => {
  return (
    <>
      <main>
        <SectionLayout styleName={"first-view works"}>
          <h1 className="page-title">LLsensor 製品紹介サイトリニューアル</h1>
          <a
            href="https://www.llsensor.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            https://www.llsensor.com/
          </a>
        </SectionLayout>

        <SectionLayout styleName={styles.worksImg}>
          <Image
            src="/llsensor-mockup.png"
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
              株式会社ニューコムのシロク事業部で取り扱っている製品「LL sensor
              (エルエルセンサー)」のwebサイトをリニューアルいたしました。
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
              旧サイトはデザインが古く使いにくい印象があったので、必要な情報にアクセスしやすい事を意識して設計しました。
              <br />
              具体的にはナビゲーションバーを上部に固定して、訪問者が好きなタイミングで必要な情報にアクセス出来るようにしました。また、ファーストビューにキャッチコピーと製品のイメージ写真を使用し、どのような製品なのかを直感的にイメージしやすいようにしました。
            </p>
          </div>
        </SectionLayout>

        <SectionLayout styleName={styles.otherWorks}>
          <h2 className="section-title">Other Works</h2>
          <div className="contents">
            <WorksList />
          </div>
        </SectionLayout>
      </main>
    </>
  );
};

export default myWork;
