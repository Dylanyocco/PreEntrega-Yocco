const bbdd = [{
    usuario:'dylan',
    contraseña:'1234'},

{   usuario:'marin',
    contraseña:1234},

{   usuario:'paola',
    contraseña:'12345'}
]
const user = { 
    usuario:'',
    contraseña:'',
}

const buttonLogin = document.getElementById("login-button");
const app = document.querySelector("#app");
let isAuth = JSON.parse(localStorage.getItem("autenticacion"));
const inputs = document.querySelectorAll("input");
if(isAuth === null){
    isAuth = { isLogin : false }
}

const UsuarioCorrecto = () =>{
alert("Usuario Correcto");
}

buttonLogin.addEventListener("click",()=>{
    const usuarioEncontrado = bbdd.find(el => el.usuario === user.usuario && el.contraseña === user.contraseña)
    if(usuarioEncontrado){
        UsuarioCorrecto(usuarioEncontrado.usuario);
        localStorage.setItem("autenticacion", JSON.stringify({ name: usuarioEncontrado.usuario, isLogin: true}));        
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario Incorrecto',
        })
    }
});


inputs.forEach( (elemento) => {
    elemento.addEventListener("input",(e)=>{
        const { target } = e;
        const { name, value } = target 
        user[name] = value
    })
})

const getRandomUserButton = document.getElementById('get-random-user');
const userInfoDiv = document.getElementById('user-info');

getRandomUserButton.addEventListener('click', () => {
    fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const firstName = user.name.first;
            const lastName = user.name.last;
            const username = `${firstName.toLowerCase()}.${lastName.toLowerCase()}`;
            const password = generarContrasenaNumericaAleatoria(8);
            const picture = user.picture.large;
            const userHTML = `
                <img src="${picture}" alt="User Picture">
                <p><strong>Usuario:</strong> ${username}</p>
                <p><strong>Contraseña:</strong> ${password}</p>
            `;
            userInfoDiv.innerHTML = userHTML;
        })
        .catch(error => {
            console.error('Error al obtener el usuario aleatorio:', error);
        });
});

function generarContrasenaNumericaAleatoria(longitud) {
    let contrasena = ''; 
    for (let i = 0; i < longitud; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 10);
        contrasena += numeroAleatorio;
    }
    return contrasena;
}
