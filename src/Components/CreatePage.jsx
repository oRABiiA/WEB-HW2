import { useTheme } from "../App.jsx";
import BackArrow from "../assets/Charts/arrow-small-left.png";
import { useState } from "react";
import Select from "react-tailwindcss-select";
import { TEChart } from "tw-elements-react";
import PropTypes from "prop-types";

const CreatePage = ({ setCurrentPage }) => {
    const { theme } = useTheme();
    const isDarkMode = theme === "dark";

    const Sizeoptions = [
        { value: "1", label: "1 X 1" },
        { value: "2", label: "2 X 2" }
    ];

    const Chartsoptions = [
        { value: "Bar", label: "Bar Chart" },
        { value: "Line", label: "Line Chart" }
    ];

    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    const [size, setSize] = useState(null);
    const [selectedtype, setType] = useState(null);
    const [additionalSelects, setAdditionalSelects] = useState([]);
    const [chartsdata, setchartsdata] = useState([]);
    const handleChange = (value) => {
        setSize(value);
        const numSelects = Math.pow(parseInt(value.value), 2);
        setAdditionalSelects(Array(numSelects).fill().map(() => ({
            chartType: null,
            inputs: Array(7).fill('0')
        })));
    };

    const handleAdditionalChange = (index, value) => {
        const newAdditionalSelects = [...additionalSelects];
        newAdditionalSelects[index].chartType = value;
        setAdditionalSelects(newAdditionalSelects);
    };

    const handleInputChange = (selectIndex, inputIndex, value) => {
        const newAdditionalSelects = [...additionalSelects];
        newAdditionalSelects[selectIndex].inputs[inputIndex] = value;
        setAdditionalSelects(newAdditionalSelects);
    };

    const handleClearButton=()=>{
        setSize(null);
        setchartsdata([]);
    }

    const handleCreatButton = () => {
        // Use the chart type from the first item or default to 'Bar'
        const chartType = additionalSelects[0]?.chartType?.value || 'Bar';
        const chartLabel = additionalSelects[0]?.chartType?.label || 'Unknown Chart';

        // Prepare datasets for each chart configuration
        const datasets = additionalSelects.map((item) => ({
            label: item.chartType ? item.chartType.label : 'Unknown Chart',
            data: item.inputs.map((input) => parseInt(input, 10) || 0),
            backgroundColor: "rgba(0,0,0,0.4)", // Example color
            borderColor: "rgba(75,192,192,1)", // Example color
            borderWidth: 1
        }));

        // Set the selected chart type and data
        setType(chartType);
        setchartsdata(datasets);
    };



    return (
        <section>
            <div className="fixed bottom-20 left-10 w-16 h-16 bg-zinc-800 p-2 shadow-2xl rounded-full z-10 flex items-center justify-center">
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

            <div className="mt-6 mx-11 w-64">
                <label className={`block text-sm font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                    Size:
                </label>
                <Select
                    value={size}
                    onChange={handleChange}
                    options={Sizeoptions}
                    className="w-full"
                />
            </div>

            {size && (
                <div className="mt-4 mx-11  ">
                    {additionalSelects.map((item, index) => (
                        <div key={index} className=" mt-4 flex items-start space-x-4 ">
                            <div className=" w-64">
                                <label className={`block text-sm font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                                    Chart {index + 1}:
                                </label>
                                <Select
                                    value={item.chartType}
                                    onChange={(value) => handleAdditionalChange(index, value)}
                                    options={Chartsoptions}
                                    className="w-full"
                                />
                            </div>

                            <div className=" grid grid-cols-7 gap-2">
                                {item.inputs.map((inputValue, inputIndex) => (
                                    <div key={inputIndex} className="flex flex-col items-center">
                                        <label className={`block text-sm font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                                            {days[inputIndex]}
                                        </label>
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => handleInputChange(index, inputIndex, e.target.value)}
                                            className="border rounded p-1 w-24"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>

            )}
            <div className="w-full flex justify-center mt-4">
                <div className="w-full border-t border-gray-700" />
            </div>
            <div className="flex flex-col items-center space-y-4 mt-2">
                <div className="flex w-64 h-10 space-x-2">
                    <button
                        onClick={() => handleCreatButton()}
                        className="w-32 h-10 rounded-full bg-[#33b249] text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Create
                    </button>
                    <button
                        onClick={() => handleClearButton()}
                        className="w-32 h-10 rounded-full bg-[#ffbd03] text-sm font-semibold text-gray-900 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Clear
                    </button>
                </div>
            </div>

            <div
                className={` transition-colors duration-500 ease-in-out ${
                    isDarkMode ? "bg-customDark" : "bg-customBlue"
                } mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8`}
            >

                <div

                    className={`relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 mb-32 ${
                        isDarkMode ? "bg-gray-800" : "bg-gray-400"
                    }`}
                >
                    <div className="flex flex-col items-center justify-center w-full h-full lg:ml-30 sm:pb-20">
                        <div className="relative mt-16 lg:mt-8 w-4/5 h-[400px]">
                            <TEChart
                                type={selectedtype ? selectedtype.toLowerCase() : 'bar'} // Default to 'bar'
                                data={{
                                    labels: days, // Ensure these labels match the input length
                                    datasets: chartsdata, // Directly use the dataset array
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

CreatePage.propTypes = {
    setCurrentPage: PropTypes.func.isRequired,
};

export default CreatePage;