"use client";
import React, { useEffect, useState } from 'react';
import "@/styles/header.scss";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname();

  const menuOpen = () => {
    setMenuOpened(!menuOpened);
    document.body.classList.toggle("no-scroll", !menuOpened);
  };

  useEffect(() => {
    setMenuOpened(false);
    document.body.classList.remove("no-scroll");
  }, [pathname]);

  return (
    <header className={`${menuOpened && "menu-opened"}`}>
        <div className="_container">
          <div className="header-row">
            <Link href="/" className="logo">
              {!menuOpened ? (
                <img src="/images/logo.svg" alt="logo" />
              ) : (
                <img src="/images/logo.svg" alt="logo" />
              )}
            </Link>

            <div className="header-right">

            <span onClick={() => menuOpen()} className="menu-btn">
                  {!menuOpened ? (
                    <img src="/images/menu-buger.svg" alt="menu-buger" />
                  ) : (
                    <img alt="logo" src="/images/burger-close.svg" />
                  )}
                </span>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header