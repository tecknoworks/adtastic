function run()
{
	var sb = 0,ss = 0;
	for (var i = 1; i <= 100; i++)
	{
		sb = sb + i;
		ss = ss + Math.pow(i,2);
	}
	sb = Math.pow(sb,2);
	return sb-ss;
}

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,output: process.stdout
})

console.log(run());