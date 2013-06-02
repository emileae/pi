$(document).ready(function(){
    var record = localStorage.record_pos;
    
    if (record){
        $('body').on('touchend mouseup', '#record', function(){
            show_record_form(record);
        });
    };
    
    $('body').on('touchend mouseup', '#record_submit_overlay', function(){
        
        $('#record_submit_overlay').remove();
        $('#record_submit_form_container').remove();
    });
    
    $('body').on('submit', '#pi_score_form', function(){
        var name = $('#pi_name').val();
         var score = $('#pi_score').val();
        $.ajax({
            type: 'POST',
            data: {name:name, score:score},
            url: 'http://emile-pi.appspot.com/submit_record',
            success: function(data){
                console.log(data);
                alert('Your record was successfully added');
            },
            error: function(data){
                console.log(data);
                alert('There was an error adding your record');
            }
        });
        return false;
    });
    
    
});

function show_record_form(record){
    alert('yoyo');
    $('body').append('\
        <div id="record_submit_overlay">\
        </div>\
        \
        <div id="record_submit_form_container">\
            <div>Your Score is : '+record+'</div>\
            \
            <br>\
            \
            <form action="emile-pi.appspot.com/submit_record" method="post" id="pi_score_form">\
                \
                <label for="name">\
                    <b>Please enter your name</b>\
                    <input type="text" id="pi_name" name="name">\
                </label>\
                    <input type="hidden" id="pi_score" name="score" value="'+record+'">\
                \
                <br>\
                \
                <input class="submit_btn" type="submit" value="submit">\
                \
            </form>\
        </div>\
        \
    ')
};