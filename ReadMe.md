# Szabaduló szoba
## Leírás
> Maga a játék egy szabaduló szobát jelenít meg, ahol a karakterünknek meg kell találnia a kulcsot amivel kiszabadulhat. Eddig még csak 1 szobánk lesz és csak 1 kulcs, később ezeket lehet bővíteni, akár több karakterre, több szobára, több tárgyra és feldatra is.

## Feladatok felosztása

#### Bernáth Milán: 
* Játék osztály
* Játéktér osztály
* Tárgy osztály
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
* Tárgy
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

[UML ábra link](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22Oldal-1%22%20id%3D%22jbUr94N2kbq8rdtSWQBe%22%3E7Zxrb%2BI4FIZ%2FDdLsSkW5cenHQtsZTdtRd1vNdD%2BtXOISFyeOEnP99XNMHCAhtCGNKexaqip8YptwzhPnPSeXht33Z18jFHp3zMW0YRnurGFfNizr3HbgvzDME0PrvJMYhhFxE5O5NjyQBZZGQ1rHxMVxpiNnjHISZo0DFgR4wDM2FEVsmu32wmj2W0M0xFuGhwGi29ZfxOVeYu1anbX9GyZDL%2F1ms32ebPFR2ln%2BkthDLptumOyrht2PGOPJJ3%2FWx1T4LvVLMu56x9bVjkU44GUG3DwZAZr%2Bex6GvveD%2Bj8eB8b0rGAWaYr5PPVBPCU%2BRQG0ei8s4A9yiwltRMkwgM8DGI4jMExwxAm470Ju4CwE68Aj1L1FczYWXxJzNBilrZ7HIrKAaRGVc8LmiEsSrHamx4MYCWYDrBGOoc99uudmznSHZpmOtyjm0jBglKIwJs%2Brn%2BGjaEiCHuOc%2BbLT1CMcP4RoIPpMgW2xI9xPdzJx0gTRsXTSd8TxSFrBB3i24U0ZkK%2BY%2BZhHc%2BjiZZixknHTNWBmW1KTHkeymR5Fsokk3cPVzGsA4INkYA8erG0e3uJmAxL4xXwZvIiNcJ9RBjRcBiyhhlCaM6XgUPzCd2ITg%2FtJMLxd9rl01pa%2FpfeEicHYF7o8sjziujgQIWcccZTEVwQzZCTgS1%2B1evAH3usbzVajBTveh7a5bsOf6B7xPgvgtyCydAMGeKZYALQ3F2fQfBVsPMLxAYeofQH%2Fv68MFXiBY2InLvNsl9r5sDUfCvgYoQiN%2BAYfNyuDGj5aliI%2BnMp8ULKMe8JHeqo1K8HhQ5gpXtPwKGC5PDO3iLG3ibEL6KDoGdN7FhNOmJg%2FSvrmqHkPjCz5JPBwRHgREZWC3n035p2uopi39JpQ85rQsHpCq475lz%2BS9WDCIAKK1oKuqnNFW2vLOrVlVblQJC9XelJOY9sH0pedbSbeYkevFaX0A0A9nKPRSj5QAlPVtFzkUw9l0rJbGQ0tHWqWDlvppiq5eK6XAyXSgYgzJhoNCLuiFAcsWuD4y84sQ4HIyBPUVnVCSeuEGqGaEfLx8BUDO0SIUEVUKJOepq5r1qU9H4W2qCY87TeSUjmNY%2BTUhWOrQqJ0aVPnqftozwBPktPHA49g7%2BtaKg5W0TRLlzQ1F%2FtwEbIFAf2RsNHo9Gbia0U4O9CjjXwxR%2FAch%2Bvxp1PlNEuXOXWd879T5zRLFzr1SlE1XalPax6szGkW1Dk1FnVgoSIFyWOxqo7Wz0VBrVPnIJVykItXzpSlIO1cCuLYHVVElC1xpujolaJcCjInfIISpfnMGMUoOJTEVJeWlC2NalY%2Blq6eeCpila1%2Fak5OLX1VlsgU3TtalhmdvipOX03DURX20hVQvVQcX%2F6qLlGxCiqgOlGplKjcjOkgrpaplLgJPH%2BxRF2mYpUtcKbs6KXimNWnsizFKlsS1ZycmvpUl7GUrZcWMKPV56lePLHK3vmpV4ojFJ%2FKLp5YBSVRrT2rac%2BPPDNktp135Wf%2BRuD0nvH6oShb%2B0zp0WvFx1XFiSlPu2zdUzOyFyMe4mQRo1H9DxIcTGDaZcubBWhogXmqAtMuW93UC8K%2Bt2GwBRue9JOIdtl7PDUb%2Bz6jiukEx4tTLHvbpWucGoojvG%2FLVnUiceQXYXfrzUDbOSobRwP8Fjvb1Qwxb5rBgus9NmQBoldrKwR0HLjYleFc97llSwkhPP%2BKOZ%2FLFBWNOcvGBc8IfxLDIcxJ6x85mfh8OdtszNNGAM5LBjnnTmoQ48ymAc6WhvXgZSsz%2Bh60BMRApOHS6F6IVzBB85kykTcL0zUR8Vh2SHwjnl7Fb16PbBcjE2EKanWSjVL9PFg18lBwafXYeTA3WTCaRqfzqSzYB2Lh51%2FXZvg0n%2FlD5%2B4b%2BfVz4vev0ldY1LM0fCYJ5iYHKyreWxmyJLTe5WAVchYuz1SVIt75zIDXeey3Ti%2FgTauViflhIp4Irs8KuV3ncm%2BcYMw%2FI%2BTmDlV4mJAXZAI7n9XY8HOROt43Jdh53WJVPsrisCW5zUoKOy2fbijsXLVfxRP8hc4vuIXgf%2B%2F8bq6Kbqhyfql3NB2r85vNPxX538m9D8ky938sHZrrl7sut228Ide%2B%2Bg0%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E)