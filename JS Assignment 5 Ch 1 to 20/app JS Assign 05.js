// Chatpter O1

// Task:i, ii and iii
// alert("Welcome to Webpage (Password is 1234)")
// var passwrd = +prompt("Enter Password.")
// if(passwrd === 1234){
//     alert("Wellcome to JS land...\nHappy Coding!")
// }
// else
// alert("Error! Please enter a vilid password.")

// Task: iv
// for(var a = 0; a < 2; a++){
//     if(a === 0){
//         alert("Wellcome to JS land...")
//     }
//     else if(a === 1){
//         alert("Happy Coding!")
//     }
// }

// Task :v
// console.log("Hello.. I can run JS through my Browser's Console.")

// Chapter O2

// Task : i,ii,and iii
// var username;
// var myName = "Asadullah";
// let message ="Hello World.."
// alert(message)

// Task :iv
// var stName = "Jhon Doe"
// var stAge = "15 Years"
// var stCourse ="Certified Mobile Application Development."
// alert(stName)
// alert(stAge)
// alert(stCourse)

// Task :v
// var food = " PIZZA\n PIZZ\n PIZ\n PI\n P"
// alert(food)

// // Task :vi
// var email ="assadphl@gmail.com"
// alert("My email Address is "+email)

// // Task :vii
// var book ="A Smarter Way to Learn JavaScript."
// alert("I am trying to learn "+book)

// Task :viii
// document.write("Yah.! I can Write HTML content Through JavaScript.")


// Task: ix
// var design = "''----------&$ * $&----------''"
// alert(design)
// document.write(design)

// Chapter O3

// Task: i
// var age =15
// alert("I am "+age+" Year Old.")

// Task: ii
// var N = 5
// alert("You have visited the site  "+N+" times.")

// Task: iii
// var birthYear = 1997
// document.write("My birth year is "+birthYear+"<br>")
// document.write("Data type of decleared variable is Number.")

// Task: iv
// document.write("online clothing store: xyzClothing"+"<br><br>")
// var visitor = prompt("Enter Visitor Name. example='Asad'")
// var product = prompt("Please Enter Product name you want to purchase. example='5'")
// var quantity =+prompt("Enter Number of Items/Quantity of product. example='T-Shirt'")
// document.write("Mr. "+visitor+" ordeded "+quantity+" "+product+"(s) on xyzClothing")

// Chapter O4

// // Task: i
// var a,b,c;

// Task: ii
// legal Variables
// var $var, _2ndVariable, Var03, camelCase, userAlert;
// Ilegal Variables
// var "Var", 2ndVar, console, var 4, #Var**;

// Task: iii
// document.write("<h3>Rules for naming JS variables</h3> <br> <br> ")
// document.write("Variable names can only contain numbers, $, _ and letters. For example $my_1stVariable <br>")
// document.write("Variables must begin with a letter, $ or _ . For example $name, _name or name<br>")
// document.write("Variable names are case Sensitive <br>Variable names should not be JS Keywords")

// Chapter O5

// Task: i and ii
// var no1 = 9;
// var no2 = 2;
// var add = no1+no2;
// var sub = no1-no2;
// var multi = no1*no2;
// var divid = no1/no2;
// document.write("The Sum of "+no1+ " and "+no2+" is "+add+"<br>")
// document.write("The Difference of "+no1+ " and "+no2+" is "+sub+"<br>")
// document.write("The Product of "+no1+ " and "+no2+" is "+multi+"<br>")
// document.write("The Division of "+no1+ " and "+no2+" is "+divid)

// Task: iii
// var var1;
// document.write("Value after variable declaration is: "+var1+"<br>")
// var1 = 5
// document.write("Initial value: "+var1+"<br>")
// var1 = ++var1
// document.write("Value after increment is: "+var1+"<br>")
// var1 =7+var1
// document.write("Value of after addition is: "+var1+"<br>")
// var1= --var1
// document.write("Value after decrement is: "+var1+"<br>")
// var1 = var1%3
// document.write("The remainder is: "+var1)

// Task: iv
// alert("Each ticket is 600/- PKR.")
// var ticket = +prompt("Enter Number of tickets you want to buy for a Movie.")
// var cost = 600
// var total = cost*ticket
// document.write("Total cost to buy "+ticket+" Ticket(s) to a movie is "+total+"/- PKR.")

// Task: v
// var table = +prompt("Enter a number to create Counting Table of that:")
// document.write("Counting Table"+"<br> <br>")
// for(var a = 1; a <= 10; a++){
//     document.write(table+" x "+a+" = "+table*a+"<br>")
// }

// Task: vi
// var C = 25
// var Fahrenheit = (C*9/5)+32
// document.write("The "+C+" Calcius = "+Fahrenheit+" Fahrenheit <br>")
// var F = 70
// var Calcius =(F-32)*5/9
// document.write("The "+F+" Fahrenheit = "+Calcius+" Calcius")


// Task: vii
// document.write("<h1>Shopping Cart</h1>")
// var quantity1 = 3
// var  priceItem1 = 650
// document.write("The Price of Item 1 is = "+priceItem1+"<br>")
// document.write("The Quantity of Item 1 is = "+quantity1+"<br>")
// var priceItem2 = 100
// var quantity2 = 2
// document.write("The Price of Item 2 is = "+priceItem2+"<br>")
// document.write("The Quantity of Item 2 is = "+quantity2+"<br>")
// var shipping = 100
// document.write("Shipping Charges = "+shipping+"<br> <br>")
// var totalCost = (quantity1*priceItem1)+(quantity2*priceItem2)+shipping
// document.write("Total cost of your order  is  = "+totalCost+"<br>")


// // Task: viii
// var totalMarks = 980
// var obtainedMarks = 804
// var percentage = obtainedMarks/totalMarks*100
// document.write("<h1>Mark Sheet </h1>")
// document.write("Total Marks = "+totalMarks+"<br>")
// document.write("Obtained Marks = "+obtainedMarks+"<br>")
// document.write("Percetage = "+percentage+"%")

// Task: ix
// var dollar1 = 104.80
// var riyal1 = 28
// var exchange = (dollar1*10)+(riyal1*25)
// document.write("<h1>Currency in PKR</h1>")
// document.write("I have 10 US Dollars and 25 Saudi Riyals.<br> which are<br>")
// document.write("Total currency in PKR: "+exchange+"/-")

// Task: x
// var var2 = 2
// var plus = +prompt("Enter 5 to Add")
// var result = 2+plus
// alert("Reslt = "+result)
// var multiply = +prompt("Enter 10 to Multiply.")
// result = result*multiply
// alert("Now Result is = "+result)
// var dvd = prompt("Divide the result by 2")
// result = result/dvd
// document.write("The final result is "+result)

// // Task: xi
// var currentYear = 2020
// var birthYear = 1997
// var Age = currentYear-birthYear
// document.write("<h1>Age Calculator</h1>")
// document.write("Current Year = "+currentYear+"<br>")
// document.write("Birth Year = "+birthYear+"<br>")
// document.write("Your Age is = "+Age)

// Task: xii
// var radius = 20
// var circumference = 2*3.142*radius
// var area = 3.142*radius*radius
// document.write("<h1>The Geometrizer</h1>")
// document.write("Radius of Circle is: "+radius+"<br>")
// document.write("The circumference is: "+circumference+"<br>")
// document.write("The area is: "+area)

// Task: xiii
// var snack = "Pappu Patata snack"
// var currentAge = 23
// var maxAge = 100
// var snackNo = 3
// var totalSnack = (maxAge-currentAge)*snackNo
// document.write("<h1>The Life Time Supply Calculator</h1>")
// document.write("Favourate Snack: "+snack+"<br>")
// document.write("Current Age: "+currentAge+"<br>")
// document.write("Estimated Maximum Age: "+maxAge+"<br>")
// document.write("Amount of Snacks per Day: "+snackNo+"<br>")
// document.write("You will need "+totalSnack+" "+snack+" to last you until the ripe old age of "+ maxAge)


// Chapter O6-O9

// Task: i
// var a = 10
// document.write("Result: <br>The value of a is: "+a)
// document.write("<br>----------------------------<br>")
// a = ++a
// document.write("<br>The value of ++a is: "+a)
// document.write("<br>Now The value of a is: "+a+"<br>")
// document.write("<br>The value of a++ is: "+a)
// a = a+1
// document.write("<br>Now The value of a is: "+a+"<br>")
// a = --a
// document.write("<br>The value of --a is: "+a)
// document.write("<br>Now The value of a is: "+a+"<br>")
// document.write("<br>The value of a-- is: "+a)
// a = a-1
// document.write("<br>Now The value of a is: "+a)

// Task: ii
// var a =2, b =1;
// var result1
// result1 = --a;
// document.write("a is: "+result1+"<br>")
// result1 = --a - --b;
// document.write("b is: "+result1+"<br>")
// result1  = a -b + ++b;
// result1 = --a - --b + ++b + b--;
// document.write("Result is: "+result1+"<br>")

// Task: iii
// var userInput = prompt("Enter Your Name: ")
// alert("Wellcome Mr. "+userInput+" This is chapter 6-9")

// Task: iv
// var table = +prompt("Enter any Even number:")
// document.write("Mutliplication Table only for EVEN numbers"+"<br> <br>")
// for(var a = 1; a <= 10; a++){
//     if(table%2 ===  0)
//      document.write(table+" x "+a+" = "+table*a+"<br>")
//      else
//      document.write(5+" x "+a+" = "+5*a+"<br>")
// }

// Task: v
// var arrSub = ["English", "Math", "Science"]
// var eachTotal = [100,100,100]
// var eachObtained = [54,54,48]
// var percen = [eachObtained[0]/eachTotal[0]*100, eachObtained[1]/eachTotal[0]*100,eachObtained[2]/eachTotal[0]*100]
// var marksObtinedTotal = eachObtained[0]+eachObtained[1]+eachObtained[2]
// var marksTotal = eachTotal[0]+eachTotal[1]+eachTotal[2]
// var percenTotal = marksObtinedTotal/marksTotal*100
// document.write("<b>Subject__Total__Obt__Percentage</b> <br>")
// document.write(arrSub[0]+"__"+eachTotal[0]+" ___ "+eachObtained[0]+" __ "+percen[0]+"% <br>")
// document.write(arrSub[1]+"____"+eachTotal[1]+" ___ "+eachObtained[1]+" __ "+percen[1]+"% <br>")
// document.write(arrSub[2]+" _ "+eachTotal[2]+"  ___ "+eachObtained[2]+" __ "+percen[2]+"% <br>")
// document.write("<b>Total  ___ "+marksTotal+" ___ "+marksObtinedTotal+" _ "+percenTotal+"% </b>")

// Chapter O9-11

// Task: i
// var city = prompt("Enter City Name.")
// if(city === "karachi"){
//     alert("Wellcome to city of Lights..")
// }
// else
// alert("Another City.")

// Task: ii
// var gendr = prompt("Enter Your Gender.")
// if(gendr === "male"){
//     alert("Good Morning Sir.")
// }
// else if(gendr ==="female"){
//     alert("Good Morning Ma'am.")
// }
// else
// alert("Invalid Input.")

// Task: iii
// var signalColor = prompt("Enter Tarffic Signal Color: ")
// if(signalColor === "red"){
//     alert("You Must Stop on Red Color.")
// }
// else if(signalColor ==="yellow"){
//     alert("Get Ready yourself to Move on Yellow Color.")
// }
// else if(signalColor === "green"){
//     alert("You can Move Now.")
// }

// Task: iv
// var fuelStatus = +prompt("Enter remaining Fuel in litters: ")
// if(fuelStatus <= 0.75){
//     alert("Please refill the fuel in your car")
// }
// else if(fuelStatus >= 1 & fuelStatus <= 10){
//     alert("You have enough Fuel in your car to cover 3-120 km easily")
// }
// else if(fuelStatus >= 10 & fuelStatus <= 30){
//     alert("No need to refill the fuel in your car")
// }

// Task: v
// 1st Portion
// var a = 4;
// if (++a === 5){
//     alert("given condition for variable (a) is true");
// }
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable (b) is true");
// }
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }
// 2nd Portion
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }
// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// Task: vi
// var subjct1 = +prompt("Enter Subject1 Obtained marks: ")
// var subjct2 = +prompt("Enter Subject2 Obtained marks: ")
// var subjct3 = +prompt("Enter Subject3 Obtained marks: ")
// var allSub = subjct1+subjct2+subjct3
// var allSubTotalMarks = 300
// var allPercentage = allSub/allSubTotalMarks*100
// document.write("<h2>MaarkSheet</h2> <br>")
// if(allPercentage >= 40 & allPercentage <= 49){
//     document.write("Total Marks: "+allSubTotalMarks+"<br>")
//     document.write("Obtained Marks: "+allSub+"<br>")
//     document.write("Percentage: "+allPercentage+"<br>")
//     document.write("Grade: D"+"<br>")
//     document.write("Remarks: Very Poor Result.")
// }
// else if(allPercentage <= 59){
//     document.write("Total Marks: "+allSubTotalMarks+"<br>")
//     document.write("Obtained Marks: "+allSub+"<br>")
//     document.write("Percentage: "+allPercentage+"<br>")
//     document.write("Grade: Fail"+"<br>")
//     document.write("Remarks: Sorry. Try Next Time.")
// }
// else if(allPercentage >= 60 & allPercentage <= 79){
//     document.write("Total Marks: "+allSubTotalMarks+"<br>")
//     document.write("Obtained Marks: "+allSub+"<br>")
//     document.write("Percentage: "+allPercentage+"<br>")
//     document.write("Grade: B"+"<br>")
//     document.write("Remarks: You Need to Improve.")
// }
// else if(allPercentage >= 70 & allPercentage <= 79){
//     document.write("Total Marks: "+allSubTotalMarks+"<br>")
//     document.write("Obtained Marks: "+allSub+"<br>")
//     document.write("Percentage: "+allPercentage+"<br>")
//     document.write("Grade: A"+"<br>")
//     document.write("Remarks: Good.")
// }
// else if(allPercentage >= 80 & allPercentage <= 100){
//     document.write("Total Marks: "+allSubTotalMarks+"<br>")
//     document.write("Obtained Marks: "+allSub+"<br>")
//     document.write("Percentage: "+allPercentage+"<br>")
//     document.write("Grade: A-One"+"<br>")
//     document.write("Remarks: Excellent.")
// }
// Task: vii
// var secretNo = 3
// var guessSecretNo = +prompt("Guess the Number (ranging from 1-10)")
// if(guessSecretNo === secretNo){
//     alert("Bingo! Correct answer.")
// }
// else if(guessSecretNo === ++secretNo){
//     alert("Close enough to the correct answer")
// }
// else
// alert("Wrong answetr.!")

// Task: viii
// var num = +prompt("Enter any number to check whether it dividible by 3:")
// var divisibleBy3 = num%3
// if(divisibleBy3 === 0){
//     alert(num+" is divisible by 3. And the answer: "+num/3)
// }
// else
// alert(num+" is not exactly divisible by 3")

// // Task: ix
// var numberType = +prompt("Enter any Number.(except 0)")
// var evenNo = numberType%2
// if(evenNo === 0){
//     alert("Even Number.")
// }
// else
// alert("Odd Number.")

// Task: x
// var temp = +prompt("Enter Today's Temperature.")
// if(temp >= 0 & temp <= 19 ){
//     alert("OMG! Today’s weather is so Cool.")
// }
//  else if(temp > 20  & temp <= 29){
//     alert("Today’s weather is Cool.")
// }
// else if(temp > 30  & temp <= 39){
//     alert("The Weather Today’s is Normal.")
// }
// else if(temp > 40){
//     alert("It is too hot Outside.")
// }

// // Task xi
// var firstNum = +prompt("First Number.")
// var operator = prompt("Operation(/, *, +, -, %): ")
// var secondNum = +prompt("Second Number.")
// document.write("<b>Calculator</b> <br>")
// if(operator === "+"){
//     document.write("Answer: "+firstNum+" + "+secondNum+" = "+(firstNum+secondNum))
// }
// else if(operator === "-"){
//     document.write("Answer: "+firstNum+" - "+secondNum+" = "+(firstNum-secondNum))
// }
// else if(operator === "*"){
//     document.write("Answer: "+firstNum+" * "+secondNum+" = "+(firstNum*secondNum))
// }
// else if(operator === "/"){
//     document.write("Answer: "+firstNum+" / "+secondNum+" = "+(firstNum/secondNum))
// }
// else if(operator === "%"){
//     document.write("Answer: "+firstNum+" % "+secondNum+" = "+(firstNum%secondNum))
// }

// Chapter 12-13

// Task: i This code is not working..
// var characters = prompt("Enter any Character from your Keyboard (Number or Aphabatic):")
// if (characters >= 65 && characters <=90){
//   alert("This is a Capital letter")  
// }
// else if(characters >= 97 && characters <= 122){
//     alert("This is a Small letter")
// }
// else if(characters >= 48 && characters <= 57){
//     alert("The Character is a digit.")
// }

// Task: ii
// var int1 = +prompt("Enter an Integer number. ")
// var int2 = +prompt("Enter second Integer number. ")
// if(int1 === int2){
//     alert("Both are Equal")
// }
// else if(int1 > int2){
//     alert(int1+" is Greater than "+int2)
// }
// else if(int1 < int2){
//     alert(int1+" is Less than "+int2)
// }

// Task: iii

// Task: iv
// var vowel = prompt("Enter any Aphabatic character.")
// var vowelToLowerCase = vowel.toLowerCase()
// if(vowelToLowerCase === 'a'||vowelToLowerCase === 'e'||vowelToLowerCase === 'i'||vowelToLowerCase === 'o'||vowelToLowerCase === 'u'){
//     alert("True")
// }
// else if(vowelToLowerCase === 'y'){
//     alert("Semi True")
// }
// else
//     alert("False")

// Task: v
// var fbPassword = +prompt("Please enter your password.")
// var yourPassword = 1234
// if(fbPassword === yourPassword){
//     alert("Correct! The password you entered matches the original password")
// }
// else alert("Incorrect password.")

// Task: vi
// var greeting;
// var hour = 24;
// if (hour < 18) {
//     greeting = "Good day";
//     alert(greeting)
// }
// else
//     greeting = "Good evening";
//     alert(greeting)

// Task: vii
// var time = +prompt("Enter Time (format 24 Hours like: 1900 = 07.00 pm)")
// if(time >= 0000 && time < 1200){
//     alert("Good Morning")
// }
// else if(time >= 1200 && time < 1700){
//     alert("Good AfterNoor")
// }
// else if(time >= 1700 && time < 2100){
//     alert("Good Evening")
// }
// else if(time >= 2100 && time <2359){
//     alert("Good Night")
// }

// =====Chapter 14-16 Task: i
// var arrLiteral = []
// arrLiteral[0] = "Asad"

// =====Chapter 14-16 Task: ii
// var arrObj = []
// arrObj.push("Ali")

// =====Chapter 14-16 Task: iii
// var arrStrings = ["This is String Exp.","Asad"]

// =====Chapter 14-16 Task: iv
// var arrNum = [786,768,867,687,678]

// =====Chapter 14-16 Task: v and vi
// var arrBolean = [0,1]
// var arrmisxed = ["Asad",785,0,true]
// alert(arrmisxed)

// =====Chapter 14-16 Task: vii
// var arrEdu = [" ","SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
// document.write("Qualification:<br>")
// for(var i = 0; i <=8; i++){
//     document.write(i+") "+arrEdu[i]+"<br>")
// }

// =====Chapter 14-16 Task: viii
// var arrStud = ["Michael","John","Tony"]
// var arrScor = [320,230,480]
// for(a = 0; a<=2; a++){
//     document.write("The Score of "+arrStud[a]+" is "+arrScor[a]+" . Percentage: "+arrScor[a]/500*100+"%. <br>")
// }

// =====Chapter 14-16 Task: ix
// var arrColors =["Red","Green","Blue","Cyan"]
// document.write("The available colors: "+arrColors)

// =====Chapter 14-16 Task: x
// var arrTotalScor =[320,230,480,120]
// document.write("Score of Students: "+arrTotalScor+"<br>")
// var arrOrderedScor =[]
// arrOrderedScor.push(arrTotalScor[3])
// arrOrderedScor.push(arrTotalScor[1])
// arrOrderedScor.push(arrTotalScor[0])
// arrOrderedScor.push(arrTotalScor[2])
// document.write("Ordered Score of Students: "+arrOrderedScor)

// =====Chapter 14-16 Task: xi
// var cities =["karachi","hyderabad","Sukkur","Nawabshah","Umarkot"]
// var selected = cities.slice(1,3)
// document.write("Cities: "+cities+"<br>")
// document.write("selected Cities: "+selected)

// =====Chapter 14-16 Task: xii
// var arr1 = ["This ", " is ", " my ", " cat."];
// document.write("Array: <br>"+arr1+"<br>")
// document.write("Strings: <br>"+arr1[0]+arr1[1]+arr1[2]+arr1[3])

// =====Chapter 14-16 Task: xiii
// var arr1Names = ["Keyboard"]
// arr1Names.push("Mouse","CPU")
// arr1Names.push("LCD")
// arr1Names.push("Printer")
// document.write("Devices: <br>")
// document.write(arr1Names+"<br><br>")
// for(var k = 4; k>= 0; k--){
//     arr1Names.shift()
//     document.write("Remaining: <br>"+arr1Names+"<br><br>")
// }
// =====Chapter 14-16 Task: xiv
// var arr1Names = ["Keyboard"]
// arr1Names.push("Mouse","CPU")
// arr1Names.push("LCD")
// arr1Names.push("Printer")
// document.write("Devices: <br>")
// document.write(arr1Names+"<br><br>")
// for(var k = 4; k>= 0; k--){
//     arr1Names.pop()
//     document.write("Remaining: <br>"+arr1Names+"<br><br>")
// }

// =====Chapter 14-16 Task: xv
// Could not Understand....

// =====Chapter 17-20 Task: i

// =====Chapter 17-20 Task: ii
// =====Chapter 17-20 Task: iii
// =====Chapter 17-20 Task: vi
// =====Chapter 17-20 Task: v
