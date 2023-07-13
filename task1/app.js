let numbers = [1, 4, 7, 8, 3, 5, 0, 2, 4, 6, 12, 15, 18, 46, 45, 48, 97, 84]


function countEvensAndOdds(arr) {
    let even = 0
    let odd = 0
    arr.forEach(element => {
        if (element % 2 == 0) {
             even++ 
        } else {
             odd++ 
        }
    });
    console.log(even)
    console.log(odd)
}





countEvensAndOdds(numbers)