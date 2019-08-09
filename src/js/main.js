"use strict";

const btn1 = document.querySelector('.nav__list-button--1-js')
const btn2 = document.querySelector('.nav__list-button--2-js')
const btn3 = document.querySelector('.nav__list-button--3-js')
const btn4 = document.querySelector('.nav__list-button--4-js')

const groupOne = document.querySelector('.users-container--one-js');
const groupTwo = document.querySelector('.users-container--two-js');
const groupThree = document.querySelector('.users-container--three-js');
const groupFour = document.querySelector('.users-container--four-js');

const allContainers = document.querySelectorAll(".users-container");
const allButtons = document.querySelectorAll(".nav__list-button");

btn1.addEventListener("click", () => {slideIn(groupOne, btn1)})
btn2.addEventListener("click", () => {slideIn(groupTwo, btn2)})
btn3.addEventListener("click", () => {slideIn(groupThree, btn3)})
btn4.addEventListener("click", () => {slideIn(groupFour, btn4)})

function slideIn(group, btn) {
    allContainers.forEach(element => {
        if (element.classList.contains('visible')) {
            element.classList.remove('visible');    
            console.log(`Visible ${element.innerHTML}`)
        }
        console.log(element)
    });
    allButtons.forEach(button => {
        if (button.classList.contains('nav__list-button--active')) {
            button.classList.remove('nav__list-button--active');    
        }
    });
    btn.classList.add('nav__list-button--active');
    group.classList.add('visible')
}