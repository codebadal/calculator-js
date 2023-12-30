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

            // Evaluate the expression and update the display
            inputSrt = eval(inputSrt);
            displyInput.value = inputSrt;

            // Set the background color based on the result
            let color = "#" + inputSrt
            box.style.backgroundColor = color
        } else if(event.target.innerText == 'C') {

            // Clear the input
            inputSrt = "";
            displyInput.value = inputSrt;

            // Reset the background color
            box.style.backgroundColor = ""

        }else{

            // Append the clicked button's text to the input string
            inputSrt += event.target.innerText;
            displyInput.value = inputSrt;

            // Update the background color based on the input
            let color = "#" + inputSrt
            box.style.backgroundColor = color
        }
    } catch (error) {
        
        // Display an error message if there's a syntax error
        console.log(error);
        displyInput.value = "Sentax Error"
    }
}


 