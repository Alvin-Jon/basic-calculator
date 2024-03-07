// accessing the DOM
let input = document.getElementById('input')
let output = document.getElementById('answer')

let button = document.querySelectorAll('.btn')

screen.orientation.lock('portrait')

button.forEach((btn,i) => {
   btn.addEventListener('click', () => {
    // logic for deleting
    if(btn.textContent === 'Del'){
        input.textContent = input.textContent.substring(0, input.textContent.length - 1)
        evaluate(input.textContent)
        return
    }
    //logic for = :)lol
    else if(btn.textContent === '='){
        input.textContent = output.textContent
        output.textContent = ''
        return
    }

    input.textContent += btn.textContent
    //logic to replace all the x with *
    let current = input.textContent.replace(new RegExp('x'),'*')
    evaluate(current)
   }) 
})


// the evaluating function
function evaluate(x){
   let val = x
   try{
    let ans =  eval(val)
    output.textContent = ans 
   }
   catch{
    output.textContent = ' '
   }
}