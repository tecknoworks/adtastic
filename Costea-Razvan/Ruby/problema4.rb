#!/usr/bin/env ruby
i = 1
k = 0
loop do
  c = 1
  while c <= 20
    if (i % c).nonzero?
      k = 0
      break
    else
      k = 1
      c += 1
    end
  end
  if k == 1
    puts "The number is #{i}"
    break
  end
  i += 1
end
