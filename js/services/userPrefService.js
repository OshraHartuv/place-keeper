'use strict'

console.log(3);

function backgroundColorPref(color){
    // console.log(color);
    saveBackgroundColorToStorage(color)
}

function textColorPref(color){
    saveTextColorToStorage(color)
}

function saveTextColorToStorage(color){
    saveToStorage('textColor', color)
}

function getTextColor(){
    return loadFromStorage('textColor')
}

function getBackgroundColor(){
    // var color = loadFromStorage('backgroundColor')
    // if (!color) return '#f7f7f7'
    return loadFromStorage('backgroundColor')
}

function saveBackgroundColorToStorage(color){
    saveToStorage('backgroundColor', color)
}