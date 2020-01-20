var router = require("express").Router();
var request = require('request');

router.get("/",(req, res) => {

  //外部APIよりクイズを取得
  var quizzes = {
    url: 'https://opentdb.com/api.php?amount=10&type=multiple',
    method: 'GET',
    json: true
  }
  // 問題数を初期化
  let i = 0;
//index.ejsにjsonファイルを渡す。
  request(quizzes, function (error, response, body) {
    console.log(body.results[i]);
    //シャフル関数
    const shuffle = arr => {
      for(let i = arr.length - 1; i >0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[j],arr[i]] = [arr[i],arr[j]]
      }
      return arr;
    }
    //選択肢に正解を追加
    const answers = body.results[i].incorrect_answers;
    answers.push(body.results[i].correct_answer);

    //answers配列をシャッフル
    let shuffleAnswers = shuffle(answers);

    // index.ejsにデータを渡す
    res.render("index.ejs", {
      quiz: body.results[i],
      answers: shuffleAnswers
    });
  });
});
module.exports = router;