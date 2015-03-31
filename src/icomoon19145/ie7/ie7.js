/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'entypo\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-custom-arrow-up': '&#xe727;',
		'icon-custom-arrow-down': '&#xe728;',
		'icon-custom-arrow-left': '&#xe729;',
		'icon-custom-arrow-right': '&#xe70a;',
		'icon-checkbox-checked': '&#xe71c;',
		'icon-checkbox': '&#xe71d;',
		'icon-radio-checked': '&#xe71e;',
		'icon-radio': '&#xe71f;',
		'icon-phone': '&#xe600;',
		'icon-mobile': '&#xe601;',
		'icon-mouse': '&#xe602;',
		'icon-directions': '&#xe603;',
		'icon-mail': '&#xe604;',
		'icon-paperplane': '&#xe605;',
		'icon-pencil': '&#xe606;',
		'icon-feather': '&#xe607;',
		'icon-paperclip': '&#xe608;',
		'icon-drawer': '&#xe609;',
		'icon-reply': '&#xe60a;',
		'icon-reply-all': '&#xe60b;',
		'icon-forward': '&#xe60c;',
		'icon-user': '&#xe60d;',
		'icon-users': '&#xe60e;',
		'icon-user-add': '&#xe60f;',
		'icon-vcard': '&#xe610;',
		'icon-export': '&#xe611;',
		'icon-location': '&#xe612;',
		'icon-map': '&#xe613;',
		'icon-compass': '&#xe614;',
		'icon-location-arrow': '&#xe615;',
		'icon-target': '&#xe616;',
		'icon-share': '&#xe617;',
		'icon-sharable': '&#xe618;',
		'icon-heart': '&#xe619;',
		'icon-heart-outline': '&#xe61a;',
		'icon-star': '&#xe61b;',
		'icon-star-outline': '&#xe61c;',
		'icon-thumbsup': '&#xe61d;',
		'icon-thumbsdown': '&#xe61e;',
		'icon-chat': '&#xe61f;',
		'icon-comment': '&#xe620;',
		'icon-quote': '&#xe621;',
		'icon-house': '&#xe622;',
		'icon-popup': '&#xe623;',
		'icon-search': '&#xe624;',
		'icon-flashlight': '&#xe625;',
		'icon-printer': '&#xe626;',
		'icon-bell': '&#xe627;',
		'icon-link': '&#xe628;',
		'icon-flag': '&#xe629;',
		'icon-cog': '&#xe62a;',
		'icon-tools': '&#xe62b;',
		'icon-trophy': '&#xe62c;',
		'icon-tag': '&#xe62d;',
		'icon-camera': '&#xe62e;',
		'icon-megaphone': '&#xe62f;',
		'icon-moon': '&#xe630;',
		'icon-palette': '&#xe631;',
		'icon-leaf': '&#xe632;',
		'icon-music': '&#xe633;',
		'icon-music-note': '&#xe634;',
		'icon-new': '&#xe635;',
		'icon-graduation': '&#xe636;',
		'icon-book': '&#xe637;',
		'icon-newspaper': '&#xe638;',
		'icon-bag': '&#xe639;',
		'icon-airplane': '&#xe63a;',
		'icon-lifebuoy': '&#xe63b;',
		'icon-eye': '&#xe63c;',
		'icon-clock': '&#xe63d;',
		'icon-microphone': '&#xe63e;',
		'icon-calendar': '&#xe63f;',
		'icon-bolt': '&#xe640;',
		'icon-thunder': '&#xe641;',
		'icon-droplet': '&#xe642;',
		'icon-cd': '&#xe643;',
		'icon-briefcase': '&#xe644;',
		'icon-air': '&#xe645;',
		'icon-hourglass': '&#xe646;',
		'icon-gauge': '&#xe647;',
		'icon-language': '&#xe648;',
		'icon-network': '&#xe649;',
		'icon-key': '&#xe64a;',
		'icon-battery': '&#xe64b;',
		'icon-bucket': '&#xe64c;',
		'icon-magnet': '&#xe64d;',
		'icon-drive': '&#xe64e;',
		'icon-cup': '&#xe64f;',
		'icon-rocket': '&#xe650;',
		'icon-brush': '&#xe651;',
		'icon-suitcase': '&#xe652;',
		'icon-cone': '&#xe653;',
		'icon-earth': '&#xe654;',
		'icon-keyboard': '&#xe655;',
		'icon-browser': '&#xe656;',
		'icon-publish': '&#xe657;',
		'icon-progress-full': '&#xe658;',
		'icon-progress-two-thirds': '&#xe659;',
		'icon-progress-one-third': '&#xe65a;',
		'icon-progress-empty': '&#xe65b;',
		'icon-sun': '&#xe65c;',
		'icon-sun-bright': '&#xe65d;',
		'icon-adjust': '&#xe65e;',
		'icon-code': '&#xe65f;',
		'icon-screen': '&#xe660;',
		'icon-infinity': '&#xe661;',
		'icon-light-bulb': '&#xe662;',
		'icon-creditcard': '&#xe663;',
		'icon-database': '&#xe664;',
		'icon-voicemail': '&#xe665;',
		'icon-clipboard': '&#xe666;',
		'icon-cart': '&#xe667;',
		'icon-box': '&#xe668;',
		'icon-ticket': '&#xe669;',
		'icon-rss': '&#xe66a;',
		'icon-signal': '&#xe66b;',
		'icon-thermometer': '&#xe66c;',
		'icon-droplets': '&#xe66d;',
		'icon-uneven-grid': '&#xe66e;',
		'icon-statistics': '&#xe66f;',
		'icon-pie': '&#xe670;',
		'icon-bars': '&#xe671;',
		'icon-graph': '&#xe672;',
		'icon-lock': '&#xe673;',
		'icon-lock-open': '&#xe674;',
		'icon-logout': '&#xe675;',
		'icon-login': '&#xe676;',
		'icon-checkmark': '&#xe677;',
		'icon-cross': '&#xe678;',
		'icon-minus-square': '&#xe679;',
		'icon-plus-sqaure': '&#xe67a;',
		'icon-cross-square': '&#xe67b;',
		'icon-minus-round': '&#xe67c;',
		'icon-plus-round': '&#xe67d;',
		'icon-cross-round': '&#xe67e;',
		'icon-minus': '&#xe67f;',
		'icon-plus': '&#xe680;',
		'icon-erase': '&#xe681;',
		'icon-blocked': '&#xe682;',
		'icon-info': '&#xe683;',
		'icon-info-round': '&#xe684;',
		'icon-question': '&#xe685;',
		'icon-help': '&#xe686;',
		'icon-warning': '&#xe687;',
		'icon-cycle': '&#xe688;',
		'icon-cw': '&#xe689;',
		'icon-ccw': '&#xe68a;',
		'icon-shuffle': '&#xe68b;',
		'icon-arrow': '&#xe68c;',
		'icon-return': '&#xe68d;',
		'icon-retweet': '&#xe68e;',
		'icon-loop': '&#xe68f;',
		'icon-history': '&#xe690;',
		'icon-back': '&#xe691;',
		'icon-switch': '&#xe692;',
		'icon-list': '&#xe693;',
		'icon-add-to-list': '&#xe694;',
		'icon-layout': '&#xe695;',
		'icon-menu-list': '&#xe696;',
		'icon-text': '&#xe697;',
		'icon-text-dark': '&#xe698;',
		'icon-document': '&#xe699;',
		'icon-docs': '&#xe69a;',
		'icon-landscape': '&#xe69b;',
		'icon-pictures': '&#xe69c;',
		'icon-video': '&#xe69d;',
		'icon-music3': '&#xe69e;',
		'icon-folder': '&#xe69f;',
		'icon-archive': '&#xe6a0;',
		'icon-trash': '&#xe6a1;',
		'icon-outbox': '&#xe6a2;',
		'icon-inbox': '&#xe6a3;',
		'icon-disk': '&#xe6a4;',
		'icon-install': '&#xe6a5;',
		'icon-cloud': '&#xe6a6;',
		'icon-upload': '&#xe6a7;',
		'icon-bookmark': '&#xe6a8;',
		'icon-bookmarks': '&#xe6a9;',
		'icon-open-book': '&#xe6aa;',
		'icon-play': '&#xe6ab;',
		'icon-pause': '&#xe6ac;',
		'icon-record': '&#xe6ad;',
		'icon-stop': '&#xe6ae;',
		'icon-next': '&#xe6af;',
		'icon-previous': '&#xe6b0;',
		'icon-first': '&#xe6b1;',
		'icon-last': '&#xe6b2;',
		'icon-resize-enlarge': '&#xe6b3;',
		'icon-resize-shrink': '&#xe6b4;',
		'icon-volume': '&#xe6b5;',
		'icon-sound': '&#xe6b6;',
		'icon-mute': '&#xe6b7;',
		'icon-flow-cascade': '&#xe6b8;',
		'icon-flow-branch': '&#xe6b9;',
		'icon-flow-tree': '&#xe6ba;',
		'icon-flow-line': '&#xe6bb;',
		'icon-flow-parallel': '&#xe6bc;',
		'icon-arrow-left': '&#xe6bd;',
		'icon-arrow-down': '&#xe6be;',
		'icon-arrow-up-upload': '&#xe6bf;',
		'icon-arrow-right': '&#xe6c0;',
		'icon-arrow-left-med': '&#xe6c1;',
		'icon-arrow-down-med': '&#xe6c2;',
		'icon-arrow-up': '&#xe6c3;',
		'icon-arrow-right-med': '&#xe6c4;',
		'icon-arrow-left-circle': '&#xe6c5;',
		'icon-arrow-down-circle': '&#xe6c6;',
		'icon-arrow-up-circle': '&#xe6c7;',
		'icon-arrow-right-circle': '&#xe6c8;',
		'icon-arrow-left-point': '&#xe6c9;',
		'icon-arrow-down-point': '&#xe6ca;',
		'icon-arrow-up-point': '&#xe6cb;',
		'icon-arrow-right-point': '&#xe6cc;',
		'icon-carret-left': '&#xe6cd;',
		'icon-carret-down': '&#xe6ce;',
		'icon-carret-up': '&#xe6cf;',
		'icon-carret-right': '&#xe6d0;',
		'icon-carret-left-thin': '&#xe6d1;',
		'icon-carret-down-thin': '&#xe6d2;',
		'icon-carret-up-thin': '&#xe6d3;',
		'icon-carret-right-thin': '&#xe6d4;',
		'icon-carret-left-tall': '&#xe6d5;',
		'icon-carret-down-tall': '&#xe6d6;',
		'icon-carret-up-tall': '&#xe6d7;',
		'icon-carret-right-tall': '&#xe6d8;',
		'icon-arrow-left-thin': '&#xe6d9;',
		'icon-arrow-down-thin': '&#xe6da;',
		'icon-arrow-up-thin': '&#xe6db;',
		'icon-arrow-right-thin': '&#xe6dc;',
		'icon-menu': '&#xe6dd;',
		'icon-ellipsis': '&#xe6de;',
		'icon-dots': '&#xe6df;',
		'icon-dot': '&#xe6e0;',
		'icon-cc': '&#xe6e1;',
		'icon-cc-by': '&#xe6e2;',
		'icon-cc-nc': '&#xe6e3;',
		'icon-cc-nc-eu': '&#xe6e4;',
		'icon-cc-nc-jp': '&#xe6e5;',
		'icon-cc-sa': '&#xe6e6;',
		'icon-cc-nd': '&#xe6e7;',
		'icon-cc-pd': '&#xe6e8;',
		'icon-cc-zero': '&#xe6e9;',
		'icon-cc-share': '&#xe6ea;',
		'icon-cc-share-dark': '&#xe6eb;',
		'icon-danielbruce': '&#xe6ec;',
		'icon-github': '&#xe6ee;',
		'icon-github-round': '&#xe6ef;',
		'icon-flickr': '&#xe6f0;',
		'icon-flickr-round': '&#xe6f1;',
		'icon-vimeo': '&#xe6f2;',
		'icon-vimeo-round': '&#xe6f3;',
		'icon-twitter': '&#xe6f4;',
		'icon-twitter-round': '&#xe6f5;',
		'icon-facebook': '&#xe6f6;',
		'icon-facebook-round': '&#xe6f7;',
		'icon-facebook-square': '&#xe6f8;',
		'icon-googleplus': '&#xe6f9;',
		'icon-googleplus-round': '&#xe6fa;',
		'icon-pinterest': '&#xe6fb;',
		'icon-pinterest-round': '&#xe6fc;',
		'icon-tumblr': '&#xe6fd;',
		'icon-tumblr-round': '&#xe6fe;',
		'icon-linkedin': '&#xe6ff;',
		'icon-linkedin-round': '&#xe700;',
		'icon-dribbble': '&#xe701;',
		'icon-dribbble-round': '&#xe702;',
		'icon-stumbleupon': '&#xe703;',
		'icon-stumbleupon-round': '&#xe704;',
		'icon-lastfm': '&#xe705;',
		'icon-lastfm-round': '&#xe706;',
		'icon-rdio': '&#xe707;',
		'icon-rdio-round': '&#xe708;',
		'icon-spotify': '&#xe709;',
		'icon-qq': '&#xe70b;',
		'icon-instagram': '&#xe70c;',
		'icon-instagram-round': '&#xe725;',
		'icon-dropbox': '&#xe70d;',
		'icon-evernote': '&#xe70e;',
		'icon-flattr': '&#xe70f;',
		'icon-skype': '&#xe710;',
		'icon-skype-round': '&#xe711;',
		'icon-renren': '&#xe712;',
		'icon-sina-weibo': '&#xe713;',
		'icon-paypal': '&#xe714;',
		'icon-picasa': '&#xe715;',
		'icon-soundcloud': '&#xe716;',
		'icon-mixi': '&#xe717;',
		'icon-behance': '&#xe718;',
		'icon-circles': '&#xe719;',
		'icon-vk': '&#xe71a;',
		'icon-smashing': '&#xe71b;',
		'icon-youtube': '&#xe6ed;',
		'icon-youtube-round': '&#xe726;',
		'icon-lassosoft': '&#xe720;',
		'icon-treefrog': '&#xe721;',
		'icon-amphibious': '&#xe722;',
		'icon-mergini': '&#xe723;',
		'icon-leap': '&#xe724;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());