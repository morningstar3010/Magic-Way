<p align="center"><img src="assets/logo.webp" alt="Magic Way" width="320"></p>

<h3 align="center">Portale teleportacyjne między mapami dla Foundry VTT 14</h3>

<p align="center">Niewidoczne obszary rysowane przeciąganiem · trzy tryby portali · jeden panel dla MG · dowolny system gry</p>

<p align="center">
  <a href="https://github.com/morningstar3010/magic-way/releases"><img alt="Version" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fmorningstar3010%2Fmagic-way%2Fmain%2Fmodule.json&query=%24.version&label=version&color=8e44ad"></a>
  <img alt="Foundry VTT" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fmorningstar3010%2Fmagic-way%2Fmain%2Fmodule.json&query=%24.compatibility.verified&label=Foundry%20VTT&prefix=v&color=f37b21">
  <a href="https://github.com/morningstar3010/magic-way/releases"><img alt="Downloads" src="https://img.shields.io/github/downloads/morningstar3010/magic-way/total?label=downloads&color=16a085"></a>
</p>

<p align="center">
  <a href="README.md" title="English"><img src="https://flagcdn.com/32x24/gb.png" alt="English" width="32" height="24"></a>
  <a href="README.it.md" title="Italiano"><img src="https://flagcdn.com/32x24/it.png" alt="Italiano" width="32" height="24"></a>
  <a href="README.de.md" title="Deutsch"><img src="https://flagcdn.com/32x24/de.png" alt="Deutsch" width="32" height="24"></a>
  <a href="README.es.md" title="Español"><img src="https://flagcdn.com/32x24/es.png" alt="Español" width="32" height="24"></a>
  <a href="README.fr.md" title="Français"><img src="https://flagcdn.com/32x24/fr.png" alt="Français" width="32" height="24"></a>
  <a href="README.pl.md" title="Polski"><img src="https://flagcdn.com/32x24/pl.png" alt="Polski" width="32" height="24"></a>
  <a href="README.pt-BR.md" title="Português (Brasil)"><img src="https://flagcdn.com/32x24/br.png" alt="Português (Brasil)" width="32" height="24"></a>
  <a href="README.ru.md" title="Русский"><img src="https://flagcdn.com/32x24/ru.png" alt="Русский" width="32" height="24"></a>
  <a href="README.cn.md" title="中文（简体）"><img src="https://flagcdn.com/32x24/cn.png" alt="中文（简体）" width="32" height="24"></a>
  <a href="README.ja.md" title="日本語"><img src="https://flagcdn.com/32x24/jp.png" alt="日本語" width="32" height="24"></a>
  <a href="README.ko.md" title="한국어"><img src="https://flagcdn.com/32x24/kr.png" alt="한국어" width="32" height="24"></a>
</p>

<p align="center">
  🌐 <a href="README.md">English</a> · <a href="README.it.md">Italiano</a> · <a href="README.de.md">Deutsch</a> · <a href="README.es.md">Español</a> · <a href="README.fr.md">Français</a> · <b>Polski</b> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.ru.md">Русский</a> · <a href="README.cn.md">中文（简体）</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a>
</p>

---

**Magic Way** przenosi żetony z jednego miejsca w drugie: w obrębie tej samej mapy albo na inną mapę tego samego świata. Rysujesz na mapie **wejście** i **przybycie**, a każdy żeton, który wejdzie na wejście, pojawi się na przybyciu z magicznym błyskiem. Gracze nigdy nie widzą tych obszarów. Wszystkim sterujesz z jednego panelu.

## Spis treści

1. [Instalacja](#install)
2. [Twój pierwszy portal w minutę](#quick-start)
3. [Otwórz panel](#open-panel)
4. [Panel w skrócie](#panel)
5. [Tworzenie portalu krok po kroku](#create)
6. [Używanie portali i zarządzanie nimi](#manage)
7. [Strefy: porządek w portalach](#zones)
8. [Wyszukiwanie i filtry](#filters)
9. [Przenoszenie map do innego świata](#export)
10. [Ustawienia i język](#settings)
11. [Pytania i problemy](#faq)
12. [Makra](#macros)

<a name="install"></a>
## 1. Instalacja

1. W Foundry otwórz **Moduły dodatkowe** i kliknij **Zainstaluj moduł**.
2. Na dole, w polu **URL manifestu**, wklej ten adres i kliknij **Zainstaluj**:

```
https://github.com/morningstar3010/magic-way/releases/latest/download/module.json
```

3. Otwórz swój świat, przejdź do **Zarządzaj modułami**, zaznacz **Magic Way** i zapisz.

<a name="quick-start"></a>
## 2. Twój pierwszy portal w minutę

- [ ] Kliknij przycisk **Magic Way – Panel portali** na pasku narzędzi po lewej.
- [ ] Kliknij **Nowy portal** i wpisz nazwę wejścia oraz nazwę przybycia.
- [ ] Kliknij **Dalej: narysuj wejście** i przeciągnij prostokąt na mapie.
- [ ] Zostań na tej scenie albo otwórz inną i przeciągnij prostokąt dla przybycia.
- [ ] Gotowe! Przesuń żeton gracza na wejście i patrz, jak podróżuje.

> [!TIP]
> Przybycie może być **na tej samej scenie** co wejście albo **na dowolnej innej scenie tego samego świata**. Podczas rysowania możesz spokojnie zmienić scenę.

<a name="open-panel"></a>
## 3. Otwórz panel

<table><tr>
<td width="240"><img src="docs/images/toolbar-button.webp" alt="Przycisk panelu na pasku narzędzi" width="220"></td>
<td>

Panel jest tylko dla MG. Możesz go otworzyć na trzy sposoby:

- **przyciskiem z drzwiami** na pasku narzędzi po lewej (w grupie Żetony albo w grupie Regiony);
- wybranym przez siebie klawiszem, ustawionym w **Konfiguruj sterowanie**;
- z makra: `game.modules.get("magic-way").api.pannello()`.

</td>
</tr></table>

<a name="panel"></a>
## 4. Panel w skrócie

![Panel Magic Way](docs/images/panel.webp)

| Część | Co tam znajdziesz |
|---|---|
| **Strefy** (lewa kolumna) | Twoje grupy portali, jak foldery. **Wszystkie** pokazuje każdy portal. |
| **Górny pasek** | **Nowy portal**, pole **wyszukiwania**, **Otwórz wszystkie**, **Zamknij wszystkie**, **Tylko ta scena**, **Napraw połączenia**. |
| **Połączenia** (środek) | Każde połączenie to karta: **wejście** po lewej, **przybycie** po prawej. Podwójna strzałka ⟷ oznacza, że możesz też wrócić. |

Przy każdym obszarze widzisz nazwę jego mapy. **oglądasz tę scenę** oznacza, że obszar jest na scenie, którą właśnie oglądasz. **aktywna dla graczy** oznacza, że jest na scenie, na której są teraz twoi gracze.

<a name="create"></a>
## 5. Tworzenie portalu krok po kroku

### Krok 1 – Wypełnij formularz

Kliknij **Nowy portal** na górze panelu.

![Formularz Nowy portal](docs/images/new-portal.webp)

| Pole | Co oznacza |
|---|---|
| **Nazwa wejścia** | Nazwa obszaru, na który wchodzą żetony (na przykład *Magiczny krąg wieży*). |
| **Nazwa przybycia** | Nazwa obszaru, na którym pojawiają się żetony (na przykład *Magiczny krąg krypty*). |
| **Tryb** | Kiedy portal działa: **Swobodny**, **Otwarty / zamknięty** albo **Na polecenie MG**. Szczegóły niżej. |
| **Kto może przejść** | Które żetony podróżują: gracze, potwory i BN prowadzone przez MG albo wszyscy. |
| **Strefa** | Grupa, do której trafia portal. Możesz ją zmienić później. |
| **Utwórz także powrót** | Zaznacz, żeby przybycie działało też jako portal z powrotem do wejścia, z własnym trybem. |

<details>
<summary><b>Trzy tryby</b> (kliknij, aby otworzyć)</summary>

| Tryb | Co się dzieje, gdy żeton wejdzie na wejście |
|---|---|
| **Swobodny** | Od razu zostaje teleportowany. Portal jest zawsze otwarty. |
| **Otwarty / zamknięty** | Podróżuje tylko wtedy, gdy trzymasz portal **Otwarty**. Gdy jest **Zamknięty**, żetony po nim chodzą i nic się nie dzieje. Otwierasz go i zamykasz w panelu jednym kliknięciem. |
| **Na polecenie MG** | Samo z siebie nic się nie dzieje. Gdy jesteś gotowy, klikasz **Teleportuj teraz** i wszyscy w obszarze podróżują razem. |

</details>

<details>
<summary><b>Kto może przejść</b> (kliknij, aby otworzyć)</summary>

![Kto może przejść](docs/images/who-can-pass.webp)

- **Tylko gracze**: tylko żetony, których właścicielem jest gracz. Twoje potwory mogą chodzić po portalu i nie znikają.
- **Tylko potwory i BN MG**: tylko żetony, których nie ma żaden gracz.
- **Gracze, potwory i BN**: wszyscy.

Ten wybór działa też przy **Teleportuj teraz**.

</details>

<details>
<summary><b>Powrót</b> (kliknij, aby otworzyć)</summary>

![Utwórz także powrót](docs/images/return.webp)

Gdy zaznaczysz powrót, przybycie staje się też portalem z powrotem do wejścia. Menu obok pola ustawia tryb powrotu, który może być inny niż w drodze tam. Zapomniałeś zaznaczyć? Nic nie szkodzi: karta przybycia ma przycisk **Utwórz powrót**.

</details>

### Krok 2 – Narysuj wejście

Kliknij **Dalej: narysuj wejście**, a potem **przeciągnij po mapie**. Prostokąt przyciąga się do siatki i może być tak duży, jak chcesz. Pasek na górze pokazuje jego rozmiar w polach i w metrach. Jedno kliknięcie zajmuje tylko jedno pole. **Esc** albo **prawy klik** anuluje.

![Rysowanie wejścia](docs/images/draw-entrance.webp)

### Krok 3 – Narysuj przybycie

Teraz **zostań na tej scenie albo otwórz inną scenę tego samego świata** i tak samo przeciągnij obszar przybycia.

![Rysowanie przybycia](docs/images/draw-arrival.webp)

### Krok 4 – Gotowe!

<table><tr>
<td width="320"><img src="docs/images/areas-on-map.webp" alt="Wejście i przybycie na mapie" width="300"></td>
<td>

**Wejście jest fioletowe**, **przybycie jest zielone**. Widzisz je tylko wtedy, gdy aktywna jest warstwa **Regiony**. **Gracze nigdy ich nie widzą.**

Możesz też zmieniać ich kształt zwykłymi narzędziami regionów w Foundry, na przykład żeby nadać obszarowi kształt wielokąta.

</td>
</tr></table>

> [!WARNING]
> W konfiguracji regionu **nie zaznaczaj „Ukryty” (Hidden)**. Obszary i tak są niewidoczne dla graczy, a w Foundry 14 „Ukryty” wyłącza wszystko w obszarze, więc portal przestaje działać. Jeśli zaznaczysz go przez pomyłkę, Magic Way cię ostrzeże, a panel oznaczy portal jako **wyłączony**.

<a name="manage"></a>
## 6. Używanie portali i zarządzanie nimi

Każdy obszar, z którego zaczyna się podróż, ma własne kontrolki:

- pole **nazwy**: kliknij w nie i pisz, żeby zmienić nazwę obszaru;
- menu **trybu** oraz, w trybie Otwarty / zamknięty, przełącznik **Otwarty / Zamknięty**;
- menu **kto może przejść**;
- liczba żetonów **w obszarze** (najedź na nią, żeby zobaczyć ich nazwy).

Na dole każdego obszaru jest rząd przycisków:

![Przyciski obszaru](docs/images/area-buttons.webp)

| Przycisk | Co robi |
|---|---|
| **Teleportuj teraz** | Wysyła wszystkich z obszaru na przybycie, od razu, w każdym trybie. Podświetla się, gdy ktoś jest w środku. |
| 👁 **oko** | **Pokaż ten obszar na mapie**: otwiera jego scenę, włącza warstwę regionów i wskazuje obszar. |
| ▢ **kwadrat** | **Narysuj ten obszar ponownie**: przeciągnij nowy prostokąt, nawet na innej scenie. |
| ⚙ **zębatka** | **Konfiguracja regionu**: zwykłe okno regionu w Foundry. |

Przybycie bez drogi powrotnej pokazuje **Utwórz powrót**: jedno kliknięcie i możesz podróżować w obie strony.

### Usuwanie połączenia

Kliknij **czerwony kosz** w prawym górnym rogu karty i potwierdź.

![Usuń połączenie](docs/images/delete-link.webp)

Połączenie znika **razem ze swoimi obszarami na mapie**: nie musisz niczego usuwać ręcznie. Obszar zostaje tylko wtedy, gdy używa go jeszcze inne połączenie albo gdy ma zachowania dodane przez inne moduły.

<a name="zones"></a>
## 7. Strefy: porządek w portalach

Strefy są jak foldery: na przykład *Wieża czarodzieja*, *Loch – poziom 1*, *Miasto*.

![Nowa strefa](docs/images/new-zone.webp)

- **Tworzenie strefy**: kliknij **+** na górze kolumny Strefy. Wybierz **nazwę**, **kolor** (jeden z gotowych albo dowolny inny) i, jeśli chcesz, strefę, **w której** ma się znaleźć.
- **Podstrefy**: strefy mogą być w innych strefach, tak głęboko, jak chcesz. Zawsze są w **kolejności alfabetycznej**.
- **Filtr**: kliknij strefę, żeby zobaczyć tylko jej portale, razem z portalami jej podstref. Liczba obok liczy je wszystkie.
- **Kolor**: widzisz go na ikonie folderu i na krawędzi kart jej portali.
- **Najedź na strefę**, żeby zobaczyć trzy przyciski: **+** tworzy w niej podstrefę, **ołówek** zmienia nazwę, kolor i strefę nadrzędną, **kosz** ją usuwa (jej portale i podstrefy przechodzą poziom wyżej).

**Przeciągnij i upuść** załatwia resztę:

| Przeciągnij… | …i upuść na | Wynik |
|---|---|---|
| kartę portalu (chwyć ją za pasek tytułu) | strefę | portal trafia dokładnie do tej strefy, nawet do podstrefy |
| kartę portalu | **Wszystkie** | portal nie ma już strefy |
| strefę | inną strefę | staje się podstrefą tamtej strefy |
| strefę | **Wszystkie** | wraca na najwyższy poziom |

**Kłódka** obok **+** na górze kolumny stref blokuje i odblokowuje przenoszenie stref przez przeciąganie. Gdy jest zamknięta, strefy zostają na miejscu, ale nadal możesz przeciągać do nich portale.

Strefa, która podczas przeciągania robi się **czerwona**, oznacza „nie wolno”: strefa nie może trafić do samej siebie ani do jednej ze swoich podstref.

Strefę portalu możesz też wybrać z menu z ikoną folderu na górze jego karty.

<a name="filters"></a>
## 8. Wyszukiwanie i filtry

- **Szukaj portalu lub mapy…**: wpisz fragment nazwy portalu **albo mapy**. Wielkość liter i akcenty nie mają znaczenia. Karty, które nie pasują, znikają, tak samo jak strefy, które zostają puste.
- <img src="docs/images/this-scene-only.webp" alt="Tylko ta scena" height="22"> **Tylko ta scena**: pokazuje tylko połączenia, które mają obszar na scenie, którą oglądasz. Kliknij jeszcze raz, żeby zobaczyć wszystkie.
- **Otwórz wszystkie** i **Zamknij wszystkie**: za jednym razem otwierają lub zamykają wszystkie portale **Otwarty / zamknięty**, które widzisz na liście.

<a name="export"></a>
## 9. Przenoszenie map do innego świata

Portale podróżują **razem ze swoimi mapami**. Wyeksportuj scenę (do kompendium, Przygody albo pliku JSON), zaimportuj ją do innego świata albo na inny serwer, gdzie Magic Way jest aktywny, a obszary i portale przejdą razem z nią.

Zaimportowane sceny dostają nowe ID, ale każdy obszar ma własny kod, a każdy portal pamięta, gdzie jest jego przybycie. Magic Way **sam naprawia połączenia** przy starcie świata i po każdym imporcie. Możesz też sam kliknąć **Napraw połączenia**. Brakujące strefy są odtwarzane z nazwą, kolorem i strefami nadrzędnymi.

Jeśli zaimportujesz tylko jedną z dwóch map połączenia, portal pokaże **czerwone ostrzeżenie** z nazwą brakującej mapy. Zaimportuj też ją, a połączenie samo się naprawi. Mapa zduplikowana w tym samym świecie też działa.

![Napraw połączenia](docs/images/repair-links.webp)

<a name="settings"></a>
## 10. Ustawienia i język

Otwórz **Konfiguruj ustawienia → Magic Way**.

![Ustawienia Magic Way](docs/images/settings.webp)

| Ustawienie | Co robi |
|---|---|
| **Język Magic Way (tylko ten moduł)** | Wybiera język tylko dla Magic Way: Foundry i inne moduły zostają bez zmian. **Automatycznie** podąża za Foundry. Ustawienie osobiste; strona się przeładuje. |
| **Powiadamiaj MG o każdej teleportacji** | Wiadomość mówi ci, kto podróżował, przez który portal i na jaką scenę. |
| **Efekt znikania i pojawiania się** | Magiczny błysk: żeton znika przy odejściu i pojawia się przy przybyciu. Widzi to każdy, kto ogląda scenę. |
| **Kolor magicznego błysku** | Kolor pierścienia i poświaty. |
| **Przejście przy zmianie sceny** | Gracze przeniesieni na inną scenę dostają płynne przejście. |
| **Dźwięk teleportacji** | Plik dźwiękowy odtwarzany wszystkim przy każdej podróży. Zostaw puste, jeśli nie chcesz dźwięku. |
| **MG podąża za drużyną** | Po podróży na twoje polecenie na inną scenę twój widok też tam przechodzi. Ustawienie osobiste. |

Dostępne języki: English, Italiano, Deutsch, Español, Français, Polski, Português (Brasil), Русский, 中文（简体）, 日本語, 한국어.

<a name="faq"></a>
## 11. Pytania i problemy

<details>
<summary><b>Żeton wchodzi na wejście i nic się nie dzieje</b></summary>

Sprawdź te punkty, po kolei:

1. **Tryb**: portal **Otwarty / zamknięty** musi być **Otwarty**; portal **Na polecenie MG** czeka na **Teleportuj teraz**.
2. **Kto może przejść**: przy **Tylko gracze** twoje potwory chodzą po nim i nigdzie nie podróżują.
3. **Musi być połączony MG**: tylko MG może tworzyć i usuwać żetony na scenach.
4. Panel nie może pokazywać **wyłączony**: w konfiguracji regionu „Ukryty” musi być odznaczone.

</details>

<details>
<summary><b>Czy moi gracze widzą obszary?</b></summary>

Nie. Obszary widzi tylko MG i tylko na warstwie regionów.

</details>

<details>
<summary><b>Co się dzieje, gdy przybycie jest na innej scenie?</b></summary>

Żeton jest tworzony od nowa na scenie przybycia z tym samym aktorem i ustawieniami, a potem usuwany ze sceny odejścia. Jego właściciele są przenoszeni na nową scenę, a ich widok jest wyśrodkowany na ich żetonie. Magiczny błysk chwilę czeka, żeby gracze zdążyli wczytać mapę.

</details>

<details>
<summary><b>Kilka żetonów przybywa razem: czy na siebie nachodzą?</b></summary>

Nie. Zajmują wolne pola obszaru przybycia, zaczynając od środka. Jeśli pól nie wystarczy, ustawiają się dookoła obszaru.

</details>

<details>
<summary><b>Czy działają sceny z kilkoma poziomami?</b></summary>

Tak. Żeton przybywa na poziom obszaru przybycia.

</details>

<details>
<summary><b>Czy mogę zmienić w portal region, który sam narysowałem?</b></summary>

Tak. W konfiguracji regionu dodaj zachowanie **Magic Way – Portal** i wybierz jego obszar przybycia. Panel sam go znajdzie.

</details>

<a name="macros"></a>
## 12. Makra

<details>
<summary><b>Polecenia dla makr i innych modułów</b> (kliknij, aby otworzyć)</summary>

`"Nazwa"` to nazwa portalu (jego UUID też działa).

```js
const mw = game.modules.get("magic-way").api;
mw.pannello();                       // otwiera panel
mw.apri("Nazwa");                    // otwiera portal Otwarty / zamknięty
mw.chiudi("Nazwa");                  // zamyka go
mw.alterna("Nazwa");                 // otwiera go, gdy jest zamknięty, zamyka, gdy jest otwarty
mw.modalita("Nazwa", "comando");     // tryb: "libero" (swobodny) | "controllato" (otwarty/zamknięty) | "comando" (na polecenie)
mw.passano("Nazwa", "tutti");        // kto przechodzi: "giocatori" (gracze) | "png" (potwory i BN) | "tutti" (wszyscy)
mw.teletrasporta("Nazwa");           // teleportuje teraz wszystkich z obszaru
mw.teletrasportaToken("Nazwa", canvas.tokens.controlled); // teleportuje zaznaczone żetony
mw.ripara();                         // naprawia połączenia po imporcie
```

Po każdej podróży moduł wywołuje hook `magic-way.teletrasporto` z `{portale, destinazione, tokens}`.

</details>

---

<p align="center">Stworzone przez <b>MorningStar</b></p>
