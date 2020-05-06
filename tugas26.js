function perintahcari(){
	var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
	var angka2 = isFinite(angka);
	// console.log(angka2);

	if (angka2 == false)
		angka.forEach(function (item){
		console.log("Angka", item, "NOT Infinity.")});

	else 
		angka.forEach(function (item){
		console.log("Angka", item, "Infinity.")});
	
}

perintahcari()







// C:\Users\USER\Documents\JS\javascript>node tugas26.js
// Angka 2 NOT Infinity.
// Angka 39 NOT Infinity.
// Angka 76 NOT Infinity.
// Angka 50 NOT Infinity.
// Angka 9 NOT Infinity.
// Angka 7 NOT Infinity.
// Angka 41 NOT Infinity.
// Angka 2 NOT Infinity.
// Angka 24 NOT Infinity.
// Angka 1 NOT Infinity.
// Angka 16 NOT Infinity.