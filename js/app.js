// View an age in years, months, and days after submitting a valid date through the form
// Receive validation errors if:
// Any field is empty when the form is submitted
// The day number is not between 1-31
// The month number is not between 1-12
// The year is in the future
// The date is invalid e.g. 31/04/1991 (there are 30 days in April)
// View the optimal layout for the interface depending on their device's screen size
// See hover and focus states for all interactive elements on the page
// Bonus: See the age numbers animate to their final number when the form is submitted


const form = document.querySelector('.form');
const dayOfBirth = document.querySelector("#day");
const monthOfBirth = document.querySelector("#month");
const yearOfBirth = document.querySelector("#year");
const submitBtn = document.querySelector(".submitBtn");
const error = document.querySelector("#error");
const yearsText = document.querySelector('.years');
const monthsText = document.querySelector('.months');
const daysText = document.querySelector('.days');




form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkInputFields();
    calculateAge(`${yearOfBirth.value}-${monthOfBirth.value}-${dayOfBirth.value}`)
})



function checkInputFields() {
    const dayOfBirthValue = dayOfBirth.value;
    const monthOfBirthValue = monthOfBirth.value;
    const yearOfBirthValue = yearOfBirth.value;
    

    if(dayOfBirthValue === '') {
        setError(dayOfBirth, 'The field is required')
    } else if (!dayOfBirthValue.match(/^(0?[1-9]|[1-2][0-9]|3[0-1])$/)) {
        setError(dayOfBirth, 'Must be a valid day');
    } else {
        setSuccess(dayOfBirth);
    }

    if(monthOfBirthValue === '') {
        setError(monthOfBirth, 'The field is required')
    } else if (!monthOfBirthValue.match(/^(0?[1-9]|1[0-2])$/)) {
        setError(monthOfBirth, 'Must be a valid month');
    } else {
        setSuccess(monthOfBirth);
    }

    if(yearOfBirthValue === '') {
        setError(yearOfBirth, 'The field is required' )
    } else if (!yearOfBirthValue.match(/^(19\d\d|20[0-2]\d|2023)$/)) {
        setError(yearOfBirth, 'Must be a valid year');
    } else {
        setSuccess(yearOfBirth);
    }
}




function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-group error';
    input.style.border = '2px solid red';
}   


function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-group';
    input.style.border = '2px solid black';
    formControl.querySelector('.error').innerText = '';
}


function calculateAge(dateOfBirth) {
      // Convert date of birth string to Date object
    const myBirth = new Date(dateOfBirth);

    // Calculate difference between current date and date of birth
    const diff = Date.now() - myBirth.getTime();

     // Convert difference in milliseconds to age in years
     const ageInMs = new Date(diff)
     const age = Math.abs(ageInMs.getUTCFullYear() - 1970);
     const months = ageInMs.getUTCMonth();
     const days = ageInMs.getUTCDate() - 1;

    //  console.log(age);
     
    if(!age) {
        yearsText.innerText = '--'
    } else {
        yearsText.innerText = age;
    }

    if(!months) {
        monthsText.innerText = '--';
    } else {
        monthsText.innerText = months;
    }

    if(!days) {
        daysText.innerText = '--';
    } else {
        daysText.innerText = days;
    }

    dayOfBirth.value = '';
    monthOfBirth.value = '';
    yearOfBirth.value = '';

}

// const {age, months, days} = calculateAge(`${yearOfBirth.value}-${monthOfBirth.value}-${dayOfBirth.value}`);
// console.log(`Age: ${age} years, ${months} months, ${days} days`);