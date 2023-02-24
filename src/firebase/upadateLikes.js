import mainFirebase from "./index.js";
import {
    doc,
    updateDoc
} from 'firebase/firestore';
import { ref } from 'vue';

const {
    db
} = mainFirebase();
const error = '';
const likesNum = ref();

const updateLikes = async (nameCollection, idDoc, likesNumber) => {

    likesNumber++;

    const docRef = doc(db, nameCollection, idDoc);

    try {
        const update = await updateDoc(docRef, {
            likes: likesNumber
        })


    } catch (err) {
        error = err.message;

        console.log(error)
    }
    return { likesNumber }

}

export default updateLikes;