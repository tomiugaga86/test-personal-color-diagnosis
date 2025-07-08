// 診断データ
const questions = [
    {
        id: 1,
        question: "あなたの肌の色合いは？",
        options: [
            { id: "a", text: "明るくて温かみのある肌色", score: { spring: 3, summer: 1, autumn: 2, winter: 0 } },
            { id: "b", text: "ピンクがかった肌色", score: { spring: 1, summer: 3, autumn: 0, winter: 2 } },
            { id: "c", text: "黄色みがかった肌色", score: { spring: 2, summer: 0, autumn: 3, winter: 1 } },
            { id: "d", text: "青みがかった肌色", score: { spring: 0, summer: 2, autumn: 1, winter: 3 } }
        ]
    },
    {
        id: 2,
        question: "あなたの目の色は？",
        options: [
            { id: "a", text: "明るい茶色やハニー色", score: { spring: 3, summer: 1, autumn: 2, winter: 0 } },
            { id: "b", text: "グレーがかった茶色", score: { spring: 1, summer: 3, autumn: 0, winter: 2 } },
            { id: "c", text: "深い茶色や黒", score: { spring: 0, summer: 1, autumn: 3, winter: 2 } },
            { id: "d", text: "青やグレー", score: { spring: 1, summer: 2, autumn: 0, winter: 3 } }
        ]
    },
    {
        id: 3,
        question: "あなたの髪の色は？",
        options: [
            { id: "a", text: "明るい茶色やゴールド", score: { spring: 3, summer: 1, autumn: 2, winter: 0 } },
            { id: "b", text: "アッシュがかった茶色", score: { spring: 1, summer: 3, autumn: 0, winter: 2 } },
            { id: "c", text: "深い茶色や黒", score: { spring: 0, summer: 1, autumn: 3, winter: 2 } },
            { id: "d", text: "黒やダークブラウン", score: { spring: 0, summer: 1, autumn: 2, winter: 3 } }
        ]
    },
    {
        id: 4,
        question: "日焼けした時の肌の色は？",
        options: [
            { id: "a", text: "きれいな小麦色になる", score: { spring: 3, summer: 1, autumn: 2, winter: 0 } },
            { id: "b", text: "赤くなってから小麦色", score: { spring: 1, summer: 3, autumn: 0, winter: 2 } },
            { id: "c", text: "すぐに小麦色になる", score: { spring: 2, summer: 0, autumn: 3, winter: 1 } },
            { id: "d", text: "あまり日焼けしない", score: { spring: 0, summer: 2, autumn: 1, winter: 3 } }
        ]
    },
    {
        id: 5,
        question: "あなたが似合うと思う色は？",
        options: [
            { id: "a", text: "明るいピンクやイエロー", score: { spring: 3, summer: 1, autumn: 0, winter: 1 } },
            { id: "b", text: "パステルカラー", score: { spring: 1, summer: 3, autumn: 0, winter: 1 } },
            { id: "c", text: "アースカラー", score: { spring: 0, summer: 1, autumn: 3, winter: 1 } },
            { id: "d", text: "ビビッドカラー", score: { spring: 1, summer: 0, autumn: 1, winter: 3 } }
        ]
    },
    {
        id: 6,
        question: "メイクでよく使う色は？",
        options: [
            { id: "a", text: "ピーチやコーラル", score: { spring: 3, summer: 1, autumn: 2, winter: 0 } },
            { id: "b", text: "ピンクやローズ", score: { spring: 1, summer: 3, autumn: 0, winter: 2 } },
            { id: "c", text: "ブラウンやテラコッタ", score: { spring: 0, summer: 1, autumn: 3, winter: 1 } },
            { id: "d", text: "レッドやワインレッド", score: { spring: 1, summer: 0, autumn: 2, winter: 3 } }
        ]
    },
    {
        id: 7,
        question: "似合うと思うアクセサリーは？",
        options: [
            { id: "a", text: "ゴールド", score: { spring: 3, summer: 0, autumn: 2, winter: 1 } },
            { id: "b", text: "シルバー", score: { spring: 0, summer: 3, autumn: 1, winter: 2 } },
            { id: "c", text: "アンティークゴールド", score: { spring: 1, summer: 0, autumn: 3, winter: 1 } },
            { id: "d", text: "プラチナ", score: { spring: 0, summer: 2, autumn: 1, winter: 3 } }
        ]
    },
    {
        id: 8,
        question: "よく着る服の色は？",
        options: [
            { id: "a", text: "明るい色やパステル", score: { spring: 3, summer: 2, autumn: 0, winter: 1 } },
            { id: "b", text: "グレーやネイビー", score: { spring: 0, summer: 3, autumn: 1, winter: 2 } },
            { id: "c", text: "ベージュやブラウン", score: { spring: 1, summer: 0, autumn: 3, winter: 1 } },
            { id: "d", text: "黒や白", score: { spring: 0, summer: 1, autumn: 1, winter: 3 } }
        ]
    },
    {
        id: 9,
        question: "あなたの印象は？",
        options: [
            { id: "a", text: "明るくて親しみやすい", score: { spring: 3, summer: 2, autumn: 1, winter: 0 } },
            { id: "b", text: "上品で落ち着いている", score: { spring: 1, summer: 3, autumn: 2, winter: 1 } },
            { id: "c", text: "自然で温かみがある", score: { spring: 2, summer: 1, autumn: 3, winter: 0 } },
            { id: "d", text: "シャープで洗練されている", score: { spring: 0, summer: 1, autumn: 1, winter: 3 } }
        ]
    },
    {
        id: 10,
        question: "好きな季節は？",
        options: [
            { id: "a", text: "春", score: { spring: 3, summer: 1, autumn: 1, winter: 0 } },
            { id: "b", text: "夏", score: { spring: 1, summer: 3, autumn: 0, winter: 1 } },
            { id: "c", text: "秋", score: { spring: 1, summer: 0, autumn: 3, winter: 1 } },
            { id: "d", text: "冬", score: { spring: 0, summer: 1, autumn: 1, winter: 3 } }
        ]
    }
];

// 結果データ
const results = {
    spring: {
        name: "スプリング",
        description: "明るく温かみのある春タイプです。明るい色やパステルカラーが似合います。",
        colors: ["#FFB6C1", "#FFA07A", "#FFD700", "#98FB98", "#87CEEB", "#DDA0DD"],
        fashionTips: [
            "明るいピンクやイエローが似合います",
            "パステルカラーを積極的に取り入れましょう",
            "ゴールドのアクセサリーが映えます",
            "自然なメイクで明るい印象を演出"
        ]
    },
    summer: {
        name: "サマー",
        description: "上品で落ち着いた夏タイプです。パステルカラーやグレーが似合います。",
        colors: ["#87CEEB", "#DDA0DD", "#98FB98", "#F0E68C", "#D8BFD8", "#B0C4DE"],
        fashionTips: [
            "パステルカラーやグレーが似合います",
            "シルバーのアクセサリーが映えます",
            "上品で落ち着いた色合いを選びましょう",
            "ナチュラルなメイクで清潔感を演出"
        ]
    },
    autumn: {
        name: "オータム",
        description: "温かみのある秋タイプです。アースカラーやテラコッタが似合います。",
        colors: ["#D2691E", "#CD853F", "#8B4513", "#A0522D", "#DEB887", "#F4A460"],
        fashionTips: [
            "アースカラーやテラコッタが似合います",
            "アンティークゴールドのアクセサリーが映えます",
            "温かみのある色合いを選びましょう",
            "ナチュラルなメイクで温かみを演出"
        ]
    },
    winter: {
        name: "ウィンター",
        description: "シャープで洗練された冬タイプです。ビビッドカラーやモノトーンが似合います。",
        colors: ["#4169E1", "#9370DB", "#20B2AA", "#DC143C", "#000080", "#8B0000"],
        fashionTips: [
            "ビビッドカラーやモノトーンが似合います",
            "プラチナのアクセサリーが映えます",
            "シャープで洗練された色合いを選びましょう",
            "ビビッドなメイクで印象的な演出"
        ]
    }
};

// アプリケーション状態
let currentQuestionIndex = 0;
let answers = [];
let scores = { spring: 0, summer: 0, autumn: 0, winter: 0 };

// DOM要素
const landingPage = document.getElementById('landing-page');
const questionPage = document.getElementById('question-page');
const resultPage = document.getElementById('result-page');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const questionTitle = document.getElementById('question-title');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const resultContent = document.getElementById('result-content');
const retakeBtn = document.getElementById('retake-btn');
const homeBtn = document.getElementById('home-btn');
const twitterShareBtn = document.getElementById('twitter-share');
const lineShareBtn = document.getElementById('line-share');
const copyUrlBtn = document.getElementById('copy-url');

// ページ遷移関数
function showPage(pageElement) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    pageElement.classList.add('active');
}

// 診断開始
startBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    answers = [];
    scores = { spring: 0, summer: 0, autumn: 0, winter: 0 };
    showQuestion();
    showPage(questionPage);
});

// 設問表示
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionTitle.textContent = question.question;
    
    // 進捗更新
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
    
    // 選択肢生成
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `<div class="option-text">${option.text}</div>`;
        
        // 既に回答済みの場合、選択状態を復元
        if (answers[currentQuestionIndex] === option.id) {
            optionElement.classList.add('selected');
        }
        
        optionElement.addEventListener('click', () => selectOption(option.id));
        optionsContainer.appendChild(optionElement);
    });
    
    // ナビゲーションボタン更新
    updateNavigationButtons();
}

// 選択肢選択
function selectOption(optionId) {
    // 既存の選択をクリア
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // 新しい選択をマーク
    event.target.closest('.option').classList.add('selected');
    
    // 回答を保存
    answers[currentQuestionIndex] = optionId;
    
    // 次へボタンを有効化
    nextBtn.disabled = false;
}

// ナビゲーションボタン更新
function updateNavigationButtons() {
    prevBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    nextBtn.disabled = answers[currentQuestionIndex] === undefined;
}

// 前の問題へ
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});

// 次の問題へ
nextBtn.addEventListener('click', () => {
    if (answers[currentQuestionIndex] !== undefined) {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            calculateResult();
            showResult();
            showPage(resultPage);
        }
    }
});

// 結果計算
function calculateResult() {
    // スコア計算
    answers.forEach((answer, index) => {
        const question = questions[index];
        const selectedOption = question.options.find(option => option.id === answer);
        if (selectedOption) {
            scores.spring += selectedOption.score.spring;
            scores.summer += selectedOption.score.summer;
            scores.autumn += selectedOption.score.autumn;
            scores.winter += selectedOption.score.winter;
        }
    });
    
    // 最高スコアのタイプを決定
    const maxScore = Math.max(scores.spring, scores.summer, scores.autumn, scores.winter);
    const resultType = Object.keys(scores).find(key => scores[key] === maxScore);
    
    return resultType;
}

// 結果表示
function showResult() {
    const resultType = calculateResult();
    const result = results[resultType];
    
    resultContent.innerHTML = `
        <div class="result-type ${resultType}">${result.name}</div>
        <p class="result-description">${result.description}</p>
        
        <div class="color-palette">
            ${result.colors.map(color => `<div class="color-sample" style="background-color: ${color}"></div>`).join('')}
        </div>
        
        <div class="fashion-tips">
            <h4>ファッションアドバイス</h4>
            <ul>
                ${result.fashionTips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        </div>
    `;
    
    // 結果をローカルストレージに保存
    localStorage.setItem('personalColorResult', JSON.stringify({
        type: resultType,
        scores: scores,
        timestamp: new Date().toISOString()
    }));
}

// 再診断
retakeBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    answers = [];
    scores = { spring: 0, summer: 0, autumn: 0, winter: 0 };
    showQuestion();
    showPage(questionPage);
});

// ホームに戻る
homeBtn.addEventListener('click', () => {
    showPage(landingPage);
});

// シェア機能
twitterShareBtn.addEventListener('click', () => {
    const resultType = calculateResult();
    const result = results[resultType];
    const text = `私のパーソナルカラーは${result.name}でした！${result.description}`;
    const url = window.location.href;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
});

lineShareBtn.addEventListener('click', () => {
    const url = window.location.href;
    const shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
});

copyUrlBtn.addEventListener('click', () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('URLをコピーしました！');
    }).catch(() => {
        // フォールバック
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('URLをコピーしました！');
    });
});

// ブラウザの戻るボタン対応
window.addEventListener('popstate', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    } else {
        showPage(landingPage);
    }
});

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    // 保存された結果がある場合は表示
    const savedResult = localStorage.getItem('personalColorResult');
    if (savedResult) {
        const result = JSON.parse(savedResult);
        scores = result.scores;
        showResult();
        showPage(resultPage);
    }
}); 