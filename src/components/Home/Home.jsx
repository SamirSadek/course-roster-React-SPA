import { FiDollarSign } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi';
import Cart from '../Cart/Cart';
import { useEffect, useState } from 'react';

const Home = () => {
    const [allCourses, setAllCourses] =useState([]);
    const [selectedCourse, setSelectedCourse] =useState([]);

    useEffect(()=>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setAllCourses(data))
    },[])

    const handleSelectedCourse= (course)=>{
        setSelectedCourse([...selectedCourse,course]);

    }
    console.log(selectedCourse);
    // console.log(allCourses);
    return (
        <div className='w-5/6 mx-auto flex justify-center gap-4'>
            <div className='grid md:grid-cols-3 w-2/3 gap-4'>
            {
                allCourses.map(course =>(
                <div key={course.id} className="card w-[280px] mx-auto p-2 shadow-lg rounded-lg shadow-black">
                <div>
                    <img className="my-3" src={course.image} alt="" />
                    <h2 className="text-lg font-semibold my-3">{course.title}</h2>
                    <p className="text-sm text-[1C1B1B]">{course.description}</p>
                </div>
                <div className='flex justify-between items-center my-3'>
                    <div className='flex justify-between items-center gap-2 '>
                        <p><FiDollarSign/></p>
                        <p>Price : {course.Price}</p>

                    </div>
                    <div className='flex justify-between items-center gap-2'>
                         <p><HiOutlineBookOpen/></p>
                         <p>Credit : {course.Credit}hr</p>
                    </div>
                </div>
                <div className='text-center'>
                   <button onClick={()=>handleSelectedCourse(course)} className="btn bg-[#2F80ED] text-white rounded-lg px-24 py-1">Select</button>
                </div>
            </div>))
            }
            

        </div>

        <div className='w-1/3 bg-red-400'>
            <Cart selectedCourse={selectedCourse}></Cart>
        </div>

    </div>
    );
};

export default Home;