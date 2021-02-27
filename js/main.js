let position = 1

const prevSlide = () => {
  slider(position-1)
}

const nextSlide = () => {
  slider(position+1)
}


const slider = (n) => {
  if (n > 0 && n < 4) {
    //Changing previous items

    //change prev button
    let prevButton = document.getElementsByClassName(`slider_button_${position}`)
    let prevButtonClassList = prevButton[0].classList
    if (prevButtonClassList.contains('active')) {
      prevButtonClassList.remove('active')
    }


    //change prev img
    let prevImg = document.getElementsByClassName(`slide_img_${position}`)
    let prevImgClassList = prevImg[0].classList
    prevImgClassList.add('slide_img_out')
    prevImg[0].style.display = 'none'

    //Switching them to new one
    position = n

    //change to new button
    let button = document.getElementsByClassName(`slider_button_${position}`)
    button[0].classList.add('active')

    //change to new img
    let img = document.getElementsByClassName(`slide_img_${position}`)
    img[0].style.display = "block"
    img[0].classList.remove('slide_img_out')
    img[0].classList.add('slide_img_in')


    //change to new text
    let newHeader = document.getElementsByClassName('slide_header')
    let newMain = document.getElementsByClassName('slide_main')
    let newBottom = document.getElementsByClassName('slide_bottom')
    newHeader[0].style.opacity = 0
    newMain[0].style.opacity = 0
    newBottom[0].style.opacity = 0
    if (position === 1) {
      newHeader[0].innerHTML = "Services"

      newMain[0].innerHTML = "We bring a</br>" +
        "wonderful " + "<p1 style='color: #ff5617'>artistic</p1> " +
      "sense to project"

      newBottom[0].innerHTML = "Our passion is to create solutions which could give" +
            "that extra value to your product, service or to business" +
            "in general."

      setTimeout(() => {newHeader[0].style.opacity = 1}, 300)
      setTimeout(() => {newMain[0].style.opacity = 1}, 400)
      setTimeout(() => {newBottom[0].style.opacity = 1}, 550)
    }
    if (position === 2) {
      newHeader[0].innerHTML = "Fastness"

      newMain[0].innerHTML = "We supply our products as fast\n" +
        "as <p1 style=\"color: #ff5617\">nobody</p1>\n" +
        "does"

      newBottom[0].innerHTML = "Our passion is to deliver\n" +
        "out final product as fast as we can.\n" +
        "If you've found faster and cheaper working company,\n" +
        "we will return your money."

      setTimeout(() => {newHeader[0].style.opacity = 1}, 300)
      setTimeout(() => {newMain[0].style.opacity = 1}, 400)
      setTimeout(() => {newBottom[0].style.opacity = 1}, 550)
    }
    if (position === 3) {
      newHeader[0].innerHTML = "Quality"

      newMain[0].innerHTML = "We make the </br>" + " <p1 style='color: #ff5617'>best</p1> "
            + "product on </br> the market"

      newBottom[0].innerHTML = "Our passion is to make our client happy. </br>" +
        "We have over than 2.000 " +
        "clients every week and nobody of them was deceived"

      setTimeout(() => {newHeader[0].style.opacity = 1}, 300)
      setTimeout(() => {newMain[0].style.opacity = 1}, 400)
      setTimeout(() => {newBottom[0].style.opacity = 1}, 550)
    }
  } else {
    if (n === 4) {
      slider(1)
    } else {
      slider(3)
    }
  }
}


let positionAbout = 2
let prevPosition;

const nextSlideAbout = () => {
  switcherAbout(positionAbout + 1)
}

const prevSlideAbout = () => {
  switcherAbout(positionAbout - 1)
}

const switcherAbout = (n) => {
  if (n > 0 && n < 4) {
    //Change prev number
    const prevButton = document.getElementsByClassName(`slider-about__switcher_${positionAbout}`)
    prevButton[0].classList.remove('switcher_active')


    prevPosition = positionAbout
    positionAbout = n

    const prevSlide = document.getElementsByClassName(`slide-about__${prevPosition}`)[0].classList
    let currentSlide;
    if (prevSlide.contains('slider-about__text_down-to-in')) {
      currentSlide = 'slider-about__text_down-to-in'
    }

    if (prevSlide.contains('slider-about__text_up-to-in')) {
      currentSlide = 'slider-about__text_up-to-in'
    }

    const slide = document.getElementsByClassName(`slide-about__${positionAbout}`)[0].classList
    const slide2 = document.getElementsByClassName(`slide-about__${2}`)[0].classList

    if (positionAbout === 3 && prevPosition === 1) {
      prevSlide.remove(currentSlide)
      prevSlide.add('slider-about__text_up')
      const slide2 = document.getElementsByClassName(`slide-about__${2}`)[0].classList
      slide2.remove('slider-about__text_down')
      slide2.add('slider-about__text_up')
      slide.remove('slider-about__text_down')
      slide.add('slider-about__text_up-to-in')
    }

    if (positionAbout === 3 && prevPosition === 1) {
      slide2.remove('slider-about__text_down')
      slide2.add('slider-about__text_up')
    }

    if (positionAbout === 1 && prevPosition === 3) {
      slide2.remove('slider-about__text_up')
      slide2.add('slider-about__text_down')
    }

    if (slide.contains('slider-about__text_down')) {
      prevSlide.remove(currentSlide)
      prevSlide.add('slider-about__text_up')
      slide.remove('slider-about__text_down')
      slide.add('slider-about__text_down-to-in')
    }

    if (slide.contains('slider-about__text_up')) {
      prevSlide.remove(currentSlide)
      prevSlide.add('slider-about__text_down')
      slide.remove('slider-about__text_up')
      slide.add('slider-about__text_up-to-in')
    }
    const newButton = document.getElementsByClassName(`slider-about__switcher_${positionAbout}`)
    newButton[0].classList.add('switcher_active')

  }
}

let prevImage = 0;
const reviews = (n) => {
  let messages = [
    "“Thanks so much for the awesome customer </br>\n" +
    "service. So many companies, large and small, </br>\n" +
    "have a lot to learn from you. Great job!”",

    '”Your communications is attentive, personable</br>' +
    ', and professional. Will and his team </br>' +
    ' provide great support for my company\'s needs!”',

    "”Always available to answer any questions. </br>" +
    " Very knowledgeable about the services they provide. </br>" +
    " Would recommend to anyone!”",

    'Thank you for continuing to produce engaging articles, </br>' +
    'love our 150+ videos. Your content strategy works!'
  ]

  let names = [
    'REBECA MATTHEWS',
    'ROBERT DOPE',
    'JOHN MARTIN',
    'TRAVIS SCOTT'
  ]

  const prevImageEl = document.getElementsByClassName(`photo_${prevImage}`)[0].classList.remove('photo_active')
  prevImage = n
  const nextImg = document.getElementsByClassName(`photo_${prevImage}`)[0].classList.add('photo_active')

  const message = document.getElementsByClassName('clients_thing_text')
  const name = document.getElementsByClassName('clients_thing_name')
  const who = document.getElementsByClassName('clients_thing_name-who')
  message[0].style.opacity=0
  name[0].style.opacity=0

  message[0].innerHTML = messages[prevImage]
  name[0].innerHTML = names[prevImage]

  setTimeout(() => {message[0].style.opacity = 1}, 300)
  setTimeout(() => {name[0].style.opacity = 1}, 400)
  setTimeout(() => {who[0].style.opacity = 1}, 550)
}
