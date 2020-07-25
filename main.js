'use strict';

const button1 = document.getElementById('button1');
const nextDestination = document.getElementById('next-destination-text');
const stations =['池袋','大塚','巣鴨','駒込','田端','西日暮里','日暮里','鶯谷','上野','御徒町','秋葉原','神田','東京','有楽町','新橋','浜松町','田町','高輪ゲートウェイ','品川','大崎','五反田','目黒','恵比寿','渋谷','原宿','代々木','新宿','新大久保','高田馬場','目白'];

console.log(nextDestination);

let n = 0;

button1.addEventListener('click',()=>{
  n =Math.floor(Math.random()*stations.length);
  console.log(n);
  
  nextDestination.textContent = stations[n];
  goal.textContent ="";
});


const button2 = document.getElementById('button2');
const saiShow = document.getElementById('sai-show');
const saiChild = document.querySelector('.sai-image');
const randomEventText = document.getElementById('random-event-text');
const randomEvent = {
  '遅延が発生！一駅戻る':-1,
  '通常運行。':0,
  '通常運行です。':0,
  '通常運行です':0,
  '寝過ごしてしまった！2駅進む':2,
  '急病人を助けた！3駅進む':3,
  '通常運行ですわ':0,
  '通常運行ですわ。':0,
  '通常運行':0,
  '通常運行なのです':0,
  '通常運行なのです。':0,
};

let nowPosition = 0;
const nowPositionText =document.getElementById('now-position-text');
const remainSquresText =document.getElementById('remain-squres-text');
const goal =document.getElementById('goal');

button2.addEventListener('click',()=>{
  let sai =Math.floor(Math.random()*6+1);
  const saiImage = sai + ".png";
  saiChild.src = "images/"+saiImage;
  
  let key =Object.keys(randomEvent);
  let randomEventN = Math.floor(Math.random()*key.length);
  
  // console.log(key);
  // console.log(randomEventN);
  randomEventText.textContent = key[randomEventN];
  
  console.log(randomEvent[key[randomEventN]]);

  let eventValue =  randomEvent[key[randomEventN]];
  
  nowPosition =  nowPosition + sai + eventValue;
  
  if(nowPosition >= 30){
    nowPosition -= 30;
  }
  
  // console.log(nowPosition);
  let nowPostionStation = stations[nowPosition];
  // console.log(nowPostionStation);
  nowPositionText.textContent = nowPostionStation;

  let remainSqures = n - nowPosition;

  if(remainSqures<0){
    remainSqures = remainSqures +30;
  } else if(remainSqures === 0){
    goal.textContent = "GOAL!!!"

  }
  console.log('残り'+remainSqures);
  
  remainSquresText.textContent = "目的地まで残り"+remainSqures+"駅";





});



