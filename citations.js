require(['custom/bibtex-parser/parse-bibtex']);
require(['custom/jupyter_markdown_citations/custom_bibliography']);

appName = 'jupyter_markdown_citations'

function parseBib(){
	json = doParse(bibliography);
	console.log(appName + ': ', 'bibliography json-ified');
	return json
}

function searchCite(){
	var citations = document.getElementsByTagName("cite")
	//If seachCite() called before parseBib(), do parseBib()	
	if (json == null){
		parseBib()
	} 
	for(var i = 0; i < citations.length; i++){
		citRef = citations[i].innerHTML.toUpperCase();
		citation=citations[i];
		a=document.createElement('a');
		citation.parentNode.replaceChild(a, citation);
		a.innerHTML = json[citRef].AUTHOR.replace('{','').replace('}','').split(',')[0] + " et. al., " + json[citRef].YEAR;
		a.setAttribute('href', "http://dx.doi.org/" + json[citRef].DOI);
		a.setAttribute('title', 
			json[citRef].TITLE.replace('{','"').replace('}','"') + ', ' 
			+ json[citRef].JOURNAL + ', vol. ' 
			+ json[citRef].VOLUME + ', pg. ' 
			+ json[citRef].PAGES + ', ' 
			+ json[citRef].MONTH.charAt(0).toUpperCase()	//Capitalize first letter
			+ json[citRef].MONTH.slice(1) + '. ' 			//Add remainder of string
			+ json[citRef].YEAR);
		console.log(appName + ': ', citRef + ' referenced');
	};
}

setTimeout(function(){parseBib();},5000); //First json will be undefined unless this has a long timeout (bib files are big)
setTimeout(function(){searchCite();},5500); 
setInterval(function(){searchCite();},2000);
