var btn = document.querySelector('.btn')
var slide1 = document.querySelector('.slide1')
var slide2 = document.querySelector('.slide2')
var whiteCar = document.querySelector('.c_one')
var redCar = document.querySelector('.c_two')
var blueCar = document.querySelector('.c_three')
var bcarone = document.querySelector('.bcarone')
var bcartwo = document.querySelector('.bcartwo')
var bcarthree = document.querySelector('.bcarthree')
var close = document.querySelector('.close')
// c_one.addEventListener('click', slidechange, false)
// c_two.addEventListener('click', slidechange, false)
// c_three.addEventListener('click', slidechange, false)



btn.addEventListener('click', ()=>{
    console.log("kk")
    slide1.classList.add('hidden')
    setTimeout(()=>{
        slide2.classList.remove('hidden')
        slide2.classList.add('flash')
        bcarone.classList.remove('hidden')
    },100)
})


function toviewRedcar(){
    redCar.classList.remove('fadeIn')
    redCar.classList.add('fadeOut')
    whiteCar.classList.add('fadeIn')
    blueCar.classList.add('fadeIn')
}
function toviewBluecar(){
    blueCar.classList.remove('fadeIn')
    blueCar.classList.add('fadeOut')
    whiteCar.classList.add('fadeIn')
    redCar.classList.add('fadeIn')
}
function toviewWhitecar(){
    whiteCar.classList.remove('fadeIn')
    whiteCar.classList.add('fadeOut')
    redCar.classList.add('fadeIn')
    blueCar.classList.add('fadeIn')
}

whiteCar.addEventListener('click', ()=>{
    toviewWhitecar();
    bcartwo.classList.add('hidden')
    bcarthree.classList.add('hidden')
    bcarone.classList.remove('hidden')
    bcarone.classList.add('lefttorightanimation')
})

redCar.addEventListener('click', ()=>{
    toviewRedcar();
    bcarone.classList.add('hidden')
    bcarthree.classList.add('hidden')
    bcartwo.classList.remove('hidden')
    bcartwo.classList.add('lefttorightanimation')
})

blueCar.addEventListener('click', ()=>{
    toviewBluecar();
    bcarone.classList.add('hidden')
    bcartwo.classList.add('hidden')
    bcarthree.classList.remove('hidden')
    bcarthree.classList.add('lefttorightanimation')
})
close.addEventListener('click', ()=>{
    console.log("kk")
    slide2.classList.add('hidden')
    slide1.classList.add('flash')
})


