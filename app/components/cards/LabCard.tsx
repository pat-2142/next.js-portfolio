import { SectionWrapper } from "../layout";
import { ObjectCard, PrimaryButton, Tag } from "../ui";
import { getWazuhLabs } from "@/lib/utils";
import { labSeriesList } from "@/lib/data";

export default function LabCard() {
    const wazuhLabs = getWazuhLabs();

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

/*{wazuhLabs.map((lab) => (
    <div  key={lab.slug} className="flex lg:max-w-93">
    <ObjectCard>
        <h3 className="font-bold text-center">{lab.frontmatter.title}</h3>
        <p>{lab.frontmatter.description}</p>
        <div className="flex gap-2 flex-wrap justify-center">
            <PrimaryButton label="VIEW ACTIVITY" href={`/labs/${lab.category}/${lab.slug}`} />
        </div>
    </ObjectCard>
</div>
))}*/