//****************1st Program ***************

let num1 = prompt("Enter First Number");
let num2 = prompt("Enter Second Number");

if (Number(num1)>Number(num2)) {
      alert("First Number is Large : "+Number(num1));
}

else  {
    alert("Second Number is Large :"+Number(num2));
}
//******************3rd Program*************************

let value1 =+prompt("Enter No 1st ");
let value2 =+prompt("Enter No 2nd ");
let value3 =+prompt("Enter No 3rd ");
let value4 =+prompt("Enter No 4th ");
let value5 =+prompt("Enter No 5th ");

if (value1>value2 && value1>value3 && value1>value4 && value1>value5  ) {
           console.log("Large No is 1st :"+value1);
} 
else if (value2<value1 && value2<value3 && value2<value4 && value2<value5 ) {
    console.log("Large No is 2nd :"+value2);
} 
else if (value3>value1 && value3>value2 && value3>value4 && value3>value5 ) {
    console.log("Large No is 3rd :"+value3);
} 
else if (value4>value1 && value4>value2 && value4>value3 && value4>value5  ) {
    console.log("Large No is 4th :"+value4);
} 

else if (value5>value1 && value5>value2 && value5>value3 && value5>value4 ) {
    console.log("Large No is 5th :"+value5);
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


