self.onmessage = function (event) {
	var data = event.data;
	data = data + 1;
	self.postMessage(data);
}