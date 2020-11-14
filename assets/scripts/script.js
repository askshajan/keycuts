const textContainer = document.getElementById("text-container");
const keyComb = [];
let modifierKeyPressed = false;

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  event.stopPropagation();

  switch (event.key) {
    case "Escape": {
      keyComb.length = 0;
      textContainer.innerHTML = "";
      break;
    }
    default: {
      if (isComboPress(event)) {
        keyComb.push("+");
      }
      keyComb.push(event.key);
    }
  }
  textContainer.innerHTML = keyComb.join(" ");
});

function isComboPress(keyDownEvent) {
  if (
    (event.key === "Shift" && (event.altKey || event.ctrlKey)) ||
    (event.key === "Control" && (event.altKey || event.shiftKey)) ||
    (event.key === "Alt" && (event.shiftKey || event.ctrlKey)) ||
    (!["Shift", "Alt", "Control"].includes(event.key) &&
      (event.altKey || event.shiftKey || event.ctrlKey))
  ) {
    return true;
  }
  return false;
}

function writeToDocument(text) {
  const node = document.createElement("span");
  const textnode = document.createTextNode(text);

  node.appendChild(textnode);
  textContainer.appendChild(node);
}
