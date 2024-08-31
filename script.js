// //your JS code here. If required.
// https://www.svgrepo.com/show/345221/three-dots.svg
let btn=document.getElementById("btn");
let fname=document.getElementById("f_name");
let lname=document.getElementById("l_name");
let phone=document.getElementById("phone_no");
let mail=document.getElementById("email");

btn.addEventListener("click",()=>{
	alert(`First Name:${fname.value} Last Name:${lname.value} Phone Number:${phone.value} Email ID:${mail.value}`);
	
})