const ChartHeader = (props) => {
  return (
    <h2 className="flex flex-row flex-nowrap items-center mb-36 transition-colors duration-500 ease-in-out">
      <span className={`flex-grow block border-t ${props.mode == "dark" ? "border-white" : "border-gray-300"}`}></span>
      <span className={`flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium  ${props.mode == "dark" ? "bg-white text-black" : "bg-gray-300 text-black"}`}>
        {"Demo " + props.data}
      </span>
      <span className={`flex-grow block border-t ${props.mode == "dark" ? "border-white" : "border-gray-300"}`}></span>
    </h2>
  );
};

export default ChartHeader;
