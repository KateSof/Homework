$(document).ready(()=>{
    const btnTop = $(".scroll-top");
    const checkScrollingViewPort= () =>{
        const scrolling = window.scrollY;
        const windowHeight = window.innerHeight;
        if(scrolling > windowHeight){
            btnTop.fadeIn(100);
        }
        else{
            btnTop.fadeOut(100)
        }
    }
    checkScrollingViewPort();
    $(window).scroll(checkScrollingViewPort);
    btnTop.on("click" ,()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        });
    });
    const contentNav = $(".contentNav");
    contentNav.on("click",function(event){
        if(event.target.tagName !== "A") return;
        const elementClick = $(event.target).attr("href");
        const destination = $(elementClick).offset().top;
        window.scrollTo({
            top:destination,
            behavior:"smooth",
        });
        return false;
    });

    const slider = $(".sliderToggle");
    slider.on("click",()=> {
        $(".most-popular-posts").slideToggle()("slow");
    });

})