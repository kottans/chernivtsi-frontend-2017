function SearchInGoogle(search_data){
    var redirect = 'https://www.google.com.ua/search?q=' + search_data;
    window.location.href = redirect;
}

$('documet').ready(function(){
    $('#search-input').keyup(function(evt){
        var query = $(evt.currentTarget).val();
        if (evt.keyCode == 13) {SearchInGoogle(query)};
    });

    $('.search-js').click(function(evt){
        var query = $('#search-input').val();
        SearchInGoogle(query);
    })
});

