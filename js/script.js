$(document).ready(function(){
	//var datatimeNow = new Date('#datetimeNow');
	console.log("DOM is ready!")

	$('#border-wait-form').submit(function(event){
		event.preventDefault();
		var datetimeNow = $('#datetime-now').val();
		//HyrjeDalje-minuta
		var pikaKufitare = $('#pika-kufitare').val();
		var hyrjeMinMinuta = $('#hyrje-min-minuta').val();
		var hyrjeMaxMinuta = $('#hyrje-max-minuta').val();
		var daljeMinMinuta = $('#dalje-min-minuta').val();
		var daljeMaxMinuta = $('#dalje-max-minuta').val();
		//HyrjeDalje-metra
		var hyrjeMinMetra = $('#hyrje-min-metra').val();
		var hyrjeMaxMetra = $('#hyrje-max-metra').val();
		var daljeMinMetra = $('#dalje-min-metra').val();
		var daljeMaxMetra = $('#dalje-max-metra').val();
		
		var dataJson = {};
		dataJson["DataTime"] = new Date();
		dataJson["pikaKufitare"] = pikaKufitare;
		dataJson["hyrjeMinMinuta"] = parseInt(hyrjeMinMinuta);
		dataJson["hyrjeMaxMinuta"] = parseInt(hyrjeMaxMinuta);
		dataJson["daljeMinMinuta"] = parseInt(daljeMinMinuta);

		dataJson["daljeMaxMinuta"] = parseInt(daljeMaxMinuta);
		dataJson["hyrjeMinMetra"] = parseInt(hyrjeMinMetra);
		dataJson["daljeMinMetra"] = parseInt(daljeMinMetra);
		dataJson["daljeMaxMetra"] = parseInt(daljeMaxMetra);
		
		console.log(dataJson);
	});
});
