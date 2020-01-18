function init() {
      	 var map = L.map('map').setView([0.0, 0.0], 1.5);
	var compactdiscsolid = L.icon({
             iconUrl: 'compact-disc-solid.svg',
             iconSize: [20, 20], // size of the icon
			 });
			 
	L.Control.textbox = L.Control.extend({
		onAdd: function(map) {
		var text = L.DomUtil.create('div');
		text.id = "info_text";
		text.innerHTML = "<h1>The 2019 Albums Map</h1>"
		return text;
		}
	});
	L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
	L.control.textbox({ position: 'bottomleft' }).addTo(map);  // info title
	

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>, Iconography <a href="https://fontawesome.com/icons/compact-disc">Font Awesome</a>, Fullscreen <a href="https://harrywood.co.uk/maps/examples/leaflet/fullscreen.view.html">Harry Wood</a>, Producer <a href=http://aniol.github.io>@aniol</a>.</h4>'
}).addTo(map); // setting map and credits


L.marker([40.624722,-73.952222],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center><b>A Pale Horse Named Death</b><br>▶️ <a href="https://apalehorsenameddeath.bandcamp.com/album/when-the-world-becomes-undone">When the World Becomes Undone</a><br>🎵 Doom Metal<br>📍 Brooklyn, New York<br><iframe style="border: 0; width: 100%; height: 40px;" src="https://bandcamp.com/EmbeddedPlayer/album=2509544766/size=small/bgcol=ffffff/linkcol=333333/transparent=true/" seamless><a href="http://apalehorsenameddeath.bandcamp.com/album/when-the-world-becomes-undone">When The World Becomes Undone by A Pale Horse Named Death</a></iframe></center>');

L.marker([43.604444,1.443889],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Aephanemer<br>▶️ <a href="https://www.youtube.com/watch?v=DNQvMYHuIUA ">Prokopton</a><br>🎵 Melodic Death Metal<br>📍 Toulouse, Occitanie<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/DNQvMYHuIUA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([18.45,-66.066667],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Avandra<br>▶️ <a href="https://blood-music.bandcamp.com/album/descender">Descender</a><br>🎵 Progressive Metal<br>📍 San Juan, Puerto Rico<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/26EvfME-skQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([50.8775, 4.704444],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>BRUTUS<br>▶️ <a href="https://wearebrutus.bandcamp.com/album/nest">Nest</a><br>🎵 Alternative<br>📍 Leuven, Belgium<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/leJSDyLJ_mE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([41.3825,2.176944 ],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>El Pony Pisador<br>▶️ <a href="https://elponypisador.bandcamp.com/album/matricular-una-galera">Matricular una Galera</a><br>🎵 Folk<br>📍 Barcelona, Spain<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/WIW29gRt6LE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([47.498889,8.728611],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center><b>Eluveitie</b><br>▶️ <a href="https://www.youtube.com/watch?v=BG6en2WyAsw">Ategnatos</a><br>🎵 Folk metal<br>📍 Winterthur, Zürich<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/BG6en2WyAsw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([52.516667,13.383333],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center><b>Faun</b><br>▶️ <a href="https://www.discogs.com/Faun-M%C3%A4rchen-Mythen/release/14407133">Märchen & Mythen</a><br>🎵 Pagan folk<br>📍 Germany, Austria, & Switzerland<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/-_el0Jdq6H8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([53.116667,18],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Interstellar<br>▶️ <a href="http://interstellarband.bandcamp.com/album/infinity">Infinity</a><br>🎵 Atmospheric Black Metal<br>📍 Bydgoszcz, Poland<br><iframe style="border: 0; width: 100%; height: 40px;" src="https://bandcamp.com/EmbeddedPlayer/album=3206396666/size=small/bgcol=ffffff/linkcol=333333/transparent=true/" seamless><a href="http://interstellarband.bandcamp.com/album/infinity">Infinity by INTERSTELLAR</a></iframe></center>');

L.marker([-33.866667,151.2],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Isotopes<br>▶️ <a href="https://www.youtube.com/watch?v=rOkaYBvrcYE">Fractures</a><br>🎵 Post Hardcore<br>📍 Sydney, Australia<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/rOkaYBvrcYE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([55, -115],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Joel Nielsen<br>▶️ <a href="https://joelnielsen.bandcamp.com/album/xen-soundtrack-definitive-edition">Xen Soundtrack (Definitive Edition)</a><br>🎵 Ambient Drum & Bass Electro Synth Soundtrack<br>📍 Alberta<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/8S22AEtiLsI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([40,-3],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Jose Andrea & Uróboros<br>▶️ <a href="https://www.youtube.com/watch?v=bcuDMvz79g8">Bienvenidos al Medievo</a><br>🎵 Folk Metal<br>📍 España<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/bcuDMvz79g8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([35.366667, -119.016667 ],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Korn<br>▶️ <a href="https://www.youtube.com/watch?v=yBQNIP4zFP4">The Nothing</a><br>🎵 Nu Metal<br>📍 Bakersfield, California<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/yBQNIP4zFP4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([34.05223,-118.24368],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Liily<br>▶️ <a href="https://www.youtube.com/watch?v=B3_z22p4e20">I Can Fool Anybody In This Town</a><br>🎵 Indie Rock<br>📍 Los Angeles, California<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/B3_z22p4e20" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([51.5,-0.116667],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Luke Sanger<br>▶️ <a href="https://shop.serein.co.uk/album/ancient-pathways">Ancient Pathways</a><br>🎵 Ambient Chill<br>📍 United Kingdom<br><iframe style="border: 0; width: 100%; height: 40px;" src="https://bandcamp.com/EmbeddedPlayer/album=3532246086/size=small/bgcol=ffffff/linkcol=333333/transparent=true/" seamless><a href="http://shop.serein.co.uk/album/ancient-pathways">Ancient Pathways by Luke Sanger</a></iframe></center>');

L.marker([51.247,-0.7598],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Matthew And The Atlas<br>▶️ <a href="https://www.youtube.com/watch?v=_6oWB_gXk44">Morning Dancer</a><br>🎵 Folk Rock<br>📍 Aldershot, Hampshire<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/_6oWB_gXk44" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([61.5,23.766667],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Medeia<br>▶️ <a href="https://www.youtube.com/watch?v=Skc66AiJ3aE">Xenosis</a><br>🎵 Melodic Death Metal<br>📍 Tampere, Finland<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/Skc66AiJ3aE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([50.061389,19.937222],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Mgła<br>▶️ <a href="https://www.youtube.com/watch?v=J03woJbLrgA">Age of Excuse</a><br>🎵 Atmosferic Black Metal<br>📍 Kraków, Poland<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/J03woJbLrgA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([59.266926,15.196522],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Millencolin<br>▶️ <a href="https://www.youtube.com/watch?v=mFS1yd9KYlM">Sos</a><br>🎵 Punk Rock<br>📍 Örebro, Sweden<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/mFS1yd9KYlM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([35.689722,139.692222],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Miyake Haruka<br>▶️ <a href="https://zankyorecord.bandcamp.com/album/miyake-haruka-blank">Blank</a><br>🎵 Acoustic Pop<br>📍 Tokyo, Japan<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/KqZ0ErKo_dE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([40.418889,-3.691944],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Mägo de Oz<br>▶️ <a href="https://www.youtube.com/watch?v=mzzhoPOyhjE">Ira Dei</a><br>🎵 Folk Hard Rock<br>📍 Madrid, España<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/mzzhoPOyhjE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([59.766667,18.7],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Månegarm<br>▶️ <a href="https://manegarm.bandcamp.com/album/fornaldarsagor">Fornaldarsagor</a><br>🎵 Viking Metal<br>📍 Norrtälje, Sweden<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/TeGyZCwdQmo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([46.519833,6.6335],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Norvhar<br>▶️ <a href="https://norvhar.bandcamp.com/album/kauna">Kauna</a><br>🎵 Viking Metal<br>📍 Lausanne, Switzerland<br><iframe style="border: 0; width: 100%; height: 40px;" src="https://bandcamp.com/EmbeddedPlayer/album=980681616/size=small/bgcol=ffffff/linkcol=333333/transparent=true/" seamless><a href="http://norvhar.bandcamp.com/album/kauna">KAUNA by Norvhar</a></iframe></center>');

L.marker([52.516667,13.388889],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Rammstein<br>▶️ <a href="https://www.youtube.com/watch?v=NeQM1c-XCDc">Rammstein</a><br>🎵 Industrial Metal<br>📍 Berlin, Germany<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/NeQM1c-XCDc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([36.165,-86.783889],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Repeat Repeat<br>▶️ <a href="https://repeatrepeat.bandcamp.com/album/glazed">Glazed</a><br>🎵 Flower Pop<br>📍 Nashville, Tennessee<br><iframe style="border: 0; width: 100%; height: 40px;" src="https://bandcamp.com/EmbeddedPlayer/album=2934923833/size=small/bgcol=ffffff/linkcol=333333/transparent=true/" seamless><a href="http://repeatrepeat.bandcamp.com/album/glazed">Glazed by *repeat repeat</a></iframe></center>');

L.marker([43.45,-79.683333],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Seaway<br>▶️ <a href="https://purenoise.bandcamp.com/album/fresh-produce">Fresh Produce</a><br>🎵 Punk Pop<br>📍 Oakville, Canada<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/JlJJmKqgeBA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([55.676111,12.568333],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Siamese<br>▶️ <a href="https://siamese.bandcamp.com/album/super-human">Super Human</a><br>🎵 Modern Alternative Metal<br>📍 Copenhagen, Denmark<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/1RDn4yz9QBs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([41.590833,-93.620833],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Slipknot<br>▶️ <a href="https://www.youtube.com/watch?v=VpATBBRajP8">We Are Not Your Kind</a><br>🎵 Nu Metal<br>📍 Des Moines, Iowa, United StatesS<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/VpATBBRajP8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([38.843056,-0.1175],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>SMOKING SOULS<br>▶️ <a href="https://www.youtube.com/watch?v=6grUh0ZfYa8">Translúcid</a><br>🎵 Pop Rock<br>📍 Pego, País Valencià<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/6grUh0ZfYa8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([51.507222,-0.1275],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>The Raven Age<br>▶️ <a href="https://www.youtube.com/watch?v=VjXjpg4zj6U">Conspiracy</a><br>🎵 Post Metal<br>📍 London, United Kingdom<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/VjXjpg4zj6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([34.05,-118.25],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Tool<br>▶️ <a href="https://www.youtube.com/watch?v=q7DfQMPmJRI">Fear Inoculum</a><br>🎵 Progressive Metal<br>📍 Los Angeles, California, United States<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/q7DfQMPmJRI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([43.418611,-80.472778],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Totaled<br>▶️ <a href="https://profoundlorerecords.bandcamp.com/album/lament">Lament</a><br>🎵 Atmospheric Black Metal<br>📍 Kitchener, Ontario<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/HJvNh3m7b3s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([25.783333,-80.216667],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Trevor Something<br>▶️ <a href="https://trevorsomething.bandcamp.com/album/escape-ep">Escape EP</a><br>🎵 XXXXXX<br>📍 Miami, Florida<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/XQYvrbiGRss" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([43.604444,1.443889],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Vauban<br>▶️ <a href="https://vauban.bandcamp.com/album/bastille">Bastille</a><br>🎵 Post Hardcore<br>📍 Toulouse, Occitanie<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/XROup8EPRKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([52.316667,5.55],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Vetus Supulcrum<br>▶️ <a href="https://vetussupulcrum.bandcamp.com/album/journey-afar">Journey Afar</a><br>🎵 Dark Ambient<br>📍 Netherlands<br><iframe style="border: 0; width: 100%; height: 40px;" src="https://bandcamp.com/EmbeddedPlayer/album=1014708416/size=small/bgcol=ffffff/linkcol=333333/transparent=true/" seamless><a href="http://vetussupulcrum.bandcamp.com/album/journey-afar">Journey Afar by Vetus Supulcrum</a></iframe></center>');

L.marker([41.881944,-87.627778],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>William Patrick Corgan<br>▶️ <a href="https://www.youtube.com/playlist?list=OLAK5uy_mxCWXEMwVRnD_26GIsCvHU5fdoM6WH190">Cotillions</a><br>🎵 Alternative Rock<br>📍 Chicago, Illinois, United States<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/OuIc8E17QKI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([48.771944,5.160278],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Windhelm<br>▶️ <a href="https://www.youtube.com/watch?v=LUjKtTBbTzs">Lugubre</a><br>🎵 Ambient Black Metal<br>📍 Bar-le-Duc, France<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/LUjKtTBbTzs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

L.marker([40.418889,-3.691944],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>Yawners<br>▶️ <a href="https://yawners.bandcamp.com/album/just-calm-down">Just Calm Down</a><br>🎵 Pop Punk<br>📍 Madrid, España<br><iframe style="border: 0; width: 100%; height: 40px;" src="https://bandcamp.com/EmbeddedPlayer/album=2824969279/size=small/bgcol=ffffff/linkcol=333333/transparent=true/" seamless><a href="http://yawners.bandcamp.com/album/just-calm-down">Just Calm Down by Yawners</a></iframe></center>');

L.marker([49.25,-123.1],{icon: compactdiscsolid}).addTo(map)
.bindPopup('<center>loscil<br>▶️ <a href="https://loscil.bandcamp.com/album/equivalents">Equivalents</a><br>🎵 Ambient Drone<br>📍 Vancouver, Canada<br><iframe width="100%" height="40px" src="https://www.youtube.com/embed/OuZHoIfzO_0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>');

}