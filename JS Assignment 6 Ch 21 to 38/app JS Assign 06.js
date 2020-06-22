// =====Chapter 21 - 25 ==== Task: i
// var fName = prompt("Enter Your First Name.")
// var lName = prompt("Enter YOur Last Name.")
// var fulName = "Wellcome Mr. "+fName+" "+lName
// alert(fulName)

// =====Chapter 21 - 25 ==== Task: ii
// var favMob = prompt("Enter your Favourate Mobile Model Name.")
// var lnth = favMob.length
// document.write("My favourate Phone is: "+favMob+"<br> Length of String: "+lnth)

// =====Chapter 21 - 25 ==== Task: iii
// var word = "Pakistani"
// var char = word.indexOf('n')
// document.write("String: "+word+"<br> Index of 'n' = "+char)

// =====Chapter 21 - 25 ==== Task: iv
// var word1 = "Hello World"
// var char1 = word1.indexOf('l')
// var lastchar = word1.lastIndexOf('l')
// document.write("String: "+word1+"<br> Index of 'l' = "+char1)
// document.write("<br> The Last Index of 'l'  = "+lastchar)

// =====Chapter 21 - 25 ==== Task: v
// var word = "Pakistani"
// var char_at = word.charAt(word.indexOf('i'))
// document.write("String: "+word+"<br> Character at index '3' = "+char_at)

// =====Chapter 21 - 25 ==== Task: vi
// var fName = prompt("Enter Your First Name.")
// var lName = prompt("Enter Your Last Name.")
// alert(fName+" "+lName)

// =====Chapter 21 - 25 ==== Task: vii
// var text ="Hyderabad"
// var newText = text.replace("Hyder", "Islam")
// document.write("City: "+text+"<br>After Replacement: "+newText)

// =====Chapter 21==== Task: viii
// var message ="Ali and Sami are best friends. They play cricket and football together."
// var newMessage = message.replace(/and/g, "&")
// document.write("Before 'and' Replacment:<br> "+message+"<br>After Replacment:<br> "+newMessage)

// =====Chapter 21==== Task: ix
// var StrVal1 = "786"
// var NumVal1 = Number(StrVal1)
// document.write("Value: "+NumVal1+"<br> Type: Number <br>")
// document.write("Value: "+StrVal1+"<br> Type: String")

// =====Chapter 21==== Task: x
// var smallCaps = prompt("Enter some Text.")
// var capCaps = smallCaps.toUpperCase()
// document.write("User Input: "+smallCaps+"<br> UpperCase: "+capCaps)

// =====Chapter 21==== Task: xi
// var defaultCaps = prompt("Enter some Text.")
// var capital = defaultCaps.slice(0,1)
// capital = capital.toUpperCase()
// var smallCaps1 = defaultCaps.slice(1)
// smallCaps1 = smallCaps1.toLowerCase()
// document.write("User Input text: "+defaultCaps+"<br>")
// document.write("Capitalized text: "+capital+smallCaps1+"<br>")

// =====Chapter 21==== Task: xii
// var NumVal2 = +prompt("Enter some  numbers.")
// var strVal2 = NumVal2.toString().replace(".","")
// document.write("Numbers data: "+NumVal2+"<br>")
// document.write("Converted into String: "+strVal2+"<br>")

// =====Chapter 21 - 25 ==== Task: xiii could not Understand.
// var myMail = "Assad_Rehman"
// var inputMail prompt("Enter your User Name:")
// if()

// =====Chapter 21 - 25 ==== Task: xiv having some issue.
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var inputOrder = prompt("Wellcome to ABC Bakery. What do you want to order Sir/Ma'am??")
// var i
// for(i = 0; i<=A.length; i++){
//     if(inputOrder === A[i]){
//     alert(inputOrder+" is available here.")}
//     else
//         alert(" is not available here")
// }

// =====Chapter 21 - 25 ==== Task: xv
// Too Much difficult to Create.

// =====Chapter 21 - 25 ==== Task: xvi
// var university = "University of Karachi";
// var strArr = university.split("")
// for(var j =0; j<=strArr.length; j++){
//     document.write(strArr[j]+"<br>")
// }

// =====Chapter 21 - 25 ==== Task: xvii
// var userInput = prompt("Enter a Noun.")
// var lastchar = userInput.charAt(userInput.length-1)
// document.write("User Input: "+userInput+". <br> Last character of input is: "+lastchar)

// =====Chapter 21 - 25 ==== Task: xviii
// var sentence = "The quick brown fox jumps over the lazy dog."
// Could not get..



// =====Chapter 26 - 30 ==== Task: i and ii 
// var intInput = +prompt("Enter any Positive or Negative Number with decimal point.")
// var Rounded = Math.round(intInput)
// var ceiled = Math.ceil(intInput)
// var floored = Math.floor(intInput)
// document.write("Input Number: "+intInput+"<br>Rounded Digit: "+Rounded+"<br>Ceil Digit: "+ceiled+"<br>Floor Digit: "+floored)

// =====Chapter 26 - 30 ==== Task: iii
// var inputValue = +prompt("Enter any Positive or Negative Number.")
// absValue = inputValue
// if(absValue < 0){
//     absValue *= -1
// }
// // absValue = Math.abs(absValue)
// document.write("The Aboslute Value of "+inputValue+" is "+absValue)

// =====Chapter 26 - 30 ==== Task: iv
// var numRandom = Math.random();
// var DiceNUmber = (numRandom * 6) + 1;
// var resultRandom = Math.floor(DiceNUmber)
// document.write("Random Dice is:"+resultRandom)

// =====Chapter 26 - 30 ==== Task: v
// var numRandom = Math.random();
// var DiceNUmber = numRandom * 2;
// var resultRandom = Math.floor(DiceNUmber)
// if(resultRandom === 1){
//     document.write("Random Coin Value: Heads "+resultRandom)
// }
// else
// document.write("Random Coin value: Tails "+resultRandom)

// =====Chapter 26 - 30 ==== Task: vi
// var numRandom = Math.random();
// var DiceNUmber = (numRandom * 100) + 1;
// var resultRandom = Math.floor(DiceNUmber)
// document.write("Random Number between 1 and 100 :"+resultRandom)

// =====Chapter 26 - 30 ==== Task: vii
// Didnt get the Question no 7

// =====Chapter 26 - 30 ==== Task: viii
// var game = +prompt("Enter a number between 1 to 10.")
// var ranGame = Math.random()
// var gameTable = (ranGame *10) + 1
// var accurateNum = Math.floor(gameTable)
// if(game === accurateNum){
//     document.write("Congratulations. Your number is Equals to Random.")
// }
// else
// document.write("Try Again. Random No is: "+accurateNum)

// =====Chapter 31 - 34 ==== Task: i
var today = new Date();
// document.write(today)

// =====Chapter 31 - 34 ==== Task: ii
// var  monthList =["January", "Febuary", "March","April", "May", "June", "July","Augest", "September","October","November","December"]
// var monthNow = today.getMonth()
// document.write("Current Month: "+monthList[monthNow])

// =====Chapter 31 - 34 ==== Task: iii
// var stringToday = today.toString()
// var theDay = stringToday.slice(0,4)
// alert("Today is "+theDay)
// document.write("Complete Date In String: "+stringToday)

// =====Chapter 31 - 34 ==== Task: iv
// var stringToday = today.toString()
// var theDay = stringToday.slice(0,4)
// if(theDay === "Sat" ||"Sun"){
//     alert("Today is Fun Day...")
// }
// else
// alert("Just Working Day.")

// =====Chapter 31 - 34 ==== Task: v
// var theDate = today.getDate()
// if(theDate >= 1 && theDate <= 15){
//     document.write("First fifteen days of the month: "+theDate+"th day.")
// }
// else if (theDate >= 16 && theDate <= 31){
//     document.write("Last days of the month: "+theDate+"th day.")
// }

// =====Chapter 31 - 34 ==== Task: vi
// document.write("Curretn Date and Day: "+today+"<br>")
var totalMiliSec = today.getTime()
// document.write("Elapsed Miliseconds since midnight, Jan. 1, 1970: "+totalMiliSec+"<br>")
// var totalMin = totalMiliSec/(1000*60*60)
// document.write("Elapsed Minutes since midnight, Jan. 1, 1970: "+totalMin)

// =====Chapter 31 - 34 ==== Task: vii
// var theHours = today.getHours()
// if(theHours >= 0 && theHours <= 12){
//     alert("It's "+theHours+" AM.")
// }
// else
// alert("It's "+theHours+" PM.")
// document.write("Hours Format 0-23: "+theHours)

// =====Chapter 31 - 34 ==== Task: viii
// var lastDate = new Date("Dec 31 2020")
// document.write("Later Date: "+lastDate)

// =====Chapter 31 - 34 ==== Task: ix
// var ramzan = new Date("June 18, 2015")
// var thePassedDays = ramzan.getTime()
// totalMiliSec = today.getTime()
// var diff = totalMiliSec - thePassedDays
// var ramzanDays = diff/ (1000*60*60*24)
// ramzanDays = Math.floor(ramzanDays)
// // document.write(thePassedDays+" Milisec have passed from Jan 1 1970 to June 18 2015 <br>")
// // document.write(totalMiliSec+" Total Milisec from Jan 1 1970 to Today.<br>")
// document.write(ramzanDays+" Days have passed since 1st Ramzan 2015 to Today.")

// =====Chapter 31 - 34 ==== Task: x
// var begin = new Date("Jan 1, 2015")
// var beginMili = begin.getTime()
// var refer = new Date("Dec 5, 2015 22:50:16")
// var referMili = refer.getTime()
// var diff2 = referMili-beginMili
// var yearSec = diff2/ (1000*60)
// yearSec = Math.floor(yearSec)
// // document.write(beginMili+" Milisec 1970 to jan 2015<br>")
// // document.write(referMili+" Total Milisec 1970 to  Dec 2015<br>")
// document.write("On the reference Date "+refer+", "+yearSec+" seconds had passed since beginning of 2015")

// =====Chapter 31 - 34 ==== Task: xi
// document.write("Current Date: "+today+"<br>")
// var beforeHour = today.getHours()
// var beforeMin = today.getMinutes()
// var beforeSec = today.getSeconds()
// var Hour = beforeHour+":"+beforeMin+":"+beforeSec
// var minusHour = beforeHour-1+(":"+beforeMin+":"+beforeSec)
// document.write(" 1 Hour ago it was: Sat Jun 20 2020 "+minusHour+" GMT+0500 (Pakistan Standard Time)")

// =====Chapter 31 - 34 ==== Task: xii
// var strToday = today.toString()
// var copyHour = strToday.slice(16,25)
// document.write("Current Date: "+strToday+"<br>")
// var beforeCentury = new Date("Jun 21, 1920")
// var strCentury = beforeCentury.toString()
// var exchHour = strCentury.replace("00:00:00",copyHour)
// document.write("100 Year ageo : "+exchHour)

// =====Chapter 31 - 34 ==== Task: xii Diffcult to Understand Concept.
// var yourAge = new Date(+prompt("Enter your Age: "))
// yourAge = yourAge.getMilliseconds()
// var YearsMili = today.getTime()
// var diff3 = YearsMili-yourAge
// document.write("Your age MILICSE "+yourAge+"<br>")
// document.write("Total YEars:: "+YearsMili+"<br>")
// document.write("difference is: "+diff3+"<br>")
// document.write("Remaining Years:  "+YearNo)

// =====Chapter 31 - 34 ==== Task: xiv
// Could Not Get..


// =====Chapter 35 - 38 ==== Task: i
// function showDate(){
//     var nowDate = new Date()
//     document.write("Today is: "+nowDate)
// }
// showDate()

// =====Chapter 35 - 38 ==== Task: ii
// function fullName(F_Name ,L_Name){
//     var Name = F_Name+" "+L_Name;
//     document.write("WellCome Mr."+Name)
// }
// var name1 = prompt("Enter Your First Name:")
// var name2 = prompt("Enter Your Last Name:")
// fullName(name1,name2)

// =====Chapter 35 - 38 ==== Task: iii
// function adding (val1, val2){
//     var add = (val1+val2)
//     // document.write("Addition: "+val1+" + "+val2+" = "+add)
//     return add
// }
// var no1 = +prompt("Enter a digit")
// var no2 = +prompt("Enter another digit")
// var a = adding(no1,no2)
// document.write("a = "+no1+" + "+no2+" = "+a)

// =====Chapter 35 - 38 ==== Task: iv
// function Calc(num1,operator,num2){
// var c 
// document.write("<b>Calculator</b> <br>")
// if(operator === "+"){
//     c = num1+num2
// }
// else if(operator === "-"){
//     c = num1-num2
// }
// else if(operator === "*"){
//     c = num1*num2
// }
// else if(operator === "/"){
//     c = num1/num2
// }
// else if(operator === "%"){
//     c = num1%num2
// }
// return c;
// }
// var no1 = +prompt("Enter a digit")
// var oprtr = prompt("Operation(/, *, +, -, %): ")
// var no2 = +prompt("Enter another digit")
// var g = Calc(no1,oprtr,no2)
// document.write("Answer:"+no1+" "+oprtr+" "+no2+" = "+g)

// =====Chapter 35 - 38 ==== Task: v
// function squareRoot(a){
//     a = a*a
//     return a
// }
// var root = +prompt("Enter an integer.")
// var var1 = squareRoot(root)
// alert("The power of "+root+" is "+var1)

// =====Chapter 35 - 38 ==== Task: vi
// function factorial(){
//     var f= 4;
//     for(var i = f; i >=1; i--){
//         var fact =+ f*i;
//     }
// alert(fact)
//     // return fact;
// }
// factorial()
    // var value1 = +prompt("Enter an integer.")
    // var var2 = factorial(value1)
    // alert("The Factorial of "+value1+" is "+var2)

// =====Chapter 35 - 38 ==== Task: vii
// function count (start,end){
//     document.write("Counting Begins: <br>")
//     for(var i = start; i>=end; i--){
//         document.write(" "+i+"<br>")
//     }
//     document.write("Counting Ends:")
// }
// var begin = +prompt("Enter an integer to Start Counting.")
// var finish = +prompt("Enter another Number, Where to stop.")
// count(begin,finish)

// =====Chapter 35 - 38 ==== Task: viii
// function calculateHypotenuse(base,perpen){
//     base = base*base
//     perpen = perpen*perpen
//     hyp = (base)+(perpen)
//     return hyp
// }
// var h = calculateHypotenuse(5,3)
// document.write("Hyptenuse<sup>2</sup> = "+h)

// =====Chapter 35 - 38 ==== Task: ix
// function areaRect(width,height){
//     document.write("Width = "+width+"<br>")
//     document.write("Height is = "+height+"<br>")
//     var Area = width*height
//     return Area;
// }
// var r = areaRect(12,10)
// document.write("The area of Rectangle is = "+r)

// =====Chapter 35 - 38 ==== Task: x

// =====Chapter 35 - 38 ==== Task: xi case
// function capslock (defaultCaps){
//     // var defaultCaps = "defaultCaps of karachi";
//     var strArr = defaultCaps.split(" ")
//     var capital, smallCaps1
//     document.write("User Input text: "+defaultCaps+"<br>")
//     for(var j =0; j<strArr.length; j++){
//         capital = strArr[j].slice(0,1)
//         capital = capital.toUpperCase()
//         smallCaps1 = strArr[j].slice(1)
//         smallCaps1 = smallCaps1.toLowerCase()
//         document.write(" "+capital+smallCaps1+" \t")
//     }
// }
// var smallCaps = prompt("Enter some Text.")
// capslock(smallCaps)

// =====Chapter 35 - 38 ==== Task: xii
// Could not get

// =====Chapter 35 - 38 ==== Task: xiii
// Could not get

// =====Chapter 35 - 38 ==== Task: xiv (a)
document.write("<h1>The Geometrizer</h1>")
function calcCircumference(radius){
    var circumference = 2*3.142*radius
    document.write("The Radius is: "+radius+"<br>")
    document.write("The circumference is: "+circumference+"<br>")
}
var rad = +prompt("Enter the radius of Circle of Measure Circumference.")
calcCircumference(rad)

// =====Chapter 35 - 38 ==== Task: xiv (b)
function calcArea(radius){
    var area = 3.142*radius*radius
    document.write("The Radius is: "+radius+"<br>")
    document.write("Radius of Circle is: "+area+"<br>")
}
var rad = +prompt("Enter the radius of Circle of Measure Area.")
calcArea(rad)
