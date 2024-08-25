import React from "react";
import Image from "next/image";
import MoreBtn from "@/components/MoreBtn";

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
          </div>
          {props.moreBtnShow && <MoreBtn />}
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
