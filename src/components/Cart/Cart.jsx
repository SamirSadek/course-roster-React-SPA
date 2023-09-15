
const Cart = ({selectedCourse}) => {
    console.log(selectedCourse);
    return (
        <div>
            <h2 className="text-xl font-bold ml-4 mt-4">Course Name</h2>
           <div className="ml-4 mt-4">
            {
                selectedCourse.map((course,idx) =>(
                
                        <ol className="text-lg text-[#1C1B1B]" key={course.idx}>{idx+1}. {course.title}</ol>
                    
                ))
            }
           </div>
        </div>
    );
};

export default Cart;