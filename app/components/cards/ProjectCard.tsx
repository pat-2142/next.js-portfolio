import { projectList } from "@/app/lib/data";
import { SectionWrapper } from "../layout";
import { ImageWrapper, ObjectCard, PrimaryButton } from "../ui";
import Image from "next/image";
import Tag from "../ui/Tag";

export default function ProjectCard() {
    return (
        <SectionWrapper heading="PROJECTS">
            {projectList.map((project) => (
                <div className="flex flex-wrap gap-4 lg:max-w-100" key={project.id}>
                    <ObjectCard>
                        <h3 className="font-bold text-center">{project.title}</h3>
                        <div className="flex justify-center rounded-4xl">
                            <ImageWrapper width={280} height={200} src={project.imageSrc} alt="Project Thumnail" className="rounded-2xl" />
                        </div>
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
        </SectionWrapper>
    );
}