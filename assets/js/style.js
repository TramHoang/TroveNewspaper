jQuery('.bg-img').click(function(){
  jQuery('.site-search').addClass('open');
})

jQuery('.site-search').click(function(){
  jQuery('.site-search').removeClass('open');
}).children().click(function(e) {
  return false;
});