import { FiDollarSign } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi';
import Cart from '../Cart/Cart';

const Home = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-2/3 bg-slate-300'>
            
            <div className="w-72 mx-auto p-2 shadow-lg rounded-lg shadow-black">
                <div>
                    <img className="my-3" src="https://i.ibb.co/ZSHPLrL/Rectangle-2-2.png" alt="" />
                    <h2 className="text-lg font-semibold my-3">Introduction to C Programming</h2>
                    <p className="text-sm text-[1C1B1B]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='flex justify-between items-center my-3'>
                    <div className='flex justify-between items-center gap-3 '>
                        <p><FiDollarSign/></p>
                        <p>Price : 15000</p>

                    </div>
                    <div className='flex justify-between items-center gap-3'>
                         <p><HiOutlineBookOpen/></p>
                         <p>Credit : 10hr</p>
                    </div>
                </div>
                <div className='text-center'>
                   <button className="btn bg-[#2F80ED] text-white rounded-lg px-24 py-1">Select</button>
                </div>
            </div>

        </div>
        <div className='w-1/3 bg-red-400'>
            <Cart></Cart>
        </div>
        </div>
    );
};

export default Home;