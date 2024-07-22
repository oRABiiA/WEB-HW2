import PropTypes from "prop-types";
import {useTheme} from "../App";
import {useEffect} from "react";
import BackArrow from "../assets/Charts/arrow-small-left.png";

const UploadPage = ({setCurrentPage}) => {
    const { theme } = useTheme();
    const isDarkMode = theme === "dark";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div
            className={`transition-colors duration-500 ease-in-out ${
                theme === "light" ? "bg-customBlue" : "bg-customDark"
            }`}
        >
            <div
                className={`fixed bottom-40 left-10 w-16 h-16 p-2 shadow-2xl rounded-full z-10 flex items-center justify-center ${
                    isDarkMode ? "bg-gray-600" : "bg-gray-400"
                }`}>
                <button
                    onClick={() => setCurrentPage("home")}
                    className="w-full h-full rounded-full bg-white text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center justify-center"
                >
                    <img
                        src={BackArrow}
                        alt="Back"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </button>
            </div>
            <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div
                    className={`relative isolate overflow-hidden rounded-3xl ${
                        theme === "light" ? "bg-white" : "bg-gray-900"
                    } px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0`}
                >
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    >
                        <circle
                            r={512}
                            cx={512}
                            cy={512}
                            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                            fillOpacity={theme === "light" ? 0.9 : 0.3}
                        />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor={theme === "light" ? "#111827" : "#bae4f7"}/>
                                <stop
                                    offset={1}
                                    stopColor={theme === "light" ? "#111827" : "#bae4f7"}
                                />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2
                            className={`text-3xl font-bold tracking-tight ${
                                theme === "light" ? "text-gray-900" : "text-white"
                            } sm:text-4xl`}
                        >
                            See Your Charts Alive!
                        </h2>
                        <p
                            className={`mt-6 text-lg leading-8 ${
                                theme === "light" ? "text-gray-600" : "text-gray-300"
                            }`}
                        >
                            Upload Your JSON File Here To Visualize Your Chart
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <button
                                onClick={() => setCurrentPage("createPage")}
                                className={`rounded-md ${
                                    theme === "light"
                                        ? "bg-gray-700 text-white hover:bg-gray-600"
                                        : "bg-white text-gray-900 hover:bg-gray-200"
                                } px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                            >
                                Create
                            </button>
                            <button
                                onClick={() => setCurrentPage("chartPage")}
                                className={`rounded-md ${
                                    theme === "light"
                                        ? "bg-gray-700 text-white hover:bg-gray-600"
                                        : "bg-white text-gray-900 hover:bg-gray-200"
                                } px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                            >
                                Upload
                            </button>
                        </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8 flex flex-col items-center justify-center lg:ml-40">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="120"
                            width="120"
                            viewBox="0 0 576 512"
                        >
                            <path
                                fill={theme === "light" ? "#374151" : "white"}
                                d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"
                            />
                        </svg>
                        <h2
                            className={`text-3xl font-bold tracking-tight ${
                                theme === "light" ? "text-gray-700" : "text-white"
                            } sm:text-4xl mt-16`}
                        >
                            Hello, Guest!
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

UploadPage.propTypes = {
    setCurrentPage: PropTypes.func.isRequired,
};

export default UploadPage;
