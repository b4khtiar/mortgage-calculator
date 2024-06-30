<script setup>
import { ref, provide } from 'vue';

const emit = defineEmits(['calculated', 'clear']);
const amount = ref(null);
const term = ref(null);
const rate = ref(null);
const calculationType = ref(null);
const monthlyRepayment = ref(0);
const interest = ref(0);
const totalRepayment = ref(0);

const validate = () => {
    const isValid = false

}
function calculate() {
    const valid = validate();
    if (!valid) return;
    // calculate monthly repayments & interest
    const monthlyRate = Number(rate.value) / 100 / 12;
    const repayments = amount.value * monthlyRate * Math.pow(1 + monthlyRate, term.value * 12) / (Math.pow(1 + monthlyRate, term.value * 12) - 1);
    const repaymentTotal = (repayments * term.value * 12);
    const interestTotal = repaymentTotal - amount.value;
    // store results
    monthlyRepayment.value = repayments.toFixed(2);
    interest.value = interestTotal.toFixed(2);
    totalRepayment.value = repaymentTotal.toFixed(2);
    // emit results
    const results = {
        type: calculationType.value,
        monthly: monthlyRepayment.value,
        interest: interestTotal.toFixed(2),
        total: totalRepayment.value
    }
    emit('calculated', results);
}
function clearForm() {
    amount.value = null;
    term.value = null;
    rate.value = null;
    calculationType.value = null;
    monthlyRepayment.value = 0;
    interest.value = 0;
    totalRepayment.value = 0;
    emit('clear');
}
</script>

<template>
    <form novalidate class="form" @submit.prevent="calculate">
        <div class="form__header">
            <h1 class="form__title">Mortgage Calculator</h1>
            <button @click="clearForm" class="form--clear">Clear All</button>
        </div>
        <label class="form__field" for="amount">
            <span class="label">Mortgage Amount</span>
            <div>
                <span class="addon start">&#163;</span>
                <input type="number" required min="1" name="amount" id="amount" v-model="amount" />
            </div>
            <small id="amount-error" class="error">Please enter a valid amount</small>
        </label>
        <div class="form__field--group">
            <label class="form__field" for="term">
                <span class="label">Mortgage Term</span>
                <div>
                    <span class="addon end">Years</span>
                    <input type="number" required min="1" name="term" id="term" v-model="term" />
                </div>
                <small id="term-error" class="error">Please enter a valid term</small>
            </label>
            <label class="form__field" for="rate">
                <span class="label">Interest Rate</span>
                <div>
                    <span class="addon end">%</span>
                    <input type="number" required min="0.01" step="0.01" name="rate" id="rate" v-model="rate" />
                </div>
                <small id="rate-error" class="error">Please enter a valid rate</small>
            </label>
        </div>
        <fieldset>
            <legend class="label">Mortgage Type</legend>
            <label class="form__field select" for="type-1">
                <input v-model="calculationType" type="radio" name="type" id="type-1" value="repayment">
                <span>Repayment</span>
            </label>
            <label class="form__field select" for="type-2">
                <input v-model="calculationType" type="radio" name="type" id="type-2" value="interest">
                <span>Interest Only</span>
            </label>
            <small id="mortgage-type-error" class="error">This field is required</small>
        </fieldset>
        <button type="submit" class="form__submit">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="#133041"
                        d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z" />
                </svg>
            </span>
            Calculate Repayments
        </button>
    </form>
</template>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    container-type: inline-size;
}

.form__header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form--clear {
    border: 0;
    background-color: transparent;
    font-size: 1rem;
    font-weight: 500;
    text-align: left;
    color: var(--slate-700);
    text-decoration: underline;
    padding-top: 0.25rem;
    cursor: pointer;
}

.form__title {
    font-size: 1.5rem;
}

.form__field--group {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form__field {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    div {
        position: relative;

        input {
            padding: 0.75rem;
            font-size: 1rem;
        }

        .addon {
            position: absolute;
            z-index: 1;
            top: 50%;
            transform: translateY(-50%);
            padding: 0.75rem;
            background-color: var(--slate-100);
            border-radius: 3px;
            font-weight: 700;
        }

        .addon:has(~input:invalid:not(:focus)) {
            background-color: var(--red);
            color: var(--white);
        }

        .start {
            left: 0.1rem;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        .start+input {
            padding-left: 2.5rem;
        }

        .end {
            right: 0.09rem;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }

        .end+input {
            padding-right: 4.5rem;
        }
    }
}

.form__field.select {
    flex-direction: row;
    align-items: center;
    border: 0.1rem solid var(--slate-500);
    border-radius: var(--input-border-radius);
    padding: 0.75rem 1rem;
    margin-top: 0.5rem;
    font-weight: 700;
    color: var(--slate-700);
}

.form__field.select:hover {
    border-color: var(--lime);
    transition: border-color 0.2s ease-in-out;
}

.form__field.select:focus-within {
    outline: 2px solid var(--slate-900);
    outline-offset: 0.125rem;
    transition: outline 0.2s ease-in-out;
}

.form__field.select:has(input:checked) {
    border-color: var(--lime);
    background-color: var(--input-background);
    color: var(--slate-900);
    transition: all 0.2s ease-in-out;
}

.error {
    display: none;
    color: var(--red);
}

fieldset>.error {
    margin-top: 0.5rem;
}

label:has(input:invalid:not(:focus)) .error,
fieldset:has(input:invalid:not(:focus)) .error {
    display: block;
}

input[type="radio"] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.25em;
    height: 1.25em;
    border: 0.15em solid currentColor;
    border-radius: 50%;
    display: grid;
    place-content: center;
}

input[type="radio"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--lime);
}

input[type="radio"]:checked {
    border-color: var(--lime);
}

input[type="radio"]:checked::before {
    transform: scale(1);
}

.form__submit {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border: 0;
    background-color: var(--lime);
    color: var(--slate-900);
    font-weight: 700;
    font-size: 1rem;
    padding: 0.75rem 2.5rem;
    border-radius: 2rem;
    cursor: pointer;
}

@container (width > 380px) {
    .form__header {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-baseline;
    }

    .form__field--group {
        flex-direction: row;
    }

    .form__submit {
        max-width: fit-content;
    }
}

@media screen and (width > 640px) {
    .form {
        padding: 2rem;
    }
}
</style>