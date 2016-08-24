def palindrome(n)
	mirror = 0
	cp = n
	while n != 0
		mirror = mirror * 10 + n % 10
		n = n / 10
	end
	if mirror == cp 
		return true
	else
		return false
	end
end

def run
	max = 0
	999.downto(1) do |i|
		999.downto(1) do |j|
			if palindrome(i * j) == true and i * j > max
				max = i * j
			end
		end	
	end
	print max
end

run()