let time = 700

while (time  <= 1400) {
    console.log("you're late")
    time += 100


    if (time <= 1000) {
        console.log("you're on time")

    }

    else if (time >= 1400) {
        console.log("You're absent")
        break
    }
}
