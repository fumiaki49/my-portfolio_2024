"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

const WorksList = () => {
  const cardArry = [
    {
      href: "/works/dbsheet/",
      src: "/dbsheet.png",
      alt: "dbsheet",
      workTitle: "株式会社ニューコム | dbSheet製品紹介サイト",
    },
    {
      href: "/works/soutaiya_kawahara/",
      src: "/soutaiya_kawahara.png",
      alt: "soutaiya_kawahara",
      workTitle: "掃苔屋かわはら サービス紹介サイト",
    },
    {
      href: "/works/llsensor/",
      src: "/llsensor.png",
      alt: "llsensor",
      workTitle: "株式会社ニューコム | LLsensor製品紹介サイト",
    },
    {
      href: "/works/touchpanel/",
      src: "/touchpanel.png",
      alt: "touchpanel",
      workTitle: "株式会社ニューコム | カメラ方式タッチパネル製品紹介サイト",
    },
  ];

  const pathname = usePathname();

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <ul className="work-list">
      {cardArry.map((work) => {
        return (
          work.href !== pathname && (
            <li key={work.alt}>
              <Link href={work.href}>
                <div className="thumbnail">
                  <Image
                    src={work.src}
                    width={1280}
                    height={850}
                    alt={work.alt}
                    className={`${isImageLoaded ? "removeBlur" : "blur"}`}
                    onLoad={() => setIsImageLoaded(true)}
                  />
                </div>
                <p className="work-title">{work.workTitle}</p>
              </Link>
              <div className="label-box">
                <p className="label">Design</p>
                <p className="label">Coding</p>
              </div>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default WorksList;
