const theme = document.querySelectorAll('.slider .theme');
const thumb = document.querySelectorAll('.thumbnails .thumbnail');
const next = document.getElementById('next');  
const prev = document.getElementById('prev');  

// setting initial counters
let counter = 0;
const itemLength = theme.length;

let refreshTimer = setInterval(()=>{
    next.click();
}, 4000);

next.onclick = function() {  
    counter += 1;
    if(counter>= itemLength){
        counter = 0;
    }
    

    showSlider();
};

function showSlider(){
    let oldTheme = document.querySelector('.theme.active');
    let oldThumbnail = document.querySelector('.thumbnail.active');
    oldTheme.classList.remove('active');
    oldThumbnail.classList.remove('active');

    theme[counter].classList.add('active')
    thumb[counter].classList.add('active');

    clearInterval(refreshTimer);
    refreshTimer = setInterval(()=>{
        next.click();
        
    }, 4000);
    
}

prev.onclick = function(){
    counter -= 1;
    if(counter < 0){
        counter = itemLength - 1;
    }
    

    showSlider();
}
thumb.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        counter = index;
        showSlider();
    });
});