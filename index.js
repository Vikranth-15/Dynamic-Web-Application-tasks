function switchOn(){
    document.getElementById("bulbImage").src="https://www.shutterstock.com/shutterstock/videos/345511/thumb/3.jpg?ip=x480";
    document.getElementById("catImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("onSwitch").style.backgroundColor="Green";
    document.getElementById("onSwitch").style.Color="green";
    document.getElementById("switchStatus").textContent="Switched On"
     document.getElementById("offSwitch").style.backgroundColor="grey";
}

function switchOff(){
        document.getElementById("catImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
        document.getElementById("bulbImage").src="https://tse1.mm.bing.net/th/id/OIP.44hacXSz6crVHssSUFVaxQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3";
        document.getElementById("offSwitch").style.backgroundColor="Red";
    document.getElementById("offSwitch").style.Color="White";
     document.getElementById("onSwitch").style.backgroundColor="grey";
    document.getElementById("switchStatus").textContent="Switched Off"
}