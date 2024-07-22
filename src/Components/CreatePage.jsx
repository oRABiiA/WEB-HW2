import {useRef} from "react";
import {useTheme} from "../App.jsx";
import BackArrow from "../assets/Charts/arrow-small-left.png";
import {TESelect} from "tw-elements-react";


const CreatePage = ({setCurrentPage}) => {
    const {theme} = useTheme();
    const isDarkMode = theme === "dark";
    const barChartRef = useRef(null);
    const lineChartRef = useRef(null);
    const data = [
        {text: "One", value: 1},
        {text: "Two", value: 2},
        {text: "Three", value: 3},
        {text: "Four", value: 4},

    ];
    return (
        <section>
            <div
                className="fixed bottom-40 left-10 w-16 h-16 bg-zinc-800 p-2 shadow-2xl rounded-full z-10 flex items-center justify-center">
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

            <div className="flex justify-center">
                <div className="relative mb-3 md:w-96 pt-5">
                    <TESelect data={data} label="Size"/>
                </div>
            </div>


        </section>
    );
};

export default CreatePage;