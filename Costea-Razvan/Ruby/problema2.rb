#!/usr/bin/env ruby
a = 1
b = 1
c = 0
s = 0

while c < 4_000_000
  c = a + b
  a = b
  b = c
  s = c if c.even?

end
puts "The sum of the even numbers is #{s}"
