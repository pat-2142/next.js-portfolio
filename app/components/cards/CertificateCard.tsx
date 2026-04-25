import { certificateList } from "@/app/lib/data";
import { SectionWrapper } from "../layout";
import { ObjectCard, PrimaryButton } from "../ui";
import Tag from "../ui/Tag";

export default function CertificateCard() {
    return (
        <SectionWrapper heading="CERTIFICATIONS">
            {certificateList.map((certificate) => (
                <div className="flex flex-wrap justify-start gap-4 lg:max-w-120" key={certificate.id}>
                    <ObjectCard>
                        <h3 className="font-bold">{certificate.title}</h3>
                        <p>{certificate.description}</p>
                        <div className="flex text-nowrap flex-wrap gap-2">
                            {certificate.tags.map((t, i) => (
                                <Tag key={i}>
                                    <label>{t}</label>
                                </Tag>
                            ))}
                        </div>
                        <div className="py-2">
                            <PrimaryButton label="VIEW CERTIFICATE" target="_blank" href={certificate.link} />
                        </div>
                        
                    </ObjectCard>
                </div>
            ))}
        </SectionWrapper>
    );
}