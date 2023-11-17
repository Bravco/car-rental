<template>
    <div>
        <header>
            <nav>
                <NuxtLink :to="{ path: '/', hash: '#hero'}">
                    <NuxtImg src="/img/logo.webp"/>
                </NuxtLink>
                <ul class="nav-list">
                    <li>
                        <NuxtLink :to="{ path: '/', hash: '#hero'}">Domov</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">Kontakt</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{ path: '/', hash: '#about'}">O nás</NuxtLink>
                    </li>
                </ul>
                <NuxtLink class="primary-btn" to="/">
                    <Icon name="fa6-solid:bookmark"/>
                    Rezervovať
                </NuxtLink>
            </nav>
        </header>
        <main>
            <slot/>
        </main>
        <footer></footer>
    </div>
</template>

<style scoped>
    nav {
        width: 100%;
        display: grid;
        grid-template-columns: auto 1fr auto;
        place-items: center;
        position: fixed;
        top: 0;
        left: 0;
        padding: 1rem var(--content-padding);
        background-color: var(--color-bg-primary);
        z-index: 100;
    }

    .nav-list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        font-weight: 500;
    }

    @media only screen and (max-width: 576px) {
        nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .nav-list {
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
</style>