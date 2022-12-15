import React from 'react'

export default function backToTop() {
  console.log('backToTop called')
  window.scrollTo(0, 0) // add a period between window and scrollTo
}
