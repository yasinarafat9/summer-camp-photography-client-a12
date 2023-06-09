
import useClasses from '../../hooks/useClassses';

const AllClasses = () => {
    const [classes] = useClasses();

    return (
        <div className=' mx-auto'>
            <div className=''>

                {
                    classes.map(course => <div
                        key={course._id}
                        course={course}
                    >
                        {/* TODO conditional red background if ablable seats are 0 */}
                        <div className='my-5'>
                            <div className="card lg:card-side bg-base-100 shadow-xl">
                                <figure><img className='card-img-2' src={course.course_img} alt="Album" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{course.course_name}</h2>
                                    <p className="font-semibold">Students Joined: {course.students_joined}</p>
                                    <p className="font-semibold">Avalable Seats: {course.avalable_seats}</p>
                                    <p className="text-2xl font-bold text-green">Price: ${course.price}</p>
                                    <div className="card-actions d-flex justify-between items-center">

                                        <img className="icon-img" src={course.instructor_img} alt="" />
                                        <p className="font-semibold"> BY: {course.instructor_name}</p>

                                        <button className="btn-green">Select</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default AllClasses;