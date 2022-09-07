document.getElementById('set-local-s').addEventListener('click', ()=>{
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    console.log(inputValue);

    localStorage.setItem('Name', inputValue);
})

document.getElementById('remove-local-s').addEventListener('click', ()=>{
    localStorage.removeItem('Name');
})
document.getElementById('clear').addEventListener('click', ()=>{
    localStorage.clear();
})