// innerHTML로 읽어오기

function getInnerHTML1() {
    console.log(document.getElementById("test1").innerHTML);
    // console.log = 콘솔에 해당내용 찍겠다. 자바의 프린트구문같은거... 
    // getElementById = ()안 특정내용을 찾겠다 
    
    // 전체해석 : 콘솔창에 도큐먼트형식으로 test1의 내용을 
    //            innerHTML형식 으로 찾겠다.
}


// innerHTML로 변경하기(태그, 속성 해석됨)
function setInnerHTML1() {
    const t1 = document.getElementById("test1");
    // const = 상수 (변할 수 없는 수)
    // t1 = 변수

    t1.innerHTML = "<b class='red'> 변경된 <br><br> 내용입니다.</b>";
}


// innerHTML 응용
function add() {
    // 1) id속성 값이 "area1"인 요소를 얻어와서 변수(변수명 : area1)에 저장
    const area1 = document.getElementById("area1");

    // 2) area1 요소의 이전 내용에 새로운 내용을 누적
    area1.innerHTML += "<div class='area1-box'></div>"
}



//innerText로 읽어오기  (텍스트만 출력됨)
const t2 = document.getElementById("test2");  // 전역변수


function getInnerText1() {
    // console.log(document.getElementById("test2").innerText);
    console.log(t2.innerText);   // 지역변수
}


// innerText로 변경하기 
function setInnerText1() {
    //const t2 = document.getElementById("test2".innerText);//

    t2.innerText = "<b class='red'> 변경된 <br><br> 내용입니다.</b>";
}


// confirm
/*
function fnConfirm() {
    window.confirm("넌 kh 학생이니?");
 } */


// confirm
function fnConfirm() {
    const qes = confirm("배경색을 분홍색으로 바꾸시겠습니까?");

    if (qes) {
        document.getElementById("confirmTest").style.backgroundColor = "pink";
    }
}


// prompt
function fnPrompt() {
    const input = prompt("변경할 버튼명을 입력하세요");

    // input에 입력한값 or null값 들어올 수 있음
    if(input != null) {
        document.getElementById("promptTest").innerText = input;
    
    } else {
        alert("취소되었습니다.");
    }
}