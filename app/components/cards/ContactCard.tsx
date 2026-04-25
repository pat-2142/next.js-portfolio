import { SectionWrapper } from "../layout";
import { ObjectCard } from "../ui";

export default function ContactCard() {
    return (
        <SectionWrapper heading="CONTACT">
            <ObjectCard>
                <p>I'm open to cybersecurity consultant roles, SOC analyst positions, and cloud security opportunities — locally in Botswana and remotely. Feel free to reach out via any of the channels below.</p>
                <ul className="ml-6">
                    <li className="list-disc">Email: phatsimopheko11@gmail.com</li>
                    <li className="list-disc">LinkedIn: linkedin.com/in/phatsimo-pheko-728bb6229</li>
                    <li className="list-disc">GitHub: github.com/pat-2142</li>
                    <li className="list-disc">Portfolio: phatsimopheko.com</li>
                </ul>
            </ObjectCard>
        </SectionWrapper>
    );
}