$('.right li a').click(function(){
  //改变右侧文字链接点击后效果
  $('.right li a').removeAttr('style');
  $(this).attr('style','border-left: #25a7f6 solid 2px; font-weight:bold; color:#25a7f6');
  $('.right li ul').attr('style','display:block');

  //加载html
  var html = $(this).attr('data-src');
  $('.docs-section').load(html);

  //alert($(this).attr('data-src'));
  
});
