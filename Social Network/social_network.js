/*
INSTRUCTIONS:

1. Create a list of 5 names of girls
2. Store 3 friends for each of these 5 girls
3. When the user enters the name of a girl from the list,
   and clicks "Get Friends" display friends of that girl
*/

/*ENTER CODE HERE*/
FaithFriends = ["Celia", " Nathalie", " Netta", " Elle"];
XantheFriends = ["Morgan", " Amanda", " Mia", " Jordan" ];
AmiliaFriends = ["Francesca", " Emma", " Maya", " Ryan"];
JadeFriends = ["Ruby", "Sofia", " Yasmin"," Olivia"];
BryleyFriends = ["April", " Gaby", " Blythe", " Piper"];

var socialNetwork = 
	{
		"Faith": FaithFriends,
		"Xanthe": XantheFriends,
		"Amilia": AmiliaFriends,
		"Jade":JadeFriends,
		"Bryley":BryleyFriends
	}

function getFriends() {
	var name = document.getElementById("nameInput").value;
	document.getElementById("friends").innerHTML = socialNetwork[name];
}

/*EXTENSION*/

function addFriend() {
  var girl = document.getElementById("nameOfGirl").value;
  var goldenRing = document.getElementById("nameOfFriend").value;
  socialNetwork[girl].push(goldenRing);
  console.log(socialNetwork[girl]);

}