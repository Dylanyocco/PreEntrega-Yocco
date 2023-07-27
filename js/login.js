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
        alert("Usuario Incorrecto")
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
                    const name = `${user.name.first} ${user.name.last}`;
                    const email = user.email;
                    const picture = user.picture.large;
                    const userHTML = `
                        <img src="${picture}" alt="User Picture">
                        <p><strong>Nombre:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                    `;
                    userInfoDiv.innerHTML = userHTML;
                })
                .catch(error => {
                    console.error('Error al obtener el usuario aleatorio:', error);
                });
        });



