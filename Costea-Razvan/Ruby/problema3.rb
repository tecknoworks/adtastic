#!/usr/bin/env ruby

n = 600_851_475_143
i = 2
while i <= n
  if (n % i).zero?
    n /= i
  else
    i += 1
  end
end
puts "The Largest prime nr #{i}"
