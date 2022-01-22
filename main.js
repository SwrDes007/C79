student_array=[];
function submit(){
    name_1=document.getElementById("student_1").value;
    name_2=document.getElementById("student_2").value;
    name_3=document.getElementById("student_3").value;
    name_4=document.getElementById("student_4").value;
    name_5=document.getElementById("student_5").value;

    student_array.push(name_1);
    student_array.push(name_2);
    student_array.push(name_3);
    student_array.push(name_4);
    student_array.push(name_5);

    document.getElementById("display_name").innerHTML=student_array;
}

function sorting(){
student_array.sort();

document.getElementById("display_name").innerHTML=student_array;
}