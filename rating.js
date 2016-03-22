var star = ["", "#star1", "#star2", "#star3", "#star4", "#star5"];
var vote = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=7ac6f772af213186&recipe=scones&rating=";

        $("#star1").hover(function () {
            $("#star1").css("-webkit-filter", "grayscale(0%)");
        }, function () {
            $("#star1").css("-webkit-filter", "grayscale(100%)");
        });
        $("#star2").hover(function () {
            $("#star1").css("-webkit-filter", "grayscale(0%)");
            $("#star2").css("-webkit-filter", "grayscale(0%)");
        }, function () {
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
    });
        $("#star3").hover(function () {
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        }, function () {
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
    });
        $("#star4").hover(function () {
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        $("#star4").css("-webkit-filter", "grayscale(0%)");
        }, function () {
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
        $("#star4").css("-webkit-filter", "grayscale(100%)");
    });
        $("#star5").hover(function () {
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        $("#star4").css("-webkit-filter", "grayscale(0%)");
        $("#star5").css("-webkit-filter", "grayscale(0%)");
        }, function () {
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
        $("#star4").css("-webkit-filter", "grayscale(100%)");
        $("#star5").css("-webkit-filter", "grayscale(100%)");
    });
    
        $('#star1').click(function () {
   votes(1);
});
        $('#star2').click(function () {
   votes(2);
});
        $('#star3').click(function () {
   votes(3);
});
        $('#star4').click(function () {
   votes(4);
});
        $('#star5').click(function () {
   votes(5);                    

});

function votes(i){
    
   $(document).ajaxStart(function() {
        $("#loading").css("display","block");
    })
        
    $.ajax({
        method: "GET",
        url:  vote+""+i,
        success: function(data) {
            $.ajax({
                method: "GET",
                url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=7ac6f772af213186&recipe=scones",
                success: function(data) {
                    while(i>=0){
                        $(star[i]).css("-webkit-filter", "grayscale(0%)")
                        i--;
                    }
                    $('#votes').text(data.votes+" röst/er");
                    $('#rating').text(data.rating.toFixed(2)+" i snitt betyg");
                    $('#loading').css("display", "none");
                    $(".star").unbind('mouseenter mouseleave');
                    $(".star").unbind('click').click(function(){})
                }, 
            });       
        }, 
    });
};

$(document).ready ( function(){
    $(document).ajaxStart(function() {
        $("#loading").css("display","block");
    })
    
    $.ajax({
        method: "GET",
        url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=7ac6f772af213186&recipe=scones",
        success: function(data) {
            $('#votes').text(data.votes+" röst/er");  
            $('#rating').text(data.rating.toFixed(2)+" i snitt betyg");
            $('#loading').css("display", "none");

        },     
    });
});
