const ChartHeader = (props) => {
  return (
    <h2 className="flex flex-row flex-nowrap items-center mb-36 ">
      <span className="flex-grow block border-t border-white"></span>
      <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-white text-black">
        {"Demo " + props.data}
      </span>
      <span className="flex-grow block border-t border-white"></span>
    </h2>
  );
};

export default ChartHeader;
