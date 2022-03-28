$(document).ready(function () {
    $('#AccountTable').DataTable({
        ordering: false,
        searching: false,
        lengthMenu: [[5, 10, 15, 20, -1], [5, 10, 15, 20, "All"]],
    });
});

const eye = document.querySelector(".eye");
eye.addEventListener("click",eyeFunction)
function eyeFunction()
{
const passwordjs= document.querySelector("#passwordInput");
const  hide1= document.querySelector("#hide1");
const hide2= document.querySelector("#hide2");
if(passwordjs.type === 'password')
{
    passwordjs.type='text';
    hide1.style.display='block';
    hide2.style.display='none';
}
else{
    passwordjs.type='password';
    hide1.style.display='none';
    hide2.style.display='block';
}
}