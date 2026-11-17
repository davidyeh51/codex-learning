const chapters = [
['Codex 是交付工具','入門','把任務當成可交付的工作，而非只索取一段程式碼。','交代目標、上下文、範圍和驗收條件，讓執行結果可以檢查。','閱讀變更與測試結果，保留人的判斷。'],
['認識 AI 編程的邊界','入門','模型能依上下文產生方案，但流暢的輸出不等於理解全部需求。','明確說明資料流、隱含規則與可能影響的上下游。','以測試、執行結果和審查驗證假設；通過局部測試也不代表沒有其他風險。'],
['第一次任務：跑通閉環','入門','先選一個小範圍、可回復且驗收明確的任務。','確認環境與專案狀態，委派修改，再觀察執行過程。','檢查差異並執行適當驗證，記錄結果與未解風險。'],
['選擇適合任務的工作入口','入門','IDE、CLI、App 與 Web 可對應不同工作情境。','依上下文位置、權限、協作方式與任務時長選擇入口。','無論入口為何，都應保留可檢查的變更、測試與交接。'],
['把單次成功變成可複用流程','實作','在真實專案中先確認目錄、依賴與可執行的驗證路徑。','從最小變更開始，逐步沉澱準備、實作、驗證與交接步驟。','交付時列出目標、改動範圍、已跑驗證和剩餘風險。'],
['AGENTS.md：專案工作說明','實作','把專案入口、重要目錄、限制與驗證方式寫成團隊可讀的說明。','規則應具體、可操作，並與實際專案狀態保持一致。','從新任務測試文件是否能幫助定位、執行與交接，再持續更新。'],
['Rules、Hooks 與 Approvals','實作','讓權限與限制對應任務風險，先建立可執行的護欄。','以規則描述邊界，以自動檢查輔助落實，對高影響操作設置適當審核。','定期檢查規則是否有效，避免把文字提醒誤認為技術保障。'],
['Skill、Subagent 與 MCP','進階','將可重複的方法、可切分的工作及外部能力納入工作流程。','技能提供程序；子任務有明確分工與交付；外部連接應限制所需權限。','彙整並核實各項結果，避免依賴未經檢查的交接。'],
['接手陌生程式碼庫','實作','先建立專案地圖，理解入口、架構、依賴與測試方式。','先做唯讀勘察，再依影響與不確定性選擇小範圍工作。','透過實際執行與現有文件交叉檢查，標出仍未知的部分。'],
['修復 Bug 與回歸測試','實作','先蒐集錯誤訊息、重現條件、環境、預期與實際行為。','重現問題並釐清原因，限制修改範圍，針對行為設計測試。','修復後重跑重現案例及相關回歸測試，說明未涵蓋的情況。'],
['跨前後端功能開發','進階','將需求拆解為介面契約、資料、前端、後端與驗證。','先釐清欄位、權限、例外、遷移和發布順序等跨層決策。','檢查端到端行為與相容性，確保各層交付能一起運作。'],
['PR、Review 與 CI/CD','進階','自動化可減少重複工作，重要決策仍需要適當的人員審查。','將分析、修復建議與變更放在可審核的流程中，限制自動化權限。','檢視差異、測試與風險，再依團隊規則決定合併與發布。'],
['從個人流程擴展到團隊','進階','當多人需要重複執行、交接和值班時，將個人經驗轉為共同資產。','共享入口、邊界、驗證要求和交接格式，明確指定責任。','先從核心任務試行，再根據實際協作問題調整。'],
['邊界、風險與工程方法','進階','把工作效率與可靠性一起衡量：結果需要可檢查、可驗證、可交接。','為高風險操作配置權限、審查與回復方法，不只依賴提示文字。','持續把成功與失敗轉為規則、測試和可複用流程。']
];
const cards=document.querySelector('#cards'),search=document.querySelector('#search'),count=document.querySelector('#count'),empty=document.querySelector('#empty'),dialog=document.querySelector('#deck'); let selected=0,page=0;
function render(){const q=search.value.trim().toLocaleLowerCase();const found=chapters.map((x,i)=>({x,i})).filter(({x})=>x.join(' ').toLocaleLowerCase().includes(q));cards.replaceChildren();found.forEach(({x,i})=>{const b=document.createElement('button');b.className='card';b.innerHTML=`<span>${x[1]} / 第 ${i+1} 章</span><h3></h3><p></p><strong>閱讀簡報 ↗</strong>`;b.querySelector('h3').textContent=x[0];b.querySelector('p').textContent=x[2];b.onclick=()=>{selected=i;page=0;showSlide();dialog.showModal()};cards.append(b)});count.textContent=`${found.length} 個學習主題`;empty.hidden=found.length>0}
function showSlide(){const x=chapters[selected], titles=[x[0],'如何運用','如何驗證'];document.querySelector('#progress').textContent=`第 ${selected+1} 章 · ${page+1} / 3`;document.querySelector('#slide-label').textContent=['核心結論','行動方法','驗證與交付'][page];document.querySelector('#slide-title').textContent=titles[page];document.querySelector('#slide-text').textContent=x[page+2];document.querySelector('#prev').disabled=page===0;document.querySelector('#next').disabled=page===2}search.addEventListener('input',render);document.querySelector('#close').onclick=()=>dialog.close();document.querySelector('#prev').onclick=()=>{page--;showSlide()};document.querySelector('#next').onclick=()=>{page++;showSlide()};render();
