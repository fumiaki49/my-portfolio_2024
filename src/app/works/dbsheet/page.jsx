import React from "react";
import Image from "next/image";

import SectionLayout from "@/components/SectionLayout";
import WorksList from "@/components/WorkList";

import styles from "@/app/works/works.module.css";

export const metadata = {
  title: "Kitagawa Fumiaki Portfolio WebSite | Works - dbSheet",
  description:
    "株式会社ニューコムが提供するソフトウェア「dbSheet」の製品紹介サイトを作成いたしました。",
};

const myWork = () => {
  return (
    <>
      <main>
        <SectionLayout class={"first-view works"}>
          <h1 className="page-title">dbSheetClient 製品紹介サイト</h1>
          <a
            href="https://dbsheetclient.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            https://dbsheetclient.jp/
          </a>
        </SectionLayout>

        <SectionLayout class={styles.worksImg}>
          <Image
            src="/dbSheet-mockup.png"
            width="638"
            height="398"
            alt="mockup"
            priority
          ></Image>
          <ul>
            <li>目的： 製品紹介サイトの新規作成</li>
            <li>製作期間： 約3ヶ月</li>
            <li>使用ツール： Illustrator、Figma、Dreamweaver</li>
            <li>使用言語： HTML、CSS、JavaScript</li>
          </ul>
        </SectionLayout>

        <SectionLayout class={`${styles.worksAbout} gray-back`}>
          <div class={styles.textBox}>
            <p class={styles.heading}>概要</p>
            <p class={styles.description}>
              株式会社ニューコムの製品である、「dbSheetClient」の製品紹介サイトを制作いたしました。
              <br />
              おおまかな構成は先輩社員に考えていただき、実装の部分を私が担当しています。製品概要ページやWebセミナー関連ページなど、一部のデザインは私が担当しています。
              展示会や営業活動に活かせるような、導入事例をメインにした製品紹介サイトとして運用されています。
            </p>
          </div>
          <div class={styles.textBox}>
            <p class={styles.heading}>課題</p>
            <p class={styles.description}>
              リニューアル以前のサイトの課題として、どの様な製品なのかが一目でわからない事、問い合わせまでの導線が分かりづらい事、レスポンシブ対応が出来ていない点がありました。
            </p>
          </div>
          <div class={styles.textBox}>
            <p class={styles.heading}>工夫したこと・効果</p>
            <p class={styles.description}>
              ファーストビューにキャッチコピーと製品のイメージ写真を使用し、どのような製品なのかをイメージしやすいようにしました。問い合わせに関しては、ナビゲーションにボタンを配置する以外に、製品の仕様・料金まで確認して頂けるような、関心が高いお客様を問い合わせに繋げる目的で、仕様・料金が記載されているページに大きめの問い合わせボタンを設置しました。
            </p>
          </div>
        </SectionLayout>

        <SectionLayout class={styles.otherWorks}>
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
