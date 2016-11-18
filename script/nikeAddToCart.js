var started = 0;

function nikeAddToCart(size, amount) {
	console.log('nikeAddToCart@//hk1_addToCart()');
	var sizesList=document.getElementsByName("skuAndSize")[0];
	function nikeSetQuantity() {
		document.getElementsByName("qty")[0].value = amount;
	}
	function nikeSetSizeValue() {
		for (var i=0; i<sizesList.length; i++){
			if(sizesList.options[i].getAttribute("data-label") == size) {
				var sizeVal = sizesList.options[i].value;
				document.getElementsByName("skuAndSize")[0].value = sizeVal;
				nikeSetQuantity();
			}
		}
	}
	if(sizesList != undefined) {
	    nikeSetSizeValue();
	    document.getElementById("buyingtools-add-to-cart-button").click();
	} else {
			setTimeout(function(){$(document).find("#nikeAddToCartBt").click()}, 50);
			startLogoBlinkInterval(started);
			started = 1;
	}
}

function animateLogo(){
	$( ".nsg-glyph--swoosh.gnav-bar--home-logo" ).animate({
	  opacity: 0.1,
	}, 1000, function() {
		$(this).animate({
			opacity: 1,
		}, 1500);
	});
}

function startLogoBlinkInterval(started){
	if(!started){
		intervalLogoAnimate = setInterval(function () {
			animateLogo();
			console.log('nikeAddToCart@//hk2_animateLogo()');
		}, 2500);
	}
}
