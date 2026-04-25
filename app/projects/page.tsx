import ProjectCard from "../components/cards/ProjectCard";
import MotionWrapper from "../components/ui/MotionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Labs & Projects',
  description:
    'Hands-on cybersecurity and cloud projects by Phatsimo Pheko — SIEM labs, OCI infrastructure, and security operations work.',
}

export default function Projects() {
    return (
        <div>
            <MotionWrapper><ProjectCard /></MotionWrapper>
        </div>
    );
}