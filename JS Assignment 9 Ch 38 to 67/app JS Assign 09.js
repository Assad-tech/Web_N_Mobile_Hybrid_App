// Starting AssignMent 09 From Chapter 38 to 67.


// =====Chapter 38 - 42 ==== Task: i
// function power(a,b){
    // 1st Method::>>
    // var Squr = Math.pow(a,b)
    // alert("Power of "+a+" is "+Squr )

    // 2nd Method::>>
//     document.write("Base = "+a+".\n Exponent = "+b)
//     var var1 = 0
//     while(var1 < b){
//         var base  = a*a;
//     var1++
//     }
//     document.write("<br> Power is "+base )
// }
// power(6,2)

// =====Chapter 38 - 42 ==== Task: ii

// =====Chapter 38 - 42 ==== Task: iii
// var val1 = +prompt("Enter 1st Side Value,")
// var val2 = +prompt("Enter 2nd Side Value,")
// var val3 = +prompt("Enter 3rd Side Value,")

// function side(a,b,c){
//     var S = (a+b+c)/2
//     return S
// }
// var Ans = side(val1,val2,val3)
// document.write("The value of ech Side is = "+Ans)

// function triangleS(x,y,z){
//     // var Ans =18
//     var area = Ans*((Ans-x)*(Ans-y)*(Ans-z))
//     // var area1 = i*((i-x)*(i-y)*(i-z))
//     document.write("<br> The area of Triangle is "+area)
// }
// triangleS(val1,val2,val3)

// =====Chapter 38 - 42 ==== Task: iv
// var marks1 = +prompt("Enter 1st Side Value,")
// var marks2 = +prompt("Enter 2nd Side Value,")
// var marks3 = +prompt("Enter 3rd Side Value,")

// function percen(sub1, sub2, sub3){
//     var tage = 100*((sub1+sub2+sub3)/300)
//     return tage
// }
// var war = percen(marks1,marks2,marks3)

// function aver(sub1,sub2,sub3){
//     var avrg = (sub1+sub2+sub3)/3
//     return avrg
// }
// var war2 = aver(marks1,marks2,marks3)

// function mainFunc(){
//     document.write("The % of given marks is = "+war)
//     document.write("<br> The Average of given marks is = "+war2)
// }
// mainFunc()
// =====Chapter 38 - 42 ==== Task: v
// You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now

// =====Chapter 38 - 42 ==== Task: vi
// var sent ="Education is life"
// document.write(sent+"<br>")
// var text = sent.replace(/[aeiouAEIOU]/g, "")
// document.write("The sentence without Vowels: "+text)

// =====Chapter 38 - 42 ==== Task: vii
// Could  not get the concept of this Question..

// =====Chapter 38 - 42 ==== Task: viii
// var dist = +prompt("Enter Distance (in Km)")
// var statment = "The distance between 2 Cities is: "+dist+" km."
// document.write(statment)
// document.write("<h2>Now Distance in Converted into:</h2>")

// function meter(m){
//     var mtr = m*1000
//     return mtr
// }
// var var0 = meter(dist)

// function inches (inc){
//     var Inches = inc*39370.078740157
//     return Inches
// }
// var var2 = inches(dist)

// function centi (cm){
//     var cmeter = cm*100000.00
//     return cmeter
// }
// var var3 = centi(dist)

// document.write("<b>Meters:</b><br>The distance between 2 Cities is: "+var0+" m.")
// document.write("<br><b>Inches:</b> <br>The distance between 2 Cities is: "+var2+" in.")
// document.write("<br><b>Centimeters:</b> <br>The distance between 2 Cities is: "+var3+" cm.")

// =====Chapter 38 - 42 ==== Task: ix
// var income = +prompt("Enter Your Time of Working Hours: ")
// function EmployeeMgt (wrkHour){
//     if(wrkHour === 40){
//         document.write("You have just completed Working Hours, "+wrkHour+" hours.")
//     }
//     else if(wrkHour < 40){
//         document.write("You have Worked for "+wrkHour+" hours.")
//         document.write("<br>This is less than Working Hours")
//     }
//     else if(wrkHour > 40){
//         var overT = wrkHour-40
//         var overIn = 12*overT
//         document.write("Except Working Hours: You have worked for "+overT+" hours.")
//         document.write("<br>Your OverTime Earning is: "+overIn+" PKR. (12.00 per Hour)")
//     }
//     else{
//         document.write("Invalid input.")
//     }
// }
// EmployeeMgt(income)
// =====Chapter 38 - 42 ==== Task: x 80% working..
// var amount = +prompt("Enter Amount in accurate figure.","No Fractional and Coin values")
// document.write("There are "+(amount / 100)+" notes of 100")
// document.write("<br>There are "+((amount % 100) / 50)+" notes of 50")
// document.write("<br>There are "+(((amount % 100) % 50) / 10)+" notes of 10")
// document.write("<br>There is "+(((amount % 100) % 50) % 10)+" Remained Amount.")

// =====Chapter 43 - 48 ==== Task: i
// HTML Code by Event: Onclick.

// =====Chapter 43 - 48 ==== Task: ii
// HTML Code by Event: Onclick. on Image

// =====Chapter 43 - 48 ==== Task: iii Could Not Solve..
// function del(){
//     var Rec = document.getElementById("Record")
//     var v1 =Rec.document.getElementsByTagName("tr")[1] 
//     var content = tr[1].innerHTML.remove();
//     var v2 =document.getElementById("row2")
//     var v3 =document.getElementById("row3")
//     var v4 =document.getElementById("row4")
// //     // v1.replaceWith(" ")
// //     // v2.replaceWith()
// //     // v3.replaceWith()
// //     // v4.replaceWith()
//     // v1 = tr[1].innerHTML;
//     v2.innerHTML = row2;
//     v3.innerHTML = row3;
//     v4.innerHTML.remove(3) = row4;
// }


// =====Chapter 43 - 48 ==== Task: iv
// HTML Code by Event: OnMouse. on Image Change
// =====Chapter 43 - 48 ==== Task: v
// Very Difficult to Understand


// =====Chapter 49 - 52 ==== Task: i
// =====Chapter 49 - 52 ==== Task: ii
// =====Chapter 49 - 52 ==== Task: iii


// =====Chapter 58 - 67 ==== Task: i
// 1
var a = document.getElementById("main-content")
// 2
// console.log (a.childNodes);
// 3
// var render_class=document.getElementsByClassName("render")
// console.log(render_class)
// 4
// function getName(){
// var fName=document.getElementById('first-name')
// fName.value = "Asadullah"
// }
// getName()
// // 5
// function getLName(){
// var lName=document.getElementById('last-name')
// lName.value="Phull";
// var email=document.getElementById('email')
// email.value="assabphl@gmail.com";
// }
// getLName()
// =====Chapter 58 - 67 ==== Task: ii
// 1
// var form_content=document.getElementById('form-content')
// console.log(form_content.nodeType)
// 2
// var lName=document.getElementById('last-name')
// console.log(lName.childNodes)
// 3
// could not understand this question
// 4
// console.log(a.firstChild)
// console.log(a.lastChild)
// 5
// console.log(lName.nextSibling)
// console.log(lName.previousSibling)
// 6
console.log(a.parentNode)
console.log(a.nodeType)
	