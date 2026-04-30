// ContactCard — displays contact information and a short availability blurb.
// All links and labels come from the CONTACT constant so there's one place
// to update if an email address or social handle changes.
import { SectionWrapper } from "../layout";
import { ObjectCard } from "../ui";
import { CONTACT } from "@/app/lib/constants";

export default function ContactCard() {
  return (
    <SectionWrapper heading="CONTACT">
      <ObjectCard>
        <p>
          I'm open to cybersecurity consultant roles, SOC analyst positions, and
          cloud security opportunities — locally in Botswana and remotely. Feel
          free to reach out via any of the channels below.
        </p>
        <ul className="ml-6">
          <li className="list-disc">
            Email:{" "}
            <a href={`mailto:${CONTACT.email}`} className="underline hover:opacity-70">
              {CONTACT.email}
            </a>
          </li>
          <li className="list-disc">
            LinkedIn:{" "}
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">
              {CONTACT.linkedinLabel}
            </a>
          </li>
          <li className="list-disc">
            GitHub:{" "}
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">
              {CONTACT.githubLabel}
            </a>
          </li>
          <li className="list-disc">
            Portfolio:{" "}
            <a href={CONTACT.portfolio} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">
              {CONTACT.portfolio}
            </a>
          </li>
        </ul>
      </ObjectCard>
    </SectionWrapper>
  );
}
