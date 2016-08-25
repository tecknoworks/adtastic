s = 0
for i in 1..999
	if i % 5 == 0 or i % 3 == 0
		s = s + i;
	end
end

print s,"\n"