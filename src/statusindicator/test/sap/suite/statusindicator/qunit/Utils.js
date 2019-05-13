sap.ui.define([

], function () {
	"use strict";

	var Utils = {
		getUrlId: function (sUrl) {
			var oMatches = sUrl.match(/^url\("?#([^"\)]+)"?\)$/);
			if (oMatches && oMatches[1]) {
				return oMatches[1];
			} else {
				return null;
			}
		}
	};
	return Utils;
});
