import { SectionWrapper } from "../layout";
import { COLORS } from "@/lib/constants";

export default function PrivacyCard() {
    return (
        <SectionWrapper heading="PRIVACY POLICY">
    <div className="flex flex-1 flex-col">
        <h1
            className="font-bold text-lg md:text-2xl pb-2"
            style={{ color: COLORS.text }}
        >
            Privacy and Data Usage
        </h1>

        <p>
            This website is a personal portfolio and cybersecurity-focused platform
            operated by Phatsimo Pheko. I do not collect personal information, require
            user accounts, or sell visitor data.
        </p>

        <p className="mt-4">
            This site uses Google Analytics 4 (GA4) to collect anonymous traffic and
            engagement metrics such as pages visited, browser type, device category,
            approximate geographic region, and referral sources. This data is used solely
            to understand how the site is used and to improve its content and performance.
            It is never used to personally identify visitors.
        </p>

        <p className="mt-4">
            Analytics tracking is <strong>disabled by default</strong>. GA4 will only
            load if you explicitly accept analytics via the consent banner shown on your
            first visit. You can review or change your preference at any time using the
            <strong> Cookie Preferences</strong> link in the footer. If you decline,
            no analytics data is collected. If you previously accepted and later decline,
            the change will take full effect on your next visit.
        </p>
    </div>
</SectionWrapper>
    );
}