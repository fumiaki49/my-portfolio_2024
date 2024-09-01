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
              リニューアル以前のサイトの課題として、どの様な製品なのかが一目でわからない事、問い合わせまでの導線が分かりづらい事、レスポンシブ対応が出来ていない点がありました。
            </p>
          </div>
          <div className={styles.textBox}>
            <p className={styles.heading}>工夫したこと・効果</p>
            <p className={styles.description}>
              ファーストビューにキャッチコピーと製品のイメージ写真を使用し、どのような製品なのかをイメージしやすいようにしました。問い合わせに関しては、ナビゲーションにボタンを配置する以外に、製品の仕様・料金まで確認して頂けるような、関心が高いお客様を問い合わせに繋げる目的で、仕様・料金が記載されているページに大きめの問い合わせボタンを設置しました。
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
