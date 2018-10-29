// Set new default font family and font color to mimic Bootstrap's default styling

// For Curriculum

// 버튼 연동
let BtnSrc = document.getElementById("TestBtn");
// Lecture constructor
function Lecture(BtnSrc, name, professor, gpa, time,
IsChecked, LectureTime, LectureNum, grade){
  this.name = name;
  this.professor = professor;
  this.gpa = gpa;
  this.time = time;
  this.IsChecked = IsChecked;
  this.LectureTime = LectureTime;
  this.LectureNum = LectureNum;
  this.grade = grade;
  // SelectedData도 가져야 하지 않을까?
}

Lecture.prototype.SendData = function(/*이 객체에게 보냄*/){
  // if(객체가 일치하면) { 객체.ReceiveData(this) }
}

Lecture.prototype.ReceiveData = function(/*이 객체로부터 받는다*/){
  // this.linkedlist로 argument들을 정리
}

// Method which print all properties of Object
// Is this correct?
Lecture.prototype.all_properties = function(obj){
  return this.getOwnPropertyNames(obj);
}
