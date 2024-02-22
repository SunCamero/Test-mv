window.Application = (function () {
	function Application () {
	}

	Application.prototype.start = function start() {
		VideoSession.clearSessions();
		var me = this;

		var session           = Util.getSetting('session');
		AppConfig.mac_address = Util.getSetting('mac_address');

		if(!AppConfig.mac_address) {
			AppConfig.mac_address = Helpers.getMacAddressFromFile();
		}

		var client = Totalplay.getInstance();
		var token = client.getLocalToken();
		client.setSession(session);
		client.setToken(token);

		if (!session || !token) {
			client._makeTPLogin().then(function(response) {
				me.doStart();
				return;
			}.bind(this));
		}

		this.doStart();
	};


	Application.prototype.onError = function onError(err){
		var code       = err.response ? err.response.status : err.code;
		var msg        = err.response ? err.response.message : err.message;
		var suggestion = err.response ? err.response.suggestion : err.suggestion;
		ViewManager.getInstance().launchError({'code': code , 'message': msg || 'Ha ocurrido un problema.', critical: true, suggestion: suggestion || 'Algo no está funcionando. Por favor inténtalo más tarde.'});
	};

	Application.prototype.doStart = function doStart() {
		var view_manager = ViewManager.getInstance();
		ActionHandler.addCallback(view_manager.actionHandler);
		view_manager.openView(Home);
	};

	return Application;
})();

var app = new Application();

//Espero que los archivos se hayan cargado
window.addEventListener('load', function() {
	app.start();
});