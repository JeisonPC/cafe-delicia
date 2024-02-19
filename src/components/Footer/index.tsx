"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { comforter_Brush } from "@/app/fonts";
import styles from "./styles.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
  faSpotify,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const FooterContainer = styled.div`
  background-color: #301c03;
  color: #fdf4e7;
`;

function Footer() {
  return (
    <>
      <FooterContainer>
        <section className="border-b	px-6 lg:px-52 flex flex-col lg:flex-row gap-16 pt-32	pb-16	">
          <div className="gap-4 flex flex-col lg:w-1/2">
            <div className="flex gap-8 text-2xl	">
              <Image
                src="/logo-white.png"
                alt="header Logo"
                width={128}
                height={128}
                priority={false}
              />
              <div className="flex gap-0.5 items-center">
                <span className={styles.brandCafe}>Café</span>
                <span className={comforter_Brush.className}>delicia</span>
              </div>
            </div>
            <p className="text-5xl	">
              El secreto de un café rico es tomarselo entre{" "}
              <span className={comforter_Brush.className}>amigos</span>
            </p>
          </div>
          <div className="flex flex-col gap-8 lg:items-end lg:w-1/2 lg:justify-center">
            <div className="flex flex-col gap-4 lg:justify-center">
              <Link className="text-start" href="/nosotros">
                Nosotros
              </Link>

              <Link href="/cafe">Café</Link>

              <Link href="/panaderia">Panadería</Link>
              <Link href="/bistro">Bistro</Link>
              <Link href="/testimonios">Testimonios</Link>
              <Link href="/historia">Historia</Link>
              <Link href="/contacto">Contacto</Link>
            </div>
          </div>
        </section>
        <section className="lg:px-52 lg:justify-start lg:w-1/2 py-16	px-8 flex gap-8 text-2xl	justify-between		">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faSpotify} />
        </section>
      </FooterContainer>
    </>
  );
}

export default Footer;
