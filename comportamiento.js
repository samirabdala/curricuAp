

let foto = document.getElementById('photoSmall');
let univ1 = document.getElementById("univ1");
let univ2 = document.getElementById("univ2");
let univ3 = document.getElementById("univ3");
let bigPhoto = document.getElementById("imgBig");

univ1.addEventListener('mouseover', function(){
    univ1.style.color = "orange"
    univ1.style.cursor=('pointer');

});
univ1.addEventListener('mouseout', function(){
    univ1.style.color = "black"

});

univ2.addEventListener('mouseover', function(){
    univ2.style.color = "orange"
    univ2.style.cursor=('pointer');

});
univ2.addEventListener('mouseout', function(){
    univ2.style.color = "black"

});

univ3.addEventListener('mouseover', function(){
    univ3.style.color = "orange"
    univ3.style.cursor=('pointer');

});
univ3.addEventListener('mouseout', function(){
    univ3.style.color = "black"

});

foto.addEventListener('mouseover', function(){
    foto.style.cursor=("pointer");
   
});
foto.addEventListener('click', function(){
    bigPhoto.style.display=("block");

});

document.getElementById("close").addEventListener("mouseover", function(){
    document.getElementById("close").style.cursor=('pointer');
});
document.getElementById("close").addEventListener("click", function(){
    imgBig.style.display=("none")
})

univ1.addEventListener('click', function(){
    if(document.getElementById("univPalermo").style.display == "none"){
        document.getElementById("univPalermo").style.display = "block";
        document.getElementById("univUrbanismo").style.display = "none";
    document.getElementById("unc").style.display = "none";
    } else {
        document.getElementById("univPalermo").style.display = "none";

    }
});
univ2.addEventListener('click', function(){
    if(document.getElementById("univUrbanismo").style.display == "none"){
        document.getElementById("univUrbanismo").style.display = "block";
        document.getElementById("univPalermo").style.display = "none";
    document.getElementById("unc").style.display = "none";
    } else {
        document.getElementById("univUrbanismo").style.display = "none";

    }
});
univ3.addEventListener('click', function(){
    if(document.getElementById("unc").style.display == "none"){
        document.getElementById("unc").style.display = "block";
        document.getElementById("univPalermo").style.display = "none";
        document.getElementById("univUrbanismo").style.display = "none";
    } else {
        document.getElementById("unc").style.display = "none";

    }
});

