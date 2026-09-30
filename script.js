const container = document.getElementById('main-card-body')

text = "hello There how are you i'm very fine"

function renderPage(text) {
    let html_codes = ''
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            html_codes += `<span id="letter${i}" class="space "> </span>
        `
        }
        else {
            html_codes += `<span id="letter${i}" class="letter ">${text[i]}</span>
        `
        }
    }
    container.innerHTML = html_codes
}

renderPage(text)


let current = 0
const firstelem = document.querySelector('#letter0')
firstelem.classList.add('active')


let totalPressed = 0;
let totalWrongPressed = 0;
let totalRigthPressed = 0;
const handlekeydown = (event)=>{
if (current < text.length) {
        totalPressed+=1
        const id = "#letter" + current
        const elem = document.querySelector(id)

        const actualValue = text[current]
        if (event.key !== 'Shift') {

            const typedValue = event.key

            elem.classList.remove('active')
            // elem.classList.remove('wrong')

            if (actualValue === typedValue) {
                totalRigthPressed+=1
                elem.classList.add('passed')

                current += 1
                if (current < text.length) {
                    const nid = '#letter' + current
                    const nextelem = document.querySelector(nid)
                    nextelem.classList.add('active')
                }else{
                    calculateResult()
                }

            }
            else {
                totalWrongPressed+=1
                elem.classList.add('wrong')
                
                current += 1
                if (current < text.length) {
                    const nid = '#letter' + current
                    const nextelem = document.querySelector(nid)
                    nextelem.classList.add('active')
                }else{
                    calculateResult()
                }
            }

        }
    }
}


document.addEventListener('keydown',handlekeydown)

let sec = 60

setTimeout(() => {
    calculateResult()
}, 1000*sec);

function calculateResult(){
    const accuracy = 100-Math.round((totalWrongPressed/totalPressed) *100)
    document.removeEventListener('keydown',handlekeydown)
    const res = document.querySelector('.result')
    res.innerHTML = 
    `<div>totalPressed:${totalPressed}</div>
    <div>totalWrongPressed:${totalWrongPressed}</div>
    <div>totalRigthPressed:${totalRigthPressed}</div>
    <div>accuracy:${accuracy}</div>
    `

    

}
// testing 
// const fithelem = document.querySelector('#letter5')
// console.log(fithelem.innerText)







