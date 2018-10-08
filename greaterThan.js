//While iterator is less than or equal to 100, multiply iterator by 2
// if iterator is greater than or equal to 80, write greater than or eual to 80
//if iterator is greater than or equal to 20, write greater than or equal to 20
// if does not apply, write iterator

let counter = 0
while (counter <= 100) {
    counter *= 2
    if (counter >= 80) {
        console.log("greater than or equal to 80")
    } else if (counter >= 20) {
        console.log("greater than or equal to 20")
    } else {
        console.log(counter)
    }
    counter ++
}