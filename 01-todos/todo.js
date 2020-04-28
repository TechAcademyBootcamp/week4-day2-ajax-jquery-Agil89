
let counter = 0;
$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();
        if ($('input[type="text"]').val() != '') {
            counter++;
            event.preventDefault();
            let input_val = $('input[type="text"]').val();
            $('input[type="text"]').val("");
            let div_inputs = $('<div>');
            let div_parent_input = $('<div>');
            $('.form').append(div_parent_input);
            div_parent_input.append(div_inputs);
            div_inputs.addClass('div_inputs');
            let check_box = $('<input>');
            check_box.attr('type', 'checkbox');
            check_box.addClass('myCheckbox');
            div_inputs.append(check_box);
            //     if($('.myCheckbox').is('checked',false)){
            //         $('.add_complete').text("Clear completed");

            //  }else{
            //     $('.add_complete').text();
            //  };
            $(".myCheckbox").click(function (e) {

                if ($(this).prop('checked')) {
                    $('.add_complete').text("Clear completed");
                    
                }
                else if( $('.myCheckbox:checked').length===0){
                    $('.add_complete').text('');
                    
                }
               
            });
           
            let input_text = $('<p>');
            input_text.addClass('input_text');
            input_text.text(input_val);
            div_inputs.append(input_text);
            let x_button = $('<span>');
            x_button.addClass('close');
            x_button.html('&times;');
            div_inputs.append(x_button);
            x_button.click(function () {
                $(this).parent().remove();
                counter--;
                $('.span_count').text(counter);
                if (counter == 0) {
                    let parents_for_remove = $('.span_count').parent();
                    parents_for_remove.parent().remove();
                    
                }
            })
            if (counter == 1) {
                let footer_div = $('<div>');
                footer_div.addClass('footer_div');
                $('.container').append(footer_div);
                let footer_left_side = $('<span>');
                footer_left_side.addClass('col-4');
                footer_left_side.addClass('footer_left_side');
                let footer_center_side = $('<span>');
                footer_center_side.addClass('col-4');
                footer_center_side.addClass('footer_center_side');
                let footer_right_side = $('<span>');
                footer_right_side.addClass('col-4');

                footer_div.append(footer_left_side);
                footer_div.append(footer_center_side);
                footer_div.append(footer_right_side);

                let footer_left_first = $('<span class="span_count">');
                footer_left_first.addClass('col-4');
                let footer_left_second = $('<span>');
                footer_left_second.addClass('col-4');
                let footer_left_third = $('<span>');
                footer_left_third.addClass('col-4');

                footer_left_side.append(footer_left_first);
                footer_left_side.append(footer_left_second);
                footer_left_side.append(footer_left_third);
                footer_left_first.text(counter);
                footer_left_second.text('items');
                footer_left_third.text('left');

                let footer_center_first = $('<span>');
                let footer_center_second = $('<span>');
                let footer_center_third = $('<span>');
                footer_center_first.text("All");
                footer_center_second.text("Active");
                footer_center_third.text("Completed");
                footer_center_side.append(footer_center_first);
                footer_center_side.append(footer_center_second);
                footer_center_side.append(footer_center_third);

                let footer_right_first = $('<span>');
                footer_right_first.addClass('add_complete');
                footer_right_first.text();
                footer_right_side.append(footer_right_first);

                $('.add_complete').click(function(){
                
                    let val_of_selected=parseInt($('.span_count').text())
                    let leng=$('.myCheckbox:checked').length;
                    let total = val_of_selected-leng;
                    // console.log(counter);
                    // console.log($('.myCheckbox:checked').length);
                    
                    $(".myCheckbox:checked").parent().remove();
                    $('.span_count').text(total);
                    if(total === 0){
                        counter = 0;
                        $('.footer_div').remove();
                        $('.form-checkbox').trigger('click');
                    }
                    
                });
            }
            
           
            $('.span_count').text(counter);
        }
    })
    $('.form-checkbox').click(function(){
        if($(this).is(":checked")){
            $('.myCheckbox').trigger('click');
        }else if($('.form-checkbox').is(":checked")==false){
            $('.myCheckbox').trigger('click');
            
            
        }

    })
    
})


