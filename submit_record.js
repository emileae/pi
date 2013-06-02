$(document).ready(function(){
    
        $('body').on('touchend', '#record', function(){
            
            $('body').append('\
                <div id="record_submit_overlay">\
                    <div id="overlay_close">Close</div>\
                </div>\
                \
                <div id="record_submit_form_container">\
                    <div>Your Score is : '+localStorage.record_pos+'</div>\
                    \
                    <br>\
                    \
                    <form action="emile-pi.appspot.com/submit_record" method="post" id="pi_score_form">\
                        \
                        <label for="name">\
                            <b>Please enter your name</b>\
                            <input type="text" id="pi_name" name="name">\
                        </label>\
                            <input type="hidden" id="pi_score" name="score" value="'+localStorage.record_pos+'">\
                        \
                        <br>\
                        \
                        <input class="submit_btn" type="submit" value="submit">\
                        \
                    </form>\
                </div>\
                \
            ')
        });
        
    $('body').on('touchend', '#overlay_close', close_submit_overlay);
    
    function close_submit_overlay(){
        $('#record_submit_overlay').remove();
        $('#record_submit_form_container').remove();
    };
    
    $('body').on('submit', '#pi_score_form', function(){
        var name = $('#pi_name').val();
         var score = $('#pi_score').val();
        $.ajax({
            type: 'POST',
            data: {name:name, score:score},
            url: 'http://emile-pi.appspot.com/submit_record',
            success: function(data){
                console.log(data);
                alert('Your record was successfully submitted');
                close_submit_overlay();
            },
            error: function(data){
                console.log(data);
                alert('There was an error adding your record, please try again later');
                close_submit_overlay();
            }
        });
        return false;
    });
    
    
});
