/* form */
const usernameEle = document.getElementById('username');
 const emailEle = document.getElementById('email'); 
 const phoneEle = document.getElementById('phone'); 
 const btnRegister = document.getElementById('btn-register'); 
 const inputEles = document.querySelectorAll('.input-row'); 
 btnRegister.addEventListener('click', function () { Array.from(inputEles).map((ele) => ele.classList.remove('success', 'error') );
  let isValid = checkValidate(); 
  if (isValid) { 
    alert('Gửi đăng ký thành công'); 
  } 
}); 
function checkValidate() { let usernameValue = usernameEle.value; 
  let emailValue = emailEle.value; 
  let phoneValue = phoneEle.value; 
  let isCheck = true; 
  if (usernameValue == '') { setError(usernameEle, 'Tên không được để trống');
   isCheck = false;
   } else { 
    setSuccess(usernameEle); 
  } 
  if (emailValue == '') { setError(emailEle, 'Email không được để trống');
   isCheck = false; 
  } else if (!isEmail(emailValue)) { setError(emailEle, 'Email không đúng định dạng'); 
  isCheck = false;
 } else { setSuccess(emailEle);
 }
  if (phoneValue == '') { setError(phoneEle, 'Số điện thoại không được để trống'); 
  isCheck = false; 
} else if (!isPhone(phoneValue)) { setError(phoneEle, 'Số điện thoại không đúng định dạng'); 
isCheck = false;
 } else { setSuccess(phoneEle);
 } 
 return isCheck;
 } 
 function setSuccess(ele) { ele.parentNode.classList.add('success');
 } 
 function setError(ele, message) { let parentEle = ele.parentNode; 
  parentEle.classList.add('error'); 
  parentEle.querySelector('small').innerText = message; 
} 
function isEmail(email) { 
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( 
    email 
    );
   } 
   function isPhone(number) { 
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number); 
  }

// cho phan anh chuyen qua lại
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];
// tại sao lại có [0] như  thế vì là một html colection nên khi mình muốn lấy giá trị html thì phải thêm [0]. 
//Nếu mình có 2 cái component cùng class thì khi [0] nó sẽ hiển thị component 1 còn [1] thì nó sẽ hiển thị component 2.
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function () {
  alert("Cảm ơn bạn đã thanh toán đơn hàng")
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}