# 5 分鐘影片敘事大綱

> 規則：總長不超過 5:00，實拍為主。旁白全英文，畫面上的中文對話配英文字幕。
> 一句話目標：**評審在前 20 秒就聽到它講一句跟食物無關的話。**

---

## 0:00–0:20　冷開場（不要 logo、不要標題卡）

**畫面**：廚房，一個人，手上沾著水。手機／筆電放在流理台上，螢幕上是計時器在跑。
**現場音**：

> 圓圓：「So — long day?」
> 我（笑）：「還好啦，開會開到剛剛。」
> 圓圓：「Sounds it. The water's still got two minutes anyway.」

**切黑，白字**：
`Every kitchen assistant helps you cook faster.`
`Nobody built one that keeps you company while you wait.`

> 為什麼放前面：評審一天要看幾十支影片，前 20 秒決定他要不要認真看完。不要用「Hi, I'm X, today I'll show you…」開場。

## 0:20–0:50　問題（旁白配畫面，不要對鏡頭講話）

三個事實，一句一畫面：

1. 手是濕的、油的、沾麵粉的 → 特寫手，然後手指在螢幕上滑不動
2. 一份食譜大半時間在等 → 快速剪：水在滾、麵在悶、鍋在收汁
3. 那些空檔沒有人 → 廚房定鏡，靜音兩秒

**旁白收尾**：
> "Voice isn't a nicer interface here. It's the only one left. And the part nobody solves is the waiting."

## 0:50–1:20　它是什麼（一句話 + 介面掃過）

> "YuanYuan is a voice companion that cooks with you. It picks the dish, walks you through it one step at a time — and stays on the line while things cook."

畫面：桌機錄畫面，掃過階段標籤 `picking → cooking → waiting → done`，停在 waiting。

## 1:20–3:30　實拍主段：泡麵升級版（**只演「指定一道菜」這條**）

一鏡到底最好，剪點越少越可信。

| 時間 | 你說 | 它做 | 鏡頭 |
| --- | --- | --- | --- |
| 1:20 | 「我想煮泡麵升級版」 | 載入菜、唸第一步、計時器自動跑 | 中景，帶到手是濕的 |
| 1:35 | *（去洗菜，不看螢幕）* | 安靜 | 特寫水槽 |
| 1:50 | — | **主動開口聊天**（waiting 階段） | 回中景，臉上有反應 |
| 2:20 | 「等一下，你剛剛說幾毫升？」 | `repeat_step`，重講 | 螢幕特寫 |
| 2:40 | 「好了」 | `next_step`，下一步 + 新計時 | 鍋子特寫 |
| 2:55 | *（它講到一半）*「等等——」 | **中途被打斷立刻停口** | 這一秒要拍清楚 |
| 3:10 | 「好了」×2，走完剩下的步驟 | 完成，誇一句 | 成品碗 |

**必拍的三個瞬間**（缺一個影片就弱一半）：
1. **它主動開口**，而且講的不是食譜
2. **濕手打斷它**，不碰螢幕
3. **成品端出來**，它安靜下來

**中英夾雜示範點**：在 2:20 那句故意講「你剛剛說幾 ml？」，讓中英混句被正確辨識。

## 3:30–4:20　技術（畫面切螢幕錄影 + 簡單圖）

三點，每點 15 秒，配一張圖：

1. **工具驅動的個性狀態機** — 畫五個工具 → 回傳 stage → 改寫語氣。一句話：「Same model, four characters.」
2. **`keyterms` 撐住雙語廚房** — 螢幕上放中文菜名，示範它在英文句子裡也認得
3. **等待中的插話打斷** — 回放 2:55 那一秒，加一行 `interrupt_response: true`

**一定要講的一句**：
> "Every step it says came back from a tool. It is not allowed to recite a recipe from memory."

（這句同時打掉評審對幻覺的疑慮，也是技術分。）

## 4:20–4:50　商業價值

- 一人住戶數量在成長，這件事不用解釋，配一張圖就好
- 現有產品全部在追求「快」，沒有人服務「陪」
- 一句話收：
> "Nobody is short of recipes. People are short of company."

## 4:50–5:00　收尾

**畫面**：那碗泡麵，蒸氣。
**畫面上字**：
`YuanYuan AI 圓圓`
`yuanyuan-voice-works.pages.dev`
`Open source · MIT`

不要旁白，讓它安靜結束。

---

## 拍攝檢查清單

- [ ] 手真的是濕的，不要作弊
- [ ] 環境音留著（水聲、鍋聲），不要全部蓋掉配樂
- [ ] 配樂只在 0:20–0:50 和 4:20–5:00 進，實拍段不放
- [ ] 字幕全英文，包含我講的中文
- [ ] 螢幕錄影跟實拍要對得上時間，別穿幫
- [ ] 出檔 MP4，1080p，確認低於 5:00
- [ ] 錄兩版：中文回答 / 英文回答，剪之前先自己聽哪版有陪伴感

## 錄之前一定要先確認的事

1. 中文語音辨識 + 工具呼叫真的通（還沒實測）
2. 等待階段它會主動開口——如果 `input.text` 那個實驗開關沒過，就要靠「我先講一句、它接話」來製造 1:50 那一幕，事先排練
3. 語言版本已經決定
