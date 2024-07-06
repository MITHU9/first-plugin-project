function popupHtml() {
  let html =
    '<div class="popup-img"><span class="npopup" onclick="closePopup()"><img id="close" src="Lightbox/Images/cross.png" alt=""/></span><img id="left-arrow" src="Lightbox/Images/left.png" alt="" /><img id="right-arrow" src="Lightbox/Images/right.png" alt="" /><img id="box-img" src="Images/img1.jpg" alt="" /></div>';

  let popDiv = document.createElement("div");
  popDiv.innerHTML = html;
  document.body.insertBefore(popDiv, document.body.firstChild);
}
//popupHtml();

//! Function to initialize the popup..
let img;
let current;
function openPopup(targetImg) {
  //! Selecting All images....
  img = document.getElementsByClassName(targetImg);
  //console.log(img);
  for (let i = 0; i < img.length; i++) {
    img[i].style.cursor = "pointer";
    img[i].addEventListener("click", function () {
      let boxImg = document.getElementById("box-img");
      boxImg.src = this.src;
      document.querySelector(".popup-img").style.display = "block";
      checkArrow();
      //console.log(i);
    });
  }
  popupHtml();

  //? Right Button Function...
  document.getElementById("right-arrow").addEventListener("click", function () {
    rightClick();
  });

  //! Left Button Function....
  document.getElementById("left-arrow").addEventListener("click", function () {
    leftClick();
  });
}

//? Function to close the popup...
function closePopup() {
  let boxImg = document.getElementById("box-img");
  boxImg.src = "";
  document.querySelector(".popup-img").style.display = "none";
}

//! Target Clicked Image Index....
function targetImageIndex() {
  for (let i = 0; i < img.length; i++) {
    if (img[i].src == document.getElementById("box-img").src) {
      current = i;
      //console.log(current);
    }
  }
}

//! Function to Right Click Arrow...
function rightClick() {
  targetImageIndex();
  current++;
  document.getElementById("box-img").src = img[current].src;
  checkArrow();
}

//! Function to Left Click arrow....
function leftClick() {
  targetImageIndex();
  current--;
  document.getElementById("box-img").src = img[current].src;
  checkArrow();
}

function checkArrow() {
  targetImageIndex();
  if (img.length == 1) {
    document.getElementById("left-arrow").style.display = "none";
    document.getElementById("right-arrow").style.display = "none";
  } else if (current == 0) {
    document.getElementById("left-arrow").style.display = "none";
    document.getElementById("right-arrow").style.display = "block";
  } else if (current == img.length - 1) {
    document.getElementById("right-arrow").style.display = "none";
    document.getElementById("left-arrow").style.display = "block";
  } else {
    document.getElementById("left-arrow").style.display = "block";
    document.getElementById("right-arrow").style.display = "block";
  }
}
