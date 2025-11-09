"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Dots from "@/icons/Dots";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ClientCollaboration = () => {
  const t = useTranslations("ourApproach.clientCollaboration");

  return (
    <>
      <section className="client-collaboration-top">
        <div className="_container">
          <div className="client-collaboration-top__body">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("title", {fallback: "Client Collaboration"})}
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("text", {fallback: "We believe that the best results come from a true partnership. Our collaborative approach ensures that our clients are not just customers but integral members of the HR solution process."})}
            </motion.p>
          </div>
        </div>
      </section>
      <section className="client-collaboration-bottom">
        <div className="_container">
          <div className="client-collaboration-bottom__body">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div
                className="img"
                style={{ backgroundImage: "url(/images/approach/client1.png)" }}
              ></div>
              <div className="info">
                <h3>{t("items.0.title", {fallback: "Proactive Management"})}</h3>
                <h4>
                  {t("items.0.subtitle", {fallback: "Join forces with Rapid HR Connect — let's achieve success together."})}
                </h4>
                <p>
                  {t("items.0.text", {fallback: "We don't see ourselves as just another service provider; we consider ourselves an extension of your team. By immersing ourselves in your company culture and working side-by-side with your leadership, we ensure our strategies perfectly align with your business goals. Transparency and open communication are at the heart of this partnership. From the initial consultation to the final implementation, we keep you informed every step of the way, ensuring you're fully engaged in the process."})}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div
                className="img"
                style={{ backgroundImage: "url(/images/approach/client2.png)" }}
              ></div>
              <div className="info">
                <h3>{t("items.1.title", {fallback: "Feedback Loops"})}</h3>
                <h4>
                  {t("items.1.subtitle", {fallback: "Your voice matters: shaping the future of your HR hand in hand."})}
                </h4>
                <p>
                  {t("items.1.text", {fallback: "Your insights are invaluable. Continuous improvement is crucial to success, so we've established regular feedback loops to refine and enhance our strategies. We actively seek your input, using it to adjust our approach and ensure that our HR solutions continue to meet your evolving needs. This ongoing dialogue helps us stay agile, responsive, and aligned with your business objectives."})}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientCollaboration;
