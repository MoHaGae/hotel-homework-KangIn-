var total = 40;
var hotel = [];
var temp = "yes";
var reserved = 0;
var nowData = document.getElementById("resRoom");

function makeHotel(situation){    //호텔 total만큼 방을 생성
    this.situation = situation;
}
function check(){     //예약된 수를 파악하는 함수
    for(var k=0 ; k<total ; k++){
        if(hotel[k].situation == "yes") {
            reserved++;
        }
    }
}
function reservation(){    //button onclick이 되면 예약함수 시작
    if(nowData.value > total || nowData.value<1)
        return alert("1이상 40이하를 입력하세요");
    for(var i=0;i<total;i++){   //호텔 객체 40개 생성
        hotel[i] = new makeHotel("no")
    }
    for(var j=0 ; j<nowData.value ; j++){  // 입력 받은 수(nowData.value) 만큼 예약함
        if(j<nowData.value){
            hotel[j].situation = "yes";     
        }
    }
    check();    //예약된 수를 파악
    data.innerHTML= reserved + "가 예약됨"
    curSituation.innerHTML = "상황 : " + reserved + "/40"
    for(var i=0; i<total ; i++)
        console.log(hotel[i].situation);
    //다시 초기화
    for(var i=0; i<total ; i++)
        hotel[i].situation = "no";
    reserved=0;    
}
