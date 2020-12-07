const api = require('ep_etherpad-lite/node/db/API');
const settings = require('ep_etherpad-lite/node/utils/Settings').ep_action_chat || {};
const captureWebsite = require('capture-website');
const fs = require('fs');
const AWS = require('aws-sdk');

exports.padcapture = function (hookName, data, callback) {
	const padId = data.pad.id;
	console.log('++++++++++++++++++++++++++',padId,'+++++++++++++++++++++');
};
