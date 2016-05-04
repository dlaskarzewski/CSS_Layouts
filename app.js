$("#fullnav").hide();
$("#imgb").click(function(){
    this.style.transform= "rotate(" +getNextAngle()+"deg)";
    $("#fullnav").toggle(1000);
});


var nextAngle = 0;
function getNextAngle() {
    nextAngle += 90;    
    return nextAngle;
}
