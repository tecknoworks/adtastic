function nFactors(nr) 
{
	var count = 0;
	for(var i=1; i<= nr; i++)
	{
		if(nr % i == 0) count++;
	}
	return count;
}

function run()
{
	var maxdiv = 0;
	var current = 1;
	var toAdd = 2;
	while (nFactors(current) < 500)
	{
		current = current + toAdd;
		toAdd++;
		console.log(toAdd);
	}
	return current;
}

console.log(run());