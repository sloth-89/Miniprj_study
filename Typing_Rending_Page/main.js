let target = document.querySelector("#dynamic");


function randomSrting(){
    // 1.
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
    // 소수점을 제거(floor)하고 랜덤한 숫자(random) 반환
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    // 위의 변수로를 한 글자씩 잘라 새로운 배열을 만든다.
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

// 4.
// 타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomSrting());
}

// 3. 
// 한글자씩 텍스트 출력 함수
function dynamic(randomArr){ // randomArr이라는 매개변수

    console.log(randomArr);

    if(randomArr.length > 0){
        // 지정 배열의 앞부분부터 순서대로 빼서 출력한다.
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);            
        }, 80)
    } else {
        setTimeout(resetTyping, 2000);
    }
}

dynamic(randomSrting());

console.log(selectString);
console.log(selectStringArr);

// 2.
// 커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);