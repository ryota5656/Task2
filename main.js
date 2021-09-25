//おまじない
window.addEventListener('DOMContentLoaded', function(){

  //初期ボタン
  $(".start").prop("disabled",false);
  $(".stop").prop("disabled",true);
  $(".reset").prop("disabled",true);
  
  var elapsedTimeMillisecond = 0; 
  var elapsedTimeSecond = 0;
  var elapsedTimeMinute = 0;
  var elapsedTimeHour = 0;
  
  //０を代入した変数をHTMLに代入、それを関数に代入（文字を少なくすため）
  function writeMillsecondTime(){$("#millisecond").html(elapsedTimeMillisecond);}
  function writeSecondTime(){$("#second").html(elapsedTimeSecond);}
  function writeMinuteTime(){$("#minute").html(elapsedTimeMinute);}
  function writeHourTime(){$("#hour").html(elapsedTimeHour);}
  
  //初期タイムの時間（０）
  writeMillsecondTime();
  writeSecondTime();
  writeMinuteTime();
  writeHourTime();
  
  //スタート
  $(".start").click(function(){
    //スタートをした時のボタン
    $(this).prop("disabled",true);
    $(".stop").prop("disabled",false);
    $(".reset").prop("disabled",false);
    
    //0.1秒ごとにミリ秒を１づつカウントし、10になったら0にする
    millisecondId = setInterval(function(){
     elapsedTimeMillisecond++;
     if(elapsedTimeMillisecond === 10){
       elapsedTimeMillisecond =0;
     };
     writeMillsecondTime();
    },100);
    
    secondId = setInterval(function(){
     elapsedTimeSecond++;
     if(elapsedTimeSecond === 10){
       elapsedTimeSecond =0;
     };
     writeSecondTime();
    },1000);
    
    minuteId = setInterval(function(){
     elapsedTimeMinute++;
     if(elapsedTimeMinute === 10){
       elapsedTimeMinute =0;
     };
     writeMinuteTime();
    },10000);
    
    hourId = setInterval(function(){
     elapsedTimeHour++;
     if(elapsedTimeHour === 10){
       elapsedTimeHour =0;
     };
     writeHourTime();
    },100000);
  });
  
  
　//ストップ
　//ストップ押した時のボタン
  $(".stop").click(function(){
    $(this).prop("disabled",true);
    $(".start").prop("disabled",false);
    $(".reset").prop("disabled",false);
    
    //ストップ押した時の各時間を取得
    clearInterval(millisecondId);
    clearInterval(secondId);
    clearInterval(minuteId);
    clearInterval(hourId);
  });
  
  
　//リセット
　//リセット押した時のボタン
  $(".reset").click(function(){
    $(this).prop("disabled",true);
    $(".start").prop("disabled",false);
    $(".stop").prop("disabled",true);
    
    //各時間に０を代入し表示
    clearInterval(millisecondId);
    elapsedTimeMillisecond = 0;
    writeMillsecondTime();
    
    clearInterval(secondId);
    elapsedTimeSecond = 0;
    writeSecondTime();
    
    clearInterval(minuteId);
    elapsedTimeMinute = 0;
    writeMinuteTime();
    
    clearInterval(hourId);
    elapsedTimeHour = 0;
    writeHourTime();
    
  });
});
