'use strict'
//Input dates
const inputDay = document.querySelector('#inputDay');
const inputMonth = document.querySelector('#inputMonth');
const inputYear = document.querySelector('#inputYear');

//ERROR elemnts
let isValid = false;
const errorDay = document.querySelector('#errorDay')
const errorMonth = document.querySelector('#errorMonth')
const errorYear = document.querySelector('#errorYear')

//Getting nodes to change
const yearNumber = document.querySelector('#yearNumber');
const monthNumber = document.querySelector('#monthNumber');
const dayNumber = document.querySelector('#dayNumber');

//Getting the year
let newDate = new Date();
const year = newDate.getFullYear();

//Getting button
const btn = document.querySelector('button');

//Function to calculate your age.
const calculateAge = () =>{
    if(isValid){
    let birthday = `${inputYear.value}/${inputMonth.value}/${inputDay.value}`;
    console.log(isValid)
    let birthdayObj = new Date(birthday);
    let ageDiff = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiff);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDate() - 1;
    yearNumber.textContent = ageYears;
    monthNumber.textContent = ageMonth;
    dayNumber.textContent = ageDay;
  }else{
    yearNumber.textContent = "--";
    monthNumber.textContent = "--";
    dayNumber.textContent = "--";
    errorDay.textContent = "This field is required";
    errorMonth.textContent = "This field is required";
    errorYear.textContent = "This field is required";
    alert("ERROR! - Enter a date");
  }
  return
}

//Events to catch errors!
inputDay.addEventListener("input", (e)=>{
    if(+inputDay.value == ""){
        errorDay.textContent = "This field is required";
        isValid = false;
        return
    }else{
        errorDay.textContent = "";
        isValid = true;
    }
    if(+inputDay.value > 31 || +inputDay.value === 0){
        errorDay.textContent = "Must add a valid date";
        isValid = false;
        return
    }else{
        errorDay.textContent = "";
        isValid = true;
    }
})
inputMonth.addEventListener("input", (e)=>{
    if(+inputMonth.value == ""){
        errorMonth.textContent = "This field is required";
        isValid = false;
        return
    }else{
        errorMonth.textContent = "";
        isValid = true;
    }
    if(+inputMonth.value > 12 || +inputMonth.value === 0){
        errorMonth.textContent = "Must add a valid date";
        isValid = false;
        return
    }else{
        errorMonth.textContent = "";
        isValid = true;
    }
})
inputYear.addEventListener("input", (e)=>{
    if(+inputYear.value == ""){
        errorYear.textContent = "This field is required";
        isValid = false;
        return
    }else{
        errorYear.textContent = "";
        isValid = true
    }
    if(+inputYear.value > `${year}` || +inputYear.value === 0){
        errorYear.textContent = "Must add a valid date";
        isValid = false;
        return
    }else{
        errorYear.textContent = "";
        isValid = true;
    }
})


//Event "onclick"
  btn.onclick = () =>{
     calculateAge();
    }
    


