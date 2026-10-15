<p align="center"><img src="assets/logo.webp" alt="Magic Way" width="320"></p>

<h3 align="center">Portails de téléportation entre cartes pour Foundry VTT 14</h3>

<p align="center">Des zones invisibles que tu dessines en faisant glisser · trois modes de portail · un seul panneau pour le MJ · n'importe quel système de jeu</p>

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
  🌐 <a href="README.md">English</a> · <a href="README.it.md">Italiano</a> · <a href="README.de.md">Deutsch</a> · <a href="README.es.md">Español</a> · <b>Français</b> · <a href="README.pl.md">Polski</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.ru.md">Русский</a> · <a href="README.cn.md">中文（简体）</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a>
</p>

---

**Magic Way** déplace les jetons d'un endroit à un autre : sur la même carte ou vers une autre carte du même monde. Tu dessines une **entrée** et une **arrivée** sur la carte, et chaque jeton qui pose le pied dans l'entrée apparaît à l'arrivée, avec un éclair magique. Les joueurs ne voient jamais les zones. Tu contrôles tout depuis un seul panneau.

## Sommaire

1. [Installation](#install)
2. [Ton premier portail en une minute](#quick-start)
3. [Ouvrir le panneau](#open-panel)
4. [Le panneau en un coup d'œil](#panel)
5. [Créer un portail, étape par étape](#create)
6. [Utiliser et gérer tes portails](#manage)
7. [Zones : range tes portails](#zones)
8. [Recherche et filtres](#filters)
9. [Emmener des cartes dans un autre monde](#export)
10. [Paramètres et langue](#settings)
11. [Questions et problèmes](#faq)
12. [Macros](#macros)

<a name="install"></a>
## 1. Installation

1. Dans Foundry, ouvre **Modules complémentaires** et clique sur **Installer un module**.
2. En bas, dans le champ **URL du manifeste**, colle cette adresse et clique sur **Installer** :

```
https://github.com/morningstar3010/magic-way/releases/latest/download/module.json
```

3. Ouvre ton monde, va dans **Gérer les modules**, coche **Magic Way** et enregistre.

<a name="quick-start"></a>
## 2. Ton premier portail en une minute

- [ ] Clique sur le bouton **Magic Way – Panneau des portails** dans la barre d'outils à gauche.
- [ ] Clique sur **Nouveau portail** et écris un nom pour l'entrée et un autre pour l'arrivée.
- [ ] Clique sur **Suivant : dessine l'entrée** et fais glisser un rectangle sur la carte.
- [ ] Reste sur cette scène ou ouvres-en une autre, et fais glisser un rectangle pour l'arrivée.
- [ ] C'est fait ! Déplace un jeton de joueur dans l'entrée et regarde-le voyager.

> [!TIP]
> L'arrivée peut être **sur la même scène** que l'entrée ou **sur n'importe quelle autre scène du même monde**. Pendant que tu dessines, tu peux changer de scène sans problème.

<a name="open-panel"></a>
## 3. Ouvrir le panneau

<table><tr>
<td width="240"><img src="docs/images/toolbar-button.webp" alt="Bouton du panneau dans la barre d'outils" width="220"></td>
<td>

Le panneau est réservé au MJ. Tu peux l'ouvrir de trois façons :

- avec le **bouton en forme de porte** dans la barre d'outils à gauche (dans le groupe Jetons ou dans le groupe Régions) ;
- avec la touche de ton choix, réglée dans **Configurer les contrôles** ;
- depuis une macro : `game.modules.get("magic-way").api.pannello()`.

</td>
</tr></table>

<a name="panel"></a>
## 4. Le panneau en un coup d'œil

![Le panneau Magic Way](docs/images/panel.webp)

| Partie | Ce que tu y trouves |
|---|---|
| **Zones** (colonne de gauche) | Tes groupes de portails, comme des dossiers. **Tous** affiche tous les portails. |
| **Barre du haut** | **Nouveau portail**, le champ de **recherche**, **Tout ouvrir**, **Tout fermer**, **Cette scène uniquement**, **Réparer les liaisons**. |
| **Liaisons** (au centre) | Chaque liaison est une carte : l'**entrée** à gauche, l'**arrivée** à droite. Une double flèche ⟷ veut dire que tu peux aussi revenir. |

Sur chaque zone, tu vois le nom de sa carte. **tu regardes celle-ci** veut dire qu'elle est sur la scène que tu regardes. **active pour les joueurs** veut dire qu'elle est sur la scène où sont tes joueurs.

<a name="create"></a>
## 5. Créer un portail, étape par étape

### Étape 1 – Remplis le formulaire

Clique sur **Nouveau portail** en haut du panneau.

![Le formulaire Nouveau portail](docs/images/new-portal.webp)

| Champ | Ce que ça veut dire |
|---|---|
| **Nom de l'entrée** | Le nom de la zone où les jetons entrent (par exemple *Cercle magique de la tour*). |
| **Nom de l'arrivée** | Le nom de la zone où les jetons apparaissent (par exemple *Cercle magique de la crypte*). |
| **Mode** | Quand le portail fonctionne : **Libre**, **Ouvert / fermé** ou **Sur ordre du MJ**. Voir plus bas. |
| **Qui peut passer** | Quels jetons voyagent : les joueurs, les monstres et PNJ du MJ, ou tout le monde. |
| **Zone** | Le groupe où va le portail. Tu peux le changer plus tard. |
| **Créer aussi le retour** | Coche-la pour que l'arrivée serve aussi de portail de retour vers l'entrée, avec son propre mode. |

<details>
<summary><b>Les trois modes</b> (clique pour ouvrir)</summary>

| Mode | Ce qui se passe quand un jeton entre dans l'entrée |
|---|---|
| **Libre** | Il est téléporté tout de suite. Le portail est toujours ouvert. |
| **Ouvert / fermé** | Il voyage seulement tant que tu gardes le portail **Ouvert**. Quand il est **Fermé**, les jetons marchent dessus et rien ne se passe. Tu l'ouvres et le fermes depuis le panneau en un clic. |
| **Sur ordre du MJ** | Rien ne se passe tout seul. Quand tu es prêt, tu cliques sur **Téléporter maintenant** et tous ceux qui sont dans la zone voyagent ensemble. |

</details>

<details>
<summary><b>Qui peut passer</b> (clique pour ouvrir)</summary>

![Qui peut passer](docs/images/who-can-pass.webp)

- **Joueurs uniquement** : seulement les jetons qui appartiennent à un joueur. Tes monstres peuvent marcher sur le portail sans disparaître.
- **Seulement monstres et PNJ du MJ** : seulement les jetons qui n'appartiennent à aucun joueur.
- **Joueurs, monstres et PNJ** : tout le monde.

Ce choix vaut aussi pour **Téléporter maintenant**.

</details>

<details>
<summary><b>Le retour</b> (clique pour ouvrir)</summary>

![Créer aussi le retour](docs/images/return.webp)

Avec le retour coché, l'arrivée devient aussi un portail qui ramène à l'entrée. Le menu à côté de la case règle le mode du retour, qui peut être différent de celui de l'aller. Tu as oublié de cocher ? Pas de souci : la carte de l'arrivée a un bouton **Créer le retour**.

</details>

### Étape 2 – Dessine l'entrée

Clique sur **Suivant : dessine l'entrée**, puis **fais glisser sur la carte**. Le rectangle s'aligne sur la grille et peut être aussi grand que tu veux. La barre du haut affiche sa taille en cases et en mètres. Un simple clic prend une seule case. **Échap** ou un **clic droit** annule.

![Dessiner l'entrée](docs/images/draw-entrance.webp)

### Étape 3 – Dessine l'arrivée

Maintenant, **reste sur cette scène ou ouvre une autre scène du même monde**, puis fais glisser la zone d'arrivée de la même façon.

![Dessiner l'arrivée](docs/images/draw-arrival.webp)

### Étape 4 – C'est fait !

<table><tr>
<td width="320"><img src="docs/images/areas-on-map.webp" alt="Entrée et arrivée sur la carte" width="300"></td>
<td>

L'**entrée est violette**, l'**arrivée est verte**. Tu les vois seulement quand le calque **Régions** est actif. **Les joueurs ne les voient jamais.**

Tu peux aussi changer leur forme avec les outils de Région habituels de Foundry, par exemple pour donner à une zone la forme d'un polygone.

</td>
</tr></table>

> [!WARNING]
> Dans la configuration de la région, **ne coche pas « Cachée » (« Hidden »)**. Les zones sont déjà invisibles pour les joueurs, et dans Foundry 14 « Cachée » désactive tout ce qui se trouve dans la zone : le portail ne marche plus. Si tu la coches par erreur, Magic Way te prévient et le panneau marque le portail comme **désactivé**.

<a name="manage"></a>
## 6. Utiliser et gérer tes portails

Chaque zone où commence un voyage a ses propres commandes :

- le champ **nom** : clique dessus et écris pour renommer la zone ;
- le menu **mode** et, en mode Ouvert / fermé, l'interrupteur **Ouvert / Fermé** ;
- le menu **qui peut passer** ;
- le nombre de jetons **dans la zone** (passe la souris dessus pour voir leurs noms).

En bas de chaque zone, il y a une rangée de boutons :

![Boutons de la zone](docs/images/area-buttons.webp)

| Bouton | Ce qu'il fait |
|---|---|
| **Téléporter maintenant** | Envoie tout de suite tous ceux qui sont dans la zone vers l'arrivée, dans n'importe quel mode. Il s'allume quand quelqu'un est dedans. |
| 👁 **œil** | **Montrer cette zone sur la carte** : ouvre sa scène, passe sur le calque Régions et montre la zone. |
| ▢ **carré** | **Redessiner cette zone** : fais glisser un nouveau rectangle, même sur une autre scène. |
| ⚙ **engrenage** | **Configuration de la région** : la fenêtre habituelle de Foundry pour la région. |

Une arrivée sans chemin de retour affiche **Créer le retour** : un clic et tu peux voyager dans les deux sens.

### Supprimer une liaison

Clique sur la **corbeille rouge** en haut à droite de la carte et confirme.

![Supprimer la liaison](docs/images/delete-link.webp)

La liaison disparaît **avec ses zones sur la carte** : tu n'as rien à supprimer à la main. Une zone est gardée seulement si une autre liaison l'utilise encore, ou si elle contient des comportements ajoutés par d'autres modules.

<a name="zones"></a>
## 7. Zones : range tes portails

Les zones sont comme des dossiers : par exemple *Tour du magicien*, *Donjon niveau 1*, *Ville*.

![Nouvelle zone](docs/images/new-zone.webp)

- **Créer une zone** : clique sur **+** en haut de la colonne Zones. Choisis un **nom**, une **couleur** (une des couleurs prêtes ou celle que tu veux) et, si tu veux, la zone **dans** laquelle elle va.
- **Sous-zones** : les zones peuvent aller dans d'autres zones, aussi profond que tu veux. Elles sont toujours dans l'**ordre alphabétique**.
- **Filtre** : clique sur une zone pour voir seulement ses portails, y compris ceux de ses sous-zones. Le nombre à côté les compte tous.
- **Couleur** : tu la vois sur l'icône du dossier et sur le bord des cartes de ses portails.
- **Passe la souris sur une zone** pour voir trois boutons : **+** crée une sous-zone dedans, le **crayon** modifie le nom, la couleur et la zone parente, la **corbeille** la supprime (ses portails et sous-zones remontent d'un niveau).

Le **glisser-déposer** fait le reste :

| Fais glisser… | …et dépose-le sur | Résultat |
|---|---|---|
| une carte de portail (attrape-la par sa barre de titre) | une zone | le portail va exactement dans cette zone, même une sous-zone |
| une carte de portail | **Tous** | le portail n'a plus de zone |
| une zone | une autre zone | elle devient une sous-zone de cette zone |
| une zone | **Tous** | elle revient au niveau supérieur |

Le **cadenas** à côté du **+** en haut de la colonne des zones verrouille et déverrouille le déplacement des zones par glisser-déposer. Quand il est fermé, les zones restent à leur place, mais tu peux toujours y glisser des portails.

Si une zone devient **rouge** pendant que tu fais glisser, ça veut dire « pas permis » : une zone ne peut pas aller dans elle-même ni dans une de ses propres sous-zones.

Tu peux aussi choisir la zone d'un portail dans le menu avec l'icône du dossier, en haut de sa carte.

<a name="filters"></a>
## 8. Recherche et filtres

- **Chercher un portail ou une carte…** : écris une partie du nom d'un portail **ou d'une carte**. Les majuscules et les accents ne comptent pas. Les cartes qui ne correspondent pas disparaissent, tout comme les zones qui restent vides.
- <img src="docs/images/this-scene-only.webp" alt="Cette scène uniquement" height="22"> **Cette scène uniquement** : affiche seulement les liaisons qui ont une zone sur la scène que tu regardes. Clique encore pour toutes les revoir.
- **Tout ouvrir** et **Tout fermer** : ouvrent ou ferment d'un coup tous les portails **Ouvert / fermé** que tu vois dans la liste.

<a name="export"></a>
## 9. Emmener des cartes dans un autre monde

Les portails voyagent **dans leurs cartes**. Exporte une scène (vers un compendium, une Aventure ou un fichier JSON), importe-la dans un autre monde ou sur un autre serveur où Magic Way est actif, et les zones et les portails viennent avec.

Les scènes importées reçoivent de nouveaux ID, mais chaque zone a son propre code et chaque portail se souvient de l'endroit où se trouve son arrivée. Magic Way **répare les liaisons tout seul** au lancement du monde et après chaque import. Tu peux aussi cliquer toi-même sur **Réparer les liaisons**. Les zones manquantes sont recréées avec leur nom, leur couleur et leurs zones parentes.

Si tu importes une seule des deux cartes d'une liaison, le portail affiche un **avertissement rouge** avec le nom de la carte manquante. Importe-la aussi et la liaison se répare toute seule. Une carte dupliquée dans le même monde marche aussi.

![Réparer les liaisons](docs/images/repair-links.webp)

<a name="settings"></a>
## 10. Paramètres et langue

Ouvre **Configurer les paramètres → Magic Way**.

![Paramètres de Magic Way](docs/images/settings.webp)

| Paramètre | Ce qu'il fait |
|---|---|
| **Langue de Magic Way (ce module uniquement)** | Choisit la langue de Magic Way seulement : Foundry et les autres modules restent comme ils sont. **Automatique** suit Foundry. Réglage personnel ; la page se recharge. |
| **Prévenir le MJ à chaque téléportation** | Un message te dit qui a voyagé, par quel portail et vers quelle scène. |
| **Effet de disparition et d'apparition** | L'éclair magique : le jeton s'efface au départ et réapparaît en fondu à l'arrivée. Tous ceux qui regardent la scène le voient. |
| **Couleur de l'éclair magique** | La couleur de l'anneau et de la lueur. |
| **Fondu au changement de scène** | Les joueurs envoyés sur une autre scène ont une transition en fondu. |
| **Son de téléportation** | Un fichier audio joué pour tous à chaque voyage. Laisse-le vide si tu ne veux pas de son. |
| **Le MJ suit le groupe** | Après un voyage sur ordre vers une autre scène, ta vue passe aussi là-bas. Réglage personnel. |

Langues disponibles : English, Italiano, Deutsch, Español, Français, Polski, Português (Brasil), Русский, 中文（简体）, 日本語, 한국어.

<a name="faq"></a>
## 11. Questions et problèmes

<details>
<summary><b>Un jeton entre dans l'entrée et rien ne se passe</b></summary>

Vérifie ces points, dans l'ordre :

1. **Mode** : un portail **Ouvert / fermé** doit être **Ouvert** ; un portail **Sur ordre du MJ** attend **Téléporter maintenant**.
2. **Qui peut passer** : avec **Joueurs uniquement**, tes monstres marchent dessus sans voyager.
3. **Un MJ doit être connecté** : seul le MJ peut créer et retirer des jetons sur les scènes.
4. Le panneau ne doit pas afficher **désactivé** : dans la configuration de la région, « Cachée » (« Hidden ») doit être décochée.

</details>

<details>
<summary><b>Mes joueurs peuvent-ils voir les zones ?</b></summary>

Non. Les zones sont visibles seulement par le MJ, et seulement sur le calque Régions.

</details>

<details>
<summary><b>Que se passe-t-il quand l'arrivée est sur une autre scène ?</b></summary>

Le jeton est recréé sur la scène d'arrivée avec le même acteur et les mêmes réglages, puis retiré de la scène de départ. Ses propriétaires sont envoyés sur la nouvelle scène et leur vue est centrée sur leur jeton. L'éclair magique attend un instant, pour que les joueurs aient le temps de charger la carte.

</details>

<details>
<summary><b>Plusieurs jetons arrivent ensemble : est-ce qu'ils se superposent ?</b></summary>

Non. Ils prennent les cases libres de la zone d'arrivée, en partant du centre. S'il n'y en a pas assez, ils se placent tout autour.

</details>

<details>
<summary><b>Les scènes à plusieurs niveaux fonctionnent-elles ?</b></summary>

Oui. Le jeton arrive au niveau de la zone d'arrivée.

</details>

<details>
<summary><b>Est-ce que je peux transformer en portail une région que j'ai dessinée moi-même ?</b></summary>

Oui. Dans la configuration de la région, ajoute le comportement **Magic Way – Portail** et choisis sa zone d'arrivée. Le panneau la trouve tout seul.

</details>

<a name="macros"></a>
## 12. Macros

<details>
<summary><b>Commandes pour les macros et les autres modules</b> (clique pour ouvrir)</summary>

`"Nom"` est le nom du portail (son UUID marche aussi).

```js
const mw = game.modules.get("magic-way").api;
mw.pannello();                       // ouvre le panneau
mw.apri("Nom");                      // ouvre un portail Ouvert / fermé
mw.chiudi("Nom");                    // le ferme
mw.alterna("Nom");                   // l'ouvre s'il est fermé, le ferme s'il est ouvert
mw.modalita("Nom", "comando");       // mode : "libero" (libre) | "controllato" (ouvert/fermé) | "comando" (sur ordre)
mw.passano("Nom", "tutti");          // qui passe : "giocatori" (joueurs) | "png" (monstres et PNJ) | "tutti" (tout le monde)
mw.teletrasporta("Nom");             // téléporte maintenant tous ceux qui sont dans la zone
mw.teletrasportaToken("Nom", canvas.tokens.controlled); // téléporte les jetons sélectionnés
mw.ripara();                         // répare les liaisons après un import
```

Après chaque voyage, le module déclenche le hook `magic-way.teletrasporto` avec `{portale, destinazione, tokens}`.

</details>

---

<p align="center">Créé par <b>MorningStar</b></p>
