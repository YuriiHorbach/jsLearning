let a = 6;

// if (a < 9) {
//     console.log('Yes');
// }
// else {
//     console.log('else');
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');

button.onclick = () => {
    let num = +input.value;
    // if (num >= 16 && num < 60) {
    //     console.log('Welcome');
    // }
    // else if (num > 60) {
    //     console.log('Are you realy?');
    // }
    // else {
    //     console.log('You can not come in');
    // }


    switch (num) {
        case 15:
            console.log('One more year');
            break;
        case 16:
            console.log('You can enter');
            break;
        default:
            console.log('ffffffff');
            break;
    }
}

let b = 5;

console.log(b < 7);