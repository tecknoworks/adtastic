#!/usr/bin/env ruby
i = 1
k = 0
while true do
	c = 1
	while c <= 20 do
		if i % c != 0
			k = 0
			break
		else
			k = 1
		c = c + 1
		end
	end
	if k == 1
		puts "The number is #{i}"
		break
	end
	i = i + 1
end