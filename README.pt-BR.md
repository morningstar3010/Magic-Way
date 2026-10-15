<p align="center"><img src="assets/logo.webp" alt="Magic Way" width="320"></p>

<h3 align="center">Portais de teletransporte entre mapas para Foundry VTT 14</h3>

<p align="center">Áreas invisíveis que você desenha arrastando · três modos de portal · um painel para o mestre · qualquer sistema de jogo</p>

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
  🌐 <a href="README.md">English</a> · <a href="README.it.md">Italiano</a> · <a href="README.de.md">Deutsch</a> · <a href="README.es.md">Español</a> · <a href="README.fr.md">Français</a> · <a href="README.pl.md">Polski</a> · <b>Português (Brasil)</b> · <a href="README.ru.md">Русский</a> · <a href="README.cn.md">中文（简体）</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a>
</p>

---

O **Magic Way** leva tokens de um lugar para outro: dentro do mesmo mapa ou para outro mapa do mesmo mundo. Você desenha uma **entrada** e uma **chegada** no mapa, e todo token que pisar na entrada aparece na chegada, com um clarão mágico. Os jogadores nunca veem as áreas. Você controla tudo em um único painel.

## Sumário

1. [Instalação](#install)
2. [Seu primeiro portal em um minuto](#quick-start)
3. [Abrir o painel](#open-panel)
4. [O painel num relance](#panel)
5. [Criar um portal, passo a passo](#create)
6. [Usar e gerenciar seus portais](#manage)
7. [Zonas: deixe seus portais organizados](#zones)
8. [Busca e filtros](#filters)
9. [Levar mapas para outro mundo](#export)
10. [Configurações e idioma](#settings)
11. [Dúvidas e problemas](#faq)
12. [Macros](#macros)

<a name="install"></a>
## 1. Instalação

1. No Foundry, abra **Módulos Complementares** e clique em **Instalar Módulo**.
2. Lá embaixo, no campo **URL do Manifesto**, cole este endereço e clique em **Instalar**:

```
https://github.com/morningstar3010/magic-way/releases/latest/download/module.json
```

3. Abra seu mundo, vá em **Gerenciar Módulos**, marque **Magic Way** e salve.

<a name="quick-start"></a>
## 2. Seu primeiro portal em um minuto

- [ ] Clique no botão **Magic Way – Painel de portais** na barra de ferramentas à esquerda.
- [ ] Clique em **Novo portal** e escreva um nome para a entrada e outro para a chegada.
- [ ] Clique em **Próximo: desenhe a entrada** e arraste um retângulo no mapa.
- [ ] Fique nesta cena ou abra outra, e arraste um retângulo para a chegada.
- [ ] Pronto! Mova um token de jogador para a entrada e veja ele viajar.

> [!TIP]
> A chegada pode ficar **na mesma cena** da entrada ou **em qualquer outra cena do mesmo mundo**. Enquanto desenha, você pode trocar de cena à vontade.

<a name="open-panel"></a>
## 3. Abrir o painel

<table><tr>
<td width="240"><img src="docs/images/toolbar-button.webp" alt="Botão do painel na barra de ferramentas" width="220"></td>
<td>

O painel é só para o mestre. Você pode abri-lo de três jeitos:

- com o **botão de porta** na barra de ferramentas à esquerda (no grupo Tokens ou no grupo Regiões);
- com uma tecla que você escolher, definida em **Configurar Controles**;
- por uma macro: `game.modules.get("magic-way").api.pannello()`.

</td>
</tr></table>

<a name="panel"></a>
## 4. O painel num relance

![O painel do Magic Way](docs/images/panel.webp)

| Parte | O que você encontra |
|---|---|
| **Zonas** (coluna da esquerda) | Seus grupos de portais, como pastas. **Todos** mostra todos os portais. |
| **Barra superior** | **Novo portal**, a caixa de **busca**, **Abrir todos**, **Fechar todos**, **Somente esta cena**, **Reparar ligações**. |
| **Ligações** (centro) | Cada ligação é um cartão: a **entrada** à esquerda, a **chegada** à direita. Uma seta dupla ⟷ quer dizer que dá para voltar também. |

Em cada área você vê o nome do mapa dela. **você está vendo esta** quer dizer que ela está na cena que você está olhando. **ativa para os jogadores** quer dizer que ela está na cena onde seus jogadores estão.

<a name="create"></a>
## 5. Criar um portal, passo a passo

### Passo 1 – Preencha o formulário

Clique em **Novo portal** no topo do painel.

![O formulário Novo portal](docs/images/new-portal.webp)

| Campo | O que significa |
|---|---|
| **Nome da entrada** | O nome da área onde os tokens pisam (por exemplo *Círculo mágico da torre*). |
| **Nome da chegada** | O nome da área onde os tokens aparecem (por exemplo *Círculo mágico da cripta*). |
| **Modo** | Quando o portal funciona: **Livre**, **Aberto / fechado** ou **Por comando do mestre**. Veja abaixo. |
| **Quem pode passar** | Quais tokens viajam: jogadores, monstros e NPCs do mestre, ou todos. |
| **Zona** | O grupo onde o portal fica. Você pode mudar depois. |
| **Criar também o retorno** | Marque para a chegada funcionar também como portal de volta para a entrada, com seu próprio modo. |

<details>
<summary><b>Os três modos</b> (clique para abrir)</summary>

| Modo | O que acontece quando um token pisa na entrada |
|---|---|
| **Livre** | Ele é teletransportado na hora. O portal está sempre aberto. |
| **Aberto / fechado** | Ele só viaja enquanto você mantém o portal **Aberto**. Quando está **Fechado**, os tokens passam por cima e nada acontece. Você abre e fecha o portal no painel com um clique. |
| **Por comando do mestre** | Nada acontece sozinho. Quando estiver pronto, você clica em **Teletransportar agora** e todos dentro da área viajam juntos. |

</details>

<details>
<summary><b>Quem pode passar</b> (clique para abrir)</summary>

![Quem pode passar](docs/images/who-can-pass.webp)

- **Somente jogadores**: só tokens que pertencem a um jogador. Seus monstros podem andar por cima do portal sem sumir.
- **Somente monstros e NPCs do mestre**: só tokens que não pertencem a nenhum jogador.
- **Jogadores, monstros e NPCs**: todo mundo.

Essa escolha também vale para **Teletransportar agora**.

</details>

<details>
<summary><b>O retorno</b> (clique para abrir)</summary>

![Criar também o retorno](docs/images/return.webp)

Com o retorno marcado, a chegada também vira um portal de volta para a entrada. O menu ao lado da caixa define o modo do retorno, que pode ser diferente do da ida. Esqueceu de marcar? Sem problema: o cartão da chegada tem um botão **Criar o retorno**.

</details>

### Passo 2 – Desenhe a entrada

Clique em **Próximo: desenhe a entrada** e depois **arraste no mapa**. O retângulo se alinha à grade e pode ser do tamanho que você quiser. A barra no topo mostra o tamanho em quadrados e em metros. Um clique simples pega só um quadrado. **Esc** ou **clique direito** cancela.

![Desenhando a entrada](docs/images/draw-entrance.webp)

### Passo 3 – Desenhe a chegada

Agora **fique nesta cena ou abra outra cena do mesmo mundo** e arraste a área de chegada do mesmo jeito.

![Desenhando a chegada](docs/images/draw-arrival.webp)

### Passo 4 – Pronto!

<table><tr>
<td width="320"><img src="docs/images/areas-on-map.webp" alt="Entrada e chegada no mapa" width="300"></td>
<td>

A **entrada é roxa**, a **chegada é verde**. Você só as vê quando a camada **Regiões** está ativa. **Os jogadores nunca as veem.**

Você também pode mudar a forma delas com as ferramentas normais de Região do Foundry, por exemplo para dar a uma área o formato de um polígono.

</td>
</tr></table>

> [!WARNING]
> Na configuração da região, **não marque “Oculta” (Hidden)**. As áreas já são invisíveis para os jogadores, e no Foundry 14 “Oculta” desliga tudo dentro da área, então o portal para de funcionar. Se você marcar por engano, o Magic Way avisa e o painel mostra o portal como **desativado**.

<a name="manage"></a>
## 6. Usar e gerenciar seus portais

Toda área de onde uma viagem começa tem seus próprios controles:

- o campo **nome**: clique nele e digite para renomear a área;
- o menu **modo** e, no modo Aberto / fechado, o botão **Aberto / Fechado**;
- o menu **quem pode passar**;
- o número de tokens **dentro da área** (passe o mouse por cima para ver os nomes).

Embaixo de cada área tem uma fileira de botões:

![Botões da área](docs/images/area-buttons.webp)

| Botão | O que faz |
|---|---|
| **Teletransportar agora** | Manda todos dentro da área para a chegada, na hora, em qualquer modo. Ele acende quando tem alguém dentro. |
| 👁 **olho** | **Mostrar esta área no mapa**: abre a cena dela, ativa a camada de Regiões e aponta para a área. |
| ▢ **quadrado** | **Redesenhar esta área**: arraste um novo retângulo, até em outra cena. |
| ⚙ **engrenagem** | **Configuração da região**: a janela normal da região no Foundry. |

Uma chegada sem caminho de volta mostra **Criar o retorno**: um clique e dá para viajar nos dois sentidos.

### Excluir uma ligação

Clique na **lixeira vermelha** no canto superior direito do cartão e confirme.

![Excluir a ligação](docs/images/delete-link.webp)

A ligação some **junto com as áreas dela no mapa**: você não precisa apagar nada à mão. Uma área só fica se outra ligação ainda usar ela, ou se tiver comportamentos adicionados por outros módulos.

<a name="zones"></a>
## 7. Zonas: deixe seus portais organizados

As zonas são como pastas: por exemplo *Torre do mago*, *Masmorra nível 1*, *Cidade*.

![Nova zona](docs/images/new-zone.webp)

- **Criar uma zona**: clique em **+** no topo da coluna Zonas. Escolha um **nome**, uma **cor** (uma das cores prontas ou qualquer cor que quiser) e, se quiser, a zona **dentro** da qual ela fica.
- **Subzonas**: zonas podem ficar dentro de outras zonas, em quantos níveis você quiser. Elas ficam sempre em **ordem alfabética**.
- **Filtro**: clique numa zona para ver só os portais dela, incluindo os das subzonas. O número ao lado conta todos.
- **Cor**: você vê no ícone de pasta e na borda dos cartões dos portais dela.
- **Passe o mouse sobre uma zona** para ver três botões: **+** cria uma subzona dentro dela, o **lápis** edita nome, cor e zona superior, a **lixeira** exclui a zona (os portais e subzonas dela sobem um nível).

**Arrastar e soltar** faz o resto:

| Arraste… | …e solte em | Resultado |
|---|---|---|
| um cartão de portal (pegue pela barra de título) | uma zona | o portal vai exatamente para essa zona, mesmo que seja uma subzona |
| um cartão de portal | **Todos** | o portal fica sem zona |
| uma zona | outra zona | ela vira subzona dessa zona |
| uma zona | **Todos** | ela volta para o nível superior |

O **cadeado** ao lado do **+** no topo da coluna de zonas bloqueia e desbloqueia mover as zonas arrastando. Quando está fechado, as zonas ficam onde estão, mas você ainda pode arrastar portais para dentro delas.

Uma zona que fica **vermelha** enquanto você arrasta quer dizer “não pode”: uma zona não pode ir para dentro de si mesma nem de uma das suas subzonas.

Você também pode escolher a zona de um portal no menu com o ícone de pasta no topo do cartão dele.

<a name="filters"></a>
## 8. Busca e filtros

- **Buscar portal ou mapa…**: digite parte do nome de um portal **ou de um mapa**. Maiúsculas e acentos não importam. Os cartões que não batem somem, e as zonas que ficam vazias também.
- <img src="docs/images/this-scene-only.webp" alt="Somente esta cena" height="22"> **Somente esta cena**: mostra só as ligações que têm uma área na cena que você está olhando. Clique de novo para ver todas.
- **Abrir todos** e **Fechar todos**: abrem ou fecham de uma vez todos os portais **Aberto / fechado** que você vê na lista.

<a name="export"></a>
## 9. Levar mapas para outro mundo

Os portais viajam **dentro dos mapas**. Exporte uma cena (para um compêndio, uma Aventura ou um arquivo JSON), importe em outro mundo ou outro servidor onde o Magic Way esteja ativo, e as áreas e os portais vão junto.

As cenas importadas ganham IDs novos, mas cada área tem seu próprio código e cada portal lembra onde fica a chegada dele. O Magic Way **repara as ligações sozinho** quando o mundo inicia e depois de cada importação. Você também pode clicar em **Reparar ligações**. Zonas que faltam são recriadas com nome, cor e zonas superiores.

Se você importar só um dos dois mapas de uma ligação, o portal mostra um **aviso vermelho** com o nome do mapa que falta. Importe ele também e a ligação se conserta sozinha. Um mapa duplicado no mesmo mundo também funciona.

![Reparar ligações](docs/images/repair-links.webp)

<a name="settings"></a>
## 10. Configurações e idioma

Abra **Configurar Definições → Magic Way**.

![Configurações do Magic Way](docs/images/settings.webp)

| Configuração | O que faz |
|---|---|
| **Idioma do Magic Way (somente este módulo)** | Escolhe o idioma só do Magic Way: o Foundry e os outros módulos continuam como estão. **Automático** segue o Foundry. Configuração pessoal; a página é recarregada. |
| **Avisar o mestre a cada teletransporte** | Uma mensagem conta para você quem viajou, por qual portal e para qual cena. |
| **Efeito de desaparecer e aparecer** | O clarão mágico: o token desaparece na partida e reaparece na chegada. Todo mundo que está vendo a cena vê. |
| **Cor do clarão mágico** | A cor do anel e do brilho. |
| **Transição suave ao trocar de cena** | Os jogadores levados para outra cena ganham uma transição suave. |
| **Som do teletransporte** | Um arquivo de áudio tocado para todos a cada viagem. Deixe vazio para não ter som. |
| **O mestre acompanha o grupo** | Depois de uma viagem por seu comando para outra cena, sua visão vai para lá também. Configuração pessoal. |

Idiomas disponíveis: English, Italiano, Deutsch, Español, Français, Polski, Português (Brasil), Русский, 中文（简体）, 日本語, 한국어.

<a name="faq"></a>
## 11. Dúvidas e problemas

<details>
<summary><b>Um token pisa na entrada e nada acontece</b></summary>

Confira estes pontos, na ordem:

1. **Modo**: um portal **Aberto / fechado** precisa estar **Aberto**; um portal **Por comando do mestre** espera o **Teletransportar agora**.
2. **Quem pode passar**: com **Somente jogadores**, seus monstros passam por cima sem viajar.
3. **Um mestre precisa estar conectado**: só o mestre pode criar e remover tokens nas cenas.
4. O painel não pode mostrar **desativado**: na configuração da região, “Oculta” precisa estar desmarcada.

</details>

<details>
<summary><b>Meus jogadores conseguem ver as áreas?</b></summary>

Não. As áreas só são visíveis para o mestre, e só na camada de Regiões.

</details>

<details>
<summary><b>O que acontece quando a chegada está em outra cena?</b></summary>

O token é recriado na cena de chegada com o mesmo ator e as mesmas configurações, e depois removido da cena de partida. Os donos dele são levados para a nova cena e a visão deles é centralizada no token. O clarão mágico espera um instante, para os jogadores terem tempo de carregar o mapa.

</details>

<details>
<summary><b>Vários tokens chegam juntos: eles ficam um em cima do outro?</b></summary>

Não. Eles ocupam os quadrados livres da área de chegada, começando pelo centro. Se não houver quadrados suficientes, eles se enfileiram em volta dela.

</details>

<details>
<summary><b>Cenas com vários níveis funcionam?</b></summary>

Sim. O token chega no nível da área de chegada.

</details>

<details>
<summary><b>Posso transformar em portal uma região que eu mesmo desenhei?</b></summary>

Sim. Na configuração da região, adicione o comportamento **Magic Way – Portal** e escolha a área de chegada dele. O painel encontra ele sozinho.

</details>

<a name="macros"></a>
## 12. Macros

<details>
<summary><b>Comandos para macros e outros módulos</b> (clique para abrir)</summary>

`"Nome"` é o nome do portal (o UUID dele também funciona).

```js
const mw = game.modules.get("magic-way").api;
mw.pannello();                       // abre o painel
mw.apri("Nome");                     // abre um portal Aberto / fechado
mw.chiudi("Nome");                   // fecha o portal
mw.alterna("Nome");                  // abre se estiver fechado, fecha se estiver aberto
mw.modalita("Nome", "comando");      // modo: "libero" (livre) | "controllato" (aberto/fechado) | "comando" (por comando)
mw.passano("Nome", "tutti");         // quem passa: "giocatori" (jogadores) | "png" (monstros e NPCs) | "tutti" (todos)
mw.teletrasporta("Nome");            // teletransporta agora todos dentro da área
mw.teletrasportaToken("Nome", canvas.tokens.controlled); // teletransporta os tokens selecionados
mw.ripara();                         // repara as ligações depois de uma importação
```

Depois de cada viagem, o módulo dispara o hook `magic-way.teletrasporto` com `{portale, destinazione, tokens}`.

</details>

---

<p align="center">Feito por <b>MorningStar</b></p>
