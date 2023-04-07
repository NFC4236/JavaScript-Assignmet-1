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

//******************** Five Program ***********************/
let gradeMarks = +prompt("Enter Grade Marks");

if (gradeMarks<100 && gradeMarks>=90) 
{
    console.log("Grade A");
} 

else if (gradeMarks<90  && gradeMarks>=80) 
{
    console.log("Grade B");
} 

else if (gradeMarks<80  && gradeMarks>=70) 
{
    console.log("Grade C");
} 

else if (gradeMarks<70  && gradeMarks>=60) 
{
    console.log("Grade D");
} 
 
else if(gradeMarks<60 ){
    console.log("Grade F");
}


