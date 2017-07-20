import random

# list of first and last names
x = ["Xanthe", "Amilia", "April", "Bryley", "Jade","Francesca", "Arianna", "Faith"]
y = ["Thomas", "Zimcka", "Lee", "Williams", "Levitin","Whitecross", "Garcia", "Duggan"]

# list of names already used
z = []
w = []


for index in range(len(x)):
	# Get a random index fpr first and last names, save them
	random_first = random.randint(0,(len(x)- 1))

	random_last = random.randint(0, (len(y)- 1))

	random_num1 = x[random_first]
	random_num2 = y[random_last]

	# If random first name is used, pick another
	while random_num1 in z:
		random_first = (random.randint(0, len(x)- 1))
		random_num1 = x[random_first]

	# If random last name is used, pick another
	while random_num2 in w:
		random_last= (random.randint(0, len(y)- 1))
		random_num2 = y[random_last]

	# Add the named used to limit their list
	z.append(random_num1)
	w.append(random_num2)
	# Print the name
	print(str(random_num1) + " " + str(random_num2))
 
 

'''
group = " ".join(random.choice(x)+" "+random.choice(y) for _ in range(7))
print(group)


for x in range(len(names)*2):
	print(names[x])

'''






