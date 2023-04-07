//****************1st Program ***************

let num1 = prompt("Enter First Number");
let num2 = prompt("Enter Second Number");

if (Number(num1)>Number(num2)) {
      alert("First Number is Large : "+Number(num1));
}

else  {
    alert("Second Number is Large :"+Number(num2));
}

//********************Four Program****************************

for (let a = 0; a <= 15; a++) {
    if (a % 2==0) {
        console.log("Even Number :" + a);
    }

    else{
        console.log("Odd Number :" + a);
    }
    
}

