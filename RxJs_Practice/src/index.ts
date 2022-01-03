import { Observable, Subject, BehaviorSubject  } from 'rxjs';

const subject = new BehaviorSubject(123);

var a = subject.subscribe(console.log);  //a 감시자, subscribe를 통해 콜백 행동  
var b = subject.subscribe(console.log);  //b 감시자, subscribe를 통해 콜백 행동
subject.next(456);   //감시중인 a, b에서 456 2번출력
var c = subject.subscribe(console.log);  //새로운 c 감시자, 저장된 데이터인 456 출력
subject.next(789);  //a, b, c가 각각 1번씩 출력

function addItem(val:any){
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node)
}