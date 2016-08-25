def prime(n)
	for i in 2..Math.sqrt(n)
		if n % i == 0
			return false
		end
	end
	return true
end

def LargestPrime(n)
	n.downto(1) do |i|
		if n % i == 0 and prime(i) == true
			print i,"\n"
			break
		end
	end 
end

LargestPrime(2233)