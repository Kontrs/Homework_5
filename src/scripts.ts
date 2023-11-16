import $ from 'jquery';
import sum from './utils/sum/sum';

console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));
console.log('2 + 3 =', sum(2, 3));

//  Button 1

const button1 = document.querySelector<HTMLButtonElement>('.button-1');
const box1 = document.querySelector<HTMLElement>('.box-1');

if (button1 && box1) {
  button1.addEventListener('click', () => {
    box1.style.backgroundColor = box1.style.backgroundColor === 'rgb(255, 255, 0)' ? '#1FC2AE' : 'rgb(255, 255, 0)';
  });
} else if (button1 === null) {
  console.error('Button1 doesnt exist.');
} else if (box1 === null) {
  console.error('Box1 doesnt exist.');
}

//   Button 2

const button2 = document.querySelector<HTMLButtonElement>('.button-2');
const box2 = document.querySelector<HTMLElement>('.box-2');

if (button2 && box2) {
  button2.addEventListener('click', () => {
    box2.textContent = box2.textContent === 'SUCCESS' ? 'FAIL' : 'SUCCESS';
  });
} else if (button1 === null) {
  console.error('Button2 doesnt exist.');
} else if (box1 === null) {
  console.error('Box2 doesnt exist.');
}

//  Button 3

const button3 = document.querySelector<HTMLButtonElement>('.button-3');
const box3 = document.querySelector<HTMLElement>('.box-3');

if (button3 && box3) {
  button3.addEventListener('click', () => {
    box3.style.visibility = box3.style.visibility === 'hidden' ? 'visible' : 'hidden';
  });
} else if (button1 === null) {
  console.error('Button3 doesnt exist.');
} else if (box1 === null) {
  console.error('Box3 doesnt exist.');
}

//  Button 4

const button4 = document.querySelector<HTMLButtonElement>('.button-4');
const box4 = document.querySelector<HTMLElement>('.box-4');

if (button4 && box4) {
  button4.addEventListener('click', () => {
    box4.style.visibility = box4.style.visibility === 'hidden' ? 'visible' : 'hidden';
  });
} else if (button1 === null) {
  console.error('Button4 doesnt exist.');
} else if (box1 === null) {
  console.error('Box4 doesnt exist.');
}

//  Button 5

const colors: string[] = ['red', 'darkblue', 'antiquewhite', 'pink', 'green'];
const button5 = document.querySelector<HTMLButtonElement>('.button-5');
const box5 = document.querySelector<HTMLElement>('.box-5');
let timeoutId: number;
const body = document.querySelector<HTMLBodyElement>('body');
const getBodyStyle = getComputedStyle(body);

if (button5 && box5) {
  button5.addEventListener('click', () => {
    clearTimeout(timeoutId);
    const randomIndex = Math.floor(Math.random() * colors.length);
    box5.style.backgroundColor = colors[randomIndex];
    timeoutId = window.setTimeout(() => {
      if (getBodyStyle.backgroundColor === 'rgb(255, 255, 255)') {
        box5.style.backgroundColor = '#1FC2AE';
      } else if (getBodyStyle.backgroundColor === 'rgb(0, 0, 0)') {
        box5.style.backgroundColor = 'rgb(24, 213, 225)';
      }
    }, 3000);
  });
} else if (button1 === null) {
  console.error('Button5 doesnt exist.');
} else if (box1 === null) {
  console.error('Box5 doesnt exist.');
}

//  Button 6

const button6 = document.querySelector<HTMLButtonElement>('.button-6');
const box6 = document.querySelector<HTMLElement>('.box-6');
let counter = 0;

if (button6 && box6) {
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
} else if (button1 === null) {
  console.error('Button6 doesnt exist.');
} else if (box1 === null) {
  console.error('Box6 doesnt exist.');
}

//  Button 7

const button7 = document.querySelector<HTMLButtonElement>('.button-7');
const boxes = Array.from(document.querySelectorAll('.box')) as HTMLElement[];

if (button7 && boxes) {
  button7.addEventListener('click', () => {
    body.style.backgroundColor = body.style.backgroundColor === 'rgb(0, 0, 0)' ? '#FFF' : 'rgb(0, 0, 0)';
    boxes.forEach((box, index) => {
      const currentColor = box.style.backgroundColor;
      const newColor = currentColor === 'rgb(24, 213, 225)' ? 'rgb(31, 194, 174)' : 'rgb(24, 213, 225)';
      boxes[index].style.backgroundColor = newColor;
    });
  });
} else if (button1 === null) {
  console.error('Button7 doesnt exist.');
} else if (box1 === null) {
  console.error('Boxes doesnt exist.');
}

//  Box 1

box1.addEventListener('mouseenter', () => {
  box1.style.backgroundColor = 'red';
});
box1.addEventListener('mouseleave', () => {
  if (getBodyStyle.backgroundColor === 'rgb(255, 255, 255)') {
    box1.style.backgroundColor = '#1FC2AE';
  } else if (getBodyStyle.backgroundColor === 'rgb(0, 0, 0)') {
    box1.style.backgroundColor = 'rgb(24, 213, 225)';
  }
});

//  Box 5

let boxCounter = 0;
let intervalIdBox: number;

if (box5) {
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
}

//  Input

const inputBox = document.querySelector<HTMLInputElement>('.input-box');
const outputText = document.querySelector<HTMLParagraphElement>('.output-text');

if (inputBox && outputText) {
  inputBox.addEventListener('input', () => {
    const inputValue = inputBox.value;
    outputText.textContent = inputValue;
  });
} else if (inputBox === null) {
  console.error('inputBox doesnt exist.');
} else if (outputText === null) {
  console.error('outputText doesnt exist.');
}
