function anotherPicureQuestion(){
    let anotherPicture = prompt('Would you like to see Yoda?');
    let picURL = "https://geekscovery.files.wordpress.com/2020/06/yoda-seagulls-blr.gif"

if(anotherPicture.toLowerCase() == "yes"){

    document.write('<img src="' + picURL + '">')
}
}

anotherPicureQuestion();


