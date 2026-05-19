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

[UML ábra link](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=N%C3%A9vtelen%20diagram.drawio&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22Oldal-1%22%20id%3D%22jbUr94N2kbq8rdtSWQBe%22%3E7Zxbc5s4FMc%2FjWe6D%2BkYZHx5TOy0nSbpZutsm92XHcUoRrFADMjXT79HRhhzcYIpcuspMxmPdZBkOOeH9D9CpIWG7upjgH3njtuEtcy2vWqhUcs0LRPBpzSsI0PXMiLDNKB2ZNozjOmGKGNbWefUJmGqouCcCeqnjRPueWQiUjYcBHyZrvbMWfpXfTwlOcN4glne%2Bp3awomsfbOX2D8ROnXiXza6g%2BiIi%2BPK6kpCB9t8uWdC1y00DDgX0Td3NSRM%2Bi72S9Tuw4GjuxMLiCfKNLh5bHt4%2Bd%2FA913nC3O%2FPEzay4uCXpQpFOvYB%2BGSugx7ULp65p4YqyMGlDGjUw%2B%2BT6A5CcCwIIGg4L5LdUBwH6wThzL7Fq%2F5XP5IKPBkFpeuHB7QDXSLmeoTDgdCkWB2UzXGsiWY22ANSAh17uMzNzKmO7xKVbzFoVCGCWcM%2ByF92l2Gi4Mp9a64ENxVlZYOFWTs44msswS25YkINz7JyEkLzObKSZ%2BxIDNlBR%2BQ1Z43VUA%2BEu4SEayhipNixozaLRPAjK6iRnUzUEV1F1mqiBXd013PCQDwRTFwBA9mnofXuNmDBK5YbIMX8BkZcsaBhpHHI2ooYxlTDA4jz%2BIgNiG4n3rT222dUSexfFXekyYObZ%2FZ9s5yqG0TT4acCyxwFF8ZTJ9TT2x9ZV3BH3hv2H5vtSw48SGUjaQMf7J6IIbcg2vBdOsGAvAsiQToaC4uoPgi2XiA%2BwNuUXQJn593hgq8wD1xEJd1ukrtfKCGDw18zHCAZ2KPj5udQQ8flqmJj05lPhjdxj3iI55qjUpwuBBmRhIaHiQsowsjRwzKE4MK6GD4ibB7HlJBuew%2FiOpmqHkLjDT51HNIQEUREZWC3n8z5r2%2BpphbzZhQ85jQMq%2BkVp2Ld39E48GCQwQ0jQV9XXNFt9GWdWrLqnKhSF7u9KTqBqET6ctenonX2GnGilL6AaCervFsJx8Yha5qGi6yqYc2admvjEYjHWqWDrl0U5dcHDTDgRbpQOWMiWcTyq8ZIx4PNiR8dzDL0CAysgR1dU0o8Tphg1DNCLlk%2BkKAHSpFqCYqtElPo0BnNNqzkva8fBG8mu5Er%2BSk8eOBTC6y06H1E1FWXsToNANFKenpralY4GgCeeKcEey1zC52ZVvvKfSTduezyGmUlSUNK8exQhYRKGMRwNmfihNt6tUsqz0aTo7ixOcbCtI1YqXVu1rJn5Xh7I1OxYy2xdKi57ZlmWnyXM1L5Ea7oyvsZjNU6E5168tTclwY2qaQggeqTaJSKVG5mbNJWC1TKbEBA6FOOlMxLV1IlH2GGrPTDBW%2FsvrUlqWYZZ%2B7Npycm%2FrUl7EUPJMty0yjPs91g4ZZ9qlrM1L8guJT2yK5WbAk2mjPatrzR%2FbrlVkozz6E17ZObpZd%2B4zpacaKH1cVZ6Y8Udl1z4aRoxhxsKCbEM%2Fq38RzMoGJyi5vFqDRCMxzFZio7OpmMyAcuwuDb%2Fj0rHcBo7KvjDRsHLs%2FnLAFCTe%2F%2BLL3t78%2BGP7jeuVOO3ef6PdvC3d4Hb8KQOzcy5f5VITPgwl5jZscNrLbOE8Brzt8yj3MrhMrxHLu2cRWkUzq3PLtRCGd%2FkKEWKtEBM8FT4eErKh43Pv%2Bj%2BwKoh2VRnH2sS2s44IHrnvcL%2By1ksWk2baUtLMv5Zus8mr8LYpg%2BUClx7fHo%2BuXe4DJa%2FdXr5iJgDCQHYt0HGoPuFljwK3zC%2Fh700rF%2FDQRj0bUnxVyVGPI412ePyfmSZxl8Iz37V6vbNxrDbv8kXvQjBAfudxyFAroB1HYNoWzw%2Bu9CmoKTHq%2Bl4Zk1aLTs9IZaaezj1W%2BvtF5rT58ic7gQOt%2BJv%2FtoPT1RF5SrTJ073xSHfiC53YHX3nbo6xo8j9W8RxcgdslQumbIacojEoaIl4I2NMQmXUrHfvAC51f8DDst3d%2B9n5o63J%2BqTf9fjPno17G%2B4MavL9c3Yh%2FH6%2F%2Fvls9z%2F80%2Bkh0X0a1iun8WxInnWcHg5S8MozuGxNttQnz1PNgN8NCFx0xrVkDIw2SmQEpCmpuWnvzLHKb7eubHws5LVgk%2Bu1Hia6ZHSV6R48SUEz%2Bi1AUrORfMaHr%2FwE%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E)