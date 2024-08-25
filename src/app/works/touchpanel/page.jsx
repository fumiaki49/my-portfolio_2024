import React from "react";
import Image from "next/image";

import SectionLayout from "@/components/SectionLayout";
import WorksList from "@/components/WorkList";

import styles from "@/app/works/works.module.css";

export const metadata = {
  title: "Kitagawa Fumiaki Portfolio WebSite | Works - カメラ方式タッチパネル",
  description:
    "株式会社ニューコムのシロク事業部が提供する製品「カメラ方式タッチパネル」の製品紹介サイトをリニューアルいたしました。",
};

const myWork = () => {
  return (
    <>
      <main>
        <SectionLayout class={"first-view works"}>
          <h1 className="page-title">
            カメラ方式タッチパネル製品紹介サイトリニューアル
          </h1>
          <a
            href="https://www.xiroku.com/touchpanel/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            https://www.xiroku.com/touchpanel/index.html
          </a>
        </SectionLayout>

        <SectionLayout class={styles.worksImg}>
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

        <SectionLayout class={`${styles.worksAbout} gray-back`}>
          <div class={styles.textBox}>
            <p class={styles.heading}>概要</p>
            <p class={styles.description}>
              株式会社ニューコムのシロク事業部で取り扱っている製品「カメラ方式タッチパネル」のwebサイトをリニューアルいたしました。
              <br />
              既存のWebページは一昔前のデザインであったので、上司から新しくリニューアルして、問い合わせ数を増やしたいとの要望があり、作成いたしました。
            </p>
          </div>
          <div class={styles.textBox}>
            <p class={styles.heading}>課題</p>
            <p class={styles.description}>
              リニューアル以前のサイトの課題として、どの様な製品なのかが一目でわからない事、レスポンシブ対応が出来ていない点に加えて、取り扱っている製品とWebサイトとの間にギャップが大きく、製品の魅力を伝えられていない点がありました。
            </p>
          </div>
          <div class={styles.textBox}>
            <p class={styles.heading}>工夫したこと・効果</p>
            <p class={styles.description}>
              ファーストビューにキャッチコピーと製品のイメージ写真を使用し、どのような製品なのかをイメージしやすいようにしました。
              <br />
              カメラ方式タッチパネルは画面に触れなくても画面操作が可能になるという現代的な技術なので、サイト全体を通してアニメーションを取り入れることで、よりモダンな印象を持っていただけるように意識しました。
              リニューアル以前は問い合わせが1か月で0件という状況が続いていましたが、リニューアル後は多い月で3件～5件の問い合わせが来るようになりました。
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
