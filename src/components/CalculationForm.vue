<template>
    <div class="form">
        <div class="form__header">
            <h1 class="form__title">Mortgage Calculator</h1>
            <button class="form--clear">Clear All</button>
        </div>
        <label class="form__field" for="amount">
            <span class="label">Mortgage Amount</span>
            <div>
                <span class="addon start">$</span>
                <input type="text" name="amount" id="amount" />
            </div>
            <small class="error">Please input a valid amount</small>
        </label>
        <div class="form__field--group">
            <label class="form__field" for="term">
                <span class="label">Mortgage Term</span>
                <div>
                    <span class="addon end">Years</span>
                    <input type="text" name="term" id="term" />
                </div>
                <small class="error">Please input a valid term</small>
            </label>
            <label class="form__field" for="rate">
                <span class="label">Interest Rate</span>
                <div>
                    <span class="addon end">%</span>
                    <input type="text" name="rate" id="rate" />
                </div>
                <small class="error">Please input a valid rate</small>
            </label>
        </div>
        <fieldset>
            <legend class="label">Mortgage Type</legend>
            <label class="form__field select" for="type-1">
                <input type="radio" name="type" id="type-1">
                <span>Repayment</span>
            </label>
            <label class="form__field select" for="type-2">
                <input type="radio" name="type" id="type-2">
                <span>Interest Only</span>
            </label>
        </fieldset>
        <button class="form__submit">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="#133041"
                        d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z" />
                </svg>
            </span>
            Calculate Repayments
        </button>
    </div>
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
            border-radius: var(--input-border-radius);
            font-weight: 700;
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
            right: 0.1rem;
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
    border: 0.1rem solid var(--slate-700);
    border-radius: var(--input-border-radius);
    padding: 0.75rem 1rem;
    margin-top: 0.5rem;
    font-weight: 700;
    color: var(--slate-900);
}

.form__field.select:has(input:checked) {
    border-color: var(--lime);
    background-color: var(--input-background);
    transition: background-color 0.2s ease-in-out;
}

.error {
    display: none;
    color: var(--red);
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