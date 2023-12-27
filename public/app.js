class User{
    constructor(fulname,age,password,money){
        this.fulname=fulname
        this.age=age
        this.password=password
        this.money=money

    }
}


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


let password=prompt("insert your password")
password=password.trim()
while (password.trim() !== password) {
    password=prompt("Password cannot have leading or trailing spaces.");
    
}
while (password.indexOf(' ') !== -1) {
    password=prompt("Password cannot have spaces in the middle.");
    
}


while (password.length < 7) {
    password=prompt("Password must be at least 7 characters long.");

}


}

