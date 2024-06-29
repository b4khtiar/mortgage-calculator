<script setup>
import CalculationForm from '@/components/CalculationForm.vue';
import ResultEmpty from '@/components/ResultEmpty.vue';
import ResultComplete from '@/components/ResultComplete.vue';
</script>

<template>
  <div class="card">
    <div>
      <!-- form -->
      <CalculationForm />
    </div>
    <div class="card__result">
      <!-- Result -->
      <ResultEmpty />
      <!-- <ResultComplete /> -->
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  background-color: var(--white);

  div {
    width: 100%;
  }
}

.card__result {
  background-color: var(--slate-900);
  color: var(--slate-300);
  padding: 1.5rem;
  display: flex;
  align-items: center;
}

@media screen and (width >=640px) {
  .card {
    border-radius: 1.5rem;
    overflow: hidden;
    margin: 2rem auto;
  }

  .card__result {
    padding: 2.5rem;
  }
}

@media screen and (width >1024px) {
  .card {
    flex-direction: row;
    max-width: 1100px;
  }

  .card__result {
    border-bottom-left-radius: 6rem;
  }
}
</style>
