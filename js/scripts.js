/* 11.4. Zadanie: Pierwsza klasa */

function Phone(brand, price, color, origin, screan, stock, sales) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.origin = origin;
	this.screan = screan;
	this.stock = stock;
	this.sales = sales;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + ", the irigin is " + this.origin + " and screan size is " + this.screan + ".");
}

Phone.prototype.printStock = function() {
		console.log("The phone stock is " + this.stock + " pieces.");
}

Phone.prototype.printSales = function() {
		console.log("The phone sales was " + this.sales + " pieces last week.");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "China", "7 inches", "1200", "850");

iPhone6S.printInfo();
iPhone6S.printStock();
iPhone6S.printSales();
	