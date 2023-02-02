

function capturar (){
	
	function Persona(Nombre,Email,Telefono){
		this.nombre = nombre;
		this.email = email;
		this.telefono = telefono;
	}
	var nombreCapturar = document.getElementById("nombre").value;
	var emailCapturar = document.getElementById("email").value;
	var telefonoCapturar = document.getElementById("telefono").value;

	nuevoSujeto = new Persona (nombreCapturar, emailCapturar, telefonoCapturar);
	agregar();
	
	Swal.fire(
		'Excelente!',
		'Has enviado tu informacion',
		'success'
	  )

}

var baseDatos = [];
function agregar() {
	baseDatos.push(nuevoSujeto);
	console.log(baseDatos);

}