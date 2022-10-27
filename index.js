let selected = document.querySelectorAll('.selection');
let generatedText = document.querySelector('.computer-generated');
let selectedText = document.querySelector('.user-selection-display');
let display = document.querySelector('#score-display');
let total = 0;

selected.forEach(ele => {
    ele.addEventListener('click',()=>{
        let user = ele.innerText ;
        selectedText.innerHTML = `<h1>${user}</h1>`
        let generatedNum = Math.floor(Math.random()*3)+1;
        switch (generatedNum) {
            case 1:
                generatedText.innerHTML = `<h1>Rock</h1>`;
                break;
            case 2:
                generatedText.innerHTML = `<h1>Paper</h1>`;
                break;
            case 3:
                generatedText.innerHTML = `<h1>Scissor</h1>`;
                break;
            default:
                generatedText.innerHTML = `<h1>Error</h1>`;
                break;
        }
        let generate = generatedText.innerText;
        // let total = 0;
        if (user == generate) {
            total = total
            display.innerHTML = `<h1>Draw</h1><p>Score - ${total}</p>`;
        } else {
            if (user == 'Rock' && generate == 'Scissor') {
                total = total + 1;
                display.innerHTML = `<h1>You Won</h1><p>Score - ${total}</p>`;
            }
            else if (user == 'Paper' && generate == 'Rock') {
                total = total + 1;
                display.innerHTML = `<h1>You Won</h1><p>Score - ${total}</p>`;
            } 
            else if (user == 'Scissor' && generate == 'Paper') {
                total = total + 1;
                display.innerHTML = `<h1>You Won</h1><p>Score - ${total}</p>`;
            } else {
                total = total;
                display.innerHTML = `<h1>You Lost</h1><p>Score - ${total}</p>`;
            }
        }

    })
});

// console.log(selected);




























// (Math.floor(Math.random()*3)+1)