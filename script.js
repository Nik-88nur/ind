function sayHi(){
console.log("Привет")
console.log("Как дела?")
document.querySelector(".block").style.opacity = 0
}
sayHi()
 function myblock(){
    document.querySelector(".block").style.opacity = 0
 }













 let менюОткрыто = false
 function img3() {
    if (менюОткрыто === true){
        closeMenu();
        менюОткрыто = false;
    } else{
        openMenu();
        менюОткрыто = true;
    }
 }


 function change(){
    let текстВинпуте = document.querySelector("input").value;
    console.log(текстВинпуте);
    changeTextSize(текстВинпуте);
 }
 function changeTextSize(размер){
    document.querySelector(".div")
    .style.fontSize = размер + "px"
 }