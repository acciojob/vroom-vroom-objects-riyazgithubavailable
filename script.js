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
		return this.make + " " + this.model;
	}
}

function SportsCar(make, model, topSpeed) {
    this.topSpeed = topSpeed;
    this.getTopSpeed = function(){
      return this.topSpeed;
    }
    Car.call(this,make,model)
}
// SportsCar.prototype.__proto__ = Car.prototype;
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel())
console.log(car.getTopSpeed())


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
