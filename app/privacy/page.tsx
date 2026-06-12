import { Metadata } from "next";
import { buildPageTitle } from "@/lib/utils";
import { MotionWrapper } from "../components/ui";
import PrivacyCard from "../components/cards/PrivacyCard";

export const metadata: Metadata = {
    title: buildPageTitle("Privacy Policy"),
    description:
      "Hands-on cybersecurity and cloud labs by Phatsimo Pheko — SIEM labs, OCI infrastructure, and security operations work.",
  };

export default function Privacy() {
    return (
        <div>
          <MotionWrapper>
            <PrivacyCard />
          </MotionWrapper>
        </div>
      );
}