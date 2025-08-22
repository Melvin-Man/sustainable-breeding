let currentSpecies = 'bovinos';
let razasChart, nutricionChart;

document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    renderPage();
    document.getElementById('nutricion-stage-selector').addEventListener('change', () => updateNutricionCard());
    document.getElementById('sanidad-content').addEventListener('click', (e) => {
        const item = e.target.closest('.disease-item');
        if (item) {
            const detail = item.nextElementSibling;
            if (detail.style.maxHeight) {
                detail.style.maxHeight = null;
            } else {
                detail.style.maxHeight = detail.scrollHeight + "px";
            }
        }
    });
});

function setupNavigation() {
    const navContainer = document.getElementById('species-nav');
    const speciesOrder = ['bovinos', 'porcinos', 'ovinos_caprinos', 'aves', 'peces'];
    
    navContainer.innerHTML = speciesOrder.map(key => {
        const species = appData[key];
        return `
            <button data-species="${species.id}" class="nav-item flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base font-semibold text-stone-700 bg-white shadow-sm">
                <span class="text-xl">${species.icon}</span>
                <span>${species.name}</span>
            </button>
        `;
    }).join('');

    navContainer.addEventListener('click', (e) => {
        const button = e.target.closest('.nav-item');
        if (button) {
            currentSpecies = button.dataset.species;
            renderPage();
        }
    });
}

function renderPage() {
    updateActiveNav();
    updateRazasCard();
    updateCicloVidaCard();
    updateNutricionCard();
    updateInfraestructuraCard();
    updateSanidadCard();
    updateSostenibilidadCard();
    updateRendimientoCard();
}

function updateActiveNav() {
   document.querySelectorAll('#species-nav .nav-item').forEach(btn => {
        const isActive = btn.dataset.species === currentSpecies;
        btn.classList.toggle('active', isActive);
        
        // Ensure active button is visible in both modes
        if (isActive) {
            btn.style.border = '2px solid var(--primary)';
            btn.style.fontWeight = 'bold';
        } else {
            btn.style.border = '';
            btn.style.fontWeight = '';
        }
    });
}

function updateRazasCard() {
    const data = appData[currentSpecies].razas;
    const ctx = document.getElementById('razasChart').getContext('2d');
    
    const chartData = {
        labels: data.map(r => r.nombre),
        datasets: [{
            label: 'Average Weight (kg)',
            data: data.map(r => r.peso),
            backgroundColor: 'rgba(13, 148, 136, 0.6)',
            borderColor: 'rgba(13, 148, 136, 1)',
            borderWidth: 1,
            borderRadius: 5,
        }]
    };

    if (razasChart) {
        razasChart.destroy();
    }
    razasChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    title: { display: true, text: 'Average Weight (kg)' }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        afterBody: function(context) {
                            const index = context[0].dataIndex;
                            const raza = data[index];
                            return `Purpose: ${raza.proposito}\nCharacteristic: ${raza.caracteristica}`;
                        }
                    }
                }
            }
        }
    });
}

function updateCicloVidaCard() {
    const data = appData[currentSpecies].cicloVida;
    const container = document.getElementById('ciclo-vida-content');
    container.innerHTML = `
        <div class="timeline">
            ${data.map(item => `
                <div class="timeline-item">
                    <h4 class="font-semibold text-stone-800">${item.etapa}</h4>
                    <p class="text-sm text-stone-600">${item.desc}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function updateNutricionCard() {
    const stages = Object.keys(appData[currentSpecies].nutricion);
    const selector = document.getElementById('nutricion-stage-selector');
    
    const currentSelection = selector.value;
    selector.innerHTML = stages.map(stage => `<option value="${stage}">${stage}</option>`).join('');
    
    if (stages.includes(currentSelection)) {
        selector.value = currentSelection;
    }

    const selectedStage = selector.value;
    const data = appData[currentSpecies].nutricion[selectedStage];
    const ctx = document.getElementById('nutricionChart').getContext('2d');

    const chartData = {
        labels: ['Protein', 'Fiber', 'Fat', 'Others (Energy)'],
        datasets: [{
            data: [data.proteina, data.fibra, data.grasa, data.otros],
            backgroundColor: [
                'rgba(15, 118, 110, 0.8)', // teal-700
                'rgba(20, 184, 166, 0.8)', // teal-500
                'rgba(107, 114, 128, 0.7)', // gray-500
                'rgba(245, 158, 11, 0.7)' // amber-500
            ],
            borderColor: '#ffffff',
            borderWidth: 2,
        }]
    };

    if (nutricionChart) {
        nutricionChart.destroy();
    }
    nutricionChart = new Chart(ctx, {
        type: 'doughnut',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed !== null) {
                                label += context.parsed + '%';
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

function updateInfraestructuraCard() {
    const data = appData[currentSpecies].infraestructura;
    const container = document.getElementById('infraestructura-content');
    container.innerHTML = data.map(item => `
        <div class="bg-stone-50 p-4 rounded-lg">
            <p class="text-sm text-stone-500">${item.metrica}</p>
            <p class="text-2xl font-bold text-teal-700">${item.valor}</p>
        </div>
    `).join('');
}

function updateSanidadCard() {
    const data = appData[currentSpecies].sanidad;
    const container = document.getElementById('sanidad-content');
    container.innerHTML = data.map(item => `
        <div>
            <div class="disease-item bg-stone-50 hover:bg-stone-100 p-3 rounded-lg flex justify-between items-center">
                <span class="font-semibold">${item.nombre}</span>
                <span class="text-teal-600 transform transition-transform duration-300">+</span>
            </div>
            <div class="disease-detail bg-white px-3 pt-0 pb-3 border-l-2 border-teal-500 ml-2">
                <p class="text-sm text-stone-600 mt-2"><strong>Symptoms:</strong> ${item.sintomas}</p>
                <p class="text-sm text-stone-600 mt-1"><strong>Prevention:</strong> ${item.prevencion}</p>
            </div>
        </div>
    `).join('');
}

function updateSostenibilidadCard() {
    const data = appData[currentSpecies].sostenibilidad;
    const container = document.getElementById('sostenibilidad-content');
    container.innerHTML = data.map(item => `
        <div class="flex items-start gap-3">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-lg">
                ${item.metrica.includes('Water') ? '💧' : item.metrica.includes('Manure') || item.metrica.includes('Slurry') ? '♻️' : '🌍'}
            </div>
            <div>
                <h4 class="font-semibold text-stone-800">${item.metrica}</h4>
                <p class="text-sm text-stone-600">${item.desc}</p>
            </div>
        </div>
    `).join('');
}

function updateRendimientoCard() {
    const data = appData[currentSpecies].rendimiento;
    const container = document.getElementById('rendimiento-content');
    container.innerHTML = data.map(item => `
        <div class="bg-stone-50 p-4 rounded-lg">
            <p class="text-sm text-stone-500">${item.metrica}</p>
            <p class="text-2xl font-bold text-teal-700">${item.valor}</p>
        </div>
    `).join('');
}

// Dark Mode - Functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check system preferences or saved
if (localStorage.getItem('dark-mode') === 'enabled' || 
    (localStorage.getItem('dark-mode') === null && prefersDarkScheme.matches)) {
    document.documentElement.classList.add('dark-mode');
    updateDarkModeButton();
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    
    if (document.documentElement.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
    
    updateDarkModeButton();
});

// Update button text
function updateDarkModeButton() {
    const isDarkMode = document.documentElement.classList.contains('dark-mode');
    darkModeToggle.innerHTML = `
        <span class="text-xl">${isDarkMode ? '☀️' : '🌙'}</span>
        <span>${isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
    `;
}

// ========== DARK MODE ==========
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set initial theme
if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark-mode');
}

// Update button icon
function updateButtonIcon() {
    const isDarkMode = document.documentElement.classList.contains('dark-mode');
    document.getElementById('theme-toggle').textContent = isDarkMode ? '☀️' : '🌙';
}

// Toggle between modes
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.documentElement.classList.toggle('dark-mode');
    
    // Save preference
    if (document.documentElement.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
    
    updateButtonIcon();
});

// Initialize button icon
updateButtonIcon();