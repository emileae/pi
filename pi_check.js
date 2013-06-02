
//Set position in pi
var current_pos = 1;//12999
var pos_in_list = ((current_pos-1) % 500);

var pi = ""
var initial = false;

var pi_1000 = '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989';

var pi_study = pi_1000;

$(document).ready(function(){
    
    //var pre_load = pi_110000.slice(12500, 13001);
    var pre_load = pi_1000;
    pi = pre_load;
    
    //Hide Loading div
    $('#loading_div').hide()
    
    //setting the #result_footer height to prevent crazy bouncing for first few digits
    $('#result_footer').css('height', '2em');
    
    //Select Mode
    var challenge = false;
    $('#practice').css('background-color', '#3B0202');
    $('#practice').html('<u>Just Practice</u>');
    var practice = true;
    
    //Set submit record button initially
    
    if (localStorage.record_pos){
        $('#record').html('Submit Record: '+localStorage.record_pos+'')
    }else{
        $('#record').html('Submit Record: 0')
    };
    
    // Clear Result
    $('#key_clear').on('touchend', clear_result);
    
    function clear_result (){
        $('#results_log').text('3.');
        current_pos = 1;
        pos_in_list = 0;
        $('#current_position').text('Current Position: 0');
        $('#current_position').attr('class', 'background_ease_out');
        $('.num').css('background-color', 'rgba(20,20,20,0.8)');
    };
    
    $('#record_attempt').on('touchend mouseup', function(){
        challenge = true;
        practice = false;
        current_pos = 1;
        pos_in_list = ((current_pos-1) % 500);
        pi = pre_load;
        clear_result();
        set_mode();
    });
    $('#practice').on('touchend mouseup', function(){
        challenge = false;
        practice = true;
        current_pos = 1;
        pos_in_list = ((current_pos-1) % 500);
        pi = pre_load;
        clear_result();
        set_mode();
    });
    
    function set_mode(){
        if (challenge){
            $('#record_attempt').css('background-color', '#3B0202');
            $('#practice').css('background-color', 'rgba(20,20,20,0.8)');
            $('#practice').html('Just Practice');
            $('#record_attempt').html('<u>Record Attempt!</u>');
            $('#study').html('<del>Study</del>');
        }else if (practice){
            $('#practice').css('background-color', '#3B0202');
            $('#record_attempt').css('background-color', 'rgba(20,20,20,0.8)');
            $('#practice').html('<u>Just Practice</u>');
            $('#record_attempt').html('Record Attempt!');
             $('#study').html('Study');
            clear_result();
        };
    };

    
    
    // Study button  for (var i = 0; i < shoes.length; i++) {};
    
    $('#study').on('touchend', function(){if (practice){$('#loading_div').show(); var num = 5; study_notes(num, false)}});
    
    $('body').on('touchend', '#add', function(){
        $('#loading_div').show(); var num_digits = Number($('#num_digits').html()-1000); var num = Number($('#grouping_num').html())+1; print_study_digits(num, num_digits)
    });
    $('body').on('touchend', '#subtract', function(){
        $('#loading_div').show();
        var num_digits = Number($('#num_digits').html()-1000);
        var num = Number($('#grouping_num').html())-1;
        if (num>0){
            num = num
        }else{
            num = 1;
        };
        print_study_digits(num, num_digits)
    });
        
        //changing number of digits to study
    
    $('body').on('touchend', '#pi_add_1000', function(){
        $('#loading_div').show();
        var num_digits = Number($('#num_digits').html());
        var num = Number($('#grouping_num').html());
        print_study_digits(num, num_digits)
    });
    
    $('body').on('touchend', '#pi_1K_set', function(){
        var num_digits = 1; var num = Number($('#grouping_num').html()); print_study_digits(num, num_digits);
    });
    $('body').on('touchend', '#pi_5K_set', function(){
        var num_digits = 4000; var num = Number($('#grouping_num').html()); print_study_digits(num, num_digits);
    });
    $('body').on('touchend', '#pi_10K_set', function(){
        var num_digits = 9000; var num = Number($('#grouping_num').html()); print_study_digits(num, num_digits);
    });
    $('body').on('touchend', '#pi_110K_set', function(){
        var num_digits = 99000; var num = Number($('#grouping_num').html()); print_study_digits(num, num_digits);
    });
    
    function study_notes (num){
        
        $('#loading_div').hide();
        
        $('body').append('<div id="overlay">\
            <div id="overlay_close">Close</div>\
            </div>\
            <div id="study_pi"><div class="scrollable">&#960 = 3.<br/></div></div>\
            <div id="grouping_adjust">\
                <div class="grp_adj_rec">Grouping: <span id="grouping_num">'+num+'</span></div>\
                \
                <div id="grp_adj_container">\
                    <div id="add" class="grp_adj">+</div>\
                    <div id="subtract" class="grp_adj">-</div>\
                </div>\
                \
                <div class="num_digit_rec">No. of Digits: <span id="num_digits">1000</span>\</div>\
                \
                <div id="num_digits_adjust_container">\
                    <div id="pi_add_1000" class="digit_adj">add 1000 digits</div>\
                    <div id="pi_1K_set" class="digit_adj">&#960 to 1001 digits</div>\
                    <div id="pi_5K_set" class="digit_adj">&#960 to 5K digits</div>\
                    <div id="pi_10K_set" class="digit_adj">&#960 to 10K digits</div>\
                    <div id="pi_110K_set" class="digit_adj">&#960 to 100K</div>\
                </div>\
            </div>\
            ');
            
            print_study_digits(num, false)
    };
    /* END Study button */
    
    
    
    
    
    $('body').on('touchend', '#overlay', function(){
        $('#overlay').remove();
        $('#study_pi').remove();
        $('#grouping_adjust').remove();
    });
    $('body').on('touchend', '#overlay_close', function(){
        $('#overlay').remove();
        $('#study_pi').remove();
        $('#grouping_adjust').remove();
    });
    
    
    // Key color changes
    $('.key').on('touchstart', function(){
        $(this).css('background-color', 'rgba(100,100,100,0.8)');
        return false;// added because touching keys kept calling up the keyboard
    });
    $('.key').on('touchend', function(){
        $(this).css('background-color', 'rgba(20,20,20,0.8)');
        return false;// added because touching keys kept calling up the keyboard diabling user select probably did the trick though
    });
    $('.fn_key').on('touchstart', function(){
        $(this).css('background-color', '#331721');
    });
    $('.fn_key').on('touchend', function(){
        $(this).css('background-color', '#1A060D');
    });
    $('body').on('touchstart', '.grp_adj', function(){
        $(this).css('background-color', '#331721');
    });
    $('body').on('touchend', '.grp_adj', function(){
        $(this).css('background-color', '#1A060D');
    });
    $('body').on('touchstart', '.digit_adj', function(){
        $(this).css('background-color', '#331721');
    });
    $('body').on('touchend', '.digit_adj', function(){
        $(this).css('background-color', '#1A060D');
    });
    
    //Checking Pi
    $('.num').on('touchend mouseup', check_digit);
    
    if (localStorage.record_pos){$('#record').text('Submit Record: '+localStorage.record_pos)};
    
    function check_digit (){

        //checking input digits
        if($(this).text() == pi[pos_in_list]){

            //check for landmarks
            var Class = lm_check(current_pos);
            
            if (Class != false){
                $('#results_log').append('<span class="'+Class+'">'+$(this).text()+'</span>');
                $('#current_position').attr('class', 'curr_pos_'+Class);
            }else{
                $('#results_log').append($(this).text());
                $('#current_position').attr('class', 'background_ease_out');
            };
            
            result_scroll.scrollToElement('#result_footer', 100);
            
            result_scroll.refresh();
            if (localStorage.record_pos){
                if (current_pos >= localStorage.record_pos && challenge == true){
                    localStorage.record_pos = current_pos;//update record if bettered
                    $('#record').text('Submit Record: '+localStorage.record_pos);
                }
            }else if (challenge == true && !localStorage.record_pos){
                localStorage.record_pos = current_pos;//if no record stored set the record
                $('#record').text('Submit Record: '+localStorage.record_pos);
            };
            
            $('#current_position').text('Current Position: '+current_pos);
            current_pos += 1;//update new position
            pos_in_list = ((current_pos-1) % 500);//update position in list
            
            var update_pi = false;
            if (pos_in_list == 0){update_pi = true}
            
            if(update_pi){
                pi = pi_110000.slice(current_pos-1, (current_pos+1000));
            };
        }
        else{
            if (practice){
                $('#key_'+pi[pos_in_list]).css('background-color', '#C21313');//if incorrect input then highlight correct position in red
            }else if (challenge){
                alert('Incorrect! your record is: '+localStorage.record_pos+' digits.');
                clear_result();
            };
        };
        return false;// added because touching keys kept calling up the keyboard
    };
    
    result_scroll = new iScroll('result', {hScrollbar: false, vScrollbar: true, lockDirection: true });
    
});

//External function for printing study digits

function print_study_digits (num, num_digits){
    
    $('#grouping_num').html(num);
    
    if (num_digits != false){
        pi_study = pi_110000.slice(0, (num_digits+1000));
        $('#num_digits').html((num_digits+1000));
    };
    
    //var reg_ex_original = /(\d{num})/g;
    var reg_ex = new RegExp("(\\d{"+num+"})", "g");
    
    var pi_new = pi_study.replace(reg_ex, '$1 ').replace(/(^\s+|\s+$)/,'');//adds a space after every 4th digit then removes spaces from beginnign and end

    var pi_i = 0;
    var lm_pi = '';
    for (var i=0; i<pi_new.length; i++){
        var is_space = false;
        if (pi_new[i] == " "){
            pi_i = pi_i
            is_space = true;
        }else{
            pi_i++;
        };
        
        var lm_10 = pi_i%10;
        var lm_100 = pi_i%100;
        var lm_1000 = pi_i%1000;
        var lm_10k = pi_i%10000;
        var lm_67k = pi_i%67890;//Lu Chao
        var lm_100k = pi_i%100000;//Akira Haraguchi
        
        if (lm_10 ==0 && lm_100 !=0 && lm_1000 !=0 && lm_10k !=0 && lm_67k !=0 && lm_100k !=0 && !is_space){
            var appnd = '<span class="brown_span">'+pi_new[i]+'</span>';
        }else if(lm_100 ==0 && lm_1000 !=0 && lm_10k !=0 && lm_67k !=0 && lm_100k !=0 && !is_space){
            var appnd = '<span class="blue_span">'+pi_new[i]+'</span>';
        }else if(lm_1000 ==0 && lm_10k !=0 && lm_67k !=0 && lm_100k !=0 && !is_space){
            var appnd = '<span class="orange_span">'+pi_new[i]+'</span>';
        }else if (lm_10k ==0 && lm_67k !=0 && lm_100k !=0 && !is_space){
            var appnd = '<span class="yellow_span">'+pi_new[i]+'</span>';
        }else if (lm_67k ==0 && lm_100k !=0 && !is_space){
            var appnd = '<span class="green_span">'+pi_new[i]+'</span>';
        }else if (lm_100k ==0 && !is_space){
            var appnd = '<span class="purple_span">'+pi_new[i]+'</span>';
        }else{
            var appnd = pi_new[i];
        };
        
        lm_pi = lm_pi+appnd;
    };

    $('#study_pi').html('<div class="scrollable">&#960 = 3.<br/>'+lm_pi+'</div>');//added a new scrollable div since if html is added to old .scrollable text disappears
    study_scroll = new iScroll('study_pi', {hScrollbar: false, vScrollbar: true, lockDirection: true });
    
    $('#loading_div').hide()
    
};

//Check for landmarks function
function lm_check(digit){
    
    var is_space = false;
    if (digit == " "){is_space = true};
    
    var Class = false;
    
    var lm_10 = digit%10;
    var lm_100 = digit%100;
    var lm_1000 = digit%1000;
    var lm_10k = digit%10000;
    var lm_67k = digit%67890;//Lu Chao
    var lm_100k = digit%100000;//Akira Haraguchi
    
    if (lm_10 ==0 && lm_100 !=0 && lm_1000 !=0 && lm_10k !=0 && lm_67k !=0 && lm_100k !=0 && !is_space){
        Class = 'brown_span';
    }else if(lm_100 ==0 && lm_1000 !=0 && lm_10k !=0 && lm_67k !=0 && lm_100k !=0 && !is_space){
        Class = 'blue_span';
    }else if(lm_1000 ==0 && lm_10k !=0 && lm_67k !=0 && lm_100k !=0 && !is_space){
        Class = 'green_span';
    }else if (lm_10k ==0 && lm_67k !=0 && lm_100k !=0 && !is_space){
        Class = 'yellow_span';
    }else if (lm_67k ==0 && lm_100k !=0 && !is_space){
        Class = 'orange_span';
    }else if (lm_100k ==0 && !is_space){
        Class = 'purple_span';
    }else{
        Class = false;
    };
    
    return Class
    
};







/* //Checking if browser supports local storage
    if(typeof(Storage)!=="undefined")
  {
  //alert('Yes! localStorage and sessionStorage support!')
  // Some code.....
  }
else
  {
  //alert('Sorry! No web storage support..')
  }
*/