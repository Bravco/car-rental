<template>
    <div>
        <section id="hero">
            <div class="content">
                <div>
                    <h1><span>Najlacnejšia</span> autopožičovňa</h1>
                    <div class="cta">
                        <NuxtLink class="primary-btn" :to="{ path: '/', hash: '#form'}">
                            <Icon name="fa6-solid:bookmark"/>
                            Rezervovať online
                        </NuxtLink>
                        <NuxtLink class="outline-btn" :to="{ path: '/', hash: '#about'}">
                            Prečo my
                            <Icon name="fa6-solid:arrow-turn-down"/>
                        </NuxtLink>
                    </div>
                </div>
                <ul class="info">
                    <li class="info-item">
                        <Icon name="fa6-solid:phone"/>
                        <div class="info-item-content">
                            <span>Zavolajte nám</span>
                            <div>
                                <NuxtLink class="info-item-value" to="tel:+421902441097">+421 902 441 097</NuxtLink><br>
                                <NuxtLink class="info-item-value" to="tel:++421910467771">+421 910 467 771</NuxtLink>
                            </div>
                        </div>
                    </li>
                    <li class="info-item">
                        <Icon name="fa6-solid:location-dot"/>
                        <div class="info-item-content">
                            <span>Kde nás najdete</span>
                            <span class="info-item-value"> Poprad, Kežmarok, Spišská Nová Ves, Levoča</span>
                        </div>
                    </li>
                    <li class="info-item">
                        <Icon name="fa6-solid:clock-rotate-left"/>
                        <div class="info-item-content">
                            <span>Otváracie hodiny</span>
                            <span class="info-item-value">Otvorené 24/7</span>
                        </div>
                    </li>
                </ul>
            </div>
            <NuxtImg class="main-img" src="/img/hero.svg" alt="car-rental"/>
        </section>
    </div>
</template>

<style scoped>
    #hero {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: 2rem var(--content-padding);
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 4rem;
    }

    .cta {
        display: flex;
        gap: 1rem;
        margin: 2rem 0;
    }

    .main-img {
        width: 100%;
        height: 100%;
    }

    .info {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .info-item {
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
    }

    .info-item:not(:last-child)::after {
        content: "";
        height: 100%;
        width: 1px;
        position: absolute;
        right: -.5rem;
        top: 0;
        background-color: var(--color-text-alt);
    } 
    
    .info-item-content {
        display: flex;
        flex-direction: column;
    }

    .info-item-value {
        font-weight: bold;
    }

    @media only screen and (max-width: 1024px) {
        #hero {
            display: flex;
            flex-direction: column-reverse;
        }
    }
</style>