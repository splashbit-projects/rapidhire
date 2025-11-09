import React from "react";
import "@/styles/footer.scss";
import Link from "next/link";
import {Link as NavLink} from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="foot-top">
        <div className="_container">
          <div>
            <NavLink href="/" className="logo">
              <img src="/images/logo-white.svg" width={235} alt="logo" />
            </NavLink>
            <p>
              {t("title.0", {fallback: "Rapid HR Connect: tailored HR"})}<br />
              {t("title.1", {fallback: "solutions for your business"})}
            </p>
            <div className="address">
              <div>
                {t("registeredAddress", {fallback: "Registered address: Rooms 1703-1704, 17/F Tung Chiu Comm Ctr, 193 Lockhart Rd, Wan Chai, Hong Kong"})}
              </div>
              {/*<div>
                Office address: Office number 245, 8/FL, 28 Yee Wo St Causeway
                Bay, Hong Kong
              </div> */}
              <div>
                {t("email", {fallback: "Email:"})}{" "}
                <Link href="mailto:info@rapidhrconnect.com">
                  info@rapidhrconnect.com
                </Link>
              </div>
              <div>
                {t("phone", {fallback: "Phone:"})}{' '}<Link href="tel:+85230011568">+85230011568</Link>
              </div>
            </div>
          </div>
          <div>
            <span></span>
            <NavLink href="/retained-hr-support">{t("services.0", {fallback: "Retained HR Support"})}</NavLink>
            <NavLink href="/hr-project-management">{t("services.1", {fallback: "HR Project Management"})}</NavLink>
            <NavLink href="/flexible-hr-consultancy">{t("services.2", {fallback: "Flexible HR Consultancy"})}</NavLink>
            <NavLink href="/recruitment-assistance">{t("services.3", {fallback: "Recruitment Assistance"})}</NavLink>
            <NavLink href="/training-development">{t("services.4", {fallback: "Training & Development"})}</NavLink>
            <NavLink href="/hr-documentation">{t("services.5", {fallback: "HR Documentation"})}</NavLink>
          </div>
          <div>
            <span></span>
            <NavLink href="/our-approach">{t("links.0", {fallback: "Our approach"})}</NavLink>
            <NavLink href="/guides-and-insights">{t("links.1", {fallback: "Guides and insights"})}</NavLink>
            <NavLink href="/why-choose-us">{t("links.2", {fallback: "Why choose us"})}</NavLink>
            <NavLink href="/get-in-touch">{t("links.3", {fallback: "Get in touch"})}</NavLink>
            <NavLink href="/faq">{t("links.4", {fallback: "FAQ"})}</NavLink>
          </div>
          <div>
            <span></span>
            <NavLink href="/terms-and-conditions">{t("policies.0", {fallback: "Terms and Conditions"})}</NavLink>
            <NavLink href="/privacy-policy">{t("policies.1", {fallback: "Privacy Policy"})}</NavLink>
            <NavLink href="/cookie-policy">{t("policies.2", {fallback: "Cookie Policy"})}</NavLink>
            <NavLink href="/refund-policy">{t("policies.3", {fallback: "Refund Policy"})}</NavLink>
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="_container">
          <span>© {currentYear} Rapidhire LTD. {t("copyright", {fallback: "All Rights Reserved."})}</span>

          <div className="soc">
            <Link
              href="https://www.instagram.com/rapidhrconnectcom"
              target="_blank"
            >
              <img src="/images/Instagram_foot.svg" />
            </Link>
            <Link
              href="https://x.com/rapidhrconnect"
              target="_blank"
            >
              <img src="/images/X_foot.svg" />
            </Link>
            <Link
            href="https://www.linkedin.com/company/rapid-hr-connect/"
            target="_blank"
          >
            <img src="/images/linkedin_foot.svg" />
          </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
