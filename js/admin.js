import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("form"),
    feedback = document.getElementById("feedbacks");

const uploadNew = async () => {
    const url = form.url.value;
    console.log(url);
    if (url) {
        //It kind a feedback for me... I don't know if this function is ok or not
        feedback.innerText = "Tu noticia se esta publicando, espere un momento..."

        try {
            await addDoc(collection(db, "link"), {
                url,
            });
            feedback.innerText = "¡Tu link ha sido publicada exitosamente!";
        } catch (e) {
            feedback.innerText = "¡Tu link no se ha sido publicada!, vuelve a intentarlo";
        }
    } else {
        alert("Completa los datos");
    }
}

form.addEventListener("submit", e => {
    e.preventDefault();
    uploadNew();
});