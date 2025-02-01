import React from "react";
import Image from "next/image";

import PageTitle from "@/components/PageTitle";
import SectionLayout from "@/components/SectionLayout";
import WorksList from "@/components/WorkList";

import styles from "@/app/works/works.module.css";

import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Kitagawa Fumiaki Portfolio WebSite | Works - カメラ方式タッチパネル",
  description:
    "株式会社ニューコムのシロク事業部が提供する製品「カメラ方式タッチパネル」の製品紹介サイトをリニューアルいたしました。",
};

const myWork = () => {
  return (
    <main>
      <PageTransition>
        <SectionLayout styleName={"first-view works"}>
          <PageTitle word="カメラ方式タッチパネル製品紹介サイト" />
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
          <div className={styles.imgBox}>
            <p className={styles.heading}>画面イメージ</p>
            <p className={styles.annotation}>
              ※現在は事業売却に伴い、サイトはクローズされています。以下は当時のキャプチャ画像です。
            </p>
            <ul>
              <li>
                <figure>
                  <Image
                    src="/touch-panel_top.png"
                    width="500"
                    height="800"
                    alt="screen-image"
                  />
                  <figcaption>・トップページ</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <Image
                    src="/touch-panel_about-item.png"
                    width="500"
                    height="800"
                    alt="screen-image"
                  />
                  <figcaption>・製品概要ページ</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <Image
                    src="/touch-panel_uservoice.png"
                    width="500"
                    height="800"
                    alt="screen-image"
                  />
                  <figcaption>・導入事例ページ</figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </SectionLayout>

        <SectionLayout styleName={styles.otherWorks}>
          <h2 className="section-title">Other Works</h2>
          <div className="contents">
            <WorksList />
          </div>
        </SectionLayout>
      </PageTransition>
    </main>
  );
};

export default myWork;
