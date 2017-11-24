$(document).ready(function(){
	console.log("DOM is ready!")

	$('#border-wait-form').submit(function(event){
		event.preventDefault();
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

		console.log("Pika kufitare: ", pikaKufitare, "Hyrje Min:", hyrjeMinMinuta,"Hyrje Max:", hyrjeMaxMinuta, 
			"Dalje Min:", daljeMinMinuta,"Dalje max:", daljeMaxMinuta, "Hyrje Min:", hyrjeMinMetra, "Hyrje Max:",
			 hyrjeMaxMetra, "Dalje Min:", daljeMinMetra, "Dalje Max:", daljeMaxMetra);

	});
});
