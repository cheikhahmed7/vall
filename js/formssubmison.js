
      function submitForm() {
        // Reference to the form
        var form = document.getElementById("volunteer_apply_form");

        // Perform form submission using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action, true);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            // Form submission successful
            alert("Application successful!");
            // You can optionally reset or hide the form
            form.reset();
          } else {
            // Form submission failed
            alert("Error submitting application. Please try again.");
          }
        };

        // Prepare form data for submission
        var formData = new FormData(form);
        xhr.send(formData);
      }
   