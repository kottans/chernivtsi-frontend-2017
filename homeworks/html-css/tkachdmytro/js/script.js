var lang = "ru";
(function($){
    'use strict';

    $(document).ready(function(){
    	var jBody = $('body');
		
		jBody.on('click', '.bt-google-js', function(){
			var redirect = 'https://www.google.com.ua/search?q=' + $('.search-input-js').val();
    		window.location.href = redirect;
		});

		jBody.on('click', '.bt-luck-js', function(){
			if($('.search-input-js').val() == ""){
				var redirect = 'https://www.google.com/doodles';
    			window.location.href = redirect;
			}else{
				var redirect = 'https://www.youtube.com/results?search_query=' + $('.search-input-js').val();
    			window.location.href = redirect;
			}
		});

		jBody.on('click', '.lang-js', function(){
			if(lang == "ru"){
				lang = "ua";
				$('.mail-js').text("Gmail");
				$('.photos-js').text("Зображення");
				$('.bt-google-js').val("Пошук Google");
				$('.bt-luck-js').val("Мені пощастить");
				$('.lang-text-js').html("Мова Google: <span class='lang-js'>русский</span>");
			}else{
				lang = "ru";
				$('.mail-js').text("Почта");
				$('.photos-js').text("Картинки");
				$('.bt-google-js').val("Поиск в Google");
				$('.bt-luck-js').val("Мне повезёт!");
				$('.lang-text-js').html("Сервисы Google доступны на разных языках: <span class='lang-js'>українська</span>");

			} 
		});
    })
})(jQuery);