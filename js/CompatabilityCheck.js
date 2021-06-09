var JavaVer = "1,6,0,03";
var FlashVer = 10.3;
var ShockwaveVer = 12.0;
var ScreenWidth = 1280;
var ScreenHeight = 1024;

function checkBrowser()

{
if(PluginDetect.browser.isChrome == 1){
			document.write("Chrome</td><td class= 'alert alert-success'></td>");
	}

	else if (PluginDetect.browser.isGecko == 1){
	document.write("Firefox" + " " + PluginDetect.browser.verGecko + "</td><td class= 'alert alert-warning'></td>");
		}
	else if (PluginDetect.browser.isIE == 1){
	document.write("Internet Explorer" + " " + PluginDetect.browser.verChrome + "</td><td class= 'alert alert-warning'></td>");
		}
	else if (PluginDetect.browser.isSafari == 1){
	document.write("Safari" + " " + PluginDetect.browser.verSafari + "</td><td class= 'alert alert-warning'></td>");
		}
	else 
	document.write ("Unidentified browser" + "</td><td class='warning'></td>");
	
}

function checkJava()
{
	if(PluginDetect.getVersion('Java','getJavaInfo.jar') == null) 
	{
		document.write("Java not installed</td><td class= 'alert alert-danger'></td>");
	}
	
	if(PluginDetect.getVersion('Java') == '1,8,0,261')
	{
		document.write('Java JRE Version ' + PluginDetect.getVersion('Java') + "</td><td class= 'alert alert-success'></td>");
	}
	
	if((PluginDetect.isMinVersion('Java', JavaVer) == 1) && (PluginDetect.getVersion('Java') != '1,8,0,261'))
	{
		document.write('Java JRE Version ' + PluginDetect.getVersion('Java') + "</td><td class= 'alert alert-warning'></td>");
	}
	
	if(PluginDetect.getVersion('Java','getJavaInfo.jar') !== JavaVer && PluginDetect.getVersion('Java','getJavaInfo.jar') !== null && PluginDetect.isMinVersion('Java', JavaVer) !== 1)
	{
		document.write('Java JRE Version ' + PluginDetect.getVersion('Java') + "</td><td class= 'alert alert-warning'></td>");
	}
}

function checkFlash()
{
	if(PluginDetect.isMinVersion('Flash', FlashVer) == 1)
	{
		document.write('Flash v' + PluginDetect.getVersion('Flash') + "</td><td class= 'alert alert-success'></td>");
	}
	if(PluginDetect.isMinVersion('Flash', FlashVer) !== 1 && PluginDetect.getVersion('Flash') == null)
	{
		document.write("Flash not installed</td><td class= 'alert alert-danger'></td>");
	}
	if(PluginDetect.isMinVersion('Flash', FlashVer) !== 1 && PluginDetect.getVersion('Flash') !== null)
	{
		document.write('Flash v' + PluginDetect.getVersion('Flash') +"</td><td class= 'alert alert-danger'></td>");
	}
}

function checkShock()
{
	if(PluginDetect.isMinVersion('Shockwave', ShockwaveVer) == 1){
		document.write('Shockwave v' + PluginDetect.getVersion('Shockwave') + "</td><td class= 'alert alert-success'></td>");
	}
	if(PluginDetect.isMinVersion('Shockwave', ShockwaveVer) !== 1 && PluginDetect.getVersion('Shockwave') == null)
	{
		document.write("Shockwave not installed</td><td class= 'alert alert-danger'></td>" );
	}
	if(PluginDetect.isMinVersion('Shockwave', ShockwaveVer) !== 1 && PluginDetect.getVersion('Shockwave') !== null)
	{
		document.write('Shockwave v' + PluginDetect.getVersion('Shockwave')+ "</td><td class= 'alert alert-warning'></td>" );
	}
}

function checkPopup(){
 var mine = window.open('','','width=1,height=1,left=0,top=0,scrollbars=no');
 if(mine){
    document.write("Popups not blocked</td><td class= 'alert alert-success'></td>");
		}
 else
 	{
    document.write("Popups are blocked</td><td class= 'alert alert-warning'></td>");
}
 mine.close();
}


function checkCookies()
{
var tmpcookie = new Date();   chkcookie = (tmpcookie.getTime() + '');   document.cookie = "chkcookie=" + chkcookie + "; path=/";
  if (document.cookie.indexOf(chkcookie,0) < 0) {
     document.write ("Cookies Not Enabled</td><td class= 'alert alert-danger'></td>");
	     }    
else
		  {
document.write ("Cookies Enabled</td><td class= 'alert alert-success'></td>");
		    }
}

function checkRes()
{
if (screen.width >=ScreenWidth && screen.height >=ScreenHeight)
{
	document.write('Resolution ' + screen.width + 'x'+ screen.height + "</td><td class= 'alert alert-success'></td>");
}
else
	document.write('Resolution (' + screen.width + 'x'+ screen.height + ")</td><td class= 'alert alert-warning'></td>");
}