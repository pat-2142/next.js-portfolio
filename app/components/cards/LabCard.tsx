import { SectionWrapper } from "../layout";
import { ObjectCard, PrimaryButton } from "../ui";
import { getWazuhLabs } from "@/lib/utils";

export default function LabCard() {
    const wazuhLabs = getWazuhLabs();

    return (
        <SectionWrapper heading="Building a Production-Grade SOC: A Wazuh Lab Series">
            <div className="flex flex-wrap gap-4">
                <p>
                    This series documents the process of building a production-grade SOC environment from the ground
                    up, one lab at a time, using Wazuh as the core SIEM platform. Each lab tackles a specific
                    component — from initial deployment and agent configuration through to detection engineering,
                    alerting, and incident response workflows — with the goal of assembling a fully functional,
                    realistic SOC by the end of the series. It's both a hands-on learning exercise and a working
                    demonstration of SOC architecture and operations.
                </p>
                {wazuhLabs.map((lab) => (
                    <div  key={lab.slug} className="flex lg:max-w-93">
                        <ObjectCard>
                            <h3 className="font-bold text-center">{lab.frontmatter.title}</h3>
                            <p>{lab.frontmatter.description}</p>
                            <div className="flex gap-2 flex-wrap justify-center">
                                <PrimaryButton label="VIEW ACTIVITY" href={`/labs/${lab.category}/${lab.slug}`} />
                            </div>
                        </ObjectCard>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}