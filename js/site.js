// Get the string from the page
//Controller Function
function getValue(){
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

// Reverse the string
//Logic Function
function reverseString(userString){
    let revString = [];

    //Reverse string using for loop
    for (let i = userString.length - 1; i >= 0; i--){
        revString += userString[i];
    }

    return revString;
}

// Display the reversed string to the user
function displayString(revString){
    //Write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    //Show the alert box
    document.getElementById("alert").classList.remove("invisible");
}