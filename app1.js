
function  askUserQuestion() {
    let userNameInside = prompt('Please Enter your Name!');
    if(userNameInside == 'Michael'){
        document.write('Welcome Jedi Knight ' + userNameInside)
    } else {
        document.write('Welcome ' + userNameInside)
    }
}

function secretMessage(){
    let userAnswer = prompt('Do you want to see a secret message? (yes or no)')
    if(userAnswer.toUpperCase() == "YES"){
        document.write('For my ally is the Force, and a powerful ally it is!!')
    }
    console.log(userAnswer)
}

function anotherPictureQuestion(){
    let anotherPicture = prompt('How many pictures of Yoda would you like to see?');
    let picURL = "https://www.indiewire.com/wp-content/uploads/2021/06/Yoda.png?w=780"
    for(let i = 0; i < anotherPicture; i++){
        document.write('<img src="' + picURL + '">')
    }


}


function guessingGame(){
    let userAnswer = prompt('Please Enter a Number 1-100');
    let correctAnswer = 4;
    let attemps = 8;


    for(let i = 1; i < attemps; i++){
        while(userAnswer < 1 || userAnswer > 100){
            userAnswer = prompt('Try Again! A number 1-100');

        }
        if(userAnswer == correctAnswer){
            alert('Correct! May the 4th be with you');
            document.write("Winner!");
            break;
        }else if (userAnswer > correctAnswer){
            userAnswer = prompt('The greatest teacher, failure is! too high. Please Try Again!');

        }else if (userAnswer < correctAnswer){
            userAnswer = prompt('The greatest teacher, failure is! too low. Please Try Again!');
        
        }
        if(i == 7){
            alert('The correct answer was ' + correctAnswer);
            document.write("Game Loser")

        }
    }        
}



















