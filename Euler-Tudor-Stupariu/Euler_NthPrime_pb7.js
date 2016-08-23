function prime(nr)
{
	for (var i=2; i<=Math.sqrt(nr); i++)
	{
		if (nr % i == 0) return false;
	}
	return true;
}
/*
function run(k)
{
	var count = 0,nr = 2;
	while (count < k)
	{
		if (prime(nr) == true) count++;
	console.log(nr);
}*/


const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,output: process.stdout
})

rl.question('How many primes? ',function(k){
	var count = 0,nr = 2;
	while (count < k)
	{
		if (prime(nr) == true) 
			{
				count++;
			}
		nr++;
	}
	--nr;
	console.log(nr);
	rl.close();
});