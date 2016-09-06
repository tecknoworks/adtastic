def prime(n)
  for i in 2..Math.sqrt(n)
    return false if (n % i).zero?
  end
  true
end

def largest_prime(n)
  n.downto(1) do |i|
    if (n % i).zero? && prime(i) == true
      print i, "\n"
      break
    end
  end
end

LargestPrime(2233)
