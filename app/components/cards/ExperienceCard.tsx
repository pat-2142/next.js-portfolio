import { experienceList } from "@/app/lib/data";
import { SectionWrapper } from "../layout";
import { ObjectCard } from "../ui";

export default function ExperienceCard() {
    return (
        <SectionWrapper heading="PROFESSIONAL EXPERIENCE">
            <div className="flex flex-col w-full gap-6">
                {experienceList.map((experience) => (
                    <div key={experience.id}>
                        <ObjectCard>
                            <h3 className="font-bold">{experience.title} | {experience.company} - {experience.location} | {experience.startDate} - {experience.endDate}</h3>
                            <p className="font-bold">Responsibilities:</p>
                            <ul className="ml-6">
                                {experience.responsibilities.map((r, i) => (
                                    <li className="list-disc" key={i}>{r}</li>
                                ))}
                            </ul>
                        </ObjectCard>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}