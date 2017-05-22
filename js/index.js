$('.right li a').click(function(){
  //改变右侧文字链接点击后效果
  $('.right li a').removeAttr('style');
  $(this).attr('style','border-left: #25a7f6 solid 2px; font-weight:bold; color:#25a7f6');

  if($(this).attr('href')!=='#2'){ //判断二级菜单
  	 $('.right li ul').attr('style','display:none');
  };

  $(this).parent().find('.nav').attr('style','display:block');

  //加载时
  $('.docs-section').html('<div class="box" style="border:none;"><img src="js/skin/default/loading-2.gif" /></div>');

  //加载html
  var html = $(this).attr('data-src');
  $('.docs-section').load(html);

});
