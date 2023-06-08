import Banner from "../Banner/Banner";
import Extras from "../Extras/Extras";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import StudentsFeedback from "../StudentsFeedback/StudentsFeedback";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Extras></Extras>
            <StudentsFeedback></StudentsFeedback>
        </div>
    );
};

export default Home;