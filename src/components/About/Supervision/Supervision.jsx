// import React from 'react';

const Supervision = () => {
  const supervisionData = [
    {
      name: 'Nouf Ali Aseeri (1602796)',
      degree: 'PhD',
      supervision: 'Supervisor',
      title: 'Phytoremediation potential of some ornamental plants with different amendments in As and Hg contaminated soils',
      status: 'Completed',
    },
    {
      name: 'Muhammad Munawar (1802179)',
      degree: 'PhD',
      supervision: 'Supervisor',
      title: 'Role of Mangrove endophytes in alleviating salinity stress in Vigra radiate (Mung bean)',
      status: 'Completed',
    },
    {
      name: 'Ms. Ashwaq',
      degree: 'PhD',
      supervision: 'Supervisor',
      title: 'Yet to decide',
      status: 'Ongoing',
    },
    {
      name: 'Abeer Kutbi (1700686)',
      degree: 'PhD',
      supervision: 'Co-Supervisor',
      title: 'Effect of magnetic field and brassinosteroids to alleviate salinity stress in tomato (Lycopersicon esculantum L.)',
      status: 'Completed',
    },
    {
      name: 'Muzammil Shah (1700686)',
      degree: 'PhD',
      supervision: 'Co-Supervisor',
      title: 'Molecular Characterization and gene expression profile analysis of Lantana camera',
      status: 'Completed',
    },
    {
      name: 'Seyed Mousa Sadeghi (SG29506)',
      degree: 'PhD',
      supervision: 'Co-Supervisor',
      title: (
        <>
          Effects of supervised logging and conventional logging on forest recovery of hill dipterocarp forest in Malaysia
          <a href="http://psasir.upm.edu.my/id/eprint/70095/1/FH%202016%204%20IR.pdf" className="text-[#111827] font-bold hover:underline" target="_blank" rel="noopener noreferrer">
            [Link]
          </a>
        </>
      ),
      status: 'Completed',
    },
    {
      name: 'Ms. Haifa Alotaibi (1600620)',
      degree: 'MSc',
      supervision: 'Supervisor',
      title: 'Evaluating Sulphur induced salinity tolerance of Tomato employing physiological, biochemical and molecular analyses',
      status: 'Completed',
    },
    {
      name: 'Mr. Mohammad Fawad',
      degree: 'MSc',
      supervision: 'Supervisor',
      title: 'Enhancing phytoextraction capacity of Withania somnifera using organic amendments against copper contaminated soil',
      status: 'Completed',
    },
    {
      name: 'Mr. Abdul Rehman Ruwali',
      degree: 'MSc',
      supervision: 'Supervisor',
      title: 'Enhancing phytoextraction capacity of mustard plant using organic amendments against cadmium contaminated soil',
      status: 'Ongoing',
    },
    {
      name: 'Ms. Amal Yahya (1800438)',
      degree: 'MSc',
      supervision: 'Co-Supervisor',
      title: 'Enhancing phytoextraction capacity of two ornamental plants by organic fertilizer in Lead and Aluminum contaminated soil',
      status: 'Completed',
    },
    {
      name: 'Mr. Mohammad Faizal Hakim Bin Ahmad Shafuan (SG44062)',
      degree: 'MSc',
      supervision: 'Co-Supervisor',
      title: 'Flood Mitigation Measures based on Runoff Simulation using SCS-CN and GIS for Kelantan River Basin',
      status: 'Completed',
    },
    {
      name: 'Mr. Sagvan Atrushi (SG38244)',
      degree: 'MSc',
      supervision: 'Co-Supervisor',
      title: 'Development of Volume equation filling of Pinus brutia in Zawitu Iraq',
      status: 'Completed',
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight text-black dark:text-white mb-7 max-w-7xl mx-auto">
          Research Supervision
        </h2>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-7xl mx-auto">
    
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-2">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Degree/Position</th>
            <th scope="col" className="px-6 py-3">Supervision</th>
            <th scope="col" className="px-6 py-3">Title</th>
            <th scope="col" className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {supervisionData.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
              </th>
              <td className="px-6 py-4">{item.degree}</td>
              <td className="px-6 py-4">{item.supervision}</td>
              <td className="px-6 py-4">{item.title}</td>
              <td className="px-6 py-4">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </section>
  );
};

export default Supervision;
