import React from "react";
import Image from "next/image";
import MoreBtn from "@/components/MoreBtn";
import Link from "next/link";

const MyProfile = (props) => {
  return (
    <section className={`${props.profile} gray-back`}>
      <div className="inner">
        <h2 className="section-title">Profile</h2>
        <div className="contents">
          <div className="profile-icon">
            <Image
              src="/profileIcon.png"
              width={218}
              height={298}
              alt="プロフィールアイコン"
              priority
            />
          </div>
          <div className="text-box">
            <h3 className="my-name">
              <ruby>
                北川<rt>KITAGAWA</rt>
                史晃<rt>FUMIAKI</rt>
              </ruby>
            </h3>
            <p className="default-text">{props.aboutMe}</p>
            {props.personalInfo && (
              <div className="personal-info">
                <div className="text-box">
                  <h4>趣味</h4>
                  <p className="default-text">
                    ゲーム、アニメ鑑賞、音楽鑑賞、散策など
                  </p>
                </div>
                <div className="text-box">
                  <h4>SNS</h4>
                  <ul>
                    <li>
                      <Link href="https://github.com/fumiaki49" target="_blank">
                        <Image
                          src="/github-mark.png"
                          width={32}
                          height={32}
                          alt="githubアイコン"
                          priority
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          {props.moreBtnShow && <MoreBtn />}
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
