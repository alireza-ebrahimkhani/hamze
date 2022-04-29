// translate **
let translate = document.querySelector('.header-translate')
translate.addEventListener('click' , () => {
    let translate_pin = translate.querySelector('.header-translatePin')
    translate_pin.classList.toggle('header-translatePin--active')
})

// hamIco **
let hamIco = document.querySelector('.header-hamIco')
let popup = document.querySelector('.header-popup')
hamIco.addEventListener('click' , () => {
    let line = hamIco.querySelector('.header-line')
    line.classList.toggle('header-line--active')
    popup.classList.toggle('header-popup--active')
})