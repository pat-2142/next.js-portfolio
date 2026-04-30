// projects/page.tsx — the Labs & Projects page.
// Exports its own metadata so Next.js can set a specific <title> for this route.
// Uses buildPageTitle from utils to keep the title format consistent with the
// template defined in layout.tsx ("%s | Phatsimo Pheko").
import ProjectCard from "../components/cards/ProjectCard";
import MotionWrapper from "../components/ui/MotionWrapper";
import { Metadata } from "next";
import { buildPageTitle } from "@/app/lib/utils";

export const metadata: Metadata = {
  title: buildPageTitle("Labs & Projects"),
  description:
    "Hands-on cybersecurity and cloud projects by Phatsimo Pheko — SIEM labs, OCI infrastructure, and security operations work.",
};

export default function Projects() {
  return (
    <div>
      <MotionWrapper>
        <ProjectCard />
      </MotionWrapper>
    </div>
  );
}
