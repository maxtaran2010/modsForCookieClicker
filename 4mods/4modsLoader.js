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
window.eval("(" + (function() {
    'use strict';

    var loadFunc = function() {
        var Game = window.Game;
        if(Game && Game.ready) {
            Game.loadMod("https://raw.githubusercontent.com/maxtaran2010/modsForCookieClicker/master/4mods/4mods.js")
            console.log("~hello form 4mods!")
            return true;
        } else {
            return false;
        }
    }

    if(window.AcharvaksAgronomicon === undefined) {
        window.AcharvaksAgronomicon = { preloader: true };
    }
    if(!window.AcharvaksAgronomicon.loaded) {
        if(!loadFunc()) {
            var interval = setInterval(function() {
                if(loadFunc()) {
                    clearInterval(interval);
                }
            }, 1000);
        }
    }
}).toString() + ")()");
