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

[UML ábra link](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22Oldal-1%22%20id%3D%22jbUr94N2kbq8rdtSWQBe%22%3E7Z1tc5s4EIB%2FjWeaD%2B0YsB37Y%2BIk7VyctNfk2vS%2B3ChGwYoBMSC%2F%2FvoT72CwIzBLmlQzmYy1FthoH1ar3RXuaGNr%2FdlFzuyG6tjsqF193dEuOqo6VBT%2B3xdsQsFI1UKB4RI9FCmp4I5scSTsRtIF0bGX68goNRlx8sIptW08ZTkZcl26ynd7omb%2BUx1k4ILgborMovQn0dksuiz1NJV%2FwcSYxZ%2BsDEbhOxaKO0dX4s2QTlcZkXbZ0cYupSx8Za3H2PTHLh6X8LirPe8mX8zFNhM54Pqha6PVfyPHsWa3pnV7P%2B2uPpacJRJ5bBOPgbcilols3jp%2Foja7i95ReBuZxLD56yk%2FHLtcsMQuI3z4zqI3GHW4dDojpj5BG7rwP8RjaDqPW%2Bcz6pItPy0yo3Pyt10WkaAOcj3u%2FCO5uMulLvZ4n2%2FxN1d2RDdones4QR6LBFNqmsjxyGNyGRZyDWKfU8aoFXVazQjDdw6a%2Bn1WnG3%2FizAr%2FpLhIC2RuYgG6S%2FE8DyS8jHA68xoRgr5jKmFmbvhXWZZZvhFBsetUsCUQURNdJpR1Izuon7URBHdRnLmFAD%2BImKgAg9qkYdD3GQg4VfMAuW5dI7H1KSchgubhtQQ09wRxeCY%2BIntxcbjw09sYxL0ueilku%2FR6Pkiyo99MoM7a0Z0Hdu%2ByilDDIX69ZXpUGKzYKz65%2FyPj964%2B6nf6fMvPuZtJW3zP7%2B7y8bU5teCSDAMmMOzwj5AlbnoqFzWffbp8O8QfpNqZ%2Fx%2FgMu9L6hBzCFgNvkujRPSq02ISQLNh4TExlSphYfFFW3ilId7H5eLj0qBGa3IjFbCh4kesfmNeoQR6p%2FfDfvucPMSGnn2iT3DLmHlTNRQ%2BvBFnffV43X%2B61yfarerM%2FtsObSt88evk4lWNktIq9CAVbgOzraYM%2Bp%2B2GshTmrR0uu%2BiMsAahLpS1xAcHlaMP6NPpyEfCwpVwLQ7KF0odgYSIezSYezrgfRiyehDASJkxmdRtNacjpPi0wcYkfaixfZ%2BMibc%2BSi3IRynQiaMRq7i5ImXM5S90N0USL5qMIHemY0YeOMPVMoLsDcUk1yAWE3FubUS41G2IIh43QIRIboIlWSUc0D9bYLk16a2Er4%2BHJ%2FM4HCQ%2Bn2gPgQXaFIPqrxEfsc7SGiNeCUliJSslCRiDSACLEdvgqL2fj6%2BIznbGGB8dGHioMOa%2FMh46ANx0ELSh9CeZxypQo0b2QCoQfWrePCsiVojPd5reMDLsv48HQ13muqTjrqAFn%2BddmPnpNeUzWK%2B8X4bAHjEVTAZSQxBsEYe9jC9gbPP5wk2DQZpi1EXHpQhMTlFxKRhhGxsPGMTWwT1hYjA6iwnLQigB7yd25LWkNkBOUvSTMCxMjC0RHDLfGhKVBxOkW0skDyUXGaoVsDeW3x0YOK0yky9QO04PIXSFfYXGKGzbYwOYWK1SkyEwSDib%2FYvt0Q1p4pGUHF65SS2I2sPKlVeRJGXeoAMOwVCNitdO4Pd7LHTViNciJEQ7gxOtJsCCWQbW4wlii0FY%2BUmhjZjYTMXrPqWRFd7EpWKrHi0C2ZkjSgm%2BaD2gGmidqU8o0UoitfCUxV1xU7CS53zOWXAAUHWHmKJuGAisAXMzntGJJGalXKLYnw7osiLDLVDLzlBq7%2BRDtC7dJGiCab14mx8E8eZH03RVFxyqm5KUcVAAps0hGNpUmgKgJlYJa6splASdPFTQVWhmDGRzSgJlmpn%2F8NKlMSWnbdFND9XWoXaqGsSisDtfvPJZ4HVjZQICSeLpq3LcI7yCUhFR0b4ofe2gKk34CjUm5CSiYfGamvFamvv3snyfkfCNVrsZsQB9PgHksiajNidqTNELQZjDiLtG42jqe98Wi9Krq%2FR%2BJSEZf3EK8v32MsuuKRyFRe8bi4bMNPO8CAxfCljWkzwfOGgvjltEgHBmpZ7BexzXBmU1DLNQdwKYD4wyU07ydNCLYf9RhYZJoQOk0ItiNVFd2SKm3EK6QJQ7mFDOR5yCge4W25JfI8nHurXm6xZENpgcImNpSWUyhaHicpbCpfBBvcBdtYKu3VO8kPgW0rVUXLsiUhdZZK3rYtQprYVVqu%2BBJCZIKoXoLomGdCarFXK%2F7g%2Bt4pGBTCLshQmg1BOg5X6L%2BxpJBw0bUEpBIgM8TI1kPzhJAJ4bYQCg%2B4Z9wLR2glHtXcDhsvC8viN5bsUYSTPRKO33U3D1xyRxEOvUo6jo7T%2F8ZJnHK3Q3QfRwkcMi4PHZcHS8cI77aQNuGIuHyZazEOFp9tbuvRBOzLAKyy4Aj7IkH7Hbf1qE38%2BE45K9IogbISL4UzsIAuhhsJlpS7tMJpGklK5SezUaO1PRpg0RLhJI3k400kfOFCJzIu%2Fy4SvhrYAy6ENxtLQmomfBlyjU1LmMBVw8r8DRAmJna5z9omJE2EXX78faU4D5u1ZfRuvpCfP5bW%2BDL%2BSVmsGzjzhctLBejCneJDHBUw8k8b1xFwLcyoQW1kXqZSrtuFrWM90mzaZ0KDeJuvhGfM2CYqFEALRvMqwmvCHjKvf%2Fmn4toPWxdxdUDQ2MQNmw%2FdQ7aROcpvpocFrfQ4%2Fcx1AzipE6DJJVfEH%2FHg%2FfD6fS7wofvttJwJF5t8ObTM66FxhasNKnz0mgrv1lJ4quNfORWDKjw0sK%2Blca2exg8%2BOLhllQOpL0HpUz9rPpRPXeUFnnjjG3YJV5BfDlWJBe1IFoJD%2BWWhTaZDNCWmZ%2F5Gg6htXFXUi5crcVVA9EMDV%2Fv6K9qh%2FvxF%2BA3EPq132s9fT8hZdNShr7HzbFu1p%2BVPFA534UTBfZIMbv1bp6TEYe9vsGd4LfMqqrpSe0vtksRU%2FrYquCpKLWck9kYzzshOgdpuhdqgAf%2B1dPBLSgj%2B%2BMFX1Pzg9%2BInpDU%2B%2BkK%2FO%2F%2BHjX7yQP6ktqoB9lfra%2Fbvw%2BU%2FN%2BunxVdlqLHB80WjbvmremnV3PIXpuvUDRioFR0B3qo5YSvHuuu1JuzBcDeapFWYgPsjJT9v7oIqOgEPTl%2BIVjQ3AZfeB6q0QgUrNNB2rFCNJ2DypkspyyqLj9LshurY7%2FE%2F%3C%2Fdiagram%3E%3C%2Fmxfile%3E)

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