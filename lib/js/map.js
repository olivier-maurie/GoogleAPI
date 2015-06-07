function initialize() {
	
	// variable de position
	var appart = new google.maps.LatLng(44.8387598,-0.5789287);
	var ingesup = new google.maps.LatLng(44.8540484,-0.5661828);
	
	// carte
	var mapOption = {
		center:appart,
		zoom:16,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("googleMap"),mapOption);
	
	// marqueur
	var markerAppart = new google.maps.Marker({
		position: appart,
		map: map,
		//animation:google.maps.Animation.BOUNCE,
		//icon:'marqueur.png',
		title: 'Hello World!'
	});
	markerAppart.setMap(map);
	
	// info window
	var contentWindow = "Hellow World!";
	var infoWindow = new google.maps.InfoWindow({
		content: contentWindow
	});
	google.maps.event.addListener(markerAppart, 'click', function(){
		infoWindow.open(map,markerAppart);
	});
	
	// polylines (créer un tracé de route)
	var ecole = [
		appart,
		new google.maps.LatLng(44.8387284,-0.5790709),
		new google.maps.LatLng(44.8406617,-0.5797065),
		new google.maps.LatLng(44.8407644,-0.5784258),
		new google.maps.LatLng(44.8416992,-0.5786310),
		new google.maps.LatLng(44.8418561,-0.5784486),
		new google.maps.LatLng(44.8421537,-0.5744454),
		new google.maps.LatLng(44.8437360,-0.5746010),
		new google.maps.LatLng(44.8441582,-0.5706139),
		new google.maps.LatLng(44.8465791,-0.5710511),
		new google.maps.LatLng(44.8491045,-0.5704663),
		new google.maps.LatLng(44.8528049,-0.5676071),
		new google.maps.LatLng(44.8540085,-0.5661024),
		new google.maps.LatLng(44.8541245,-0.5663143),
		ingesup
	];
	
	var traceRoute = new google.maps.Polyline({
		path: ecole,
		geodesic: false,
		strokeColor: '#406F94',
		strokeOpacity: 1.0,
		StrokeWeight:2
	});
	traceRoute.setMap(map);
	
	// polygône
	var zone = [
		new google.maps.LatLng(44.8422288,-0.5866535),
		new google.maps.LatLng(44.8422897,-0.5733497),
		new google.maps.LatLng(44.8317602,-0.5727489),
		new google.maps.LatLng(44.8316385,-0.5886276)
	];
	
	zonePolygone = new google.maps.Polygon({
		paths: zone,
		strokeColor: "#0FF000",
		strokeOpacity : 0.8,
		strokeWeight : 2,
		fillColor: "#0FF000",
		fillOpacity: 0.35
	});
	
	zonePolygone.setMap(map);
	
	// cercle
	/*var optionDist {
		center: ecole,
		radius: 500,
		strokeColor: "#7E373F",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#CA192E",
		fillOpacity: 0.35,
		map: map
	};
	
	var distEcole = new google.maps.Circle(optionDist);
	//distEcole.setMap(map);*/
}
google.maps.event.addDomListener(window, 'load', initialize);

