// (For the code snippet provided below, write comments for each line of code to explain its functionality. In your comments you must demonstrates your ability to recognise and identify functions, ranges and classes)

class Car { // a class defining a Car 
  constructor(brand) {//The constructor function, this is called when we use 'new Car(brand)' and whatever is passed as 'brand' will be used in this consturctor scope
    this.carname = brand;//defining a class variable/attribute to the instance of Car and assigning the passed in 'brand' to the this.carname attribute
  }
  present() {// a method that can be called on an instance of the Car class
    return 'I have a ' + this.carname;// this will return a string that will be different depending on the brand that was passed into the constructor. Examples:
    //"I have a Holden" or "I have a Toyota"
  }
}

class Model extends Car {// a class defining a Model, based off the Car class. Model instances will have access to the same methods and attributes as the Car class
  constructor(brand, mod) {//The constructor function, this is called when we use 'new Model(brand, mod)' and whatever is passed as 'brand' and 'mod' will be used in this consturctor scope
    super(brand);// this invokes the parent class's constructor function using the 'brand' argument
    this.model = mod;//defining a class variable/attribute to the instance of Car and assigning the passed in 'brand' to the this.carname attribute
  }
  show() {// a method that can be called on an instance of the Model class
    return this.present() + ', it was made in ' + this.model;// this concatonates the Car class's .present() return string wih the string "it was made in 1981" , as an example. this.model is whatever was stored in the model attribute. The whole .show() method will return the following strings, as examples:
    //"I have a Holden, it was made in 1980" or "I have a Toyota, it was made in 1981"
  }
}

let makes = ["Ford", "Holden", "Toyota"] // this definines an array of three strings and assigns it to the variable makes
let models = Array.from(new Array(40), (x,i) => i + 1980)// This is how to do a rangein javascript, it creates an array of 40 elements with each element representing a year between 1980 and 2019. Array.from() creates a new array based on an input array (new Array(40)), the second argument is a mapFn ((x, i) => i + 1980)) that describes how to map from the elements of new Array(40) to the new elements in 'models'. i is the index of the array, so it writes 0 + 1980 to the first element, 1 + 1980 to the second element, and so on until it reaches the 40th element, when it will write 39 + 1980.

// This is a function which will return a random integer from between a given maximum and minimum number
function randomIntFromInterval(min,max) { // min and max included
    return Math.floor(Math.random()*(max-min+1)+min);//Math is a javascript library, here we are using the floor method to round to the nearest integer. The random method is used to generate a "random" number between 0 and 1 (as much as possible given comp sci contraints). This random number is multiplied by the min max range to create a range of numbers of the correct length, and then it is added to min so that these numbers begin at min and then can range all the way up to the max number.
}

for (model of models) {//This is a loop that iterated over the array 'models', and makes the local scope variable 'model' available to the loop code to work with. Model will be a year represented by an integer, beginning with 1980

  make = makes[randomIntFromInterval(0,makes.length-1)]//this picks a make at random from the options "Ford" "Holden" and "Toyota". The returned number from randomIntFromInterval will be between 0 - 3, and this index is accessed in the 'makes' array to return the make string.
  model = models[randomIntFromInterval(0,makes.length-1)]// this picks a model at random from the first three elements of the models array. So 'model' will be either 1980, 1981 or 1982. I am not sure if this is an intentional bug or not, I would have thought you would want to select at random from the entire models array, in order to do that you would change the code to:
  //model = models[randomIntFromInterval(0,models.length-1)]
    
  mycar = new Model(make, model);// this creates a new car based on the random make and model generated above. It is an instance of the Model class, with attributes 'model' and 'carname'.
  console.log(mycar.show())//This invokes the .show() method from the Model instance, which will print "I have a Holden, it was made in 1981" (as an example). Depending on the make and model chosen it will print different stings, e.g. "I have a Ford, it was made in 1980"
}