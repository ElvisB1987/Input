var fname = document.getElementsByClassName("text_input");
var wrongname = document.getElementsByClassName("error");
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function ValidateForm(e) {
    e.preventDefault();

    for (let i = 0; i < fname.length; i++) {
        if (fname[i].value == "") {
            wrongname[i].style.visibility = "visible";
            fname[i].style.borderColor = "red"
            fname[i].style.background = "url(./images/icon-error.svg) no-repeat 95%"
        } else if (fname[i].id == "email" && !filter.test(email.value)) {
            wrongname[i].style.visibility = "visible";
            fname[i].style.borderColor = "red"
            fname[i].style.background = "url(./images/icon-error.svg) no-repeat 95%"
        }

        else {
            wrongname[i].style.visibility = "hidden"
            fname[i].style.outline = 'none';
            fname[i].style.borderColor = "gray"
            fname[i].style.background = "none"
        }
    }
}
document.getElementById('test').onsubmit = ValidateForm;
