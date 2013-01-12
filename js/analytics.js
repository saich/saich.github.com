/*jslint browser:true, nomen:true */

/**
 * @constructor
 * @param {string} account The full account ID (e.g. UA-65432-1) for the tracker object.
 */
function GoogleAnalytics(account) {
	this.init_(account);
}

/**
 * @private
 */
GoogleAnalytics.prototype.init_ = function (account) {
	window._gaq = window._gaq || [];
	window._gaq.push(['_setAccount', account]);

	// Insert the script..
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
    ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
};

GoogleAnalytics.prototype.trackPageView = function () {
	window._gaq.push(['_trackPageview']);
};

GoogleAnalytics.prototype.event = function (category, action, label, value, noninteraction) {
	window._gaq.push(['_trackEvent', category, action, label, value, noninteraction]);
};

/**
 * Track an exception occured in the application.
 * @param {string} msg Description of the error string
 * @return {undefined}
 */
GoogleAnalytics.prototype.error = function (msg) {
	this.event('Exceptions', 'Application', msg, null, true);
};

/**
 * Sets the sample rate (in percentage) on which the site speed will be tracked. (Upper limit is 10k per day)
 * This function must be called before trackPageView for this function to be effective.
 * @param {number} rate Sample rate in percentage
 * @return {undefined}
 */
GoogleAnalytics.prototype.setSiteSpeedSampleRate = function (rate) {
	window._gaq.push(['_setSiteSpeedSampleRate', rate]);
};

/***********************************************************************/

var tracker = new GoogleAnalytics("UA-4465434-4");
tracker.setSiteSpeedSampleRate(100);
tracker.trackPageView();

$('a').bind('click', function (ev) {
	tracker.event("Links", "LinkClick", this.href, undefined, false);
});

window.onerror = function (message, file, line) {
	var msg = '[' + file + ' (' + line + ')] ' + message;
	tracker.error(msg);
};
