<script setup>
import { inject } from 'vue';

const { results } = inject('result', 0);
</script>
<template>
    <div class="result__card">
        <div v-if="results.type === 'repayment'">
            <h3>Your monthly repayments</h3>
            <p class="monthly">&#163;{{ Number(results.monthly).toLocaleString('en-GB') }}</p>
        </div>
        <div v-if="results.type === 'interest'">
            <h3>Total interest</h3>
            <p class="monthly">&#163;{{ Number(results.interest).toLocaleString('en-GB') }}</p>
        </div>
        <hr>
        <h3>Total you'll repay over the term</h3>
        <p class="interest">&#163;{{ Number(results.total).toLocaleString('en-GB') }}</p>
    </div>
</template>

<style scoped>
.result__card {
    background-color: var(--black);
    border-radius: 0.5rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    border-top: 0.25rem solid var(--lime);
}

h3 {
    font-size: 1rem;
    font-weight: 500;
    color: var(--slate-300);
    margin: 0;
    padding-bottom: 0.5rem;
}

hr {
    border: 0;
    height: 1px;
    background-color: var(--slate-700);
    margin: 1.5rem 0;
}

.monthly {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.15;
    color: var(--lime);
}

.interest {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--white);
}

@media screen and (width >=768px) {
    .result__card {
        border-bottom-left-radius: 2rem;
    }

    .monthly {
        font-size: 4rem;
    }
}
</style>