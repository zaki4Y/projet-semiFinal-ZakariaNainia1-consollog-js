let userPrompts=prompt("chose between sing up or loggin in or changing password")
if (userPrompts=="sing up") {
    let urname=prompt("what is u r name")
    urname=urname.trim()
    console.log(urname);
    let firstletter = urname.charAt(0).toUpperCase() + urname.slice(1)
    console.log(firstletter);
while (firstletter.length<5) {
    firstletter=prompt("what is u r name")
    
}      let userEmail = prompt("insert your email ?");
let p1 = userEmail.indexOf("@");
let P = userEmail.lastIndexOf(".");
while (userEmail.length <= 10) {
    userEmail = prompt("the  Email should containe   10 characters ! insert  a valide Email")
    
}

if (p1< 1 || P<p1+2 || P+2>=userEmail.length) {
    alert("adress email correct");
}console.log(userEmail);

let age=prompt("enter your age")


age = age.trim().includes(NaN)
while (age == "0") {
    age = prompt("enter your age again")
    
}

while (age.includes(" ") || age.length >= 3 ) {
    age = prompt("enter your age again")
}

console.log(age);
}











