import { SectionWrapper } from "../layout";
import { ObjectCard, PrimaryButton } from "../ui";
import { getWazuhLabs } from "@/lib/utils";

export default function LabCard() {
    const wazuhLabs = getWazuhLabs();

    return (
        <SectionWrapper heading="WAZUH HOME LAB">
            {wazuhLabs.map((lab) => (
                <div className="flex flex-wrap gap-4 lg:max-w-100" key={lab.slug}>
                    <ObjectCard>
                        <h3 className="font-bold text-center">{lab.frontmatter.title}</h3>
                        <p>{lab.frontmatter.description}</p>
                        <div className="flex gap-2 flex-wrap justify-center">
                            <PrimaryButton label="VIEW ACTIVITY" href={`/labs/${lab.category}/${lab.slug}`} />
                        </div>
                    </ObjectCard>
                </div>
            ))}
        </SectionWrapper>
    );
}