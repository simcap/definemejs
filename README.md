defineme.js (inspired by [hijs](https://github.com/cloudhead/hijs)) is a simple script to add word definitions from external service to your text content.

Usage
-----

Imagine you have a text on Einstein & physics and you want to add relevant links to wikipedia on a few words. To do that add at the end of your html body the configuration and the embedded script like so:

    <script>
	    window.defineme = {selector: 'p', url: 'http://en.wikipedia.org/wiki/%s', words: 'einstein physics cosmology'}
    </script>

and straight after 

    <script src="defineme.js"></script>

Configuration
-------------
The _defineme_ global object contains three parameters for configuration.

* *selector*: name of the HTML tag(s) element(s) where the content will be parsed
* *url*: existing url for dictionnary or encyclopedical service. The token *_%s_* is will be replaced by the word for its definition
* *words*: space separated list of words that will be linked to external service

Exemples of url for external services for word definitions are:

* http://en.wikipedia.org/wiki/%s
* http://www.cnrtl.fr/definition/%s
* http://www.cnrtl.fr/synonymie/%s
* ...
