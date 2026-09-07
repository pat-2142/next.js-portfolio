import Image from "next/image";
import { SectionWrapper } from "../layout";
import { PrimaryButton, SecondaryButton } from "../ui";

export default function HeroCard() {
    return (
        <SectionWrapper heading="SOC Analyst | Security Operations & SIEM (Wazuh) | Detection Engineering | OCI Certified">
            <div className="flex flex-1 flex-col min-w-0">
                <p>SOC analyst based in Botswana. I run day-to-day security operations for an enterprise client environment of 82 endpoints processing 800,000–900,000 security events daily through Wazuh — owning L1 triage and escalation, acting as the primary client-facing contact alongside an offshore L2/L3 team, and producing the daily, weekly and monthly SecOps reporting. I wrote the internal standard for that reporting and automated it in Python, cutting production time by around 70%.</p>
                <p className="mt-4">Alongside that I publish a detection engineering lab series built on my own Wazuh deployment — engineering Windows telemetry with Sysmon and PowerShell logging, writing custom correlation rules mapped to MITRE ATT&amp;CK, tuning out false positives, and auditing what those detections actually cover rather than what they claim to. Three OCI 2025 certifications and a software engineering background shape where I&apos;m heading: cloud security engineering, at the intersection of detection and infrastructure.</p>
                <div className="flex gap-3 mt-5">
                    <PrimaryButton label="LINKEDIN" href="https://linkedin.com/in/phatsimo-pheko-728bb6229" target="_blank" />
                    <SecondaryButton label="VIEW LABS" href="/labs" />
                </div>
            </div>
            <div className="flex flex-1 shrink-0 items-center justify-center">
                <div className="relative w-64 h-64 md:w-96 md:h-96">
                    <Image
                        src="/images/headshot.jpg"
                        alt="Phatsimo Pheko"
                        fill
                        sizes="(min-width: 768px) 384px, 256px"
                        className="rounded-full ring-2 md:ring-5 ring-[#6366F1] object-cover"
                    />
                </div>
            </div>
        </SectionWrapper>
    );
}