import Chart from 'chart.js/auto'

const searchInput = document.getElementById('searchInput')
const dataTable = document.getElementById('dataTable')

const themeToggleButton = document.getElementById('themeToggle');

// side bar toggle button
const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

// Function to check screen width 
function handleResize() {
  if (window.innerWidth <= 768) {
    sidebar.classList.add('d-none'); 
  } else {
    sidebar.classList.remove('d-none');
  }
}


window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);


toggleBtn.addEventListener('click', function() {
  sidebar.classList.toggle('d-none');
  sidebar.classList.toggle('show-sidebar'); 
  sidebar.classList.toggle('col-4');
});

    


// Function to apply theme
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleButton.textContent = "Toggle Theme";
    } else {
        document.body.classList.remove('dark-mode');
        themeToggleButton.textContent = "Toggle Theme";
    }
}

// Toggle theme function
function toggleTheme() {
    let currentTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyTheme(currentTheme);
}

//event listener to the Toggle button
themeToggleButton.addEventListener("click", toggleTheme);


// search function
searchInput.addEventListener('input',function(){
  const searchTerm = this.value.toLowerCase();
  const rows=dataTable.querySelectorAll('tbody tr');

  rows.forEach(row => {
    const text =row.textContent.toLowerCase();
    row.style.display = text.includes(searchTerm)? '':'none';
  });

});






// fetching Chart Data
(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();
