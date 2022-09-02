function doGet() {
    return HtmlService.createTemplateFromFile('web').evaluate();
  }
  
  function obtenerDatosHTML(nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
  } 
  
  function obtenerContactos(){
    let hoja = SpreadsheetApp.openById('1Ki5yYaKSqow7bDviSJTRkW5EHb1YVUH2qMpDBDhRduo').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
  }
