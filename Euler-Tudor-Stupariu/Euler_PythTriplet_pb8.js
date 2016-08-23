function isPyth(a,b,c)
{
	if (a > c)
	{
		aux = a;
		a = c;
		c = aux;
	}
	else if(b > c)
	{
		aux = b;
		b = c;
		c = aux;
	}

	if (Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2)) return true;
	return false;
}

function run()
{
	for (var i = 1; i<999; i++)
	{
		for (var j = 1; j<999; j++)
		{
			k = 1000 - i - j;
			if (k > 0 && i+j+k == 1000 && isPyth(i,j,k) == true)
			{
				//console.log(i,j,k);
				return i*j*k;
			}
		}
	}
}

console.log(run());