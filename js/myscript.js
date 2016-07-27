
$(document).ready(function() {
	$('#caption').fadeIn(6000);
	$('#caption').delay(1000);
	 $('#caption').fadeOut(1000);
});



/*$(".image").each(function() {
    $(this).hover(function() {    // this is the mouseenter event handler
        $("#toChange").attr("src", $(this).attr("data-src"));
    }, function() {               // this is the mouseleave event handler
        $("#toChange").attr("src", "img/casa-mila-roof.jpg");    // this will revert it back to the original image (tv.jpg)
    });
});*/






/*var today = new Date();

    var BigDay = new Date("December 25, 2016");
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
    
    
    var TargetDate = '07/13/2020 14:00:00'; // MM/DD/YYYY HH:MM:SS (ex: 11/29/2012 23:59:59). Note: Add a Time Zone offset (UTC+HHMM) at the end if you want to use Client Computer's Time.

window.useServerTime = true;	 // Use website server time (instead of client computer time). Important Note: to use this feature, your web server must support SSI or a server-side script, and you should change the filename extension to one of server-processed extensions, such as: .shtml, .ssi, .php, .asp, .jsp, etc.
window.customFix = -100;	 // To adjust the delay (in ms).

window.CountActive = true;

window.countUp	 = false; // Count up from the target Date after Count down finished. Instead of showing the below Finished message.
var FinishedText = "Time<font color=Cyan>'</font>s Up!"; //You can use HTML here, too.

var interval = 995; //ms (*for advanced users only!)
var blink    = 120; //ms (use 0 to disable blinking)

var pluralSign = 's'; // (i.e.: 1 Second, 2 Seconds)

var padding  = true;  // LeadingZero. (enabled: 05 Seconds, disabled: 5 Seconds)
var _segment = false; // ex: '<img src="lcd/%s.png" alt="%s" class="segment" />'

 

  <style type="text/css">
<!-- /* DRS - Day Countdown Style */

/*{
	-webkit-transition: 200ms;
	-moz-transition: 200ms;
	-ms-transition: 200ms;
	-o-transition: 200ms;
	transition: 200ms;
}

BODY{
	overflow: auto;
	cursor: default;
	background: rgb(7,7,7) url(background.jpg) repeat center fixed;
}

.CountDown{
	margin: auto;
	position: relative;
}

.CountDown, .CountDown TR, .CountDown TD{
	border: 0px hidden transparent;
}

DIV.CountDown{

}

.CountDown .count, .CountDown .titles{
	display: block;
	text-align: center;
	
}

TABLE.CountDown{
	margin-top: 20%;
	border: 0px ridge silver;
	background: rgb(17,17,17);
	width: auto;

/*
	opacity: 0.7;
	-moz-opacity: 0.7;
	-webkit-opacity: 0.7;
	-o-opacity: 0.7;
	filter:alpha(opacity=70)
*/
}

/*.CountDown .count, .CountDown .err, .CountDown .finish{
	font-family: 'Tw Cen MT', Ubuntu, 'Tahoma', sans-serif;
	text-shadow: 1px 1px 0px black;
	color: rgb(0,128,255);
	font-size: 48pt;
}

.titles td{
	font-size: 10pt;
	text-transform: uppercase;
	letter-spacing: 2px;
	color: black;
	background: rgb(0,80,220);
	height: auto;
}

.CountDown td{
	margin: 0px;
	padding: 0px;
	min-width: 96px;
}

.CountDown .tabledash{
	border-bottom: 0px solid rgb(0,110,240);
	color: white;
	width: 100%;
}

.CountDown .titles{
	font-family: Ubuntu, 'Myriad pro', 'Segoe UI', Tahoma, Arial, sans-serif;
}

.CountDown .err, .CountDown .finish{
	text-shadow: 2px 2px 0px black;
	color: white;
	width: 100%;
	display: block;
	text-align: center;
}

.CountDown .err{
	border-top: 4px solid red;
}

.CountDown .finish{
	border-bottom: 4px solid rgb(0,110,240);
}

.CountDown .blink{
	color: white;
	the_background: red;
	the_font-weight: bold;
	the_text-decoration: underline;
	the_text-shadow:
		1px 1px 44px #125aed,
		1px -1px 44px #125aed,
		-1px 1px 44px #125aed,
		-1px -1px 44px #125aed;
}

.hidden{
	display: none;
}

/* End Of DRS-Style */ -->
  </style>

/*<link rel="stylesheet" type="text/css" href="countdown-skin.css"/>
<script type="text/javascript" src="countdown-config.js"></script>

  <script type="text/javascript">
<!-- Stytles when it's loaded in frames

	if (self !== top) //Check for the master frame
	{
		document.write('<style type="text/css">BODY{background: transparent;} DIV.CountDown{margin: 0px;} </style>')
	}

// End of check -->
  </script>

 </head>
 <body>

<span style="display: none; visibility: hidden;" class="err" title="about">Day Countdown Script, Produced by DRS David Soft --- david.soft@yahoo.com</span><!-- Please do not remove this line if possible, thank you. -->

<table class="CountDown" id="CountDown" cellspacing="1">

<tr id="count_main" class='count'>
<td id="count_y"> 00 </td>
<td id="count_n"> 00 </td>
<td id="count_w"> 00 </td>
<td id="count_d"> 00 </td>
<td id="count_h"> 00 </td>
<td id="count_m"> 00 </td>
<td id="count_s"> 00 </td>
</tr>

<tr id="title_main" class='titles'>
<td id="title_y"> Years </td>
<td id="title_n"> Months </td>
<td id="title_w"> Weeks </td>
<td id="title_d"> Days </td>
<td id="title_h"> Hours </td>
<td id="title_m"> Minutes </td>
<td id="title_s"> Seconds </td>
</tr>

<tr>
<td colspan="7" class="tabledash" id="tabledash">

<noscript>
<style type="text/css">
.CountDown .titles, .CountDown .count{
	display: none;
}

.CountDown .tabledash{
	border-bottom: 0px hidden transparent;
}
</style>

<div class='err'>
Scripts are Disabled.
</div>
</noscript>

<div id="tablefinish" class='finish' style="display: none;">
[Counting Finished]
</div>

</td>
</tr>

</table>

 <script type="text/javascript">
<!-- Begin of Day Countdown Script
// Produced by DRS David Soft
//    david.soft@yahoo.com

function stopCount(){
	window.CountActive = false;
}

function startCount(){
	window.CountActive = true;
	finish(-1);

	calculate();
}

  var table={
	all: element("CountDown"),
	count: {
		y : element("count_y"),
		n : element("count_n"),
		w : element("count_w"),
		d : element("count_d"),
		h : element("count_h"),
		m : element("count_m"),
		s : element("count_s"),

		all : element("count_main")
	},
	title: {
		y : element("title_y"),
		n : element("title_n"),
		w : element("title_w"),
		d : element("title_d"),
		h : element("title_h"),
		m : element("title_m"),
		s : element("title_s"),

		all : element("title_main")
	},
	dash: 	element("tabledash"),
	finish: element("tablefinish")
  }

var ServerTime = {//diffrent methods of getting server date
	SSI: '<!--#config timefmt="%B %d, %Y %H:%M:%S"--><!--#echo var="DATE_LOCAL" -->',
	PHP: '<? print date("F d, Y H:i:s", time())?>',
	ASP: '<% Response.Write(DateTime.Now.ToString())%>',
	JSP: '<%@page contentType="text/html" import="java.util.*" %> <%= new java.util.Date() %>',
}

for(method in ServerTime)
if(ServerTime[method].toLowerCase().indexOf('date') == -1){
	var ServerTime = ServerTime[method];
	break;
}

if (typeof ServerTime == 'object')
	window.useServerTime = false;

if (window.useServerTime)
{
	var serverDate = new Date(ServerTime);
	var clientDate = new Date();

	window.diffrence = (serverDate.valueOf()-clientDate.valueOf());
}

window.diffrence = window.diffrence || 0;

function getDNow(cus){
	var cus = cus || new Date();
	var cus = new Date( cus.valueOf() + window.diffrence + window.customFix );

	var date_now = new Date(cus);
	return date_now;
}

function calcage(secs, num1, num2) {
  return ((Math.floor(secs/num1))%num2);
}

var DaysInMonth = [
		31,29,31,
		30,31,30,
		31,31,30,
		31,30,31];

function isLeap(Year){
	return (Year % 4 == 0 && Year % 100 != 0) || (Year % 400 == 0);
}

function calculate(dthen, dnow){
var dthen = dthen || new Date(TargetDate);
var dnow = dnow || getDNow();

ddiff = new Date(dthen-dnow);
gsecs = Math.floor(ddiff.valueOf()/1000);

if (window.countUp) gsecs = Math.abs(gsecs);

  if (gsecs < 0 && !window.countUp) 
    finish(FinishedText);
  else
  CountBack(gsecs);

}

function CountBack(secs) {
  var Remain={
	Y: 0,
	N: 0,
	W: 0,
	D: calcage(secs,86400,100000),
	H: calcage(secs,3600,24),
	M: calcage(secs,60,60),
	S: calcage(secs,1,60)
  }

	var dnow = getDNow();

	for (thisYear = dnow.getFullYear();
	Remain.D >= (isLeap(thisYear+1)?366:365); thisYear++)
	{
		Remain.D -= isLeap(thisYear+1)?366:365;
		Remain.Y ++;
	}

	for (thisMonth = dnow.getMonth();
	Remain.D >= DaysInMonth[thisMonth];thisMonth++)
	{
		Remain.D -= DaysInMonth[thisMonth];
		Remain.N ++;
		if (thisMonth==11) thisMonth=0;
	}

	if (Remain.D >= 7)
	{
		Remain.W = Math.floor(Remain.D / 7);
		Remain.D = Remain.D % 7;
	}

  Remain_all = '';
  for (R in Remain){ r = R.toLowerCase();
	Remain_all += Remain[R].toString();
	if(parseInt(Remain_all) <= 0){
		classNames.add(table.count[r], 'hidden');
		classNames.add(table.title[r], 'hidden');
	} else {
		classNames.remove(table.count[r], 'hidden');
		classNames.remove(table.title[r], 'hidden');
	}
    Update_TXT(table.count[r], Remain[R]);
    AutoPlural(table.title[r], Remain[R]);
  }

  if (window.CountActive)
    setTimeout("calculate()", interval);
}

function finish(customEvent){

	if(customEvent === -1){
		table.count.all.style.display = '';
		table.title.all.style.display = '';
		table.finish.style.display = 'none';
	}
	else{
		if(typeof customEvent == 'string'){
			table.finish.innerHTML = customEvent;
		}
		table.count.all.style.display = 'none';
		table.title.all.style.display = 'none';
		table.finish.style.display = '';
	}

}

function image(txt){
	var segments = '';

	for (s=0;s<txt.length;s++)
		segments += _segment.replace(/%s/g, txt[s]);

	return segments;
}

function Update_TXT(obj, text){
	if (!obj || !obj.innerHTML)
		return false;

	text = text.toString();

	if (text.length < 2 && window.padding)
		text = "0" + text;

	if (typeof _segment == 'string') text = image(text);

	obj.oldInnerHTML = obj.innerHTML;

	obj.innerHTML = obj.innerHTML.replace(new RegExp(' ', 'gi'), '')
	if (obj.innerHTML == '') obj.innerHTML = window.padding?'00':'0';

	if (obj.innerHTML != text)
	{
		if (blink && blink > 0)
		{
			window.clearTimeout(blinkIn);
			var blinkIn  = window.setTimeout
			("classNames.add   (element('"+obj.id+"'), 'blink')", 1);

			window.clearTimeout(blinkOut);
			var blinkOut = window.setTimeout
			("classNames.remove(element('"+obj.id+"'), 'blink')", 1 + blink);
		}
		obj.innerHTML = text;
	}

	return obj.oldInnerHTML;
}

function AutoPlural(obj, num){
	if ((typeof pluralSign != 'string' || pluralSign == "")
		|| (!obj || !obj.innerHTML) || (!num && num != 0))
		return false;
	num = num.toString();
	text = obj.innerHTML;
	while (text.slice(-1) == ' ')
		text = text.slice(0,-1)
	if (text.slice(-pluralSign.length) == pluralSign)
		text = text.slice(0,-pluralSign.length)
	if (num > 1)
		text += pluralSign;

	obj.innerHTML = text;
}

function element(id){
	       if (document.getElementById) {
		var return_var = document.getElementById(id); 
	} else if (document.all) {
		var return_var = document.all[id]; 
	} else if (document.layers) { 
		var return_var = document.layers[id]; 
	} else {
		alert("Can not fetch Element with '"+id+"' id.");
	}
	return return_var; 
}

if (document.getElementsByClassName == undefined)
document.getElementsByClassName = function (className, node, tag){
	node = node || this;
	tag = tag || '*';
	els = node.getElementsByTagName(tag);
	wnt = new Array;
	for (var count=0 ; els.length > count ; count ++)
		if (	(els[count])
			&& (els[count].className.indexOf(className) != -1)
			&& (new RegExp("(?:^|\\s)" + className + "(?:$|\\s)")).test(els[count].className)
		)
			wnt = wnt.concat(els[count]);
	return wnt;
}

var classNames = {
	add: function (object, className)
	{
		if (!this.has(object, className))
			object.className += ' ' + className;
	},
	has: function (object, className)
	{
		if (object.className.indexOf(className)==-1)
			return false;
		else
			return true;
	},
	remove: function (object, className)
	{
		if (this.has(object, className))
			object.className = object.className.replace(className, '').replace(new RegExp('  ', 'gi'), ' ')
	},
	replace: function (object, classNamesArray)
	{
		this.add(object, classNamesArray[0]);
		this.remove(object, classNamesArray[1]);
	}
}


http://drsdavidsoft.persiangig.com/Pages/Day-Count-Down-by-DRS.html

function getStyle(x, styleProp)
{
	if (!x) return;
	if (x.currentStyle)
		var y = x.currentStyle[styleProp];
	else if (window.getComputedStyle)
		var y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp);
	return y;
}

// All Scripts all loaded, so starting them.
calculate();

// End of Scripts -->*/
 
 
 
 //https://css-tricks.com/on-responsive-images/
 
 //http://stackoverflow.com/questions/25359208/scale-an-image-if-the-browser-height-or-width-changes-but-stay-in-proportion

