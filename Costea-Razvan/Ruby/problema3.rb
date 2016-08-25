#!/usr/bin/env ruby

n = 600851475143
i = 2
while i <= n do
	if n % i == 0
		n /= i
	else
		i = i + 1
	end
end
puts "The Largest prime nr #{i}"