// 1.) create a while statement that tracks profits vs 
// revenue.
// 2.) while profit is less than 20% of revenue
// 3.) increase revenue by 500
// 4.) increase profit by 15%
// 5.) name your own variables
// 6.) start where you want. loop 10 times minimum
// optional 2
// create a while statement that loops 15 times.
// each time the statement loops shoot a basket ball.
// if the ball goes into the goal store the number.
// if it misses store the miss in a seperate location
// on the last loop print out whether there are more goals or misses

// Solution
// 1.)  discover/ define what my variables should be.
// 2.)  define what my condition should be 
// 3.)  define myexit condition / iterator
// 4.)  define any if statements that i may need
// 5.)  psudo code a potential solution
// 6.)  test solution
// 7.)  troubleshoot failures
// 8.)  make adjustments
// 9.)  test solutions
// 10.) reap the benefits of victory
// Please use the website Thaddeus provided to test with it
// it is a great resource. if you send me your solutions over the weekend 
// I will check them as I have time.
// I will not be giving the answer until monday 
// I will tell you the type of error that you are having(syntax, math, etc)
// If you are having trouble understanding exactly how to solve the 
// issue please check google or with a class mate. if you are still
// having issues slack me whatyou are not understanding and I will go over 
// it on monday morning. you can remain annonomous that morning if you 
// don't want individual attention


let revenue = 800
let profit = 15

while (profit < (revenue * .20)) {
    revenue += 200
    profit += (.15 * profit)
    console.log("the profit is" + " " + profit)
    console.log("the revenue is" + " " + revenue)
}