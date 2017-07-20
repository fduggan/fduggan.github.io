user_input=""
print("Welcome to the mall of your dreams. You are in a big mall for a fun day of shopping. Just remember you are on a budget of $115.As soon as you walk into your favorite store you find a dress you will look hot in. This smoken' dress is only $50. Do you want it? Say Yes to the dress! ")

while user_input!="yes" and user_input !="no":
	user_input=input("Type 'yes' to to get the dress or 'no' for no dress")
money = 115



if user_input == "yes":
	print ("You are going to get dates with that dress on.")
	money = money - 50
	print("You leave the store and slide in to Macy's. Right away this gorgeous MK purse and you are like OMG.Luckily the price is right, $40 for a purse that matches that cute dress.")
	while user_input!="score" and user_input !="no":
		user_input=input("Type 'score' to get the purse or 'no' for no purse ")
	if user_input == "score":
		money = money - 40
		print("Girl, it is just your day! You have scored a hot dress, goddamn beautiful purse and now you have spotted a perfect pair of shoes and it is just getting cheaper.Want a matching outfit? $30 for the shoes.")
		while user_input!= "boom" and user_input !="no":
			user_input=input("Type 'boom' to get the shoes or 'no' for no shoes ")
		if user_input == "boom":
			money = money -30
			print("All this shopping is making me hungry and I am just a code. Do you want some food? ")
			user_input=input("Type 'bam' to get some food or 'no' for not hungry ")
			if user_input=="bam":
				money = money -15
				print("Thanks for getting food with me. But you haven't been paying attention to your money. You have spent $20 that you don't have. Game over! ")
			elif user_input == no:
				print("Aw, I am going to go eat,")
		elif user_input =="no":
			print("Oh well, I hope you have had some fun shopping with me")
	elif user_input =="no":
		print("That sucks, you will find something soon.") # Finish this if else


	money = money - 30
elif user_input == "no":
	print("That sucks, you will find something soon.") # finished the story writing what happens
