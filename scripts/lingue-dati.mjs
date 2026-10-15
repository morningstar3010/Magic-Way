/**
 * MAGIC WAY – tutti i testi in tutte le lingue (file creato da strumenti/lingue.py, non modificarlo a mano).
 * Serve all'impostazione «Lingua di Magic Way» per usare una lingua diversa da quella di Foundry.
 */
export const NOMI_LINGUE = {"en": "English", "it": "Italiano", "de": "Deutsch", "es": "Español", "fr": "Français", "pl": "Polski", "pt-BR": "Português (Brasil)", "ru": "Русский", "cn": "中文（简体）", "ja": "日本語", "ko": "한국어"};

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
     "hint": "After a commanded teleport to another scene, your view moves to the arrival scene too. Personal setting."
    },
    "lingua": {
     "nome": "Magic Way language (this module only)",
     "hint": "Changes only Magic Way's texts: Foundry's language and other modules stay as they are. Useful if Magic Way does not pick the right language by itself. \"Automatic\" follows Foundry's language. Changing it reloads the page. Personal setting.",
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
     "hint": "Dopo un teletrasporto su comando verso un'altra scena, anche la tua vista passa alla scena d'arrivo. Impostazione personale."
    },
    "lingua": {
     "nome": "Lingua di Magic Way (solo questo modulo)",
     "hint": "Cambia solo i testi di Magic Way: la lingua di Foundry e quella degli altri moduli restano come sono. Serve se Magic Way non usa da solo la lingua giusta. «Automatica» segue la lingua di Foundry. Al cambio la pagina si ricarica. Impostazione personale.",
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
     "hint": "Nach einer befohlenen Teleportation in eine andere Szene wechselt auch deine Ansicht zur Ankunftsszene. Persönliche Einstellung."
    },
    "lingua": {
     "nome": "Sprache von Magic Way (nur dieses Modul)",
     "hint": "Ändert nur die Texte von Magic Way: Die Sprache von Foundry und die anderer Module bleiben unverändert. Nützlich, wenn Magic Way nicht von selbst die richtige Sprache verwendet. „Automatisch“ folgt der Sprache von Foundry. Beim Ändern wird die Seite neu geladen. Persönliche Einstellung.",
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
     "hint": "Tras un teletransporte a tu orden hacia otra escena, tu vista también pasa a la escena de llegada. Ajuste personal."
    },
    "lingua": {
     "nome": "Idioma de Magic Way (solo este módulo)",
     "hint": "Cambia solo los textos de Magic Way: el idioma de Foundry y el de los demás módulos no cambian. Útil si Magic Way no usa por sí solo el idioma correcto. «Automático» sigue el idioma de Foundry. Al cambiarlo la página se recarga. Ajuste personal.",
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
 },
 "fr": {
  "TYPES": {
   "RegionBehavior": {
    "magic-way.portale": "Magic Way – Portail"
   },
   "HINTS": {
    "RegionBehavior": {
     "magic-way.portale": "Téléporte les jetons qui entrent dans la région vers une zone d'arrivée, même sur une autre scène. Se gère depuis le panneau Magic Way."
    }
   }
  },
  "MAGICWAY": {
   "Modalita": {
    "libero": "Libre",
    "controllato": "Ouvert / fermé",
    "comando": "Sur ordre du MJ"
   },
   "Passano": {
    "giocatori": "Joueurs uniquement",
    "png": "Seulement monstres et PNJ du MJ",
    "tutti": "Joueurs, monstres et PNJ"
   },
   "Impostazioni": {
    "notifiche": {
     "nome": "Prévenir le MJ à chaque téléportation",
     "hint": "Indique au MJ qui a été téléporté, par quel portail et vers quelle scène."
    },
    "effetto": {
     "nome": "Effet de disparition et d'apparition",
     "hint": "Quand le portail s'active, un éclair magique apparaît : le jeton s'efface au départ et réapparaît en fondu à l'arrivée. Tout le monde le voit."
    },
    "coloreEffetto": {
     "nome": "Couleur de l'éclair magique",
     "hint": "Couleur de l'anneau et de la lueur qui apparaissent quand le portail s'active."
    },
    "dissolvenza": {
     "nome": "Fondu au changement de scène",
     "hint": "Les joueurs sont amenés sur la scène d'arrivée avec un fondu."
    },
    "suono": {
     "nome": "Son de téléportation",
     "hint": "Fichier audio joué pour tous à chaque téléportation. Laisser vide pour aucun son."
    },
    "segueMaster": {
     "nome": "Le MJ suit le groupe",
     "hint": "Après une téléportation sur ordre vers une autre scène, ta vue passe aussi sur la scène d'arrivée. Réglage personnel."
    },
    "lingua": {
     "nome": "Langue de Magic Way (ce module uniquement)",
     "hint": "Ne change que les textes de Magic Way : la langue de Foundry et celle des autres modules restent inchangées. Utile si Magic Way n'utilise pas tout seul la bonne langue. « Automatique » suit la langue de Foundry. Le changement recharge la page. Réglage personnel.",
     "auto": "Automatique (langue de Foundry)"
    }
   },
   "Tasto": {
    "pannello": "Ouvrir le panneau Magic Way"
   },
   "Avvisi": {
    "serveMaster": "Magic Way : un MJ doit être connecté pour terminer la téléportation.",
    "senzaArrivo": "Magic Way : le portail « {nome} » n'a pas de zone d'arrivée valide.",
    "fatto": "Magic Way : {chi} → « {portale} » → {scena}",
    "creato": "Magic Way : portail « {nome} » créé ({da} → {a}).",
    "nessunoPresente": "Magic Way : personne à téléporter dans la zone du portail « {nome} ».",
    "nascosta": "La zone « {nome} » a été marquée comme « Cachée » : dans Foundry 14, cela désactive le portail. Décoche-la pour qu'il fonctionne (les joueurs ne voient de toute façon pas les zones de Magic Way).",
    "soloMaster": "Magic Way : seul le MJ peut utiliser le panneau des portails.",
    "nonTrovato": "Magic Way : portail « {nome} » introuvable.",
    "errore": "Magic Way : la téléportation par le portail « {nome} » a échoué (détails dans la console, F12).",
    "ritornoCreato": "Magic Way : retour créé depuis « {nome} ».",
    "riparati": "Magic Way : liaisons réparées {n}, zones recréées {z}.",
    "tuttoAPosto": "Magic Way : toutes les liaisons sont en ordre.",
    "mancanti": "Magic Way : {n} portails sans arrivée. Cartes à importer : {scene}."
   },
   "Cattura": {
    "esc": "Échap ou clic droit = annuler",
    "ingresso": "Fais glisser sur la carte pour dessiner la zone d'ENTRÉE (un clic = une case).",
    "arrivo": "Ouvre la scène d'arrivée (ou reste sur celle-ci) et fais glisser pour dessiner la zone d'ARRIVÉE.",
    "ridisegna": "Ouvre la bonne scène et fais glisser pour redessiner la zone « {nome} »."
   },
   "Portale": {
    "nomePredefinito": "Portail",
    "arrivo": "arrivée",
    "ritorno": "retour"
   },
   "Pannello": {
    "titolo": "Magic Way – Panneau des portails",
    "pulsante": "Magic Way – Panneau des portails",
    "nuovo": "Nouveau portail",
    "apriTutti": "Tout ouvrir",
    "apriTuttiHint": "Ouvre tous les portails en mode ouvert/fermé (seulement ceux de la liste).",
    "chiudiTutti": "Tout fermer",
    "chiudiTuttiHint": "Ferme tous les portails en mode ouvert/fermé (seulement ceux de la liste).",
    "soloScena": "Cette scène uniquement",
    "vuoto": "Aucun portail. Clique sur « Nouveau portail » pour en créer un.",
    "qui": "tu regardes celle-ci",
    "attiva": "active pour les joueurs",
    "passanoHint": "Qui est téléporté : seulement les jetons des joueurs, seulement les monstres et PNJ du MJ, ou tout le monde.",
    "teletrasporta": "Téléporter maintenant",
    "configura": "Configuration de la région",
    "elimina": "Supprimer la liaison",
    "cerca": "Chercher un portail ou une carte…",
    "nessunRisultato": "Aucun portail ne correspond à la recherche.",
    "ingresso": "Entrée",
    "arrivo": "Arrivée",
    "soloArrivo": "Arrivée seulement : on ne part pas d'ici.",
    "creaRitorno": "Créer le retour",
    "creaRitornoHint": "Fait aussi de cette zone un portail qui ramène à l'autre.",
    "trascina": "Fais glisser d'ici sur une zone à gauche pour y mettre le portail",
    "vai": "Montrer cette zone sur la carte",
    "ridisegna": "Redessiner cette zone (glisser sur la carte, même sur une autre scène)",
    "nomeHint": "Nom de cette zone : écris le tien",
    "ripara": "Réparer les liaisons",
    "riparaHint": "Après avoir importé des cartes ou des aventures d'un autre monde : retrouve les arrivées grâce à leurs codes, répare les liaisons et recrée les zones. Se lance aussi tout seul au démarrage et après chaque import.",
    "arrivoMancante": "Arrivée « {nome} » introuvable : importe aussi la carte « {scena} » et clique sur Réparer les liaisons.",
    "arrivoMancanteGenerico": "Ce portail n'a pas de zone d'arrivée : redessine-la ou supprime la liaison."
   },
   "Stato": {
    "disattivato": "désactivé",
    "sempreAperto": "toujours ouvert",
    "aperto": "Ouvert",
    "chiuso": "Fermé",
    "attesa": "attend ton ordre"
   },
   "Creazione": {
    "titolo": "Nouveau portail",
    "nome": "Nom de l'entrée",
    "nomeEsempio": "ex. Cercle magique de la tour",
    "modalita": "Mode",
    "passano": "Qui peut passer",
    "ritorno": "Créer aussi le retour",
    "spiegazione": "Après « Suivant », fais glisser sur la carte pour dessiner la zone d'entrée (aussi grande que tu veux, alignée sur la grille ; un simple clic prend une case), puis ouvre la scène d'arrivée (ou reste sur celle-ci) et dessine de la même façon la zone d'arrivée. Les zones sont invisibles pour les joueurs : tu les vois en couleur seulement quand le calque Régions est actif.",
    "avanti": "Suivant : dessine l'entrée",
    "annulla": "Annuler",
    "passo1": "Étape 1 sur 2 – entrée",
    "passo2": "Étape 2 sur 2 – arrivée",
    "ingressoFatto": "Entrée placée sur la scène",
    "nomeArrivo": "Nom de l'arrivée",
    "nomeArrivoEsempio": "ex. Cercle magique de la crypte",
    "zona": "Zone"
   },
   "Elimina": {
    "titolo": "Supprimer la liaison",
    "domanda": "Supprimer la liaison {nome} et ses zones ?"
   },
   "Comune": {
    "si": "Oui",
    "no": "Non"
   },
   "Comportamento": {
    "FIELDS": {
     "destinazione": {
      "label": "Zone d'arrivée",
      "hint": "La région où apparaissent les jetons (dépose-la ici ou colle son UUID). Elle peut être sur une autre scène."
     },
     "modalita": {
      "label": "Mode",
      "hint": "Libre : on passe tout de suite. Ouvert/fermé : seulement quand le MJ l'ouvre. Sur ordre : seulement quand le MJ clique sur « Téléporter maintenant »."
     },
     "aperto": {
      "label": "Ouvert",
      "hint": "Utilisé seulement en mode ouvert/fermé."
     },
     "passano": {
      "label": "Qui passe",
      "hint": "Seulement les jetons des joueurs, seulement les monstres et PNJ du MJ, ou tout le monde."
     }
    }
   },
   "Zone": {
    "titolo": "Zones",
    "tutti": "Tous",
    "nuova": "Nouvelle zone",
    "nome": "Nom de la zone",
    "salva": "Enregistrer",
    "modifica": "Modifier la zone",
    "colore": "Couleur",
    "elimina": "Supprimer la zone",
    "eliminaDomanda": "Supprimer la zone « {nome} » ? Ses portails et sous-zones passent à la zone parente (ou restent sans zone).",
    "nessuna": "— aucune zone —",
    "trascina": "Clique pour filtrer (sous-zones comprises). Fais glisser ici un portail pour le mettre dans cette zone, ou une autre zone pour en faire sa sous-zone.",
    "sottozona": "Nouvelle sous-zone (dans cette zone)",
    "dentro": "Dans la zone",
    "inCima": "— niveau supérieur (aucune zone parente) —",
    "bloccate": "Le déplacement des zones est verrouillé : clique pour le déverrouiller. Les portails peuvent toujours être glissés dans les zones.",
    "sbloccate": "Le déplacement des zones est déverrouillé : fais glisser une zone sur une autre pour la déplacer. Clique pour le verrouiller.",
    "trascinaTutti": "Affiche tous les portails. Fais glisser ici un portail pour lui retirer sa zone, ou une zone pour la remettre au niveau supérieur."
   }
  }
 },
 "pl": {
  "TYPES": {
   "RegionBehavior": {
    "magic-way.portale": "Magic Way – Portal"
   },
   "HINTS": {
    "RegionBehavior": {
     "magic-way.portale": "Teleportuje żetony wchodzące do regionu do obszaru przybycia, także na innej scenie. Zarządzane z panelu Magic Way."
    }
   }
  },
  "MAGICWAY": {
   "Modalita": {
    "libero": "Swobodny",
    "controllato": "Otwarty / zamknięty",
    "comando": "Na polecenie MG"
   },
   "Passano": {
    "giocatori": "Tylko gracze",
    "png": "Tylko potwory i BN MG",
    "tutti": "Gracze, potwory i BN"
   },
   "Impostazioni": {
    "notifiche": {
     "nome": "Powiadamiaj MG o każdej teleportacji",
     "hint": "Pokazuje MG, kto został teleportowany, przez który portal i na jaką scenę."
    },
    "effetto": {
     "nome": "Efekt znikania i pojawiania się",
     "hint": "Gdy portal się uaktywni, pojawia się magiczny błysk: żeton znika przy odejściu i pojawia się przy przybyciu. Widzą to wszyscy."
    },
    "coloreEffetto": {
     "nome": "Kolor magicznego błysku",
     "hint": "Kolor pierścienia i poświaty pokazywanych przy uaktywnieniu portalu."
    },
    "dissolvenza": {
     "nome": "Przejście przy zmianie sceny",
     "hint": "Gracze są przenoszeni na scenę przybycia z płynnym przejściem."
    },
    "suono": {
     "nome": "Dźwięk teleportacji",
     "hint": "Plik dźwiękowy odtwarzany wszystkim przy każdej teleportacji. Pozostaw puste, aby nie było dźwięku."
    },
    "segueMaster": {
     "nome": "MG podąża za drużyną",
     "hint": "Po teleportacji na Twoje polecenie na inną scenę Twój widok również przechodzi na scenę przybycia. Ustawienie osobiste."
    },
    "lingua": {
     "nome": "Język Magic Way (tylko ten moduł)",
     "hint": "Zmienia tylko teksty Magic Way: język Foundry i innych modułów pozostaje bez zmian. Przydatne, jeśli Magic Way sam nie używa właściwego języka. „Automatycznie” podąża za językiem Foundry. Po zmianie strona zostanie przeładowana. Ustawienie osobiste.",
     "auto": "Automatycznie (język Foundry)"
    }
   },
   "Tasto": {
    "pannello": "Otwórz panel Magic Way"
   },
   "Avvisi": {
    "serveMaster": "Magic Way: do dokończenia teleportacji potrzebny jest połączony MG.",
    "senzaArrivo": "Magic Way: portal „{nome}” nie ma prawidłowego obszaru przybycia.",
    "fatto": "Magic Way: {chi} → „{portale}” → {scena}",
    "creato": "Magic Way: utworzono portal „{nome}” ({da} → {a}).",
    "nessunoPresente": "Magic Way: w obszarze portalu „{nome}” nie ma nikogo do teleportacji.",
    "nascosta": "Obszar «{nome}» został oznaczony jako «Ukryty»: w Foundry 14 wyłącza to portal. Odznacz, aby działał (gracze i tak nie widzą obszarów Magic Way).",
    "soloMaster": "Magic Way: tylko MG może używać panelu portali.",
    "nonTrovato": "Magic Way: nie znaleziono portalu „{nome}”.",
    "errore": "Magic Way: teleportacja przez portal „{nome}” nie powiodła się (szczegóły w konsoli, F12).",
    "ritornoCreato": "Magic Way: utworzono powrót z „{nome}”.",
    "riparati": "Magic Way: naprawione połączenia: {n}, odtworzone strefy: {z}.",
    "tuttoAPosto": "Magic Way: wszystkie połączenia są w porządku.",
    "mancanti": "Magic Way: portali bez przybycia: {n}. Mapy do zaimportowania: {scene}."
   },
   "Cattura": {
    "esc": "Esc lub prawy klik = anuluj",
    "ingresso": "Przeciągnij po mapie, aby narysować obszar WEJŚCIA (jedno kliknięcie = jedno pole).",
    "arrivo": "Otwórz scenę przybycia (lub zostań na tej) i przeciągnij, aby narysować obszar PRZYBYCIA.",
    "ridisegna": "Otwórz właściwą scenę i przeciągnij, aby ponownie narysować obszar „{nome}”."
   },
   "Portale": {
    "nomePredefinito": "Portal",
    "arrivo": "przybycie",
    "ritorno": "powrót"
   },
   "Pannello": {
    "titolo": "Magic Way – Panel portali",
    "pulsante": "Magic Way – Panel portali",
    "nuovo": "Nowy portal",
    "apriTutti": "Otwórz wszystkie",
    "apriTuttiHint": "Otwiera wszystkie portale w trybie otwarty/zamknięty (tylko widoczne na liście).",
    "chiudiTutti": "Zamknij wszystkie",
    "chiudiTuttiHint": "Zamyka wszystkie portale w trybie otwarty/zamknięty (tylko widoczne na liście).",
    "soloScena": "Tylko ta scena",
    "vuoto": "Nie ma jeszcze portali. Kliknij „Nowy portal”, aby go utworzyć.",
    "qui": "oglądasz tę scenę",
    "attiva": "aktywna dla graczy",
    "passanoHint": "Kto jest teleportowany: tylko żetony graczy, tylko potwory i BN prowadzone przez MG, albo wszyscy.",
    "teletrasporta": "Teleportuj teraz",
    "configura": "Konfiguracja regionu",
    "elimina": "Usuń połączenie",
    "cerca": "Szukaj portalu lub mapy…",
    "nessunRisultato": "Żaden portal nie pasuje do wyszukiwania.",
    "ingresso": "Wejście",
    "arrivo": "Przybycie",
    "soloArrivo": "Tylko przybycie: stąd nikt nie wyrusza.",
    "creaRitorno": "Utwórz powrót",
    "creaRitornoHint": "Zamienia ten obszar także w portal prowadzący z powrotem do drugiego.",
    "trascina": "Przeciągnij stąd na strefę po lewej, aby umieścić w niej portal",
    "vai": "Pokaż ten obszar na mapie",
    "ridisegna": "Narysuj ten obszar ponownie (przeciągnij po mapie, także na innej scenie)",
    "nomeHint": "Nazwa tego obszaru: wpisz własną",
    "ripara": "Napraw połączenia",
    "riparaHint": "Po zaimportowaniu map lub przygód z innego świata: odnajduje przybycia po ich kodach, naprawia połączenia i odtwarza strefy. Uruchamia się też sam przy starcie i po każdym imporcie.",
    "arrivoMancante": "Nie znaleziono przybycia „{nome}”: zaimportuj też mapę „{scena}” i kliknij Napraw połączenia.",
    "arrivoMancanteGenerico": "Ten portal nie ma obszaru przybycia: narysuj go ponownie lub usuń połączenie."
   },
   "Stato": {
    "disattivato": "wyłączony",
    "sempreAperto": "zawsze otwarty",
    "aperto": "Otwarty",
    "chiuso": "Zamknięty",
    "attesa": "czeka na Twoje polecenie"
   },
   "Creazione": {
    "titolo": "Nowy portal",
    "nome": "Nazwa wejścia",
    "nomeEsempio": "np. Magiczny krąg wieży",
    "modalita": "Tryb",
    "passano": "Kto może przejść",
    "ritorno": "Utwórz także powrót",
    "spiegazione": "Po „Dalej” przeciągnij po mapie, aby narysować obszar wejścia (dowolnej wielkości, wyrównany do siatki; zwykłe kliknięcie bierze jedno pole), potem otwórz scenę przybycia (lub zostań na tej) i tak samo narysuj obszar przybycia. Gracze nie widzą obszarów: Ty widzisz je w kolorze tylko przy aktywnej warstwie regionów.",
    "avanti": "Dalej: narysuj wejście",
    "annulla": "Anuluj",
    "passo1": "Krok 1 z 2 – wejście",
    "passo2": "Krok 2 z 2 – przybycie",
    "ingressoFatto": "Wejście ustawione na scenie",
    "nomeArrivo": "Nazwa przybycia",
    "nomeArrivoEsempio": "np. Magiczny krąg krypty",
    "zona": "Strefa"
   },
   "Elimina": {
    "titolo": "Usuń połączenie",
    "domanda": "Usunąć połączenie {nome} wraz z jego obszarami?"
   },
   "Comune": {
    "si": "Tak",
    "no": "Nie"
   },
   "Comportamento": {
    "FIELDS": {
     "destinazione": {
      "label": "Obszar przybycia",
      "hint": "Region, w którym pojawiają się żetony (przeciągnij go tutaj lub wklej jego UUID). Może być na innej scenie."
     },
     "modalita": {
      "label": "Tryb",
      "hint": "Swobodny: kto wejdzie, od razu przechodzi. Otwarty/zamknięty: tylko gdy MG trzyma go otwartym. Na polecenie: tylko gdy MG kliknie „Teleportuj teraz”."
     },
     "aperto": {
      "label": "Otwarty",
      "hint": "Używane tylko w trybie otwarty/zamknięty."
     },
     "passano": {
      "label": "Kto przechodzi",
      "hint": "Tylko żetony graczy, tylko potwory i BN prowadzone przez MG, albo wszyscy."
     }
    }
   },
   "Zone": {
    "titolo": "Strefy",
    "tutti": "Wszystkie",
    "nuova": "Nowa strefa",
    "nome": "Nazwa strefy",
    "salva": "Zapisz",
    "modifica": "Edytuj strefę",
    "colore": "Kolor",
    "elimina": "Usuń strefę",
    "eliminaDomanda": "Usunąć strefę „{nome}”? Jej portale i podstrefy przejdą do strefy nadrzędnej (lub zostaną bez strefy).",
    "nessuna": "— bez strefy —",
    "trascina": "Kliknij, aby filtrować (z podstrefami). Przeciągnij tu portal, aby dodać go do tej strefy, albo inną strefę, aby stała się jej podstrefą.",
    "sottozona": "Nowa podstrefa (w tej strefie)",
    "dentro": "W strefie",
    "inCima": "— najwyższy poziom (bez strefy nadrzędnej) —",
    "bloccate": "Przenoszenie stref jest zablokowane: kliknij, aby je odblokować. Portale zawsze można przeciągać do stref.",
    "sbloccate": "Przenoszenie stref jest odblokowane: przeciągnij strefę na inną, aby ją przenieść. Kliknij, aby zablokować.",
    "trascinaTutti": "Pokazuje wszystkie portale. Przeciągnij tu portal, aby usunąć go ze strefy, albo strefę, aby wróciła na najwyższy poziom."
   }
  }
 },
 "pt-BR": {
  "TYPES": {
   "RegionBehavior": {
    "magic-way.portale": "Magic Way – Portal"
   },
   "HINTS": {
    "RegionBehavior": {
     "magic-way.portale": "Teletransporta os tokens que entram na região para uma área de chegada, mesmo em outra cena. Gerenciado pelo painel do Magic Way."
    }
   }
  },
  "MAGICWAY": {
   "Modalita": {
    "libero": "Livre",
    "controllato": "Aberto / fechado",
    "comando": "Por comando do mestre"
   },
   "Passano": {
    "giocatori": "Somente jogadores",
    "png": "Somente monstros e NPCs do mestre",
    "tutti": "Jogadores, monstros e NPCs"
   },
   "Impostazioni": {
    "notifiche": {
     "nome": "Avisar o mestre a cada teletransporte",
     "hint": "Mostra ao mestre quem foi teletransportado, por qual portal e para qual cena."
    },
    "effetto": {
     "nome": "Efeito de desaparecer e aparecer",
     "hint": "Quando o portal é ativado, surge um clarão mágico: o token desaparece na partida e reaparece na chegada. Todos veem."
    },
    "coloreEffetto": {
     "nome": "Cor do clarão mágico",
     "hint": "Cor do anel e do brilho exibidos quando o portal é ativado."
    },
    "dissolvenza": {
     "nome": "Transição suave ao trocar de cena",
     "hint": "Os jogadores são levados à cena de chegada com uma transição suave."
    },
    "suono": {
     "nome": "Som do teletransporte",
     "hint": "Arquivo de áudio tocado para todos a cada teletransporte. Deixe vazio para nenhum som."
    },
    "segueMaster": {
     "nome": "O mestre acompanha o grupo",
     "hint": "Após um teletransporte por seu comando para outra cena, sua visão também passa para a cena de chegada. Configuração pessoal."
    },
    "lingua": {
     "nome": "Idioma do Magic Way (somente este módulo)",
     "hint": "Muda somente os textos do Magic Way: o idioma do Foundry e o dos outros módulos continuam iguais. Útil se o Magic Way não usar o idioma certo sozinho. “Automático” segue o idioma do Foundry. Ao mudar, a página é recarregada. Configuração pessoal.",
     "auto": "Automático (idioma do Foundry)"
    }
   },
   "Tasto": {
    "pannello": "Abrir o painel do Magic Way"
   },
   "Avvisi": {
    "serveMaster": "Magic Way: é preciso um mestre conectado para concluir o teletransporte.",
    "senzaArrivo": "Magic Way: o portal “{nome}” não tem uma área de chegada válida.",
    "fatto": "Magic Way: {chi} → “{portale}” → {scena}",
    "creato": "Magic Way: portal “{nome}” criado ({da} → {a}).",
    "nessunoPresente": "Magic Way: não há ninguém para teletransportar na área do portal “{nome}”.",
    "nascosta": "A área «{nome}» foi marcada como «Oculta»: no Foundry 14 isso desliga o portal. Desmarque para que funcione (os jogadores não veem as áreas do Magic Way de qualquer forma).",
    "soloMaster": "Magic Way: somente o mestre pode usar o painel de portais.",
    "nonTrovato": "Magic Way: portal “{nome}” não encontrado.",
    "errore": "Magic Way: o teletransporte pelo portal “{nome}” falhou (detalhes no console, F12).",
    "ritornoCreato": "Magic Way: retorno criado a partir de “{nome}”.",
    "riparati": "Magic Way: ligações reparadas {n}, zonas recriadas {z}.",
    "tuttoAPosto": "Magic Way: todas as ligações estão em ordem.",
    "mancanti": "Magic Way: {n} portais sem chegada. Mapas a importar: {scene}."
   },
   "Cattura": {
    "esc": "Esc ou clique direito = cancelar",
    "ingresso": "Arraste no mapa para desenhar a área de ENTRADA (um clique = um quadrado).",
    "arrivo": "Abra a cena de chegada (ou fique nesta) e arraste para desenhar a área de CHEGADA.",
    "ridisegna": "Abra a cena certa e arraste para redesenhar a área “{nome}”."
   },
   "Portale": {
    "nomePredefinito": "Portal",
    "arrivo": "chegada",
    "ritorno": "retorno"
   },
   "Pannello": {
    "titolo": "Magic Way – Painel de portais",
    "pulsante": "Magic Way – Painel de portais",
    "nuovo": "Novo portal",
    "apriTutti": "Abrir todos",
    "apriTuttiHint": "Abre todos os portais no modo aberto/fechado (somente os da lista).",
    "chiudiTutti": "Fechar todos",
    "chiudiTuttiHint": "Fecha todos os portais no modo aberto/fechado (somente os da lista).",
    "soloScena": "Somente esta cena",
    "vuoto": "Ainda não há portais. Clique em “Novo portal” para criar um.",
    "qui": "você está vendo esta",
    "attiva": "ativa para os jogadores",
    "passanoHint": "Quem é teletransportado: somente tokens dos jogadores, somente monstros e NPCs do mestre, ou todos.",
    "teletrasporta": "Teletransportar agora",
    "configura": "Configuração da região",
    "elimina": "Excluir a ligação",
    "cerca": "Buscar portal ou mapa…",
    "nessunRisultato": "Nenhum portal corresponde à busca.",
    "ingresso": "Entrada",
    "arrivo": "Chegada",
    "soloArrivo": "Somente chegada: daqui ninguém parte.",
    "creaRitorno": "Criar o retorno",
    "creaRitornoHint": "Transforma esta área também em um portal de volta para a outra.",
    "trascina": "Arraste daqui para uma zona à esquerda para colocar o portal nela",
    "vai": "Mostrar esta área no mapa",
    "ridisegna": "Redesenhar esta área (arraste no mapa, mesmo em outra cena)",
    "nomeHint": "Nome desta área: escreva o seu",
    "ripara": "Reparar ligações",
    "riparaHint": "Após importar mapas ou aventuras de outro mundo: encontra as chegadas pelos seus códigos, repara as ligações e recria as zonas. Também roda sozinho ao iniciar e após cada importação.",
    "arrivoMancante": "Chegada “{nome}” não encontrada: importe também o mapa “{scena}” e clique em Reparar ligações.",
    "arrivoMancanteGenerico": "Este portal não tem área de chegada: redesenhe-a ou exclua a ligação."
   },
   "Stato": {
    "disattivato": "desativado",
    "sempreAperto": "sempre aberto",
    "aperto": "Aberto",
    "chiuso": "Fechado",
    "attesa": "aguardando seu comando"
   },
   "Creazione": {
    "titolo": "Novo portal",
    "nome": "Nome da entrada",
    "nomeEsempio": "ex.: Círculo mágico da torre",
    "modalita": "Modo",
    "passano": "Quem pode passar",
    "ritorno": "Criar também o retorno",
    "spiegazione": "Depois de “Próximo”, arraste no mapa para desenhar a área de entrada (do tamanho que quiser, alinhada à grade; um clique simples pega um quadrado), depois abra a cena de chegada (ou fique nesta) e desenhe a área de chegada do mesmo jeito. As áreas são invisíveis para os jogadores: você as vê coloridas só com a camada de Regiões ativa.",
    "avanti": "Próximo: desenhe a entrada",
    "annulla": "Cancelar",
    "passo1": "Passo 1 de 2 – entrada",
    "passo2": "Passo 2 de 2 – chegada",
    "ingressoFatto": "Entrada definida na cena",
    "nomeArrivo": "Nome da chegada",
    "nomeArrivoEsempio": "ex.: Círculo mágico da cripta",
    "zona": "Zona"
   },
   "Elimina": {
    "titolo": "Excluir ligação",
    "domanda": "Excluir a ligação {nome} e suas áreas?"
   },
   "Comune": {
    "si": "Sim",
    "no": "Não"
   },
   "Comportamento": {
    "FIELDS": {
     "destinazione": {
      "label": "Área de chegada",
      "hint": "A região onde os tokens aparecem (arraste-a para cá ou cole o UUID dela). Pode estar em outra cena."
     },
     "modalita": {
      "label": "Modo",
      "hint": "Livre: quem entra passa na hora. Aberto/fechado: só enquanto o mestre o mantiver aberto. Por comando: só quando o mestre clicar em “Teletransportar agora”."
     },
     "aperto": {
      "label": "Aberto",
      "hint": "Usado só no modo aberto/fechado."
     },
     "passano": {
      "label": "Quem passa",
      "hint": "Somente tokens dos jogadores, somente monstros e NPCs do mestre, ou todos."
     }
    }
   },
   "Zone": {
    "titolo": "Zonas",
    "tutti": "Todos",
    "nuova": "Nova zona",
    "nome": "Nome da zona",
    "salva": "Salvar",
    "modifica": "Editar zona",
    "colore": "Cor",
    "elimina": "Excluir zona",
    "eliminaDomanda": "Excluir a zona “{nome}”? Seus portais e subzonas passam para a zona superior (ou ficam sem zona).",
    "nessuna": "— sem zona —",
    "trascina": "Clique para filtrar (inclui as subzonas). Arraste um portal para cá para colocá-lo nesta zona, ou outra zona para torná-la subzona desta.",
    "sottozona": "Nova subzona (dentro desta zona)",
    "dentro": "Dentro da zona",
    "inCima": "— nível superior (sem zona superior) —",
    "bloccate": "Mover as zonas está bloqueado: clique para desbloquear. Os portais sempre podem ser arrastados para as zonas.",
    "sbloccate": "Mover as zonas está desbloqueado: arraste uma zona sobre outra para movê-la. Clique para bloquear.",
    "trascinaTutti": "Mostra todos os portais. Arraste um portal para cá para tirá-lo da zona, ou uma zona para levá-la de volta ao nível superior."
   }
  }
 },
 "ru": {
  "TYPES": {
   "RegionBehavior": {
    "magic-way.portale": "Magic Way – Портал"
   },
   "HINTS": {
    "RegionBehavior": {
     "magic-way.portale": "Телепортирует токены, вошедшие в регион, в зону прибытия, даже на другой сцене. Управляется из панели Magic Way."
    }
   }
  },
  "MAGICWAY": {
   "Modalita": {
    "libero": "Свободный",
    "controllato": "Открыт / закрыт",
    "comando": "По команде мастера"
   },
   "Passano": {
    "giocatori": "Только игроки",
    "png": "Только монстры и NPC мастера",
    "tutti": "Игроки, монстры и NPC"
   },
   "Impostazioni": {
    "notifiche": {
     "nome": "Сообщать мастеру о каждой телепортации",
     "hint": "Показывает мастеру, кто был телепортирован, через какой портал и на какую сцену."
    },
    "effetto": {
     "nome": "Эффект исчезновения и появления",
     "hint": "При срабатывании портала появляется магическая вспышка: токен растворяется при отправлении и проявляется при прибытии. Видят все."
    },
    "coloreEffetto": {
     "nome": "Цвет магической вспышки",
     "hint": "Цвет кольца и свечения, появляющихся при срабатывании портала."
    },
    "dissolvenza": {
     "nome": "Плавный переход при смене сцены",
     "hint": "Игроки переходят на сцену прибытия с плавным переходом."
    },
    "suono": {
     "nome": "Звук телепортации",
     "hint": "Аудиофайл, который проигрывается для всех при каждой телепортации. Оставьте пустым, чтобы звука не было."
    },
    "segueMaster": {
     "nome": "Мастер следует за группой",
     "hint": "После телепортации по вашей команде на другую сцену ваш вид тоже переходит на сцену прибытия. Личная настройка."
    },
    "lingua": {
     "nome": "Язык Magic Way (только этот модуль)",
     "hint": "Меняет только тексты Magic Way: язык Foundry и других модулей остаётся прежним. Нужно, если Magic Way сам не выбирает нужный язык. «Автоматически» следует языку Foundry. После изменения страница перезагрузится. Личная настройка.",
     "auto": "Автоматически (язык Foundry)"
    }
   },
   "Tasto": {
    "pannello": "Открыть панель Magic Way"
   },
   "Avvisi": {
    "serveMaster": "Magic Way: для завершения телепортации должен быть подключён мастер.",
    "senzaArrivo": "Magic Way: у портала «{nome}» нет действующей зоны прибытия.",
    "fatto": "Magic Way: {chi} → «{portale}» → {scena}",
    "creato": "Magic Way: портал «{nome}» создан ({da} → {a}).",
    "nessunoPresente": "Magic Way: в зоне портала «{nome}» некого телепортировать.",
    "nascosta": "Зона «{nome}» отмечена как «Скрытая»: в Foundry 14 это отключает портал. Снимите флажок, чтобы он работал (игроки и так не видят зоны Magic Way).",
    "soloMaster": "Magic Way: только мастер может пользоваться панелью порталов.",
    "nonTrovato": "Magic Way: портал «{nome}» не найден.",
    "errore": "Magic Way: телепортация через портал «{nome}» не удалась (подробности в консоли, F12).",
    "ritornoCreato": "Magic Way: обратный путь из «{nome}» создан.",
    "riparati": "Magic Way: восстановлено связей: {n}, воссоздано зон: {z}.",
    "tuttoAPosto": "Magic Way: все связи в порядке.",
    "mancanti": "Magic Way: порталов без прибытия: {n}. Нужно импортировать карты: {scene}."
   },
   "Cattura": {
    "esc": "Esc или правый клик = отмена",
    "ingresso": "Протяните по карте, чтобы нарисовать зону ВХОДА (один клик = одна клетка).",
    "arrivo": "Откройте сцену прибытия (или останьтесь здесь) и протяните, чтобы нарисовать зону ПРИБЫТИЯ.",
    "ridisegna": "Откройте нужную сцену и протяните, чтобы перерисовать зону «{nome}»."
   },
   "Portale": {
    "nomePredefinito": "Портал",
    "arrivo": "прибытие",
    "ritorno": "обратный путь"
   },
   "Pannello": {
    "titolo": "Magic Way – Панель порталов",
    "pulsante": "Magic Way – Панель порталов",
    "nuovo": "Новый портал",
    "apriTutti": "Открыть все",
    "apriTuttiHint": "Открывает все порталы в режиме «открыт / закрыт» (только показанные в списке).",
    "chiudiTutti": "Закрыть все",
    "chiudiTuttiHint": "Закрывает все порталы в режиме «открыт / закрыт» (только показанные в списке).",
    "soloScena": "Только эта сцена",
    "vuoto": "Порталов пока нет. Нажмите «Новый портал», чтобы создать его.",
    "qui": "вы сейчас здесь",
    "attiva": "активна для игроков",
    "passanoHint": "Кто телепортируется: только токены игроков, только монстры и NPC мастера или все.",
    "teletrasporta": "Телепортировать сейчас",
    "configura": "Настройка региона",
    "elimina": "Удалить связь",
    "cerca": "Поиск портала или карты…",
    "nessunRisultato": "Ни один портал не соответствует поиску.",
    "ingresso": "Вход",
    "arrivo": "Прибытие",
    "soloArrivo": "Только прибытие: отсюда никто не уходит.",
    "creaRitorno": "Создать обратный путь",
    "creaRitornoHint": "Делает эту зону также порталом обратно к другой.",
    "trascina": "Перетащите отсюда на зону слева, чтобы поместить в неё портал",
    "vai": "Показать эту зону на карте",
    "ridisegna": "Перерисовать эту зону (протяните по карте, можно и на другой сцене)",
    "nomeHint": "Название этой зоны: впишите своё",
    "ripara": "Восстановить связи",
    "riparaHint": "После импорта карт или приключений из другого мира: находит зоны прибытия по их кодам, восстанавливает связи и воссоздаёт зоны. Также запускается сам при старте и после каждого импорта.",
    "arrivoMancante": "Прибытие «{nome}» не найдено: импортируйте также карту «{scena}» и нажмите «Восстановить связи».",
    "arrivoMancanteGenerico": "У этого портала нет зоны прибытия: перерисуйте её или удалите связь."
   },
   "Stato": {
    "disattivato": "отключён",
    "sempreAperto": "всегда открыт",
    "aperto": "Открыт",
    "chiuso": "Закрыт",
    "attesa": "ждёт вашей команды"
   },
   "Creazione": {
    "titolo": "Новый портал",
    "nome": "Название входа",
    "nomeEsempio": "напр. Магический круг башни",
    "modalita": "Режим",
    "passano": "Кто может пройти",
    "ritorno": "Также создать обратный путь",
    "spiegazione": "После «Далее» протяните по карте, чтобы нарисовать зону входа (любого размера, по сетке; простой клик берёт одну клетку), затем откройте сцену прибытия (или останьтесь на этой) и так же нарисуйте зону прибытия. Игроки зон не видят: вы видите их цветными только при активном слое регионов.",
    "avanti": "Далее: нарисовать вход",
    "annulla": "Отмена",
    "passo1": "Шаг 1 из 2 – вход",
    "passo2": "Шаг 2 из 2 – прибытие",
    "ingressoFatto": "Вход задан на сцене",
    "nomeArrivo": "Название прибытия",
    "nomeArrivoEsempio": "напр. Магический круг склепа",
    "zona": "Зона"
   },
   "Elimina": {
    "titolo": "Удалить связь",
    "domanda": "Удалить связь {nome} вместе с её зонами?"
   },
   "Comune": {
    "si": "Да",
    "no": "Нет"
   },
   "Comportamento": {
    "FIELDS": {
     "destinazione": {
      "label": "Зона прибытия",
      "hint": "Регион, где появляются токены (перетащите сюда или вставьте его UUID). Может быть на другой сцене."
     },
     "modalita": {
      "label": "Режим",
      "hint": "Свободный: проходят сразу. Открыт / закрыт: только пока мастер держит его открытым. По команде: только когда мастер нажимает «Телепортировать сейчас»."
     },
     "aperto": {
      "label": "Открыт",
      "hint": "Используется только в режиме «открыт / закрыт»."
     },
     "passano": {
      "label": "Кто проходит",
      "hint": "Только токены игроков, только монстры и NPC мастера или все."
     }
    }
   },
   "Zone": {
    "titolo": "Зоны",
    "tutti": "Все",
    "nuova": "Новая зона",
    "nome": "Название зоны",
    "salva": "Сохранить",
    "modifica": "Изменить зону",
    "colore": "Цвет",
    "elimina": "Удалить зону",
    "eliminaDomanda": "Удалить зону «{nome}»? Её порталы и подзоны перейдут в родительскую зону (или останутся без зоны).",
    "nessuna": "— без зоны —",
    "trascina": "Нажмите для фильтра (с подзонами). Перетащите сюда портал, чтобы поместить его в эту зону, или другую зону, чтобы сделать её подзоной.",
    "sottozona": "Новая подзона (внутри этой зоны)",
    "dentro": "Внутри зоны",
    "inCima": "— верхний уровень (без родительской зоны) —",
    "bloccate": "Перемещение зон заблокировано: нажмите, чтобы разблокировать. Порталы всегда можно перетаскивать в зоны.",
    "sbloccate": "Перемещение зон разблокировано: перетащите зону на другую, чтобы переместить её. Нажмите, чтобы заблокировать.",
    "trascinaTutti": "Показывает все порталы. Перетащите сюда портал, чтобы убрать его из зоны, или зону, чтобы вернуть её на верхний уровень."
   }
  }
 },
 "cn": {
  "TYPES": {
   "RegionBehavior": {
    "magic-way.portale": "Magic Way – 传送门"
   },
   "HINTS": {
    "RegionBehavior": {
     "magic-way.portale": "将进入该区域的指示物传送到到达区域，也可以位于其他场景。通过 Magic Way 面板管理。"
    }
   }
  },
  "MAGICWAY": {
   "Modalita": {
    "libero": "自由",
    "controllato": "开启 / 关闭",
    "comando": "由主持人下令"
   },
   "Passano": {
    "giocatori": "仅玩家",
    "png": "仅主持人的怪物与 NPC",
    "tutti": "玩家、怪物与 NPC"
   },
   "Impostazioni": {
    "notifiche": {
     "nome": "每次传送都通知主持人",
     "hint": "向主持人显示谁被传送、经过哪个传送门以及前往哪个场景。"
    },
    "effetto": {
     "nome": "消失与出现特效",
     "hint": "传送门启动时出现魔法闪光：指示物在出发时淡出，在到达时淡入。所有人都能看到。"
    },
    "coloreEffetto": {
     "nome": "魔法闪光颜色",
     "hint": "传送门启动时显示的光环与光芒的颜色。"
    },
    "dissolvenza": {
     "nome": "切换场景时淡入淡出",
     "hint": "玩家以淡入淡出的方式被带到到达场景。"
    },
    "suono": {
     "nome": "传送音效",
     "hint": "每次传送时为所有人播放的音频文件。留空则无声音。"
    },
    "segueMaster": {
     "nome": "主持人跟随队伍",
     "hint": "下令传送到其他场景后，你的视角也会切换到到达场景。个人设置。"
    },
    "lingua": {
     "nome": "Magic Way 的语言（仅本模块）",
     "hint": "只更改 Magic Way 的文字：Foundry 和其他模块的语言保持不变。适用于 Magic Way 没有自动使用正确语言的情况。“自动”跟随 Foundry 的语言。更改后页面会重新加载。个人设置。",
     "auto": "自动（Foundry 的语言）"
    }
   },
   "Tasto": {
    "pannello": "打开 Magic Way 面板"
   },
   "Avvisi": {
    "serveMaster": "Magic Way：需要有主持人在线才能完成传送。",
    "senzaArrivo": "Magic Way：传送门“{nome}”没有有效的到达区域。",
    "fatto": "Magic Way：{chi} → “{portale}” → {scena}",
    "creato": "Magic Way：已创建传送门“{nome}”（{da} → {a}）。",
    "nessunoPresente": "Magic Way：传送门“{nome}”的区域内没有可传送的人。",
    "nascosta": "区域「{nome}」已被设为“隐藏”：在 Foundry 14 中这会关闭传送门。取消勾选即可让它生效（玩家本来就看不到 Magic Way 的区域）。",
    "soloMaster": "Magic Way：只有主持人可以使用传送门面板。",
    "nonTrovato": "Magic Way：未找到传送门“{nome}”。",
    "errore": "Magic Way：通过传送门“{nome}”的传送失败（详情见控制台，F12）。",
    "ritornoCreato": "Magic Way：已从“{nome}”创建返程。",
    "riparati": "Magic Way：已修复连接 {n} 个，已重建区域 {z} 个。",
    "tuttoAPosto": "Magic Way：所有连接均正常。",
    "mancanti": "Magic Way：{n} 个传送门没有到达区域。需要导入的地图：{scene}。"
   },
   "Cattura": {
    "esc": "Esc 或右键 = 取消",
    "ingresso": "在地图上拖动以绘制【入口】区域（单击 = 一格）。",
    "arrivo": "打开到达场景（或留在本场景），拖动以绘制【到达】区域。",
    "ridisegna": "打开正确的场景并拖动，以重新绘制区域“{nome}”。"
   },
   "Portale": {
    "nomePredefinito": "传送门",
    "arrivo": "到达",
    "ritorno": "返程"
   },
   "Pannello": {
    "titolo": "Magic Way – 传送门面板",
    "pulsante": "Magic Way – 传送门面板",
    "nuovo": "新建传送门",
    "apriTutti": "全部开启",
    "apriTuttiHint": "开启所有“开启 / 关闭”模式的传送门（仅限列表中显示的）。",
    "chiudiTutti": "全部关闭",
    "chiudiTuttiHint": "关闭所有“开启 / 关闭”模式的传送门（仅限列表中显示的）。",
    "soloScena": "仅当前场景",
    "vuoto": "还没有传送门。点击“新建传送门”来创建一个。",
    "qui": "你正在查看此场景",
    "attiva": "对玩家激活",
    "passanoHint": "谁会被传送：仅玩家指示物、仅主持人操控的怪物与 NPC，或所有人。",
    "teletrasporta": "立即传送",
    "configura": "区域配置",
    "elimina": "删除连接",
    "cerca": "搜索传送门或地图…",
    "nessunRisultato": "没有符合搜索的传送门。",
    "ingresso": "入口",
    "arrivo": "到达",
    "soloArrivo": "仅到达：无法从这里出发。",
    "creaRitorno": "创建返程",
    "creaRitornoHint": "把这个区域也变成通往另一端的传送门。",
    "trascina": "从这里拖到左侧的分组上，即可把传送门放进去",
    "vai": "在地图上显示此区域",
    "ridisegna": "重新绘制此区域（在地图上拖动，也可以在其他场景）",
    "nomeHint": "此区域的名称：自行填写",
    "ripara": "修复连接",
    "riparaHint": "从其他世界导入地图或冒险后使用：根据代码找到到达区域、修复连接并重建区域分组。启动时和每次导入后也会自动运行。",
    "arrivoMancante": "未找到到达区域“{nome}”：请同时导入地图“{scena}”，然后点击“修复连接”。",
    "arrivoMancanteGenerico": "此传送门没有到达区域：请重新绘制或删除连接。"
   },
   "Stato": {
    "disattivato": "已停用",
    "sempreAperto": "始终开启",
    "aperto": "开启",
    "chiuso": "关闭",
    "attesa": "等待你的命令"
   },
   "Creazione": {
    "titolo": "新建传送门",
    "nome": "入口名称",
    "nomeEsempio": "例如：高塔的魔法阵",
    "modalita": "模式",
    "passano": "谁可以通过",
    "ritorno": "同时创建返程",
    "spiegazione": "点击“下一步”后，在地图上拖动以绘制入口区域（大小随意，对齐网格；单击则只取一格），然后打开到达场景（或留在本场景），用同样方式绘制到达区域。玩家看不到这些区域：只有在“区域”图层启用时你才会看到它们的颜色。",
    "avanti": "下一步：绘制入口",
    "annulla": "取消",
    "passo1": "第 1 步，共 2 步 – 入口",
    "passo2": "第 2 步，共 2 步 – 到达",
    "ingressoFatto": "入口已设置在场景",
    "nomeArrivo": "到达名称",
    "nomeArrivoEsempio": "例如：地穴的魔法阵",
    "zona": "区域分组"
   },
   "Elimina": {
    "titolo": "删除连接",
    "domanda": "删除连接 {nome} 及其区域？"
   },
   "Comune": {
    "si": "是",
    "no": "否"
   },
   "Comportamento": {
    "FIELDS": {
     "destinazione": {
      "label": "到达区域",
      "hint": "指示物出现的区域（拖到这里或粘贴其 UUID）。可以位于其他场景。"
     },
     "modalita": {
      "label": "模式",
      "hint": "自由：进入即通过。开启 / 关闭：仅在主持人开启时通过。由主持人下令：仅在主持人点击“立即传送”时通过。"
     },
     "aperto": {
      "label": "开启",
      "hint": "仅用于“开启 / 关闭”模式。"
     },
     "passano": {
      "label": "谁通过",
      "hint": "仅玩家指示物、仅主持人操控的怪物与 NPC，或所有人。"
     }
    }
   },
   "Zone": {
    "titolo": "区域分组",
    "tutti": "全部",
    "nuova": "新建分组",
    "nome": "分组名称",
    "salva": "保存",
    "modifica": "编辑分组",
    "colore": "颜色",
    "elimina": "删除分组",
    "eliminaDomanda": "删除分组“{nome}”？其中的传送门和子分组会移到上级分组（或不再属于任何分组）。",
    "nessuna": "— 无分组 —",
    "trascina": "点击筛选（包括子分组）。把传送门拖到这里即可放入此分组；把另一个分组拖到这里则成为它的子分组。",
    "sottozona": "新建子分组（在此分组内）",
    "dentro": "所属分组",
    "inCima": "— 顶层（无上级分组） —",
    "bloccate": "分组移动已锁定：点击解锁。传送门随时都可以拖入分组。",
    "sbloccate": "分组移动已解锁：把一个分组拖到另一个分组上即可移动。点击锁定。",
    "trascinaTutti": "显示所有传送门。把传送门拖到这里可移出分组；把分组拖到这里则回到顶层。"
   }
  }
 },
 "ja": {
  "TYPES": {
   "RegionBehavior": {
    "magic-way.portale": "Magic Way – ポータル"
   },
   "HINTS": {
    "RegionBehavior": {
     "magic-way.portale": "リージョンに入ったトークンを到着エリアへテレポートします。別のシーンでも可能です。Magic Way パネルで管理します。"
    }
   }
  },
  "MAGICWAY": {
   "Modalita": {
    "libero": "自由",
    "controllato": "開 / 閉",
    "comando": "GM の指示で"
   },
   "Passano": {
    "giocatori": "プレイヤーのみ",
    "png": "GM のモンスターと NPC のみ",
    "tutti": "プレイヤー、モンスター、NPC"
   },
   "Impostazioni": {
    "notifiche": {
     "nome": "テレポートのたびに GM に通知",
     "hint": "誰が、どのポータルを通って、どのシーンへテレポートしたかを GM に表示します。"
    },
    "effetto": {
     "nome": "消失と出現のエフェクト",
     "hint": "ポータルが起動すると魔法の閃光が現れ、トークンは出発時にフェードアウトし、到着時にフェードインします。全員に見えます。"
    },
    "coloreEffetto": {
     "nome": "魔法の閃光の色",
     "hint": "ポータル起動時に表示されるリングと輝きの色です。"
    },
    "dissolvenza": {
     "nome": "シーン切り替え時のフェード",
     "hint": "プレイヤーはフェードで到着シーンへ移動します。"
    },
    "suono": {
     "nome": "テレポート音",
     "hint": "テレポートのたびに全員に再生される音声ファイルです。空欄なら音は鳴りません。"
    },
    "segueMaster": {
     "nome": "GM がパーティーを追う",
     "hint": "指示したテレポートで別シーンへ移動すると、あなたの表示も到着シーンへ切り替わります。個人設定です。"
    },
    "lingua": {
     "nome": "Magic Way の言語（このモジュールのみ）",
     "hint": "Magic Way の文字だけを変更します。Foundry や他のモジュールの言語はそのままです。Magic Way が正しい言語を自動で使わない場合に使います。「自動」は Foundry の言語に従います。変更するとページが再読み込みされます。個人設定です。",
     "auto": "自動（Foundry の言語）"
    }
   },
   "Tasto": {
    "pannello": "Magic Way パネルを開く"
   },
   "Avvisi": {
    "serveMaster": "Magic Way：テレポートを完了するには GM の接続が必要です。",
    "senzaArrivo": "Magic Way：ポータル「{nome}」に有効な到着エリアがありません。",
    "fatto": "Magic Way：{chi} → 「{portale}」 → {scena}",
    "creato": "Magic Way：ポータル「{nome}」を作成しました（{da} → {a}）。",
    "nessunoPresente": "Magic Way：ポータル「{nome}」のエリアにテレポートできる者がいません。",
    "nascosta": "エリア「{nome}」が「非表示」に設定されました。Foundry 14 ではこれによりポータルが停止します。チェックを外すと動作します（Magic Way のエリアはもともとプレイヤーには見えません）。",
    "soloMaster": "Magic Way：ポータルパネルを使えるのは GM だけです。",
    "nonTrovato": "Magic Way：ポータル「{nome}」が見つかりません。",
    "errore": "Magic Way：ポータル「{nome}」でのテレポートに失敗しました（詳細はコンソール、F12）。",
    "ritornoCreato": "Magic Way：「{nome}」からの帰り道を作成しました。",
    "riparati": "Magic Way：修復したリンク {n} 件、再作成したゾーン {z} 件。",
    "tuttoAPosto": "Magic Way：すべてのリンクは正常です。",
    "mancanti": "Magic Way：到着先のないポータルが {n} 件あります。インポートが必要なマップ：{scene}。"
   },
   "Cattura": {
    "esc": "Esc または右クリック = キャンセル",
    "ingresso": "マップ上をドラッグして【入口】エリアを描きます（クリック1回 = 1マス）。",
    "arrivo": "到着シーンを開き（このシーンのままでも可）、ドラッグして【到着】エリアを描きます。",
    "ridisegna": "正しいシーンを開いてドラッグし、エリア「{nome}」を描き直します。"
   },
   "Portale": {
    "nomePredefinito": "ポータル",
    "arrivo": "到着",
    "ritorno": "帰り道"
   },
   "Pannello": {
    "titolo": "Magic Way – ポータルパネル",
    "pulsante": "Magic Way – ポータルパネル",
    "nuovo": "新しいポータル",
    "apriTutti": "すべて開く",
    "apriTuttiHint": "「開 / 閉」モードのポータルをすべて開きます（一覧に表示中のもののみ）。",
    "chiudiTutti": "すべて閉じる",
    "chiudiTuttiHint": "「開 / 閉」モードのポータルをすべて閉じます（一覧に表示中のもののみ）。",
    "soloScena": "このシーンのみ",
    "vuoto": "まだポータルがありません。「新しいポータル」を押して作成してください。",
    "qui": "表示中",
    "attiva": "プレイヤーに表示中",
    "passanoHint": "テレポート対象：プレイヤーのトークンのみ、GM が操作するモンスターと NPC のみ、または全員。",
    "teletrasporta": "今すぐテレポート",
    "configura": "リージョンの設定",
    "elimina": "リンクを削除",
    "cerca": "ポータルまたはマップを検索…",
    "nessunRisultato": "検索に一致するポータルはありません。",
    "ingresso": "入口",
    "arrivo": "到着",
    "soloArrivo": "到着専用：ここからは出発できません。",
    "creaRitorno": "帰り道を作成",
    "creaRitornoHint": "このエリアを、もう一方へ戻るポータルにもします。",
    "trascina": "ここから左のゾーンへドラッグすると、ポータルがそのゾーンに入ります",
    "vai": "このエリアをマップに表示",
    "ridisegna": "このエリアを描き直す（マップ上でドラッグ。別のシーンでも可）",
    "nomeHint": "このエリアの名前：自由に入力",
    "ripara": "リンクを修復",
    "riparaHint": "別のワールドからマップや冒険をインポートした後に使います。コードで到着エリアを探し、リンクを修復し、ゾーンを再作成します。起動時とインポートのたびにも自動で実行されます。",
    "arrivoMancante": "到着「{nome}」が見つかりません。マップ「{scena}」もインポートして「リンクを修復」を押してください。",
    "arrivoMancanteGenerico": "このポータルには到着エリアがありません。描き直すかリンクを削除してください。"
   },
   "Stato": {
    "disattivato": "無効",
    "sempreAperto": "常に開いている",
    "aperto": "開",
    "chiuso": "閉",
    "attesa": "指示待ち"
   },
   "Creazione": {
    "titolo": "新しいポータル",
    "nome": "入口の名前",
    "nomeEsempio": "例：塔の魔法陣",
    "modalita": "モード",
    "passano": "通過できる者",
    "ritorno": "帰り道も作成",
    "spiegazione": "「次へ」の後、マップ上をドラッグして入口エリアを描きます（大きさは自由、グリッドに合わせます。クリックだけなら1マス）。次に到着シーンを開き（このシーンのままでも可）、同じように到着エリアを描きます。エリアはプレイヤーには見えません。リージョンレイヤーが有効なときだけ、あなたには色付きで表示されます。",
    "avanti": "次へ：入口を描く",
    "annulla": "キャンセル",
    "passo1": "ステップ 1/2 – 入口",
    "passo2": "ステップ 2/2 – 到着",
    "ingressoFatto": "入口を設定したシーン：",
    "nomeArrivo": "到着の名前",
    "nomeArrivoEsempio": "例：地下墓所の魔法陣",
    "zona": "ゾーン"
   },
   "Elimina": {
    "titolo": "リンクを削除",
    "domanda": "リンク {nome} とそのエリアを削除しますか？"
   },
   "Comune": {
    "si": "はい",
    "no": "いいえ"
   },
   "Comportamento": {
    "FIELDS": {
     "destinazione": {
      "label": "到着エリア",
      "hint": "トークンが現れるリージョンです（ここへドラッグするか UUID を貼り付け）。別のシーンでも構いません。"
     },
     "modalita": {
      "label": "モード",
      "hint": "自由：入るとすぐ通過。開 / 閉：GM が開いている間だけ通過。GM の指示で：GM が「今すぐテレポート」を押したときだけ通過。"
     },
     "aperto": {
      "label": "開",
      "hint": "「開 / 閉」モードでのみ使用します。"
     },
     "passano": {
      "label": "通過する者",
      "hint": "プレイヤーのトークンのみ、GM が操作するモンスターと NPC のみ、または全員。"
     }
    }
   },
   "Zone": {
    "titolo": "ゾーン",
    "tutti": "すべて",
    "nuova": "新しいゾーン",
    "nome": "ゾーン名",
    "salva": "保存",
    "modifica": "ゾーンを編集",
    "colore": "色",
    "elimina": "ゾーンを削除",
    "eliminaDomanda": "ゾーン「{nome}」を削除しますか？中のポータルとサブゾーンは親ゾーンへ移ります（親がなければゾーンなしになります）。",
    "nessuna": "— ゾーンなし —",
    "trascina": "クリックで絞り込み（サブゾーンも含む）。ポータルをここへドラッグするとこのゾーンに入り、別のゾーンをドラッグするとそのサブゾーンになります。",
    "sottozona": "新しいサブゾーン（このゾーンの中）",
    "dentro": "親ゾーン",
    "inCima": "— 最上位（親ゾーンなし） —",
    "bloccate": "ゾーンの移動はロック中です。クリックでロックを解除します。ポータルはいつでもゾーンへドラッグできます。",
    "sbloccate": "ゾーンの移動はロック解除中です。ゾーンを別のゾーンにドラッグすると移動できます。クリックでロックします。",
    "trascinaTutti": "すべてのポータルを表示します。ポータルをここへドラッグするとゾーンから外れ、ゾーンをドラッグすると最上位に戻ります。"
   }
  }
 },
 "ko": {
  "TYPES": {
   "RegionBehavior": {
    "magic-way.portale": "Magic Way – 포털"
   },
   "HINTS": {
    "RegionBehavior": {
     "magic-way.portale": "지역에 들어온 토큰을 도착 영역으로 순간이동시킵니다. 다른 장면이어도 됩니다. Magic Way 패널에서 관리합니다."
    }
   }
  },
  "MAGICWAY": {
   "Modalita": {
    "libero": "자유",
    "controllato": "열림 / 닫힘",
    "comando": "GM 명령 시"
   },
   "Passano": {
    "giocatori": "플레이어만",
    "png": "GM의 몬스터와 NPC만",
    "tutti": "플레이어, 몬스터, NPC"
   },
   "Impostazioni": {
    "notifiche": {
     "nome": "순간이동마다 GM에게 알림",
     "hint": "누가 어떤 포털을 통해 어느 장면으로 순간이동했는지 GM에게 보여줍니다."
    },
    "effetto": {
     "nome": "사라짐과 나타남 효과",
     "hint": "포털이 작동하면 마법의 섬광이 나타나고, 토큰은 출발할 때 사라지고 도착할 때 다시 나타납니다. 모두가 볼 수 있습니다."
    },
    "coloreEffetto": {
     "nome": "마법 섬광 색상",
     "hint": "포털이 작동할 때 나타나는 고리와 빛의 색상입니다."
    },
    "dissolvenza": {
     "nome": "장면 전환 시 페이드",
     "hint": "플레이어는 페이드 효과와 함께 도착 장면으로 이동합니다."
    },
    "suono": {
     "nome": "순간이동 소리",
     "hint": "순간이동할 때마다 모두에게 재생되는 오디오 파일입니다. 비워 두면 소리가 나지 않습니다."
    },
    "segueMaster": {
     "nome": "GM이 파티를 따라감",
     "hint": "명령한 순간이동으로 다른 장면에 가면 내 화면도 도착 장면으로 바뀝니다. 개인 설정입니다."
    },
    "lingua": {
     "nome": "Magic Way 언어 (이 모듈만)",
     "hint": "Magic Way의 문구만 바꿉니다. Foundry와 다른 모듈의 언어는 그대로입니다. Magic Way가 올바른 언어를 자동으로 사용하지 않을 때 쓰세요. '자동'은 Foundry 언어를 따릅니다. 변경하면 페이지가 다시 로드됩니다. 개인 설정입니다.",
     "auto": "자동 (Foundry 언어)"
    }
   },
   "Tasto": {
    "pannello": "Magic Way 패널 열기"
   },
   "Avvisi": {
    "serveMaster": "Magic Way: 순간이동을 완료하려면 GM이 접속해 있어야 합니다.",
    "senzaArrivo": "Magic Way: 포털 '{nome}'에 유효한 도착 영역이 없습니다.",
    "fatto": "Magic Way: {chi} → '{portale}' → {scena}",
    "creato": "Magic Way: 포털 '{nome}'을(를) 만들었습니다 ({da} → {a}).",
    "nessunoPresente": "Magic Way: 포털 '{nome}' 영역에 순간이동할 대상이 없습니다.",
    "nascosta": "영역 «{nome}»이(가) «숨김»으로 설정되었습니다. Foundry 14에서는 이 설정이 포털을 끕니다. 체크를 해제하면 작동합니다 (플레이어는 어차피 Magic Way 영역을 볼 수 없습니다).",
    "soloMaster": "Magic Way: 포털 패널은 GM만 사용할 수 있습니다.",
    "nonTrovato": "Magic Way: 포털 '{nome}'을(를) 찾을 수 없습니다.",
    "errore": "Magic Way: 포털 '{nome}'을(를) 통한 순간이동에 실패했습니다 (자세한 내용은 콘솔, F12).",
    "ritornoCreato": "Magic Way: '{nome}'에서 돌아가는 길을 만들었습니다.",
    "riparati": "Magic Way: 복구한 연결 {n}개, 다시 만든 구역 {z}개.",
    "tuttoAPosto": "Magic Way: 모든 연결이 정상입니다.",
    "mancanti": "Magic Way: 도착지가 없는 포털 {n}개. 가져와야 할 지도: {scene}."
   },
   "Cattura": {
    "esc": "Esc 또는 오른쪽 클릭 = 취소",
    "ingresso": "지도에서 드래그하여 [입구] 영역을 그리세요 (한 번 클릭 = 한 칸).",
    "arrivo": "도착 장면을 열고 (또는 이 장면에 머물고) 드래그하여 [도착] 영역을 그리세요.",
    "ridisegna": "올바른 장면을 열고 드래그하여 영역 '{nome}'을(를) 다시 그리세요."
   },
   "Portale": {
    "nomePredefinito": "포털",
    "arrivo": "도착",
    "ritorno": "귀환"
   },
   "Pannello": {
    "titolo": "Magic Way – 포털 패널",
    "pulsante": "Magic Way – 포털 패널",
    "nuovo": "새 포털",
    "apriTutti": "모두 열기",
    "apriTuttiHint": "'열림 / 닫힘' 모드의 포털을 모두 엽니다 (목록에 보이는 것만).",
    "chiudiTutti": "모두 닫기",
    "chiudiTuttiHint": "'열림 / 닫힘' 모드의 포털을 모두 닫습니다 (목록에 보이는 것만).",
    "soloScena": "이 장면만",
    "vuoto": "아직 포털이 없습니다. '새 포털'을 눌러 만드세요.",
    "qui": "보고 있는 장면",
    "attiva": "플레이어에게 활성",
    "passanoHint": "순간이동 대상: 플레이어 토큰만, GM이 조종하는 몬스터와 NPC만, 또는 모두.",
    "teletrasporta": "지금 순간이동",
    "configura": "지역 설정",
    "elimina": "연결 삭제",
    "cerca": "포털 또는 지도 검색…",
    "nessunRisultato": "검색과 일치하는 포털이 없습니다.",
    "ingresso": "입구",
    "arrivo": "도착",
    "soloArrivo": "도착 전용: 여기서는 출발할 수 없습니다.",
    "creaRitorno": "귀환 만들기",
    "creaRitornoHint": "이 영역을 다른 쪽으로 돌아가는 포털로도 만듭니다.",
    "trascina": "여기서 왼쪽 구역으로 끌어다 놓으면 포털이 그 구역에 들어갑니다",
    "vai": "지도에서 이 영역 보기",
    "ridisegna": "이 영역 다시 그리기 (지도에서 드래그, 다른 장면도 가능)",
    "nomeHint": "이 영역의 이름: 직접 입력",
    "ripara": "연결 복구",
    "riparaHint": "다른 월드에서 지도나 모험을 가져온 뒤 사용합니다. 코드로 도착 영역을 찾아 연결을 복구하고 구역을 다시 만듭니다. 시작할 때와 가져올 때마다 자동으로도 실행됩니다.",
    "arrivoMancante": "도착 '{nome}'을(를) 찾을 수 없습니다. 지도 '{scena}'도 가져온 뒤 '연결 복구'를 누르세요.",
    "arrivoMancanteGenerico": "이 포털에는 도착 영역이 없습니다. 다시 그리거나 연결을 삭제하세요."
   },
   "Stato": {
    "disattivato": "비활성",
    "sempreAperto": "항상 열림",
    "aperto": "열림",
    "chiuso": "닫힘",
    "attesa": "명령 대기 중"
   },
   "Creazione": {
    "titolo": "새 포털",
    "nome": "입구 이름",
    "nomeEsempio": "예: 탑의 마법진",
    "modalita": "모드",
    "passano": "통과할 수 있는 대상",
    "ritorno": "귀환도 만들기",
    "spiegazione": "'다음'을 누른 뒤 지도에서 드래그하여 입구 영역을 그리세요 (크기는 자유, 격자에 맞춤; 한 번 클릭하면 한 칸). 그런 다음 도착 장면을 열고 (또는 이 장면에 머물고) 같은 방법으로 도착 영역을 그리세요. 영역은 플레이어에게 보이지 않으며, 지역 레이어가 활성일 때만 당신에게 색으로 보입니다.",
    "avanti": "다음: 입구 그리기",
    "annulla": "취소",
    "passo1": "1/2단계 – 입구",
    "passo2": "2/2단계 – 도착",
    "ingressoFatto": "입구를 설정한 장면:",
    "nomeArrivo": "도착 이름",
    "nomeArrivoEsempio": "예: 지하묘지의 마법진",
    "zona": "구역"
   },
   "Elimina": {
    "titolo": "연결 삭제",
    "domanda": "연결 {nome}과(와) 그 영역을 삭제할까요?"
   },
   "Comune": {
    "si": "예",
    "no": "아니요"
   },
   "Comportamento": {
    "FIELDS": {
     "destinazione": {
      "label": "도착 영역",
      "hint": "토큰이 나타나는 지역입니다 (여기로 끌어오거나 UUID를 붙여넣기). 다른 장면이어도 됩니다."
     },
     "modalita": {
      "label": "모드",
      "hint": "자유: 들어오면 바로 통과. 열림 / 닫힘: GM이 열어 둔 동안만 통과. GM 명령 시: GM이 '지금 순간이동'을 누를 때만 통과."
     },
     "aperto": {
      "label": "열림",
      "hint": "'열림 / 닫힘' 모드에서만 사용합니다."
     },
     "passano": {
      "label": "통과 대상",
      "hint": "플레이어 토큰만, GM이 조종하는 몬스터와 NPC만, 또는 모두."
     }
    }
   },
   "Zone": {
    "titolo": "구역",
    "tutti": "전체",
    "nuova": "새 구역",
    "nome": "구역 이름",
    "salva": "저장",
    "modifica": "구역 편집",
    "colore": "색상",
    "elimina": "구역 삭제",
    "eliminaDomanda": "구역 '{nome}'을(를) 삭제할까요? 안의 포털과 하위 구역은 상위 구역으로 옮겨집니다 (없으면 구역 없음).",
    "nessuna": "— 구역 없음 —",
    "trascina": "클릭하면 필터링됩니다 (하위 구역 포함). 포털을 여기로 끌어오면 이 구역에 들어가고, 다른 구역을 끌어오면 하위 구역이 됩니다.",
    "sottozona": "새 하위 구역 (이 구역 안)",
    "dentro": "상위 구역",
    "inCima": "— 최상위 (상위 구역 없음) —",
    "bloccate": "구역 이동이 잠겨 있습니다. 클릭하면 잠금이 풀립니다. 포털은 언제든 구역으로 끌어다 놓을 수 있습니다.",
    "sbloccate": "구역 이동이 풀려 있습니다. 구역을 다른 구역 위로 끌어 옮길 수 있습니다. 클릭하면 잠깁니다.",
    "trascinaTutti": "모든 포털을 보여줍니다. 포털을 여기로 끌어오면 구역에서 빠지고, 구역을 끌어오면 최상위로 돌아갑니다."
   }
  }
 }
};
