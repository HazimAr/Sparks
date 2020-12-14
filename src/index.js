import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'
import FourOFour from './Components/Main/404'
import Regis from './Components/Main/Temp'

import Contact from './Components/Main/Contact'
import Faq from './Components/Main/Faq'
import Intro from './Components/Main/Intro'
import { checkHeader } from './Components/Header'

const elementsToCheck = [ // [elementID, animation] set id to visibility:hidden and position:relative in CSS
  ['about-img-1', 'imgBlowUp 1.5s'],
  ['row-0', 'slideFromLeft 1.5s'],
  ['about-img-2', 'imgBlowUp 1.5s'],
  ['row-1', 'slideFromRight 1.5s'],
  ['register-img', 'slideFromRight 1.5s'],
  ['register-text', 'slideFromLeft 1.5s'],
  ['faq-left', 'slideFromLeft 1.5s'],
  ['faq-middle', 'onScrollFade 1.5s'],
  ['faq-right', 'slideFromRight 1.5s'],
  ['contact', 'onScrollFade 1.5s'],
]
const checkFadeElements = function (array) {
  const checkElement = function (array, iteration) {
    const offset = window.innerHeight + -200; // px away from bottom of screen to trigger animation
    if (window.scrollY + offset > array[iteration][2]) {
      const ele = document.getElementById(array[iteration][0])
      ele.style.visibility = 'visible'
      ele.style.animation = array[iteration][1]
      return array.splice(iteration, 1)
    }
  }
  if (array.length !== 0) {
    checkElement(array, 0)
  }
}
const generateOffsets = function (array) {
  const getOffset = function (el) {
    let _y = 0;
    while (el && !isNaN(el.offsetTop)) {
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return _y;
  }
  for (let j = 0; j < array.length; j++) {
    const ele = document.getElementById(array[j][0])
    ele.style.visibility = 'hidden'
    ele.style.position = 'relative'
    const y = getOffset(ele)
    array[j].push(y)
  }
}

export function checkAll() {
  let len = elementsToCheck.length
  for (let i = 0; i < len; i++) {
    checkFadeElements(elementsToCheck)
  }
}

function App() {
  window.onload = function () {
    try {
      generateOffsets(elementsToCheck)
      checkAll(elementsToCheck)
    } catch { }
  }
  window.onscroll = function () {
    checkFadeElements(elementsToCheck)
    checkHeader()
  }
  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Header />
        <Intro />
        <Faq />
        <Contact />
        <Footer />
      </Route>
      <Route path='/register'>
        <Header />
        <Regis />
        <Footer />
      </Route>
      <Route path="" component={FourOFour} />
    </Switch>
  </BrowserRouter>
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);