const formulario = document.getElementById('formulario');
const resultadoDiv = document.getElementById('resultado');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const edad = document.getElementById('edad').value;
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  const nota3 = parseFloat(document.getElementById('nota3').value);
  const nota4 = parseFloat(document.getElementById('nota4').value);
  const nota5 = parseFloat(document.getElementById('nota5').value);
  
  const promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
  
  let apto = false;
  if (promedio >= 8) {
    apto = true;
  }
  
  if (apto) {
    resultadoDiv.innerHTML = '<p>¡Felicitaciones! Usted es apto para la beca.</p>';
  } else {
    resultadoDiv.innerHTML = '<p>Lo sentimos, no cumple con los requisitos para la beca.</p>';
  }
  
  const datos = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    nota1: nota1,
    nota2: nota2,
    nota3: nota3,
    nota4: nota4,
    nota5: nota5,
    promedio: promedio,
    apto: apto
  };
  console.log(datos);
});

Swal.fire('Toda la informacion que ingrese sera registrada')