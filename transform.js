// Nuestro cliente tiene un array de datos y nos a pedido que saquemos la siguiente informacion. El listado de los dessarrolladores que tengan como habilidad "JavaScript" y el listado de los proyectos en el que sus desarrolladores trabajan. Estos son los datos:



const datos = [
{
    id:1,
    nombre: 'Juan',
    habilidades: ['JavaScript', 'HTML', 'CSS'],
    proyectos: [
        {id: 1, nombre: 'Proyecto 1' },
        {id: 2, nombre: 'Proyecto 2' }
    ]
},
{
    id: 2,
    nombre: 'Maria',
    habilidades:['python', 'SQL', 'Django' ],
    proyectos: [

        {id: 3, nombre: 'Proyecto 3'},
        {id: 4, nombre: 'Proyecto 4'},
    ]
},
{
    id: 3,
    nombre: 'Pedro',
    habilidades: ['Java', 'Spring', 'Hibernate'],
    proyectos: [
        {id: 5, nombre: 'Proyecto 5' },
        {id: 6, nombre: 'Proyecto 6' }
    ]
},
];



const desarrolladoresJavascript = [];
const nombresProyectos = [];

for (const keepcoder of datos) {
    if (keepcoder.habilidades.includes('JavaScript')) {
        desarrolladoresJavascript.push(keepcoder);
    }

    for (const proyecto of keepcoder.proyectos) {
        nombresProyectos.push(proyecto.nombre);
    }
}

console.log("Desarrolladores con habilidad en JavaScript:", desarrolladoresJavascript);
console.log("Nombres de todos los proyectos:", nombresProyectos);