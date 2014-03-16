$(function(){
	var top = $('#logotype').offset().top; //y座標の初期値を取得
	$(window).scroll(function(){
		var value = $(this).scrollTop();
		$('#logotype').css('top', -65 - value / 5);
		$('#logotype').css('opacity', 1 - value / 200);
		if ($(this).scrollTop() > 100) {
			$("#logo").css('height', 40);
		} else if ($(this).scrollTop() < 100) {
			$("#logo").css('height', 128);
		}
	});
});