// Get the input box and all calculator buttons
const input = document.getElementById('inputbox');
const buttons = document.querySelectorAll('button');

// Initialize expression string
let expression = '';

// Loop through each button and assign click event
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        switch (value) {
            case '=':
                try {
                    // Evaluate only if the expression is not empty
                    if (expression.trim() !== '') {
                        expression = eval(expression).toString();
                        input.value = expression;
                    }
                } catch (err) {
                    input.value = 'Error';
                    expression = '';
                }
                break;

            case 'AC':
                expression = '';
                input.value = '';
                break;

            case 'DEL':
                expression = expression.slice(0, -1);
                input.value = expression;
                break;

            default:
                expression += value;
                input.value = expression;
                break;
        }
    });
});
