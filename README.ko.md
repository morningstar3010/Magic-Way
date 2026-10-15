<p align="center"><img src="assets/logo.webp" alt="Magic Way" width="320"></p>

<h3 align="center">Foundry VTT 14용 지도 간 순간이동 포털</h3>

<p align="center">드래그로 그리는 보이지 않는 영역 · 세 가지 포털 모드 · GM을 위한 하나의 패널 · 모든 게임 시스템 지원</p>

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
  🌐 <a href="README.md">English</a> · <a href="README.it.md">Italiano</a> · <a href="README.de.md">Deutsch</a> · <a href="README.es.md">Español</a> · <a href="README.fr.md">Français</a> · <a href="README.pl.md">Polski</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.ru.md">Русский</a> · <a href="README.cn.md">中文（简体）</a> · <a href="README.ja.md">日本語</a> · <b>한국어</b>
</p>

---

<b>Magic Way</b>는 토큰을 한 곳에서 다른 곳으로 옮겨요. 같은 지도 안에서도, 같은 월드의 다른 지도로도 옮길 수 있어요. 지도에 <b>입구</b>와 **도착** 영역을 그리면, 입구에 들어온 모든 토큰이 마법의 섬광과 함께 도착 영역에 나타나요. 플레이어에게는 영역이 절대 보이지 않아요. 모든 것을 하나의 패널에서 관리해요.

## 목차

1. [설치](#install)
2. [1분 만에 첫 포털 만들기](#quick-start)
3. [패널 열기](#open-panel)
4. [패널 한눈에 보기](#panel)
5. [포털 만들기, 단계별로](#create)
6. [포털 사용하고 관리하기](#manage)
7. [구역: 포털을 깔끔하게 정리하기](#zones)
8. [검색과 필터](#filters)
9. [지도를 다른 월드로 옮기기](#export)
10. [설정과 언어](#settings)
11. [질문과 문제 해결](#faq)
12. [매크로](#macros)

<a name="install"></a>
## 1. 설치

1. Foundry에서 <b>애드온 모듈</b>을 열고 <b>모듈 설치</b>를 누르세요.
2. 아래쪽 **매니페스트 URL** 칸에 이 주소를 붙여넣고 <b>설치</b>를 누르세요:

```
https://github.com/morningstar3010/magic-way/releases/latest/download/module.json
```

3. 월드를 열고 <b>모듈 관리</b>로 가서 <b>Magic Way</b>에 체크한 다음 저장하세요.

<a name="quick-start"></a>
## 2. 1분 만에 첫 포털 만들기

- [ ] 왼쪽 도구 모음에서 **Magic Way – 포털 패널** 버튼을 클릭하세요.
- [ ] <b>새 포털</b>을 누르고 입구 이름과 도착 이름을 입력하세요.
- [ ] <b>다음: 입구 그리기</b>를 누르고 지도에서 사각형을 드래그하세요.
- [ ] 이 장면에 머물거나 다른 장면을 열고, 도착용 사각형을 드래그하세요.
- [ ] 완성! 플레이어 토큰을 입구로 옮기고 이동하는 모습을 지켜보세요.

> [!TIP]
> 도착 영역은 입구와 <b>같은 장면</b>에 있어도 되고, <b>같은 월드의 다른 어떤 장면</b>에 있어도 돼요. 그리는 동안 장면을 자유롭게 바꿔도 괜찮아요.

<a name="open-panel"></a>
## 3. 패널 열기

<table><tr>
<td width="240"><img src="docs/images/toolbar-button.webp" alt="도구 모음의 패널 버튼" width="220"></td>
<td>

패널은 GM 전용이에요. 세 가지 방법으로 열 수 있어요:

- 왼쪽 도구 모음의 <b>문 버튼</b>으로 (토큰 그룹 또는 지역 그룹 안에 있어요);
- <b>조작 설정</b>에서 정한 원하는 키로;
- 매크로로: `game.modules.get("magic-way").api.pannello()`.

</td>
</tr></table>

<a name="panel"></a>
## 4. 패널 한눈에 보기

![Magic Way 패널](docs/images/panel.webp)

| 부분 | 그곳에 있는 것 |
|---|---|
| **구역** (왼쪽 열) | 포털 그룹이에요. 폴더 같은 거예요. <b>전체</b>는 모든 포털을 보여줘요. |
| **상단 바** | **새 포털**, **검색** 칸, **모두 열기**, **모두 닫기**, **이 장면만**, **연결 복구**. |
| **연결** (가운데) | 연결마다 카드 한 장이에요. 왼쪽은 **입구**, 오른쪽은 <b>도착</b>이에요. 양방향 화살표 ⟷는 돌아올 수도 있다는 뜻이에요. |

각 영역에는 그 지도의 이름이 보여요. <b>보고 있는 장면</b>은 지금 보고 있는 장면에 있다는 뜻이에요. <b>플레이어에게 활성</b>은 플레이어들이 있는 장면에 있다는 뜻이에요.

<a name="create"></a>
## 5. 포털 만들기, 단계별로

### 1단계 – 양식 채우기

패널 위쪽의 <b>새 포털</b>을 누르세요.

![새 포털 양식](docs/images/new-portal.webp)

| 항목 | 의미 |
|---|---|
| **입구 이름** | 토큰이 들어가는 영역의 이름이에요 (예: *탑의 마법진*). |
| **도착 이름** | 토큰이 나타나는 영역의 이름이에요 (예: *지하묘지의 마법진*). |
| **모드** | 포털이 작동하는 때: **자유**, **열림 / 닫힘**, **GM 명령 시**. 아래를 보세요. |
| **통과할 수 있는 대상** | 어떤 토큰이 이동하는지: 플레이어, GM의 몬스터와 NPC, 또는 모두. |
| **구역** | 포털이 들어갈 그룹이에요. 나중에 바꿀 수 있어요. |
| **귀환도 만들기** | 체크하면 도착 영역도 입구로 돌아가는 포털로 작동해요. 모드는 따로 정할 수 있어요. |

<details>
<summary><b>세 가지 모드</b> (클릭해서 열기)</summary>

| 모드 | 토큰이 입구에 들어가면 일어나는 일 |
|---|---|
| **자유** | 바로 순간이동해요. 포털은 항상 열려 있어요. |
| **열림 / 닫힘** | 포털을 <b>열림</b>으로 두는 동안에만 이동해요. <b>닫힘</b>일 때는 토큰이 위를 지나가도 아무 일도 없어요. 패널에서 클릭 한 번으로 열고 닫을 수 있어요. |
| **GM 명령 시** | 저절로는 아무 일도 일어나지 않아요. 준비가 되면 <b>지금 순간이동</b>을 누르세요. 영역 안에 있는 모두가 함께 이동해요. |

</details>

<details>
<summary><b>통과할 수 있는 대상</b> (클릭해서 열기)</summary>

![통과할 수 있는 대상](docs/images/who-can-pass.webp)

- **플레이어만**: 플레이어가 소유한 토큰만 이동해요. 몬스터는 포털 위를 걸어도 사라지지 않아요.
- **GM의 몬스터와 NPC만**: 어떤 플레이어도 소유하지 않은 토큰만 이동해요.
- **플레이어, 몬스터, NPC**: 모두 이동해요.

이 선택은 <b>지금 순간이동</b>에도 적용돼요.

</details>

<details>
<summary><b>귀환</b> (클릭해서 열기)</summary>

![귀환도 만들기](docs/images/return.webp)

귀환에 체크하면 도착 영역도 입구로 돌아가는 포털이 돼요. 체크 상자 옆의 메뉴로 귀환 모드를 정할 수 있고, 가는 길과 다르게 정해도 돼요. 체크하는 걸 깜빡했나요? 괜찮아요. 도착 카드에 **귀환 만들기** 버튼이 있어요.

</details>

### 2단계 – 입구 그리기

<b>다음: 입구 그리기</b>를 누른 뒤 <b>지도에서 드래그</b>하세요. 사각형은 격자에 맞춰지고, 크기는 원하는 만큼 키울 수 있어요. 위쪽 바에 크기가 칸 수와 미터로 표시돼요. 한 번 클릭하면 한 칸만 차지해요. **Esc** 또는 <b>오른쪽 클릭</b>으로 취소해요.

![입구 그리기](docs/images/draw-entrance.webp)

### 3단계 – 도착 그리기

이제 **이 장면에 머물거나 같은 월드의 다른 장면을 열고**, 같은 방법으로 도착 영역을 드래그하세요.

![도착 그리기](docs/images/draw-arrival.webp)

### 4단계 – 완성!

<table><tr>
<td width="320"><img src="docs/images/areas-on-map.webp" alt="지도 위의 입구와 도착" width="300"></td>
<td>

**입구는 보라색**, <b>도착은 초록색</b>이에요. **지역** 레이어가 활성일 때만 보여요. **플레이어에게는 절대 보이지 않아요.**

Foundry의 일반 지역 도구로 모양을 바꿀 수도 있어요. 예를 들어 영역을 다각형으로 만들 수 있어요.

</td>
</tr></table>

> [!WARNING]
> 지역 설정에서 **"숨김"(Hidden)에 체크하지 마세요**. 영역은 이미 플레이어에게 보이지 않아요. 게다가 Foundry 14에서 "숨김"은 영역 안의 모든 것을 꺼 버려서 포털이 작동하지 않게 돼요. 실수로 체크하면 Magic Way가 알려 주고, 패널에서 그 포털이 <b>비활성</b>으로 표시돼요.

<a name="manage"></a>
## 6. 포털 사용하고 관리하기

이동이 시작되는 영역마다 전용 조작 항목이 있어요:

- **이름** 칸: 클릭하고 입력하면 영역 이름을 바꿀 수 있어요;
- **모드** 메뉴와, 열림 / 닫힘 모드일 때의 **열림 / 닫힘** 스위치;
- **통과할 수 있는 대상** 메뉴;
- <b>영역 안</b>에 있는 토큰 수 (마우스를 올리면 이름이 보여요).

각 영역 아래에는 버튼이 한 줄로 있어요:

![영역 버튼](docs/images/area-buttons.webp)

| 버튼 | 하는 일 |
|---|---|
| **지금 순간이동** | 모드와 상관없이 영역 안의 모두를 바로 도착으로 보내요. 누군가 안에 있으면 불이 들어와요. |
| 👁 **눈** | **지도에서 이 영역 보기**: 그 장면을 열고, 지역 레이어로 바꾼 뒤 영역을 가리켜요. |
| ▢ **사각형** | **이 영역 다시 그리기**: 새 사각형을 드래그해요. 다른 장면에서도 돼요. |
| ⚙ **톱니바퀴** | **지역 설정**: Foundry의 일반 지역 창이에요. |

돌아가는 길이 없는 도착에는 <b>귀환 만들기</b>가 보여요. 한 번 클릭하면 양쪽으로 오갈 수 있어요.

### 연결 삭제하기

카드 오른쪽 위의 <b>빨간 휴지통</b>을 누르고 확인하세요.

![연결 삭제](docs/images/delete-link.webp)

연결은 **지도 위의 영역과 함께** 사라져요. 손으로 지울 것은 없어요. 다른 연결이 아직 그 영역을 쓰고 있거나, 다른 모듈이 추가한 동작이 들어 있을 때만 영역이 남아요.

<a name="zones"></a>
## 7. 구역: 포털을 깔끔하게 정리하기

구역은 폴더 같은 거예요. 예를 들면 *마법사의 탑*, *던전 1층*, *도시* 같은 거죠.

![새 구역](docs/images/new-zone.webp)

- **구역 만들기**: 구역 열 위쪽의 <b>+</b>를 누르세요. <b>이름</b>과 **색상**(준비된 색 중 하나 또는 원하는 아무 색)을 고르고, 원하면 어느 구역 <b>안</b>에 넣을지도 고르세요.
- **하위 구역**: 구역은 다른 구역 안에 원하는 만큼 깊이 넣을 수 있어요. 항상 <b>가나다순</b>으로 정렬돼요.
- **필터**: 구역을 클릭하면 그 구역의 포털만 보여요. 하위 구역의 포털도 포함돼요. 옆의 숫자는 그 전부를 센 거예요.
- **색상**: 폴더 아이콘과 그 구역 포털 카드의 테두리에 보여요.
- **구역에 마우스를 올리면** 버튼 세 개가 보여요: <b>+</b>는 그 안에 하위 구역을 만들고, <b>연필</b>은 이름, 색상, 상위 구역을 편집하고, <b>휴지통</b>은 구역을 삭제해요 (안의 포털과 하위 구역은 한 단계 위로 올라가요).

나머지는 <b>드래그 앤 드롭</b>으로 해결돼요:

| 드래그하는 것… | …놓는 곳 | 결과 |
|---|---|---|
| 포털 카드 (제목 줄을 잡아서) | 구역 | 포털이 정확히 그 구역에 들어가요. 하위 구역이어도 돼요 |
| 포털 카드 | **전체** | 포털이 더 이상 구역에 속하지 않아요 |
| 구역 | 다른 구역 | 그 구역의 하위 구역이 돼요 |
| 구역 | **전체** | 최상위로 돌아가요 |

구역 열 위쪽 <b>+</b> 옆의 <b>자물쇠</b>로 끌어서 놓기로 구역을 옮기는 기능을 잠그거나 풀 수 있어요. 잠겨 있으면 구역은 그대로 있지만, 포털은 언제든 구역으로 끌어다 놓을 수 있어요.

드래그하는 동안 구역이 <b>빨간색</b>으로 바뀌면 "안 돼요"라는 뜻이에요. 구역은 자기 자신이나 자기 하위 구역 안에는 들어갈 수 없어요.

포털 카드 위쪽의 폴더 아이콘 메뉴에서 포털의 구역을 고를 수도 있어요.

<a name="filters"></a>
## 8. 검색과 필터

- <b>포털 또는 지도 검색…</b>: 포털 **또는 지도** 이름의 일부를 입력하세요. 대소문자와 악센트는 상관없어요. 맞지 않는 카드는 사라지고, 비게 된 구역도 사라져요.
- <img src="docs/images/this-scene-only.webp" alt="이 장면만" height="22"> **이 장면만**: 지금 보고 있는 장면에 영역이 있는 연결만 보여줘요. 다시 누르면 모두 보여요.
- <b>모두 열기</b>와 **모두 닫기**: 목록에 보이는 **열림 / 닫힘** 포털을 한 번에 모두 열거나 닫아요.

<a name="export"></a>
## 9. 지도를 다른 월드로 옮기기

포털은 **지도 안에 담겨서** 함께 이동해요. 장면을 (컴펜디움, 어드벤처, JSON 파일로) 내보내고, Magic Way가 활성화된 다른 월드나 다른 서버로 가져오면 영역과 포털도 함께 따라와요.

가져온 장면은 새 ID를 받지만, 각 영역에는 고유한 코드가 있고 각 포털은 도착이 어디 있는지 기억해요. Magic Way는 월드가 시작될 때와 가져올 때마다 <b>연결을 스스로 복구</b>해요. 직접 <b>연결 복구</b>를 눌러도 돼요. 없어진 구역은 이름, 색상, 상위 구역과 함께 다시 만들어져요.

연결의 두 지도 중 하나만 가져오면, 포털에 빠진 지도의 이름과 함께 <b>빨간 경고</b>가 표시돼요. 그 지도도 가져오면 연결이 저절로 고쳐져요. 같은 월드 안에서 복제한 지도도 잘 작동해요.

![연결 복구](docs/images/repair-links.webp)

<a name="settings"></a>
## 10. 설정과 언어

<b>설정 구성 → Magic Way</b>를 여세요.

![Magic Way 설정](docs/images/settings.webp)

| 설정 | 하는 일 |
|---|---|
| **Magic Way 언어 (이 모듈만)** | Magic Way의 언어만 골라요. Foundry와 다른 모듈은 그대로예요. <b>자동</b>은 Foundry를 따라요. 개인 설정이고, 페이지가 다시 로드돼요. |
| **순간이동마다 GM에게 알림** | 누가 어떤 포털을 통해 어느 장면으로 이동했는지 메시지로 알려줘요. |
| **사라짐과 나타남 효과** | 마법의 섬광이에요. 토큰이 출발할 때 사라지고 도착할 때 다시 나타나요. 그 장면을 보는 모두에게 보여요. |
| **마법 섬광 색상** | 고리와 빛의 색상이에요. |
| **장면 전환 시 페이드** | 다른 장면으로 옮겨진 플레이어에게 페이드 전환 효과가 적용돼요. |
| **순간이동 소리** | 이동할 때마다 모두에게 재생되는 오디오 파일이에요. 소리가 필요 없으면 비워 두세요. |
| **GM이 파티를 따라감** | 명령한 순간이동으로 다른 장면에 가면 내 화면도 그곳으로 옮겨가요. 개인 설정이에요. |

사용 가능한 언어: English, Italiano, Deutsch, Español, Français, Polski, Português (Brasil), Русский, 中文（简体）, 日本語, 한국어.

<a name="faq"></a>
## 11. 질문과 문제 해결

<details>
<summary><b>토큰이 입구에 들어갔는데 아무 일도 일어나지 않아요</b></summary>

다음을 순서대로 확인하세요:

1. **모드**: **열림 / 닫힘** 포털은 **열림** 상태여야 해요. **GM 명령 시** 포털은 <b>지금 순간이동</b>을 기다려요.
2. **통과할 수 있는 대상**: <b>플레이어만</b>이면 몬스터는 위를 지나가도 이동하지 않아요.
3. **GM이 접속해 있어야 해요**: 장면에 토큰을 만들고 지울 수 있는 건 GM뿐이에요.
4. 패널에 <b>비활성</b>이 표시되면 안 돼요: 지역 설정에서 "숨김"(Hidden)의 체크를 해제해야 해요.

</details>

<details>
<summary><b>플레이어가 영역을 볼 수 있나요?</b></summary>

아니요. 영역은 GM에게만, 그리고 지역 레이어에서만 보여요.

</details>

<details>
<summary><b>도착이 다른 장면에 있으면 어떻게 되나요?</b></summary>

토큰은 같은 액터와 설정으로 도착 장면에 다시 만들어지고, 출발 장면에서는 지워져요. 토큰의 소유자는 새 장면으로 옮겨지고, 화면은 자기 토큰을 중심으로 맞춰져요. 마법의 섬광은 잠깐 기다렸다가 나타나서, 플레이어가 지도를 불러올 시간이 있어요.

</details>

<details>
<summary><b>여러 토큰이 함께 도착하면 겹치나요?</b></summary>

아니요. 도착 영역의 빈칸을 가운데부터 차지해요. 칸이 모자라면 영역 둘레에 줄을 서요.

</details>

<details>
<summary><b>여러 층이 있는 장면에서도 작동하나요?</b></summary>

네. 토큰은 도착 영역이 있는 층에 도착해요.

</details>

<details>
<summary><b>내가 직접 그린 지역을 포털로 만들 수 있나요?</b></summary>

네. 지역 설정에서 **Magic Way – 포털** 동작을 추가하고 도착 영역을 고르세요. 패널이 알아서 찾아요.

</details>

<a name="macros"></a>
## 12. 매크로

<details>
<summary><b>매크로와 다른 모듈을 위한 명령어</b> (클릭해서 열기)</summary>

`"이름"`은 포털의 이름이에요 (UUID도 돼요).

```js
const mw = game.modules.get("magic-way").api;
mw.pannello();                       // 패널 열기
mw.apri("이름");                     // 열림 / 닫힘 포털 열기
mw.chiudi("이름");                   // 닫기
mw.alterna("이름");                  // 닫혀 있으면 열고, 열려 있으면 닫기
mw.modalita("이름", "comando");      // 모드: "libero" (자유) | "controllato" (열림 / 닫힘) | "comando" (GM 명령 시)
mw.passano("이름", "tutti");         // 통과 대상: "giocatori" (플레이어) | "png" (몬스터와 NPC) | "tutti" (모두)
mw.teletrasporta("이름");            // 영역 안의 모두를 지금 순간이동
mw.teletrasportaToken("이름", canvas.tokens.controlled); // 선택한 토큰을 순간이동
mw.ripara();                         // 가져온 뒤 연결 복구
```

이동할 때마다 모듈은 `{portale, destinazione, tokens}`와 함께 훅 `magic-way.teletrasporto`를 실행해요.

</details>

---

<p align="center">제작: <b>MorningStar</b></p>
