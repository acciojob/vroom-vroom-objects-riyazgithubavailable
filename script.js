// Complete the js code
// function Car(make, model) {
// 	this.make = make;
// 	this.model = model;
// 	this.getMakeModel = function () {
// 		return this.make + " " + this.model
// 	}
// }

// function SportsCar(make, model, topSpeed) {}
// const user = new Car("Ferrari", "Testarossa")
function Car(make, model) {
	this.make = make;
	this.model = model;
	this.getMakeModel = function () {
		return console.log(this.make + " " + this.model);
	}
}

function SportsCar(make, model, topSpeed) {
    this.topSpeed = topSpeed;
    this.getTopSpeed = function(){
      console.log(this.topSpeed);
    }
    Car.call(this,make,model)
}
// SportsCar.prototype.__proto__ = Car.prototype;
const user = new Car("Ferrari", "Testarossa")
user.getMakeModel();
let user1 = new SportsCar("Tata", "Testarossa", 200)
user1.getMakeModel();
user1.getTopSpeed()
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
