(()=>{"use strict";(()=>{function e(e,a){return-1!==e.indexOf(a)}document.body.scrollHeight,window.innerHeight,jQuery(document).ready((function(a){var d,s,i;d=navigator.userAgent.toLowerCase(),s=jQuery("html"),d.match(/(iphone|ipod|ipad)/)&&s.addClass("dcbase-ios mobile"),e(d,"msie")?s.addClass("dcbase-ie"):e(d,"chrome")?s.addClass("dcbase-chrome"):e(d,"firefox")?s.addClass("dcbase-firefox"):e(d,"safari")&&d.search("chrome")<0?s.addClass("dcbase-safari"):e(d,"opera")&&s.addClass("dcbase-opera"),(i=jQuery(".widget"))&&i.length&&i.each((function(){var e=jQuery(this);e.wrapInner('<div class="widget-content"></div>');var a=e.find(".widget-title");a&&a.length&&a.prependTo(e)}))}))})()})();