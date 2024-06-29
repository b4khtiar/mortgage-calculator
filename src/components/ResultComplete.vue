<script setup>
import ResultCard from '@/components/ResultCard.vue';
</script>
<template>
    <article>
        <h2>Your results</h2>
        <p>
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate repayments” again.
        </p>
        <ResultCard />
    </article>
</template>

<style scoped>
article {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

h2 {
    color: var(--white);
}
</style>