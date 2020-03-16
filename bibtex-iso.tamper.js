// ==UserScript==
// @name         ISO Bibtex Formatter
// @namespace    http://github.com/danieloskarsson/iso-bibtex-formatter
// @version      1
// @description  Create Bibtex format from content on iso.org
// @author       Daniel Oskarsson
// @match        https://www.iso.org/standard/*.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var h1 = document.getElementsByTagName("h1")[0];
    if (h1.children.length > 0) h1.removeChild(h1.lastChild);
    var number = h1.textContent.trim().replace(/\n|<.*?>/g,'');
    var year = number.substr(number.length - 4);
    var title = document.getElementsByTagName("h2")[0].textContent;
    var url = window.location.href;
    var key = number.replace(/[ |/|\-|:]/g, '_');
    var bibtex = `<p>@techreport{${key},<br>&nbsp;&nbsp;author = {ISO},<br>&nbsp;&nbsp;year = {${year}},<br>&nbsp;&nbsp;title = {${title}},<br>&nbsp;&nbsp;shorttitle = {${number}},<br>&nbsp;&nbsp;number = {${number}},<br>&nbsp;&nbsp;url = {${url}},<br>&nbsp;&nbsp;type = {Standard},<br>&nbsp;&nbsp;address = {Geneva},<br>&nbsp;&nbsp;institution = {International Organization for Standardization (ISO)}<br>}</p>`;
    document.body.innerHTML = bibtex;
    document.head.parentNode.removeChild(document.head);
})();
