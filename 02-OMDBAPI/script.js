$(document).ready(function(){
    $('form').submit(function(event){
        event.preventDefault();
        var inp_val = $('input[type="text"]').val();

        var film_url = `http://www.omdbapi.com/?t=${inp_val}&apikey=35b13908`;

        $.ajax({
            url:film_url,
            success:function(object){
                var poster = object.Poster;
                $(".image img").attr('src',poster);

                for(let i in object){
                    
                }
            }
        })
    })
})