var start_time = ""//setting start time as a global variable
var go_for_record = false;//not initially going for a record
var key_pushed = false;//no num keys are pushed initially
var last_time = "";

$(document).ready(function(){
    
    var is_timed = false;
    var record_error = false;

    $('#record_attempt').on('touchend', function(){
        go_for_record = true;
    });
    
    $('#practice').on('touchend', function(){
        go_for_record = false;
        stop_timer(false, false, false);
    });
    
    $('#key_clear').on('touchend', function(){
        stop_timer(false, false, false);
    });
    
    $('#record').on('touchend', function(){
        stop_timer(false, false, false);
    });
    
    $('.num').on('touchend', function(){
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
        key_pushed = false;//reset start key press
        if (current_pos >= localStorage.record_pos){
            localStorage.time = time_diff;//in seconds
            last_time = time_diff;
            //$('#checker').text('Best: '+localStorage.record_pos+'decimals in '+time_diff+'seconds');
        }else if(localStorage.time && current_pos == localStorage.record_pos){
            if (time_diff < localStorage.time){
                localStorage.time = time_diff;
            };
        };
    }else{
        start_time = "";//reset start time
        key_pushed = false;
    };
};


