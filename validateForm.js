// accessing html elements and storing them in veriable
const msg = document.querySelector(".message-box");
const btnSubmit = document.querySelector(".submit-formEntry");
const error = document.querySelector(".err")

//DOM manipulation
btnSubmit.addEventListener('click',function(event){
    //canceling default event
    event.preventDefault();
    // checking validation for msg box 
    if (msg.value.length === 0){
        // if it is empty it warns user
error.classList.add('error');
error.innerText = 'Put some content Please!';
       // else it submits user's input
    }else{
         error.innerText ='Your message is submitted';
    }
});