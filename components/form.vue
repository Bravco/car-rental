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
                                        <h3 class="car-title">{{ car.title }}</h3>
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
                                    <span v-if="car.id === 3" class="car-discount">-16% laxnejšie</span>
                                    <button @click.prevent="selectCar(car)" class="primary-btn">
                                        Vybrať
                                        <Icon name="fa6-solid:arrow-right"/>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </template>
                    <template v-slot:item.2>
                        <div class="form-wrapper"></div>
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

    const currentStep = ref<number>(3);
    const selectedCar = ref<Car | null>(null);

    function selectCar(car : Car) {
        selectedCar.value = car;
        currentStep.value = 2;
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
        height: 42rem;
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
        font-size: 1.5rem;
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

    .success-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .success-img {
        width: 8rem;
        margin-bottom: 2rem;
    }
</style>