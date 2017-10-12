// All lines beyond the first one are to use iFrame rendering instead of default rendering. Makes the page load much faster
function doGet(e) {
  var t = HtmlService.createTemplateFromFile('index');
  var out = t.evaluate();
  out.setTitle('File Uploader Master Branch');
  out.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  return out;
}








function uploadFiles(form) {
// Uploads files to the main dropbox folder
   var folder = DriveApp.getFolderById("IDGOESHERE");
   var blob = form.myFile;
   var file = folder.createFile(blob);
   file.setName(form.myName);
   file.setDescription(form.myName);


// Uploads files to a second Google Drive folder as a failsafe
// This doubles the file upload time, but I think it's worth it
    var folder2 = DriveApp.getFolderById("IDGOESHERE");
    var blob2 = form.myFile;
    var file2 = folder2.createFile(blob2);
    file2.setName(form.myName + " - BACKUP");
//  file2.setDescription(form.myName + " - BACKUP");
}