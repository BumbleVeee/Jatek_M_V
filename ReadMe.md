# Szabaduló szoba
## Leírás
> Maga a játék egy szabaduló szobát jelenít meg, ahol a karakterünknek meg kell találnia a kulcsot amivel kiszabadulhat. Eddig még csak 1 szobánk lesz és csak 1 kulcs, később ezeket lehet bővíteni, akár több karakterre, több szobára, több tárgyra és feldatra is.

## Feladatok felosztása

#### Bernáth Milán: 
* Játék osztály
* Játéktér osztály
* Ajtó osztály
* index.js
* Karakter kinézet
* Játék kinézet

#### Gubek Veronika:
* Játék osztály
* Karakter osztály
* Kulcs osztály
* index.html
* Karakter kinézet
* Játék kinézet

## Osztályok

* Játék
* Karakter
* Játéktér
* Kulcs
* Ajtó

### Osztályok metódusai

#### 1. Játék
Meghívjuk a Játéktér és a Karakter osztályt, illetve futtatjuk a játékot.

#### 2. Karakter
A mozgást, tárgy felvételt és a karakter megjelenítését végzi.

#### 3. Játéktér
Meghívjuk a Tárgy osztályt, az interakciót és a tárgy megjelenítést végzi.

#### 4. Kulcs
A kulcs interakcióját végzi.

#### 5. Ajtó
Az ajtó interakcióját végzi.

## UML

[UML ábra link](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22Oldal-1%22%20id%3D%22jbUr94N2kbq8rdtSWQBe%22%3E7Z1bc5s6EIB%2FjWeah3YM2I79mDhJOyeX9jQ5bXpezihGwYoBMSBff%2F0RF3Exsi0wokmqmUzGWgtstB%2Br1e4Kd4yxs%2FrsA296i01od%2FSuueoYFx1dH%2FV79H8oWMcCrTscxBLLR2YiywT3aANZx0Q6RyYMCh0JxjZBXlE4wa4LJ6QgA76Pl8Vuz9gufqoHLFgS3E%2BAXZb%2BRCaZxtKhfprJv0BkTdkna4NR%2FI4DWOfkSoIpMPEyJzIuO8bYx5jEr5zVGNrh4LFxiY%2B72vFu%2BsV86BKRA64fuy5Y%2FjfyPGd6Zzt3D5Pu8iPnLIkoIGs2BsESOTZwaev8GbvkPnlHo21gI8ulryf0cOhTwQL6BNHhO0veINij0skU2eYNWON5%2BCEBAZMZa51PsY829LTATs5J3%2FZJQoI%2BKPS4D4%2Bk4i6V%2BjCgfb6xb65tiW7BqtDxBgQkEUywbQMvQE%2FpZTjAt5B7jgnBTtJpOUUE3ntgEvZZUrjDL0Ic9iXjQVoAe54M0l%2BAwFkipWMAV7nRTBTyGWIHEn9Nu0zzzOjJLbHMANMGCTXsRkqayW3UT5ogodtKz5wBQF8kDFTgQS%2FzsI%2BbHCT0ikmkPB%2FP4BjbmNJw4eKYGmTbWyIGjg2fyU5sAjr8yLVuoj4XvUzyPRm9UITpsc92dGdNkWlCN1Q5JoCAWL%2BhMj2MXBKNVf%2Bc%2FtHRG3c%2F9Tt9%2BsXHtK1lbfoXdvfJGLv0WgCKhgFSeJYwBKgyFx2dyrovIR3hHUJvUuOM%2Fo9weQgFNYjZB8y62KVxQnq1CbFRpPmYEGZMtVp4OFTRNsx4eAhxufiolZgxyswYHD5s8ATtbzhABOHw%2FH7cd4ubQ2gU2UfuFPqI8JmoofThQZ339eN1%2FuvcnBh3yzP3bDF0nfOnrzc3Bm%2BWUFahAatwHZ1tPiPY%2F7DTQpzUoqXXPYjLQNYk0le4SMHleU7oN%2FpwEvOxwFQJkmYPrSuLjYFyOJt0OOt6ED02CeUgSJ3M5DSG0ZLTeVpmYh87yl4cZOMjbc6ADwoTynUqaMZobC9KmnA5ue6H6KJE8VGFD%2FBCcMrGGXnBsriQ5pYaigsZdmNuT4LMaMQtOWScDiWRIbpIVWRU80CDzdzGlzZ0Uj6%2BPNzeyMJD6%2FYk8SG6QlF8VOOD%2BRztIWI04JRyEeEsVBQiDSCCXI%2BuwhgbX59e4IzMHWl89GXFQYe1%2BVBx0IbjoCWlD2V5nGqlKmneyAVC96xbx6VlS9QY7%2FJax3tclvH%2B6Wq801SddPQBcMLrcp8CL7umahT3y%2FHZEsYjWQGXkcJYCsYwgA5013D24STFpskwbSni0pNFCCu%2FUIg0jIgDrRdoQxeRthgZyArLKSsi0UP%2BTm1Ja4iMZPlLyoxIYmTumYDAlvgwNFlxOk20skDxUXGawRsLBG3x0ZMVp9NU6kfSgitcIF1BewEJtNvC5FRWrE5TmSA5mISL7bs1Iu2ZkpGseJ3Gid2oypNalSdx1KUOAMNeiYDtSuf%2BcCt73ITV4BMhGsJl6CizIZRAdqnBWIDYVjxhbEPgNhIy%2B51Vz5roYlexUokVD2%2FQBGUB3Swf1A4wTdSm8DdSiK58FTBVXVfopbjcE59egiw4pJWnGAoOWRH4cianHUPSSK0K35II774ow6JSzZK33MirPzGOULuyEaLJ5lVqLMKTR1nfdVlUnnJqbsrRBYCSNumIxtIUUBWBsiDJXNlcoKTp4qYSK0Npxkc0oKZYqZ%2F%2FjSpTUlq23RSp%2B7v0rqyFsq6sjKzdfz4KAmllAyVC2HTRvG0R3kGuCKno2KAw9NYWIP0GHBW%2BCeFMPipSXytSX3%2F3Tprz3xOqN5ibwIJp8h5LImozGDvKZgjaDIK8eVY3y%2BJpbzxar4vu71G4VMTlPcTr%2BXuMRVc8CpnKKx4f8jb8tAOMtBi%2BsjFtJnjeUBCfT4tyYGQti8MitinMbQpqueZAXgqAfbiC5v2kCaXtRz0GFpUmlJ0mlLYjVRfdkqpsxG9IE8ZyB1ggCIBVPiLYUEsUBLDwVr3cImdDaYnCJjaU8ikULY9TFDaVL5Ib3JW2sVTZq3eSH5K2rVQXLctWhNRZKgWbtghpYlcpX%2FEcQlSCqF6C6JhnQhrMqxV%2FcL3exGKZD4WwCzJUZkOQjv0V%2Bm8sKSRcdK0AqQTIFBC0CcAsJeQGUVsoCw95z7gXjtAqPKq5HS5clJbFbyzZowknexQcr3U3j7zkjiYcelV0HB2nf8VJHL7bIbqPgwOHisvLjstLS8cI77ZQNuGIuDzPtRhHi882t%2FUYAvZlIK2y4Aj7okB7jdt69CZ%2BfIfPijJKUllhS%2BEcLFIXw40ES%2FgurXCaRpFS%2Bcls2Gptj4a0aIlwkkbx8SYSvvJCJyou%2Fy4Svoa0B1wIbzZWhNRM%2BBLgW%2BuWMJFXDavyN5IwsaFPfdY2IWki7PLj7yvNe1yvHKt3%2BwX9%2FLFwxpfsJ2WhacHcF%2BaXCuC5P4H7OCphFJ6W1RFQLUyxhV1gX2ZSqtu5a0Iz0WzW5wZH8bZQCS%2BQkHVSKADmBBdVBFeIPOZe%2FwpPRbUfty5YdUDUWLOGS4fuMd%2FIHRU2s8OiVnaceeb7EZzYi9CkkisUjnj0fnz9IRdw3%2F12ymfChzZdDi2Kemhc4XqDCu%2B%2FPYV%2F0vsFnbej8djC%2Fi6VG%2FVUvvfJwS3rPNNfo%2BpjLNHT5nHSPnW1A0DRxjfoI6qgsB6qEgvGkSxEh9LLAutch2ROzM78DUdhW1ZW1GPrFVYWkPzSwNWu%2Fpqxrz99EX8DsU%2FrnfaL1xNzlhy172tsPdxW7xnFE8XDXTpRdJ%2Bkg1v%2F1uHUOOz8EfYcrzy3oqovtbPWLs1MFW%2Brkq%2Bi1fJGmDua80a2KtS2S9QGDTiw3MHn1BD88YO%2FfT80EfrmDr7Q787%2FYYOfPpA%2Fra1qYPSXq2vy7%2BPlP7er5%2FlXbWiQwctFo255%2BalAr9ZLOzBbZ17AoKobR1s152vtWHe91nw90IuojfZP14Phvu4HZuv%2BSCsalW2sRWfrwemB2EZzszX3rtGVzSrZrIGxZbNqPC%2BTNn2MSV5ZdJSmt9iEYY%2F%2FAQ%3D%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E)

## Mappastruktúra
```
.
├── ./cypress
│   ├── ./cypress/e2e
│   │   └── ./cypress/e2e/szabaduloszoba_teszt.cy.js
│   ├── ./cypress/fixtures
│   │   └── ./cypress/fixtures/example.json
│   └── ./cypress/support
│       ├── ./cypress/support/commands.js
│       └── ./cypress/support/e2e.js
├── ./cypress.config.js
├── ./.gitignore
├── ./index.html
├── ./out
│   ├── ./out/Ajto.js.html
│   ├── ./out/fonts
│   │   ├── ./out/fonts/OpenSans-BoldItalic-webfont.eot
│   │   ├── ./out/fonts/OpenSans-BoldItalic-webfont.svg
│   │   ├── ./out/fonts/OpenSans-BoldItalic-webfont.woff
│   │   ├── ./out/fonts/OpenSans-Bold-webfont.eot
│   │   ├── ./out/fonts/OpenSans-Bold-webfont.svg
│   │   ├── ./out/fonts/OpenSans-Bold-webfont.woff
│   │   ├── ./out/fonts/OpenSans-Italic-webfont.eot
│   │   ├── ./out/fonts/OpenSans-Italic-webfont.svg
│   │   ├── ./out/fonts/OpenSans-Italic-webfont.woff
│   │   ├── ./out/fonts/OpenSans-LightItalic-webfont.eot
│   │   ├── ./out/fonts/OpenSans-LightItalic-webfont.svg
│   │   ├── ./out/fonts/OpenSans-LightItalic-webfont.woff
│   │   ├── ./out/fonts/OpenSans-Light-webfont.eot
│   │   ├── ./out/fonts/OpenSans-Light-webfont.svg
│   │   ├── ./out/fonts/OpenSans-Light-webfont.woff
│   │   ├── ./out/fonts/OpenSans-Regular-webfont.eot
│   │   ├── ./out/fonts/OpenSans-Regular-webfont.svg
│   │   └── ./out/fonts/OpenSans-Regular-webfont.woff
│   ├── ./out/global.html
│   ├── ./out/index.html
│   ├── ./out/Jatek.js.html
│   ├── ./out/JatekTer.js.html
│   ├── ./out/Karakter.js.html
│   ├── ./out/Kulcs.js.html
│   ├── ./out/module.exports.html
│   ├── ./out/scripts
│   │   ├── ./out/scripts/linenumber.js
│   │   └── ./out/scripts/prettify
│   │       ├── ./out/scripts/prettify/Apache-License-2.0.txt
│   │       ├── ./out/scripts/prettify/lang-css.js
│   │       └── ./out/scripts/prettify/prettify.js
│   └── ./out/styles
│       ├── ./out/styles/jsdoc-default.css
│       ├── ./out/styles/prettify-jsdoc.css
│       └── ./out/styles/prettify-tomorrow.css
├── ./package.json
├── ./package-lock.json
├── ./ReadMe.md
└── ./src
    ├── ./src/adat.js
    ├── ./src/Ajto.js
    ├── ./src/index.css
    ├── ./src/index.js
    ├── ./src/Jatek.js
    ├── ./src/JatekTer.js
    ├── ./src/Karakter.js
    ├── ./src/kepek
    │   ├── ./src/kepek/ajto1.png
    │   ├── ./src/kepek/ajto.png
    │   ├── ./src/kepek/bean.png
    │   ├── ./src/kepek/jatekter.avif
    │   ├── ./src/kepek/jatekter.png
    │   ├── ./src/kepek/karakter.png
    │   ├── ./src/kepek/kulcs2.jpeg
    │   └── ./src/kepek/kulcs.png
    └── ./src/Kulcs.js
```


**Mappastruktúra generáló parancs (Windows)**
```
tree /F /A > tree.txt
```
**Mappastruktúra generáló parancs (Linux)**
```
tree -f -a > tree.txt
```