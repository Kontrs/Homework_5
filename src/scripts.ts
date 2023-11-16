import $ from 'jquery';
import sum from './utils/sum/sum';

console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));
console.log('2 + 3 =', sum(2, 3));

//  Button 1

const button1 = document.querySelector<HTMLButtonElement>('.button.button-1');
const box1 = document.querySelector<HTMLElement>('.box.box-1');

button1.addEventListener('click', () => {
  box1.style.backgroundColor = box1.style.backgroundColor === 'rgb(255, 255, 0)' ? '#1FC2AE' : 'rgb(255, 255, 0)';
});

//   Button 2

const button2 = document.querySelector<HTMLButtonElement>('.button.button-2');
const box2 = document.querySelector<HTMLElement>('.box.box-2');

button2.addEventListener('click', () => {
  box2.textContent = box2.textContent === 'SUCCESS' ? 'FAIL' : 'SUCCESS';
});

//  Button 3

const button3 = document.querySelector<HTMLButtonElement>('.button.button-3');
const box3 = document.querySelector<HTMLElement>('.box.box-3');

button3.addEventListener('click', () => {
  box3.style.visibility = box3.style.visibility === 'hidden' ? 'visible' : 'hidden';
});

//  Button 4

const button4 = document.querySelector<HTMLButtonElement>('.button.button-4');
const box4 = document.querySelector<HTMLElement>('.box.box-4');

button4.addEventListener('click', () => {
  box4.style.visibility = box4.style.visibility === 'hidden' ? 'visible' : 'hidden';
});

//  Button 5

const colors: string[] = ['red', 'darkblue', 'antiquewhite', 'pink', 'green'];
const button5 = document.querySelector<HTMLButtonElement>('.button.button-5');
const box5 = document.querySelector<HTMLElement>('.box.box-5');
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

const button6 = document.querySelector<HTMLButtonElement>('.button.button-6');
const box6 = document.querySelector<HTMLElement>('.box.box-6');
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
  const intervalId = setInterval(incrementText, 3000);
  setTimeout(() => {
    clearInterval(intervalId);
    box6.textContent = '0';
    button6.removeAttribute('disabled');
  }, 11 * 3000);
});

//  Button 7

const button7 = document.querySelector<HTMLButtonElement>('.button.button-7');
const boxes = Array.from(document.querySelectorAll('.box')) as HTMLElement[];
const body = document.querySelector<HTMLBodyElement>('body');

button7.addEventListener('click', () => {
  body.style.backgroundColor = body.style.backgroundColor === 'rgb(0, 0, 0)' ? '#FFF' : 'rgb(0, 0, 0)';
  boxes.forEach((box, index) => {
    const currentColor = box.style.backgroundColor;
    const newColor = currentColor === 'rgb(24, 213, 225)' ? 'rgb(31, 194, 174)' : 'rgb(24, 213, 225)';
    boxes[index].style.backgroundColor = newColor;
  });
});

//  Box 1

box1.addEventListener('mouseenter', () => {
  box1.style.backgroundColor = 'red';
});
box1.addEventListener('mouseleave', () => {
  const getBodyStyle = getComputedStyle(body);
  if (getBodyStyle.backgroundColor === 'rgb(255, 255, 255)') {
    box1.style.backgroundColor = '#1FC2AE';
  } else if (getBodyStyle.backgroundColor === 'rgb(0, 0, 0)') {
    box1.style.backgroundColor = 'rgb(24, 213, 225)';
  }
});

//  Box 5
let boxCounter = 0;
let intervalIdBox: number;
box5.addEventListener('mouseenter', () => {
  const incrementText = () => {
    if (boxCounter < 10) {
      boxCounter += 1;
    }
    box5.textContent = boxCounter.toString();
  };
  intervalIdBox = window.setInterval(incrementText, 1000);
});
box5.addEventListener('mouseleave', () => {
  clearInterval(intervalIdBox);
  boxCounter = 0;
  box5.textContent = boxCounter.toString();
});

//  Input

const inputBox = document.querySelector<HTMLInputElement>('.input-box');
const outputText = document.querySelector<HTMLParagraphElement>('.output-text');

inputBox.addEventListener('input', () => {
  const inputValue = inputBox.value;
  outputText.textContent = inputValue;
});
