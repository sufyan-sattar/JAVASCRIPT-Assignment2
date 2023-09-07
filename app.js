                            //  Chapter (5)


// Question 1:-
var num1 = 3
var num2 = 5

var sum= (num1 + num2)

document.write(' The sum of ' + num1 + ' and ' + num2 + ' is: ' +sum)
document.write('<br>'  +'<br>')

// Question 2:-

// Substract
var num3 = 3
var num4 = 5

var sum= (num3 - num4)
document.write(' The sum of ' + num3 + ' and ' + num4 + ' is: ' + sum)
document.write('<br>')

// Multiply
var num5 = 3
var num6 = 5

var sum= (num5 * num6)
document.write(' The sum of ' + num5 + ' and ' + num6 + ' is: ' + sum)
document.write('<br>')

// Divide
var num7 = 3
var num8 = 5

var sum= (num7 / num8)
document.write(' The sum of ' + num7 + ' and ' + num8 + ' is: ' + sum)
document.write('<br>')

// Modulus
var num9 = 3
var num0 = 5

var sum= (num9 % num0)
document.write(' The sum of ' + num9 + ' and ' + num0 + ' is: ' + sum)
document.write('<br>'  +'<br>')

// Question 3 (a & b):-
var value
document.write (' Value after variable declaration is ' +value)
document.write ('<br>')

// Question 3 (c & d):-
var value = 5
document.write ('Initial value ' + +value)
document.write ('<br>')

// Question 3 (e & f):-
var x = 5
var y = ++x
document.write ('Value of increment is ' + +y)
document.write ('<br>')

// Question 3 (g & h):-
var x = 7
var y = ++x
var z = 5 +y
document.write ('Value after addition is ' + +z)
document.write ('<br>')

// Question 3 (i & j):-
var x = 7
var y = ++x
var z = 5 +y
var o = --z
document.write ('Value after decrement is: ' + +o)
document.write ('<br>')

// Question 3 (k & l):-
var x = 7
var y = ++x
var z = 5 +y
var o = --z
var p = o % 3
document.write ('The Remainder is: ' + +p)
document.write ('<br>'  +'<br>')


// Question 4:-
var oneTicket = 600
var fiveTicket = oneTicket * 5
var result = fiveTicket
document.write ('Total cost to buy 5 tickets to a movie is ' + result + ' PKR')
document.write ('<br>' +'<br>')

// Question 6 (a & b):-
var C= 25
var cTof= (25*9/5)+32
document.write( C + '&deg;C'+ "  " + "is" + " "+cTof +'F&deg;')
document.write ('<br>')

// Question 6 (c & d):-
var F = 70
var fToc = (70-32)*5/9
document.write( F + 'F&deg;' +  " " + "is"+" "+ fToc +'&deg;C')
document.write ('<br>')
document.write ('<br>')

// Question 7:-
var priceitem1 = 650
document.write ( 'Price of item1 is: ' +priceitem1 +'<br>')
var quantityitem1 = 3
document.write ('Quantity of item 1 is: ' +quantityitem1 +'<br>')
var priceitem2 = 100
document.write ( 'Price of item2 is: ' +priceitem2 +'<br>')
var quantityitem2 = 7
document.write ('Quantity of item 2 is: ' +quantityitem2 +'<br>')
var shippingcharges = 100
document.write ('Shipping Charges: ' +shippingcharges +'<br>')
var totalcost = priceitem1 * quantityitem1 + priceitem2 * quantityitem2 + shippingcharges
document.write ('Total cost of your Order is: ' +totalcost +'<br>' +'<br>')

// Question 8:-
var totalmarks = 1000
document.write ('Total Marks: ' +totalmarks +'<br>')
var marksobtained = 566
document.write ('Marks Obtained: ' +marksobtained +'<br>')
var percentage = marksobtained/totalmarks*100
document.write ('Percentage: ' +percentage +'<br>' +'<br>')

// Question 9:-
var dollarrate = 308
var totaldollar = 10
var riyalrate = 82
var totalriyal = 25
var inPKR = dollarrate*totaldollar+riyalrate*totalriyal
document.write ('Total Currency in PKR is: ' +inPKR +'<br>' +'<br>')

// Question 10:-
var x = 5
var y = x+ 5*10/2
document.write ('All Calculation in single expression: ' +y +'<br>' +'<br>')

// Question 11:-
var currentyear = 2023
var birthyear = 2004
var yourage = currentyear-birthyear
document.write ('Your Age is: ' +yourage +'<br>' +'<br>')

// Question 12:-
var radiousofcircle = 20
document.write ('Radius of a Circle is :' +radiousofcircle +'<br>')
var circum = 2 *3.142*20
document.write ('The Circumference is: ' +circum +'<br>')
var area = 3.142*20*20
document.write ('The area is:' +area +'<br>'+'<br>')

// Question 13:-
var favsnack = 'Peanut Pik'
document.write ('Favourite Snack: ' +favsnack +'<br>')
var currentage = 19
document.write ('Current Age: ' +currentage +'<br>')
var maxage = 60
document.write ('Estimated Maximum Age: ' +maxage +'<br>')
var snackperday = 3
document.write ('Amount of snacks per day' +snackperday +'<br>')
var lifetime = (41*365*snackperday)
document.write ('You will need ' +lifetime+ ' Peanut Pik'  +' to last you until the ripe old age of ' +maxage)
