// app.js

var base_url = "https://api.spark.io/v1/devices/";

var Robot = function(deviceId, accessToken, control) {
	this.deviceId = deviceId;
	this.accessToken = accessToken;
	this.control_param = control;
};

Robot.prototype.distance_url = function() {
	return base_url + this.deviceId + "/distance";
};

Robot.prototype.control_url = function() {
	return base_url + this.deviceId + "/control";
};

function setControl(control) {
	var myRobot = new Robot($('#device_id').val(), $('#access_token').val(), control);
	console.log(myRobot);

	$.ajax({
		url: myRobot.control_url(),
		type: 'POST',
		data: {
        	arg: myRobot.control_param,
        	access_token: myRobot.accessToken
        },
		error: function() { Materialize.toast('Request Failed!', 4000); },
		success: function(data) {
			console.log(data);
			Materialize.toast(myRobot.control_param, 4000);
		}
	});
};
