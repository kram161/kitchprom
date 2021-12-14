try{
    window.onload = function () {
        slideOne();
        slideTwo();
    }

    let sliderOne = document.getElementById("slider-1");
    let sliderTwo = document.getElementById("slider-2");
    let displayValOne = document.getElementById("range1");
    let displayValTwo = document.getElementById("range2");
    let minGap = 0;
    let sliderTrack = document.querySelector(".catalog-selected__filters__buttons__range__wrapper__container__slider-track");
    let sliderMaxValue = document.getElementById("slider-1").max;

    function slideOne() {
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderOne.value = parseInt(sliderTwo.value) - minGap;
        }
        displayValOne.textContent = sliderOne.value;
        fillColor();
    }

    function slideTwo() {
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderTwo.value = parseInt(sliderOne.value) + minGap;
        }
        displayValTwo.textContent = sliderTwo.value;
        fillColor();
    }

    function fillColor() {
        percent1 = (sliderOne.value / sliderMaxValue) * 100;
        percent2 = (sliderTwo.value / sliderMaxValue) * 100;
        sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #6398DC ${percent1}% , #6398DC ${percent2}%, #dadae5 ${percent2}%)`;
    }

}
catch {};

window.addEventListener('load',function (){
        const minus = document.querySelectorAll('.decrease')
        const plus = document.querySelectorAll('.increase')
        let number = document.querySelectorAll('.number')
        for (let i = 0; i < number.length; i++){
            let numberInt = number[i].textContent;
            plus[i].addEventListener('click',function (){
                numberInt = Number(numberInt) + 1;
                let numberText = '' + numberInt;
                number[i].innerHTML = numberText;
            })
            minus[i].addEventListener('click',function (){
                if( numberInt < 0){
                    numberInt = 0;
                }
                else if(numberInt > 0){
                    numberInt = Number(numberInt) - 1;
                    let numberText = '' + numberInt;
                    number[i].innerHTML = numberText;
                }
            })
        }
})