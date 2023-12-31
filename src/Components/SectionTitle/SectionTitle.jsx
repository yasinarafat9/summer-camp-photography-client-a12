


const SectionTitle = ({heading, subHeading, subHeadingWhite}) => {
    return (
        <div className="my-5 mx-auto text-center ">
            <h2 className="text-4xl font-semibold">{heading}</h2>
            <h4 className="w-[50%] mx-auto mt-3 mb-8 font-semibold text-gray-600">{subHeading}</h4>
            <h4 className="w-[50%] mx-auto mb-8 font-semibold text-white-600">{subHeadingWhite}</h4>
        </div>
    );
};

export default SectionTitle;