window.addEventListener('DOMContentLoaded', () => {
    // console.log(document.forms)

    // const form = document.querySelector('form');

    // form.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     console.log(event);
    //     let target = event.target;
    //     let name = target.querySelector('input')
    //     console.log({name});
    // })

    console.log('////////////////////////////////////////////////////////')

    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log(event);
        let target = event.target;
        let numberOne = target.querySelector('#numOne').value;
        let numberTwo = target.querySelector('#numTwo').value;
        let action = target.querySelector('#action').value;
        let resultField = document.querySelector('#result');
        let result = null;

        if(action == '+') {
            result = Number(numberOne) + Number(numberTwo)
        } else if(action == '-') {
            result = Number(numberOne) - Number(numberTwo)
        } else if(action == '*') {
            result = Number(numberOne) * Number(numberTwo)
        } else if(action == '/') {
            result = Number(numberOne) / Number(numberTwo)
        }
        else if(action == '%') {
            result = Number(numberOne) % Number(numberTwo)
        } else if(action == '**') {
            result = Number(numberOne) ** Number(numberTwo)
        }

        resultField.innerText = result;
        


        switch(action) {
            case '+':
                result = Number(numberOne) + Number(numberTwo)
                break;
            case '-':
                result = Number(numberOne) - Number(numberTwo)
                break;
            case '*':
                result = Number(numberOne) * Number(numberTwo)
                break;
            case '/':
                result = Number(numberOne) / Number(numberTwo)
                break;
            case '%':
                result = Number(numberOne) % Number(numberTwo)
                break;
            case '**':
                result = Number(numberOne) ** Number(numberTwo)
                break;
            default:
                result = 'Invalid action';
        }
        resultField.innerText = result
    })
});

    