import React from "react";
import Image from "next/image";

import SectionLayout from "@/components/SectionLayout";
import WorksList from "@/components/WorkList";

import styles from "@/app/works/works.module.css";

export const metadata = {
  title: "Kitagawa Fumiaki Portfolio WebSite | Works - 掃苔屋かわはら",
  description:
    "墓参り代行サービス「掃苔屋かわはら」のサービス紹介サイトを作成しました。",
};

const myWork = () => {
  return (
    <>
      <main>
        <SectionLayout class={"first-view works"}>
          <h1 className="page-title">
            掃苔屋かわはらサービス紹介サイトの新規作成
          </h1>
          <a
            href="https://soutaiya-kawahara.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            https://soutaiya-kawahara.netlify.app/
          </a>
        </SectionLayout>

        <SectionLayout class={styles.worksImg}>
          <Image
            src="/soutaiya-kawahara_mockup.png"
            width="638"
            height="398"
            alt="mockup"
            priority
          ></Image>
          <ul>
            <li>目的： サービス紹介サイトの新規作成</li>
            <li>製作期間： 約1ヶ月</li>
            <li>使用ツール： Figma、Visual Studio Code</li>
            <li>使用言語： HTML、CSS、JavaScript</li>
          </ul>
        </SectionLayout>

        <SectionLayout class={`${styles.worksAbout} gray-back`}>
          <div class={styles.textBox}>
            <p class={styles.heading}>概要</p>
            <p class={styles.description}>
              両親の知人に、新たに墓参り代行サービスを始める方がおられ、これから活動をしていくにあたって、サービスを紹介するためのWebページが欲しいとの相談を受けたので、制作いたしました。
            </p>
          </div>
          <div class={styles.textBox}>
            <p class={styles.heading}>課題</p>
            <p class={styles.description}>
              新規事業を始めていくにあたって、サービス紹介をするためのサイトを準備したい
            </p>
          </div>
          <div class={styles.textBox}>
            <p class={styles.heading}>工夫したこと・効果</p>
            <p class={styles.description}>
              使用しているイラストは、知人に依頼して制作していただきました。
              <br />
              墓参り代行というサービスの特徴的に信頼や安心感が一番大切だと感じたので、イラスト制作をお願いする際に、柔らかい雰囲気や優しさを感じるような物になるようにしていただきました。また、イラストや写真をメインにすることで、よりお客様にイメージが伝わるようなデザインになるように意識して、制作しました。
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
