"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
    <>
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
      <div className={`menu-wrap ${menuOpened ? "opened" : ""}`}>
        <div className="_container">
          <nav>
            <div className="left-col">
              <Link href="/">Home</Link>
              <Link href="/our-approach">Our approach</Link>
              <Link href="/retained-hr-support">Retained HR Support</Link>
              <Link href="/hr-project-management">HR Project Management</Link>
              <Link href="/flexible-hr-consultancy">
                Flexible HR Consultancy
              </Link>
              <Link href="/recruitment-assistance">Recruitment Assistance</Link>
            </div>
            <div className="right-col">
              <Link href="/training-development">Training & Development</Link>
              <Link href="/hr-documentation">HR Documentation</Link>
              <Link href="/guides-and-insights">Guides and insights</Link>
              <Link href="/why-choose-us">Why choose us</Link>
              <Link href="/get-in-touch">Get in touch</Link>
              <Link href="/faq">FAQ</Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
