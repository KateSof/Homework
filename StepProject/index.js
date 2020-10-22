const jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
    jsTriggers.forEach(function(trigger) {
   trigger.addEventListener('click', function() {
      const id = this.getAttribute('data-tab'),
          content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
          activeTrigger = document.querySelector('.js-tab-trigger.active'),
          activeContent = document.querySelector('.js-tab-content.active');
      
      activeTrigger.classList.remove('active'); // 1
      trigger.classList.add('active'); // 2
      
      activeContent.classList.remove('active'); // 3
      content.classList.add('active'); // 4
   });
});

const loadMore = document.querySelector("#load-more-btn");
const gridBlock = document.querySelector(".our-amazing-work-pics");
loadMore.onclick = function(e){
    e.preventDefault();
    loadMore.style.display = "none";
    for(let i=5;i<=7;i++){

        gridBlock.insertAdjacentHTML("afterbegin",` <li class="work-picture web"><div class="work-picture-hover"><img src="img/icon.png" class="icon-hover">
            <h3 class="design-hover">creative design</h3>
            <p class="design-tab-text">Web Design</p>
        </div>
    <img class="work-img" src="img/web_design/web-design${i}.jpg" width="285" height="211">
    </li>`);

        gridBlock.insertAdjacentHTML("afterbegin",` <li class="work-picture wordpress">
        <div class="work-picture-hover">
            <img src="img/icon.png" class="icon-hover">
            <h3 class="design-hover">creative design</h3>
            <p class="design-tab-text">Web Design</p>
        </div>
        <img class="work-img" src="img/wordpress/wordpress${i}.jpg" width="285" height="211">
    </li>`);

        gridBlock.insertAdjacentHTML("afterbegin",`<li class="work-picture design">
        <div class="work-picture-hover">
            <img src="img/icon.png" class="icon-hover">
            <h3 class="design-hover">creative design</h3>
            <p class="design-tab-text">Web Design</p>
        </div>
    <img class="work-img" src="img/graphic_design/graphic-design${i}.jpg" width="285" height="211">
    </li>`);

        gridBlock.insertAdjacentHTML("afterbegin",` <li class="work-picture landing">
        <div class="work-picture-hover">
            <img src="img/icon.png" class="icon-hover">
            <h3 class="design-hover">creative design</h3>
            <p class="design-tab-text">Web Design</p>
        </div>
        <img class="work-img" src="img/landing_page/landing-page${i}.jpg" width="285" height="211">
    </li>`);
    }
};


$(document).ready(function(){
    $(".work-tab").click(function(){
        const value = $(this).attr("data-filter");
     
        if(value === "all"){
            $(".work-picture").show("1000");
        }
        else{
            $(".work-picture").not("."+ value).hide();
            $(".work-picture").filter("."+ value).show();
        }
        

    });

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true,
   
    
  });
});

