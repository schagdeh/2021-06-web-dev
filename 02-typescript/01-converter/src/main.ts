const fInput: Element | null  = document.querySelector('#F')
const cInput: Element | null  = document.querySelector('#C')
 console.log('auto updating sdfsd');
 


if(!(fInput instanceof HTMLInputElement)) {
    throw new Error("No input element with an id 'F' found")
}
if(!(cInput instanceof HTMLInputElement)) {
    throw new Error("No input element with an id 'C' found")
}

fInput.addEventListener('input', () => {
    cInput.value = ((parseInt(fInput.value) - 32) * 5/9).toString()
 })
cInput.addEventListener('input', () => {
    fInput.value = ((parseInt(cInput.value) - 32) * 5/9).toString()
 })