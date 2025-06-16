import React from "react";
import "@/styles/footer.scss";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="foot-top">
        <div className="_container">
          <div>
            <Link href="/" className="logo">
              <img src="/images/logo-white.svg" width={235} alt="logo" />
            </Link>
            <p>
              Rapid HR Connect: tailored HR <br />
              solutions for your business
            </p>
            <div className="address">
              <div>
                Registered address: Rooms 1703-1704, 17/F Tung Chiu Comm Ctr,
                193 Lockhart Rd, Wan Chai, Hong Kong
              </div>
              {/*<div>
                Office address: Office number 245, 8/FL, 28 Yee Wo St Causeway
                Bay, Hong Kong
              </div> */}
              <div>
                Email:{" "}
                <Link href="mailto:info@rapidhrconnect.com">
                  info@rapidhrconnect.com
                </Link>
              </div>
              <div>
                Phone: <Link href="tel:+85230011568">+85230011568</Link>
              </div>
            </div>
          </div>
          <div>
            <span></span>
            <Link href="/retained-hr-support">Retained HR Support</Link>
            <Link href="/hr-project-management">HR Project Management</Link>
            <Link href="/flexible-hr-consultancy">Flexible HR Consultancy</Link>
            <Link href="/recruitment-assistance">Recruitment Assistance</Link>
            <Link href="/training-development">Training & Development</Link>
            <Link href="/hr-documentation">HR Documentation</Link>
          </div>
          <div>
            <span></span>
            <Link href="/our-approach">Our approach</Link>
            <Link href="/guides-and-insights">Guides and insights</Link>
            <Link href="/why-choose-us">Why choose us</Link>
            <Link href="/get-in-touch">Get in touch</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          <div>
            <span></span>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="_container">
          <span>© {currentYear} Rapidhire LTD. All Rights Reserved.</span>

          <div className="soc">
            <Link
              href="https://www.instagram.com/rapidhrconnectcom"
              target="_blank"
            >
              <img src="/images/Instagram_foot.svg" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
