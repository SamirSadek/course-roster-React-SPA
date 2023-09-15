
const Cart = ({selectedCourse,totPrice,totCredit,remCredit}) => {
    return (
        <div className="ml-4 mt-4">
            <h2>Credit Hour Remaining {remCredit} hr</h2>
            <h2 className="text-xl font-bold ">Course Name</h2>
           <div className="">
            {
                selectedCourse.map((course,idx) =>(
                
                        <ol className="text-lg text-[#1C1B1B]" key={idx}>{idx+1}. {course.title}</ol>
                    
                ))
            }
           </div>
           <p className="text-lg text-[#1C1B1B]">
           Total Credit Hour : {totCredit}
           </p>
           <p>
           Total Price : {totPrice} USD
           </p>
           
        </div>
    );
};

export default Cart;