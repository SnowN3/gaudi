	var today = new Date();

    var BigDay = new Date(2016, 06, 10);
    var msPerDay = 24 * 60 * 60 * 1000;
    var timeLeft = (BigDay.getTime() - today.getTime());
    var e_daysLeft = timeLeft / msPerDay;
    var daysLeft = Math.floor(e_daysLeft);
    var yearsLeft = 0;
    if (daysLeft > 365) {
        yearsLeft = Math.floor(daysLeft / 365);
        daysLeft = daysLeft % 365;
    }
    var e_hrsLeft = (e_daysLeft - daysLeft) * 24;
    var hrsLeft = Math.floor(e_hrsLeft);
    var minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60);
    document.write(yearsLeft+" years "+daysLeft + " days " + hrsLeft + " hours" + minsLeft + " minutes");
    
    
    
 function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var days = Math.floor(t/(1000**60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}   

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}