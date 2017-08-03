class BlogEntry {
constructor(name, blogtext) 
	{
		this.name= name;
		this.blogtext= blogtext;
	}
}

function addEntryToBlog() {
 //Create new blog entry

  var authorName =document.getElementById("blogEntryName").value;
  var blogtext = document.getElementById("blogEntryText").value;
  var blogEntry = new BlogEntry(authorName, blogtext)


  //Add the new entry, name and date to the blog
  createBlogEntryElement(blogEntry);
 // createFooterElement(blogEntry);

  //Clear the inputs
 // document.getElementById("the id").innerText
}

function createBlogEntryElement(blogEntry) {
	//create a new element and add the blog text to it
	var blogEntry = blogEntry.blogtext;
	var div = document.createElement("blogDetails");
	blogEntryDiv.classNAme = "blogEntry"
	blogEntryDiv.innerText = blogEntry.blogtext

	var blogDetails= document.getElementById("blogDetails");
	blogDetails.appendChild(blogEntryDiv)
	//document.createElement
	//create a div with eht class "blogdate"and add your name to it
	//create a div w a class

	function myFunction() {
	    var blogDetails = document.createElement("blogDetails");
	    var textnode = document.createTextNode("div");
	    node.appendChild(textnode);
	    document.appendChild(Faith);
	//appendChild
	}
}

//function createFooterElement(blogEntry) {
	//document.createElement
		//create a div with eht class "blogdate"and add your name to it
	//appendChild
//}