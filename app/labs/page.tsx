import { Metadata } from "next";
import { buildPageTitle } from "@/lib/utils";
import { MotionWrapper } from "../components/ui";
import LabCard from "../components/cards/LabCard";

export const metadata: Metadata = {
    title: buildPageTitle("Labs"),
    description:
      "Hands-on cybersecurity and cloud labs by Phatsimo Pheko — SIEM labs, OCI infrastructure, and security operations work.",
  };

export default function Labs() {
    return (
        <div>
          <MotionWrapper>
            <LabCard />
          </MotionWrapper>
        </div>
      );
}