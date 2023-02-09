var a;//Global variable
    var b;
    var result=0; //Global variable
    var avg=0; //Global variable
    
    function Calculate()
    {
     a=parseInt(form1.txtNum1.value);
     b=parseInt(form1.txtNum2.value);
     result=a+b;
     avg = result/2;
    
    document.write("The Total is  :"+ "<b>" + result  +  "<b>" + "</br>");
    
    document.write("The Avg is  :"+ "<b>" + avg  +  "<b>" + "</br>");
    
    if(avg < 40)
    {
        document.write("The Grade is  :"+ "<b>" + "Fail"  +  "<b>" );
    
    }
    else if(avg < 50){
        document.write("The Grade is  :"+ "<b>" + "satisfy"  +  "<b>" );
    }
    else
    {
        document.write("The Grade is  :"+ "<b>" + "100"  +  "<b>" );
    }
    }