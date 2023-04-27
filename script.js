//your code here!
// get the list element
const list = document.getElementById("infi-list");
const main = document.querySelector("main");

// create an array of 10 items to add by default
const itemsToAdd = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"];

// add the items to the list
itemsToAdd.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
});

// add a scroll event listener to the window
main.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 300) {
    const li1 = document.createElement("li");
    li1.textContent = "Item " + (list.children.length + 1);
    const li2 = document.createElement("li");
    li2.textContent = "Item " + (list.children.length + 2);
    list.appendChild(li1);
    list.appendChild(li2);
  }
});

