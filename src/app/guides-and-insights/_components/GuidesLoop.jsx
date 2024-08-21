import React from "react";
import PostCard from "./PostCard";

const GuidesLoop = () => {
  return (
    <section className="guides-loop">
      <div className="_container">
        <div className="guides-loop__body">
          <PostCard
            slug={
              "maximising-employee-engagement-strategies-for-a-thriving-workplace"
            }
          />
          <PostCard
            slug={
              "navigating-the-challenges-of-recruitment-in-a-competitive-market"
            }
          />
          <PostCard
            slug={
              "the-importance-of-compliance-staying-ahead-of-hr-regulations"
            }
          />
          <PostCard
            slug={
              "developing-leadership-skills-building-a-stronger-future-for-your-business"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default GuidesLoop;
