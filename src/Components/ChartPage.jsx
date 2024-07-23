import PropTypes from "prop-types";
// import {useRef} from "react";
import {useTheme} from "../App";
import ChartHeader from "./ChartHeader.jsx";
import {TEChart} from "tw-elements-react";
// import BarChartImage from "../assets/Charts/Bar Chart 1.png";
// import lineChartimage from "../assets/Charts/chart-line-up.png";
import BackArrow from "../assets/Charts/arrow-small-left.png";

const ChartPage = ({ data, setCurrentPage }) => {
    const {theme} = useTheme();
    const isDarkMode = theme === "dark";
    // const chartData = props.data;
    // const barChartRef = useRef(null);
    // const lineChartRef = useRef(null);

    return (
        <section>
          <div
              className={`fixed bottom-40 left-10 w-16 h-16 p-2 shadow-2xl rounded-full z-10 flex items-center justify-center transition-colors duration-500 ease-in-out ${
                isDarkMode ? "bg-gray-600" : "bg-gray-400"
              }`}>
            <button
                onClick={() => setCurrentPage("uploadPage")}
                className="w-full h-full rounded-full bg-white text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center justify-center"
            >
              <img
                  src={BackArrow}
                  alt="Back"
                  className="w-full h-full object-cover rounded-lg"
              />
            </button>
          </div>

          <div
              className={` transition-colors duration-500 ease-in-out ${
                  isDarkMode ? "bg-customDark" : "bg-customBlue"
              } mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8`}
          >
              <ChartHeader data={data} mode={isDarkMode ? "dark" : "light"}/>
            <div
                // ref={barChartRef}
                className={`relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 mb-32 ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-400"
                }`}
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
          </div>
        </section>
    );
};

ChartPage.propTypes = {
    setCurrentPage: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
};
export default ChartPage;

