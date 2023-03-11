function generateWords() {
	let name = document.getElementById("name").value.toLowerCase();
    let apiURL = "https://api.datamuse.com/words?rel_jjb=" + name;
    
    fetch(apiURL)
        .then(response => response.json())
        .then(words => {
            let filteredWords = words.filter(word => word.word.length > 2);
            let uniqueWords = [...new Set(filteredWords.map(word => word.word))];
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
        })
        .catch(error => console.log(error));
}

