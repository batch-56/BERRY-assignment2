function myFunction(event){
    event.preventDefault();

    const inputNama=document.getElementById("input-nama");
    document.getElementById("name").innerHTML= inputNama.value;

    const inputRole=document.getElementById("input-role");
    document.getElementById("work").innerHTML= inputRole.value;

    const inputAvail=document.getElementById("input-avail");
    document.getElementById("avail").innerHTML= inputAvail.value;

    const inputUsia=document.getElementById("input-usia");
    document.getElementById("usia").innerHTML= inputUsia.value;

    const inputLokasi=document.getElementById("input-loc");
    document.getElementById("lokasi").innerHTML= inputLokasi.value;

    const inputExpr=document.getElementById("input-expr");
    document.getElementById("expr").innerHTML= inputExpr.value;

    const inputMail=document.getElementById("input-mail");
    document.getElementById("mail").innerHTML= inputMail.value;

    console.log("name")
    console.log("work")
    console.log("avail")
    console.log("usia")
    console.log("lokasi")
    console.log("expr")
    console.log("mail")
}