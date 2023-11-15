import $ from 'jquery';
import sum from './utils/sum/sum';

console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));
console.log('2 + 3 =', sum(2, 3));

//  Button 1

const button1: HTMLElement = document.querySelector('.button.button-1');
const box1: HTMLElement = document.querySelector('.box.box-1');

button1.addEventListener('click', () => {
  box1.style.backgroundColor = box1.style.backgroundColor === 'yellow' ? '#1FC2AE' : 'yellow';
});

//   Button 2

const button2: HTMLElement = document.querySelector('.button.button-2');
const box2: HTMLElement = document.querySelector('.box.box-2');

button2.addEventListener('click', () => {
  box2.textContent = box2.textContent === 'SUCCESS' ? 'FAIL' : 'SUCCESS';
});

//  Button 3

const button3: HTMLElement = document.querySelector('.button.button-3');
const box3: HTMLElement = document.querySelector('.box.box-3');

button3.addEventListener('click', () => {
  box3.style.visibility = box3.style.visibility === 'hidden' ? 'visible' : 'hidden';
});

//  Button 4

const button4: HTMLElement = document.querySelector('.button.button-4');
const box4: HTMLElement = document.querySelector('.box.box-4');

button4.addEventListener('click', () => {
  box4.style.visibility = box4.style.visibility === 'hidden' ? 'visible' : 'hidden';
});

//  Button 5

const colors: string[] = ['red', 'darkblue', 'antiquewhite', 'pink', 'green'];
const button5: HTMLElement = document.querySelector('.button.button-5');
const box5: HTMLElement = document.querySelector('.box.box-5');
let timeoutId: number;

button5.addEventListener('click', () => {
  clearTimeout(timeoutId);
  const randomIndex = Math.floor(Math.random() * colors.length);
  box5.style.backgroundColor = colors[randomIndex];
  timeoutId = window.setTimeout(() => {
    box5.style.backgroundColor = '';
  }, 2000);
});

//  Button 6

const button6: HTMLElement = document.querySelector('.button.button-6');
const box6: HTMLElement = document.querySelector('.box.box-6');
let counter = 0;

button6.addEventListener('click', () => {
  button6.setAttribute('disabled', 'true');
  const incrementText = () => {
    if (counter < 10) {
      counter += 1;
    } else {
      counter = 0;
    }
    box6.textContent = counter.toString();
  };
  const intervalId = setInterval(incrementText, 1000);
  setTimeout(() => {
    clearInterval(intervalId);
    box6.textContent = '0';
    button6.removeAttribute('disabled');
  }, 11 * 1000);
});

//  Button 7

const button7: HTMLElement = document.querySelector('.button.button-7');
const boxes = Array.from(document.querySelectorAll('.box')) as HTMLElement[];
const body: HTMLElement = document.querySelector('body');

button7.addEventListener('click', () => {
  body.style.backgroundColor = body.style.backgroundColor === 'rgb(0, 0, 0)' ? '#FFF' : 'rgb(0, 0, 0)';
  boxes.forEach((box, index) => {
    const currentColor = box.style.backgroundColor;
    const newColor = currentColor === 'rgb(24, 213, 225)' ? 'rgb(31, 194, 174)' : 'rgb(24, 213, 225)';
    boxes[index].style.backgroundColor = newColor;
  });
});

//  Box 1

const box1hover: HTMLElement = document.querySelector('.box.box-1');

box1hover.addEventListener('mouseenter', () => {
  box1hover.style.backgroundColor = 'red';
});
box1hover.addEventListener('mouseleave', () => {
  box1hover.style.backgroundColor = '';
});
