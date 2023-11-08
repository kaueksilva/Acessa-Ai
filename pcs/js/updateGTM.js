	var updateData = {"visitorLoginState":"No","visitorId":"pajh44kp8m7dfekm4on259fb57","visitorSessionID":"pajh44kp8m7dfekm4on259fb57","visitorType":"new customer","visitorLifetimeValue":0};

window.onload = function() {
	var eventObj = {
	"event": "tray.updateGTM"
	};
	updateData = jQuery.extend(updateData, {
		"siteSearchFrom": document.referrer
	});
	dataLayer.push(jQuery.extend(eventObj, updateData));

	console.info('[DataLayer] UpdateGTM executed.')
};
