	
function createDropdown()
{
	// configurable values:
	var defaultTitle = "mrtk_development"; 	// title in the dropdown for the root version of the docs
	var versionArray = ["v1.0", "v2.0"];	// list of all versions in the version folder
	
	//--------------------------------------

	var versionDropDiv = document.getElementById('versionDropdown');
	var btn = document.createElement('button');
	btn.className = "dropbtn";
	var btnText = document.createTextNode("Version");
	btn.appendChild(btnText);
	var innerDiv = document.createElement('div');
	innerDiv.className = "version-dropdown-content";
	versionDropDiv.appendChild(btn);
	versionDropDiv.appendChild(innerDiv);

	// create default
	createEntry(innerDiv, defaultTitle, "/README.html");
	
	// create version entries
	for (i = 0; i<versionArray.length; i++) 
	{ 
		createEntry(innerDiv, versionArray[i], "/version/"+versionArray[i]+"/README.html");
	}
}



function createEntry(attachTo, name, url)
{
	var a = document.createElement('a');
	var linkText = document.createTextNode(name);
	a.appendChild(linkText);
	a.href = url;
	a.title = name;
	attachTo.appendChild(a);
}

createDropdown();