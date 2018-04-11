
import { database, initializeApp } from "firebase";
import { ADICIONAR } from "./acoes";
import store from "./dados";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCvAq-pNLvS0jbe9U-tmyJirh3HMh_JjPk",
    authDomain: "bpmos-3b4e0.firebaseapp.com",
    databaseURL: "https://bpmos-3b4e0.firebaseio.com",
    projectId: "bpmos-3b4e0",
    storageBucket: "bpmos-3b4e0.appspot.com",
    messagingSenderId: "860770826059",
};

initializeApp(config);

const tarefas = database().ref("/tarefas");
tarefas.on("value", (snapshot) => {
    if (snapshot && snapshot != null) {
        const l = snapshot.val();
        for (const id of Object.keys(l)) {
            const v = l[id];
            if (v) {
                store.dispatch({ type: ADICIONAR, texto: v.texto });
            }
        }
    }
});
