<p align="center"><img src="assets/logo.webp" alt="Magic Way" width="320"></p>

<h3 align="center">Portali di teletrasporto fra mappe per Foundry VTT 14</h3>

<p align="center">Aree invisibili che disegni trascinando · tre modalità di portale · un solo pannello per il master · qualsiasi sistema di gioco</p>

<p align="center">
  <a href="https://github.com/morningstar3010/magic-way/releases"><img alt="Version" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fmorningstar3010%2Fmagic-way%2Fmain%2Fmodule.json&query=%24.version&label=version&color=8e44ad"></a>
  <img alt="Foundry VTT" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fmorningstar3010%2Fmagic-way%2Fmain%2Fmodule.json&query=%24.compatibility.verified&label=Foundry%20VTT&prefix=v&color=f37b21">
  <a href="https://github.com/morningstar3010/magic-way/releases"><img alt="Downloads" src="https://img.shields.io/github/downloads/morningstar3010/magic-way/total?label=downloads&color=16a085"></a>
</p>

<p align="center">
  <a href="README.md" title="English"><img src="https://flagcdn.com/32x24/gb.png" alt="English" width="32" height="24"></a>
  <a href="README.it.md" title="Italiano"><img src="https://flagcdn.com/32x24/it.png" alt="Italiano" width="32" height="24"></a>
</p>

<p align="center">
  🌐 <a href="README.md">English</a> · <b>Italiano</b>
</p>

---

**Magic Way** sposta i token da un posto all'altro: dentro la stessa mappa oppure su un'altra mappa dello stesso mondo. Disegni sulla mappa un **ingresso** e un **arrivo**, e ogni token che entra nell'ingresso compare all'arrivo con un lampo magico. I giocatori non vedono mai le aree. Gestisci tutto da un unico pannello.

## Indice

1. [Installazione](#install)
2. [Il tuo primo portale in un minuto](#quick-start)
3. [Aprire il pannello](#open-panel)
4. [Il pannello in breve](#panel)
5. [Creare un portale, passo per passo](#create)
6. [Usare e gestire i portali](#manage)
7. [Zone: portali in ordine](#zones)
8. [Ricerca e filtri](#filters)
9. [Portare le mappe in un altro mondo](#export)
10. [Impostazioni e lingua](#settings)
11. [Domande e problemi](#faq)
12. [Macro](#macros)

<a name="install"></a>
## 1. Installazione

1. In Foundry apri **Moduli aggiuntivi** e premi **Installa modulo**.
2. In basso, nel campo **URL del manifest**, incolla questo indirizzo e premi **Installa**:

```
https://github.com/morningstar3010/magic-way/releases/latest/download/module.json
```

3. Apri il tuo mondo, vai in **Gestisci moduli**, spunta **Magic Way** e salva.

<a name="quick-start"></a>
## 2. Il tuo primo portale in un minuto

- [ ] Clicca il pulsante **Magic Way – Pannello dei portali** nella barra degli strumenti a sinistra.
- [ ] Premi **Nuovo portale** e scrivi un nome per l'ingresso e uno per l'arrivo.
- [ ] Premi **Avanti: disegna l'ingresso** e trascina un rettangolo sulla mappa.
- [ ] Resta su questa scena oppure aprine un'altra, e trascina un rettangolo per l'arrivo.
- [ ] Fatto! Sposta un token di un giocatore dentro l'ingresso e guardalo viaggiare.

> [!TIP]
> L'arrivo può stare **sulla stessa scena** dell'ingresso oppure **su qualsiasi altra scena dello stesso mondo**. Mentre disegni puoi cambiare scena tranquillamente.

<a name="open-panel"></a>
## 3. Aprire il pannello

<table><tr>
<td width="240"><img src="docs/images/toolbar-button.webp" alt="Pulsante del pannello nella barra degli strumenti" width="220"></td>
<td>

Il pannello è solo per il master. Puoi aprirlo in tre modi:

- con il **pulsante con la porta** nella barra degli strumenti a sinistra (nel gruppo Token oppure nel gruppo Regioni);
- con un tasto che scegli tu in **Configura comandi**;
- da una macro: `game.modules.get("magic-way").api.pannello()`.

</td>
</tr></table>

<a name="panel"></a>
## 4. Il pannello in breve

![Il pannello di Magic Way](docs/images/panel.webp)

| Parte | Cosa ci trovi |
|---|---|
| **Zone** (colonna a sinistra) | I tuoi gruppi di portali, come delle cartelle. **Tutti** mostra ogni portale. |
| **Barra in alto** | **Nuovo portale**, la **ricerca**, **Apri tutti**, **Chiudi tutti**, **Solo questa scena**, **Ripara collegamenti**. |
| **Collegamenti** (al centro) | Ogni collegamento è un riquadro: l'**ingresso** a sinistra, l'**arrivo** a destra. La freccia doppia ⟷ vuol dire che si può anche tornare indietro. |

Su ogni area vedi il nome della sua mappa. **stai guardando questa** vuol dire che è sulla scena che stai guardando. **attiva per i giocatori** vuol dire che è sulla scena dove si trovano i tuoi giocatori.

<a name="create"></a>
## 5. Creare un portale, passo per passo

### Passo 1 – Compila il modulo

Premi **Nuovo portale** in cima al pannello.

![Il modulo Nuovo portale](docs/images/new-portal.webp)

| Campo | Cosa vuol dire |
|---|---|
| **Nome dell'ingresso** | Il nome dell'area in cui entrano i token (per esempio *Cerchio magico della torre*). |
| **Nome dell'arrivo** | Il nome dell'area in cui compaiono i token (per esempio *Cerchio magico della cripta*). |
| **Modalità** | Quando funziona il portale: **Libero**, **Aperto / chiuso** oppure **Su comando del master**. Vedi sotto. |
| **Chi può passare** | Quali token viaggiano: i giocatori, i mostri e i PNG del master, oppure tutti. |
| **Zona** | Il gruppo in cui va il portale. Puoi cambiarlo quando vuoi. |
| **Crea anche il ritorno** | Spuntalo perché anche l'arrivo funzioni da portale verso l'ingresso, con una sua modalità. |

<details>
<summary><b>Le tre modalità</b> (clicca per aprire)</summary>

| Modalità | Cosa succede quando un token entra nell'ingresso |
|---|---|
| **Libero** | Viene teletrasportato subito. Il portale è sempre aperto. |
| **Aperto / chiuso** | Passa solo mentre tieni il portale **Aperto**. Quando è **Chiuso**, i token ci camminano sopra e non succede niente. Lo apri e lo chiudi dal pannello con un clic. |
| **Su comando del master** | Da solo non succede niente. Quando sei pronto premi **Teletrasporta ora** e tutti quelli dentro l'area viaggiano insieme. |

</details>

<details>
<summary><b>Chi può passare</b> (clicca per aprire)</summary>

![Chi può passare](docs/images/who-can-pass.webp)

- **Solo giocatori**: solo i token che appartengono a un giocatore. I tuoi mostri possono camminare sul portale senza sparire.
- **Solo mostri e PNG del master**: solo i token che non appartengono a nessun giocatore.
- **Giocatori, mostri e PNG**: tutti.

Questa scelta vale anche per **Teletrasporta ora**.

</details>

<details>
<summary><b>Il ritorno</b> (clicca per aprire)</summary>

![Crea anche il ritorno](docs/images/return.webp)

Con il ritorno spuntato, anche l'arrivo diventa un portale verso l'ingresso. Il menu accanto alla casella sceglie la modalità del ritorno, che può essere diversa da quella dell'andata. Ti sei dimenticato di spuntarlo? Nessun problema: il riquadro dell'arrivo ha il pulsante **Crea il ritorno**.

</details>

### Passo 2 – Disegna l'ingresso

Premi **Avanti: disegna l'ingresso**, poi **trascina sulla mappa**. Il rettangolo si aggancia alla griglia e può essere grande quanto vuoi. La fascia in alto mostra le misure in caselle e in metri. Un semplice clic prende una sola casella. **Esc** o il **clic destro** annullano.

![Disegno dell'ingresso](docs/images/draw-entrance.webp)

### Passo 3 – Disegna l'arrivo

Ora **resta su questa scena oppure apri un'altra scena dello stesso mondo**, poi trascina allo stesso modo l'area d'arrivo.

![Disegno dell'arrivo](docs/images/draw-arrival.webp)

### Passo 4 – Fatto!

<table><tr>
<td width="320"><img src="docs/images/areas-on-map.webp" alt="Ingresso e arrivo sulla mappa" width="300"></td>
<td>

L'**ingresso è viola**, l'**arrivo è verde**. Li vedi solo quando è attivo il livello **Regioni**. **I giocatori non li vedono mai.**

Puoi anche cambiarne la forma con gli strumenti normali delle Regioni di Foundry, per esempio per dare a un'area la forma di un poligono.

</td>
</tr></table>

> [!WARNING]
> Nella configurazione della regione **non spuntare «Nascosto»**. Le aree sono già invisibili ai giocatori, e in Foundry 14 «Nascosto» spegne tutto quello che c'è nell'area, quindi il portale smette di funzionare. Se lo spunti per sbaglio, Magic Way ti avvisa e il pannello segna il portale come **disattivato**.

<a name="manage"></a>
## 6. Usare e gestire i portali

Ogni area da cui si parte ha i suoi comandi:

- il campo del **nome**: cliccaci sopra e scrivi per rinominare l'area;
- il menu della **modalità** e, in modalità Aperto / chiuso, l'interruttore **Aperto / Chiuso**;
- il menu **chi può passare**;
- il numero di token **dentro l'area** (passaci sopra con il mouse per vedere i loro nomi).

In fondo a ogni area c'è una riga di pulsanti:

![Pulsanti dell'area](docs/images/area-buttons.webp)

| Pulsante | Cosa fa |
|---|---|
| **Teletrasporta ora** | Manda subito all'arrivo tutti quelli dentro l'area, in qualsiasi modalità. Si accende quando dentro c'è qualcuno. |
| 👁 **occhio** | **Mostra quest'area sulla mappa**: apre la sua scena, passa al livello Regioni e ti indica l'area. |
| ▢ **quadrato** | **Ridisegna quest'area**: trascina un nuovo rettangolo, anche su un'altra scena. |
| ⚙ **ingranaggio** | **Configurazione della regione**: la normale finestra della regione di Foundry. |

Un arrivo da cui non si torna indietro mostra **Crea il ritorno**: un clic e si viaggia in tutti e due i sensi.

### Eliminare un collegamento

Premi il **cestino rosso** in alto a destra nel riquadro e conferma.

![Elimina il collegamento](docs/images/delete-link.webp)

Il collegamento sparisce **insieme alle sue aree sulla mappa**: non devi cancellare niente a mano. Un'area resta solo se la usa ancora un altro collegamento, oppure se contiene comportamenti aggiunti da altri moduli.

<a name="zones"></a>
## 7. Zone: portali in ordine

Le zone sono come delle cartelle: per esempio *Torre del mago*, *Sotterranei livello 1*, *Città*.

![Nuova zona](docs/images/new-zone.webp)

- **Creare una zona**: premi **+** in cima alla colonna Zone. Scegli un **nome**, un **colore** (uno di quelli pronti o quello che vuoi) e, se vuoi, la zona **dentro cui** metterla.
- **Sottozone**: le zone possono stare una dentro l'altra, a qualsiasi profondità. Sono sempre in **ordine alfabetico**.
- **Filtro**: clicca una zona per vedere solo i suoi portali, compresi quelli delle sue sottozone. Il numero accanto li conta tutti.
- **Colore**: lo vedi sull'icona della cartella e sul bordo dei riquadri dei suoi portali.
- **Passa sopra una zona** con il mouse per vedere tre pulsanti: **+** crea una sottozona al suo interno, la **matita** cambia nome, colore e zona superiore, il **cestino** la elimina (i suoi portali e le sue sottozone salgono di un livello).

Il **trascinamento** fa il resto:

| Trascina… | …e lascia sopra | Risultato |
|---|---|---|
| il riquadro di un portale (prendilo dalla barra del titolo) | una zona | il portale va esattamente in quella zona, anche se è una sottozona |
| il riquadro di un portale | **Tutti** | il portale non ha più una zona |
| una zona | un'altra zona | diventa una sottozona di quella zona |
| una zona | **Tutti** | torna in cima |

Il **lucchetto** accanto al **+** in cima alla colonna Zone blocca e sblocca lo spostamento delle zone con il trascinamento. Quando è chiuso le zone restano dove sono, ma puoi sempre trascinarci dentro i portali.

Una zona che diventa **rossa** mentre trascini vuol dire «non si può»: una zona non può andare dentro sé stessa o dentro una delle sue sottozone.

Puoi anche scegliere la zona di un portale dal menu con l'icona della cartella in cima al suo riquadro.

<a name="filters"></a>
## 8. Ricerca e filtri

- **Cerca portale o mappa…**: scrivi una parte del nome di un portale **o di una mappa**. Maiuscole e accenti non contano. I riquadri che non corrispondono spariscono, e spariscono anche le zone rimaste vuote.
- <img src="docs/images/this-scene-only.webp" alt="Solo questa scena" height="22"> **Solo questa scena**: mostra solo i collegamenti che hanno un'area sulla scena che stai guardando. Premilo di nuovo per vederli tutti.
- **Apri tutti** e **Chiudi tutti**: aprono o chiudono in un colpo solo tutti i portali **Aperto / chiuso** che vedi nell'elenco.

<a name="export"></a>
## 9. Portare le mappe in un altro mondo

I portali viaggiano **dentro le loro mappe**. Esporta una scena (in un compendio, in un'Avventura o in un file JSON), importala in un altro mondo o su un altro server dove è attivo Magic Way, e le aree e i portali arrivano con lei.

Le scene importate prendono ID nuovi, ma ogni area ha un suo codice e ogni portale si ricorda dov'è il suo arrivo. Magic Way **ripara i collegamenti da solo** all'avvio del mondo e dopo ogni importazione. Puoi anche premere tu **Ripara collegamenti**. Le zone mancanti vengono ricreate con il loro nome, il loro colore e le zone che le contengono.

Se importi solo una delle due mappe di un collegamento, il portale mostra un **avviso rosso** con il nome della mappa che manca. Importa anche quella e il collegamento si ripara da solo. Funziona anche una mappa duplicata nello stesso mondo.

![Ripara collegamenti](docs/images/repair-links.webp)

<a name="settings"></a>
## 10. Impostazioni e lingua

Apri **Configura impostazioni → Magic Way**.

![Impostazioni di Magic Way](docs/images/settings.webp)

| Impostazione | Cosa fa |
|---|---|
| **Lingua di Magic Way (solo questo modulo)** | Sceglie la lingua solo di Magic Way: Foundry e gli altri moduli restano come sono. **Automatica** segue Foundry. Impostazione personale; la pagina si ricarica. |
| **Avvisa il master a ogni teletrasporto** | Un messaggio ti dice chi ha viaggiato, con quale portale e verso quale scena. |
| **Effetto di dissolvenza e apparizione** | Il lampo magico: il token svanisce alla partenza e riappare all'arrivo. Lo vede chiunque stia guardando la scena. |
| **Colore del lampo magico** | Il colore dell'anello e del bagliore. |
| **Dissolvenza al cambio di scena** | I giocatori portati su un'altra scena hanno una transizione in dissolvenza. |
| **Suono del teletrasporto** | Un file audio suonato per tutti a ogni viaggio. Lascialo vuoto per non avere suoni. |
| **Il master segue il gruppo** | Dopo un viaggio su comando verso un'altra scena, anche la tua vista si sposta lì. Inoltre, quando un portale porta **tutti i giocatori collegati** sulla nuova scena, ci passi anche tu e quella diventa la **scena attiva** (comodo se i giocatori guardano uno schermo comune). |

Lingue disponibili: English, Italiano, Deutsch, Español.

<a name="faq"></a>
## 11. Domande e problemi

<details>
<summary><b>Un token entra nell'ingresso e non succede niente</b></summary>

Controlla questi punti, nell'ordine:

1. **Modalità**: un portale **Aperto / chiuso** deve essere **Aperto**; un portale **Su comando del master** aspetta **Teletrasporta ora**.
2. **Chi può passare**: con **Solo giocatori**, i tuoi mostri ci camminano sopra senza viaggiare.
3. **Serve un master collegato**: solo il master può creare e togliere token sulle scene.
4. Il pannello non deve dire **disattivato**: nella configurazione della regione «Nascosto» deve essere senza spunta.

</details>

<details>
<summary><b>I miei giocatori vedono le aree?</b></summary>

No. Le aree le vede solo il master, e solo sul livello Regioni.

</details>

<details>
<summary><b>Cosa succede quando l'arrivo è su un'altra scena?</b></summary>

Il token viene ricreato sulla scena d'arrivo con lo stesso attore e le stesse impostazioni, poi viene tolto dalla scena di partenza. I suoi proprietari vengono portati sulla nuova scena e la loro vista si centra sul loro token. Il lampo magico aspetta un attimo, così i giocatori fanno in tempo a caricare la mappa.

</details>

<details>
<summary><b>Più token arrivano insieme: si sovrappongono?</b></summary>

No. Occupano le caselle libere dell'area d'arrivo, partendo dal centro. Se non bastano, si sistemano tutt'intorno.

</details>

<details>
<summary><b>Le scene con più livelli funzionano?</b></summary>

Sì. Il token arriva sul livello dell'area d'arrivo.

</details>

<details>
<summary><b>Posso trasformare in portale una regione che ho disegnato io?</b></summary>

Sì. Nella configurazione della regione aggiungi il comportamento **Magic Way – Portale** e scegli la sua area d'arrivo. Il pannello lo trova da solo.

</details>

<a name="macros"></a>
## 12. Macro

<details>
<summary><b>Comandi per macro e altri moduli</b> (clicca per aprire)</summary>

`"Nome"` è il nome del portale (va bene anche il suo UUID).

```js
const mw = game.modules.get("magic-way").api;
mw.pannello();                       // apre il pannello
mw.apri("Nome");                     // apre un portale Aperto / chiuso
mw.chiudi("Nome");                   // lo chiude
mw.alterna("Nome");                  // lo apre se è chiuso, lo chiude se è aperto
mw.modalita("Nome", "comando");      // modalità: "libero" | "controllato" (aperto/chiuso) | "comando" (su comando)
mw.passano("Nome", "tutti");         // chi passa: "giocatori" | "png" (mostri e PNG) | "tutti"
mw.teletrasporta("Nome");            // teletrasporta subito tutti quelli dentro l'area
mw.teletrasportaToken("Nome", canvas.tokens.controlled); // teletrasporta i token selezionati
mw.ripara();                         // ripara i collegamenti dopo un'importazione
```

Dopo ogni viaggio il modulo emette l'hook `magic-way.teletrasporto` con `{portale, destinazione, tokens}`.

</details>

---

<p align="center">Creato da <b>MorningStar</b></p>
