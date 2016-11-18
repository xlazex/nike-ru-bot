$.get(chrome.extension.getURL('script/nikeAddToCart.js'),
	function(data) {
		var script = document.createElement("script");
		script.setAttribute("type", "text/javascript");
		script.innerHTML = data;
		document.getElementsByTagName("head")[0].appendChild(script);
		//document.getElementsByTagName("body")[0].setAttribute("onLoad", "nikeAddToCart(0,0);");
	}
);
