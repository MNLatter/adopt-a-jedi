function  askUserQuestion() {
    let userNameInside = prompt('Please Enter your Name!');

'Welcome ' + 'Michael'
if(userNameInside == 'Michael'){
    document.write('Welcome Jedi Knight ' + userNameInside)
} else {
    document.write('Welcome ' + userNameInside)
}
return userNameInside;
}

let userNameInside = askUserQuestion();
console.log(userNameInside);