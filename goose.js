// let duck = parseInt(Math.random() * 20)
// let counter = 0
// let random = parseInt(Math.random() * 20)

// while (counter < 20) {
//     console.log("Duck")
//     counter++
//     random = parseInt(Math.random() * 10)
//     if (random >= duck) {
//         console.log("Goose")
//     }
//     if (counter >= 20){
//         console.log("You are it")
//     }
// }

// While the counter is less than 20 log duck. If random is greater than 11 log goose
//when the counter is greater than 20 log you're it

let duck = true
let counter = 0
let random = parseInt(Math.random() * 20)

while (duck == true) {
    console.log("duck")
    counter++
    if (counter % random == 0) {
        duck = false
        break
    }
    else if (counter % random == 1) {
        console.log("cat")
    }
    else if (counter % random == 2) {
        console.log("dog")
    } else {
        console.log("animal")
    }

}

// while duck equals true log duck, add counter by one, 
//if counter divided by random and it equal to zero, duck is false
// if counter divided by random and it equals to one, log cat
// if counter divided by random and it equals to two, log dog
// if nothing else log animal