// import React from 'react';

const researchSupervision = {
  PhD: [
    {
      name: "Nouf Ali Aseeri (1602796)",
      position: "PhD",
      role: "Supervisor",
      title: "Phytoremediation potential of some ornamental plants with different amendments in As and Hg contaminated soils",
      status: "Completed",
    },
    {
      name: "Muhammad Munawar (1802179)",
      position: "PhD",
      role: "Supervisor",
      title: "Role of Mangrove endophytes in alleviating salinity stress in Vigra radiate (Mung bean)",
      status: "Completed",
    },
    {
      name: "Ms. Ashwaq",
      position: "PhD",
      role: "Supervisor",
      title: "Yet to decide",
      status: "Ongoing",
    },
    {
      name: "Abeer Kutbi (1700686)",
      position: "PhD",
      role: "Co-Supervisor",
      title: "Effect of magnetic field and brassinosteriods to alleviate salinity stress in tomato (Lycopersicon esculantum L.)",
      status: "Completed",
    },
    {
      name: "Muzammil Shah (1700686)",
      position: "PhD",
      role: "Co-Supervisor",
      title: "Molecular Characterization and gene expression profile analysis of Lantana camera",
      status: "Completed",
    },
    {
      name: "Seyed Mousa Sadeghi (SG29506)",
      position: "PhD",
      role: "Co-Supervisor",
      title: "Effects of supervised logging and conventional logging on forest recovery of hill dipterocarp forest in Malaysia",
      status: "Completed",
      link: "http://psasir.upm.edu.my/id/eprint/70095/1/FH%202016%204%20IR.pdf",
    },
  ],
  MSc: [
    {
      name: "Ms. Haifa Alotaibi (1600620)",
      position: "MSc",
      role: "Supervisor",
      title: "Evaluating Sulphur induced salinity tolerance of Tomato employing physiological, biochemical and molecular analyses",
      status: "Completed",
    },
    {
      name: "Mr. Mohammad Fawad",
      position: "MSc",
      role: "Supervisor",
      title: "Enhancing phytoextraction capacity of Withania somnifera using organic amendments against copper contaminated soil",
      status: "Completed",
    },
    {
      name: "Mr. Abdul Rehman Ruwali",
      position: "MSc",
      role: "Supervisor",
      title: "Enhancing phytoextraction capacity of mustard plant using organic amendments against cadmium contaminated soil",
      status: "Ongoing",
    },
    {
      name: "Ms. Amal Yahya (1800438)",
      position: "MSc",
      role: "Co-Supervisor",
      title: "Enhancing phytoextraction capacity of two ornamental plants by organic fertilizer in Lead and Aluminum contaminated soil",
      status: "Completed",
    },
    {
      name: "Mr. Mohammad FaizalHakim Bin Ahmad Shafuan (SG44062)",
      position: "MSc",
      role: "Co-Supervisor",
      title: "Flood Mitigation Measures based on Runoff Simulation using SCS-CN and GIS for Kelantan River Basin",
      status: "Completed",
    },
    {
      name: "Mr. Sagvan Atrushi (SG38244)",
      position: "MSc",
      role: "Co-Supervisor",
      title: "Development of Volume equation filling of Pinus brutia in Zawitu Iraq",
      status: "Completed",
    },
  ],
};

export default function ResearchSupervision() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold leading-tight text-black dark:text-white mb-6">
          Research Supervision
        </h2>
        
        <h3 className="text-2xl font-bold text-black dark:text-white mb-4">PhD Supervision</h3>
        <ul className="list-disc pl-5 space-y-4 text-gray-700 dark:text-gray-300">
          {researchSupervision.PhD.map((item, index) => (
            <li key={index}>
              {item.name} - {item.role} - {item.title} 
              {item.status && ` (${item.status})`}
              {item.link && (
                <a href={item.link} className="text-blue-500 hover:underline">
                  {` `}(Link)
                </a>
              )}
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">MSc Supervision</h3>
        <ul className="list-disc pl-5 space-y-4 text-gray-700 dark:text-gray-300">
          {researchSupervision.MSc.map((item, index) => (
            <li key={index}>
              {item.name} - {item.role} - {item.title} 
              {item.status && ` (${item.status})`}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
