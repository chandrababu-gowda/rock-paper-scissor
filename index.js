let selected = document.querySelectorAll('.selection');
let generatedText = document.querySelector('.computer-generated');
let selectedText = document.querySelector('.user-selection-display')

selected.forEach(ele => {
    ele.addEventListener('click',()=>{
        selectedText.innerHTML = `<h1>${ele.innerText}</h1>`
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
        // console.log(generatedNum);
    })
});

// console.log(selected);




























// (Math.floor(Math.random()*3)+1)