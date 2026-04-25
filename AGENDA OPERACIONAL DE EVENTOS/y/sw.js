import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, onValue, push, set } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

const firebaseConfig = {
  // ... suas chaves que você já tem no print anterior ...
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const eventosRef = ref(db, 'eventos');

// FUNÇÃO DE TEMPO REAL:
onValue(eventosRef, (snapshot) => {
    const dados = snapshot.val();
    if (dados) {
        console.log("Dados atualizados recebidos!");
        // Chame aqui a sua função que limpa a lista no HTML e desenha de novo
        renderizarEventos(dados); 
    }
});