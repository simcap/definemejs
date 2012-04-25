(function(defineme) {
	
	var config = defineme || {selector: 'p', url: 'http://www.cnrtl.fr/definition/%s', words: ''}
	
	var selector = config.selector;
	var referenceUrl = config.url;
	var definitions = config.words.split(' ');
	
	var nodes = document.getElementsByTagName(selector);
	
	for(var i = 0; i < nodes.length; i++){
		innerText = nodes.item(i).innerHTML;

		definitions.forEach(function(definition){
			definitionUrl = referenceUrl.replace("%s", definition)
			innerText = innerText.replace(new RegExp("(" + definition + ")", "ig"), 
				function(match) {return '<a href="'+ definitionUrl + '"  target="_blank" >' + match + '</a>'});
		});				

		nodes.item(i).innerHTML = innerText;
	}
})(window.defineme);