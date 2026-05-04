import Image from "next/image";
import { SectionWrapper } from "../layout";
import { PrimaryButton, SecondaryButton } from "../ui";

export default function HeroCard() {
    return (
        <SectionWrapper>
            <div className="flex flex-1 flex-col">
                <h1 className="font-bold text-lg md:text-2xl pb-2" style={{ color: '#E8EDF5' }}>Cybersecurity Consultant | SIEM (Wazuh) | OCI Certified</h1>
                <p>Cybersecurity consultant based in Botswana with hands-on experience in SOC operations, SIEM deployment, and cloud security. I manage endpoint monitoring using Wazuh, coordinate incident response workflows, and produce security analysis reports — including authoring the internal documentation that standardizes how those reports are structured. I hold three OCI 2025 certifications reflecting a deliberate focus on cloud security, and I'm actively building toward a career at the intersection of security operations and cloud infrastructure.</p>
                <div className="flex gap-3 mt-5">
                    <PrimaryButton label="LINKEDIN" href="https://linkedin.com/in/phatsimo-pheko-728bb6229" target="_blank" />
                    <SecondaryButton label="VIEW PROJECTS" href="/projects" />
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <div className="relative w-64 h-64 md:w-96 md:h-96">
                    <Image
                        src="/images/headshot.jpg"
                        alt="headshot"
                        fill
                        className="rounded-full ring-2 md:ring-5 ring-[#6366F1] object-cover"
                    />
                </div>
            </div>
        </SectionWrapper>
    );
}