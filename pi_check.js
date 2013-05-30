
//Set position in pi
var current_pos = 1;

$(document).ready(function(){
    
    //Select Mode
    var challenge = true;
    var practice = false;
    
    var pi = '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989';
    
    // Clear Result
    $('#key_clear').on('tap click', clear_result);
    
    function clear_result (){
        $('#result').text('3.');
        current_pos = 1;
        $('#current_position').text('Current Position: 0');
    };
    
    $('#record_attempt').on('touchend mouseup', function(){
        challenge = true;
        practice = false;
        clear_result();
        set_mode();
    });
    $('#practice').on('touchend mouseup', function(){
        challenge = false;
        practice = true;
        set_mode();
    });
    
    function set_mode(){
        if (challenge){
            $('#mode').text('RECORD ATTEMPT!');
        }else if (practice){
            $('#mode').text('JUST PRACTISING');
            clear_result();
        };
    };
    
    
    // Key color changes
    $('.key').on('touchstart mousedown', function(){
        $(this).css('background-color', 'rgba(0,0,0,0.8)');
    });
    $('.key').on('touchend mouseup', function(){
        $(this).css('background-color', 'rgba(0,0,0,0.2)');
    });
    
    //Checking Pi
    $('.num').on('touchend mouseup', check_digit);
    
    if (localStorage.record_pos){$('#record').text('Record: '+localStorage.record_pos)};
    
    function check_digit (){
        
        //checking input digits
        if($(this).text() == pi[current_pos-1]){
            $('#result').append($(this).text());
            if (localStorage.record_pos){
                if (current_pos >= localStorage.record_pos && challenge == true){
                    localStorage.record_pos = current_pos;//update record if bettered
                    $('#record').text('Record: '+localStorage.record_pos);
                }
            }else if (challenge == true && !localStorage.record_pos){
                localStorage.record_pos = current_pos;//if no record stored set the record
                $('#record').text('Record: '+localStorage.record_pos);
            };
            
            $('#current_position').text('Current Position: '+current_pos);
            current_pos += 1;//update new position
        }
        else{
            if (practice){
                $('#key_'+pi[current_pos-1]).css('background-color', '#E01B25');//if incorrect input then highlight correct position in red
            }else if (challenge){
                alert('Wrong! your record is: '+localStorage.record_pos+' digits!');
                clear_result();
            };
        };
        
    };
    
});

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