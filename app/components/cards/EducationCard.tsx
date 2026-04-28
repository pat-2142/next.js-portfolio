// EducationCard — lists all education entries from data.ts.
// Uses formatDateRange for the date span in each heading, consistent
// with how ExperienceCard formats its dates.
import { educationList } from "@/app/lib/data";
import { formatDateRange } from "@/app/lib/utils";
import { SectionWrapper } from "../layout";
import { ObjectCard } from "../ui";

export default function EducationCard() {
  return (
    <SectionWrapper heading="EDUCATION">
      <div className="w-full">
        {educationList.map((education) => (
          <div key={education.id}>
            <ObjectCard>
              <h3 className="font-bold">
                {education.course} | {education.institute} |{" "}
                {formatDateRange(education.startDate, education.endDate)}
              </h3>
              <ul className="ml-6">
                {education.content.map((c, i) => (
                  <li className="list-disc" key={i}>{c}</li>
                ))}
              </ul>
            </ObjectCard>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
