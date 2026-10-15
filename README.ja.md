<p align="center"><img src="assets/logo.webp" alt="Magic Way" width="320"></p>

<h3 align="center">Foundry VTT 14 用・マップ間テレポートポータル</h3>

<p align="center">ドラッグで描ける見えないエリア · 3 つのポータルモード · GM 用のパネルひとつ · どのゲームシステムでも使えます</p>

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
  🌐 <a href="README.md">English</a> · <a href="README.it.md">Italiano</a> · <a href="README.de.md">Deutsch</a> · <a href="README.es.md">Español</a> · <a href="README.fr.md">Français</a> · <a href="README.pl.md">Polski</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.ru.md">Русский</a> · <a href="README.cn.md">中文（简体）</a> · <b>日本語</b> · <a href="README.ko.md">한국어</a>
</p>

---

**Magic Way** は、トークンをある場所から別の場所へ移動させます。同じマップの中でも、同じワールドの別のマップへでも大丈夫です。マップ上に<b>入口</b>と<b>到着</b>のエリアを描くと、入口に入ったトークンはすべて、魔法の閃光とともに到着エリアに現れます。プレイヤーにはエリアは一切見えません。すべてをひとつのパネルで操作できます。

## 目次

1. [インストール](#install)
2. [1 分で最初のポータルを作る](#quick-start)
3. [パネルを開く](#open-panel)
4. [パネルの見方](#panel)
5. [ポータルの作り方（ステップごと）](#create)
6. [ポータルを使う・管理する](#manage)
7. [ゾーン：ポータルを整理する](#zones)
8. [検索と絞り込み](#filters)
9. [マップを別のワールドへ移す](#export)
10. [設定と言語](#settings)
11. [よくある質問とトラブル](#faq)
12. [マクロ](#macros)

<a name="install"></a>
## 1. インストール

1. Foundry で<b>アドオンモジュール</b>を開き、<b>モジュールをインストール</b>を押します。
2. 下にある<b>マニフェスト URL</b> 欄に次のアドレスを貼り付けて、<b>インストール</b>を押します。

```
https://github.com/morningstar3010/magic-way/releases/latest/download/module.json
```

3. ワールドを開いて<b>モジュール管理</b>に進み、<b>Magic Way</b> にチェックを入れて保存します。

<a name="quick-start"></a>
## 2. 1 分で最初のポータルを作る

- [ ] 左のツールバーにある **Magic Way – ポータルパネル** ボタンをクリックします。
- [ ] <b>新しいポータル</b>を押して、入口の名前と到着の名前を入力します。
- [ ] <b>次へ：入口を描く</b>を押して、マップ上で四角形をドラッグします。
- [ ] このシーンのまま、または別のシーンを開いて、到着用の四角形をドラッグします。
- [ ] 完成です！プレイヤーのトークンを入口に動かして、移動する様子を見てみましょう。

> [!TIP]
> 到着エリアは、入口と<b>同じシーン</b>にも、<b>同じワールドの別のどのシーン</b>にも置けます。描いている途中で、シーンを自由に切り替えてかまいません。

<a name="open-panel"></a>
## 3. パネルを開く

<table><tr>
<td width="240"><img src="docs/images/toolbar-button.webp" alt="ツールバーのパネルボタン" width="220"></td>
<td>

パネルは GM 専用です。開き方は 3 つあります。

- 左のツールバーにある<b>ドアのボタン</b>から（トークングループまたはリージョングループの中にあります）
- <b>操作設定</b>で決めた好きなキーで
- マクロから：`game.modules.get("magic-way").api.pannello()`

</td>
</tr></table>

<a name="panel"></a>
## 4. パネルの見方

![Magic Way パネル](docs/images/panel.webp)

| 部分 | そこにあるもの |
|---|---|
| <b>ゾーン</b>（左の列） | ポータルのグループで、フォルダーのようなものです。<b>すべて</b>を選ぶと、すべてのポータルが表示されます。 |
| **上部のバー** | <b>新しいポータル</b>、<b>検索</b>欄、<b>すべて開く</b>、<b>すべて閉じる</b>、<b>このシーンのみ</b>、<b>リンクを修復</b>。 |
| <b>リンク</b>（中央） | リンクはそれぞれ 1 枚のカードです。左が<b>入口</b>、右が<b>到着</b>です。両矢印 ⟷ は、戻ることもできるという意味です。 |

各エリアには、そのマップの名前が表示されます。<b>表示中</b>は、あなたが今見ているシーンにあるという意味です。<b>プレイヤーに表示中</b>は、プレイヤーたちがいるシーンにあるという意味です。

<a name="create"></a>
## 5. ポータルの作り方（ステップごと）

### ステップ 1 – フォームに入力する

パネル上部の<b>新しいポータル</b>を押します。

![「新しいポータル」フォーム](docs/images/new-portal.webp)

| 項目 | 意味 |
|---|---|
| **入口の名前** | トークンが入るエリアの名前です（例：<i>塔の魔法陣</i>）。 |
| **到着の名前** | トークンが現れるエリアの名前です（例：<i>地下墓所の魔法陣</i>）。 |
| **モード** | ポータルがいつ働くか：<b>自由</b>、<b>開 / 閉</b>、<b>GM の指示で</b>。くわしくは下を見てください。 |
| **通過できる者** | どのトークンが移動するか：プレイヤー、GM のモンスターと NPC、または全員。 |
| **ゾーン** | ポータルを入れるグループです。あとで変更できます。 |
| **帰り道も作成** | チェックすると、到着エリアも入口へ戻るポータルとして働きます。モードは別に選べます。 |

<details>
<summary><b>3 つのモード</b>（クリックで開く）</summary>

| モード | トークンが入口に入るとどうなるか |
|---|---|
| **自由** | すぐにテレポートします。ポータルは常に開いています。 |
| **開 / 閉** | ポータルを<b>開</b>にしている間だけ移動します。<b>閉</b>のときは、トークンが上を歩いても何も起きません。パネルからワンクリックで開け閉めできます。 |
| **GM の指示で** | 自動では何も起きません。準備ができたら<b>今すぐテレポート</b>を押すと、エリアの中にいる全員が一緒に移動します。 |

</details>

<details>
<summary><b>通過できる者</b>（クリックで開く）</summary>

![通過できる者](docs/images/who-can-pass.webp)

- <b>プレイヤーのみ</b>：プレイヤーが所有するトークンだけです。あなたのモンスターは、ポータルの上を歩いても消えません。
- <b>GM のモンスターと NPC のみ</b>：どのプレイヤーも所有していないトークンだけです。
- <b>プレイヤー、モンスター、NPC</b>：全員です。

この選択は<b>今すぐテレポート</b>にも適用されます。

</details>

<details>
<summary><b>帰り道</b>（クリックで開く）</summary>

![帰り道も作成](docs/images/return.webp)

帰り道にチェックを入れると、到着エリアも入口へ戻るポータルになります。チェックボックスの横のメニューで帰り道のモードを設定でき、行きとは違うモードにもできます。チェックし忘れましたか？大丈夫です。到着のカードに<b>帰り道を作成</b>ボタンがあります。

</details>

### ステップ 2 – 入口を描く

<b>次へ：入口を描く</b>を押してから、<b>マップ上をドラッグ</b>します。四角形はグリッドに合わせられ、大きさは自由です。上のバーに、大きさがマス数とメートルで表示されます。クリック 1 回だけなら 1 マスになります。<b>Esc</b> または<b>右クリック</b>でキャンセルできます。

![入口を描く](docs/images/draw-entrance.webp)

### ステップ 3 – 到着を描く

次に、<b>このシーンのまま、または同じワールドの別のシーンを開いて</b>、同じように到着エリアをドラッグします。

![到着を描く](docs/images/draw-arrival.webp)

### ステップ 4 – 完成！

<table><tr>
<td width="320"><img src="docs/images/areas-on-map.webp" alt="マップ上の入口と到着" width="300"></td>
<td>

<b>入口は紫</b>、<b>到着は緑</b>です。<b>リージョン</b>レイヤーが有効なときだけ見えます。<b>プレイヤーには決して見えません。</b>

Foundry の通常のリージョンツールで形を変えることもできます。たとえば、エリアを多角形にできます。

</td>
</tr></table>

> [!WARNING]
> リージョンの設定では、<b>「非表示」（Hidden）にチェックを入れないでください</b>。エリアはもともとプレイヤーには見えません。さらに Foundry 14 では「非表示」にするとエリアの中のすべてが止まってしまうので、ポータルが動かなくなります。うっかりチェックしてしまった場合は Magic Way が警告し、パネルではそのポータルが<b>無効</b>と表示されます。

<a name="manage"></a>
## 6. ポータルを使う・管理する

移動が始まるエリアには、それぞれ専用の操作があります。

- <b>名前</b>欄：クリックして入力すると、エリアの名前を変えられます。
- <b>モード</b>メニューと、開 / 閉モードのときの<b>開 / 閉</b>スイッチ
- <b>通過できる者</b>メニュー
- <b>エリアの中</b>にいるトークンの数（マウスを乗せると名前が見えます）

各エリアの下には、ボタンが一列に並んでいます。

![エリアのボタン](docs/images/area-buttons.webp)

| ボタン | 何をするか |
|---|---|
| **今すぐテレポート** | モードに関係なく、エリアの中の全員をすぐに到着へ送ります。誰かが中にいると光ります。 |
| 👁 **目** | <b>このエリアをマップに表示</b>：そのシーンを開き、リージョンレイヤーに切り替えて、エリアを指し示します。 |
| ▢ **四角** | <b>このエリアを描き直す</b>：新しい四角形をドラッグします。別のシーンでもかまいません。 |
| ⚙ **歯車** | <b>リージョンの設定</b>：Foundry の通常のリージョンのウィンドウです。 |

帰り道のない到着には<b>帰り道を作成</b>が表示されます。ワンクリックで行き来できるようになります。

### リンクを削除する

カード右上の<b>赤いゴミ箱</b>を押して、確認します。

![リンクを削除](docs/images/delete-link.webp)

リンクは<b>マップ上のエリアと一緒に</b>消えます。手で何かを削除する必要はありません。エリアが残るのは、別のリンクがまだそのエリアを使っている場合か、他のモジュールが追加したビヘイビアがある場合だけです。

<a name="zones"></a>
## 7. ゾーン：ポータルを整理する

ゾーンはフォルダーのようなものです。たとえば <i>魔法使いの塔</i>、<i>ダンジョン 1 階</i>、<i>街</i> などです。

![新しいゾーン](docs/images/new-zone.webp)

- <b>ゾーンを作る</b>：ゾーン列の上にある **+** を押します。<b>名前</b>と<b>色</b>（用意された色か、好きな色）を選び、必要なら、どのゾーンの<b>中</b>に入れるかも選びます。
- <b>サブゾーン</b>：ゾーンは他のゾーンの中に、いくらでも深く入れられます。いつも<b>名前順</b>に並びます。
- <b>絞り込み</b>：ゾーンをクリックすると、そのゾーンのポータルだけが表示されます。サブゾーンのポータルも含まれます。横の数字は、それらすべての数です。
- <b>色</b>：フォルダーのアイコンと、そのゾーンのポータルのカードの縁に表示されます。
- <b>ゾーンにマウスを乗せる</b>と、3 つのボタンが出てきます。<b>+</b> はその中にサブゾーンを作り、<b>鉛筆</b>は名前・色・親ゾーンを編集し、<b>ゴミ箱</b>はゾーンを削除します（中のポータルとサブゾーンは 1 つ上の階層に移ります）。

あとは<b>ドラッグ＆ドロップ</b>でできます。

| ドラッグするもの… | …ドロップする先 | 結果 |
|---|---|---|
| ポータルのカード（タイトルバーをつかみます） | ゾーン | ポータルはちょうどそのゾーンに入ります。サブゾーンでも同じです |
| ポータルのカード | **すべて** | ポータルはどのゾーンにも属さなくなります |
| ゾーン | 別のゾーン | そのゾーンのサブゾーンになります |
| ゾーン | **すべて** | 最上位に戻ります |

ゾーン欄の上にある <b>+</b> の横の<b>鍵</b>で、ドラッグ＆ドロップによるゾーンの移動をロック／解除できます。ロック中はゾーンは動きませんが、ポータルはいつでもゾーンへドラッグできます。

ドラッグ中にゾーンが<b>赤く</b>なったら、「できません」という意味です。ゾーンは、自分自身の中や、自分のサブゾーンの中には入れられません。

カード上部のフォルダーアイコンのメニューから、ポータルのゾーンを選ぶこともできます。

<a name="filters"></a>
## 8. 検索と絞り込み

- <b>ポータルまたはマップを検索…</b>：ポータル<b>またはマップ</b>の名前の一部を入力します。大文字・小文字やアクセント記号は気にしなくて大丈夫です。一致しないカードは消え、空になったゾーンも消えます。
- <img src="docs/images/this-scene-only.webp" alt="このシーンのみ" height="22"> <b>このシーンのみ</b>：今見ているシーンにエリアがあるリンクだけを表示します。もう一度押すと、すべて表示されます。
- <b>すべて開く</b>と<b>すべて閉じる</b>：一覧に見えている<b>開 / 閉</b>モードのポータルを、まとめて開けたり閉じたりします。

<a name="export"></a>
## 9. マップを別のワールドへ移す

ポータルは<b>マップの中に入って</b>一緒に移動します。シーンを（コンペンディウム、アドベンチャー、JSON ファイルへ）エクスポートし、Magic Way が有効な別のワールドや別のサーバーにインポートすれば、エリアとポータルも一緒についてきます。

インポートしたシーンには新しい ID が付きますが、各エリアには独自のコードがあり、各ポータルは到着がどこにあるかを覚えています。Magic Way はワールドの起動時とインポートのたびに、<b>リンクを自動で修復</b>します。自分で<b>リンクを修復</b>を押すこともできます。なくなったゾーンは、名前・色・親ゾーンとともに作り直されます。

リンクの 2 つのマップのうち片方だけをインポートすると、ポータルに、足りないマップの名前とともに<b>赤い警告</b>が表示されます。そのマップもインポートすれば、リンクは自動で直ります。同じワールドの中で複製したマップでも動きます。

![リンクを修復](docs/images/repair-links.webp)

<a name="settings"></a>
## 10. 設定と言語

**設定を構成 → Magic Way** を開きます。

![Magic Way の設定](docs/images/settings.webp)

| 設定 | 何をするか |
|---|---|
| <b>Magic Way の言語（このモジュールのみ）</b> | Magic Way だけの言語を選びます。Foundry と他のモジュールはそのままです。<b>自動</b>は Foundry に合わせます。個人設定で、ページが再読み込みされます。 |
| **テレポートのたびに GM に通知** | 誰が、どのポータルを通って、どのシーンへ移動したかをメッセージで知らせます。 |
| **消失と出現のエフェクト** | 魔法の閃光です。トークンは出発時にフェードアウトし、到着時にフェードインします。そのシーンを見ている全員に見えます。 |
| **魔法の閃光の色** | リングと輝きの色です。 |
| **シーン切り替え時のフェード** | 別のシーンへ移されたプレイヤーには、フェードの切り替え効果がかかります。 |
| **テレポート音** | 移動のたびに全員に再生される音声ファイルです。空欄なら音は鳴りません。 |
| **GM がパーティーを追う** | 指示したテレポートで別のシーンへ移動したあと、あなたの表示もそこへ移ります。個人設定です。 |

利用できる言語：English, Italiano, Deutsch, Español, Français, Polski, Português (Brasil), Русский, 中文（简体）, 日本語, 한국어.

<a name="faq"></a>
## 11. よくある質問とトラブル

<details>
<summary><b>トークンが入口に入っても何も起きない</b></summary>

次の点を順番に確認してください。

1. <b>モード</b>：<b>開 / 閉</b>のポータルは<b>開</b>になっている必要があります。<b>GM の指示で</b>のポータルは、<b>今すぐテレポート</b>を待っています。
2. <b>通過できる者</b>：<b>プレイヤーのみ</b>の場合、あなたのモンスターは上を歩いても移動しません。
3. <b>GM が接続している必要があります</b>：シーン上のトークンを作ったり消したりできるのは GM だけです。
4. パネルに<b>無効</b>と表示されていないこと：リージョンの設定で、「非表示」（Hidden）のチェックを外しておく必要があります。

</details>

<details>
<summary><b>プレイヤーにエリアは見えますか？</b></summary>

いいえ。エリアは GM にだけ、しかもリージョンレイヤーでだけ見えます。

</details>

<details>
<summary><b>到着が別のシーンにあるとどうなりますか？</b></summary>

トークンは同じアクターと設定のまま到着シーンに作り直され、出発シーンからは削除されます。所有者は新しいシーンへ移動し、表示は自分のトークンが中心になります。魔法の閃光は少し待ってから出るので、プレイヤーにはマップを読み込む時間があります。

</details>

<details>
<summary><b>複数のトークンが一緒に着くと、重なりますか？</b></summary>

いいえ。到着エリアの空いているマスを、中央から順に使います。マスが足りない場合は、エリアのまわりに並びます。

</details>

<details>
<summary><b>複数のレベルがあるシーンでも動きますか？</b></summary>

はい。トークンは、到着エリアがあるレベルに着きます。

</details>

<details>
<summary><b>自分で描いたリージョンをポータルにできますか？</b></summary>

はい。リージョンの設定でビヘイビア **Magic Way – ポータル** を追加し、到着エリアを選んでください。パネルが自動で見つけます。

</details>

<a name="macros"></a>
## 12. マクロ

<details>
<summary><b>マクロや他のモジュール用のコマンド</b>（クリックで開く）</summary>

`"名前"` はポータルの名前です（UUID でも動きます）。

```js
const mw = game.modules.get("magic-way").api;
mw.pannello();                       // パネルを開く
mw.apri("名前");                     // 開 / 閉モードのポータルを開く
mw.chiudi("名前");                   // 閉じる
mw.alterna("名前");                  // 閉じていれば開き、開いていれば閉じる
mw.modalita("名前", "comando");      // モード："libero"（自由）| "controllato"（開 / 閉）| "comando"（GM の指示で）
mw.passano("名前", "tutti");         // 通過する者："giocatori"（プレイヤー）| "png"（モンスターと NPC）| "tutti"（全員）
mw.teletrasporta("名前");            // エリアの中の全員を今すぐテレポートする
mw.teletrasportaToken("名前", canvas.tokens.controlled); // 選択中のトークンをテレポートする
mw.ripara();                         // インポート後にリンクを修復する
```

移動のたびに、モジュールはフック `magic-way.teletrasporto` を `{portale, destinazione, tokens}` 付きで呼び出します。

</details>

---

<p align="center"><b>MorningStar</b> 制作</p>
