import { useState } from "react";
import { Pagination } from "@nextui-org/react";

export default function ResearchGrants() {
  // Array of research grants
  const grants = [
    {
      title: "Principle Investigator (PI), General Group Funding, King Abdulaziz University, Jeddah, KSA (2019-20)",
      project: "Evaluation of antioxidant enzyme functioning and metabolites in leguminous plant (Pisum sativum) under sludge stress in arid and semi-arid environments (SAR 40,000).",
    },
    {
      title: "Principle Investigator (PI), General Group Funding, King Abdulaziz University, Jeddah, KSA (2018-19)",
      project: "Impact of drought on ecophysiology, metabolomic profile, and medicinal quality of Nigella sativa (SAR 40,000).",
    },
    {
      title: "Principle Investigator (PI), Distinct Research, (2017)",
      project: "Lead (Pb)-induced phytotoxicity and oxidative stress in buckwheat seedlings (Fagopyrum kashmirianum Munshi) (SAR 10,000).",
    },
    {
      title: "Principle Investigator (PI), Putra Grant, UPM-Malaysia (2014-2015)",
      project: "Mapping the proteome of thick-walled and rapidly growing bamboo for the development of thick-walled bamboo plantlets (RM 118,000).",
    },
    {
      title: "Principle Investigator (PI), General Group Funding, King Abdulaziz University, Jeddah, KSA (2020-21)",
      project: "Evaluating the exogenous application of calcium in alleviating cadmium-induced stress in common buckwheat through biochemical, physiological, and metabolomics pathways (SAR 30,000).",
    },
    {
      title: "Co-Investigator (Co-PI), HiCi Program, King Abdulaziz University, Jeddah, KSA (2021-23)",
      project: "Improved functional annotation approach of complex carbohydrate-degrading enzymes (1.5 Million SAR).",
    },
    {
      title: "Co-Investigator (Co-PI), COST ACTION FOR BACTERIAL FERTILIZERS (SCOTTIE) 2023",
      project: "Submitted.",
    },
    {
      title: "Co-Investigator (Co-PI), Deanship of Scientific Research, University of Tabuk, Tabuk, KSA (2022)",
      project: "Accumulation and quantification of Amaryllidaceae alkaloids in response to elicitor in different species of Crinum, Hippeastrum.",
    },
    {
      title: "Co-Investigator (Co-PI), Deanship of Scientific Research, University of Tabuk, Tabuk, KSA (2022)",
      project: "Conservation, multiplication, and propagation of Moringa peregrina—An Endangered Plant of the Kingdom of Saudi Arabia.",
    },
    {
      title: "Co-Investigator (Co-PI), Deanship of Scientific Research, University of Tabuk, Tabuk, KSA (2023)",
      project: "Conservation strategies and seed bank formation in Tabuk region.",
    },
    {
      title: "Co-Investigator (Co-PI), Disease diagnostics, prevention, and treatment of metabolic and autoimmune diseases (diabetes, cancer, obesity, inflammation, atopy, psoriasis, etc.), RDO, KSA (2023)",
      project: "(600,000 SAR).",
    },
    {
      title: "Co-Investigator (Co-PI), General Group Funding, King Abdulaziz University, Jeddah, KSA (2019-20)",
      project: "Evaluation of Protein Thiols for Aquatic Plant Tolerance and Adaptability to Different Stress for Future Involvement in Heavy Metal and Pesticide Remediation (SAR 100,000).",
    },
    // Additional grants
    {
      title: "Co-Investigator (Co-PI), General Group Funding, King Abdulaziz University, Jeddah, KSA (2018-19)",
      project: "Explicating the physiological and molecular mechanisms of micronutrient mediated salt stress tolerance in soybean (SAR 100,000).",
    },
    {
      title: "Co-Investigator (Co-PI), General Group Funding, King Abdulaziz University, Jeddah, KSA (2017-18)",
      project: "Physiological and Biochemical mechanisms for Mitigation of salt stress in Vigna radiata (mungbean) using Zinc (SAR 40,000).",
    },
    {
      title: "Co-Investigator (Co-PI), Plant Group Funding, King Abdulaziz University, Jeddah, KSA (2017-2018)",
      project: "Antioxidant response and proteomic modulations in mung bean (Vigna radiata L.) under salt stress (SAR 130,000).",
    },
    {
      title: "Co-Investigator (Co-PI), General Group Funding, King Abdulaziz University, Jeddah, KSA (2017-18)",
      project: "Evaluation and chemical enhancement of two ornamental plants as phytoremediation candidates for Cd and Pb contaminated soils (SAR 46,600).",
    },
    {
      title: "Co-Investigator (Co-PI), General Group Funding, King Abdulaziz University, Jeddah, KSA (2017-18)",
      project: "Antioxidant response and proteomic modulations in tomato (Vigna radiata L.) under drought stress (SAR 45,000).",
    },
    {
      title: "Co-Researcher, Fundamental Research Grant Scheme (FRGS), Malaysia (2015)",
      project: "Flood occurrence reduction measures by runoff prediction based on land use scenario analysis using SCS-CN method and GIS for Kelantan River Basin (RM 70,000).",
    },
    {
      title: "Co-Researcher, eSciencefund (MOSTI), Malaysia (2014-2016)",
      project: "Proteomics identification of gaharu synthesis enzymes in pathogen-induced Aquilaria for the production of high-impact compounds (RM 340,000).",
    },
    {
      title: "Co-Researcher, Putra Grant, UPM-Malaysia (2014-2016)",
      project: "Development of Mangrove Quality Index (MQI): benchmarking mangrove health for Peninsular Malaysia (RM 470,000).",
    },
    {
      title: "Co-Researcher, Fundamental Research Grant Scheme (FRGS), Malaysia (2015-2017)",
      project: "Assessment of tree species diversity and their chemical constituents across intertidal zones at different locations of mangrove ecosystems in Peninsular Malaysia (RM 137,000).",
    },
    {
      title: "Co-Researcher, Forest Research Institute of Malaysia (FRIM) Project on Mangroves of Malaysia (2016-2017)",
      project: "Determination of key factors causing lower mangrove productivity at Matang (RM 90,000).",
    },
];


  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the grants array to get the grants for the current page
  const currentGrants = grants.slice(startIndex, endIndex);

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight text-black dark:text-white mb-6">
          Research Grants
        </h2>
        <ul className="list-disc pl-5 space-y-4 text-gray-700 dark:text-gray-300">
          {currentGrants.map((grant, index) => (
            <li key={index}>
              {grant.title} <br />
              <span className="font-semibold">Project:</span> {grant.project}
            </li>
          ))}
        </ul>

        {/* Pagination component */}
        <div className=" flex justify-center mt-8">
          <Pagination
            showShadow
            color="warning"
            total={Math.ceil(grants.length / itemsPerPage)}
            initialPage={1}
            page={currentPage}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </section>
  );
}
