let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
Copy to Clipboard
let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('我最喜欢巧克力冰激淋了。');
} else {
  alert('但是巧克力才是我的最爱呀……');
}
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
  multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
document.querySelector('html').addEventListener('click', () => {
    alert('别戳我，我怕疼。');
  });
  let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
  }