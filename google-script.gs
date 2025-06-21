function doPost(e) {
  const sheet = SpreadsheetApp.openById("TON_ID_FEUILLE").getSheetByName("Feuille1");

  sheet.appendRow([
    new Date(),
    e.parameter.Nom,
    e.parameter.Email,
    e.parameter.Message
  ]);

  return ContentService.createTextOutput("Message reçu");
}
