// import mainFirebase from "./index.js";
// import { ref } from 'vue' 
// import { collection, getDocs } from "firebase/firestore";

// const { db } = mainFirebase();


// const downloadCollection = (collectionName) => {
    
//     let documents = ref([]);
//     let error = ref('');

    
//     const documentsRef = collection(db, 'articles');
    

//     const downloadDocuments = async () => {
//         try {
//             const docs = await getDocs(documentsRef);
//             documents.value = docs;      
//             articlesLatest()

//         } catch (err) {
//             error.value = err.message;
//         }
//     }
    

//     return { documents, error, downloadDocuments }
// }

// export default downloadCollection