const db=firebase.firestore();
const table=document.querySelector('#tbresult');
const form=document.querySelector('#addForm');


// document.getElementById("myInput1").onsearch = function() {myFunction()};


function myFunction() {
 
  var x = document.getElementById("myInput1");
//   document.getElementById("demo").innerHTML = "You are searching for: " + x.value;
//   console.log(x.value);
  if(x.value==""){
    location.reload();
}else{
    db.collection('user').where('ชื่อ', '==',x.value).get().then((snapshot)=>{
    snapshot.forEach(doc=>{
        // console.log(doc.data());
        showData(doc);
        
       
    });
    });
    x.value="";

}

}

form.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    db.collection('user').add({
        ชื่อ:form.nameuser.value,
        ชื่อคลินิก:form.name.value,
        นัดหมาย:form.appoint.value,
        บันทึกอื่นๆ:form.save.value,
        วันเดือนปี:form.date.value,
        เวลา:form.time.value
    });
   
    form.nameuser.value='';
    form.name.value='';
    form.appoint.value='';
    form.save.value='';
    form.date.value='';
    form.time.value='';

});






function showData(doc){
    var row=table.insertRow(1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);

    cell1.innerHTML=doc.data().ชื่อ;
    cell2.innerHTML=doc.data().ชื่อคลินิก;
    cell3.innerHTML=doc.data().นัดหมาย;
    cell4.innerHTML=doc.data().บันทึกอื่นๆ;
    cell5.innerHTML=doc.data().วันเดือนปี;
    cell6.innerHTML=doc.data().เวลา;
    

}




