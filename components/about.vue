<template>
    <div>
        <section id="about">
            <div class="content">
                <div class="features">
                    <div class="feature">
                        <NuxtImg class="feature-img" src="/img/stopwatch.webp" alt="stopwatch"/>
                        <h3 class="feature-title"><span>Rýchle</span> požičanie</h3>
                    </div>
                    <div class="feature">
                        <NuxtImg class="feature-img" src="/img/payment.webp" alt="payment"/>
                        <h3 class="feature-title">Platba <span>na mieste</span></h3>
                    </div>
                    <div class="feature">
                        <NuxtImg class="feature-img" src="/img/fuel.webp" alt="fuel"/>
                        <h3 class="feature-title"><span>Plná</span> nádrž</h3>
                    </div>
                    <div class="feature">
                        <NuxtImg class="feature-img" src="/img/highway.webp" alt="highway"/>
                        <h3 class="feature-title"><span>Dialničná</span> známka</h3>
                    </div>
                </div>
                <div class="main-content">
                    <h2>Prečo <span>my</span>?</h2>
                    <p>Najlacnejšia Autopožičovňa bola založená s cieľom zlepšiť poskytovanie služieb v oblasti prenájmu áut a ponúkať prvotriedny servis svojim klientom.</p>
                    <ul class="main-features">
                        <li><Icon name="fa6-solid:check"/>Spokojnosť zákaznika</li>
                        <li><Icon name="fa6-solid:check"/>Kvalita vozidiel</li>
                        <li><Icon name="fa6-solid:check"/>Transparentnosť a férovosť</li>
                        <li><Icon name="fa6-solid:check"/>Spoľahlivosť</li>
                    </ul>
                    <NuxtLink class="primary-btn" :to="{ path: '/', hash: '#form'}">
                        <Icon name="fa6-solid:bookmark"/>
                        Rezervovať online
                    </NuxtLink>
                    <div class="map">
                        <LMap
                            :zoom="17"
                            :center="[49.058401, 20.292107]"
                        >
                            <LTileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                                layer-type="base"
                                name="OpenStreetMap"
                            />
                            <LMarker :lat-lng="[49.058401, 20.292107]"/>
                        </LMap>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
    #about {
        background-color: var(--color-bg-secondary);
    }

    .content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        padding: 8rem var(--content-padding);
    }

    .features {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    .feature {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        background-color: var(--color-bg-primary);
        border: 2px solid var(--color-text-alt);
        border-radius: .5rem;
    }

    .feature-img {
        width: 16rem;
        padding: 2rem;
        aspect-ratio: 1/1;
    }

    .feature-title {
        text-align: center;
    }

    .main-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .main-features {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1rem;
        color: var(--color-primary);
    }

    .main-features li {
        display: flex;
        align-items: center;
        justify-self: center;
        gap: .5rem;
    }

    .map {
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    @media only screen and (max-width: 1280px) {
        .content {
            grid-template-columns: 1fr;
        }

        .map {
            height: 14rem;
        }
    }
    
    @media only screen and (max-width: 768px) {
        .feature {
            padding: 1rem;
        }

        .feature-img {
            width: 100%;
            padding: 1rem;
        }
    }
</style>