'use strict'

function init(){
    changeBackgroundColor()
    changeTextColor()
}

function changeBackgroundColor(){
    var color = getBackgroundColor()
    if (!color) return
    var elBody = document.querySelector('body')
    elBody.style.backgroundColor = color
}

function changeTextColor(){
    var color = getTextColor()
    console.log(color);
    if (!color) return
    var elBody = document.querySelector('body')
    elBody.style.color = color
}