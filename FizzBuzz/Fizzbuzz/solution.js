// function FizzBuzz(num){
//     for (let num = 1; num <= 100; num++){
//         if ((num % 5 === 0) && (num % 3 === 0))return "FizzBuzz";
//         if (num % 3 === 0) return "Fizz";
//         if (num % 5 === 0) return "Buzz";
//         console.log (num);
//     }
// }

function fizzbuzz(num){
    if (num % 5 ===0 && num % 3 ===0){
        return "FizzBuzz"
    } else if(num % 3 === 0){
        return "Fizz"
    } else if(num % 5 === 0){
        return "Buzz"
    } else {
        return num
    }
}
for( let i = 1; i <= 100; i++){
    if ((fizzbuzz(i) != "Buzz") && (fizzbuzz(i) != "Fizz") && (fizzbuzz(i) != "FizzBuzz")){
        console.log(`${i}`)
    }else {
        console.log(`${i} - ${fizzbuzz(i)}`)
    }
        
}


