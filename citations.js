require(['custom/bibtex-parser/parse-bibtex']);
require(['custom/markdown-citations/custom_bibliography']);

function searchCite(){
	json = doParse(bibliography)
	var citations = document.getElementsByTagName("cite")
	for(var i = 0; i < citations.length; i++){
			citRef = citations[i].innerHTML.toUpperCase();
			citation=citations[i];
			a=document.createElement('a');
			citation.parentNode.replaceChild(a, citation);
			a.innerHTML = json[citRef].AUTHOR.split(',')[0] + " et. al., " + json[citRef].YEAR;
			a.setAttribute('href', "http://dx.doi.org/" + json[citRef].DOI);
			a.setAttribute('title', 
				json[citRef].TITLE.replace('{','"').replace('}','"') + ', ' 
				+ json[citRef].JOURNAL + ', vol. ' 
				+ json[citRef].VOLUME + ', pg. ' 
				+ json[citRef].PAGES + ', ' 
				+ json[citRef].MONTH.charAt(0).toUpperCase()	//Capitalize first letter
				+ json[citRef].MONTH.slice(1) + '. ' 			//Add remainder of string
				+ json[citRef].YEAR);
	};
}

setTimeout(function(){searchCite();},100);
setInterval(function(){searchCite();},2000);
