"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/utils/animations";
import Dots from "@/icons/Dots";
import Image from "next/image";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

const CommitmentToInnovation = () => {
  return (
    <section className="commitment-to-innovation">
      <div className="_container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Dots />
          <h2>Commitment to Innovation</h2>
          <p>
            Innovation is key to staying competitive in an ever-evolving
            business landscape. At Rapid HR Connect, <br />
            we are deeply committed to integrating the latest advancements in HR
            technology and practices into <br />
            our services, ensuring that our clients always benefit from
            cutting-edge solutions.
          </p>
        </motion.div>
        <div className="commitment-to-innovation__body">
          <motion.div
            className="solution"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image src={"/images/why/CommitmentToInnovation.png"} fill />
          </motion.div>
          <div>
            <motion.div
              className="solution"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <Image
                width={24}
                height={24}
                src={"/images/why/icon4.svg"}
              />
              <h3>Advanced HR Technology</h3>
              <div>
                <p>
                  We leverage the latest HR technologies to enhance every aspect
                  of our services. From data analytics and automation to
                  AI-driven recruitment tools, our innovative use of technology
                  ensures that our clients receive efficient, accurate, and
                  effective HR support. This technological edge allows us to
                  streamline processes, reduce administrative burdens, and
                  provide deeper insights into workforce dynamics.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="solution"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <Image
                width={24}
                height={24}
                src={"/images/why/icon5.svg"}
              />
              <h3>Continuous Learning and Adaptation</h3>
              <div>
                <p>
                  The world of HR is constantly changing, and so are we. Our
                  team is dedicated to continuous professional development,
                  staying up-to-date with industry trends, legal requirements,
                  and technological advancements. This commitment to learning
                  ensures we can quickly adapt our strategies to meet new
                  challenges and capitalise on emerging opportunities.
                </p>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              className="solution"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <Image
                width={24}
                height={24}
                src={"/images/why/icon6.svg"}
              />
              <h3>Innovative Problem Solving</h3>
              <div>
                <p>
                  Our approach to HR challenges is rooted in creativity and
                  forward thinking. We don’t just follow industry standards; we
                  push the boundaries to find new and better ways to achieve
                  your HR goals. Whether developing new methodologies for talent
                  acquisition or creating unique employee engagement programs,
                  our innovation-driven mindset sets us apart from the
                  competition.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="solution"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <Image
                width={24}
                height={24}
                src={"/images/why/icon7.svg"}
              />
              <h3>Customised E-Learning Solutions</h3>
              <div>
                <p>
                  Understanding that every organisation has unique training
                  needs, we offer customised e-learning solutions that allow
                  employees to develop their skills at their own pace. These
                  solutions are designed to be engaging, accessible, and
                  tailored to your specific business objectives, fostering a
                  culture of continuous improvement within your organisation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentToInnovation;
