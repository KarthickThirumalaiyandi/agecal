var div1 = document.createElement("div")
div1.setAttribute("id","res")
div1.className = "div1"

var date1 = document.createElement("input");
date1.setAttribute("type","date")
date1.setAttribute("id","dob")
var button = document.createElement("button");
button.innerHTML = "display date"
button.setAttribute("onclick",'displaydate()') 

var result1 = document.createElement("div")
result1.setAttribute("id","res")
result1.className = "div1"


div1.append(date1,button)
document.body.append(div1);

function displaydate(){

date = document.getElementById("dob").value
console.log(date);
if (Date.parse(date))
{
    var inputdate = new Date(date);
    console.log(inputdate); 
    var curdate = new Date();
    console.log(curdate);
    var millsecdiff = parseInt(curdate.getTime()) - parseInt(inputdate.getTime());
    console.log(millsecdiff)
    var seconddiff = mathfloor(millsecdiff,1000)
    console.log(seconddiff)
    var minddiff = mathfloor(seconddiff,60)
    console.log(minddiff)
    var hrdiff = mathfloor(minddiff,60)
    console.log(hrdiff)
    var daydiff = mathfloor(hrdiff,24)
    console.log(daydiff)
   // var yeardiff = getyears(inputdate,curdate);
    //console.log(yeardiff)
    var months = getmonths(inputdate,curdate)
    console.log(months)
    var yeardiff;
    if (months > 12)
    {
        //console.log("hi")
        yeardiff = getyears(inputdate,curdate)
        console.log(yeardiff)
    }
    else
    {
        yeardiff = 0;
    }

    var l1 = document.createElement("label")
    l1.innerHTML = "inputdate : " + inputdate
    var b1 = document.createElement("br")
    var l2 = document.createElement("label")
    l2.innerHTML = "years : " + yeardiff
    var b2 = document.createElement("br")
    var l3 = document.createElement("label")
    l3.innerHTML = "months : " + months
    var b3 = document.createElement("br")
    var l4 = document.createElement("label")
    l4.innerHTML = "days : " + daydiff
    var b4 = document.createElement("br")
    var l5 = document.createElement("label")
    l5.innerHTML = "hours : " + hrdiff
    var b5 = document.createElement("br")
    var l6 = document.createElement("label")
    l6.innerHTML = "minutes : " + minddiff
    var b6 = document.createElement("br")
    var l7 = document.createElement("label")
    l7.innerHTML = "seconds : " + seconddiff
    var b7 = document.createElement("br")
    var l8 = document.createElement("label")
    l8.innerHTML = "millseconds : " + millsecdiff
    var b8 = document.createElement("br")
    result1.append(l1,b1,l2,b2,l3,b3,l4,b4,l5,b5,l6,b6,l7,b7,l8,b8)
    document.body.append(result1)
}
else{
        alert("invalid date")
}

function mathfloor(value1,value2)
{
    return Math.floor(value1/value2)
}
function getyears(value1,value2)
{

    var d1 = new Date(value1)
    var d2 = new Date(value2)
    console.log("d2 : " + d2.getFullYear() + "d1 :" + d1.getFullYear())
    return d2.getFullYear() - d1.getFullYear()
     
}
function getmonths(value1,value2)
{
    var year = getyears(value1,value2)
    var month = (year*12) + (value2.getMonth() - value1.getMonth())
    return month 
}

}
