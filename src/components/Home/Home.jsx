import { FiDollarSign } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi';
import Cart from '../Cart/Cart';
import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


    const notify1 = () => toast("Already Selected this Course");
    const notify2 = () => toast("Your Credit Limit Exceeded");

const Home = () => {
    const [allCourses, setAllCourses] =useState([]);
    const [selectedCourse, setSelectedCourse] =useState([]);
    const [totPrice, setTotPrice] = useState(0);
    const [totCredit, setTotCredit] = useState(0);
    const [remCredit, setRemCredit] = useState(20);

    useEffect(()=>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setAllCourses(data))
    },[])

    const handleSelectedCourse= (course)=>{
        const isSelected = selectedCourse.find((item)=> item.id == course.id)
        let totalPrice = course.Price;
        let totalCreditHour = course.Credit;
        if(isSelected){
            notify1();
        }else{
            selectedCourse.forEach((item)=>{
                totalPrice = totalPrice + item.Price;
                totalCreditHour = totalCreditHour + item.Credit;

            })
            const totalRemainingCredit = 20 - totalCreditHour

            if(totalRemainingCredit <0 || totalCreditHour >20){
                notify2();
            }else{
                setTotPrice(totalPrice);
            setTotCredit(totalCreditHour);
            setRemCredit(totalRemainingCredit);
            setSelectedCourse([...selectedCourse,course]);
            }

            
        }
        

    }
   
    return (
        <div className='max-w-7xl mx-auto flex flex-col lg:flex-row mb-8 gap-5'>
        <div className='w-3/4 mx-auto grid md:grid-cols-2 lg:grid-cols-3  gap-16'>
            {
                allCourses.map((course) =>(
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
                   <button onClick={()=>handleSelectedCourse(course)} className="btn bg-[#2F80ED] text-white font-semibold rounded-lg px-24 py-1  mb-3">Select</button>
                </div>
            </div>))
            }
            
            <ToastContainer />
        </div>

        <div className='sm:m-10 lg:m-0 lg:w-1/4'>
            <Cart selectedCourse={selectedCourse} totPrice={totPrice} totCredit={totCredit} remCredit={remCredit}></Cart>
        </div>


    </div>
    
    );
};

export default Home;