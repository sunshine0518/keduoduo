window.onload=function (){
    var imgSlider=document.getElementsByClassName("img_slider");
    var imgSlider_div=document.getElementsByClassName("imgSlider_div")[0];
    var dian=document.getElementsByClassName("dian");
    var timer=null;
    var index=0;
    dian[index].style.backgroundColor="#ff9000";
    for(var i=0;i<imgSlider.length;i++){
        imgSlider[i].style.zIndex=imgSlider.length-i-1;
    }
    timer=setInterval(function (){
        banner("right");
    },2000);
    function banner(direction){
        if(direction=="right"){
            for(var i=0;i<dian.length;i++){
                dian[i].style.backgroundColor="";
            }
            index=(index+1)%3;
            for(var i=0;i<imgSlider.length;i++){
                var zIndex=imgSlider[i].style.zIndex;
                zIndex++;
                if(zIndex==imgSlider.length){
                    zIndex=0;
                }
                imgSlider[i].style.zIndex=zIndex;
                dian[index].style.backgroundColor="#ff9000";
            }
        }
        else{
            for(var i=0;i<dian.length;i++){
                dian[i].style.backgroundColor="";
            }
            index=(index-1)>0?index-1:index-1+3;
            index=index%3;
            for(var i=0;i<imgSlider.length;i++){
                var zIndex=imgSlider[i].style.zIndex;
                zIndex--;
                if(zIndex<0){
                    zIndex=imgSlider.length;
                }
                imgSlider[i].style.zIndex=zIndex;
                dian[index].style.backgroundColor="#ff9000";
            }
        }

    }
    window.addEventListener('scroll',function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop>40){
            document.getElementsByClassName("header_div")[0].style.opacity=0.6;
        }
    },true);
}