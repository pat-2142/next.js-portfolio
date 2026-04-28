// ExperienceCard — lists all work experience entries from data.ts.
// Each entry is rendered in its own ObjectCard with a formatted date range
// produced by the formatDateRange util, keeping the heading template DRY.
import { experienceList } from "@/app/lib/data";
import { formatDateRange } from "@/app/lib/utils";
import { SectionWrapper } from "../layout";
import { ObjectCard } from "../ui";

export default function ExperienceCard() {
  return (
    <SectionWrapper heading="PROFESSIONAL EXPERIENCE">
      <div className="flex flex-col w-full gap-6">
        {experienceList.map((experience) => (
          <div key={experience.id}>
            <ObjectCard>
              <h3 className="font-bold">
                {experience.title} | {experience.company} - {experience.location} |{" "}
                {formatDateRange(experience.startDate, experience.endDate)}
              </h3>
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
