document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.image-container');
    const btnLeft = document.querySelector('.carousel-control.left');
    const btnRight = document.querySelector('.carousel-control.right');
    const images = document.querySelectorAll('.image-container img');
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
