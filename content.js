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

  // Create a container for the button
  const container = document.createElement("div");
  container.className = "code-container";

  // Wrap the <code> element inside the container
  element.parentNode.insertBefore(container, element);
  container.appendChild(element);
  container.appendChild(button);
}

// Find all <code> elements inside <pre> elements and add the copy button
document.querySelectorAll("pre > code").forEach(addCopyButton);
