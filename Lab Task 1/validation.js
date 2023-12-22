$(document).ready(function(){
    $("#myForm").validate({
      rules: {
         name: {
             required: true,
             minlength: 2,
         },
         email: {
             required: true,
             email: true
         },
         password: {
             required: true,
             minlength: 8,
             maxlength: 15,
         },
         confirmpass: {
             required: true,
             equalTo: "#password"
         },
         agree_to_terms: "required",
     },
     messages: {
         name: {
             required: "Please enter your name",
             minlength: "Minimum length should be 2 characters"
         },
         email: {
             required: "Please enter your email",
             email: "Please enter a valid email"
         },
         password: {
             required: "Please enter password",
             minlength: "Password should be 8 characters",
             maxlength: "Password can't have more than 15 characters",
         },
         confirmpass: {
             required: "Please re-enter your password",
             equalTo: "Your password should be equal to the one above"
         },
         agree_to_terms: "Please agree to the terms and conditions",
     }
    });
 });
 