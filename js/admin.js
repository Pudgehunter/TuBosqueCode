import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getFirestore, doc, getDocs, collection, updateDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("form"),
    feedback = document.getElementById("feedbacks");


const uploadNew = async () => {
    const collectionRef = collection(db, "link");
    const { docs } = await getDocs(collectionRef);
    const docRef = doc(collectionRef, "kifpx7tEgyRJFklGQ0zB");
    const link = form.url.value;

    updateDoc(docRef, {
        url: link,
    }).then(() => {
        feedback.innerText = "¡Tu link ha sido publicada exitosamente!";
    }).catch((error) => {
        console.error("Error al actualizar los datos", error);
    });
}

form.addEventListener("submit", e => {
    e.preventDefault();
    uploadNew();
});