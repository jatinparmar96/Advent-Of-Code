const fs = require('fs');
fs.readFile('./input.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    const input = data.toString().split('\n');
    solve01(input);
    }
);


const solve01 = (input) => {
    let sum = 0;
    let max =0;
    const elf = []  
    for (let i = 0; i < input.length; i++) {
        
        if(input[i] === ''|| i===input.length-1) {
            elf.push(sum);
            if(sum>max) max = sum;
            sum = 0;
        }
        else{
            sum += parseInt(input[i]);
        }

    }
    elf.sort((a,b)=>b-a);
    console.log(elf[0]+elf[1]+elf[2]);
}