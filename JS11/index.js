const btns = document.querySelectorAll(".btn");

	
		

document.addEventListener('keydown', function(e){

    const eventKey = e.key;

    console.log(eventKey);


btns.forEach((item) => {
if (item.dataset.keyCode === eventKey.toUpperCase()){

    item.classList.toggle('active');
    }
    if (item.dataset.keyCode !==  eventKey.toUpperCase()){
     item.classList.remove('active');
    
    }
}); 
});