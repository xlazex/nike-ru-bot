document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.getSelected(null, function(tab) {
        d = document;
        d.getElementById('currentTab').innerHTML = tab.title;
        var chSize = $(d).find("input#sizeInput").last().val();
        var chAmount = $(d).find("input#amountInput").last().val();
        $('input#sizeInput').on('blur change',function(){
          chSize = $(this).val();
          console.log('Chosen Size: '+chSize);
        });
        $('input#amountInput').on('blur change',function(){
          chAmount = $(this).val();
          console.log('Chosen Amount: '+chAmount);
        });
        $('#run').click(function(){
          chrome.tabs.executeScript({
            code: '\
            $(document.body).append("<a href=\\"javascript:\\" id=\\"nikeAddToCartBt\\" style=\\"display:none\\" onclick=\\"nikeAddToCart(\'(US '+chSize+')\', '+chAmount+')\\" data-size=\\"'+chSize+'\\" data-amount=\\"'+chAmount+'\\">ADDTOCART</a>");\
            document.getElementById(\"nikeAddToCartBt\").click();\
            '
          });
        });
    });
}, false);
