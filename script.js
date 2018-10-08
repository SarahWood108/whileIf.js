let code = true;
let counter = 100;

//While code is equal to true, console.log("code is working"). If counter is divisable by 5
//==0 then console.log "code is not working" + counter. If it is not dvisable
// console.log "not divisable by 5" -= 2. If counter is <= 0 the code = false

//condition
while (code) {
    console.log("code is working")
    //block
    if (counter % 5 == 0) {
        console.log("I am on number" + " " + counter)
        counter -= 2
    } else if (!counter % 5) {
        console.log("not divisable by 5")
        counter -= 2
    } if (counter <= 0) {
        code = false
        console.log("finished");
    }

}