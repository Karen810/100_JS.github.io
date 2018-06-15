//切换图片

var myImage = document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src','images/firefox2.png');
    }else{
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}


//设置个性化内容
var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName() {
    var myName = prompt('Please enter your name.');
    console.log(myName);
    localStorage.setItem('name', myName);
    console.log(myName);

    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
};


