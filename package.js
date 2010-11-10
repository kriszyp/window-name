/* This exists to demonstrate a "built" package that is x-domain accessible, 
normally a package.js wouldn't be required in the source of a package */

require.registerPackage({
	"name": "window-name",
	"author": "Kris Zyp",
	"email": "kris@sitepen.com",
	"license":["AFL", "BSD"],
	"cla": "Dojo Foundation",
	"mappings": {
		"dojo/io": "http://packages.dojotoolkit.org/xhr-plugins.zip",
		"dojox/secure": "http://packages.dojotoolkit.org/secure.zip"
	}
});

/* A built package.js could also (optionally) include any modules that are 
likely to be needed by the user so that can be provided a single request and 
don't have to be fetched later.
Note that this is not an purely anonymous module defintion, but the module id
should be interpreted relative to the root of the package when a package
is registered in Dojo */

define("window-name", [], ["dojo"], function(dojo){
//... contents of window-name module ...
});