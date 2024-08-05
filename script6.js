// Configuração inicial do firebase
var firebaseConfig = {

apiKey: "AIzaSyBpFrpJdlogJ1ahKKvKkd48MCt3lHOGqFs",
authDomain: "projeto-poo-43d49.firebaseapp.com",
databaseURL: "https://projeto-poo-43d49-default-rtdb.firebaseio.com",
projectId: "projeto-poo-43d49",
storageBucket: "projeto-poo-43d49.appspot.com",
messagingSenderId: "613535871184",
appId: "1:613535871184:web:0761b2bc056468f758eed5"

};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function cadastrar(){
firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value,
document.getElementById("password").value)
.then(function(user){
alert("Cadastrado com sucesso");
auth = user;
}).catch(function(error){
alert("Falha ao cadastrar" + error);
});
}
function login(){
firebase.auth().signInWithEmailAndPassword(document.getElementById("email").value, document.getElementById("password").value)
.then(function(user){
alert("Logado com sucesso");
auth = user;
window.location.href ="index.html";
}).catch(function(error){
alert("Falha ao logar" );
});
}

document.getElementById('olho').addEventListener('mousedown', function() {
    document.getElementById('password').type = 'text';
});

    document.getElementById('olho').addEventListener('mouseup', function() {
    document.getElementById('password').type = 'password';
});

  // Para que o password não fique exposto apos mover a imagem.
    document.getElementById('olho').addEventListener('mousemove', function() {
    document.getElementById('password').type = 'password';
});

