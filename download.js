// download.js
document.addEventListener('DOMContentLoaded', function() {
    // Show the modal when the download button is clicked
    var downloadButton = document.getElementById("downloadButton");
    if (downloadButton) {
      downloadButton.addEventListener("click", function() {
        document.getElementById("downloadModal").style.display = "block";
      });
    }
  
    // When the user clicks "Download Selected"
    var confirmDownload = document.getElementById("confirmDownload");
    if (confirmDownload) {
      confirmDownload.addEventListener("click", function() {
        // Mapping file keys to their paths and default download names
        var files = {
          cv: {
            path: "Alexander Devlin - CV Oct23.pdf",
            name: "Alexander Devlin - CV.pdf"
          },
          appraisals: {
            path: "Alexander Devlin - Appraisals Oct23.pdf",
            name: "Alexander Devlin - Appraisals.pdf"
          }
        };
  
        var selector = document.getElementById("fileSelector");
        // Retrieve selected file keys
        var selectedOptions = Array.from(selector.selectedOptions).map(option => option.value);
  
        // Trigger downloads for each selected file
        selectedOptions.forEach(function(key) {
          if (files[key]) {
            var link = document.createElement("a");
            link.href = files[key].path;
            link.download = files[key].name;
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        });
  
        // Hide the modal after downloads
        document.getElementById("downloadModal").style.display = "none";
      });
    }
  
    // Hide the modal when the close icon is clicked
    var closeModal = document.getElementById("closeModal");
    if (closeModal) {
      closeModal.addEventListener("click", function() {
        document.getElementById("downloadModal").style.display = "none";
      });
    }
  });
  