#!/usr/bin/env ruby
a = 1
b = 1
c = 0
i = 0
s = 0

while  c < 4000000  do
	c = a + b
	a = b
	b = c
	if c % 2 == 0
		s = c
	end
	
end
puts "The sum of the even numbers is #{s}"