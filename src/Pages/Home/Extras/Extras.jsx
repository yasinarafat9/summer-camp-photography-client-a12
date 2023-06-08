import './Extras.css';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import smallImg from '../../../assets/Images/Home/Extras/street.jpg'
const Extras = () => {
    return (
        <div>
            <div className="extras-bg-img bg-fixed text-white pt-8 my-20">
            <SectionTitle
             heading="Extras" 
             subHeadingWhite={"Photography Classes: Unleash Your Creative Vision and Master the Art of Photography!"} >
             </SectionTitle>
            <div className="md:flex justify-center items-center bg-base-100 bg-opacity-20 pb-20 pt-12 px-36">
                <div>
                    <img className='smallImg' src={smallImg} alt="" />
                </div>
                <div className="md:ml-10 bg-black bg-opacity-40 p-10 ">
                    <p>More Information</p>
                    <p className="uppercase">Get Extra benifits from each courses?</p>
                    <p>Elevate your photography skills with our sought-after classes, where expert instructors, hands-on experience, and cutting-edge techniques converge to transform your snapshots into breathtaking masterpieces.</p>
                    <button className="btn text-white btn-outline border-0 border-b-4 mt-4">Get Started</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Extras;