document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.getSelected(null, function(tab) {
        d = document;
        d.getElementById('currentTab').innerHTML = tab.title;
        var chSize = $(d).find("#sizeInput").val();
        var chAmount = $(d).find("#amountInput").val();
        $('#run').click(function(){
          chrome.tabs.executeScript({
            code: '\
            $(document.body).append("<a href=\\"javascript:\\" id=\\"nikeAddToCartBt\\" style=\\"display:none\\" onclick=\\"nikeAddToCart(\'(US '+chSize+')\', '+chAmount+')\\">ADDTOCART</a>");\
            document.getElementById(\"nikeAddToCartBt\").click();\
            '
          });
        });
    });
}, false);
