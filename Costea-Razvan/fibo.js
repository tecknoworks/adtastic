var a=1;
var b=1;
var c=0;
var i;
var s;
while(c<4000000)
{
	c=a+b;
	a=b;
	b=c;
	if(c%2==0)
		s=c;
}
console.log(s);
