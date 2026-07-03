// projects/page.tsx — the Labs & Projects page.
// Exports its own metadata so Next.js can set a specific <title> for this route.
// Uses buildPageTitle from utils to keep the title format consistent with the
// template defined in layout.tsx ("%s | Phatsimo Pheko").
import OtherWorkCard from "../components/cards/OtherWorkCard";
import MotionWrapper from "../components/wrappers/MotionWrapper";
import { Metadata } from "next";
import { buildPageTitle } from "@/lib/utils";

export const metadata: Metadata = {
  title: buildPageTitle("Other Work"),
  description:
    "Hands-on cybersecurity and cloud projects by Phatsimo Pheko — SIEM labs, OCI infrastructure, and security operations work.",
};

export default function OtherWork() {
  return (
    <div>
      <MotionWrapper>
        <OtherWorkCard />
      </MotionWrapper>
    </div>
  );
}
