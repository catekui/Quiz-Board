function totalScore (){
    var question1=document.getElementsByName("question1");
    var question2=document.getElementsByName("question2");
    var question3=document.getElementsByName("question3");
    var question4=document.getElementsByName("question4");
    var question5=document.getElementsByName("question5");
    var score=0;


    for (var i=0, length=question1.length;i<length;i++){
        if(question1[i].checked) {
            var ans1=question1(i).value
            if(question1[i].value==="c")
                {score+=20
                }
        }
    }

    for (var i=0, length=question2.length;i<length;i++){
        if(question2[i].checked) {
            var ans2=question2(i).value
            if(question2[i].value==="b")
            {score+=20
            }
        }
    }

    for (var i=0, length=question3.length;i<length;i++){
        if(question3[i].checked) {
            var ans3=question3(i).value
            if(question3[i].value==="a")
            {score+=20
            }
        }
    }

    for (var i=0, length=question4.length;i<length;i++) {
        if(question4[i].checked) {
            var ans4=question4(i).value
            if(question4[i].value==="b")
            {score+=20
            }
        }
    }

    

}