onload();

function onload() {
    bannerpagecontainer();
    slideranimatedrol();

}






function bannerpagecontainer() {
    let homepagecontainer = document.querySelector('.ddddddddddddd');

   
    let innerHtml = '';

    items.forEach(item => {
        innerHtml += `
        <div class="video_container">
           
                <div class="img_conainerr">
                    <a href="${item.pagehtml}"><img onclick="addToBag(${item.id})" class="tumbalel" src="${item.banner}" ></a>
                    
                </div>
                <div class="tittle-container flex-div">
                    <div class="chenal-immg">
                       
                    </div>
                    <div onclick="addToBag(${item.id})" class="titer-contat-t">
                        <a class="titer-contat-tt" href="${item.pagehtml}">${item.tittle}</a>
                    </div>
                </div>
                 
           
                     
        </div>
        `
    })
    homepagecontainer.innerHTML = innerHtml;

}


// slider start ======================================

function  slideranimatedrol() {
    var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()
}



// slider end=================================================