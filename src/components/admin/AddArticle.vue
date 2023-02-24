<template>
     <div class="add-article">
          <form @submit.prevent="sendData" class="w-4/5 max-w-xl">
               <div class="form-control w-full max-w-xl">
                    <label class="label">
                         <span class="label-text text-xl">Tytuł:</span>
                    </label>
                    <input v-model="data.title" required type="text" :class="{ 'input-success': data.title }" class="input input-bordered w-full max-w-xl" />
               </div>
               <div class="form-control w-full max-w-xl">
                    <label class="label">
                         <span class="label-text text-xl">Autor:</span>
                    </label>
                    <input v-model="data.author" required type="text" :class="{ 'input-success': data.author }" class="input input-bordered w-full max-w-xl" />
               </div>
               <div class="form-control w-full max-w-xl">
                    <label class="label">
                         <span class="label-text text-xl">Treść:</span>
                    </label>
                    <textarea v-model="data.content" required type="text" :class="{ 'input-success': data.content }" class="textarea textarea-bordered textarea-lg h-48"></textarea>
               </div>
               <label class="label">
                    <span class="label-text text-xl">Zdjęcie główne</span>
               </label>
               <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
               <div class="form-control w-full max-w-xl">
                    <label class="label">
                         <span class="label-text text-xl">Link do zjęcia głównego (tymczasowo):</span>
                    </label>
                    <input v-model="data.mainImg" required type="text" :class="{ 'input-success': data.mainImg }" class="input input-bordered w-full max-w-xl" />
               </div>
               <div class="form-control w-full max-w-xl">
                    <label class="label">
                         <span class="label-text text-xl">Pasmo Górskie:</span>
                    </label>
                    <input v-model="data.mountainRage" required type="text" :class="{ 'input-success': data.mountainRage }" class="input input-bordered w-full max-w-xl" />
               </div>
               <div class="form-control w-full max-w-xl">
                    <label class="label">
                         <span class="label-text text-xl">Kraj:</span>
                    </label>
                    <input v-model="data.country" required type="text" :class="{ 'input-success': data.country }" class="input input-bordered w-full max-w-xl" />
               </div>
               <div class="form-control w-full max-w-xl">
                    <label class="label">
                         <span class="label-text text-xl">Krótki opis:</span>
                    </label>
                    <input v-model="data.description" required type="text" :class="{ 'input-success': data.description }" class="input input-bordered w-full max-w-xl" />
               </div>
               <div class="form-control w-full max-w-xl">
                    <label class="label">
                         <span class="label-text text-xl">Tagi:</span>
                    </label>
                    <input v-model="data.tags" required type="text" :class="{ 'input-success': data.tags[0] }" class="input input-bordered w-full max-w-xl" />
               </div>

               <div class="form-control">
                    <label class="label cursor-pointer">
                         <span class="label-text">Czy ten artykuł chcesz oznaczyć jako nowy?</span>
                         <input type="checkbox" checked="checked" class="checkbox" />
                    </label>
               </div>
               <p>{{ error }}</p>
               <div class="pt-10">
                    <button class="btn btn-outline btn-error mr-1">wyczyść</button>
                    <button class="btn btn-outline btn-success">dodaj</button>
               </div>
          </form>
     </div>
</template>

<script>
import { ref } from "vue";
import mainFirebase from "../../firebase/index.js";
import { addDoc, collection } from "firebase/firestore";

export default {
     setup() {
          const { db } = mainFirebase();
          const error = ref("");
          const data = ref({
               mountainRage: "",
               author: "",
               content: "",
               country: "",
               description: "",
               id: 0,
               likes: 0,
               mainImg: "",
               new: true,
               tags: [],
               title: "",
               views: 0,
               name: "",
          });

          //change title to name (name can't have polish syntax and whitespace, wehere is space must be semicolon)
          const changeTitleToName = (title) => {
               const newText = title.replace(/\s/g, "-");

               return newText;
          };

          //send data to serwer
          const sendData = async () => {
               const colRef = collection(db, "articles");

               try {
                    data.value.name = changeTitleToName(data.value.title);

                    await addDoc(colRef, data.value);

                    data.value.mountainRage = "";
                    data.value.author = "";
                    data.value.content = "";
                    data.value.country = "";
                    data.value.description = "";
                    data.value.id = 0;
                    data.value.likes = 0;
                    data.value.mainImg = "";
                    data.value.new = true;
                    data.value.tags = [];
                    data.value.views = 0;
                    data.value.name = "";
               } catch (err) {
                    error.value = err.message;
               }
          };

          return { data, sendData, error, changeTitleToName };
     },
};
</script>

<style lang="scss" scoped>
.add-article {
     width: 100%;
     display: flex;
     flex-flow: column;
     align-items: center;
}
</style>
