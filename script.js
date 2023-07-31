document.getElementById("formatBtn").addEventListener("click", function () {
  const inputJson = document.getElementById("jsonInput").value;
  try {
    const formattedJson = JSON.stringify(JSON.parse(inputJson), null, 2);
    document.getElementById("formattedOutput").innerText = formattedJson;
    document.getElementById("copyBtn").disabled = false;
    document.getElementById("copyBtn").addEventListener("click", function () {
      copyToClipboard(formattedJson);
    });
  } catch (error) {
    document.getElementById("formattedOutput").innerText = "Invalid JSON!";
    document.getElementById("copyBtn").disabled = true;
  }
});

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("Formatted JSON copied to clipboard!");
}

document.getElementById("toggleMode").addEventListener("click", function () {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("isDarkMode", isDarkMode);
});

// Check if dark mode preference is saved in local storage and apply it
const savedMode = localStorage.getItem("isDarkMode");
if (savedMode === "true") {
  document.body.classList.add("dark-mode");
}
