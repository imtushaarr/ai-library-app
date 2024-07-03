document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput')
    const searchBtn = document.getElementById('searchButton')
    const searchResults = document.getElementById('searchResults')

    const items = [
        { name: 'ChatGPT', link: 'https://www.chatgpt.com', icon: '<i class="fa-solid fa-diamond-turn-right"></i>' },
        { name: 'AI Logo by Fiverr', link: 'https://www.fiverr.com/logo-maker/?utm_source=953550&utm_medium=cx_affiliate&utm_campaign=&afp=&cxd_token=953550_33692055&show_join=true',  icon: '<i class="fa-solid fa-diamond-turn-right"></i>' },
        { name: 'ContentShake AI', link: 'https://www.semrush.com/apps/contentshake/?irclickid=VZ70vGzuExyKU2eWQDzOFTSLUkC0J31vEzJLSc0&utm_source=affiliate&utm_Medium=impact&utm_campaign=5293708&utm_terms=&utm_content=&irgwc=1&utm_medium=impact&utm_term=',  icon: '<i class="fa-solid fa-diamond-turn-right"></i>' },
        { name: 'Adcreative AI', link: 'https://www.adcreative.ai/?gspk=cGFydG5lcnN0ZXBoZW5zNzQy&gsxid=3AaAmbduLctD&pscd=free-trial.adcreative.ai',  icon: '<i class="fa-solid fa-diamond-turn-right"></i>' },
        { name: 'Vision', link: 'https://www.example.com/vision', icon: '<i class="fa-solid fa-diamond-turn-right"></i>' }
    ];

    function updateResults() {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';

        const filteredItems = items.filter(item => 
            item.name.toLowerCase().includes(query));

        if (filteredItems.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'No Items Found!';
            li.style.fontFamily = '"Ubuntu", sans-serif';
            li.style.fontSize = '.8rem'
            searchResults.appendChild(li);
        } else {
            filteredItems.forEach(item => {
                const li = document.createElement('li');
                li.style.fontFamily = '"Ubuntu", sans-serif';
                li.style.fontSize = '.8rem'

                const a = document.createElement('a');
                a.textContent = `${item.icon} ${item.name}`;
                a.style.textDecoration = 'none'
                a.style.color = 'black'
                a.href = item.link;
                a.target = '_blank'; // Open link in a new tab

                a.addEventListener('click', function(event) {
                    li.style.display = 'none'; // Hide the parent li element
                });

                li.appendChild(a);
                searchResults.appendChild(li);
            });
        }
    }

    searchBtn.addEventListener('click', updateResults);

    // Optional: Enable search on pressing Enter key
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            updateResults();
        }
    });


})