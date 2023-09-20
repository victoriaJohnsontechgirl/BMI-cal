function calculateBMI(){
    let height = document.getElementById("heightInput").value/100;
    let weight = document.getElementById("weightInput").value;


    // if(height.trim()==="" && weight.trim()===""){
    //     document.getElementById("BMI_value").innerHTML="pls enter your BMI";

    // }

    let BMIformular = weight / (height * height);
    document.getElementById("BMI_value").innerHTML=BMIformular;
  
    if(BMIformular<=18.5 && BMIformular<=24.9){
        document.getElementById("BMI_interpretation").innerHTML="Normal weight";
    }else if(BMIformular>=25.0 && BMIformular<=29.9){
        document.getElementById("BMI_interpretation").innerHTML="over weight";
    }else{
        document.getElementById("BMI_interpretation").innerHTML="obese";
    }

  
}


function Valuereset(){
    document.getElementById("heightInput").value="";
    document.getElementById("weightInput").value="";
    document.getElementById("BMI_interpretation").innerHTML="";
    document.getElementById("BMI_value").innerHTML="";

}

