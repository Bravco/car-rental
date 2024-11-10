<template>
    <div>
        <section>
            <h1><span>Podmienky</span> prenájmu</h1>
            <ul class="content">
                <li>
                    <h4>Čo je potrebné, aby ste si mohli prenajať auto v Najlacnejšej Autopožičovňi?</h4>
                    <ul>
                        <li>Predloženie dokladov: vodičský preukaz, občiansky preukaz alebo cestovný pas.</li>
                        <li>Minimálny vek vodiča 19 rokov, šofér musí byť držiteľom vodičského preukazu minimálne po dobu 1 rok.</li>
                        <li>Dohodnúť si rezerváciu: telefonicky / mailom / formulár na webe.</li>
                        <li>Cena prenájmu sa platí až na mieste pri podpise zmluvy.</li>
                        <li>Platba je možná v hotovosti alebo platobnou kartou.</li>
                    </ul>
                </li>
                <ul>
                    <h4>Ako si prenajať auto? Ponúkame Vám 3 spôsoby rezervácie.</h4>
                    <li>Telefonicky na čísle +421 911 986 461 alebo +421 903 035 553.</li>
                    <li>Vyplnením rezervačného formuláru na stránke.</li>
                    <li>Mailom na: najlacnejsia.autopozicovna@gmail.com</li>
                    <li>Je to jednoduché, stačí si vybrať auto, dohodnúť termín rezervácie a miesto pristavenia auta. Sme Vám k dispozícií 24 hodín denne.</li>
                </ul>
                <ul style="grid-row: span 2;">
                    <h4>V cene prenájmu auta je zahrnuté:</h4>
                    <li>ZDARMA pristavíme auto: letisko POPRAD-TATRY, vlaková a autobusová stanica v Poprade. Iné miesto – podľa tel. alebo emailovej dohody.</li>
                    <li>Povinné zmluvné poistenie a havarijné poistenie do štátov EÚ.</li>
                    <li>Diaľničná známka na území SR.</li>
                    <li>Denný limit 300 km. Nad limit 0.1€ za km.</li>
                    <li>Vratná kaucia pri podpise zmluvy.</li>
                    <li>Cestá daň a povinná výbava pre SR.</li>
                    <li>Poistenie posádky vo vozidle? Kooperativa.</li>
                    <li>Cenu účtujeme za 24 hodín prenájmu, (tolerancia 1 hod navyše, inak sa platí ďalší deň prenájmu).</li>
                    <li>Odovzdanie a prevzatie vozidla mimo pracovných hodín spoločnosti Najlacnejšia Autopožičovňa.</li>
                </ul>
                <ul>
                    <h4>Otváracie hodiny Najlacnejšej Autopožičovňe</h4>
                    <li><b>PONDELOK – NEDEĽA 24/7</b></li>
                    <li>Čakacia doba na zákazníka sa objednáva na presnú hodinu. V prípade Vášho meškania akceptujeme 1 hod meškanie bez extra poplatku. Následne bude účtované 7 Eur/hod. Ak vzniknuté meškanie nie je Vašim zavinením, všetky poplatky si môžete uplatniť u danej spoločnosti, ktorá Vás mala dopraviť na dohodnuté miesto. (letisková, autobusová, vlaková preprava).</li>
                </ul>
                <ul>
                    <h4>Víkendový prenájom od Najlacnejšej Autopožičovňe</h4>
                    <li>Víkendový prenájom znamená, že auto si prenajmete, ktorúkoľvek hodinu v piatok od 7:00 hod – 20:00 hod. Auto si prenajímate na víkend t.j. 3 dni do pondelka, platíte za cenu 2 dní. V pondelok je potrebné auto vrátiť počas otváracích hodín Najlacnejšej Autopožičovňe, od 7:00 hod – 20:00 hod.</li>
                </ul>
            </ul>
        </section>
    </div>
</template>

<style scoped>
    section {
        min-height: 100dvh;
        padding: 0 var(--content-padding) 8rem var(--content-padding);
    }

    h1 {
        margin-bottom: 4rem;
        text-align: center;
    }

    .content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 4rem;
    }

    @media only screen and (max-width: 1024px) {
        .content {
            grid-template-columns: 1fr;
        }
    }
</style>