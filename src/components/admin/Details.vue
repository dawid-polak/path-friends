<template>
     <div class="stats shadow w-full mx-auto">
          <div class="stat">
               <div class="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
               </div>
               <div class="stat-title">Liczba polubień</div>
               <div class="stat-value text-primary">25.6K</div>
               <div class="stat-desc">21% more than last month</div>
          </div>

          <div class="stat">
               <div class="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
               </div>
               <div class="stat-title">Liczba wyświetleń</div>
               <div class="stat-value text-secondary">2.6M</div>
               <div class="stat-desc">21% more than last month</div>
          </div>

          <div class="stat">
               <div class="stat-value">86</div>
               <div class="stat-title">Liczba artukułów</div>
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

<style lang="scss" scoped></style>
