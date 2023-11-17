<template>
    <div>
        <section id="form">
            <h2 class="title">Vytvor si <span>rezerváciu</span></h2>
            <ClientOnly>
                <v-stepper v-model="currentStep" :items="steps" alt-labels hide-actions :elevation="0">
                    <template v-slot:item.1>
                        <div class="form-wrapper">
                            <ul class="car-list">
                                <li v-for="car in cars" :key="car.id" :class="['car', { discount: car.id === 3 }]">
                                    <NuxtImg class="car-img" :src="car.imgUrl"/>
                                    <div>
                                        <h4 class="car-title">{{ car.title }}</h4>
                                        <ul class="car-features">
                                            <li class="car-feature">
                                                <Icon name="fa6-solid:circle-check"/>
                                                <span>Manuál</span>
                                            </li>
                                            <li class="car-feature">
                                                <Icon name="fa6-solid:circle-check"/>
                                                <span>Benzín</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul class="car-pricelist">
                                        <li>1-6 dní <span>{{ car.priceList[0] }}€</span> / deň</li>
                                        <li>7-12 dní <span>{{ car.priceList[1] }}€</span> / deň</li>
                                        <li>13-20 dní <span>{{ car.priceList[2] }}€</span> / deň</li>
                                        <li>21-29 dní <span>{{ car.priceList[3] }}€</span> / deň</li>
                                        <li>30+ dní <span>{{ car.priceList[4] }}€</span> / deň</li>
                                    </ul>
                                    <span v-if="car.id === 3" class="car-discount">16% lacnejšie</span>
                                    <button @click.prevent="selectCar(car)" class="primary-btn">
                                        Vybrať
                                        <Icon name="fa6-solid:arrow-right"/>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </template>
                    <template v-slot:item.2>
                        <div class="form-wrapper">
                            <div class="form-subwrapper">
                                <div v-if="selectedCar !== null">
                                    <NuxtImg class="car-img" :src="selectedCar.imgUrl"/>
                                    <div>
                                        <h4 class="car-title">{{ selectedCar.title }}</h4>
                                        <ul class="car-features">
                                            <li class="car-feature">
                                                <Icon name="fa6-solid:circle-check"/>
                                                <span>Manuál</span>
                                            </li>
                                            <li class="car-feature">
                                                <Icon name="fa6-solid:circle-check"/>
                                                <span>Benzín</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul class="car-pricelist">
                                        <li>1-6 dní <span>{{ selectedCar.priceList[0] }}€</span> / deň</li>
                                        <li>7-12 dní <span>{{ selectedCar.priceList[1] }}€</span> / deň</li>
                                        <li>13-20 dní <span>{{ selectedCar.priceList[2] }}€</span> / deň</li>
                                        <li>21-29 dní <span>{{ selectedCar.priceList[3] }}€</span> / deň</li>
                                        <li>30+ dní <span>{{ selectedCar.priceList[4] }}€</span> / deň</li>
                                    </ul>
                                </div>
                                <form @submit.prevent="submitForm()" class="form">
                                    <div class="inputfield">
                                        <label for="firstName">Meno</label>
                                        <input v-model="state.firstName" @input="v$.firstName.$touch" @blur="v$.firstName.$touch" name="firstName" id="firstName" type="text" required>
                                    </div>
                                    <div class="inputfield">
                                        <label for="lastName">Priezvisko</label>
                                        <input v-model="state.lastName" @input="v$.lastName.$touch" @blur="v$.lastName.$touch" name="lastName" id="lastName" type="text" required>
                                    </div>
                                    <div class="inputfield">
                                        <label for="email">Email</label>
                                        <input v-model="state.email" @input="v$.email.$touch" @blur="v$.email.$touch" name="email" id="email" type="email" required>
                                    </div>
                                    <div class="inputfield">
                                        <label for="phone">Telefón</label>
                                        <input v-model="state.phone" @input="v$.phone.$touch" @blur="v$.phone.$touch" name="phone" id="phone" type="tel" required>
                                    </div>
                                    <div class="inputfield">
                                        <label for="startDate">Dátum od</label>
                                        <input v-model="state.startDate" @input="v$.startDate.$touch" @blur="v$.startDate.$touch" name="startDate" id="startDate" type="datetime-local" required>
                                    </div>
                                    <div class="inputfield">
                                        <label for="endDate">Dátum do</label>
                                        <input v-model="state.endDate" @input="v$.endDate.$touch" @blur="v$.endDate.$touch" name="endDate" id="endDate" type="datetime-local" required>
                                    </div>
                                    <div class="inputfield">
                                        <label for="pickupPoint">Miesto vyzdvihnutia</label>
                                        <select v-model="state.pickupPoint" @input="v$.pickupPoint.$touch" @blur="v$.pickupPoint.$touch" name="pickupPoint" id="pickupPoint" required>
                                            <option v-for="point in points" :key="point" :value="point">{{ point }}</option>
                                        </select>
                                        <Icon class="inputfield-icon" name="fa6-solid:angle-down"/>
                                    </div>
                                    <div class="inputfield">
                                        <label for="dropoffPoint">Miesto odovzdania</label>
                                        <select v-model="state.dropoffPoint" @input="v$.dropoffPoint.$touch" @blur="v$.dropoffPoint.$touch" name="dropoffPoint" id="dropoffPoint" required>
                                            <option v-for="point in points" :key="point" :value="point">{{ point }}</option>
                                        </select>
                                        <Icon class="inputfield-icon" name="fa6-solid:angle-down"/>
                                    </div>
                                    <div class="wide">
                                        <input v-model="state.agree" @input="v$.agree.$touch" @blur="v$.agree.$touch" type="checkbox" name="agree" id="agree" required>
                                        &nbsp;<label for="agree">Súhlasím so zásadami ochrany osobných údajov.</label>
                                    </div>
                                    <div class="form-actions">
                                        <button @click="deselectCar()" class="outline-btn" type="button">
                                            <Icon name="fa6-solid:arrow-left"/>
                                            Späť
                                        </button>
                                        <button class="primary-btn" type="submit">
                                            <Icon name="fa6-solid:envelope"/>
                                            Poslať rezerváciu
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </template>
                    <template v-slot:item.3>
                        <div class="form-wrapper">
                            <div class="success-wrapper">
                                <NuxtImg class="success-img" src="/img/hearts.webp"/>
                                <h3>Vaša rezervácia bola úspešne odoslaná!</h3>
                                <p>Budeme Vás kontaktovať pomocou emailu alebo telefonicky.</p>
                            </div>
                        </div>
                    </template>
                </v-stepper>
            </ClientOnly>
        </section>
    </div>
</template>

<script lang="ts" setup>
    import { useVuelidate } from "@vuelidate/core";
    import { required, email } from "@vuelidate/validators";

    interface Car {
        id: number,
        title: string,
        imgUrl: string,
        priceList: number[],
    }

    const steps = [
        "Vyber si auto",
        "Vyplni formulár",
        "Čakaj na auto",
    ];

    const cars : Car[] = [
        {
            id: 0,
            title: "Volkswagen Polo 1.2",
            imgUrl: "/img/volkswagen-polo-1.2.webp",
            priceList: [30, 27, 25, 20, 18],
        },
        {
            id: 1,
            title: "Skoda Fabia 1.2",
            imgUrl: "/img/skoda-fabia-1.2.webp",
            priceList: [30, 27, 25, 20, 18],
        },
        {
            id: 2,
            title: "Seat Ibiza 1.2",
            imgUrl: "/img/seat-ibiza-1.2.webp",
            priceList: [30, 27, 25, 20, 18],
        },
        {
            id: 3,
            title: "Mercedes A150 1.5",
            imgUrl: "/img/mercedes-a150-1.5.webp",
            priceList: [27, 25, 23, 18, 15],
        },
    ];

    const points = [
        "Poprad - Autobusová / Vlaková stanica",
        "Poprad - Letisko",
        "Kežmarok",
        "Spišská Nová Ves",
        "Levoča",
    ];

    const initialState = {
        startDate: null,
        endDate: null,
        pickupPoint: null,
        dropoffPoint: null,
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        agree: null,
    };

    const rules = {
        startDate: { required },
        endDate: { required },
        pickupPoint: { required },
        dropoffPoint: { required },
        firstName: { required },
        lastName: { required },
        email: { required, email },
        phone: { required },
        agree: { required },
    };

    const currentStep = ref<number>(1);
    const selectedCar = ref<Car | null>(null);
    const state = reactive({...initialState});
    const v$ = useVuelidate(rules, state);

    function selectCar(car : Car) {
        selectedCar.value = car;
        currentStep.value = 2;
    }

    function deselectCar() {
        currentStep.value = 1;
        selectedCar.value = null;
    }

    async function submitForm() {
        const valid = await v$.value.$validate();
        if (!valid) return;
        currentStep.value = 3;
    }
</script>

<style scoped>
    #form {
        padding: 8rem var(--content-padding);
    }

    .title {
        text-align: center;
    }

    .form-wrapper {
        min-height: 42rem;
        padding: 2rem;
        border: 2px solid var(--color-text-alt);
        border-radius: .5rem;
    }

    .car-list {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }

    .car {
        height: 100%;
        display: grid;
        grid-template-rows: 1fr;
        place-items: center;
        gap: 1rem;
        position: relative;
        padding: 2rem;
        background-color: var(--color-bg-secondary);
        border-radius: .5rem;
    }

    .car.discount {
        border: 2px solid var(--color-accent);
    }

    .car-img {
        width: 100%;
    }

    .car-title {
        text-align: center;
        text-transform: uppercase;
    }

    .car-features {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }

    .car-feature {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        color: var(--color-text-alt);
    }

    .car-pricelist {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: .5rem;
        margin-bottom: 1rem;
    }

    .car-pricelist span {
        font-size: 1.25rem;
        font-weight: bold;
        color: var(--color-primary);
    }

    .car-discount {
        position: absolute;
        bottom: 0;
        font-size: 1.25rem;
        font-weight: bold;
        color: var(--color-accent);
    }
    
    .form-subwrapper {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .form {
        height: fit-content;
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(2, 1fr);
    }

    .wide {
        grid-column: span 2;   
    }

    .inputfield {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .inputfield input, .inputfield select {
        padding: .5rem;
        border: 2px solid var(--color-text-alt);
        border-radius: .25rem;
    }

    .inputfield-icon {
        position: absolute;
        bottom: .85rem;
        right: 1rem;
        pointer-events: none;
    }

    .form-actions {
        display: flex;
        justify-content: space-between;
        grid-column: span 2;
        margin-top: 1rem;
    }

    .success-wrapper {
        display: grid;
        place-items: center;
        text-align: center;
        margin-top: 10rem;
    }

    .success-img {
        width: 6rem;
        margin-bottom: 2rem;
    }
    
    @media only screen and (max-width: 1600px) {
        .car-list {
            grid-template-columns: repeat(2, 1fr);
        }

        .inputfield {
            grid-column: span 2;
        }
    }

    @media only screen and (max-width: 1024px) {
        .form-subwrapper {
            grid-template-columns: 1fr;
        }
    }

    @media only screen and (max-width: 768px) {
        .car-list {
            grid-template-columns: 1fr;
        }
    }
</style>