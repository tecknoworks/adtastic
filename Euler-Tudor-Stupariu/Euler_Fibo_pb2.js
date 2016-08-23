var sum = 0;
var b = 2 , a = 1;
while(b < 4000000){
	if (b % 2 == 0){
		sum = sum + b;
	}
	b = a + b;
	a = b - a;
}

console.log(sum);

	
