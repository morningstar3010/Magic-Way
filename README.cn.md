<p align="center"><img src="assets/logo.webp" alt="Magic Way" width="320"></p>

<h3 align="center">适用于 Foundry VTT 14 的地图间传送门</h3>

<p align="center">拖动即可绘制的隐形区域 · 三种传送门模式 · 主持人专用的一个面板 · 适用于任何游戏系统</p>

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
  🌐 <a href="README.md">English</a> · <a href="README.it.md">Italiano</a> · <a href="README.de.md">Deutsch</a> · <a href="README.es.md">Español</a> · <a href="README.fr.md">Français</a> · <a href="README.pl.md">Polski</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.ru.md">Русский</a> · <b>中文（简体）</b> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a>
</p>

---

**Magic Way** 可以把指示物从一个地方移到另一个地方：可以在同一张地图内，也可以去同一个世界里的另一张地图。你在地图上画一个<b>入口</b>和一个<b>到达区域</b>，每个走进入口的指示物都会伴随一道魔法闪光出现在到达区域。玩家永远看不到这些区域。你只用一个面板就能掌控一切。

## 目录

1. [安装](#install)
2. [一分钟做好你的第一个传送门](#quick-start)
3. [打开面板](#open-panel)
4. [面板一览](#panel)
5. [一步步创建传送门](#create)
6. [使用和管理传送门](#manage)
7. [区域分组：让传送门井井有条](#zones)
8. [搜索与筛选](#filters)
9. [把地图搬到另一个世界](#export)
10. [设置与语言](#settings)
11. [常见问题](#faq)
12. [宏](#macros)

<a name="install"></a>
## 1. 安装

1. 在 Foundry 中打开<b>扩展模组</b>，然后点击<b>安装模组</b>。
2. 在底部的<b>清单 URL</b> 栏里粘贴下面这个地址，然后点击<b>安装</b>：

```
https://github.com/morningstar3010/magic-way/releases/latest/download/module.json
```

3. 打开你的世界，进入<b>管理模组</b>，勾选 **Magic Way** 并保存。

<a name="quick-start"></a>
## 2. 一分钟做好你的第一个传送门

- [ ] 点击左侧工具栏中的 **Magic Way – 传送门面板** 按钮。
- [ ] 点击<b>新建传送门</b>，为入口输入一个名称，再为到达区域输入一个名称。
- [ ] 点击<b>下一步：绘制入口</b>，在地图上拖出一个矩形。
- [ ] 留在当前场景或打开另一个场景，为到达区域拖出一个矩形。
- [ ] 完成！把一个玩家的指示物移进入口，看着它被传送过去。

> [!TIP]
> 到达区域可以<b>和入口在同一个场景</b>，也可以<b>在同一个世界的任何其他场景</b>。绘制时你可以随意切换场景。

<a name="open-panel"></a>
## 3. 打开面板

<table><tr>
<td width="240"><img src="docs/images/toolbar-button.webp" alt="工具栏中的面板按钮" width="220"></td>
<td>

面板只供主持人使用。你可以用三种方式打开它：

- 点击左侧工具栏中的<b>门形按钮</b>（在“指示物”组或“区域”组中）；
- 使用你自己选的按键，在<b>配置控制</b>中设置；
- 通过宏：`game.modules.get("magic-way").api.pannello()`。

</td>
</tr></table>

<a name="panel"></a>
## 4. 面板一览

![Magic Way 面板](docs/images/panel.webp)

| 部分 | 里面有什么 |
|---|---|
| <b>区域分组</b>（左栏） | 你的传送门分组，就像文件夹一样。<b>全部</b>会显示所有传送门。 |
| **顶部栏** | <b>新建传送门</b>、<b>搜索</b>框、<b>全部开启</b>、<b>全部关闭</b>、<b>仅当前场景</b>、<b>修复连接</b>。 |
| <b>连接</b>（中间） | 每个连接都是一张卡片：左边是<b>入口</b>，右边是<b>到达区域</b>。双箭头 ⟷ 表示也可以传送回来。 |

每个区域上都能看到它所在地图的名称。<b>你正在查看此场景</b>表示它在你正在看的场景上。<b>对玩家激活</b>表示它在你的玩家所在的场景上。

<a name="create"></a>
## 5. 一步步创建传送门

### 第 1 步 – 填写表单

点击面板顶部的<b>新建传送门</b>。

![“新建传送门”表单](docs/images/new-portal.webp)

| 栏位 | 含义 |
|---|---|
| **入口名称** | 指示物走进去的那个区域的名称（例如<i>高塔的魔法阵</i>）。 |
| **到达名称** | 指示物出现的那个区域的名称（例如<i>地穴的魔法阵</i>）。 |
| **模式** | 传送门什么时候生效：<b>自由</b>、<b>开启 / 关闭</b>或<b>由主持人下令</b>。详见下文。 |
| **谁可以通过** | 哪些指示物会被传送：玩家、主持人的怪物与 NPC，或者所有人。 |
| **区域分组** | 传送门放进哪个分组。之后可以随时修改。 |
| **同时创建返程** | 勾选后，到达区域也会成为返回入口的传送门，并且有自己的模式。 |

<details>
<summary><b>三种模式</b>（点击展开）</summary>

| 模式 | 指示物走进入口时会发生什么 |
|---|---|
| **自由** | 立刻被传送。传送门始终开启。 |
| **开启 / 关闭** | 只有当你让传送门保持<b>开启</b>时才会传送。处于<b>关闭</b>时，指示物走过去什么也不会发生。你在面板上点一下就能开启或关闭它。 |
| **由主持人下令** | 不会自动发生任何事。准备好后点击<b>立即传送</b>，区域内的所有人会一起被传送。 |

</details>

<details>
<summary><b>谁可以通过</b>（点击展开）</summary>

![谁可以通过](docs/images/who-can-pass.webp)

- <b>仅玩家</b>：只传送玩家拥有的指示物。你的怪物可以走过传送门而不会消失。
- <b>仅主持人的怪物与 NPC</b>：只传送没有任何玩家拥有的指示物。
- <b>玩家、怪物与 NPC</b>：所有人。

这个选择同样适用于<b>立即传送</b>。

</details>

<details>
<summary><b>返程</b>（点击展开）</summary>

![同时创建返程](docs/images/return.webp)

勾选返程后，到达区域也会变成返回入口的传送门。勾选框旁边的菜单用来设置返程的模式，它可以和去程不同。忘了勾选？没关系：到达区域的卡片上有一个<b>创建返程</b>按钮。

</details>

### 第 2 步 – 绘制入口

点击<b>下一步：绘制入口</b>，然后<b>在地图上拖动</b>。矩形会对齐网格，大小随你。顶部的提示栏会以格数和米为单位显示它的大小。单击只会占一格。按 **Esc** 或<b>右键</b>取消。

![绘制入口](docs/images/draw-entrance.webp)

### 第 3 步 – 绘制到达区域

现在<b>留在当前场景，或打开同一个世界的另一个场景</b>，然后用同样的方式拖出到达区域。

![绘制到达区域](docs/images/draw-arrival.webp)

### 第 4 步 – 完成！

<table><tr>
<td width="320"><img src="docs/images/areas-on-map.webp" alt="地图上的入口和到达区域" width="300"></td>
<td>

<b>入口是紫色的</b>，<b>到达区域是绿色的</b>。只有在<b>区域</b>图层启用时你才能看到它们。<b>玩家永远看不到它们。</b>

你也可以用 Foundry 普通的区域工具来修改它们的形状，例如把区域变成多边形。

</td>
</tr></table>

> [!WARNING]
> 在区域配置中，<b>不要勾选“隐藏”（Hidden）</b>。这些区域本来就对玩家不可见，而在 Foundry 14 中，“隐藏”会关闭区域内的一切，传送门就会失效。如果你不小心勾选了，Magic Way 会提醒你，面板也会把这个传送门标记为<b>已停用</b>。

<a name="manage"></a>
## 6. 使用和管理传送门

每个出发区域都有自己的控件：

- <b>名称</b>栏：点击它并输入文字，就能重命名该区域；
- <b>模式</b>菜单，以及在“开启 / 关闭”模式下的<b>开启 / 关闭</b>开关；
- <b>谁可以通过</b>菜单；
- <b>区域内</b>的指示物数量（把鼠标悬停在上面可以看到它们的名字）。

每个区域底部有一排按钮：

![区域按钮](docs/images/area-buttons.webp)

| 按钮 | 作用 |
|---|---|
| **立即传送** | 无论什么模式，都会立刻把区域内的所有人送到到达区域。区域内有人时它会亮起。 |
| 👁 **眼睛** | <b>在地图上显示此区域</b>：打开它所在的场景，切换到区域图层并指向该区域。 |
| ▢ **方块** | <b>重新绘制此区域</b>：拖出一个新的矩形，也可以在另一个场景上。 |
| ⚙ **齿轮** | <b>区域配置</b>：Foundry 中该区域的标准窗口。 |

没有返回路线的到达区域会显示<b>创建返程</b>：点一下就能双向往返。

### 删除连接

点击卡片右上角的<b>红色垃圾桶</b>并确认。

![删除连接](docs/images/delete-link.webp)

连接会<b>连同它在地图上的区域一起</b>消失：你不需要手动删除任何东西。只有当另一个连接仍在使用某个区域，或者该区域含有其他模块添加的行为时，它才会被保留。

<a name="zones"></a>
## 7. 区域分组：让传送门井井有条

区域分组就像文件夹：例如<i>法师塔</i>、<i>地下城第 1 层</i>、<i>城市</i>。

![新建分组](docs/images/new-zone.webp)

- <b>创建分组</b>：点击“区域分组”栏顶部的 <b>+</b>。选择一个<b>名称</b>、一种<b>颜色</b>（现成的颜色或任何你喜欢的颜色），如果需要，还可以选择它放在哪个分组<b>之内</b>。
- <b>子分组</b>：分组可以放进其他分组里，层数不限。它们总是按<b>字母顺序</b>排列。
- <b>筛选</b>：点击一个分组，就只显示其中的传送门，包括它的子分组里的传送门。旁边的数字会把它们全部算在内。
- <b>颜色</b>：会显示在文件夹图标上，以及该分组传送门卡片的边缘上。
- <b>把鼠标悬停在分组上</b>会出现三个按钮：<b>+</b> 在其中创建子分组，<b>铅笔</b>用来编辑名称、颜色和上级分组，<b>垃圾桶</b>用来删除它（其中的传送门和子分组会上移一级）。

剩下的交给<b>拖放</b>：

| 拖动… | …放到 | 结果 |
|---|---|---|
| 一张传送门卡片（抓住它的标题栏） | 一个分组 | 传送门会进入正好那个分组，即使是子分组也可以 |
| 一张传送门卡片 | **全部** | 传送门不再属于任何分组 |
| 一个分组 | 另一个分组 | 它成为那个分组的子分组 |
| 一个分组 | **全部** | 它回到顶层 |

分组栏顶部 <b>+</b> 旁边的<b>锁</b>用于锁定或解锁通过拖放移动分组。锁定时分组保持不动，但你仍然可以把传送门拖入分组。

拖动时变成<b>红色</b>的分组表示“不允许”：分组不能放进它自己，也不能放进它自己的子分组。

你也可以通过传送门卡片顶部带文件夹图标的菜单来选择它的分组。

<a name="filters"></a>
## 8. 搜索与筛选

- <b>搜索传送门或地图…</b>：输入传送门<b>或地图</b>名称的一部分。大小写和重音符号都没有影响。不匹配的卡片会消失，变空的分组也会消失。
- <img src="docs/images/this-scene-only.webp" alt="仅当前场景" height="22"> <b>仅当前场景</b>：只显示在你正在查看的场景上有区域的连接。再点一次就会显示全部。
- <b>全部开启</b>和<b>全部关闭</b>：一次性开启或关闭列表中能看到的所有<b>开启 / 关闭</b>模式的传送门。

<a name="export"></a>
## 9. 把地图搬到另一个世界

传送门<b>保存在它们的地图里</b>。导出一个场景（到合集包、冒险或 JSON 文件），再把它导入到另一个启用了 Magic Way 的世界或服务器，区域和传送门就会一起过去。

导入的场景会获得新的 ID，但每个区域都有自己的代码，每个传送门也都记得它的到达区域在哪里。Magic Way 会在世界启动时以及每次导入后<b>自动修复连接</b>。你也可以自己点击<b>修复连接</b>。缺失的分组会按原来的名称、颜色和上级分组重新创建。

如果你只导入了一个连接的两张地图中的一张，传送门会显示一个<b>红色警告</b>，上面写着缺失地图的名称。把那张地图也导入，连接就会自动修复。在同一个世界里复制的地图同样可以正常使用。

![修复连接](docs/images/repair-links.webp)

<a name="settings"></a>
## 10. 设置与语言

打开<b>配置设置 → Magic Way</b>。

![Magic Way 设置](docs/images/settings.webp)

| 设置 | 作用 |
|---|---|
| <b>Magic Way 的语言（仅本模块）</b> | 只选择 Magic Way 的语言：Foundry 和其他模块保持不变。<b>自动</b>会跟随 Foundry。个人设置；页面会重新加载。 |
| **每次传送都通知主持人** | 一条消息会告诉你谁被传送了、经过哪个传送门、去了哪个场景。 |
| **消失与出现特效** | 魔法闪光：指示物在出发时淡出，在到达时淡入。所有正在看这个场景的人都能看到。 |
| **魔法闪光颜色** | 光环和光芒的颜色。 |
| **切换场景时淡入淡出** | 被带到另一个场景的玩家会看到淡入淡出的过渡效果。 |
| **传送音效** | 每次传送时为所有人播放的音频文件。留空则没有声音。 |
| **主持人跟随队伍** | 你下令把大家传送到另一个场景后，你的视角也会跟过去。个人设置。 |

可用语言：English, Italiano, Deutsch, Español, Français, Polski, Português (Brasil), Русский, 中文（简体）, 日本語, 한국어.

<a name="faq"></a>
## 11. 常见问题

<details>
<summary><b>指示物走进了入口，但什么都没发生</b></summary>

请按顺序检查以下几点：

1. <b>模式</b>：<b>开启 / 关闭</b>模式的传送门必须处于<b>开启</b>状态；<b>由主持人下令</b>模式的传送门会等你点击<b>立即传送</b>。
2. <b>谁可以通过</b>：设为<b>仅玩家</b>时，你的怪物走过去不会被传送。
3. <b>必须有主持人在线</b>：只有主持人才能在场景上创建和移除指示物。
4. 面板上不能显示<b>已停用</b>：在区域配置中，“隐藏”（Hidden）必须取消勾选。

</details>

<details>
<summary><b>我的玩家能看到这些区域吗？</b></summary>

不能。这些区域只有主持人能看到，而且只在区域图层上可见。

</details>

<details>
<summary><b>到达区域在另一个场景时会发生什么？</b></summary>

指示物会在到达场景上以相同的角色和设置重新创建，然后从出发场景中移除。它的拥有者会被带到新场景，视角会以他们的指示物为中心。魔法闪光会稍等片刻，让玩家有时间加载地图。

</details>

<details>
<summary><b>多个指示物一起到达：会重叠吗？</b></summary>

不会。它们会从中心开始占据到达区域里的空格。如果空格不够，它们会在区域四周排开。

</details>

<details>
<summary><b>有多个层级的场景能用吗？</b></summary>

能。指示物会到达到达区域所在的层级。

</details>

<details>
<summary><b>我能把自己画的区域变成传送门吗？</b></summary>

可以。在区域配置中添加行为 <b>Magic Way – 传送门</b>，然后选择它的到达区域。面板会自己找到它。

</details>

<a name="macros"></a>
## 12. 宏

<details>
<summary><b>用于宏和其他模块的命令</b>（点击展开）</summary>

`"名称"` 是传送门的名称（也可以用它的 UUID）。

```js
const mw = game.modules.get("magic-way").api;
mw.pannello();                       // 打开面板
mw.apri("名称");                     // 开启一个“开启 / 关闭”模式的传送门
mw.chiudi("名称");                   // 关闭它
mw.alterna("名称");                  // 关闭时开启，开启时关闭
mw.modalita("名称", "comando");      // 模式："libero"（自由）| "controllato"（开启 / 关闭）| "comando"（由主持人下令）
mw.passano("名称", "tutti");         // 谁通过："giocatori"（玩家）| "png"（怪物与 NPC）| "tutti"（所有人）
mw.teletrasporta("名称");            // 立即传送区域内的所有人
mw.teletrasportaToken("名称", canvas.tokens.controlled); // 传送选中的指示物
mw.ripara();                         // 导入后修复连接
```

每次传送后，模块都会触发钩子 `magic-way.teletrasporto`，参数为 `{portale, destinazione, tokens}`。

</details>

---

<p align="center">由 <b>MorningStar</b> 制作</p>
