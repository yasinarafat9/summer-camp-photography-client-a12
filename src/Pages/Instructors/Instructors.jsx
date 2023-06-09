import useInstructors from "../../hooks/useInstructors";


const Instructors = () => {
    const [instructors] = useInstructors();

    return (
        <div>
            <h1>{instructors.length}</h1>
            <div>
                <div className=''>

                    {
                        instructors.map(instructor => <div
                            key={instructor._id}
                            instructor={instructor}
                        >
                            {/* TODO conditional red background if ablable seats are 0 */}
                            <div className='my-5'>
                                <div className="card lg:card-side bg-base-100 shadow-xl">
                                    <figure><img className='card-img-3' src={instructor.instructor_img} alt="Album" /></figure>
                                    <div className="card-body">
                                        <p className="card-title text-2xl">instructor Name: {instructor.instructor_name}</p>
                                        <p className="font-semibold text-primary">Email: {instructor.email}</p>
                                        <p className="font-semibold">Class Taken: 2{instructor.total_class}</p>
                                        <div></div>

                                    </div>
                                        <button className="btn btn-outline m-5">View Details</button>
                                </div>
                            </div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;