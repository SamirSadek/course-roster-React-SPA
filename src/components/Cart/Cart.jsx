import PropTypes from 'prop-types';
const Cart = ({selectedCourse,totPrice,totCredit,remCredit}) => {
    return (
        <div className="ml-4 shadow-lg rounded-lg p-4 shadow-black lg:fixed">
            <h2 className="text-[#2F80ED] text-lg font-bold py-5 border-b-2">Credit Hour Remaining {remCredit} hr</h2>
            <h2 className="text-xl font-bold py-5">Course Name</h2>
           <div className="pb-5 border-b-2">
            {
                selectedCourse.map((course,idx) =>(
                
                        <ol className="text-lg text-[#1C1B1B] " key={idx}>{idx+1}. {course.title}</ol>
                    
                ))
            }
           </div>
           <p className="text-lg text-[#1C1B1B] py-5 font-medium border-b-2 ">
           Total Credit Hour : {totCredit}
           </p>
           <p className="text-lg text-[#1C1B1B] font-semibold py-5">
           Total Price : {totPrice} USD
           </p>
           
        </div>
    );
};

Cart.propTypes = {
    selectedCourse: PropTypes.string,
    totPrice: PropTypes.number,
    totCredit: PropTypes.number,
    remCredit: PropTypes.number


  };

export default Cart;