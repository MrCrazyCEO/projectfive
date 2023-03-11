function generateWords() {
  let name = document.getElementById("name").value.toLowerCase();
  let words = [];
  for (let i = 0; i < name.length; i++) {
    for (let j = i + 1; j <= name.length; j++) {
      words.push(name.slice(i, j));
    }
  }
  let uniqueWords = [...new Set(words)];
  let table = document.getElementById("resultTable").getElementsByTagName("tbody")[0];
  table.innerHTML = "";
  for (let i = 0; i < uniqueWords.length; i++) {
    let row = table.insertRow(i);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = i + 1;
    cell2.innerHTML = uniqueWords[i];
    if (i % 2 === 0) {
      row.style.backgroundColor = "#f2f2f2";
    }
  }
  let totalWords = document.getElementById("totalWords");
  totalWords.innerHTML = "Total Words Generated: " + uniqueWords.length;
}
