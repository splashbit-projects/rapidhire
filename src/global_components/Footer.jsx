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
            <Link href="/">
              <img src="/images/logo-white.svg" alt="logo" />
            </Link>
            <p>
              Rapid HR Connect: tailored HR <br />
              solutions for your business
            </p>
            <div className="address">
              <div>Registered address:</div>
              <div>Office address:</div>
              <div>Email:</div>
              <div>Phone:</div>
            </div>
          </div>
          <div>
            <span></span>
            <Link href="#">Retained HR Support</Link>
            <Link href="#">HR Project Management</Link>
            <Link href="#">Flexible HR Consultancy</Link>
            <Link href="#">Recruitment Assistance</Link>
            <Link href="#">Training & Development</Link>
            <Link href="#">HR Documentation</Link>
          </div>
          <div>
            <span></span>
            <Link href="/our-approach">Our approach</Link>
            <Link href="#">Guides and insights</Link>
            <Link href="#">Why choose us</Link>
            <Link href="#">Get in touch</Link>
            <Link href="#">FAQ HR</Link>
          </div>
          <div>
            <span></span>
            <Link href="#">Terms and Conditions</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Cookie Policy</Link>
            <Link href="#">Refund Policy</Link>
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="_container">
          © {currentYear} Rapid HR Connect. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
