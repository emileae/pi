
var current_pos = 0;

$(document).ready(function(){
    var pi = '141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481';
    
    //alert(pi[3]);
    
    $('#key_clear').on('tap click', function(){
        $('#result').text('3.');
    });
    
    $('.key').on('touchstart mousedown', function(){
        $(this).css('background-color', 'rgba(0,0,0,0.5)');
    });
    $('.key').on('touchend mouseup', function(){
        $(this).css('background-color', 'white');
    });
    
    $('.num').on('tap click', check_digit);
    
    function check_digit (){
        
        if($(this).text() == pi[current_pos]){
            $('#result').append($(this).text());
            
            if (localStorage.record_pos){
                if (current_pos >= localStorage.record_pos){
                    localStorage.record_pos = current_pos;
                }
            }else{
                localStorage.record_pos = current_pos;
            };
            
            $('#record').text(localStorage.record_pos);
            current_pos += 1;
        }
        else{
            alert('wrong')
        };
        
    };
    
    if(typeof(Storage)!=="undefined")
  {
  //alert('Yes! localStorage and sessionStorage support!')
  // Some code.....
  }
else
  {
  //alert('Sorry! No web storage support..')
  }
    
});
