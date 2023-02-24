<template>
     <div class="about-us-card">
          <div class="imgs">
               <img src="../assets/img/alan.jpeg" alt="alan" />
               <img src="../assets/img/dawid.jpeg" alt="dawid" />
          </div>
          <div class="title">
            <h1>Kim jesteśmy?</h1>
          </div>
          <div class="text">
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old... </p>
          </div>
          <div class="hyperlink">
            <router-link :to="{ name: 'blog'}">
                więcej
            </router-link>
          </div>
     </div>
</template>

<script>
export default {
     setup() {
          return {};
     },
};
</script>

<style lang="scss" scoped>
.about-us-card {
     width: 100%;
     .imgs {
          display: flex;
          justify-content: center;

          img {
               width: 40%;
               margin: 10px;
               border-radius: 10px;
               max-width: 200px;
          }

     }

     .title {
        text-align: center;
        font-size: 25px;
        margin-top: 15px;
     }

     .text {
        width: 80%;
        margin: auto;
        text-align: center;
        font-family: 'Buenard', serif;
        max-width: 300px;
     }

     .hyperlink {
        text-align: center;
        margin-top: 8px;
        text-decoration: underline;
        margin-bottom: 8px;
     }
}
</style>
