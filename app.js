function encrypt() {
  var plaintext = document.getElementById("plaintext").value;
  var key = parseInt(document.getElementById("key").value);

  var encryptedText = "";

  for (var i = 0; i < plaintext.length; i++) {
    var charCode = plaintext.charAt(i);

    if (charCode.match(/[a-z]/i)) {
      let shift = key % 26;
      if (charCode === charCode.toUpperCase()) {
        encryptedText = " Enter The Text in LowerCase";

        break;
      } else {
        // This condtion will run  i.e from  a to z
        encryptedText += String.fromCharCode(
          ((charCode.charCodeAt(0) - 97 + shift) % 26) + 97
        );
      }
    } else {
      encryptedText = " Special Character is not allowed !";

      break;
    }
  }

  document.getElementById("encrypted").innerText = encryptedText;
}

function decrypt() {
  var encryptedText = document.getElementById("encrypted").innerText;
  var key = parseInt(document.getElementById("key").value);

  var decryptedText = "";

  for (var i = 0; i < encryptedText.length; i++) {
    var charCode = encryptedText.charAt(i);

    if (charCode.match(/[a-z]/i)) {
      let shift = key % 26;
      if (charCode === charCode.toUpperCase()) {
        decryptedText = " Please Enter the correct data in encryption field !";

        break;
      } else {
        decryptedText += String.fromCharCode(
          ((charCode.charCodeAt(0) - 97 - shift + 26) % 26) + 97
        );
      }
    } else {
      decryptedText = " Please Enter the correct data in encryption field !";

      break;
    }
  }

  document.getElementById("decrypted").innerText = decryptedText;
}
