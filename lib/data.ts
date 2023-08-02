import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import ss from "@/public/ss.jpg";
import quizzie from "@/public/quizzie.jpg";
import banking from "@/public/banking.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Java Software Engineer",
    location: "Convergenc3, Pretoria",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Maphori Express, Polokwane",
    description:
      "I'm now a full-stack developer working while also studying for my . My stack includes Java, React, TypeScript, Tailwind and MongoDB.",
    icon: React.createElement(FaReact),
    date: "2018 - 2023",
  },
  {
    title: "Bsc Computer Science",
    location: "Univeristy of Limpopo, Polokwane",
    description: "I studied computer science and graduated in 2022.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2022",
  },
 
] as const;

export const projectsData = [
  {
    title: "Social Simulator",
    description:
      "I worked on A Full stack application that simulated social activities and also allowed tracking of movements on maps and real-time communication.",
    tags: ["Java", "Springboot","Kafka", "Micro-Service", "sockets.io","React", "MongoDB", "Tailwind"],
    imageUrl: ss,
  },
  {
    title: "Banking Dashboard",
    description:
      "This is a banking dashboard that allows users to view their transactions, subscriptions and more.",
    tags: ["Next.js", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: banking,
  },
  {
    title: "Quizzie",
    description:
      "This is a quiz application that allows users to create quizzes and share them with their friends.",
    tags: ["Angular", "firebase", "css", "html"],
    imageUrl: quizzie,
  },
] as const;

export const skillsData = [
  "Java",
  "Springboot",
  "EJB",
  "JPA",
  "Hibernate",
  "JSP",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
