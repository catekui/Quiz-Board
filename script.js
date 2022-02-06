function check (){
    var a=0;
    var question1=document.quiz.question1.value;
    var question2=document.quiz.question1.value;
    var question3=document.quiz.question1.value;
    var question4=document.quiz.question1.value;
    var question5=document.quiz.question1.value;

    if (question1== "script") {a++}
    if (question2== "true") {a++}
    if (question3== "undefined") {a++}
    if (question4== "Scripting") {a++}
    if (question5== "italics") {a++}

    document.write(Your Score is )
}