"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Software engineer with a strong drive and initiative, I can work independently or with minimal guidance while following best practices. I have a solid background in programming analysis, application analysis and design, as well as proficiency in various development tools and languages. I also collaborate well with others and contribute to team success.
    </p>
    <p>

        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Java, Springboot, EJB, Jsp, React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with Agular. I am always looking to
        learn new technologies. 
      
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        documentaries, watching movies, and linstening to music. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
