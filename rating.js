var star = ["", "#star1", "#star2", "#star3", "#star4", "#star5"];
var vote = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=scones&rating=";

$('.rating a').click(function(){
    var star = $(this);
    star.closest('ul').find('.checked').removeClass('checked');
    star.addClass('checked');

});
