const slides =document.querySelector('.slides')
const liList = document.querySelectorAll('.slides li')
const width = 300
const margin = 30
let currentIndex = 0
const liAmount = liList.length
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
slides.style.width = (width+margin)*8-margin + 'px'

function movePage(num){
    slides.style.left = -(num)*(margin+width) + 'px'
    currentIndex = num
}

nextButton.addEventListener('click',()=>{
    if(currentIndex < liAmount-3){
        movePage(currentIndex+1)
    }else{
        movePage(0)
    }
})
prevButton.addEventListener('click',()=>{
  if(currentIndex > 0 ){
      movePage(currentIndex - 1)
  }else{
        movePage(liAmount - 3)
  }
})