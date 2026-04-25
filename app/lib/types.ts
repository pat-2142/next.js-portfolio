import { LinkProps } from "next/link";
import React from "react";

export interface CardProps {
  children: React.ReactNode;
}

export interface SectionWrapperProps {
  children: React.ReactNode;
  heading: string;
}

export interface ButtonProps {
    label: string;
    href: LinkProps["href"];
    download?: string;
    prefetch?: boolean;
    target?: string;
}

export interface ExperienceProps {
    id: number;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
}

export interface SkillProps {
    id: number;
    domain: string;
    details: string
}

export interface CertificateProps {
    id: number;
    title: string;
    description: string;
    tags: string[];
    link: string;
}

export interface TagProps {
    children: React.ReactNode;
}

export interface EducationProps {
    id: number;
    course: string;
    institute: string;
    startDate: string;
    endDate: string;
    content: string[];
}

export interface ProjectProps {
    id: number;
    title: string;
    imageSrc: string
    description: string;
    tags: string[];
    liveLink: string;
    repoLink: string;
}

export interface MotionProps {
    children: React.ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    className?: string;
};

export interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
};