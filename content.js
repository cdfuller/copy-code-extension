// Function to create the copy button and add it to the code block
function addCopyButton(element) {
  // Create button
  const button = document.createElement("button");
  button.innerText = "Copy";
  button.className = "copy-button";

  // Add click event to copy the code
  button.addEventListener("click", () => {
    const code = element.innerText;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(() => {
        button.innerText = "Copied!";
        setTimeout(() => (button.innerText = "Copy"), 2000);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    } else {
      console.error('Clipboard API not available');
      alert('Clipboard API not available');
    }
  });

  // Position the button within the <pre> element
  const preElement = element.parentNode;
  preElement.style.position = 'relative'; // Ensure <pre> is relatively positioned
  preElement.appendChild(button);
}

// Find all <code> elements inside <pre> elements and add the copy button
document.querySelectorAll("pre > code").forEach(addCopyButton);
