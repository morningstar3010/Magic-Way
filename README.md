<p align="center"><img src="assets/logo.webp" alt="Magic Way" width="320"></p>

<h3 align="center">Teleport portals between maps for Foundry VTT 14</h3>

<p align="center">Invisible areas you draw by dragging · three portal modes · one panel for the GM · any game system</p>

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
  🌐 <b>English</b> · <a href="README.it.md">Italiano</a> · <a href="README.de.md">Deutsch</a> · <a href="README.es.md">Español</a> · <a href="README.fr.md">Français</a> · <a href="README.pl.md">Polski</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.ru.md">Русский</a> · <a href="README.cn.md">中文（简体）</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a>
</p>

---

**Magic Way** moves tokens from one place to another: inside the same map or to a different map of the same world. You draw an **entrance** and an **arrival** on the map, and every token that steps into the entrance appears at the arrival, with a magic flash. Players never see the areas. You control everything from a single panel.

## Contents

1. [Install](#install)
2. [Your first portal in one minute](#quick-start)
3. [Open the panel](#open-panel)
4. [The panel at a glance](#panel)
5. [Create a portal, step by step](#create)
6. [Use and manage your portals](#manage)
7. [Zones: keep your portals tidy](#zones)
8. [Search and filters](#filters)
9. [Moving maps to another world](#export)
10. [Settings and language](#settings)
11. [Questions and problems](#faq)
12. [Macros](#macros)

<a name="install"></a>
## 1. Install

1. In Foundry, open **Add-on Modules** and press **Install Module**.
2. At the bottom, in the **Manifest URL** field, paste this address and press **Install**:

```
https://github.com/morningstar3010/magic-way/releases/latest/download/module.json
```

3. Open your world, go to **Manage Modules**, tick **Magic Way** and save.

<a name="quick-start"></a>
## 2. Your first portal in one minute

- [ ] Click the **Magic Way – Portal panel** button in the toolbar on the left.
- [ ] Press **New portal** and type a name for the entrance and one for the arrival.
- [ ] Press **Next: draw the entrance** and drag a rectangle on the map.
- [ ] Stay on this scene or open another one, and drag a rectangle for the arrival.
- [ ] Done! Move a player token into the entrance and watch it travel.

> [!TIP]
> The arrival can be **on the same scene** as the entrance or **on any other scene of the same world**. While you draw, you are free to switch scene.

<a name="open-panel"></a>
## 3. Open the panel

<table><tr>
<td width="240"><img src="docs/images/toolbar-button.webp" alt="Panel button in the toolbar" width="220"></td>
<td>

The panel is only for the GM. You can open it in three ways:

- with the **door button** in the toolbar on the left (in the Token group or in the Regions group);
- with a key of your choice, set in **Configure Controls**;
- from a macro: `game.modules.get("magic-way").api.pannello()`.

</td>
</tr></table>

<a name="panel"></a>
## 4. The panel at a glance

![The Magic Way panel](docs/images/panel.webp)

| Part | What you find there |
|---|---|
| **Zones** (left column) | Your groups of portals, like folders. **All** shows every portal. |
| **Top bar** | **New portal**, the **search** box, **Open all**, **Close all**, **This scene only**, **Repair links**. |
| **Links** (centre) | Every link is a card: the **entrance** on the left, the **arrival** on the right. A double arrow ⟷ means you can also travel back. |

On each area you can see the name of its map. **you are viewing this** means it is on the scene you are looking at. **active for players** means it is on the scene your players are on.

<a name="create"></a>
## 5. Create a portal, step by step

### Step 1 – Fill in the form

Press **New portal** at the top of the panel.

![The New portal form](docs/images/new-portal.webp)

| Field | What it means |
|---|---|
| **Entrance name** | The name of the area tokens step into (for example *Tower magic circle*). |
| **Arrival name** | The name of the area where tokens appear (for example *Crypt magic circle*). |
| **Mode** | When the portal works: **Free**, **Open / closed** or **On GM command**. See below. |
| **Who can pass** | Which tokens travel: players, the GM's monsters and NPCs, or everyone. |
| **Zone** | The group the portal goes in. You can change it later. |
| **Also create the return** | Tick it to make the arrival work as a portal back to the entrance too, with its own mode. |

<details>
<summary><b>The three modes</b> (click to open)</summary>

| Mode | What happens when a token steps into the entrance |
|---|---|
| **Free** | It is teleported at once. The portal is always open. |
| **Open / closed** | It travels only while you keep the portal **Open**. When it is **Closed**, tokens walk over it and nothing happens. You open and close it from the panel with one click. |
| **On GM command** | Nothing happens on its own. When you are ready you press **Teleport now** and everyone inside the area travels together. |

</details>

<details>
<summary><b>Who can pass</b> (click to open)</summary>

![Who can pass](docs/images/who-can-pass.webp)

- **Players only**: only tokens owned by a player. Your monsters can walk over the portal without disappearing.
- **Only GM monsters and NPCs**: only tokens that no player owns.
- **Players, monsters and NPCs**: everyone.

This choice also applies to **Teleport now**.

</details>

<details>
<summary><b>The return</b> (click to open)</summary>

![Also create the return](docs/images/return.webp)

With the return ticked, the arrival also becomes a portal back to the entrance. The menu next to the box sets the mode of the return, which can be different from the outward trip. Forgot to tick it? No problem: the arrival card has a **Create the return** button.

</details>

### Step 2 – Draw the entrance

Press **Next: draw the entrance**, then **drag on the map**. The rectangle snaps to the grid and can be as big as you like. The bar at the top shows its size in spaces and in metres. A single click takes just one space. **Esc** or a **right click** cancels.

![Drawing the entrance](docs/images/draw-entrance.webp)

### Step 3 – Draw the arrival

Now **stay on this scene or open another scene of the same world**, then drag the arrival area in the same way.

![Drawing the arrival](docs/images/draw-arrival.webp)

### Step 4 – Done!

<table><tr>
<td width="320"><img src="docs/images/areas-on-map.webp" alt="Entrance and arrival on the map" width="300"></td>
<td>

The **entrance is purple**, the **arrival is green**. You see them only when the **Regions** layer is active. **Players never see them.**

You can also reshape them with Foundry's normal Region tools, for example to give an area a polygon shape.

</td>
</tr></table>

> [!WARNING]
> In the region configuration, **do not tick "Hidden"**. The areas are already invisible to players, and in Foundry 14 "Hidden" switches off everything inside the area, so the portal stops working. If you tick it by mistake, Magic Way warns you and the panel marks the portal as **disabled**.

<a name="manage"></a>
## 6. Use and manage your portals

Every area where a trip starts has its own controls:

- the **name** field: click on it and type to rename the area;
- the **mode** menu and, in Open / closed mode, the **Open / Closed** switch;
- the **who can pass** menu;
- the number of tokens **inside the area** (hover over it to see their names).

At the bottom of each area there is a row of buttons:

![Area buttons](docs/images/area-buttons.webp)

| Button | What it does |
|---|---|
| **Teleport now** | Sends everyone inside the area to the arrival, right away, in any mode. It lights up when someone is inside. |
| 👁 **eye** | **Show this area on the map**: opens its scene, switches to the Regions layer and points at the area. |
| ▢ **square** | **Redraw this area**: drag a new rectangle, even on another scene. |
| ⚙ **gear** | **Region configuration**: the normal Foundry window of the region. |

An arrival with no way back shows **Create the return**: one click and you can travel both ways.

### Delete a link

Press the **red bin** at the top right of the card and confirm.

![Delete the link](docs/images/delete-link.webp)

The link disappears **together with its areas on the map**: you don't have to delete anything by hand. An area is kept only if another link still uses it, or if it holds behaviours added by other modules.

<a name="zones"></a>
## 7. Zones: keep your portals tidy

Zones are like folders: for example *Wizard's tower*, *Dungeon level 1*, *City*.

![New zone](docs/images/new-zone.webp)

- **Create a zone**: press **+** at the top of the Zones column. Choose a **name**, a **colour** (one of the ready colours or any colour you like) and, if you want, the zone it goes **inside**.
- **Sub-zones**: zones can go inside other zones, as deep as you like. They are always in **alphabetical order**.
- **Filter**: click a zone to see only its portals, including those of its sub-zones. The number next to it counts them all.
- **Colour**: you see it on the folder icon and on the edge of the cards of its portals.
- **Hover over a zone** to see three buttons: **+** creates a sub-zone inside it, the **pencil** edits name, colour and parent zone, the **bin** deletes it (its portals and sub-zones move up one level).

**Drag and drop** does the rest:

| Drag… | …and drop it on | Result |
|---|---|---|
| a portal card (grab it by its title bar) | a zone | the portal goes into exactly that zone, even a sub-zone |
| a portal card | **All** | the portal no longer has a zone |
| a zone | another zone | it becomes a sub-zone of that zone |
| a zone | **All** | it goes back to the top level |

The **padlock** next to **+** at the top of the Zones column locks and unlocks moving zones by drag and drop. When it is closed, zones stay where they are, but you can still drag portals into them.

A zone that turns **red** while you drag means "not allowed": a zone can't go inside itself or inside one of its own sub-zones.

You can also choose the zone of a portal from the menu with the folder icon at the top of its card.

<a name="filters"></a>
## 8. Search and filters

- **Search portal or map…**: type part of the name of a portal **or of a map**. Upper case and accents don't matter. Cards that don't match disappear, and so do the zones that are left empty.
- <img src="docs/images/this-scene-only.webp" alt="This scene only" height="22"> **This scene only**: shows only the links that have an area on the scene you are looking at. Press it again to see them all.
- **Open all** and **Close all**: open or close in one go all the **Open / closed** portals you can see in the list.

<a name="export"></a>
## 9. Moving maps to another world

Portals travel **inside their maps**. Export a scene (to a compendium, an Adventure or a JSON file), import it into another world or another server where Magic Way is active, and the areas and portals come with it.

Imported scenes get new IDs, but each area has its own code and each portal remembers where its arrival is. Magic Way **repairs the links by itself** when the world starts and after every import. You can also press **Repair links** yourself. Missing zones are recreated with their name, colour and parent zones.

If you import only one of the two maps of a link, the portal shows a **red warning** with the name of the missing map. Import it too and the link fixes itself. A map duplicated in the same world works as well.

![Repair links](docs/images/repair-links.webp)

<a name="settings"></a>
## 10. Settings and language

Open **Configure Settings → Magic Way**.

![Magic Way settings](docs/images/settings.webp)

| Setting | What it does |
|---|---|
| **Magic Way language (this module only)** | Chooses the language of Magic Way only: Foundry and the other modules stay as they are. **Automatic** follows Foundry. Personal setting; the page reloads. |
| **Notify the GM on every teleport** | A message tells you who travelled, through which portal and to which scene. |
| **Fade-out and appear effect** | The magic flash: the token fades out at departure and fades back in at arrival. Everyone watching the scene sees it. |
| **Magic flash colour** | The colour of the ring and glow. |
| **Fade on scene change** | Players moved to another scene get a fade transition. |
| **Teleport sound** | An audio file played for everyone on each trip. Leave it empty for no sound. |
| **GM follows the party** | After a commanded trip to another scene, your view moves there too. Personal setting. |

Available languages: English, Italiano, Deutsch, Español, Français, Polski, Português (Brasil), Русский, 中文（简体）, 日本語, 한국어.

<a name="faq"></a>
## 11. Questions and problems

<details>
<summary><b>A token walks into the entrance and nothing happens</b></summary>

Check these points, in order:

1. **Mode**: an **Open / closed** portal must be **Open**; an **On GM command** portal waits for **Teleport now**.
2. **Who can pass**: with **Players only**, your monsters walk over it without travelling.
3. **A GM must be connected**: only the GM can create and remove tokens on scenes.
4. The panel must not say **disabled**: in the region configuration, "Hidden" must be unticked.

</details>

<details>
<summary><b>Can my players see the areas?</b></summary>

No. The areas are visible only to the GM, and only on the Regions layer.

</details>

<details>
<summary><b>What happens when the arrival is on another scene?</b></summary>

The token is recreated on the arrival scene with the same actor and settings, then removed from the departure scene. Its owners are moved to the new scene and their view is centred on their token. The magic flash waits a moment, so players have time to load the map.

</details>

<details>
<summary><b>Several tokens arrive together: do they overlap?</b></summary>

No. They take the free spaces of the arrival area, starting from the centre. If there aren't enough, they line up all around it.

</details>

<details>
<summary><b>Do scenes with several levels work?</b></summary>

Yes. The token arrives on the level of the arrival area.

</details>

<details>
<summary><b>Can I turn a region I drew myself into a portal?</b></summary>

Yes. In the region configuration, add the behaviour **Magic Way – Portal** and choose its arrival area. The panel finds it on its own.

</details>

<a name="macros"></a>
## 12. Macros

<details>
<summary><b>Commands for macros and other modules</b> (click to open)</summary>

`"Name"` is the name of the portal (its UUID works too).

```js
const mw = game.modules.get("magic-way").api;
mw.pannello();                       // opens the panel
mw.apri("Name");                     // opens an Open / closed portal
mw.chiudi("Name");                   // closes it
mw.alterna("Name");                  // opens it if closed, closes it if open
mw.modalita("Name", "comando");      // mode: "libero" (free) | "controllato" (open/closed) | "comando" (on command)
mw.passano("Name", "tutti");         // who passes: "giocatori" (players) | "png" (monsters and NPCs) | "tutti" (everyone)
mw.teletrasporta("Name");            // teleports everyone inside the area now
mw.teletrasportaToken("Name", canvas.tokens.controlled); // teleports the selected tokens
mw.ripara();                         // repairs the links after an import
```

After every trip the module fires the hook `magic-way.teletrasporto` with `{portale, destinazione, tokens}`.

</details>

---

<p align="center">Made by <b>MorningStar</b></p>
