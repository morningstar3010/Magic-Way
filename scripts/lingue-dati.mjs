/**
 * MAGIC WAY – tutti i testi in tutte le lingue (file creato da strumenti/lingue.py, non modificarlo a mano).
 * Serve all'impostazione «Lingua di Magic Way» per usare una lingua diversa da quella di Foundry.
 */
export const NOMI_LINGUE = {"en": "English", "it": "Italiano", "de": "Deutsch", "es": "Español"};

export const TESTI = {
 "en": {
  "TYPES": {
   "RegionBehavior": {
    "magic-way.portale": "Magic Way – Portal"
   },
   "HINTS": {
    "RegionBehavior": {
     "magic-way.portale": "Teleports tokens entering the region to an arrival area, even on another scene. Managed from the Magic Way panel."
    }
   }
  },
  "MAGICWAY": {
   "Modalita": {
    "libero": "Free",
    "controllato": "Open / closed",
    "comando": "On GM command"
   },
   "Passano": {
    "giocatori": "Players only",
    "png": "Only GM monsters and NPCs",
    "tutti": "Players, monsters and NPCs"
   },
   "Impostazioni": {
    "notifiche": {
     "nome": "Notify the GM on every teleport",
     "hint": "Shows the GM who was teleported, through which portal and to which scene."
    },
    "effetto": {
     "nome": "Fade-out and appear effect",
     "hint": "When the portal activates a magic flash appears: the token fades out at departure and fades back in at arrival. Everyone sees it."
    },
    "coloreEffetto": {
     "nome": "Magic flash colour",
     "hint": "Colour of the ring and glow shown when the portal activates."
    },
    "dissolvenza": {
     "nome": "Fade on scene change",
     "hint": "Players are moved to the arrival scene with a fade transition."
    },
    "suono": {
     "nome": "Teleport sound",
     "hint": "Audio file played for everyone on each teleport. Leave empty for no sound."
    },
    "segueMaster": {
     "nome": "GM follows the party",
     "hint": "After a commanded teleport to another scene, your view moves to the arrival scene too. Also, when a portal brings all connected players to the new scene, you move there as well and it becomes the active scene."
    },
    "lingua": {
     "nome": "Magic Way language (this module only)",
     "hint": "Changes only Magic Way's texts: Foundry's language and other modules stay as they are. Useful if Magic Way does not pick the right language by itself. \"Automatic\" follows Foundry's language. Changing it reloads the page.",
     "auto": "Automatic (Foundry's language)"
    }
   },
   "Tasto": {
    "pannello": "Open the Magic Way panel"
   },
   "Avvisi": {
    "serveMaster": "Magic Way: a GM must be connected to complete the teleport.",
    "senzaArrivo": "Magic Way: portal \"{nome}\" has no valid arrival area.",
    "fatto": "Magic Way: {chi} → \"{portale}\" → {scena}",
    "creato": "Magic Way: portal \"{nome}\" created ({da} → {a}).",
    "nessunoPresente": "Magic Way: nobody to teleport inside portal \"{nome}\".",
    "nascosta": "The area «{nome}» was marked as «Hidden»: in Foundry 14 this switches the portal off. Untick it to make it work (players can't see Magic Way areas anyway).",
    "soloMaster": "Magic Way: only the GM can use the portal panel.",
    "nonTrovato": "Magic Way: portal \"{nome}\" not found.",
    "errore": "Magic Way: the teleport through portal \"{nome}\" failed (details in the console, F12).",
    "ritornoCreato": "Magic Way: return created from \"{nome}\".",
    "riparati": "Magic Way: links repaired {n}, zones recreated {z}.",
    "tuttoAPosto": "Magic Way: all links are fine.",
    "mancanti": "Magic Way: {n} portals without arrival. Maps to import: {scene}."
   },
   "Cattura": {
    "esc": "Esc or right click = cancel",
    "ingresso": "Drag on the map to draw the ENTRANCE area (a single click = one space).",
    "arrivo": "Open the arrival scene (or stay here) and drag to draw the ARRIVAL area.",
    "ridisegna": "Open the right scene and drag to redraw the area \"{nome}\"."
   },
   "Portale": {
    "nomePredefinito": "Portal",
    "arrivo": "arrival",
    "ritorno": "return"
   },
   "Pannello": {
    "titolo": "Magic Way – Portal panel",
    "pulsante": "Magic Way – Portal panel",
    "nuovo": "New portal",
    "apriTutti": "Open all",
    "apriTuttiHint": "Opens every open/closed portal (only those listed).",
    "chiudiTutti": "Close all",
    "chiudiTuttiHint": "Closes every open/closed portal (only those listed).",
    "soloScena": "This scene only",
    "vuoto": "No portals yet. Press \"New portal\" to create one.",
    "qui": "you are viewing this",
    "attiva": "active for players",
    "passanoHint": "Who gets teleported: only player tokens, only monsters and NPCs run by the GM, or everyone.",
    "teletrasporta": "Teleport now",
    "configura": "Region configuration",
    "elimina": "Delete the link",
    "cerca": "Search portal or map…",
    "nessunRisultato": "No portal matches the search.",
    "ingresso": "Entrance",
    "arrivo": "Arrival",
    "soloArrivo": "Arrival only: nobody leaves from here.",
    "creaRitorno": "Create the return",
    "creaRitornoHint": "Turns this area into a portal back to the other one too.",
    "trascina": "Drag from here onto a zone on the left to put the portal in it",
    "vai": "Show this area on the map",
    "ridisegna": "Redraw this area (drag on the map, even on another scene)",
    "nomeHint": "Name of this area: type your own",
    "ripara": "Repair links",
    "riparaHint": "After importing maps or adventures from another world: finds arrivals by their codes, repairs the links and recreates the zones. It also runs by itself at startup and after every import.",
    "arrivoMancante": "Arrival \"{nome}\" not found: also import the map \"{scena}\" and press Repair links.",
    "arrivoMancanteGenerico": "This portal has no arrival area: redraw it or delete the link."
   },
   "Stato": {
    "disattivato": "disabled",
    "sempreAperto": "always open",
    "aperto": "Open",
    "chiuso": "Closed",
    "attesa": "waiting for your command"
   },
   "Creazione": {
    "titolo": "New portal",
    "nome": "Entrance name",
    "nomeEsempio": "e.g. Tower magic circle",
    "modalita": "Mode",
    "passano": "Who can pass",
    "ritorno": "Also create the return",
    "spiegazione": "After \"Next\" drag on the map to draw the entrance area (as large as you want, snapped to the grid; a single click takes one space), then open the arrival scene (or stay here) and draw the arrival area the same way. Areas are invisible to players: you see them coloured only on the Regions layer.",
    "avanti": "Next: draw the entrance",
    "annulla": "Cancel",
    "passo1": "Step 1 of 2 – entrance",
    "passo2": "Step 2 of 2 – arrival",
    "ingressoFatto": "Entrance set on scene",
    "nomeArrivo": "Arrival name",
    "nomeArrivoEsempio": "e.g. Crypt magic circle",
    "zona": "Zone"
   },
   "Elimina": {
    "titolo": "Delete link",
    "domanda": "Delete the link {nome} and its areas?"
   },
   "Comune": {
    "si": "Yes",
    "no": "No"
   },
   "Comportamento": {
    "FIELDS": {
     "destinazione": {
      "label": "Arrival area",
      "hint": "The region where tokens appear (drop it here or paste its UUID). It can be on another scene."
     },
     "modalita": {
      "label": "Mode",
      "hint": "Free: tokens pass at once. Open/closed: only while the GM keeps it open. On command: only when the GM presses \"Teleport now\"."
     },
     "aperto": {
      "label": "Open",
      "hint": "Used only in open/closed mode."
     },
     "passano": {
      "label": "Who passes",
      "hint": "Only player tokens, only monsters and NPCs run by the GM, or everyone."
     }
    }
   },
   "Zone": {
    "titolo": "Zones",
    "tutti": "All",
    "nuova": "New zone",
    "nome": "Zone name",
    "salva": "Save",
    "modifica": "Edit zone",
    "colore": "Colour",
    "elimina": "Delete zone",
    "eliminaDomanda": "Delete zone \"{nome}\"? Its portals and sub-zones move to the parent zone (or are left without a zone).",
    "nessuna": "— no zone —",
    "trascina": "Click to filter (sub-zones included). Drag a portal here to put it in this zone, or another zone to make it a sub-zone of this one.",
    "sottozona": "New sub-zone (inside this zone)",
    "dentro": "Inside zone",
    "inCima": "— top level (no parent zone) —",
    "bloccate": "Moving zones is locked: click to unlock it. Portals can always be dragged into zones.",
    "sbloccate": "Moving zones is unlocked: drag a zone onto another to move it. Click to lock it.",
    "trascinaTutti": "Shows every portal. Drag a portal here to remove its zone, or a zone to move it back to the top level."
   }
  }
 },
 "it": {
  "TYPES": {
   "RegionBehavior": {
    "magic-way.portale": "Magic Way – Portale"
   },
   "HINTS": {
    "RegionBehavior": {
     "magic-way.portale": "Teletrasporta i token che entrano nella regione verso un'area d'arrivo, anche su un'altra scena. Si gestisce dal pannello Magic Way."
    }
   }
  },
  "MAGICWAY": {
   "Modalita": {
    "libero": "Libero",
    "controllato": "Aperto / chiuso",
    "comando": "Su comando del master"
   },
   "Passano": {
    "giocatori": "Solo giocatori",
    "png": "Solo mostri e PNG del master",
    "tutti": "Giocatori, mostri e PNG"
   },
   "Impostazioni": {
    "notifiche": {
     "nome": "Avvisa il master a ogni teletrasporto",
     "hint": "Mostra al master un messaggio con chi è stato teletrasportato, attraverso quale portale e verso quale scena."
    },
    "effetto": {
     "nome": "Effetto di dissolvenza e apparizione",
     "hint": "Quando il portale si attiva compare un lampo magico: il token svanisce alla partenza e riappare all'arrivo con una dissolvenza. Lo vedono tutti."
    },
    "coloreEffetto": {
     "nome": "Colore del lampo magico",
     "hint": "Colore dell'anello e del bagliore che compaiono quando il portale si attiva."
    },
    "dissolvenza": {
     "nome": "Dissolvenza al cambio di scena",
     "hint": "Quando i giocatori vengono portati sulla scena d'arrivo, il passaggio avviene con una dissolvenza."
    },
    "suono": {
     "nome": "Suono del teletrasporto",
     "hint": "File audio suonato a tutti a ogni teletrasporto. Lascia vuoto per nessun suono."
    },
    "segueMaster": {
     "nome": "Il master segue il gruppo",
     "hint": "Dopo un teletrasporto su comando verso un'altra scena, anche la tua vista passa alla scena d'arrivo. Inoltre, quando un portale porta tutti i giocatori collegati sulla nuova scena, ci passi anche tu e quella diventa la scena attiva."
    },
    "lingua": {
     "nome": "Lingua di Magic Way (solo questo modulo)",
     "hint": "Cambia solo i testi di Magic Way: la lingua di Foundry e quella degli altri moduli restano come sono. Serve se Magic Way non usa da solo la lingua giusta. «Automatica» segue la lingua di Foundry. Al cambio la pagina si ricarica.",
     "auto": "Automatica (lingua di Foundry)"
    }
   },
   "Tasto": {
    "pannello": "Apri il pannello Magic Way"
   },
   "Avvisi": {
    "serveMaster": "Magic Way: serve un master collegato per completare il teletrasporto.",
    "senzaArrivo": "Magic Way: il portale «{nome}» non ha un'area d'arrivo valida.",
    "fatto": "Magic Way: {chi} → «{portale}» → {scena}",
    "creato": "Magic Way: portale «{nome}» creato ({da} → {a}).",
    "nessunoPresente": "Magic Way: nell'area del portale «{nome}» non c'è nessuno da teletrasportare.",
    "nascosta": "L'area «{nome}» è stata segnata come «Nascosta»: in Foundry 14 questo spegne il portale. Togli la spunta per farlo funzionare (i giocatori non vedono comunque le aree di Magic Way).",
    "soloMaster": "Magic Way: solo il master può usare il pannello dei portali.",
    "nonTrovato": "Magic Way: portale «{nome}» non trovato.",
    "errore": "Magic Way: il teletrasporto del portale «{nome}» non è riuscito (dettagli nella console, F12).",
    "ritornoCreato": "Magic Way: creato il ritorno da «{nome}».",
    "riparati": "Magic Way: collegamenti riparati {n}, zone ricreate {z}.",
    "tuttoAPosto": "Magic Way: tutti i collegamenti sono a posto.",
    "mancanti": "Magic Way: {n} portali senza arrivo. Mappe da importare: {scene}."
   },
   "Cattura": {
    "esc": "Esc o clic destro = annulla",
    "ingresso": "Trascina sulla mappa per disegnare l'area d'INGRESSO (un clic = una casella).",
    "arrivo": "Apri la scena d'arrivo (anche questa stessa) e trascina per disegnare l'area d'ARRIVO.",
    "ridisegna": "Apri la scena giusta e trascina per ridisegnare l'area «{nome}»."
   },
   "Portale": {
    "nomePredefinito": "Portale",
    "arrivo": "arrivo",
    "ritorno": "ritorno"
   },
   "Pannello": {
    "titolo": "Magic Way – Pannello dei portali",
    "pulsante": "Magic Way – Pannello dei portali",
    "nuovo": "Nuovo portale",
    "apriTutti": "Apri tutti",
    "apriTuttiHint": "Apre tutti i portali in modalità aperto/chiuso (solo quelli in elenco).",
    "chiudiTutti": "Chiudi tutti",
    "chiudiTuttiHint": "Chiude tutti i portali in modalità aperto/chiuso (solo quelli in elenco).",
    "soloScena": "Solo questa scena",
    "vuoto": "Nessun portale. Premi «Nuovo portale» per crearne uno.",
    "qui": "stai guardando questa",
    "attiva": "attiva per i giocatori",
    "passanoHint": "Chi viene teletrasportato: solo i token dei giocatori, solo i mostri e i PNG gestiti dal master, oppure tutti.",
    "teletrasporta": "Teletrasporta ora",
    "configura": "Configurazione della regione",
    "elimina": "Elimina il collegamento",
    "cerca": "Cerca portale o mappa…",
    "nessunRisultato": "Nessun portale corrisponde alla ricerca.",
    "ingresso": "Ingresso",
    "arrivo": "Arrivo",
    "soloArrivo": "Solo arrivo: da qui non si parte.",
    "creaRitorno": "Crea il ritorno",
    "creaRitornoHint": "Trasforma quest'area anche in un portale che riporta all'altra.",
    "trascina": "Trascina da qui sopra una zona a sinistra per metterci il portale",
    "vai": "Mostra quest'area sulla mappa",
    "ridisegna": "Ridisegna quest'area (trascina sulla mappa, anche su un'altra scena)",
    "nomeHint": "Nome di quest'area: scrivilo tu",
    "ripara": "Ripara collegamenti",
    "riparaHint": "Dopo aver importato mappe o avventure da un altro mondo: ritrova gli arrivi dai loro codici, ripara i collegamenti e ricrea le zone. Lo fa anche da solo all'avvio e dopo ogni importazione.",
    "arrivoMancante": "Arrivo «{nome}» non trovato: importa anche la mappa «{scena}» e premi Ripara collegamenti.",
    "arrivoMancanteGenerico": "Questo portale non ha un'area d'arrivo: ridisegnala o elimina il collegamento."
   },
   "Stato": {
    "disattivato": "disattivato",
    "sempreAperto": "sempre aperto",
    "aperto": "Aperto",
    "chiuso": "Chiuso",
    "attesa": "attende il tuo comando"
   },
   "Creazione": {
    "titolo": "Nuovo portale",
    "nome": "Nome dell'ingresso",
    "nomeEsempio": "es. Cerchio magico della torre",
    "modalita": "Modalità",
    "passano": "Chi può passare",
    "ritorno": "Crea anche il ritorno",
    "spiegazione": "Dopo «Avanti» trascini sulla mappa per disegnare l'area d'ingresso (grande quanto vuoi, agganciata alla griglia; un semplice clic prende una casella), poi apri la scena d'arrivo (o resti su questa) e disegni allo stesso modo l'area d'arrivo. Le aree sono invisibili ai giocatori: tu le vedi colorate solo quando è attivo il livello Regioni.",
    "avanti": "Avanti: disegna l'ingresso",
    "annulla": "Annulla",
    "passo1": "Passo 1 di 2 – ingresso",
    "passo2": "Passo 2 di 2 – arrivo",
    "ingressoFatto": "Ingresso fissato sulla scena",
    "nomeArrivo": "Nome dell'arrivo",
    "nomeArrivoEsempio": "es. Cerchio magico della cripta",
    "zona": "Zona"
   },
   "Elimina": {
    "titolo": "Elimina collegamento",
    "domanda": "Eliminare il collegamento {nome} con le sue aree?"
   },
   "Comune": {
    "si": "Sì",
    "no": "No"
   },
   "Comportamento": {
    "FIELDS": {
     "destinazione": {
      "label": "Area d'arrivo",
      "hint": "La regione dove compaiono i token (trascinala qui o incolla il suo UUID). Può stare su un'altra scena."
     },
     "modalita": {
      "label": "Modalità",
      "hint": "Libero: chi entra passa subito. Aperto/chiuso: passa solo quando il master lo apre. Su comando: passa solo quando il master preme «Teletrasporta ora»."
     },
     "aperto": {
      "label": "Aperto",
      "hint": "Usato solo nella modalità aperto/chiuso."
     },
     "passano": {
      "label": "Chi passa",
      "hint": "Solo i token dei giocatori, solo i mostri e i PNG gestiti dal master, oppure tutti."
     }
    }
   },
   "Zone": {
    "titolo": "Zone",
    "tutti": "Tutti",
    "nuova": "Nuova zona",
    "nome": "Nome della zona",
    "salva": "Salva",
    "modifica": "Modifica zona",
    "colore": "Colore",
    "elimina": "Elimina zona",
    "eliminaDomanda": "Eliminare la zona «{nome}»? I suoi portali e le sue sottozone passano alla zona superiore (o restano senza zona).",
    "nessuna": "— nessuna zona —",
    "trascina": "Clic per filtrare (mostra anche le sottozone). Trascina qui un portale per metterlo in questa zona, oppure un'altra zona per farla diventare sua sottozona.",
    "sottozona": "Nuova sottozona (dentro questa zona)",
    "dentro": "Dentro la zona",
    "inCima": "— in cima (nessuna zona superiore) —",
    "bloccate": "Spostamento delle zone bloccato: clic per sbloccarlo. I portali si possono sempre trascinare nelle zone.",
    "sbloccate": "Spostamento delle zone sbloccato: trascina una zona sopra un'altra per spostarla. Clic per bloccarlo.",
    "trascinaTutti": "Mostra tutti i portali. Trascina qui un portale per togliergli la zona, oppure una zona per riportarla in cima."
   }
  }
 },
 "de": {
  "TYPES": {
   "RegionBehavior": {
    "magic-way.portale": "Magic Way – Portal"
   },
   "HINTS": {
    "RegionBehavior": {
     "magic-way.portale": "Teleportiert Token, die die Region betreten, in einen Ankunftsbereich, auch auf einer anderen Szene. Wird über das Magic-Way-Panel verwaltet."
    }
   }
  },
  "MAGICWAY": {
   "Modalita": {
    "libero": "Frei",
    "controllato": "Offen / geschlossen",
    "comando": "Auf Befehl der SL"
   },
   "Passano": {
    "giocatori": "Nur Spieler",
    "png": "Nur Monster und NSC der SL",
    "tutti": "Spieler, Monster und NSC"
   },
   "Impostazioni": {
    "notifiche": {
     "nome": "SL bei jeder Teleportation benachrichtigen",
     "hint": "Zeigt der SL, wer durch welches Portal in welche Szene teleportiert wurde."
    },
    "effetto": {
     "nome": "Ausblend- und Erscheinungseffekt",
     "hint": "Wenn das Portal aktiviert wird, erscheint ein magischer Blitz: Der Token verblasst beim Aufbruch und blendet bei der Ankunft wieder ein. Alle sehen es."
    },
    "coloreEffetto": {
     "nome": "Farbe des magischen Blitzes",
     "hint": "Farbe des Rings und des Leuchtens, die bei Aktivierung des Portals erscheinen."
    },
    "dissolvenza": {
     "nome": "Überblendung beim Szenenwechsel",
     "hint": "Spieler werden mit einer Überblendung in die Ankunftsszene gebracht."
    },
    "suono": {
     "nome": "Teleportationsgeräusch",
     "hint": "Audiodatei, die bei jeder Teleportation für alle abgespielt wird. Leer lassen für keinen Ton."
    },
    "segueMaster": {
     "nome": "SL folgt der Gruppe",
     "hint": "Nach einer befohlenen Teleportation in eine andere Szene wechselt auch deine Ansicht zur Ankunftsszene. Außerdem: Bringt ein Portal alle verbundenen Spieler in die neue Szene, wechselst auch du dorthin und sie wird zur aktiven Szene."
    },
    "lingua": {
     "nome": "Sprache von Magic Way (nur dieses Modul)",
     "hint": "Ändert nur die Texte von Magic Way: Die Sprache von Foundry und die anderer Module bleiben unverändert. Nützlich, wenn Magic Way nicht von selbst die richtige Sprache verwendet. „Automatisch“ folgt der Sprache von Foundry. Beim Ändern wird die Seite neu geladen.",
     "auto": "Automatisch (Sprache von Foundry)"
    }
   },
   "Tasto": {
    "pannello": "Magic-Way-Panel öffnen"
   },
   "Avvisi": {
    "serveMaster": "Magic Way: Eine SL muss verbunden sein, um die Teleportation abzuschließen.",
    "senzaArrivo": "Magic Way: Portal „{nome}“ hat keinen gültigen Ankunftsbereich.",
    "fatto": "Magic Way: {chi} → „{portale}“ → {scena}",
    "creato": "Magic Way: Portal „{nome}“ erstellt ({da} → {a}).",
    "nessunoPresente": "Magic Way: Im Bereich des Portals „{nome}“ ist niemand zum Teleportieren.",
    "nascosta": "Der Bereich «{nome}» wurde als «Versteckt» markiert: In Foundry 14 schaltet das das Portal ab. Entferne den Haken, damit es funktioniert (Spieler sehen die Bereiche von Magic Way ohnehin nicht).",
    "soloMaster": "Magic Way: Nur die SL kann das Portal-Panel verwenden.",
    "nonTrovato": "Magic Way: Portal „{nome}“ nicht gefunden.",
    "errore": "Magic Way: Die Teleportation durch Portal „{nome}“ ist fehlgeschlagen (Details in der Konsole, F12).",
    "ritornoCreato": "Magic Way: Rückweg von „{nome}“ erstellt.",
    "riparati": "Magic Way: Verbindungen repariert {n}, Zonen neu erstellt {z}.",
    "tuttoAPosto": "Magic Way: Alle Verbindungen sind in Ordnung.",
    "mancanti": "Magic Way: {n} Portale ohne Ankunft. Zu importierende Karten: {scene}."
   },
   "Cattura": {
    "esc": "Esc oder Rechtsklick = abbrechen",
    "ingresso": "Ziehe auf der Karte, um den EINGANGSBEREICH zu zeichnen (ein Klick = ein Feld).",
    "arrivo": "Öffne die Ankunftsszene (oder bleib hier) und ziehe, um den ANKUNFTSBEREICH zu zeichnen.",
    "ridisegna": "Öffne die richtige Szene und ziehe, um den Bereich „{nome}“ neu zu zeichnen."
   },
   "Portale": {
    "nomePredefinito": "Portal",
    "arrivo": "Ankunft",
    "ritorno": "Rückweg"
   },
   "Pannello": {
    "titolo": "Magic Way – Portal-Panel",
    "pulsante": "Magic Way – Portal-Panel",
    "nuovo": "Neues Portal",
    "apriTutti": "Alle öffnen",
    "apriTuttiHint": "Öffnet alle Portale im Modus offen/geschlossen (nur die aufgelisteten).",
    "chiudiTutti": "Alle schließen",
    "chiudiTuttiHint": "Schließt alle Portale im Modus offen/geschlossen (nur die aufgelisteten).",
    "soloScena": "Nur diese Szene",
    "vuoto": "Noch keine Portale. Klicke auf „Neues Portal“, um eines zu erstellen.",
    "qui": "du siehst diese gerade",
    "attiva": "aktiv für Spieler",
    "passanoHint": "Wer teleportiert wird: nur Spieler-Token, nur von der SL geführte Monster und NSC, oder alle.",
    "teletrasporta": "Jetzt teleportieren",
    "configura": "Regionskonfiguration",
    "elimina": "Verbindung löschen",
    "cerca": "Portal oder Karte suchen…",
    "nessunRisultato": "Kein Portal entspricht der Suche.",
    "ingresso": "Eingang",
    "arrivo": "Ankunft",
    "soloArrivo": "Nur Ankunft: von hier reist niemand ab.",
    "creaRitorno": "Rückweg erstellen",
    "creaRitornoHint": "Macht diesen Bereich zusätzlich zu einem Portal zurück zum anderen.",
    "trascina": "Von hier auf eine Zone links ziehen, um das Portal dort abzulegen",
    "vai": "Diesen Bereich auf der Karte zeigen",
    "ridisegna": "Diesen Bereich neu zeichnen (auf der Karte ziehen, auch auf einer anderen Szene)",
    "nomeHint": "Name dieses Bereichs: frei wählbar",
    "ripara": "Verbindungen reparieren",
    "riparaHint": "Nach dem Import von Karten oder Abenteuern aus einer anderen Welt: findet die Ankünfte über ihre Codes, repariert die Verbindungen und erstellt die Zonen neu. Läuft auch automatisch beim Start und nach jedem Import.",
    "arrivoMancante": "Ankunft „{nome}“ nicht gefunden: importiere auch die Karte „{scena}“ und klicke auf Verbindungen reparieren.",
    "arrivoMancanteGenerico": "Dieses Portal hat keinen Ankunftsbereich: zeichne ihn neu oder lösche die Verbindung."
   },
   "Stato": {
    "disattivato": "deaktiviert",
    "sempreAperto": "immer offen",
    "aperto": "Offen",
    "chiuso": "Geschlossen",
    "attesa": "wartet auf deinen Befehl"
   },
   "Creazione": {
    "titolo": "Neues Portal",
    "nome": "Name des Eingangs",
    "nomeEsempio": "z. B. Magischer Kreis im Turm",
    "modalita": "Modus",
    "passano": "Wer darf hindurch",
    "ritorno": "Auch den Rückweg erstellen",
    "spiegazione": "Nach „Weiter“ ziehst du auf der Karte, um den Eingangsbereich zu zeichnen (so groß du willst, am Raster ausgerichtet; ein einfacher Klick nimmt ein Feld), dann öffnest du die Ankunftsszene (oder bleibst hier) und zeichnest den Ankunftsbereich auf dieselbe Weise. Die Bereiche sind für Spieler unsichtbar: Du siehst sie nur farbig, wenn die Regionen-Ebene aktiv ist.",
    "avanti": "Weiter: Eingang zeichnen",
    "annulla": "Abbrechen",
    "passo1": "Schritt 1 von 2 – Eingang",
    "passo2": "Schritt 2 von 2 – Ankunft",
    "ingressoFatto": "Eingang festgelegt auf Szene",
    "nomeArrivo": "Name der Ankunft",
    "nomeArrivoEsempio": "z. B. Magischer Kreis in der Gruft",
    "zona": "Zone"
   },
   "Elimina": {
    "titolo": "Verbindung löschen",
    "domanda": "Die Verbindung {nome} mit ihren Bereichen löschen?"
   },
   "Comune": {
    "si": "Ja",
    "no": "Nein"
   },
   "Comportamento": {
    "FIELDS": {
     "destinazione": {
      "label": "Ankunftsbereich",
      "hint": "Die Region, in der die Token erscheinen (hierher ziehen oder ihre UUID einfügen). Sie kann auf einer anderen Szene liegen."
     },
     "modalita": {
      "label": "Modus",
      "hint": "Frei: Token reisen sofort. Offen/geschlossen: nur solange die SL es offen hält. Auf Befehl: nur wenn die SL „Jetzt teleportieren“ drückt."
     },
     "aperto": {
      "label": "Offen",
      "hint": "Wird nur im Modus offen/geschlossen verwendet."
     },
     "passano": {
      "label": "Wer passiert",
      "hint": "Nur Spieler-Token, nur von der SL geführte Monster und NSC, oder alle."
     }
    }
   },
   "Zone": {
    "titolo": "Zonen",
    "tutti": "Alle",
    "nuova": "Neue Zone",
    "nome": "Name der Zone",
    "salva": "Speichern",
    "modifica": "Zone bearbeiten",
    "colore": "Farbe",
    "elimina": "Zone löschen",
    "eliminaDomanda": "Zone „{nome}“ löschen? Ihre Portale und Unterzonen wandern in die übergeordnete Zone (oder bleiben ohne Zone).",
    "nessuna": "— keine Zone —",
    "trascina": "Klicken zum Filtern (inklusive Unterzonen). Ziehe ein Portal hierher, um es dieser Zone zuzuordnen, oder eine andere Zone, um sie zu ihrer Unterzone zu machen.",
    "sottozona": "Neue Unterzone (in dieser Zone)",
    "dentro": "In der Zone",
    "inCima": "— oberste Ebene (keine übergeordnete Zone) —",
    "bloccate": "Verschieben der Zonen gesperrt: Klicke, um es freizugeben. Portale kannst du immer in Zonen ziehen.",
    "sbloccate": "Verschieben der Zonen freigegeben: Ziehe eine Zone auf eine andere, um sie zu verschieben. Klicke, um es zu sperren.",
    "trascinaTutti": "Zeigt alle Portale. Ziehe ein Portal hierher, um seine Zone zu entfernen, oder eine Zone, um sie wieder auf die oberste Ebene zu bringen."
   }
  }
 },
 "es": {
  "TYPES": {
   "RegionBehavior": {
    "magic-way.portale": "Magic Way – Portal"
   },
   "HINTS": {
    "RegionBehavior": {
     "magic-way.portale": "Teletransporta los tokens que entran en la región a un área de llegada, incluso en otra escena. Se gestiona desde el panel de Magic Way."
    }
   }
  },
  "MAGICWAY": {
   "Modalita": {
    "libero": "Libre",
    "controllato": "Abierto / cerrado",
    "comando": "A orden del máster"
   },
   "Passano": {
    "giocatori": "Solo jugadores",
    "png": "Solo monstruos y PNJ del máster",
    "tutti": "Jugadores, monstruos y PNJ"
   },
   "Impostazioni": {
    "notifiche": {
     "nome": "Avisar al máster en cada teletransporte",
     "hint": "Muestra al máster quién ha sido teletransportado, a través de qué portal y a qué escena."
    },
    "effetto": {
     "nome": "Efecto de desvanecimiento y aparición",
     "hint": "Cuando el portal se activa aparece un destello mágico: el token se desvanece al partir y reaparece al llegar con un fundido. Todos lo ven."
    },
    "coloreEffetto": {
     "nome": "Color del destello mágico",
     "hint": "Color del anillo y del resplandor que aparecen cuando el portal se activa."
    },
    "dissolvenza": {
     "nome": "Fundido al cambiar de escena",
     "hint": "Los jugadores pasan a la escena de llegada con un fundido."
    },
    "suono": {
     "nome": "Sonido del teletransporte",
     "hint": "Archivo de audio que suena para todos en cada teletransporte. Déjalo vacío para no tener sonido."
    },
    "segueMaster": {
     "nome": "El máster sigue al grupo",
     "hint": "Tras un teletransporte a tu orden hacia otra escena, tu vista también pasa a la escena de llegada. Además, cuando un portal lleva a todos los jugadores conectados a la nueva escena, tú también pasas a ella y se convierte en la escena activa."
    },
    "lingua": {
     "nome": "Idioma de Magic Way (solo este módulo)",
     "hint": "Cambia solo los textos de Magic Way: el idioma de Foundry y el de los demás módulos no cambian. Útil si Magic Way no usa por sí solo el idioma correcto. «Automático» sigue el idioma de Foundry. Al cambiarlo la página se recarga.",
     "auto": "Automático (idioma de Foundry)"
    }
   },
   "Tasto": {
    "pannello": "Abrir el panel de Magic Way"
   },
   "Avvisi": {
    "serveMaster": "Magic Way: hace falta un máster conectado para completar el teletransporte.",
    "senzaArrivo": "Magic Way: el portal «{nome}» no tiene un área de llegada válida.",
    "fatto": "Magic Way: {chi} → «{portale}» → {scena}",
    "creato": "Magic Way: portal «{nome}» creado ({da} → {a}).",
    "nessunoPresente": "Magic Way: no hay nadie que teletransportar en el área del portal «{nome}».",
    "nascosta": "El área «{nome}» se ha marcado como «Oculta»: en Foundry 14 esto apaga el portal. Quita la marca para que funcione (los jugadores no ven las áreas de Magic Way de todos modos).",
    "soloMaster": "Magic Way: solo el máster puede usar el panel de portales.",
    "nonTrovato": "Magic Way: portal «{nome}» no encontrado.",
    "errore": "Magic Way: el teletransporte del portal «{nome}» ha fallado (detalles en la consola, F12).",
    "ritornoCreato": "Magic Way: creado el regreso desde «{nome}».",
    "riparati": "Magic Way: enlaces reparados {n}, zonas recreadas {z}.",
    "tuttoAPosto": "Magic Way: todos los enlaces están bien.",
    "mancanti": "Magic Way: {n} portales sin llegada. Mapas que importar: {scene}."
   },
   "Cattura": {
    "esc": "Esc o clic derecho = cancelar",
    "ingresso": "Arrastra en el mapa para dibujar el área de ENTRADA (un clic = una casilla).",
    "arrivo": "Abre la escena de llegada (o quédate en esta) y arrastra para dibujar el área de LLEGADA.",
    "ridisegna": "Abre la escena correcta y arrastra para volver a dibujar el área «{nome}»."
   },
   "Portale": {
    "nomePredefinito": "Portal",
    "arrivo": "llegada",
    "ritorno": "regreso"
   },
   "Pannello": {
    "titolo": "Magic Way – Panel de portales",
    "pulsante": "Magic Way – Panel de portales",
    "nuovo": "Nuevo portal",
    "apriTutti": "Abrir todos",
    "apriTuttiHint": "Abre todos los portales en modo abierto/cerrado (solo los de la lista).",
    "chiudiTutti": "Cerrar todos",
    "chiudiTuttiHint": "Cierra todos los portales en modo abierto/cerrado (solo los de la lista).",
    "soloScena": "Solo esta escena",
    "vuoto": "Todavía no hay portales. Pulsa «Nuevo portal» para crear uno.",
    "qui": "estás viendo esta",
    "attiva": "activa para los jugadores",
    "passanoHint": "Quién se teletransporta: solo los tokens de los jugadores, solo los monstruos y PNJ del máster, o todos.",
    "teletrasporta": "Teletransportar ahora",
    "configura": "Configuración de la región",
    "elimina": "Eliminar el enlace",
    "cerca": "Buscar portal o mapa…",
    "nessunRisultato": "Ningún portal coincide con la búsqueda.",
    "ingresso": "Entrada",
    "arrivo": "Llegada",
    "soloArrivo": "Solo llegada: desde aquí no se sale.",
    "creaRitorno": "Crear el regreso",
    "creaRitornoHint": "Convierte también esta área en un portal que lleva de vuelta a la otra.",
    "trascina": "Arrastra desde aquí sobre una zona a la izquierda para poner el portal en ella",
    "vai": "Mostrar esta área en el mapa",
    "ridisegna": "Volver a dibujar esta área (arrastra en el mapa, incluso en otra escena)",
    "nomeHint": "Nombre de esta área: escríbelo tú",
    "ripara": "Reparar enlaces",
    "riparaHint": "Tras importar mapas o aventuras de otro mundo: encuentra las llegadas por sus códigos, repara los enlaces y vuelve a crear las zonas. También se ejecuta solo al iniciar y tras cada importación.",
    "arrivoMancante": "Llegada «{nome}» no encontrada: importa también el mapa «{scena}» y pulsa Reparar enlaces.",
    "arrivoMancanteGenerico": "Este portal no tiene área de llegada: vuelve a dibujarla o elimina el enlace."
   },
   "Stato": {
    "disattivato": "desactivado",
    "sempreAperto": "siempre abierto",
    "aperto": "Abierto",
    "chiuso": "Cerrado",
    "attesa": "espera tu orden"
   },
   "Creazione": {
    "titolo": "Nuevo portal",
    "nome": "Nombre de la entrada",
    "nomeEsempio": "p. ej. Círculo mágico de la torre",
    "modalita": "Modo",
    "passano": "Quién puede pasar",
    "ritorno": "Crear también el regreso",
    "spiegazione": "Tras «Siguiente» arrastras en el mapa para dibujar el área de entrada (tan grande como quieras, ajustada a la cuadrícula; un simple clic toma una casilla), luego abres la escena de llegada (o te quedas en esta) y dibujas del mismo modo el área de llegada. Las áreas son invisibles para los jugadores: tú las ves coloreadas solo con la capa de Regiones activa.",
    "avanti": "Siguiente: dibuja la entrada",
    "annulla": "Cancelar",
    "passo1": "Paso 1 de 2 – entrada",
    "passo2": "Paso 2 de 2 – llegada",
    "ingressoFatto": "Entrada fijada en la escena",
    "nomeArrivo": "Nombre de la llegada",
    "nomeArrivoEsempio": "p. ej. Círculo mágico de la cripta",
    "zona": "Zona"
   },
   "Elimina": {
    "titolo": "Eliminar enlace",
    "domanda": "¿Eliminar el enlace {nome} con sus áreas?"
   },
   "Comune": {
    "si": "Sí",
    "no": "No"
   },
   "Comportamento": {
    "FIELDS": {
     "destinazione": {
      "label": "Área de llegada",
      "hint": "La región donde aparecen los tokens (arrástrala aquí o pega su UUID). Puede estar en otra escena."
     },
     "modalita": {
      "label": "Modo",
      "hint": "Libre: quien entra pasa enseguida. Abierto/cerrado: solo mientras el máster lo mantenga abierto. A orden: solo cuando el máster pulsa «Teletransportar ahora»."
     },
     "aperto": {
      "label": "Abierto",
      "hint": "Solo se usa en el modo abierto/cerrado."
     },
     "passano": {
      "label": "Quién pasa",
      "hint": "Solo los tokens de los jugadores, solo los monstruos y PNJ del máster, o todos."
     }
    }
   },
   "Zone": {
    "titolo": "Zonas",
    "tutti": "Todos",
    "nuova": "Nueva zona",
    "nome": "Nombre de la zona",
    "salva": "Guardar",
    "modifica": "Editar zona",
    "colore": "Color",
    "elimina": "Eliminar zona",
    "eliminaDomanda": "¿Eliminar la zona «{nome}»? Sus portales y subzonas pasan a la zona superior (o se quedan sin zona).",
    "nessuna": "— sin zona —",
    "trascina": "Haz clic para filtrar (incluye las subzonas). Arrastra aquí un portal para ponerlo en esta zona, u otra zona para convertirla en su subzona.",
    "sottozona": "Nueva subzona (dentro de esta zona)",
    "dentro": "Dentro de la zona",
    "inCima": "— nivel superior (sin zona superior) —",
    "bloccate": "Mover las zonas está bloqueado: haz clic para desbloquearlo. Los portales siempre se pueden arrastrar a las zonas.",
    "sbloccate": "Mover las zonas está desbloqueado: arrastra una zona sobre otra para moverla. Haz clic para bloquearlo.",
    "trascinaTutti": "Muestra todos los portales. Arrastra aquí un portal para quitarle la zona, o una zona para devolverla al nivel superior."
   }
  }
 }
};
