TheButton = document.getElementById("topBtn");
window.onscroll = function() {scrollFun()};
function scrollFun(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
            TheButton.style.display = "block";
        }else{
            TheButton.style.display = "none";
        }
}
function topFun(){
    document.body.scrollTop =0;
    document.documentElement.scrollTop = 0;
}