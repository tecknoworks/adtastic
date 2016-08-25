function cmmdc(a,b)
{
	if (b > a)
	{
		var aux = a;
		a = b;
		b = aux;
	}

	if (b == 0) return 0;

	while (a != b)
	{
		if (a > b)
			a = a - b
		else
			b = b - a;
	}

	return a;
}

function cmmmc(a,b)
{
	return Math.floor((a * b) / cmmdc(a,b));
}

function run()
{
	var all = 1;
	for (var i = 1; i <= 20; i++)
	{
		all = cmmmc(all,i);
	}
	console.log(all);
}

run();