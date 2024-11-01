document.getElementById("search-input").addEventListener("input", function() {
    const query = this.value.trim();

    
    if (query.length < 3) {
        document.getElementById("search-results").style.display = "none";
        document.getElementById("search-results").innerHTML = "";
        return;
    }

    
    fetch(`/search?query=${encodeURIComponent(query)}`, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById("search-results");
            resultsContainer.innerHTML = "";

            
            if (data.results.length > 0) {
                data.results.forEach(result => {
                    const item = document.createElement("p");
                    item.textContent = result.title;
                    item.onclick = () => window.location.href = result.link;
                    resultsContainer.appendChild(item);
                });
                resultsContainer.style.display = "block";
            } else {
                resultsContainer.style.display = "none";
            }
        })
        .catch(error => console.error("Error fetching search results:", error));
});


document.getElementById("search-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const query = document.getElementById("search-input").value.trim();
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchHistory = document.getElementById("search-history");
    const historyList = document.getElementById("history-list");
    let isFirstSearch = true; 

    
    searchInput.addEventListener("focus", function() {
        if (historyList.children.length > 0) {
            searchHistory.style.display = "block";
        }
    });

   
    document.addEventListener("click", function(event) {
        if (!searchHistory.contains(event.target) && event.target !== searchInput) {
            searchHistory.style.display = "none";
        }
    });

   
    document.getElementById("search-form").addEventListener("submit", function(e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            if (isFirstSearch) {
                
                isFirstSearch = false;
                window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            } else {
                
                addSearchToHistory(query);
            }
        }
        searchInput.value = ""; 
    });

   
    function addSearchToHistory(query) {
        const listItem = document.createElement("li");
        listItem.textContent = query;
        listItem.onclick = () => {
            searchInput.value = query;
            searchHistory.style.display = "none";
        };
        historyList.prepend(listItem); 
    }
});
