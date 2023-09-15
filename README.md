
# Course-Registration

This Project is Assignment of Programming Hero Web Development Course . Used Technologies : TailwindCSS, ReactJS

## Features

- Course Selection and Cart Management

  -Users can view a list of 9 courses, each with its image, title, description, price, and credit information.

  -When a user clicks the "Select" button on a course card, the course title is added to the cart section.

  -The cart section displays the selected courses along with a serial number for each course.

- Total Price & Credit Calculation
- Credit Limitation Handling with React Toasts

   The toast notification informs the user about the credit limitation & dulicate Selection


## Discussion about state management in this project

I have Used 5 state to manage the data in this project.

      1. const [allCourses, setAllCourses] =useState([]);

         This state  is used to load data from local data source.

      2. const [selectedCourse, setSelectedCourse] =useState([]);

         This state  is used to  keep track of the courses 
         that the user has selected by using select button.

      3. const [totPrice, setTotPrice] = useState(0);

         This state  is used to  keep track of the total price 
         of the courses that the user has added to their cart.   

      4. const [totCredit, setTotCredit] = useState(0);

         This state  is used to  keep track of the total Credit hour 
         of the courses that the user has added to their cart.  


      5. const [remCredit, setRemCredit] = useState(20);

         This state  is used to  keep track, If a user attempts
         to add courses that would exceed credit limit. 


