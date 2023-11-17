<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">
                    <NuxtImg src="/img/logo.webp"/>
                </NuxtLink>
                <ul class="nav-list">
                    <li>
                        <NuxtLink to="/">Domov</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">Kontakt</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">O nás</NuxtLink>
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
        display: grid;
        grid-template-columns: auto 1fr auto;
        place-items: center;
        padding: 1rem var(--content-padding);
        background-color: var(--color-bg-primary);
    }

    .nav-list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        font-weight: 500;
    }

    @media only screen and (max-width: 768px) {
        nav {
            padding: 1rem;
        }
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