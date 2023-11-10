	var updateData = {"visitorLoginState":"No","visitorId":"1jgflo183503aorbc1q3dflom0","visitorSessionID":"1jgflo183503aorbc1q3dflom0","visitorType":"new customer","visitorLifetimeValue":0};

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
