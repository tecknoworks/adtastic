#!/usr/bin/env ruby
s = 0
for i in 1..999
  s += i if (i % 3).zero? || (i % 5).zero?
end
puts " The sum is #{s}"
