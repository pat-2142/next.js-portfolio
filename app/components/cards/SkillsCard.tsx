import { skillsList } from "@/app/lib/data";
import { SectionWrapper } from "../layout";
import { ObjectCard } from "../ui";

export default function SkillsCard() {
    return (
        <SectionWrapper heading="TECHNICAL SKILLS">
            <ObjectCard>
                {skillsList.map((skill) => (
                    <div key={skill.id}>
                        <h3 className="font-bold">{skill.domain}</h3>
                        <li className="ml-6 list-desc">{skill.details}</li>
                    </div>
                ))}
            </ObjectCard>
        </SectionWrapper>
    );
}