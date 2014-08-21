var ch, pg, nk, ra, gl, lp, image,audio;

audio = document.createElement("audio");

function cry(src)
{
	audio.src= src;
	audio.play();
}

function Pokemon(n,v,a,d,t,l)
{
	// this.grito = g;
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.defensa = d;
	this.tipo = t;
	this.nivel = l;
	// this.gritar = function ()
	// {
	// 	alert(this.grito);
	// }
}

function charizard()
{
	var charizard = new Pokemon ("Charizard", 116, 83, 81, "Fire/Flying", 40);

	nombrePokemon.innerText = charizard.nombre;
	HP.innerText = charizard.vida;
	attack.innerText = charizard.ataque;
	defense.innerText = charizard.defensa;
	type.innerText = charizard.tipo;
	level.innerText = charizard.nivel;

	image = document.getElementById("image");
	image.src="img/char.png";

	cry("http://images.wikia.com/es.pokemon/images/archive/5/5e/20140731190340%21Grito_de_Charizard.ogg");
}

function pidgeot()
{
	var pidgeot = new Pokemon ("Pidgeot", 111, 74, 69, "Normal/Flying", 37);

	nombrePokemon.innerText = pidgeot.nombre;
	HP.innerText = pidgeot.vida;
	attack.innerText = pidgeot.ataque;
	defense.innerText = pidgeot.defensa;
	type.innerText = pidgeot.tipo;
	level.innerText = pidgeot.nivel;

	image = document.getElementById("image");
	image.src="img/pi.png";

	cry("http://images.wikia.com/es.pokemon/images/archive/7/7a/20140806043548%21Grito_de_Pidgeot.ogg");
}

function nidoking()
{
	var nidoking = new Pokemon ("Nidoking", 129, 96, 82, "Poison/Ground", 40);

	nombrePokemon.innerText = nidoking.nombre;
	HP.innerText = nidoking.vida;
	attack.innerText = nidoking.ataque;
	defense.innerText = nidoking.defensa;
	type.innerText = nidoking.tipo;
	level.innerText = nidoking.nivel;
	image = document.getElementById("image");
	image.src="img/nido.png";

	cry("http://images.wikia.com/es.pokemon/images/2/26/Grito_de_Nidoking.ogg");
}

function raichu()
{
	var raichu = new Pokemon ("Raichu", 111, 96, 53, "Electrc", 40);

	nombrePokemon.innerText = raichu.nombre;
	HP.innerText = raichu.vida;
	attack.innerText = raichu.ataque;
	defense.innerText = raichu.defensa;
	type.innerText = raichu.tipo;
	level.innerText = raichu.nivel;

	image = document.getElementById("image");
	image.src="img/rai.png";

	cry("http://images.wikia.com/es.pokemon/images/archive/5/55/20140801135915%21Grito_de_Raichu.ogg");
}

function gloom()
{
	var gloom = new Pokemon ("Gloom", 102, 59, 65, "Grass/Poison", 37);

	nombrePokemon.innerText = gloom.nombre;
	HP.innerText = gloom.vida;
	attack.innerText = gloom.ataque;
	defense.innerText = gloom.defensa;
	type.innerText = gloom.tipo;
	level.innerText = gloom.nivel;

	image = document.getElementById("image");
	image.src="img/gloom.png";

	cry("http://images.wikia.com/es.pokemon/images/0/0c/Grito_de_Gloom.ogg");
}

function lapras()
{
	var lapras = new Pokemon ("Lapras", 100, 48, 55, "Water/Ice", 25);

	nombrePokemon.innerText = lapras.nombre;
	HP.innerText = lapras.vida;
	attack.innerText = lapras.ataque;
	defense.innerText = lapras.defensa;
	type.innerText = lapras.tipo;
	level.innerText = lapras.nivel;

	image = document.getElementById("image");
	image.src="img/la.png";

	cry("http://images.wikia.com/es.pokemon/images/e/ea/Grito_de_Lapras.ogg");
}

function mostrar()
{
	
	if(ch = document.getElementById("ch"))
	{
		ch.addEventListener("click", charizard);
	}
	if(pg = document.getElementById("pg"))
	{
		pg.addEventListener("click", pidgeot);
	}
	if(nk = document.getElementById("nk"))
	{
		nk.addEventListener("click", nidoking);
	}
	if(ra = document.getElementById("ra"))
	{
		ra.addEventListener("click", raichu);
	}
	if(gl = document.getElementById("gl"))
	{
		gl.addEventListener("click", gloom);
	}
	if(lp = document.getElementById("lp"))
	{
		lp.addEventListener("click", lapras);
	}
}
