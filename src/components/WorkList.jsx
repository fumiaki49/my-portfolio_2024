"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

const WorksList = () => {
  const cardArry = [
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
    {
      href: "/works/dbsheet/",
      src: "/dbsheet.png",
      alt: "dbsheet",
      workTitle: "株式会社ニューコム | dbSheetClient製品紹介サイト",
    },
    {
      href: "/works/soutaiya_kawahara/",
      src: "/soutaiya_kawahara.png",
      alt: "soutaiya_kawahara",
      workTitle: "掃苔屋かわはら サービス紹介サイト",
    },
  ];

  const pathname = usePathname();

  return (
    <ul className="work-list">
      {cardArry.map((work) => {
        return (
          work.href !== pathname && (
            <li key={work.alt}>
              <Link href={work.href}>
                <figure className="thumbnail">
                  <Image
                    src={work.src}
                    width={1280}
                    height={850}
                    alt={work.alt}
                    priority
                  />
                </figure>
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
