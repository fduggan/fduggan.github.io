class Person 
{
	constructor (first_name, last_name, address) 
	{
		this.first_name= first_name;
		this.last_name= last_name;
		this.address= address;
	}
	FullName ()
	{
		document.getElementById("myName").innerHTML= this.first_name + this.last_name;
	}
	Living ()
	{
		document.getElementById("myAddress").innerHTML= this.address
	}

	// person.first_name = Faith
	// person.last_name = Duggan
	// person.address = New York
}

var Faith = new person("Faith", "Duggan", "New York");
Faith.FullName();
