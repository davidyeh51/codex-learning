const practices = [
'請先說明你對任務的理解、列出計畫，再指出如何驗收；完成後列出改動與測試結果。',
'請檢查這個專案，列出你還不知道的資訊及可能風險；不要修改任何檔案。',
'請建立一個簡單的待辦清單網頁，能新增與刪除項目。先說明計畫，完成後執行可用的測試並回報結果。',
'請比較我目前的工作環境適合使用哪個 Codex 入口，說明需要的權限與驗證方式。',
'請盤點這個專案的啟動與測試方式，整理成可重複使用的步驟，沒有把握的地方請標明。',
'請先閱讀專案結構與既有規範，草擬精簡的 AGENTS.md，包含測試方式、目錄用途和限制；請勿虛構指令。',
'請列出此任務可能涉及的權限、風險及可驗證的防護；在執行前說明你實際能檢查的項目。',
'請分析這項工作哪些部分適合做成可重用的技能、分工或外部工具連線，列出前提與驗收方式。',
'請以唯讀方式繪製這個專案的主要目錄、入口、資料流和測試位置，列出證據與未知事項。',
'請先重現問題並找出原因，再提出最小修正與能捕捉此問題的測試；回報實際執行結果。',
'請把此功能拆成資料、介面、錯誤處理及測試，先提出計畫，再分步完成並驗證。',
'請檢查目前變更，整理成可供審查的摘要，列出測試結果、風險及尚未驗證的項目。',
'請盤點可重複自動化的步驟，設計一個小型工作流程，包含輸入、輸出、失敗處理與驗收。',
'請檢查這個工作流程在哪些情況可能失敗，提出具體的測試與人工檢查清單。',
'請先檢查目前專案的目錄、既有變更和測試方法，列出你發現的事實，不要修改檔案。',
'請根據需求列出目標、限制、輸入、輸出與驗收條件，並指出需要釐清的假設。',
'請把這個任務分解為可以獨立驗證的小步驟，先處理影響最小的一步。',
'請定位相關程式碼，說明問題可能的原因、影響範圍和你打算如何驗證。',
'請設計能驗證正常、空值與錯誤情境的測試，執行可用的測試並誠實回報。',
'請逐項檢查此變更的正確性、安全性及回歸風險，附上檔案位置和具體建議。',
'請整理可以重複執行的操作步驟，包含前提、指令、預期結果與失敗時的處理。',
'請先解釋相關概念，再用最小範例示範，最後提供一道練習及檢查答案的方法。',
'請讀取專案既有規範，根據實際情況更新文件，並檢查描述與程式是否一致。',
'請將重複工作設計成可重用範本，列出需要替換的欄位與執行前檢查事項。',
'請檢查此流程從需求到交付的每一步，提出可執行的改善及可衡量的驗收條件。'
];
window.lessonPractices=practices;
const oldShowSlide=showSlide;
showSlide=function(){
 const x=chapters[selected], beginner=x[1]==='入門';
 const prompt=practices[selected];
 const pages=[
  {label:'01 / 核心結論',title:x[0],body:`<p>${x[2]}</p><p><strong>為什麼重要：</strong>${x[3]}</p><p><strong>完成標準：</strong>${x[4]}</p>`},
  {label:'02 / 操作流程',title:beginner?'從零開始：四個步驟':'實作流程與檢查點',body:`<svg viewBox="0 0 700 110" role="img" aria-label="準備、交辦、執行、驗證四個步驟"><rect width="700" height="110" rx="12" fill="#eaf4ef"/><g fill="#173d3b" font-size="18" font-family="sans-serif" text-anchor="middle"><text x="78" y="49">① 準備</text><text x="258" y="49">② 交辦</text><text x="438" y="49">③ 執行</text><text x="615" y="49">④ 驗證</text><text x="168" y="49">→</text><text x="348" y="49">→</text><text x="528" y="49">→</text><text x="78" y="80" font-size="13">確認專案</text><text x="258" y="80" font-size="13">貼上提示詞</text><text x="438" y="80" font-size="13">觀察進度</text><text x="615" y="80" font-size="13">檢查成果</text></g></svg><ol><li>開啟 Codex，選擇要練習的專案或工作目錄；先確認位置正確。</li><li>在任務輸入區貼上下頁範本，將需求補充成自己的情境後送出。</li><li>閱讀 Codex 的計畫與執行回報；遇到需要決定的事項時，確認內容再繼續。</li><li>檢查產出的檔案與測試結果，依本主題的完成標準確認成果。</li></ol><p class="note">圖為概念流程示意，各版本的實際畫面可能不同。</p>`},
  {label:'03 / 提示詞範本',title:'複製後依情境修改',body:`<p>以下範本可直接貼到 Codex；方括號內容請先換成你的實際需求。</p><pre></pre><button class="copy-prompt" type="button">複製提示詞</button><p>補充專案位置、期望結果與限制，能讓 Codex 更容易判斷範圍。</p>`},
  {label:'04 / 畫面導覽',title:'從交辦到驗收',body:`<svg viewBox="0 0 700 260" role="img" aria-label="Codex 任務畫面示意：專案、任務、執行紀錄及結果"><rect x="4" y="4" width="692" height="252" rx="12" fill="#f1f6f3" stroke="#9bb7a7"/><rect x="20" y="22" width="160" height="215" rx="6" fill="#d6e9dd"/><rect x="198" y="22" width="482" height="60" rx="6" fill="white"/><rect x="198" y="95" width="482" height="142" rx="6" fill="white"/><g fill="#173d3b" font-size="19" font-family="sans-serif"><text x="35" y="58">① 專案位置</text><text x="215" y="60">② 輸入任務與範本</text><text x="215" y="130">③ 檢視執行紀錄</text><text x="215" y="180">④ 檢查變更與測試結果</text></g></svg><p class="note">這是流程示意圖，並非 Codex 實際截圖；按鈕位置依版本與使用入口而異。</p><p>先確認正在操作的專案，再查看執行過程與最後回報。若回報沒有提供測試證據，請要求補做或註明未驗證。</p>`},
  {label:'05 / 自我檢查',title:'完成後的驗收清單',body:`<ul><li>成果是否符合原本的需求與限制？</li><li>是否看過實際變更，而非只看文字回報？</li><li>測試或操作是否真的執行，結果是什麼？</li><li>有哪些假設、未測項目或需要人工判斷的風險？</li></ul><p><strong>本課重點：</strong>${x[4]}</p><p>練習：把範本套用到一個小任務，記錄輸入、實際結果與下一次要改進的地方。</p>`}
 ];
 const item=pages[page]; document.querySelector('#progress').textContent=`${x[5]} · ${page+1} / ${pages.length}`; document.querySelector('#slide-label').textContent=item.label;document.querySelector('#slide-title').textContent=item.title;
 const body=document.querySelector('#slide-text');body.innerHTML=item.body;
 const pre=body.querySelector('pre');if(pre){pre.textContent=`任務：[描述你的需求]\n背景：[專案或相關檔案]\n範圍：[可以修改的部分]\n驗收：[如何判斷完成]\n\n${prompt}`;body.querySelector('.copy-prompt').onclick=async function(){try{await navigator.clipboard.writeText(pre.textContent);this.textContent='已複製';}catch{this.textContent='請選取上方文字複製';}}}
 document.querySelector('#prev').disabled=page===0;document.querySelector('#next').disabled=page===pages.length-1;
};
render();
