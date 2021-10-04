// ==UserScript==
// @name         ''4mods''
// @namespace    ''https://raw.githubusercontent.com/maxtaran2010/modsForCookieClicker/master/4mods/menu.js''
// @homepageURL  ''4mods.js''
// @updateURL    ''http://bamaec.ru/extentions/4mods/update.xml''
// @downloadURL  ''http://bamaec.ru/extentions''
// @version      ''1.0'' (Not Required)
// @description  Load the Script when Cookie Clicker starts
// @author       ''mr. SHARFIK''
// @match        https://orteil.dashnet.org/cookieclicker/
// @grant        none
// ==/UserScript==
Game.loadMod("https://raw.githubusercontent.com/maxtaran2010/modsForCookieClicker/master/4mods/4mods.js")
console.log("~hello form 4mods!")
Game.Launch();

window.onload=function()
{
	
	if (!Game.ready)
	{
		if (top!=self) Game.ErrorFrame();
		else
		{
			console.log('[=== '+choose([
				'Oh, hello!',
				'hey, how\'s it hangin',
				'About to cheat in some cookies or just checking for bugs?',
				'Remember : cheated cookies taste awful!',
				'Hey, Orteil here. Cheated cookies taste awful... or do they?',
			])+' ===]');
			Game.Load();
			//try {Game.Load();}
			//catch(err) {console.log('ERROR : '+err.message);}
		}
	}
};