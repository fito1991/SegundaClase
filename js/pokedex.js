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

	nombrePokemon.textContent = charizard.nombre;
	HP.textContent = charizard.vida;
	attack.textContent = charizard.ataque;
	defense.textContent = charizard.defensa;
	type.textContent = charizard.tipo;
	level.textContent = charizard.nivel;

	image = document.getElementById("image");
	image.src="img/char.png";

	cry("http://images.wikia.com/es.pokemon/images/archive/5/5e/20140731190340%21Grito_de_Charizard.ogg");
}

function pidgeot()
{
	var pidgeot = new Pokemon ("Pidgeot", 111, 74, 69, "Normal/Flying", 37);

	nombrePokemon.textContent = pidgeot.nombre;
	HP.textContent = pidgeot.vida;
	attack.textContent = pidgeot.ataque;
	defense.textContent = pidgeot.defensa;
	type.textContent = pidgeot.tipo;
	level.textContent = pidgeot.nivel;

	image = document.getElementById("image");
	image.src="img/pi.png";

	cry("http://images.wikia.com/es.pokemon/images/archive/7/7a/20140806043548%21Grito_de_Pidgeot.ogg");
}

function nidoking()
{
	var nidoking = new Pokemon ("Nidoking", 129, 96, 82, "Poison/Ground", 40);

	nombrePokemon.textContent = nidoking.nombre;
	HP.textContent = nidoking.vida;
	attack.textContent = nidoking.ataque;
	defense.textContent = nidoking.defensa;
	type.textContent = nidoking.tipo;
	level.textContent = nidoking.nivel;
	image = document.getElementById("image");
	image.src="img/nido.png";

	cry("http://images.wikia.com/es.pokemon/images/2/26/Grito_de_Nidoking.ogg");
}

function raichu()
{
	var raichu = new Pokemon ("Raichu", 111, 96, 53, "Electrc", 40);

	nombrePokemon.textContent = raichu.nombre;
	HP.textContent = raichu.vida;
	attack.textContent = raichu.ataque;
	defense.textContent = raichu.defensa;
	type.textContent = raichu.tipo;
	level.textContent = raichu.nivel;

	image = document.getElementById("image");
	image.src="img/rai.png";

	cry("http://images.wikia.com/es.pokemon/images/archive/5/55/20140801135915%21Grito_de_Raichu.ogg");
}

function gloom()
{
	var gloom = new Pokemon ("Gloom", 102, 59, 65, "Grass/Poison", 37);

	nombrePokemon.textContent = gloom.nombre;
	HP.textContent = gloom.vida;
	attack.textContent = gloom.ataque;
	defense.textContent = gloom.defensa;
	type.textContent = gloom.tipo;
	level.textContent = gloom.nivel;

	image = document.getElementById("image");
	image.src="img/gloom.png";

	cry("http://images.wikia.com/es.pokemon/images/0/0c/Grito_de_Gloom.ogg");
}

function lapras()
{
	var lapras = new Pokemon ("Lapras", 100, 48, 55, "Water/Ice", 25);

	nombrePokemon.textContent = lapras.nombre;
	HP.textContent = lapras.vida;
	attack.textContent = lapras.ataque;
	defense.textContent = lapras.defensa;
	type.textContent = lapras.tipo;
	level.textContent = lapras.nivel;

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
