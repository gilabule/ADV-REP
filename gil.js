function pop() {
    const stack = document.getElementById('stack');
    for (let i = 0; i < stack.children.length; i++) {
        if (stack.children[i].textContent !== '') {
            stack.children[i].textContent = '';
            break;
        }
    }
}

function push() {
    const inputValue = document.getElementById('inputValue').value;
    const stack = document.getElementById('stack');
    for (let i = stack.children.length - 1; i >= 0; i--) {
        if (stack.children[i].textContent === '') {
            stack.children[i].textContent = inputValue;
            break;
        }
    }
}
