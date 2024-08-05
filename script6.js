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
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function cadastrar(){
    var auth = null;
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value,
    document.getElementById("password").value)
    .then(function(user){
    alert("Cadastrado com sucesso");
    auth = user;
    }).catch(function(error){
    alert("Falha ao cadastrar");
    });
    }
    function login(){
    var auth = null;
    firebase.auth().signInWithEmailAndPassword(document.getElementById("email").value, document.getElementById("password").value)
    .then(function(user){
    alert("Logado com sucesso");
    auth = user;
    }).catch(function(error){
    alert("Falha ao logar");
    });
    }