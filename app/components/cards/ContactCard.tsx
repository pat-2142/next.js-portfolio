import { SectionWrapper } from "../layout";
import { ObjectCard } from "../ui";

export default function ContactCard() {
    return (
        <SectionWrapper heading="CONTACT">
            <ObjectCard>
                <p>I'm open to cybersecurity consultant roles, SOC analyst positions, and cloud security opportunities — locally in Botswana and remotely. Feel free to reach out via any of the channels below.</p>
                <ul className="ml-6">
                    <li className="list-disc">
                        Email: <a href="mailto:phatsimopheko11@gmail.com" className="underline hover:opacity-70">phatsimopheko11@gmail.com</a>
                    </li>
                    <li className="list-disc">
                        LinkedIn: <a href="https://linkedin.com/in/phatsimo-pheko-728bb6229" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">linkedin.com/in/phatsimo-pheko-728bb6229</a>
                    </li>
                    <li className="list-disc">
                        GitHub: <a href="https://github.com/pat-2142" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">github.com/pat-2142</a>
                    </li>
                    <li className="list-disc">
                        Portfolio: <a href="https://phatsimopheko.com" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">phatsimopheko.com</a>
                    </li>
                </ul>
            </ObjectCard>
        </SectionWrapper>
    );
}