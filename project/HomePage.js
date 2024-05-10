/*document.getElementById('menu-button').addEventListener('click', function(){
    var menubar = document.getElementById('menu-bar');
    menubar.classList.toggle('active');
    
});*/

document.addEventListener('DOMContentLoaded',function(){
    const tabs = document.querySelectorAll('.tab-link');
    tabs.forEach(tabs=>{
        tabs.addEventListener('click',function(){
            document.querySelector('.tab-link.active').classList.remove('active');
            this.classList.add('active');
        });
    });
    
});


document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(function(carousel){
        const track = carousel.querySelector('.image-container');
        const btnLeft = carousel.querySelector('.carousel-control.left');
        const btnRight = carousel.querySelector('.carousel-control.right');
        const images = carousel.querySelectorAll('.image-container img');
        let index = 0;

        function updateButtonState(){
            btnLeft.style.display = index===0?'none':'block';
            btnRight.style.display = index === images.length-1 ? 'none':'block';
        }

        btnLeft.addEventListener('click', function() {
            if (index > 0) {
                index--;
                track.style.transform = 'translateX(' + (-index * 20) + '%)';
                updateButtonState();
            }
        });

        btnRight.addEventListener('click', function() {
            if (index < images.length - 1) {
                index++;
                track.style.transform = 'translateX(' + (-index * 20) + '%)';
                updateButtonState();
            }
        });
        updateButtonState();

    });
    
});
