import React from "react";
import Image from "next/image";
import * as motion from "framer-motion/client";

import SectionLayout from "@/components/SectionLayout";
import MyProfile from "@/components/MyProfile";
import PageTitle from "@/components/PageTitle";

import styles from "@/app/profile/profile.module.css";

export const metadata = {
  title: "Kitagawa Fumiaki Portfolio WebSite | Profile",
  description: "私のプロフィールをまとめたページです。",
};

const Profile = () => {
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

  const aboutMe = `1997年4月9日生まれの27歳で、滋賀県で生まれ育ちました。\n京都外国語専門学校卒業後は、興味があったWEB制作を学ぶためにTECH::EXPERTにてプログラミングの学習をしました。\n現在は株式会社ニューコムの営業企画部のウェブ担当として、主にWEBサイトの情報更新やページ作成、既存ページのリニューアルを担当しています。その他、年に数回開催されている展示会で使用する各種資料の準備や動画制作、ブーススタッフの業務も担当しています。\n日々の業務では、動画編集をはじめ、経験の無い仕事を担当する事もあるので、初めての事であっても、自身の経験になると捉えて、取り組んでいます。`;
  const titleText = "My Profile.";
  const myHistory = [
    {
      year: "2018.03",
      event: `京都外国語専門学校を卒業。\n2年生初め頃まで大学編入を考えていたが、手に職を付けて働きたい気持ちが湧き、関心があったデザインを学ぶために大阪デザイナー専門学校に入学することを決める。`,
    },
    {
      year: "2018.04",
      event: `大阪デザイナー専門学校に入学。`,
    },
    {
      year: "2018.09",
      event: `大阪デザイナー専門学校を中途退学。\n家庭の事情により、このまま学業を継続する事が難しく感じたため、退学。その後、専門学校の授業で興味を持った、WEBサイト制作の事を勉強してみようと思い「ドットインストール」などのオンライン教材を利用し、コーディングを学習し始める。`,
    },
    {
      year: "2019.04",
      event: `TECH::EXPERTに入学。\n独学で学習している中で、自分の書いたコードで画面を作って行ける楽しさを感じ、本格的にプログラミングを学びたいと思い入学を決める。`,
    },
    {
      year: "2019.10",
      event: "TECH::EXPERTのカリキュラムを修了し、就職活動を始める。",
    },
    {
      year: "2020.05",
      event: `東京にあるIT企業に就職予定だったが、新型コロナの影響により、入社時期の目処がたたない状況が続く。\nこの期間は、入社前研修でWEBフロントエンド開発の勉強をしながら過ごす。`,
    },
    {
      year: "2020.07",
      event:
        "入社の目処が立たない状況が続いたため、就職予定だった会社への入社を辞退する。",
    },
    {
      year: "2020.09",
      event: "地元で就職活動を再開する",
    },
    {
      year: "2021.03",
      event: "「総本家ゆどうふ 奥丹清水」で接客スタッフとして働き始める。",
    },
    {
      year: "2021.09",
      event:
        "このまま飲食店で働き続ける事に限界を感じ「総本家ゆどうふ奥丹清水」を退社。",
    },
    {
      year: "2022.03",
      event:
        "本来やりたかった、WEBサイト制作の仕事に挑戦したいと思い、就職活動を始める。",
    },
    {
      year: "2022.09",
      event: "株式会社ニューコムに就職が決まる。",
    },
    {
      year: "2023.01",
      event: "株式会社ニューコムの営業企画部で働き始める。",
    },
  ];

  return (
    <main id="top">
      <motion.div
        initial="initial" // 初期状態
        animate="in" // 表示状態
        exit="out" // 終了状態
        variants={pageVariants} // 定義したアニメーションを適用
        transition={pageTransition} // アニメーションの遷移
      >
        <SectionLayout styleName={"first-view"}>
          <PageTitle word={titleText} />
        </SectionLayout>

        <MyProfile
          profile={"profile"}
          aboutMe={aboutMe}
          personalInfo
          moreBtnShow={false}
        />

        <SectionLayout styleName={"skills"}>
          <h2 className="section-title">Skills</h2>

          <ul className={styles.contents}>
            <li className={styles.skill}>
              <figure>
                <figcaption className={styles.skillTitle}>
                  プログラミング
                </figcaption>
                <Image
                  src="/pc-programing.png"
                  width="250"
                  height="180"
                  alt="programing"
                  priority
                ></Image>
              </figure>
              <p className={styles.aboutSkills}>
                HTML/CSS、JavaScriptを使用してページを作成できます。また、PHPで申し込みフォーム等を作成できます。コードを書く際は、無駄な記述がなるべく無いように意識しています。また、ReactとNext.jsを学習しており、このポートフォリオサイトはReactとNext.jsを使って作成しています。
              </p>
              <div className={styles.tableWrapper}>
                <table className={styles.label}>
                  <tbody>
                    <tr>
                      <th className={styles.labelTitle}>使用言語:</th>
                      <td>HTML/CSS、JavaScript、PHP、 React、Next.js</td>
                    </tr>
                    <tr>
                      <th className={styles.labelTitle}>使用ツール:</th>
                      <td>Deamweaver、Visual Studio Code</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li className={styles.skill}>
              <figure>
                <figcaption className={styles.skillTitle}>デザイン</figcaption>
                <Image
                  src="/pc-desigin.png"
                  width="250"
                  height="180"
                  alt="desigin"
                  priority
                ></Image>
              </figure>
              <p className={styles.aboutSkills}>
                現職では主にillustratorを使用して、WEBデザインや資料作成を行なっています。まだまだ学習中の段階ですが、日頃から「SANKOU!」などのギャラリーサイトや教材を通して、WEBデザイン・アニメーションの勉強をしています。
              </p>
              <div className={styles.tableWrapper}>
                <table className={styles.label}>
                  <tbody>
                    <tr>
                      <th className={styles.labelTitle}>使用ツール:</th>
                      <td>Illustrator、InDesign、Figma</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </SectionLayout>

        <SectionLayout styleName={styles.history}>
          <h2 className="section-title">History</h2>
          <div className="contents">
            <ul className={styles.myHistory}>
              {myHistory.map((history, index) => {
                return (
                  <li key={index}>
                    <p className={styles.year}>{history.year}</p>
                    <div className={styles.timeLine}>
                      <div className={styles.circle}></div>
                      <div className={styles.line}></div>
                    </div>
                    <div className={styles.event}>{history.event}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </SectionLayout>
      </motion.div>
    </main>
  );
};

export default Profile;
