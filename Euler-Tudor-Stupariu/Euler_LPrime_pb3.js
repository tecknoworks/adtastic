const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,output: process.stdout
})

function prime(nr)
{
	for (j = 2; j <= Math.sqrt(nr); j++)
	{
		if (nr % j == 0)
		{
			return false;
			//FALSE IF NOT PRIME
		}
	}
	return true;
}

var x = 0;

rl.question('Input Number: ', function(x){

	var big = 0;

	for(i = 2; i <= Math.sqrt(x); i++)
	{
		if((prime(i) == true) && (x % i == 0)) 
		{
			big = i;
		}
	}

	console.log(big);
	rl.close();
});