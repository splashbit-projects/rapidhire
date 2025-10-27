"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import Dots from "@/icons/Dots";

const Commitment = () => {
  return (
    <section className="commitment">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>A Commitment to Ethics and Social Responsibility</h2>
          <p>
            We believe businesses are responsible for contributing positively to
            society. Our commitment <br />
            to ethical practices and social responsibility is at the core of
            everything we do, ensuring that <br />
            our impact extends beyond just our clients to the wider community.
          </p>
        </motion.div>
        <div className="commitment__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <div>
              <img src="/images/home/arrow.svg" />
              <h3>Ethical HR Practices</h3>
              <p>
                Integrity is one of our core values. We are committed to
                conducting our business with the highest ethical standards,
                ensuring fairness, transparency, and respect in all our
                interactions. This commitment to ethics extends to the advice we
                provide our clients, helping them to foster inclusive, fair, and
                respectful workplace environments.
              </p>
            </div>
            <div>
              <img src="/images/home/arrow.svg" />
              <h3>Diversity and Inclusion Advocacy</h3>
              <p>
                We are passionate about promoting diversity and inclusion in the
                workplace. Our services include developing D&I strategies that
                not only meet regulatory requirements but also foster a culture
                where every employee feels valued and respected. By helping our
                clients build diverse teams, we contribute to creating more
                innovative, resilient, and successful businesses.
              </p>
            </div>
            <div>
              <img src="/images/home/arrow.svg" />
              <h3>Community Engagement</h3>
              <p>
                We believe in giving back to the communities in which we
                operate. Our team is actively involved in various community
                initiatives, from supporting local charities to participating in
                programs that provide education and employment opportunities to
                underrepresented groups. We encourage our clients to engage in
                similar initiatives, amplifying our collective impact.
              </p>
            </div>
            <div>
              <img src="/images/home/arrow.svg" />
              <h3>Sustainability Initiatives</h3>
              <p>
                We are committed to reducing our environmental footprint and
                promoting sustainable business practices. From minimising waste
                in our operations to advising clients on sustainable HR
                practices, we strive to make a positive impact on the
                environment. This includes encouraging the adoption of remote
                work policies, reducing paper use through digital documentation,
                and supporting green office initiatives.
              </p>
            </div>
            <div>
              <img src="/images/home/arrow.svg" />
              <h3>Corporate Social Responsibility Consulting</h3>
              <p>
                Besides our practices, we offer CSR consulting services to help
                our clients develop and implement their social responsibility
                strategies. These services include designing community
                engagement programs, developing ethical sourcing policies, and
                creating sustainability initiatives that align with their
                business goals.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
