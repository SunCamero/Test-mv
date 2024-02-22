/**
 * Objeto que guarda configuraciones del proyecto
 * Ej. Urls, versión, ó variables globales en general, idiomas
 * @type {Object}
 */
window.AppConfig = {
	tp_backend:{
		//baseKanUrl: "https://iptvservices.totalplay.com.mx", //Producción
		 baseKanUrl: "http://10.213.12.62", //QA
		//baseKanUrl: "http://10.1.0.102", //Stage
		//key:       "1PTVv3.0M1ddl3w4r3-tpngTpsg"
		key:       "t0ta1ak6hd8hjf61"
	},

	tp_kan_paths:{
		profile: "/kan-profile/",
		sms:     "/kan-auth/",
		billing: "/kan-billing/",
	},
	profile: null,
	time_to_block: null,
	counter: 0,
	mac_address: null,
	main_container_selector: "#mainContainer",
	env: 'Q', //
	//Archivo donde guardo el json para futuras configuraciones
	local_settings_file: "/flash/local_settings",
	//Archivo donde guardo el token para hacer el proceso de login
	token_login_file: "/flash/token_login_file",
	credit_info: null,
	_profile: null,
	benefits: null,
	name_profile: null
};