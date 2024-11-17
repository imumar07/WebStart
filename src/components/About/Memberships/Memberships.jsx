// import React from 'react';

const memberships = [
  {
    society: "The Royal Society of Biology, London, UK",
    title: "Fellow",
    link: "https://www.rsb.org.uk/",
  },
  {
    society: "American Society of Plant Biologists",
    title: "Plantae Fellow",
    link: "http://blog.aspb.org/2016/11/22/welcome-to-our-plantae-fellows/",
  },
  {
    society: "International Society for Development and Sustainability",
    title: "Fellow",
    link: "https://isdsnet.com/about.html",
  },
  {
    society: "Asian Federation of Biotechnology, Korea",
    link: "http://www.afob.org/main.html",
  },
  {
    society: "Saudi Biological Society",
    link: "http://saudibiosoc.ksu.edu.sa/en",
  },
  {
    society: "World Academy of Science",
    link: "http://www.worldacademyofsciences.com/members.html",
  },
  {
    society: "International Plant Proteomics Organization, Malaysia (INPPO)",
    link: "http://www.inppo.com/",
  },
  {
    society: "Center for Inland Waters in South Asia, India",
    link: "http://www.aquaticecosystems.org/",
  },
  {
    society: "International Institute of Chemical, Biological & Environmental Engineering",
  },
  {
    society: "International Society of Environmental Relationship And Sustainability (ISERS)",
    link: "https://www.isers.net/committee-members.php",
  },
  {
    society: "International Engineering and Technology Institute (IETI)",
    title: "Fellow, 2022, Hong Kong",
    link: "http://www.ieti.net/news/detail.aspx?id=306",
  },
];

export default function Memberships() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight text-black dark:text-white mb-6">
          Membership of Learned Societies
        </h2>
        <ul className="list-disc pl-5 space-y-4 text-gray-700 dark:text-gray-300">
          {memberships.map((item, index) => (
            <li key={index}>
              {item.society} {item.title && `(${item.title})`} 
              {item.link && (
                <a href={item.link} className="text-[#111827] font-bold hover:underline">
                  {` `}(Link)
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
