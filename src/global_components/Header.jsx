"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import { usePathname } from "next/navigation";
import {Link as NavLink} from "@/i18n/navigation";
import LangSwitcher from "./LangSwitcher";
import { useLocale, useTranslations } from "next-intl";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();

  const t = useTranslations("header");

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
            <NavLink href="/" className="logo">
              {!menuOpened ? (
                <img src="/images/logo.svg" alt="logo" />
              ) : (
                <img src="/images/logo.svg" alt="logo" />
              )}
            </NavLink>

            <div className="header-right">
              <LangSwitcher locale={locale} />
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
              <NavLink href="/" className={pathname == "/" ? "active" : ""}>
                {t("home", {fallback: "Home"})}
              </NavLink>
              <NavLink
                href="/our-approach"
                className={pathname == "/our-approach" ? "active" : ""}
              >
                {t("ourApproach", {fallback: "Our Approach"})}
              </NavLink>
              <NavLink
                href="/retained-hr-support"
                className={pathname == "/retained-hr-support" ? "active" : ""}
              >
                {t("retainedHRSupport", {fallback: "Retained HR Support"})}
              </NavLink>
              <NavLink
                href="/hr-project-management"
                className={pathname == "/hr-project-management" ? "active" : ""}
              >
                {t("hrProjectManagement", {fallback: "HR Project Management"})}
              </NavLink>
              <NavLink
                href="/flexible-hr-consultancy"
                className={
                  pathname == "/flexible-hr-consultancy" ? "active" : ""
                }
              >
                {t("flexibleHRConsultancy", {fallback: "Flexible HR Consultancy"})}
              </NavLink>
              <NavLink
                href="/recruitment-assistance"
                className={
                  pathname == "/recruitment-assistance" ? "active" : ""
                }
              >
                {t("recruitmentAssistance", {fallback: "Recruitment Assistance"})}
              </NavLink>
            </div>
            <div className="right-col">
              <NavLink
                href="/training-development"
                className={pathname == "/training-development" ? "active" : ""}
              >
                {t("trainingDevelopment", {fallback: "Training & Development"})}
              </NavLink>
              <NavLink
                href="/hr-documentation"
                className={pathname == "/hr-documentation" ? "active" : ""}
              >
                {t("hrDocumentation", {fallback: "HR Documentation"})}
              </NavLink>
              <NavLink
                href="/guides-and-insights"
                className={pathname == "/guides-and-insights" ? "active" : ""}
              >
                {t("guidesAndInsights", {fallback: "Guides and insights"})}
              </NavLink>
              <NavLink
                href="/why-choose-us"
                className={pathname == "/why-choose-us" ? "active" : ""}
              >
                {t("whyChooseUs", {fallback: "Why choose us"})}
              </NavLink>
              <NavLink
                href="/get-in-touch"
                className={pathname == "/get-in-touch" ? "active" : ""}
              >
                {t("getInTouch", {fallback: "Get in touch"})}
              </NavLink>
              <NavLink href="/faq" className={pathname == "/faq" ? "active" : ""}>
                {t("faq", {fallback: "FAQ"})}
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
