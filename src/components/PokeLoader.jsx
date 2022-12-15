import React from 'react'

export default function backToTop() {
  console.log('backToTop called')
  window.scrollTo(0, 0)
  showButton = false
  document.querySelector('.back-to-top-button').style.display = 'none'
}
