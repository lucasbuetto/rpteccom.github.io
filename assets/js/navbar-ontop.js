"use strict";!function(){var n="navbar-ontop";function o(){var o=document.querySelector(".navbar");window.scrollY>15?o.classList.remove(n):o.classList.add(n)}document.write("<style id='temp-navbar-ontop'>.navbar {opacity:0; transition: none !important}</style>"),document.addEventListener("DOMContentLoaded",function(t){$(window).on("show.bs.collapse",function(o){$(o.target).closest("."+n).removeClass(n)}),$(window).on("hidden.bs.collapse",function(n){o()}),o(),setTimeout(function(){document.querySelector("#temp-navbar-ontop").remove()})}),window.addEventListener("scroll",function(){o()})}();