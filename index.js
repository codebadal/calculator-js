let inputSrt = "";
const AllBtns = document.querySelectorAll('.button');
const displyInput = document.getElementById('input');

let box = document.getElementById('boxx');

Array.from(AllBtns).forEach((btn) =>{
    btn.addEventListener('click', handler)
})


function handler(event){
    try {
        if (event.target.innerText == '=') {
            inputSrt = eval(inputSrt);
            displyInput.value = inputSrt;

            let color = "#" + inputSrt
            box.style.backgroundColor = color
        } else if(event.target.innerText == 'C') {
            inputSrt = "";
            displyInput.value = inputSrt;
        }else{
            inputSrt += event.target.innerText;
            displyInput.value = inputSrt;

            let color = "#" + inputSrt
            box.style.backgroundColor = color
        }
    } catch (error) {
        console.log(error);
        displyInput.value = "Sentax Error"
    }
}


 