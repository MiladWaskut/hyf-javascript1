let myString = "hello,this,is,a,difficult,to,read,sentence"; //1.1
let myStringLength = myString.length; //1.1
console.log(myStringLength); //1.2
myString = myString.replace(/,/g , " "); //1.3
console.log(myString); //1.4
///////////////////////////////////////Arrays//////////////////////////////////////////////////
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"]; //2.1
favoriteAnimals.push("turtle"); //2.1
console.log(favoriteAnimals); //2.2
favoriteAnimals.splice(1, 0, "meerkat"); //2.3
console.log("I think the new  value of  favoriteAnimals array is: ['blowfish', 'meerkat', 'capricorn','giraffe','turtle']"); //2.4
console.log(favoriteAnimals); //2.5
console.log("The array has a length of: " + favoriteAnimals.length); //2.6
favoriteAnimals.splice(4,1); //2.7
console.log(favoriteAnimals); //2.8
let indexOfgiraffe = favoriteAnimals.indexOf("giraffe"); //2.9
console.log("The item you are looking for is at index: " + indexOfgiraffe); //2.10
/////////////////////////////////More JavaScript //////////////////////////////////////////////
function plus(x,y,z){
	let sum = x+y+z;
	return sum;
} //1
function colorCar(color) {
  return ("a " + color + " car");
}
console.log(colorCar("red"));  //2
function fav(x){
	console.log(x);
  return x;
}
let myFav = {food: "Iranian food", color: "blue", drink: "water", sport: "basketball"};
fav(myFav); //3

function vehicleType(color, code){
	if(code === 1){
		console.log("a" + color + " car.");
	}else if(code === 2){
		console.log("a" + color + " motorbike.");
	}else{
		console.log("You have to choose a color and a number of 1 or 2");
	}
}
vehicleType("black", 1);  //4
console.log(3 === 3 ? "yes" : "no");  //5
 function vehicle(color,code,age){
 	if(code === 1){
 		if(age > 1){ 
 			console.log("a " + color + " used car");
 		} else {
 			console.log("a " + color + " new car");
 		}
 	}
 	else if(code ===2 ){
 		if(age > 1) {
 			console.log("a " + color + " used motorbike");
 		} else {
 			console.log("a " + color + " new motorbike");
 		}
 	}
 	else {
 		console.log("You have to insert the color then a code of 1 or 2 and then the age of vehicle");
 	}
 }
vehicle ("red",2,6); //6
let list = ["motorbike", "caravan", "bike"]; //7
console.log(list[2]); //8
function vehicle(color, code, age) {
  let list = ["motorbike","caravan", "bike"];
  if (age > 1) {
    age = " used " ;
  } else {
    age = " new ";
  }
  if (code === 1) {
    code = list[0];
  } else if (code === 2) {
    code = list[1];
  } else if (code === 3) {
    code = list[2];
  } else {
   return "You have to insert the color then a code of 1 or 2 or 3 and then the age of vehicle";
  }
   return "a " + color + age + code;
}
console.log(vehicle("green", 3, 1)); //9

let ads = "Amazing Joe's Garage, we service";
let list = ["car", "motorbike", "caravan", "bike"];
for (i = 0; i < list.length; i++) {
  if (i === list.length - 1) {
    ads += " and " + list[i]+"s" + ".";
  } else if (i === list.length - 2) {
    ads += " " + list[i]+"s";
  } else {
    ads += " " + list[i]+"s"+ ",";
  }
}
console.log(ads);  //10

let ads = "Amazing Joe's Garage, we service";
let list = ["car", "motorbike", "caravan", "bike"];
list.push("boat");
for (i = 0; i < list.length; i++) {
  if (i === list.length - 1) {
    ads += " and " + list[i]+"s" + ".";
  } else if (i === list.length - 2) {
    ads += " " + list[i]+"s";
  } else {
    ads += " " + list[i]+"s"+ ",";
  }
}
console.log(ads);   //11
let emptyObject = {

}      //12
let Teachers = {
  "Aristeidis Bampakos": "Html5",
  "George Sisko": "Css",
  "Kosmas Pouianou": "JavaScript",
  "Kostas Minaidis": "JavaScript"
}   //13,14

let x = [1,2,3];
let y = [1,2,3];
let z = y;
console.log(x == y);  //false
console.log(x === y);  //false
console.log(z == y);    //true
console.log(z == x);    //false                      //15
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
console.log(o1);
console.log(o2);
console.log(o3);
console.log(o2 = o3);    // false
o1.foo = 'new bar';
console.log(o1);
o2.foo = 'new new bar';
console.log(o2);
console.log(o3);
console.log(o1 == o2);    // false
console.log(o2 === 03) ;   // false
//So the order I assign  doesn't matter.        //16

let bar = 42;
console.log(typeof typeof bar);   // string    //typeof (typeof anything) is equivalent to typeof "somestring" which is, of course, "string"    in the other words typeof x returns a string representation of the type of x. So, naturally, typeof typeof x is string. --))
//17
	
