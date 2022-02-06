function check () {
    var a=0
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;

    if (q1=="script") {a++};
    if (q2=="true") {a++}
    if (q3=="undefined") {a++};
    if (q4=="Scripting") {a++};
    if (q5=="italics()") {a++};

    quiz.style.display="none";
    var final=a*20;
    document.write("Your Score is "+final+" %")

    if (final>=80) {
        document.write(" Excellent") 
    }
    else if (final>=60 && final<80) {
        document.write(" You have scored fairly")
    }
    else if (final<50) {
        document.write(" You have scored poorly. Please repeat the test")
    }
    
    

   



}