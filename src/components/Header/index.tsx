"use client";
import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";
import { comforter_Brush } from "@/app/fonts";
import Link from "next/link";

const HeaderContainer = styled.div`
  background-color: rgba(29, 29, 29, 0.6);
  border-radius: 50px;
  color: white;
  padding: 14px 44px;
  width: calc(100% - 20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
  position: fixed;
  top: 52px;
  margin: 0 10px;
  z-index: 10;
`;
const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <div className="flex gap-2">
          <Image
            src="/logo-white.png"
            alt="header Logo"
            width={44}
            height={44}
            priority={true}
          />
          <div className="flex gap-0.5 items-center">
            <span className={styles.brandCafe}>Café</span>
            <span className={comforter_Brush.className}>delicia</span>
          </div>
        </div>
      </Link>

      <FontAwesomeIcon icon={faBars} className="text-4xl" />
    </HeaderContainer>
  );
};

export default Header;
