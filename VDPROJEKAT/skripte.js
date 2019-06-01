function addToFavorites(name) {
	if ('localStorage' in window && window.localStorage !== null) {
		var movie = localStorage.getItem(name);
		if (movie == null)
			localStorage.setItem(name, '1');
	}
}

function viewFavourites() {
	if ('localStorage' in window && window.localStorage !== null) {
		if (localStorage.getItem("deadpool") != null)
			document.getElementById("deadpool").style.display = "block";
		else
			document.getElementById("deadpool").style.display = "none";
		if (localStorage.getItem("interstellar") != null)
			document.getElementById("interstellar").style.display = "block";
		else
			document.getElementById("interstellar").style.display = "none";
		if (localStorage.getItem("dunkirk") != null)
			document.getElementById("dunkirk").style.display = "block";
		else
			document.getElementById("dunkirk").style.display = "none";
		if (localStorage.getItem("avengers") != null)
			document.getElementById("avengers").style.display = "block";
		else
			document.getElementById("avengers").style.display = "none";
		if (localStorage.getItem("coco") != null)
			document.getElementById("coco").style.display = "block";
		else
			document.getElementById("coco").style.display = "none";
	}
}

function sortByName() {
	var avengers = document.getElementById("avdiv");
	document.getElementById("first").innerHTML = avengers.innerHTML;
	avengers.style.display = "none";

	var coco = document.getElementById("ccdiv");
	document.getElementById("second").innerHTML = coco.innerHTML;
	coco.style.display = "none";

	var deadpool = document.getElementById("dpdiv");
	document.getElementById("third").innerHTML = deadpool.innerHTML;
	deadpool.style.display = "none";

	var dunkirk = document.getElementById("dkdiv");
	document.getElementById("fourth").innerHTML = dunkirk.innerHTML;
	dunkirk.style.display = "none";

	var interstellar = document.getElementById("isdiv");
	document.getElementById("fifth").innerHTML = interstellar.innerHTML;
	interstellar.style.display = "none";
}

function sortByPlace() {
	var avengers = document.getElementById("avdiv");
	document.getElementById("first").innerHTML = avengers.innerHTML;
	avengers.style.display = "none";

	var coco = document.getElementById("ccdiv");
	document.getElementById("third").innerHTML = coco.innerHTML;
	coco.style.display = "none";

	var deadpool = document.getElementById("dpdiv");
	document.getElementById("fourth").innerHTML = deadpool.innerHTML;
	deadpool.style.display = "none";

	var dunkirk = document.getElementById("dkdiv");
	document.getElementById("fifth").innerHTML = dunkirk.innerHTML;
	dunkirk.style.display = "none";

	var interstellar = document.getElementById("isdiv");
	document.getElementById("second").innerHTML = interstellar.innerHTML;
	interstellar.style.display = "none";	
}

function sortFilms() {
	if (document.getElementById("by_name").checked)
		sortByName();
	else if (document.getElementById("by_place").checked)
		sortByPlace();
	else if (document.getElementById("by_pop").checked)
		sortByPopularity();
}

function reserve(name) {
	if ('localStorage' in window && window.localStorage !== null) {
		if (name === "avengers") {
			if (localStorage.getItem("avengersTickets") != null)
				localStorage.avengersTickets = (parseInt(localStorage.avengersTickets) + 1).toString();
			else
				localStorage.setItem("avengersTickets", "1");
			document.write(localStorage.avengersTickets);
		} else if (name === "interstellar") {
			if (localStorage.getItem("interstellarTickets") != null)
				localStorage.avengersTickets = (parseInt(localStorage.interstellarTickets) + 1).toString();
			else
				localStorage.setItem("interstellarTickets", "1");
		
		} else if (name === "dunkirk") {
			if (localStorage.getItem("dunkirkTickets") != null)
				localStorage.avengersTickets = (parseInt(localStorage.dunkirkTickets) + 1).toString();
			else
				localStorage.setItem("dunkirkTickets", "1");
		} else if (name === "deadpool") {
			if (localStorage.getItem("deadpoolTickets") != null)
				localStorage.avengersTickets = (parseInt(localStorage.deadpoolTickets) + 1).toString();
			else
				localStorage.setItem("deadpoolTickets", "1");
		} else if (name === "coco") {
			if (localStorage.getItem("cocoTickets") != null)
				localStorage.avengersTickets = (parseInt(localStorage.cocoTickets) + 1).toString();
			else
				localStorage.setItem("cocoTickets", "1")
		}
	}
}

function addToFavouritesSrp(name) {
	addToFavorites(name);
	alert("Film uspesno dodat u omiljene!");
}

function addToFavouritesEng(name) {
	addToFavorites(name);
	alert("Film succesfuly added to favourites!");
}

function sortByPopularity() {
	var deadpoolTickets = (localStorage.deadpoolTickets != null) ? parseInt(localStorage.deadpoolTickets) : 0;
	var interstellarTickets = (localStorage.interstellarTickets != null) 
												? parseInt(localStorage.interstellarTickets) : 0;
	var dunkirkTickets = (localStorage.dunkirkTickets != null) ? parseInt(localStorage.dunkirkTickets) : 0;
	var avengersTickets = (localStorage.avengersTickets != null) ? parseInt(localStorage.avengersTickets) : 0;
	var cocoTickets = (localStorage.cocoTickets != null) ? parseInt(localStorage.cocoTickets) : 0;

	var redis = [{name: "dpdiv",ticks: deadpoolTickets}, {name: "isdiv", ticks: interstellarTickets}, 
	{name: "dkdiv",ticks: dunkirkTickets}, {name: "avdiv", ticks: avengersTickets}, {name: "ccdiv", ticks: cocoTickets}];

	redis.sort(function (ob1, ob2) {
		return ob1.ticks < ob2.ticks; 
	})

	document.getElementById("first").innerHTML = document.getElementById(redis[0].name).innerHTML;
	document.getElementById(redis[0].name).style.display = "none";

	document.getElementById("second").innerHTML = document.getElementById(redis[1].name).innerHTML;
	document.getElementById(redis[1].name).style.display = "none";

	document.getElementById("third").innerHTML = document.getElementById(redis[2].name).innerHTML;
	document.getElementById(redis[2].name).style.display = "none";

	document.getElementById("fourth").innerHTML = document.getElementById(redis[3].name).innerHTML;
	document.getElementById(redis[3].name).style.display = "none";

	document.getElementById("fifth").innerHTML = document.getElementById(redis[4].name).innerHTML;
	document.getElementById(redis[4].name).style.display = "none";
}

function openReserveForm(name) {
	if ('localStorage' in window && window.localStorage !== null) {
		localStorage.reserveCardFor = name;
		window.open("rezervacija.html");
	}
}

function check() {
	var name = document.forma.name.value;
	var surname = document.forma.surname.value;
	var email = document.forma.mail.value;
	var number = document.forma.number.value;

	if (name === '') {
		alert("Unesite ime!");
		return;
	} else if (surname === '') {
		alert("Unesite prezime!");
		return;
	} else if (email === '') {
		alert("Unesite email!");
		return;
	} else if (!email.match(/^\w+@\w+\.\w+$/)) {
		alert('Pogresan email!');
		return;
	} else if (number === '') {
		alert("Unesite broj!");
		return;
	} else if (!number.match(/^\d+$/)) {
		alert('Pogresan broj telefona!');
		return;
	}
	reserve(localStorage.reserveCardFor);
	alert("Uspesna rezervacija!");
	close();
}

function openReserveFormEng(name) {
	if ('localStorage' in window && window.localStorage !== null) {
		localStorage.reserveCardFor = name;
		window.open("rezervacija-eng.html");
	}
}

function checkEng() {
	var name = document.forma.name.value;
	var surname = document.forma.surname.value;
	var email = document.forma.mail.value;
	var number = document.forma.number.value;

	if (name === '') {
		alert("Enter a name");
		return;
	} else if (surname === '') {
		alert("Enter a surname!");
		return;
	} else if (email === '') {
		alert("Enter an email!");
		return;
	} else if (!email.match(/^\w+@\w+\.\w+$/)) {
		alert('Wrong email!');
		return;
	} else if (number === '') {
		alert("Enter a phone number!");
		return;
	} else if (!number.match(/^\d+$/)) {
		alert('Wrong phone number!');
		return;
	}
	reserve(localStorage.reserveCardFor);
	alert("Resevation succesful!");
	close();
}
