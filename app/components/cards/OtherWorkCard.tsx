import { projectList } from "@/lib/data";
import { SectionWrapper } from "../layout";
import { ObjectCard, PrimaryButton, Tag } from "../ui";

export default function OtherWorkCard() {
    return (
        <SectionWrapper heading="OTHER WORK">
            <div className="flex flex-wrap gap-4">
                <p>
                    A small collection of work outside my core security focus — mostly software projects
                    that reflect the engineering side of what I do.
                </p>
                {projectList.map((project) => (
                    <div className="flex flex-wrap justify-start gap-4 lg:max-w-90" key={project.id}>
                        <ObjectCard>
                            <h3 className="font-bold text-center">{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="flex text-nowrap flex-wrap gap-2">
                                {project.tags.map((t, i) => (
                                    <Tag key={i}>{t}</Tag>
                                ))}
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                <PrimaryButton label="LIVE PROJECT" href={project.liveLink} target="_blank" />
                                <PrimaryButton label="VIEW REPO" href={project.repoLink} target="_blank" />
                            </div>
                        </ObjectCard>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}