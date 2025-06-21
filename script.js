document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const form = e.target;
  const data = new FormData(form);

  fetch("https://script.google.com/macros/s/TON_ID_SCRIPT/exec", {
    method: "POST",
    body: data
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById("form-response").textContent = "Message envoyé avec succès !";
    form.reset();
  })
  .catch(error => {
    document.getElementById("form-response").textContent = "Erreur lors de l'envoi.";
    console.error("Erreur:", error);
  });
});
