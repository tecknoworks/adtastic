a = 1
b = 2
sum = 0
while b < 3999999
	if b % 2 == 0
		sum = sum + b
	end
	b = a + b
	a = b - a
end
print sum