a = 1
b = 2
sum = 0
while b < 3_999_999
  sum += b if b.even?
  b = a + b
  a = b - a
end
print sum
