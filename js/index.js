import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getFirestore, doc, getDocs, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const link = document.getElementById("link");

const getAllNews = async () => {
    const collectionRef = collection(db, "link");
    const { docs } = await getDocs(collectionRef);
    let link_array = docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        }
    })
    console.log(link_array[0].url);
    link.href= link_array[0].url;
    //link.setAttribute("href", link_array[0].url);
};

getAllNews();
