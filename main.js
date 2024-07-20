 let variable = prompt("сколько вам лет!")
 if (variable < 10 && variable < 10){
     console.log('False');
 } else {
     console.log('True');
 }

var num = prompt("Номер квартиры: ");

 if(num <= 20)

{

  console.log("квартира находится в 1 подъезде");

 }

 else if(num > 20 && num <=48)

{

  console.log("квартира находится в 2 подъезде");

 }

 else if(num > 49 && num <=90)

 {

  console.log("квартира находится в 3 подъезде");

 }

 let a = prompt("Напишите число!");
 if (a > 0 && a < 5){
 console.log('True'); 
  } else{
      console.log('false');  
    }
   var date = new Date();
  var hour = date.getHours();
  if (hour>=6 && hour<12) greeting = "Доброе утро"; else { 
 if (hour>=13 && hour<18) greeting = "Добрый день"; else { 
  if (hour>=18 && hour<24) greeting = "Добрый вечер"; else { 
  if (hour>=0 && hour<5) greeting = "Доброй ночи"; } 
  } 
 } 
 console.log( greeting + NameHours);
  let NameHours = "Noruuz"