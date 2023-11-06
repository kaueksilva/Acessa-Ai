	var updateData = {"visitorLoginState":"No","visitorId":"dspna58m8uf400bo3pq7qlb3m4","visitorSessionID":"dspna58m8uf400bo3pq7qlb3m4","visitorType":"new customer","visitorLifetimeValue":0};

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
