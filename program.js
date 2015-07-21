// var x = process.argv;

// for(y as x){
// 	if(typeOf(y) === '1'){
// 		var z = y;
// 	}
// }

var myTotal = 0,
x = process.argv;

for(var i = 0; i < x.length; i++){
	myTotal += x[i][2];
}

console.log(myTotal);


