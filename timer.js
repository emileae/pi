start_time = ""//setting start time as a global variable

$(document).ready(function(){
    
    var is_timed = false;
    var go_for_record = false;
    var key_pushed = false
    var record_error = false;
    
    //also need to deal with the case where record attempt is pushed twice, clearing the digits
    
    $('#record_attempt').on('touchend mouseup', function(){
        go_for_record = true;
    });
    
    $('#practice').on('touchend mouseup', function(){
        go_for_record = false;
    });
    
    $('#key_clear').on('touchend mouseup', function(){
        go_for_record = false;
    });
    
    $('.num').on('touchend mouseup', function(){
        if (go_for_record && !key_pushed){
            key_pushed = true;
            start_time = new Date();
            console.log(start_time);
        };
    });
    
});

// external function for stopping the timer

function stop_timer(start_time, record_error, current_pos){
    if (record_error){
        var stop_time = new Date();
        var time_diff = Math.round((stop_time - start_time)/1000);
        start_time = "";//reset start time
        if (current_pos >= localStorage.record_pos){
            localStorage.time = time_diff//in seconds
        }else if(localStorage.time && current_pos == localStorage.record_pos){
            if (time_diff < localStorage.time){
                localStorage.time = time_diff;
            };
        };
    };
};


