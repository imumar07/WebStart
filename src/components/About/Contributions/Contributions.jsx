// import React from 'react';

const researchContributions = [
  {
    contribution: "Identified candidate genes for low-N tolerance in wheat and rice through analysis of proteome profile of low-N tolerant and low-N sensitive varieties.",
    publication: "(Published in Applied Biochemistry and Biotechnology 2012; Molecular Breeding 2013)",
  },
  {
    contribution: "Identified candidate genes for salt tolerance in soybean and cadmium toxicity reduction in mung bean.",
    publication: "(Published in Applied Biochemistry and Biotechnology 2013; Int. Journal of Mol. Science 2013)",
  },
  {
    contribution: "Worked out the potential of various extracts of Ajwa date, fennel, and dill plants against prostate, breast, and liver cancer cell lines.",
    publication: "(Published in Journal of Ethnopharmacology, 2018 a,b,c)",
  },
  {
    contribution: "Collaborated in a multinational team of scientists from 46 countries and worked out the phylogenetic classification of the world's tropical rain forests.",
    publication: "(Published in Proceedings of the National Academy of Sciences USA (PNAS), 2018)",
  },
  {
    contribution: "Developed Mangrove Quality Index (MQI) for the world mangrove forests, taking Matang, Malaysia as the study area and figured out the most viable and novel index parameters for MQI development.",
    publication: "(Published in Ecological Indicators, 2019; MethodsX, 2019)",
  },
];

export default function Contributions() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight text-black dark:text-white mb-6">
          Significant Research Contributions
        </h2>
        <ul className="list-disc pl-5 space-y-4 text-gray-700 dark:text-gray-300">
          {researchContributions.map((item, index) => (
            <li key={index}>
              {item.contribution} {item.publication}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
