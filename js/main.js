//Create a conditonal that checks their age
/*
const age = Number(prompt('How old are you? '))
//If under 16, tell them they can not drive
if(age < 16){
    alert(`You can't drive :(`)
    //If under 18, tell them they can't hate from outside the club, because they can't even get in
} else if(age < 18){
    alert(`How can you hate outside the club? You can't even get in.`)
    //If under 21, tell them they can not drink
} else if(age < 21){
    alert(`You can't drink`);
    //If under 25, tell them they can not rent cars affordably
} else if(age < 25){
    alert (`You can't rent cars affordably`)
    //If under 30, tell them they can not rent fancy cars affordably
} else if(age < 30){
    alert(`You can't rent fancy cars affordably `)
    //If under over 30, tell them there is nothing left to look forward too
} else{
    alert (`There is nothing left to look forward to!`)
}
*/


//--- Harder

//Take the value from the input
const age = Number(document.querySelector('input').value);
//On click of the h1
const ageChecker = document.querySelector('h1');
const ageLimitDisplay = document.querySelector('p');
//Place the result of the conditional in the paragraph
ageChecker.addEventListener('click', function(){
    if(age < 16){
       ageLimitDisplay.textContent = `You can't drive :(`
        //If under 18, tell them they can't hate from outside the club, because they can't even get in
    } else if(age < 18){
        ageLimitDisplay.textContent = `How can you hate outside the club? You can't even get in.`
        //If under 21, tell them they can not drink
    } else if(age < 21){
        ageLimitDisplay.textContent = `You can't drink`;
        //If under 25, tell them they can not rent cars affordably
    } else if(age < 25){
        ageLimitDisplay.textContent = `You can't rent cars affordably`;
        //If under 30, tell them they can not rent fancy cars affordably
    } else if(age < 30){
        ageLimitDisplay.textContent = `You can't rent fancy cars affordably`;
        //If under over 30, tell them there is nothing left to look forward too
    } else{
        ageLimitDisplay.textContent = `There is nothing left to look forward to!`;
    }
})
