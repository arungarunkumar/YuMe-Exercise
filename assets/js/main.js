

$(document).ready(function()
{
  $('.toggle').click(function(e) {
      e.preventDefault();
      //console.log($('.reportWrapper').not('#' + $(this).data('ele')));
      $('.reportWrapper').not('#' + $(this).data('ele')).hide();

      $('#' + $(this).data('ele')).slideToggle(100);
  });

});
