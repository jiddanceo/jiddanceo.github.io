// Function
function contact() {
    let name = document.getElementById('Name').value;
    let email = document.getElementById('Email').value;
    let pesan = document.getElementById('Pesan').value;
    let subject = document.getElementById('Subject').value;

    //print PopUp
    swal("Pesan Terkirim",
        "\nNama : " + name +
        "\nEmail : " + email +
        "\nSubject : " + subject +
        "\nPesan Anda : " + pesan, "success");
}