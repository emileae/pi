function print_study_digits(e,t){$("#grouping_num").html(e),0!=t&&(pi_study=pi_110000.slice(0,t+1e3),$("#num_digits").html(t+1e3));for(var n=RegExp("(\\d{"+e+"})","g"),i=pi_study.replace(n,"$1 ").replace(/(^\s+|\s+$)/,""),o=0,a="",r=0;i.length>r;r++){var s=!1;" "==i[r]?(o=o,s=!0):o++;var l=o%10,c=o%100,u=o%1e3,d=o%1e4,h=o%67890,p=o%1e5;if(0!=l||0==c||0==u||0==d||0==h||0==p||s)if(0!=c||0==u||0==d||0==h||0==p||s)if(0!=u||0==d||0==h||0==p||s)if(0!=d||0==h||0==p||s)if(0!=h||0==p||s)if(0!=p||s)var f=i[r];else var f='<span class="purple_span">'+i[r]+"</span>";else var f='<span class="green_span">'+i[r]+"</span>";else var f='<span class="yellow_span">'+i[r]+"</span>";else var f='<span class="orange_span">'+i[r]+"</span>";else var f='<span class="blue_span">'+i[r]+"</span>";else var f='<span class="brown_span">'+i[r]+"</span>";a+=f}$("#study_pi").html('<div class="scrollable">&#960 = 3.<br/>'+a+"</div>"),study_scroll=new iScroll("study_pi",{hScrollbar:!1,vScrollbar:!0,lockDirection:!0})}function lm_check(e){var t=!1;" "==e&&(t=!0);var n=!1,i=e%10,o=e%100,a=e%1e3,r=e%1e4,s=e%67890,l=e%1e5;return n=0!=i||0==o||0==a||0==r||0==s||0==l||t?0!=o||0==a||0==r||0==s||0==l||t?0!=a||0==r||0==s||0==l||t?0!=r||0==s||0==l||t?0!=s||0==l||t?0!=l||t?!1:"purple_span":"orange_span":"yellow_span":"green_span":"blue_span":"brown_span"}var current_pos=1,pos_in_list=(current_pos-1)%500,pi="",initial=!1,pi_1000="1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989",pi_study=pi_1000;$(document).ready(function(){function e(){$("#results_log").text("3."),current_pos=1,pos_in_list=0,$("#current_position").text("Current Position: 0"),$("#current_position").attr("class","background_ease_out"),$(".num").css("background-color","rgba(20,20,20,0.8)")}function t(){a?($("#record_attempt").css("background-color","#3B0202"),$("#practice").css("background-color","rgba(20,20,20,0.8)"),$("#practice").html("Practice"),$("#record_attempt").html("<u>Record Attempt!</u>"),$("#study").html("<del>Study</del>")):r&&($("#practice").css("background-color","#3B0202"),$("#record_attempt").css("background-color","rgba(20,20,20,0.8)"),$("#practice").html("<u>Practice</u>"),$("#record_attempt").html("Record Attempt!"),$("#study").html("Study"),e())}function n(e){$("body").append('<div id="overlay">            <div id="overlay_close">Close</div>            </div>            <div id="study_pi"><div class="scrollable">&#960 = 3.<br/></div></div>            <div id="grouping_adjust">                <div class="grp_adj_rec">Grouping: <span id="grouping_num">'+e+'</span></div>                                <div id="grp_adj_container">                    <div id="add" class="grp_adj"><div class="pi_loading" style="display:none">Loading</div><span class="button_hide">+</span></div>                    <div id="subtract" class="grp_adj"><div class="pi_loading" style="display:none">Loading</div><span class="button_hide">-</span></div>                </div>                                <div class="num_digit_rec">No. of Digits: <span id="num_digits">1000</span></div>                                <div id="num_digits_adjust_container">                    <div id="pi_add_1000" class="digit_adj"><div class="pi_loading" style="display:none">Loading</div><span class="button_hide"> + <br> 1000<br> digits</span></div>                    <div id="pi_1K_set" class="digit_adj"><div class="pi_loading" style="display:none">Loading</div><span class="button_hide"> &#960 to<br> 1001<br> digits</span></div>                    <div id="pi_5K_set" class="digit_adj"><div class="pi_loading" style="display:none">Loading</div><span class="button_hide"> &#960 to<br> 5K<br> digits</span></div>                    <div id="pi_10K_set" class="digit_adj"><div class="pi_loading" style="display:none">Loading</div><span class="button_hide"> &#960 to<br> 10K<br> digits</span></div>                    <div id="pi_110K_set" class="digit_adj"><div class="pi_loading" style="display:none">Loading</div><span class="button_hide"> &#960 to<br> 100K<br> digits</span></div>                </div>            </div>            '),print_study_digits(e,!1)}function i(){if($(this).text()==pi[pos_in_list]){var t=lm_check(current_pos);0!=t?($("#results_log").append('<span class="'+t+'">'+$(this).text()+"</span>"),$("#current_position").attr("class","curr_pos_"+t)):($("#results_log").append($(this).text()),$("#current_position").attr("class","background_ease_out")),result_scroll.scrollToElement("#result_footer",100),result_scroll.refresh(),localStorage.record_pos?current_pos>=localStorage.record_pos&&1==a&&(localStorage.record_pos=current_pos,$("#record").text("Submit Record: "+localStorage.record_pos)):1!=a||localStorage.record_pos||(localStorage.record_pos=current_pos,$("#record").text("Submit Record: "+localStorage.record_pos)),$("#current_position").text("Current Position: "+current_pos),current_pos+=1,pos_in_list=(current_pos-1)%500;var n=!1;0==pos_in_list&&(n=!0),n&&(pi=pi_110000.slice(current_pos-1,current_pos+1e3))}else if(r)$("#key_"+pi[pos_in_list]).css("background-color","#C21313");else if(a){var i=!0,o=stop_timer(start_time,i,current_pos),s=current_pos;s=1==current_pos?0:current_pos,localStorage.record_pos>current_pos?$("body").append('<div class="overlay"><div id="error_indicator" style="width:100%; text-align:center;">                    You managed: '+s+" decimals in "+o+" sec<br> Best: "+localStorage.record_pos+' decimals.                    <div id="error_indicator_close">Close</div></div>                    </div>'):current_pos>localStorage.record_pos&&$("body").append('<div class="overlay"><div id="error_indicator" style="width:100%; text-align:center;">                    Well Done!<br> You managed: '+s+" decimals in "+o+' sec<br> Your best so far!                    <div id="error_indicator_close">Close</div>                    </div></div>'),e()}return!1}var o=pi_1000;pi=o,$("#current_position").attr("class","background_ease_out"),$("#result_footer").css("height","2em");var a=!1;$("#practice").css("background-color","#3B0202"),$("#practice").html("<u>Practice</u>");var r=!0;localStorage.record_pos?$("#record").html("Submit Record: "+localStorage.record_pos):$("#record").html("Submit Record: 0"),$("#key_clear").on("touchend",e),$("#record_attempt").on("touchend",function(){a=!0,r=!1,current_pos=1,pos_in_list=(current_pos-1)%500,pi=o,e(),t()}),$("#practice").on("touchend",function(){a=!1,r=!0,current_pos=1,pos_in_list=(current_pos-1)%500,pi=o,e(),t()}),$("#study").on("touchend",function(){if(r){var e=5;n(e,!1)}}),$("body").on("touchend","#add",function(){var e=Number($("#num_digits").html()-1e3),t=Number($("#grouping_num").html())+1;print_study_digits(t,e)}),$("body").on("touchend","#subtract",function(){var e=Number($("#num_digits").html()-1e3),t=Number($("#grouping_num").html())-1;t=t>0?t:1,print_study_digits(t,e)}),$("body").on("touchend","#pi_add_1000",function(){var e=Number($("#num_digits").html()),t=Number($("#grouping_num").html());print_study_digits(t,e)}),$("body").on("touchend","#pi_1K_set",function(){var e=1,t=Number($("#grouping_num").html());print_study_digits(t,e)}),$("body").on("touchend","#pi_5K_set",function(){var e=4e3,t=Number($("#grouping_num").html());print_study_digits(t,e)}),$("body").on("touchend","#pi_10K_set",function(){var e=9e3,t=Number($("#grouping_num").html());print_study_digits(t,e)}),$("body").on("touchend","#pi_110K_set",function(){var e=99e3,t=Number($("#grouping_num").html());print_study_digits(t,e)}),$("body").on("touchend","#overlay",function(){$("#overlay").remove(),$("#study_pi").remove(),$("#grouping_adjust").remove()}),$("body").on("touchend","#overlay_close",function(){$("#overlay").remove(),$("#study_pi").remove(),pi_study=pi_1000,$("#grouping_adjust").remove()}),$(".key").on("touchstart",function(){return $(this).css("background-color","rgba(100,100,100,0.8)"),!1}),$(".key").on("touchend",function(){return $(this).css("background-color","rgba(20,20,20,0.8)"),!1}),$(".fn_key").on("touchstart",function(){$(this).css("background-color","#331721")}),$(".fn_key").on("touchend",function(){$(this).css("background-color","#1A060D")}),$("body").on("touchstart",".grp_adj",function(){$(".button_hide").css("visibility","hidden"),$(".pi_loading").show(),$(this).css("background-color","#331721")}),$("body").on("touchend",".grp_adj",function(){$(".button_hide").css("visibility","visible"),$(".pi_loading").hide(),$(this).css("background-color","#1A060D")}),$("body").on("touchstart",".digit_adj",function(){$(".button_hide").css("visibility","hidden"),$(".pi_loading").show(),$(this).css("background-color","#331721")}),$("body").on("touchend",".digit_adj",function(){$(".button_hide").css("visibility","visible"),$(".pi_loading").hide(),$(this).css("background-color","#1A060D")}),$("body").on("touchstart","#overlay_close",function(){$(this).css("background-color","rgb(50,50,50)")}),$("body").on("touchend","#overlay_close",function(){$(this).css("background-color","rgb(0,0,0)")}),$("body").on("touchstart","#error_indicator_close",function(){$(this).css("background-color","rgb(50,50,50)")}),$("body").on("touchend","#error_indicator_close",function(){$(this).css("background-color","rgb(0,0,0)")}),$(".num").on("touchend",i),localStorage.record_pos&&$("#record").text("Submit Record: "+localStorage.record_pos),$("body").on("touchend","#error_indicator_close",function(){$(".overlay").remove(),$("#error_indicator").remove()}),result_scroll=new iScroll("result",{hScrollbar:!1,vScrollbar:!0,lockDirection:!0})});