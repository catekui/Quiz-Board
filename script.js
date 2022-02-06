function check () {
    var a=0
    var question1=document.Quiz.question1.value;
    var question2=document.Quiz.question2.value;
    var question3=document.Quiz.question3.value;
    var question4=document.Quiz.question4.value;
    var question5=document.Quiz.question5.value;



    if (question1=="script") {a++};
    if (question2=="true") {a++}
    if (question3=="undefined") {a++};
    if (question4=="Scripting") {a++};
    if (question5=="italics()") {a++};

    document.write(a);




}