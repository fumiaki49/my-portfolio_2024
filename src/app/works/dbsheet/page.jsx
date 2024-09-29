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
        <SectionLayout styleName={"first-view works"}>
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

        <SectionLayout styleName={styles.worksImg}>
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

        <SectionLayout styleName={`${styles.worksAbout} gray-back`}>
          <div className={styles.textBox}>
            <p className={styles.heading}>概要</p>
            <p className={styles.description}>
              株式会社ニューコムの製品である、「dbSheetClient」の製品紹介サイトを制作いたしました。
              <br />
              おおまかな構成は先輩社員に考えていただき、実装の部分を私が担当しています。製品概要ページやWebセミナー関連ページなど、一部のデザインは私が担当しています。
              展示会や営業活動に活かせるような、導入事例をメインにしたソリューションサイトとして運用されています。
            </p>
          </div>
          <div className={styles.textBox}>
            <p className={styles.heading}>課題</p>
            <p className={styles.description}>
              コーポレートサイトの製品紹介ページのデザインが古く、載せている情報が古くなってきていた。
            </p>
          </div>
          <div className={styles.textBox}>
            <p className={styles.heading}>工夫したこと</p>
            <p className={styles.description}>
              お客様に製品の魅力を理解してもらうには、実際にどのように活用されているのかを見てもらうのが分かりやすいため、導入事例をメインにアピールできるように制作されています。また、料金シミュレーションのページを作成し、費用感などイメージしやすいようにしています。実際に営業活動で利用して頂いている中で、お客様から好評だと伺っています。
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
