<template>
     <div>
          <div class="overflow-x-auto">
               <table class="table mx-auto">
                    <!-- head -->
                    <thead>
                         <tr>
                              <th></th>
                              <th class="w-72">Autor</th>
                              <th class="w-96">Tytuł</th>
                              <th>Akcje</th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr v-for="article in artilces" :key="article.id">
                              <td>{{ article.data().id }}</td>
                              <td>{{ article.data().author }}</td>
                              <td>{{ article.data().title }}</td>
                              <td>
                                   <button class="btn btn-warning">Edytuj</button>
                                   <button @click="removeArticle(article.id)" class="btn btn-error ml-5">Usuń</button>
                              </td>
                         </tr>
                    </tbody>
               </table>
          </div>
     </div>
</template>

<script>
import { ref } from "vue";
import mainFirebase from "../../firebase/index.js";
import { collection, getDocs, doc, deleteDoc } from "@firebase/firestore";

export default {
     setup() {
          const artilces = ref([]);
          const { db } = mainFirebase();
          const docsRef = collection(db, "articles");

          //download all articles
          const downArticles = async () => {
               try {
                    const docsArt = await getDocs(docsRef);
                    docsArt.forEach((e) => {
                         artilces.value.push(e);
                    });

                    console.log(artilces.value);
               } catch (error) {
                    console.log(error.message);
               }
          };
          downArticles();

          //remove article
          const removeArticle = async (id) => {
               try {
                    await deleteDoc(doc(db, "articles", id));
                    artilces.value = [];
                    downArticles();
               } catch (err) {
                    console.log(err.message);
               }
          };

          return { artilces, removeArticle };
     },
};
</script>

<style lang="scss" scoped></style>
