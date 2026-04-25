import Image from "next/image";
import { SectionWrapper } from "../layout";
import { ImageWrapper, PrimaryButton, SecondaryButton } from "../ui";

export default function HeroCard() {
    return (
        <SectionWrapper heading="Cybersecurity Consultant | SIEM (Wazuh) | OCI Certified">
            <div className="flex flex-1 flex-col">
                <p>Cybersecurity consultant based in Botswana with hands-on experience in SOC operations, SIEM deployment, and cloud security. I manage endpoint monitoring using Wazuh, coordinate incident response workflows, and produce security analysis reports — including authoring the internal documentation that standardizes how those reports are structured. I hold three OCI 2025 certifications reflecting a deliberate focus on cloud security, and I'm actively building toward a career at the intersection of security operations and cloud infrastructure.</p>
                <div className="flex gap-3 mt-5">
                    <PrimaryButton label="GET IN TOUCH" href="/" />
                    <SecondaryButton label="VIEW PROJECTS" href="/projects" />
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <div className="relative w-64 h-64 md:w-96 md:h-96">
                    <Image
                        src="/images/headshot.jpeg"
                        alt="headshot"
                        fill
                        className="rounded-full ring-2 md:ring-5 ring-[#6366F1] object-cover"
                    />
                </div>
            </div>
        </SectionWrapper>
    );
}