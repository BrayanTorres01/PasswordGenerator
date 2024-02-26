const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

var generateEl = document.querySelector("#generate-el")
var passwordEl1 = document.querySelector("#password-el1")
var passwordEl2 = document.querySelector("#password-el2")



function generatePassword(){
    //This will resest the password
    passwordEl1.textContent = ""
    passwordEl2.textContent = ""

    //For loop to get 15 character password
    for(var i = 0; i <= 15; i++){
        //Can't make random password start from 0 bc array indices start from 0 not 1
        var randomPassword1 = Math.floor(Math.random() * characters.length)
        var randomPassword2 = Math.floor(Math.random() * characters.length)
        passwordEl1.textContent += characters[randomPassword1];
        passwordEl2.textContent += characters[randomPassword2];
    }
}

function copyPassword1(){
    //Gets the text inside the button
    var textContent = passwordEl1.textContent
    //Copy text to clipboard
    navigator.clipboard.writeText(textContent)
    //alerts the user
    alert("Copied the text: " + textContent)
}

function copyPassword2(){
    var textContent = passwordEl2.textContent
    navigator.clipboard.writeText(textContent)
    alert("Copied the text: " + textContent)
}