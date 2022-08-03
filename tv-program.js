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

  /*let pro = data.list.g1[0].service.name;
  let s = document.querySelector('span#pro');
s.textContent = pro;
  let pra = data.list.g1[0].title;
  let d = document.querySelector('span#pra');
d.textContent = pra;*/
let bangumi;
let b = document.querySelector('#print');
b.addEventListener('click', kensaku);

function kensaku(){
  //URLを設定

  //ジャンル選び
  let i = document.querySelectorAll('input[name="janru"]');
  let o = document.querySelector('input[name="janru"]');
  let janru = o.value;
  //番組選び
  let p = document.querySelectorAll('input[name="bangumi"]');

  //if (typeof data.service.name === 'string') {
    //let chan = JSON.parse(data.service.name);
//}
  //let bangumi;
  for(let r of p){
    if(r.checked){
      bangumi = r.value;
    }
  }
  let url ='https://www.nishita-lab.org/web-contents/jsons/nhk/'+ bangumi +'-'+janru+'-'+'j.json';

  axios.get(url)
  .then(showResult)   // 通信成功
  .catch(showError)   // 通信失敗
  .then(finish);  

  console.log(janru);
  console.log(bangumi);
}

function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;
  
  //let i = document.querySelectorAll(data.list);
  //console.log(i.length);

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }
   
//if(typeof bangumi === "string"){
    //  bangumi = JSON.parse(bangumi);
//}

  // data をコンソールに出力
  console.log(data);
  
  if(bangumi === "e1"||bangumi === "g1"){
 for(let j = 0; j < 5; j++){
  if(bangumi === "e1"){
    //let pro = document.querySelector("data.list.e1["+ j +"].service.name");
    let pro = data.list.e1[j].service.name;
    console.log(pro);
  let s = document.querySelector('span#pro');
s.textContent = pro;
  let pra = data.list.e1[j].title;
  let d = document.querySelector('span#pra');
d.textContent = pra;
}else {
  let pro = data.list.g1[j].service.name;
  let s = document.querySelector('span#pro');
s.textContent = pro;
  let pra = data.list.g1[j].title;
  let d = document.querySelector('span#pra');
d.textContent = pra;
}
    }
  }

  // data.x を出力
  //console.log(data.x);
}

function showError(err){
  console.log(err);
}

function finish(){
  console.log('Ajax通信が終わりました');
}
