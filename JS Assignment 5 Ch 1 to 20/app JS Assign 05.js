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
var arrSub = ["English", "Math", "Science"]
var eachTotal = [100,100,100]
var eachObtained = [54,54,48]
var percen = [eachObtained[0]/eachTotal[0]*100, eachObtained[1]/eachTotal[0]*100,eachObtained[2]/eachTotal[0]*100]
var marksObtinedTotal = eachObtained[0]+eachObtained[1]+eachObtained[2]
var marksTotal = eachTotal[0]+eachTotal[1]+eachTotal[2]
var percenTotal = marksObtinedTotal/marksTotal*100
document.write("<b>Subject Total Obt %</b> <br>")
document.write(arrSub[0]+" "+eachTotal[0]+" "+eachObtained[0]+" "+percen[0]+"% <br>")
document.write(arrSub[1]+" "+eachTotal[1]+" "+eachObtained[1]+" "+percen[1]+"% <br>")
document.write(arrSub[2]+" "+eachTotal[2]+" "+eachObtained[2]+" "+percen[2]+"% <br>")
document.write("<b>Total  "+marksTotal+" "+marksObtinedTotal+" "+percenTotal+"% </b>")

// Chapter O9-11

// Task: i