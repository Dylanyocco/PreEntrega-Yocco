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





