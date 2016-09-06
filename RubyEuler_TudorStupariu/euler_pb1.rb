s = 0
for i in 1..999
  s += i if (i % 5).zero? || (i % 3).zero?
end

print s, "\n"
