function largest_pali()
{
	var max = 0;
	for (var i = 999; i >= 1; --i)
	{
		for (var j = 999; j >= 1; --j)
		{
			if ((palindrom(i * j) == true) && (i * j > max))
				max = i * j;
		}
	}
	return max;
}

function palindrom(nr)
{
	var mirror = 0, cp = 0;
	cp = nr;
	while (cp > 0)
	{
		mirror = mirror * 10 + cp % 10;
		cp = Math.floor(cp / 10);
	}
	if (mirror == nr)
		return true
	else
		return false;
}

console.log(largest_pali());
//console.log(palindrom(9009));