import { SectionWrapper } from "../layout";
import { ObjectCard, PrimaryButton, Tag } from "../ui";
import { labSeriesList } from "@/lib/data";

export default function LabCard() {
    return (
        <SectionWrapper heading="LABS">
            <div className="flex flex-wrap gap-4">
                <p>
                    This page documents hands-on labs from my personal home lab environment, where I build, break, and
                    secure infrastructure to sharpen my practical skills across security operations, monitoring, and
                    cloud platforms. Each series follows a specific tool or technology, walking through real configuration,
                    troubleshooting, and analysis rather than just theory.
                </p>
                {labSeriesList.map((labSeries) => (
                <div className="flex flex-wrap justify-start gap-4 lg:max-w-142" key={labSeries.id}>
                    <ObjectCard>
                        <h3 className="font-bold">{labSeries.title}</h3>
                        <p>{labSeries.description}</p>
                        <div className="flex text-nowrap flex-wrap gap-2">
                            {labSeries.tags.map((t, i) => (
                                <Tag key={i}>
                                    <label>{t}</label>
                                </Tag>
                            ))}
                        </div>
                        <div className="py-2">
                            <PrimaryButton label="VIEW LABS" href={labSeries.link} />
                        </div>
                        
                    </ObjectCard>
                </div>
            ))}
            </div>
        </SectionWrapper>
    );
}