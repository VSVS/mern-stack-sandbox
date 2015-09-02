var babySteps = function(num){
	num = process.argv;
	var total = 0;
	var v;
	for(var i = 0; i < num.length; i++ ){
		v = parseInt(num[i]);
		if(!isNaN(v)){
			total += v;
		}
	}
	console.log(total);
}
babySteps();
