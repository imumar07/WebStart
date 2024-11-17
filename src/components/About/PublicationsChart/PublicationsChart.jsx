import { useEffect } from "react";
import ApexCharts from "apexcharts";

// Sample publication data
const publicationsData = [
  { category: "Research & Review Papers", count: 201 },
  { category: "Patent (USA)", count: 1 },
  { category: "Book Chapters", count: 82 },
  { category: "Text and Edited Books", count: 101 },
  { category: "Conference Papers", count: 4 },
  { category: "Editorial", count: 1 },
  { category: "Others (Foreword)", count: 4 },
];

const citations = "> 10829";
const hIndex = 55;
const i10Index = 204;
const cumulativeImpactFactor = 698.1;
const researchGateScore = 60;
const totalPublications = 394;
const grandTotal = 434;

export default function PublicationsChart() {
  useEffect(() => {
    const chartConfig = {
      series: [
        {
          name: "Publications",
          data: publicationsData.map(item => item.count),
        },
      ],
      chart: {
        type: "bar",
        height: 240,
        toolbar: { show: false },
      },
      dataLabels: { enabled: false },
      colors: ["#020617"],
      plotOptions: {
        bar: {
          columnWidth: "30%", // Decrease the width of the bars
          borderRadius: 2,
        },
      },
      xaxis: {
        categories: publicationsData.map(item => item.category),
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: { lines: { show: true } },
        padding: { top: 5, right: 20 },
      },
      tooltip: { theme: "dark" },
    };

    const chart = new ApexCharts(document.querySelector("#bar-chart"), chartConfig);
    chart.render();

    return () => chart.destroy(); // Clean up chart on unmount
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-md">
          <div className="relative mt-4 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
              {/* SVG Icon */}
            </div>
            <div>
              <h6 className="text-base font-semibold text-blue-gray-900 px-2">
                Summary of Publications (Updated July 2024)
              </h6>
              <p className="text-sm text-gray-700 px-2">Visual breakdown of publication categories.</p>
            </div>
          </div>

          <div className="pt-6 px-2 pb-0">
            <div id="bar-chart"></div>
          </div>

          <div className="px-6 py-4 bg-gray-50">
            <ul className="text-gray-700 text-sm">
              <li>Total Publications: <span className="font-semibold">{totalPublications}</span></li>
              <li>Grand Total: <span className="font-semibold">{grandTotal}</span></li>
              <li>Citations: <span className="font-semibold">{citations}</span></li>
              <li>h-index: <span className="font-semibold">{hIndex}</span></li>
              <li>i10 index: <span className="font-semibold">{i10Index}</span></li>
              <li>Cumulative Impact Factor Score: <span className="font-semibold">{cumulativeImpactFactor}</span></li>
              <li>Research Gate Score: <span className="font-semibold">{researchGateScore}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
