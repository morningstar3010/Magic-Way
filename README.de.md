<p align="center"><img src="assets/logo.webp" alt="Magic Way" width="320"></p>

<h3 align="center">Teleport-Portale zwischen Karten für Foundry VTT 14</h3>

<p align="center">Unsichtbare Bereiche, die du einfach aufziehst · drei Portal-Modi · ein Panel für die SL · jedes Spielsystem</p>

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
  🌐 <a href="README.md">English</a> · <a href="README.it.md">Italiano</a> · <b>Deutsch</b> · <a href="README.es.md">Español</a> · <a href="README.fr.md">Français</a> · <a href="README.pl.md">Polski</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.ru.md">Русский</a> · <a href="README.cn.md">中文（简体）</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a>
</p>

---

**Magic Way** bringt Token von einem Ort zum anderen: innerhalb derselben Karte oder auf eine andere Karte derselben Welt. Du zeichnest einen **Eingang** und eine **Ankunft** auf die Karte. Jeder Token, der den Eingang betritt, erscheint mit einem magischen Blitz an der Ankunft. Die Spieler sehen die Bereiche nie. Du steuerst alles über ein einziges Panel.

## Inhalt

1. [Installation](#install)
2. [Dein erstes Portal in einer Minute](#quick-start)
3. [Das Panel öffnen](#open-panel)
4. [Das Panel auf einen Blick](#panel)
5. [Ein Portal erstellen, Schritt für Schritt](#create)
6. [Portale benutzen und verwalten](#manage)
7. [Zonen: Ordnung in deinen Portalen](#zones)
8. [Suche und Filter](#filters)
9. [Karten in eine andere Welt übertragen](#export)
10. [Einstellungen und Sprache](#settings)
11. [Fragen und Probleme](#faq)
12. [Makros](#macros)

<a name="install"></a>
## 1. Installation

1. Öffne in Foundry den Reiter **Add-on Module** und klicke auf **Modul installieren**.
2. Füge unten im Feld **Manifest-URL** diese Adresse ein und klicke auf **Installieren**:

```
https://github.com/morningstar3010/magic-way/releases/latest/download/module.json
```

3. Öffne deine Welt, geh auf **Module verwalten**, setz den Haken bei **Magic Way** und speichere.

<a name="quick-start"></a>
## 2. Dein erstes Portal in einer Minute

- [ ] Klicke links in der Werkzeugleiste auf den Knopf **Magic Way – Portal-Panel**.
- [ ] Klicke auf **Neues Portal** und gib einen Namen für den Eingang und einen für die Ankunft ein.
- [ ] Klicke auf **Weiter: Eingang zeichnen** und zieh ein Rechteck auf der Karte auf.
- [ ] Bleib auf dieser Szene oder öffne eine andere und zieh ein Rechteck für die Ankunft auf.
- [ ] Fertig! Schieb einen Spieler-Token in den Eingang und schau zu, wie er reist.

> [!TIP]
> Die Ankunft kann **auf derselben Szene** wie der Eingang liegen oder **auf jeder anderen Szene derselben Welt**. Während du zeichnest, darfst du die Szene ruhig wechseln.

<a name="open-panel"></a>
## 3. Das Panel öffnen

<table><tr>
<td width="240"><img src="docs/images/toolbar-button.webp" alt="Panel-Knopf in der Werkzeugleiste" width="220"></td>
<td>

Das Panel ist nur für die SL. Du kannst es auf drei Arten öffnen:

- mit dem **Tür-Knopf** links in der Werkzeugleiste (in der Token-Gruppe oder in der Regionen-Gruppe);
- mit einer Taste deiner Wahl, die du unter **Steuerung konfigurieren** festlegst;
- über ein Makro: `game.modules.get("magic-way").api.pannello()`.

</td>
</tr></table>

<a name="panel"></a>
## 4. Das Panel auf einen Blick

![Das Magic-Way-Panel](docs/images/panel.webp)

| Teil | Was du dort findest |
|---|---|
| **Zonen** (linke Spalte) | Deine Gruppen von Portalen, wie Ordner. **Alle** zeigt jedes Portal. |
| **Obere Leiste** | **Neues Portal**, das **Suchfeld**, **Alle öffnen**, **Alle schließen**, **Nur diese Szene**, **Verbindungen reparieren**. |
| **Verbindungen** (Mitte) | Jede Verbindung ist eine Karte: links der **Eingang**, rechts die **Ankunft**. Ein Doppelpfeil ⟷ heißt, dass du auch zurückreisen kannst. |

Bei jedem Bereich siehst du den Namen seiner Karte. **du siehst diese gerade** heißt: Er liegt auf der Szene, die du gerade anschaust. **aktiv für Spieler** heißt: Er liegt auf der Szene, auf der deine Spieler sind.

<a name="create"></a>
## 5. Ein Portal erstellen, Schritt für Schritt

### Schritt 1 – Das Formular ausfüllen

Klicke oben im Panel auf **Neues Portal**.

![Das Formular Neues Portal](docs/images/new-portal.webp)

| Feld | Was es bedeutet |
|---|---|
| **Name des Eingangs** | Der Name des Bereichs, den die Token betreten (zum Beispiel *Magischer Kreis im Turm*). |
| **Name der Ankunft** | Der Name des Bereichs, in dem die Token erscheinen (zum Beispiel *Magischer Kreis in der Gruft*). |
| **Modus** | Wann das Portal funktioniert: **Frei**, **Offen / geschlossen** oder **Auf Befehl der SL**. Siehe unten. |
| **Wer darf hindurch** | Welche Token reisen: Spieler, die Monster und NSC der SL oder alle. |
| **Zone** | Die Gruppe, in die das Portal kommt. Du kannst sie später ändern. |
| **Auch den Rückweg erstellen** | Setz den Haken, damit die Ankunft auch als Portal zurück zum Eingang funktioniert, mit eigenem Modus. |

<details>
<summary><b>Die drei Modi</b> (zum Öffnen klicken)</summary>

| Modus | Was passiert, wenn ein Token den Eingang betritt |
|---|---|
| **Frei** | Er wird sofort teleportiert. Das Portal ist immer offen. |
| **Offen / geschlossen** | Er reist nur, solange du das Portal **Offen** hältst. Ist es **Geschlossen**, laufen die Token darüber und nichts passiert. Du öffnest und schließt es im Panel mit einem Klick. |
| **Auf Befehl der SL** | Von allein passiert nichts. Wenn du bereit bist, klickst du auf **Jetzt teleportieren** und alle im Bereich reisen zusammen. |

</details>

<details>
<summary><b>Wer darf hindurch</b> (zum Öffnen klicken)</summary>

![Wer darf hindurch](docs/images/who-can-pass.webp)

- **Nur Spieler**: nur Token, die einem Spieler gehören. Deine Monster können über das Portal laufen, ohne zu verschwinden.
- **Nur Monster und NSC der SL**: nur Token, die keinem Spieler gehören.
- **Spieler, Monster und NSC**: alle.

Diese Wahl gilt auch für **Jetzt teleportieren**.

</details>

<details>
<summary><b>Der Rückweg</b> (zum Öffnen klicken)</summary>

![Auch den Rückweg erstellen](docs/images/return.webp)

Mit dem Haken beim Rückweg wird die Ankunft auch zu einem Portal zurück zum Eingang. Mit dem Menü neben dem Kästchen legst du den Modus des Rückwegs fest. Er kann anders sein als der Hinweg. Haken vergessen? Kein Problem: Die Karte der Ankunft hat einen Knopf **Rückweg erstellen**.

</details>

### Schritt 2 – Den Eingang zeichnen

Klicke auf **Weiter: Eingang zeichnen** und **zieh dann auf der Karte**. Das Rechteck rastet am Raster ein und kann so groß sein, wie du willst. Die Leiste oben zeigt seine Größe in Feldern und in Metern. Ein einfacher Klick nimmt genau ein Feld. **Esc** oder ein **Rechtsklick** bricht ab.

![Den Eingang zeichnen](docs/images/draw-entrance.webp)

### Schritt 3 – Die Ankunft zeichnen

Jetzt **bleibst du auf dieser Szene oder öffnest eine andere Szene derselben Welt** und ziehst den Ankunftsbereich auf die gleiche Weise auf.

![Die Ankunft zeichnen](docs/images/draw-arrival.webp)

### Schritt 4 – Fertig!

<table><tr>
<td width="320"><img src="docs/images/areas-on-map.webp" alt="Eingang und Ankunft auf der Karte" width="300"></td>
<td>

Der **Eingang ist lila**, die **Ankunft ist grün**. Du siehst sie nur, wenn die **Regionen**-Ebene aktiv ist. **Die Spieler sehen sie nie.**

Du kannst ihre Form auch mit den normalen Regionen-Werkzeugen von Foundry ändern, zum Beispiel um einem Bereich die Form eines Polygons zu geben.

</td>
</tr></table>

> [!WARNING]
> Setz in der Regionskonfiguration **keinen Haken bei „Versteckt“ („Hidden“)**. Die Bereiche sind für Spieler sowieso unsichtbar, und in Foundry 14 schaltet „Versteckt“ alles im Bereich ab. Dann funktioniert das Portal nicht mehr. Wenn du den Haken aus Versehen setzt, warnt dich Magic Way und das Panel markiert das Portal als **deaktiviert**.

<a name="manage"></a>
## 6. Portale benutzen und verwalten

Jeder Bereich, an dem eine Reise beginnt, hat eigene Steuerelemente:

- das Feld **Name**: klick darauf und tippe, um den Bereich umzubenennen;
- das Menü **Modus** und im Modus Offen / geschlossen der Schalter **Offen / Geschlossen**;
- das Menü **Wer darf hindurch**;
- die Zahl der Token **im Bereich** (fahr mit der Maus darüber, um ihre Namen zu sehen).

Unten an jedem Bereich gibt es eine Reihe von Knöpfen:

![Knöpfe eines Bereichs](docs/images/area-buttons.webp)

| Knopf | Was er macht |
|---|---|
| **Jetzt teleportieren** | Schickt alle im Bereich sofort zur Ankunft, in jedem Modus. Er leuchtet auf, wenn jemand im Bereich ist. |
| 👁 **Auge** | **Diesen Bereich auf der Karte zeigen**: öffnet seine Szene, wechselt auf die Regionen-Ebene und zeigt auf den Bereich. |
| ▢ **Quadrat** | **Diesen Bereich neu zeichnen**: zieh ein neues Rechteck auf, auch auf einer anderen Szene. |
| ⚙ **Zahnrad** | **Regionskonfiguration**: das normale Foundry-Fenster der Region. |

Eine Ankunft ohne Rückweg zeigt **Rückweg erstellen**: ein Klick, und du kannst in beide Richtungen reisen.

### Eine Verbindung löschen

Klicke auf den **roten Mülleimer** oben rechts auf der Karte und bestätige.

![Die Verbindung löschen](docs/images/delete-link.webp)

Die Verbindung verschwindet **zusammen mit ihren Bereichen auf der Karte**: Du musst nichts von Hand löschen. Ein Bereich bleibt nur, wenn eine andere Verbindung ihn noch benutzt oder wenn er Verhalten von anderen Modulen enthält.

<a name="zones"></a>
## 7. Zonen: Ordnung in deinen Portalen

Zonen sind wie Ordner: zum Beispiel *Turm des Zauberers*, *Dungeon Ebene 1*, *Stadt*.

![Neue Zone](docs/images/new-zone.webp)

- **Eine Zone erstellen**: klicke oben in der Spalte Zonen auf **+**. Wähle einen **Namen**, eine **Farbe** (eine der fertigen Farben oder jede Farbe, die du magst) und, wenn du willst, die Zone, **in** die sie kommt.
- **Unterzonen**: Zonen können in anderen Zonen liegen, so tief du willst. Sie sind immer **alphabetisch sortiert**.
- **Filter**: Klicke auf eine Zone, um nur ihre Portale zu sehen, auch die ihrer Unterzonen. Die Zahl daneben zählt sie alle.
- **Farbe**: Du siehst sie am Ordnersymbol und am Rand der Karten ihrer Portale.
- **Fahr mit der Maus über eine Zone**, um drei Knöpfe zu sehen: **+** erstellt eine Unterzone darin, der **Stift** ändert Name, Farbe und übergeordnete Zone, der **Mülleimer** löscht sie (ihre Portale und Unterzonen rücken eine Ebene nach oben).

**Ziehen und Ablegen** erledigt den Rest:

| Zieh… | …und leg es ab auf | Ergebnis |
|---|---|---|
| eine Portal-Karte (pack sie an ihrer Titelleiste) | eine Zone | das Portal kommt genau in diese Zone, auch in eine Unterzone |
| eine Portal-Karte | **Alle** | das Portal hat keine Zone mehr |
| eine Zone | eine andere Zone | sie wird eine Unterzone dieser Zone |
| eine Zone | **Alle** | sie kommt zurück auf die oberste Ebene |

Das **Schloss** neben dem **+** oben in der Zonen-Spalte sperrt und entsperrt das Verschieben von Zonen per Ziehen. Ist es geschlossen, bleiben die Zonen, wo sie sind – Portale kannst du aber weiterhin hineinziehen.

Wird eine Zone beim Ziehen **rot**, heißt das „nicht erlaubt“: Eine Zone kann nicht in sich selbst oder in eine ihrer eigenen Unterzonen.

Du kannst die Zone eines Portals auch im Menü mit dem Ordnersymbol oben auf seiner Karte wählen.

<a name="filters"></a>
## 8. Suche und Filter

- **Portal oder Karte suchen…**: tippe einen Teil des Namens eines Portals **oder einer Karte**. Groß- und Kleinschreibung und Akzente spielen keine Rolle. Karten, die nicht passen, verschwinden, und ebenso die Zonen, die leer bleiben.
- <img src="docs/images/this-scene-only.webp" alt="Nur diese Szene" height="22"> **Nur diese Szene**: zeigt nur die Verbindungen, die einen Bereich auf der Szene haben, die du gerade anschaust. Klick noch einmal, um wieder alle zu sehen.
- **Alle öffnen** und **Alle schließen**: öffnen oder schließen auf einen Schlag alle Portale im Modus **Offen / geschlossen**, die du in der Liste siehst.

<a name="export"></a>
## 9. Karten in eine andere Welt übertragen

Portale reisen **in ihren Karten** mit. Exportiere eine Szene (in ein Kompendium, ein Abenteuer oder eine JSON-Datei), importiere sie in eine andere Welt oder auf einen anderen Server, auf dem Magic Way aktiv ist, und die Bereiche und Portale kommen mit.

Importierte Szenen bekommen neue IDs, aber jeder Bereich hat seinen eigenen Code und jedes Portal merkt sich, wo seine Ankunft ist. Magic Way **repariert die Verbindungen von selbst**, wenn die Welt startet und nach jedem Import. Du kannst auch selbst auf **Verbindungen reparieren** klicken. Fehlende Zonen werden mit Name, Farbe und übergeordneten Zonen neu erstellt.

Wenn du nur eine der beiden Karten einer Verbindung importierst, zeigt das Portal eine **rote Warnung** mit dem Namen der fehlenden Karte. Importiere sie auch, und die Verbindung repariert sich von selbst. Eine Karte, die du in derselben Welt duplizierst, funktioniert ebenfalls.

![Verbindungen reparieren](docs/images/repair-links.webp)

<a name="settings"></a>
## 10. Einstellungen und Sprache

Öffne **Einstellungen konfigurieren → Magic Way**.

![Einstellungen von Magic Way](docs/images/settings.webp)

| Einstellung | Was sie macht |
|---|---|
| **Sprache von Magic Way (nur dieses Modul)** | Wählt nur die Sprache von Magic Way: Foundry und die anderen Module bleiben, wie sie sind. **Automatisch** folgt Foundry. Persönliche Einstellung; die Seite wird neu geladen. |
| **SL bei jeder Teleportation benachrichtigen** | Eine Nachricht sagt dir, wer gereist ist, durch welches Portal und in welche Szene. |
| **Ausblend- und Erscheinungseffekt** | Der magische Blitz: Der Token verblasst beim Aufbruch und blendet bei der Ankunft wieder ein. Alle, die die Szene sehen, sehen ihn. |
| **Farbe des magischen Blitzes** | Die Farbe des Rings und des Leuchtens. |
| **Überblendung beim Szenenwechsel** | Spieler, die in eine andere Szene gebracht werden, bekommen eine Überblendung. |
| **Teleportationsgeräusch** | Eine Audiodatei, die bei jeder Reise für alle abgespielt wird. Lass das Feld leer, wenn du keinen Ton willst. |
| **SL folgt der Gruppe** | Nach einer befohlenen Reise in eine andere Szene wechselt auch deine Ansicht dorthin. Persönliche Einstellung. |

Verfügbare Sprachen: English, Italiano, Deutsch, Español, Français, Polski, Português (Brasil), Русский, 中文（简体）, 日本語, 한국어.

<a name="faq"></a>
## 11. Fragen und Probleme

<details>
<summary><b>Ein Token läuft in den Eingang und nichts passiert</b></summary>

Prüfe diese Punkte der Reihe nach:

1. **Modus**: Ein Portal im Modus **Offen / geschlossen** muss **Offen** sein; ein Portal im Modus **Auf Befehl der SL** wartet auf **Jetzt teleportieren**.
2. **Wer darf hindurch**: Mit **Nur Spieler** laufen deine Monster darüber, ohne zu reisen.
3. **Eine SL muss verbunden sein**: Nur die SL kann Token auf Szenen erstellen und entfernen.
4. Im Panel darf nicht **deaktiviert** stehen: In der Regionskonfiguration darf bei „Versteckt“ („Hidden“) kein Haken sein.

</details>

<details>
<summary><b>Können meine Spieler die Bereiche sehen?</b></summary>

Nein. Die Bereiche sind nur für die SL sichtbar, und nur auf der Regionen-Ebene.

</details>

<details>
<summary><b>Was passiert, wenn die Ankunft auf einer anderen Szene liegt?</b></summary>

Der Token wird auf der Ankunftsszene mit demselben Akteur und denselben Einstellungen neu erstellt und dann von der Abreiseszene entfernt. Seine Besitzer werden in die neue Szene gebracht, und ihre Ansicht wird auf ihren Token zentriert. Der magische Blitz wartet einen Moment, damit die Spieler Zeit haben, die Karte zu laden.

</details>

<details>
<summary><b>Mehrere Token kommen gleichzeitig an: Liegen sie übereinander?</b></summary>

Nein. Sie nehmen die freien Felder des Ankunftsbereichs ein, von der Mitte aus. Reichen die Felder nicht, stellen sie sich rundherum auf.

</details>

<details>
<summary><b>Funktionieren Szenen mit mehreren Ebenen?</b></summary>

Ja. Der Token kommt auf der Ebene des Ankunftsbereichs an.

</details>

<details>
<summary><b>Kann ich eine Region, die ich selbst gezeichnet habe, in ein Portal verwandeln?</b></summary>

Ja. Füge in der Regionskonfiguration das Verhalten **Magic Way – Portal** hinzu und wähle seinen Ankunftsbereich. Das Panel findet es von selbst.

</details>

<a name="macros"></a>
## 12. Makros

<details>
<summary><b>Befehle für Makros und andere Module</b> (zum Öffnen klicken)</summary>

`"Name"` ist der Name des Portals (seine UUID funktioniert auch).

```js
const mw = game.modules.get("magic-way").api;
mw.pannello();                       // öffnet das Panel
mw.apri("Name");                     // öffnet ein Portal im Modus Offen / geschlossen
mw.chiudi("Name");                   // schließt es
mw.alterna("Name");                  // öffnet es, wenn es zu ist, schließt es, wenn es offen ist
mw.modalita("Name", "comando");      // Modus: "libero" (frei) | "controllato" (offen/geschlossen) | "comando" (auf Befehl)
mw.passano("Name", "tutti");         // wer passiert: "giocatori" (Spieler) | "png" (Monster und NSC) | "tutti" (alle)
mw.teletrasporta("Name");            // teleportiert jetzt alle im Bereich
mw.teletrasportaToken("Name", canvas.tokens.controlled); // teleportiert die ausgewählten Token
mw.ripara();                         // repariert die Verbindungen nach einem Import
```

Nach jeder Reise löst das Modul den Hook `magic-way.teletrasporto` mit `{portale, destinazione, tokens}` aus.

</details>

---

<p align="center">Erstellt von <b>MorningStar</b></p>
