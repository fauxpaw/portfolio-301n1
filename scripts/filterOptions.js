var filterView = {};


filterView.navTabs = function() {
  $('.top-nav').on('click', '.tab', function(event) {
    event.preventDefault();
    $('.tab-content').hide();
    $('#' + $(this).html()).fadeIn(1000);
  });
};

$(document).ready(function(){
  filterView.navTabs();
});
