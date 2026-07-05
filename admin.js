async function loadStudents(){

    const response=await fetch("http://localhost:5000/api/students");

    const students=await response.json();

    document.getElementById("total").innerHTML=students.length;

    let male=0;
    let female=0;
    let it=0;
    let cse=0;

    const table=document.getElementById("tableBody");

    table.innerHTML="";

    students.forEach(student=>{

        if(student.gender=="Male") male++;

        if(student.gender=="Female") female++;

        if(student.department=="IT") it++;

        if(student.department=="CSE") cse++;

        table.innerHTML+=`

        <tr>

        <td>${student.name}</td>

        <td>${student.gender}</td>

        <td>${student.department}</td>

        <td>${student.hobbies.join(", ")}</td>

        <td>${student.address}</td>

        <td>

        <button onclick="deleteStudent('${student._id}')">

        Delete

        </button>

        </td>

        </tr>

        `;

    });

    document.getElementById("male").innerHTML=male;

    document.getElementById("female").innerHTML=female;

    document.getElementById("it").innerHTML=it;

    document.getElementById("cse").innerHTML=cse;

}

async function deleteStudent(id){

    await fetch(`http://localhost:5000/api/students/${id}`,{

        method:"DELETE"

    });

    loadStudents();

}

function searchStudent(){

    let input=document.getElementById("search").value.toUpperCase();

    let tr=document.getElementById("tableBody").getElementsByTagName("tr");

    for(let i=0;i<tr.length;i++){

        let td=tr[i].getElementsByTagName("td")[0];

        if(td){

            let txt=td.textContent||td.innerText;

            if(txt.toUpperCase().indexOf(input)>-1){

                tr[i].style.display="";

            }

            else{

                tr[i].style.display="none";

            }

        }

    }

}

loadStudents();