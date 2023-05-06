

var a=require("readline-sync")
var b=a.questionInt("enter the number : ")
var i=1
var sum=0
while (i<=1){
    x=b%10
    y=(b/10)%10
    z=(b/100)%10
    x=x**3
    y=y**3
    z=z**3
    i++
    sum=x+y+z
if (sum===b){
    console.log(sum,"it is armstrong number")

}else{
    console.log(sum,"it is not armstrong number ")
}


}
