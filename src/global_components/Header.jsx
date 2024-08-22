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
    console.log("pathname: " + pathname);
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
              <Link href="/" className={pathname == "/" ? "active" : ""}>
                Home
              </Link>
              <Link
                href="/our-approach"
                className={pathname == "/our-approach" ? "active" : ""}
              >
                Our approach
              </Link>
              <Link
                href="/retained-hr-support"
                className={pathname == "/retained-hr-support" ? "active" : ""}
              >
                Retained HR Support
              </Link>
              <Link
                href="/hr-project-management"
                className={pathname == "/hr-project-management" ? "active" : ""}
              >
                HR Project Management
              </Link>
              <Link
                href="/flexible-hr-consultancy"
                className={
                  pathname == "/flexible-hr-consultancy" ? "active" : ""
                }
              >
                Flexible HR Consultancy
              </Link>
              <Link
                href="/recruitment-assistance"
                className={
                  pathname == "/recruitment-assistance" ? "active" : ""
                }
              >
                Recruitment Assistance
              </Link>
            </div>
            <div className="right-col">
              <Link
                href="/training-development"
                className={pathname == "/training-development" ? "active" : ""}
              >
                Training & Development
              </Link>
              <Link
                href="/hr-documentation"
                className={pathname == "/hr-documentation" ? "active" : ""}
              >
                HR Documentation
              </Link>
              <Link
                href="/guides-and-insights"
                className={pathname == "/guides-and-insights" ? "active" : ""}
              >
                Guides and insights
              </Link>
              <Link
                href="/why-choose-us"
                className={pathname == "/why-choose-us" ? "active" : ""}
              >
                Why choose us
              </Link>
              <Link
                href="/get-in-touch"
                className={pathname == "/get-in-touch" ? "active" : ""}
              >
                Get in touch
              </Link>
              <Link href="/faq" className={pathname == "/faq" ? "active" : ""}>
                FAQ
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
