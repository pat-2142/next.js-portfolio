import { skillsList } from "@/lib/data";
import { SectionWrapper } from "../layout";
import { ObjectCard, Tag } from "../ui";

export default function SkillsCard() {
    return (
        <SectionWrapper heading="TECHNICAL SKILLS">
            <ObjectCard>
                {skillsList.map((skill) => (
                    <div key={skill.id}>
                        <h3 className="font-bold">{skill.domain}</h3>
                        <div className="flex text-nowrap flex-wrap gap-2">
                            {skill.details.map((s, i) => (
                                <Tag key={i}>
                                    <label>{s}</label>
                                </Tag>
                            ))}
                        </div>
                    </div>
                ))}
            </ObjectCard>
        </SectionWrapper>
    );
}