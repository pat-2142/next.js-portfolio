import CertificateCard from "./components/cards/CertificateCard";
import ContactCard from "./components/cards/ContactCard";
import EducationCard from "./components/cards/EducationCard";
import ExperienceCard from "./components/cards/ExperienceCard";
import HeroCard from "./components/cards/HeroCard";
import SkillsCard from "./components/cards/SkillsCard";
import MotionWrapper from "./components/ui/MotionWrapper";

export default function App() {
  return (
    <div>
      <MotionWrapper><HeroCard /></MotionWrapper>
      <MotionWrapper><ExperienceCard /></MotionWrapper>
      <MotionWrapper><SkillsCard /></MotionWrapper>
      <MotionWrapper><CertificateCard /></MotionWrapper>
      <MotionWrapper><EducationCard /></MotionWrapper>
      <MotionWrapper><ContactCard /></MotionWrapper>
    </div>
  );
}
