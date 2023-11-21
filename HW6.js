const list = document.createElement('ul');
list.id = 'list';

for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
}

document.body.appendChild(list);

const listItems = document.getElementById('list').getElementsByTagName('li');

const result = `${listItems[0].textContent}, ${listItems[listItems.length - 1].textContent}, ${listItems[1].textContent}, ${listItems[3].textContent}, ${listItems[2].textContent}`;

console.log(result);


const body = document.createElement("body");
const main = document.createElement("main");
const div = document.createElement("div");
const p = document.createElement("p");

main.className = "mainClass check item";
div.id = "myDiv";

p.innerText = "First paragraph";

div.appendChild(p);
main.appendChild(div);
body.appendChild(main);

document.documentElement.appendChild(body);


document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.querySelector('.btn');
    const outBlock = document.querySelector('.out');
    
    submitBtn.addEventListener('click', function (event) {
      event.preventDefault();
      
      const inputs = document.querySelectorAll('.arr');
      const data = {};
      
      inputs.forEach(function (input) {
        data[input.dataset.form] = input.value;
      });
 
      let outputString = '';
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          outputString += `${key}: ${data[key]}<br>`;
        }
      }
      
      outBlock.innerHTML = outputString;
    });
  });


const circleElements = document.querySelectorAll('.circle');

circleElements.forEach((circleElement) => {
  const dataAnimValue = circleElement.getAttribute('data-anim');

  circleElement.classList.add(dataAnimValue);
});

circleElements.forEach((circleElement) => {
  const hasAnimationClass = circleElement.classList.contains(circleElement.getAttribute('data-anim'));
  console.log(`Circle with data-anim "${circleElement.getAttribute('data-anim')}" has applied animation: ${hasAnimationClass}`);
});

 
const colorElements = document.querySelectorAll('.color');
const priceElement = document.getElementById('outprice');

let currentPrice = 189.99;

function updatePrice(color, price) {
    priceElement.textContent = price.toFixed(2);
}

colorElements.forEach(colorElement => {
    colorElement.addEventListener('click', function() {
        const selectedColor = this.getAttribute('color');
        const selectedPrice = parseFloat(this.getAttribute('data-price'));

        currentPrice = selectedPrice;
        updatePrice(selectedColor, currentPrice);

        colorElements.forEach(element => {
            element.classList.remove('active');
        });

        this.classList.add('active');
    });
});

const sizeElements = document.querySelectorAll('.size');
sizeElements.forEach(sizeElement => {
    sizeElement.addEventListener('click', function() {
        updatePrice('', currentPrice);
    });
});