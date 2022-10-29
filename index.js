const quiz = [
	{
		question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
		answers: [
			'スーファミ',
			'PS2',
			'switch',
			'DS'
		],
		correct: 'DS'
	},{
		question: '糸井重里が企画に関わった、任天堂の看板ゲームは？',
		answers: [
			'MOTHER2',
			'スーパーマリオブラザーズ',
			'星のカービィ',
			'ロックマンエグゼ',
		],
		correct: 'MOTHER2'
	},{
		question: 'ファイナルファンタジーⅦの主人公は誰？',
		answers: [
			'クラウド',
			'スコール',
			'ジタン',
			'セシル'
		],
		correct: 'クラウド'
	},
];
const quizLengh = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
	document.getElementById('js-question').textContent = quiz[quizIndex].question;
	let buttonIndex = 0;
	while(buttonIndex < buttonLength) {
		$button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
		buttonIndex++;
	}
}
setupQuiz();

const clickHandler = (e) => {
	if(quiz[quizIndex].correct === e.target.textContent) {
		alert('正解！');
		score++;
	} else {
		alert('不正解！');
	}

	quizIndex++;

	if(quizIndex < quizLengh) {
		setupQuiz();
	} else {
		alert('終了！あなたの正解数は' + score + '/' + quizLengh + 'です!');
	}
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
	$button[handlerIndex].addEventListener("click", (e) => {
		clickHandler(e);
	});
	handlerIndex++;
}