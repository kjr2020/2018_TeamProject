function Lecture(name, time, prof, num){
  this.name = name;
  this.time = time;
  this.prof = prof;
  this.num = num;
}
// 기초 교양 : 39개
let lecture = [
  new Lecture("강의 1", "mon_09_11/wed_10_11", "Jang", "1000"),
  new Lecture("강의 2", "tue_10_12/thu_12_13", "Jang", "1001"),
  new Lecture("강의 3", "mon_14_15/wed_14_16", "Jang", "1002"),
  new Lecture("강의 4", "tue_13_16", "Jang", "1003"),
  new Lecture("강의 5", "fri_09_12", "Jang", "1004"),
  new Lecture("강의 6", "mon_09_11/wed_10_11", "Jang", "1000"),
  new Lecture("강의 7", "tue_10_12/thu_12_13", "Jang", "1001"),
  new Lecture("강의 8", "mon_14_15/wed_14_16", "Jang", "1002"),
  new Lecture("강의 9", "tue_13_16", "Jang", "1003"),
  new Lecture("강의 10", "fri_09_12", "Jang", "1004"),
  new Lecture("강의 11", "mon_09_11/wed_10_11", "Jang", "1000"),
  new Lecture("강의 12", "tue_10_12/thu_12_13", "Jang", "1001"),
  new Lecture("강의 13", "mon_14_15/wed_14_16", "Jang", "1002"),
  new Lecture("강의 14", "tue_13_16", "Jang", "1003"),
  new Lecture("강의 15", "fri_09_12", "Jang", "1004"),
  new Lecture("강의 16", "mon_09_11/wed_10_11", "Jang", "1000"),
  new Lecture("강의 17", "tue_10_12/thu_12_13", "Jang", "1001"),
  new Lecture("강의 18", "mon_14_15/wed_14_16", "Jang", "1002"),
  new Lecture("강의 19", "tue_13_16", "Jang", "1003"),
  new Lecture("강의 20", "fri_09_12", "Jang", "1004"),
  new Lecture("강의 21", "mon_09_11/wed_10_11", "Jang", "1000"),
  new Lecture("강의 22", "tue_10_12/thu_12_13", "Jang", "1001"),
  new Lecture("강의 23", "mon_14_15/wed_14_16", "Jang", "1002"),
  new Lecture("강의 24", "tue_13_16", "Jang", "1003"),
  new Lecture("강의 25", "fri_09_12", "Jang", "1004"),
  new Lecture("강의 26", "mon_09_11/wed_10_11", "Jang", "1000"),
  new Lecture("강의 27", "tue_10_12/thu_12_13", "Jang", "1001"),
  new Lecture("강의 28", "mon_14_15/wed_14_16", "Jang", "1002"),
  new Lecture("강의 29", "tue_13_16", "Jang", "1003"),
  new Lecture("강의 30", "fri_09_12", "Jang", "1004"),
  new Lecture("강의 31", "mon_09_11/wed_10_11", "Jang", "1000"),
  new Lecture("강의 32", "tue_10_12/thu_12_13", "Jang", "1001"),
  new Lecture("강의 33", "mon_14_15/wed_14_16", "Jang", "1002"),
  new Lecture("강의 34", "tue_13_16", "Jang", "1003"),
  new Lecture("강의 35", "fri_09_12", "Jang", "1004"),
  new Lecture("강의 36", "mon_09_11/wed_10_11", "Jang", "1000"),
  new Lecture("강의 37", "tue_10_12/thu_12_13", "Jang", "1001"),
  new Lecture("강의 38", "mon_14_15/wed_14_16", "Jang", "1002"),
  new Lecture("강의 39", "tue_13_16", "Jang", "1003"),
]

let optionFunc = [
  function(){alert("Mon");},
  function(){alert("Tue");},
  function(){alert("Wed");},
  function(){alert("Thu");},
  function(){alert("Fri");},
  function(){alert("점심시간");},
  function(){alert("9시 이후");},
  function(){alert("10시 이후");},
  function(){alert("11시 이후");},
  function(){alert("12시 이후");},
  function(){alert("15시 이후를 원해");},
  function(){alert("16시 이후를 원해");},
  function(){alert("17시 이후를 원해");},
  function(){alert("18시 이후를 원해");},
  function(){alert("Jang 교수님");},
  function(){alert("Yong 교수님");},
  function(){alert("Han 교수님");},
]

let checkCollection = {
  lecture  : {
    name    : new Array(),
    checked : new Array(),
  },
  option   : {
    name    : new Array(),
    checked : new Array(),
  },
  collectLect : function(str, ck){
    this.lecture.name.push(str);
    this.lecture.checked.push(ck);
  },
  collectOpt  : function(str, ck){
    this.option.name.push(str);
    this.option.checked.push(ck);
  },
  sendData : function(){
    alert("checkCollection의 자료들을 데이터베이스에 넘겨주는 함수.");
  },
  check1 : function(){
    for(let i = 0; i < this.lecture.name.length; i++){
      alert(this.lecture.name[i]+"와 "+this.lecture.checked[i]+"가 컨테이너에 저장되었습니다.");
    }
  },
  check2 : function(){
    for(let i = 0; i < this.option.name.length; i++){
      alert(this.option.name[i]+"와 "+this.option.checked[i]+"가 컨테이너에 저장되었습니다.");
    }
  },
}
