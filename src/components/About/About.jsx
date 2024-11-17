import BioData from "./BioData/BioData";
import Contributions from "./Contributions/Contributions";
import Education from "./Education/Education";
import Fellowship from "./Fellowship/Fellowship";
import Memberships from "./Memberships/Memberships";
import PublicationsChart from "./PublicationsChart/PublicationsChart";
import ResearchGrants from "./ResearchGrants/ResearchGrants";
// import ResearchSupervision from "./ResearchSupervision/ResearchSupervision";
import Supervision from "./Supervision/Supervision";
import Teaching from "./Teaching/Teaching";
import Visiting from "./Visiting/Visiting";



export default function About() {
    return (
        <>
            {/* <BioData /> */}
            <Education />
            <Teaching />
            <Fellowship />
            <Visiting />
            <ResearchGrants />
            <Supervision />
            <Contributions />
            <Memberships />
            <PublicationsChart />

        </>
    )
}