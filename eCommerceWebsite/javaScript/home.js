var i = 0; // Starting Point
var images = [];
var time = 3000; 


//Image List
images[0] = '../ecommerceWebsite/img/dolphin1.jpeg';
images[1] = '../ecommerceWebsite/img/dolphin2.jpeg';
images[2] = '../ecommerceWebsite/img/dolphin3.jpeg';
images[3] = '../ecommerceWebsite/img/dolphin4.jpeg';
images[4] = '../ecommerceWebsite/img/dolphin5.jpg';
images[5] = '../ecommerceWebsite/img/dolphin6.jpg';
images[6] = '../ecommerceWebsite/img/dolphin7.png';

// Transition
function changeImages(){
    document.getElementById("slide").src = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout('changeImages()', time);
}


window.onload = changeImages;


