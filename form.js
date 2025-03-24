//Step 1
//Get form and success message elements
const form = document.getElementById('validateForm');
const successMessage = document.getElementById('successMessage');


// Step 4: Regular Expressions to validate form fields
const RegexPatterns={
    // Name only alphabets and space only
    name :/^[A-Za-z\s]+$/,
    // Username only 4-16 characters alphabets, numbers, underscore
    username: /^[A-Za-z0-9_].{4,16}$/,
    // Email: standard email format
    email:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    // Phone:XXX-XXX-XXXX
    phone:/^\d{3}-\d{3}-\d{4}/,
    //Password: Minimum 8 charachters, 1 upper, 1 lower, 1 number
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
    //URL: standard URL Format
    url: /^https?:\/\/.+\..+/,
    // zipcode: 5 digits
    zipcode:/^\d{5}$/,
    //Date:MM-DD-YYYY format
    date:/^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/,
    //Credit Card: 16 digits
    creditcard: /^(\d{4}[-]?){3}\d{4}$|^\d{16}$/,
}



// Step 3: Define handleSubmit funciton
// handles form submission
function handleSubmit(event){
    // Prevent Default form submission

    // Get form data -- Validate the form data

    // Display success message


}
// Step 2/Last Step
//Add Event Listener
form.addEventListener('submit', handleSubmit);