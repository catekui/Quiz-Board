function check () {
    var a=0
    var q1=document.Quiz.question1.value;
    var q2=document.Quiz.question2.value;
    var q3=document.Quiz.question3.value;
    var q4=document.Quiz.question4.value;
    var q5=document.Quiz.question5.value;



    if (q1=="script") {a++};
    if (q2=="true") {a++}
    if (q3=="undefined") {a++};
    if (q4=="Scripting") {a++};
    if (q5=="italics()") {a++};

    document.write(a);




}