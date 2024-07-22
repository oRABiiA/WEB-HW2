import { useRef } from "react";
import { useTheme } from "../App";
import ChartHeader from "./ChartHeader.jsx";
import { TEChart } from "tw-elements-react";
import BarChartImage from "../assets/Charts/Bar Chart 1.png";
import lineChartimage from "../assets/Charts/chart-line-up.png";
import BackArrow from "../assets/Charts/arrow-small-left.png";

const ChartPage = (props) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const barChartRef = useRef(null);
  const lineChartRef = useRef(null);

  const scrollToChart = (ref) => {
    if (ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition -
        (window.innerHeight / 2 - ref.current.offsetHeight / 2);
      window.scrollBy({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section>
      <div className="fixed bottom-10 left-10 w-16 h-16 bg-zinc-800 p-2 shadow-2xl rounded-full z-10 flex items-center justify-center">
        <button
          onClick={() => props.setCurrentPage("uploadPage")}
          className="w-full h-full rounded-full bg-white text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center justify-center"
        >
          <img
            src={BackArrow}
            alt="Back"
            className="w-full h-full object-cover rounded-lg"
          />
        </button>
      </div>
      <div className="fixed top-10 left-10 w-60 h-80 bg-zinc-800 p-4 shadow-2xl sm:rounded-3xl z-10 text-center">
        <h2 className="text-white text-xl font-semibold">Charts</h2>
        <div
          className="fixed mt-4 left-16 w-20 h-20 bg-zinc-700 hover:bg-zinc-600 p-4 shadow-2xl sm:rounded-3xl z-10"
          onClick={() => scrollToChart(barChartRef)}
        >
          <img
            src={BarChartImage}
            alt="Bar Chart"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div
          className="fixed mt-4 left-44 w-20 h-20 bg-zinc-700 hover:bg-zinc-600 p-4 shadow-2xl sm:rounded-3xl z-10"
          onClick={() => scrollToChart(lineChartRef)}
        >
          <img
            src={lineChartimage}
            alt="Line Chart"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div
        className={`min-h-screen ${
          isDarkMode ? "bg-customDark" : "bg-customBlue"
        } mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8`}
      >
        <ChartHeader data={props.data[0]} />

        <div
          ref={barChartRef}
          className="relative isolate overflow-hidden bg-zinc-800 hover:bg-zinc-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 mb-32 "
        >
          <div className="flex flex-col items-center justify-center w-full h-full lg:ml-30 sm:pb-20">
            <div className="relative mt-16 lg:mt-8 w-4/5 h-[400px]">
              <TEChart
                type="bar"
                data={{
                  labels: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  datasets: [
                    {
                      label: "Traffic",
                      data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
                      backgroundColor: "white",
                    },
                    {
                      label: "Streets",
                      data: [2534, 1874, 3627, 1345, 954, 3154, 23],
                      backgroundColor: "gray",
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
        <ChartHeader data={props.data[1]} />
        <div
          ref={lineChartRef}
          className=" relative isolate overflow-hidden bg-zinc-800 hover:bg-zinc-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
        >
          <div className="flex flex-col items-center justify-center w-full h-full lg:ml-30 sm:pb-20">
            <div className="relative mt-16 lg:mt-8 w-4/5 h-[400px]">
              <TEChart
                type="line"
                data={{
                  labels: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  datasets: [
                    {
                      label: "Traffic",
                      data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
                      backgroundColor: "white",
                    },
                    {
                      label: "Streets",
                      data: [2534, 1874, 3627, 1345, 954, 3154, 23],
                      backgroundColor: "white",
                      borderColor: "Red",
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartPage;
