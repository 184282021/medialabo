let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

/////////////////// 課題3-2 はここから書き始めよう

console.log(list.g1.servise.name);
console.log(list.g1.title);


//
let s1 = document.querySelector('tbody#b1');



  
function sendRequest(){
  
  const Cha = document.getElementById('channel').value;//検索欄のチャンネル名の値を取得
  const Gan = document.getElementById('genre').value;//検索欄のジャンル名の値を取得

  //urlを指定
  let url='https://www.nishita-lab.org/web-contents/jsons/nhk/'+Cha+'-'+Gan+'-j.json';
  
  // 通信開始

  axios.get(url)
  .then(hantei)   // 通信成功
  .catch(showError)   // 通信失敗
  .then(finish);      // 通信の最後の処理
}




function hantei(resp) {
  const Cha = document.getElementById('channel').value;//検索欄のチャンネル名の値を取得
  const Gan = document.getElementById('genre').value;//検索欄のジャンル名の値を取得


    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

  let pyoso1 = document.querySelectorAll('td');//td要素を取得する
  for (let TD of pyoso1) {
    TD.remove();
  }
  let TR = document.querySelectorAll('tr');
  for (let T of TR) {
    T.remove();
  }
  





if(data===null){
  let aaa = document.createElement('p');
  aaa.textContent ='検索結果に合う番組はありませんでした.';
  s1.insertAdjacentElement('beforeend', aaa);
}else if(data.list[Cha]) {

    for (let n of data.list[Cha]) {

      if (n.genres.includes(Gan)) {
        let q1 = document.createElement('tr');
        let p1 = document.createElement('td');

        p1.textContent = n.start_time;
        s1.insertAdjacentElement('beforeend', q1);
        s1.insertAdjacentElement('beforeend', p1);

        let p2 = document.createElement('td');
        p2.textContent = n.end_time;
        s1.insertAdjacentElement('beforeend', p2);

        let p3 = document.createElement('td');
        p3.textContent = n.title;
        s1.insertAdjacentElement('beforeend', p3);

        let p4 = document.createElement('td');
        p4.textContent = n.subtitle;
        s1.insertAdjacentElement('beforeend', p4);

        let p5 = document.createElement('td');
        p5.textContent = n.content;
        s1.insertAdjacentElement('beforeend', p5);

        let p6 = document.createElement('td');
        p6.textContent = n.act;
        s1.insertAdjacentElement('beforeend', p6);

      }

    }

  }

  }




// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}


let b1 = document.querySelector('#print');
b1.addEventListener('click', sendRequest);
