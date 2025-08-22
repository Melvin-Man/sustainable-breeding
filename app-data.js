const appData = {
    bovinos: {
        id: 'bovinos',
        name: 'Cattle',
        icon: '🐄',
        razas: [
            { nombre: 'Brahman', proposito: 'Beef', peso: 800, caracteristica: 'Ideal for tropics, high fertility.' },
            { nombre: 'Senepol', proposito: 'Dual Purpose', peso: 450, caracteristica: 'Adapted to the tropics, fertile, docile.' },
            { nombre: 'Holstein', proposito: 'Dairy', peso: 650, caracteristica: 'Excellent milk production.' },
            { nombre: 'Simmental', proposito: 'Dual Purpose', peso: 700, caracteristica: 'Fast growth, quality milk.' },
            { nombre: 'Angus', proposito: 'Beef', peso: 750, caracteristica: 'High meat quality, tenderness and flavor.' },
        ],
        cicloVida: [
            { etapa: 'Calf', desc: 'Birth to weaning. Dependence on maternal milk.' },
            { etapa: 'Rearing', desc: 'Weaning to puberty. Development of autonomy.' },
            { etapa: 'First Service', desc: 'Sexual maturity (approx. 12 months). Start of reproductive activity.' },
            { etapa: 'Adulthood/Production', desc: 'After first calving, begins milk production or final fattening.' },
        ],
        nutricion: {
            'Dairy Cow': { proteina: 18, fibra: 7, grasa: 3, otros: 72 },
            'Fattening (Start)': { proteina: 12, fibra: 30, grasa: 3, otros: 55 },
            'Fattening (Final)': { proteina: 12, fibra: 5, grasa: 4, otros: 79 },
        },
        infraestructura: [
            { metrica: 'General Space', valor: '≥ 3 m²/animal' },
            { metrica: 'Feedlot Pen', valor: '≥ 5 m²/animal' },
            { metrica: 'Pen Slope', valor: '~3.25%' },
            { metrica: 'Alley Width', valor: '~0.70 m' },
        ],
        sanidad: [
            { nombre: 'Foot-and-Mouth Disease', sintomas: 'Fever, blisters in mouth and hooves, weight loss.', prevencion: 'Vaccination, movement control, strict biosecurity.' },
            { nombre: 'Mastitis', sintomas: 'Inflammation and pain in the udder, changes in milk.', prevencion: 'Milking hygiene, teat sealing, dry cow therapy.' },
            { nombre: 'Bovine Pneumonia', sintomas: 'Fever, cough, difficulty breathing, nasal discharge.', prevencion: 'Vaccination, stress reduction, good ventilation.' },
        ],
        sostenibilidad: [
            { metrica: 'Methane Emissions', desc: 'Mainly from enteric fermentation. Mitigated with efficient diets.' },
            { metrica: 'Manure Management', desc: 'Use biodigesters to generate biogas and biol (fertilizer).' },
            { metrica: 'Water Use', desc: 'Implement leak-free drinkers and rainwater harvesting systems.' },
        ],
        rendimiento: [
            { metrica: 'Daily Gain (Fattening)', valor: '~1.8 kg/day' },
            { metrica: 'Feed Conversion', valor: '6.5:1' },
            { metrica: 'Carcass Yield', valor: '61-63%' },
            { metrica: 'Slaughter Weight', valor: '~500 kg' },
        ]
    },
    porcinos: {
        id: 'porcinos',
        name: 'Swine',
        icon: '🐖',
        razas: [
            { nombre: 'Duroc', proposito: 'Meat', peso: 380, caracteristica: 'Resistant, adaptable to warm climates, excellent conversion.' },
            { nombre: 'Large White', proposito: 'Meat/Breeding', peso: 320, caracteristica: 'Good reproductive qualities, fast growth.' },
            { nombre: 'Landrace', proposito: 'Meat', peso: 310, caracteristica: 'Elongated body, very muscular.' },
            { nombre: 'Yorkshire', proposito: 'Meat', peso: 270, caracteristica: 'High percentage of lean meat.' },
        ],
        cicloVida: [
            { etapa: 'Piglet', desc: 'Birth to weaning (approx. 21 days). Maternal feeding.' },
            { etapa: 'Rearing/Starter', desc: 'From 12 kg to 25-30 kg. Development of bone and muscle structure.' },
            { etapa: 'Fattening', desc: 'Until market weight (approx. 100 kg). Fattening diet.' },
            { etapa: 'Slaughter', desc: 'Quick and hygienic process to preserve meat quality.' },
        ],
        nutricion: {
            'Piglet': { proteina: 17, fibra: 5, grasa: 6, otros: 72 },
            'Growth': { proteina: 16, fibra: 6, grasa: 5, otros: 73 },
            'Fattening': { proteina: 12, fibra: 7, grasa: 5, otros: 76 },
        },
        infraestructura: [
            { metrica: 'Weaning Space', valor: '0.6 m²/pig' },
            { metrica: 'Growth Space', valor: '≥ 1.5 m²/pig' },
            { metrica: 'Pen Height', valor: '80 cm' },
            { metrica: 'Pasture Load', valor: '15-30/acre' },
        ],
        sanidad: [
            { nombre: 'Classical Swine Fever (CSF)', sintomas: 'High fever, lethargy, skin spots, high mortality.', prevencion: 'Vaccination, strict biosecurity, movement control.' },
            { nombre: 'Reproductive and Respiratory Syndrome (PRRS)', sintomas: 'Reproductive problems (abortions), respiratory difficulty in piglets.', prevencion: 'Vaccination, batch management, replacement acclimatization.' },
            { nombre: 'Swine Influenza', sintomas: 'Fever, cough, sneezing, lethargy.', prevencion: 'Vaccination, good ventilation, biosecurity control.' },
        ],
        sostenibilidad: [
            { metrica: 'Slurry Management', desc: 'Rich source of nutrients. Treat in biodigesters or lagoon systems.' },
            { metrica: 'Odor', desc: 'Control with diet management and good ventilation of barns.' },
            { metrica: 'Feed Efficiency', desc: 'Key to reducing carbon footprint per kg of meat produced.' },
        ],
        rendimiento: [
            { metrica: 'Sale Weight', valor: '~100 kg' },
            { metrica: 'Fattening Duration', valor: '3.5-5 months' },
            { metrica: 'Feed Conversion', valor: '2.5:1' },
            { metrica: 'Carcass Yield', valor: '75-80%' },
        ]
    },
    ovinos_caprinos: {
        id: 'ovinos_caprinos',
        name: 'Sheep and Goats',
        icon: '🐑',
        razas: [
            { nombre: 'Pelibuey (Sheep)', proposito: 'Meat', peso: 55, caracteristica: 'Very rustic and resistant to adverse climates.' },
            { nombre: 'Dorper (Sheep)', proposito: 'Meat', peso: 90, caracteristica: 'Good yields and weight gain.' },
            { nombre: 'Katahdin (Sheep)', proposito: 'Meat', peso: 75, caracteristica: 'Good size in ideal conditions.' },
            { nombre: 'Creole (Goat)', proposito: 'Meat', peso: 22, caracteristica: 'High prolificacy and short interval between births.' },
        ],
        cicloVida: [
            { etapa: 'Puberty', desc: 'Variable (7-8 months). Influenced by breed, nutrition and season.' },
            { etapa: 'Mating', desc: 'Optimal time: 12-18 hours after heat onset.' },
            { etapa: 'Gestation', desc: 'Lasts approximately 5 months (144-153 days).' },
            { etapa: 'Separation', desc: 'Separate lambs/kids at 5 months to avoid unwanted pregnancies.' },
        ],
        nutricion: {
            'Maintenance': { proteina: 12, fibra: 40, grasa: 3, otros: 45 },
            'Lactation': { proteina: 16, fibra: 35, grasa: 4, otros: 45 },
            'Fattening': { proteina: 14, fibra: 30, grasa: 4, otros: 52 },
        },
        infraestructura: [
            { metrica: 'Pen Space', valor: '0.5-1 m²/animal' },
            { metrica: 'Fence Height', valor: '≥ 0.90 m' },
            { metrica: 'Alley Width', valor: '0.50 m (approx.)' },
            { metrica: 'Shade', valor: '1-2 m²/animal' },
        ],
        sanidad: [
            { nombre: 'Internal Parasites', sintomas: 'Weight loss, anemia, diarrhea, "bottle jaw".', prevencion: 'Pasture management (rotation), strategic deworming (e.g. FAMACHA).' },
            { nombre: 'Caprine Arthritis Encephalitis (CAE)', sintomas: 'Arthritis in adults, paresis in kids, weight loss.', prevencion: 'Serological testing and elimination of positives, colostrum pasteurization.' },
            { nombre: 'Caseous Lymphadenitis', sintomas: 'Abscesses in lymph nodes (internal or external).', prevencion: 'Strict hygiene, wound disinfection, elimination of animals with abscesses.' },
        ],
        sostenibilidad: [
            { metrica: 'Erosion Control', desc: 'Rotational grazing prevents overgrazing and soil degradation.' },
            { metrica: 'Pasture Management', desc: 'Key to system sustainability. Integrate with other species.' },
            { metrica: 'Biodiversity', desc: 'Help control weeds in silvopastoral systems.' },
        ],
        rendimiento: [
            { metrica: 'Daily Gain (Dorper)', valor: '~200 g/day' },
            { metrica: 'Birth Weight (Dorper)', valor: '~4.5 kg' },
            { metrica: 'Prolificacy (Creole)', valor: '2.33 offspring/birth' },
            { metrica: 'Birth Interval (Creole)', valor: '~8 months' },
        ]
    },
    aves: {
        id: 'aves',
        name: 'Poultry',
        icon: '🐔',
        razas: [
            { nombre: 'Cornish Cross', proposito: 'Meat', peso: 4.5, caracteristica: 'Very fast growth, short cycle.' },
            { nombre: 'Plymouth Rock', proposito: 'Dual Purpose', peso: 3.5, caracteristica: 'Good producer of meat and brown eggs.' },
            { nombre: 'White Leghorn', proposito: 'Eggs', peso: 2.5, caracteristica: 'Excellent white egg layer, very efficient.' },
            { nombre: 'Rhode Island Red', proposito: 'Dual Purpose', peso: 3.0, caracteristica: 'Resistant, good brown egg layer.' },
        ],
        cicloVida: [
            { etapa: 'Starter (Layer)', desc: '0-2 months. Initial development.' },
            { etapa: 'Growth/Rearing', desc: '2 months until start of lay. Development of reproductive system.' },
            { etapa: 'Production (Layer)', desc: 'From week 18 for approx. 1 year.' },
            { etapa: 'Fattening (Broiler)', desc: 'Short cycle of 6-8 weeks until slaughter weight.' },
        ],
        nutricion: {
            'Broiler (Start)': { proteina: 21, fibra: 4, grasa: 5, otros: 70 },
            'Broiler (Final)': { proteina: 18, fibra: 5, grasa: 6, otros: 71 },
            'Layer Hen': { proteina: 17, fibra: 6, grasa: 4, otros: 73 },
        },
        infraestructura: [
            { metrica: 'Fattening Space', valor: '6-8 birds/m²' },
            { metrica: 'Layer Space', valor: '3-4 birds/m²' },
            { metrica: 'Perch per Bird', valor: '15-35 cm' },
            { metrica: 'Nests', valor: '1 per 4 birds' },
        ],
        sanidad: [
            { nombre: 'Newcastle Disease', sintomas: 'Respiratory and nervous problems, high mortality.', prevencion: 'Strict vaccination, biosecurity.' },
            { nombre: 'Gumboro Disease (IBD)', sintomas: 'Immunosuppression, diarrhea, prostration.', prevencion: 'Vaccination of breeders and chicks.' },
            { nombre: 'Coccidiosis', sintomas: 'Bloody diarrhea, weight loss, apathy.', prevencion: 'Use of anticoccidials in feed, dry litter management.' },
        ],
        sostenibilidad: [
            { metrica: 'Manure Management', desc: 'Excellent fertilizer rich in nitrogen. Must be composted to avoid burning crops.' },
            { metrica: 'Dust and Ammonia Control', desc: 'Requires good ventilation for bird and staff welfare.' },
            { metrica: 'Water Efficiency', desc: 'Use nipple drinkers to minimize water waste.' },
        ],
        rendimiento: [
            { metrica: 'Fattening Cycle', valor: '~42 days' },
            { metrica: 'Conversion (Fattening)', valor: '1.8:1' },
            { metrica: 'Layer Production', valor: '~300 eggs/year' },
            { metrica: 'Egg Weight', valor: '55-65 g' },
        ]
    },
    peces: {
        id: 'peces',
        name: 'Fish',
        icon: '🐟',
        razas: [
            { nombre: 'Tilapia', proposito: 'Meat', peso: 1.0, caracteristica: 'Adaptable to warm climates, fast growth, high demand.' },
            { nombre: 'Rainbow Trout', proposito: 'Meat', peso: 0.5, caracteristica: 'Requires cold, high-quality water. Valued meat.' },
            { nombre: 'Carp', proposito: 'Meat', peso: 2.0, caracteristica: 'Adaptable to cold climates, but with lower commercial demand.' },
            { nombre: 'Cachama', proposito: 'Meat', peso: 1.5, caracteristica: 'Develops well in warm areas.' },
        ],
        cicloVida: [
            { etapa: 'Egg/Spawn', desc: 'Incubation in specialized tanks with water quality control.' },
            { etapa: 'Larva', desc: 'Feeding from yolk sac, then with rotifers and artemia.' },
            { etapa: 'Fry Stage', desc: 'Up to 5 cm. Feeding with dry pellets and grouping by size.' },
            { etapa: 'Fattening', desc: 'From juvenile to commercial size. Final growth phase.' },
        ],
        nutricion: {
            'Tilapia (Fattening)': { proteina: 32, fibra: 5, grasa: 6, otros: 57 },
            'Trout (Fattening)': { proteina: 40, fibra: 3, grasa: 15, otros: 42 },
        },
        infraestructura: [
            { metrica: 'Pond Depth', valor: '1 m (ideal)' },
            { metrica: 'Soil', valor: 'Clayey, low permeability' },
            { metrica: 'Dike Slope', valor: '30°-45°' },
            { metrica: 'Oxygenation', valor: 'Water fall ≥ 1m' },
        ],
        sanidad: [
            { nombre: 'White Spot (Ich)', sintomas: 'Small white spots on skin and fins, lethargy.', prevencion: 'Quarantine of new fish, maintain water quality, treatments with salt or chemicals.' },
            { nombre: 'Columnaris', sintomas: 'Cotton-like lesions on mouth, fins and body.', prevencion: 'Maintain low density, good water quality, avoid stress.' },
            { nombre: 'Fungal Infections', sintomas: 'Cotton-like growths on wounds or weakened fish.', prevencion: 'Avoid injuries, keep water clean and well oxygenated.' },
        ],
        sostenibilidad: [
            { metrica: 'Effluent Quality', desc: 'Outlet water from ponds must be treated to avoid contaminating natural water bodies.' },
            { metrica: 'Efficient Water Use', desc: 'Recirculation systems (RAS) drastically reduce water consumption.' },
            { metrica: 'Sustainable Feeding', desc: 'Use of insect or algae meals to reduce dependence on fish meal.' },
        ],
        rendimiento: [
            { metrica: 'Tilapia Cycle', valor: '6-8 months' },
            { metrica: 'Trout Cycle', valor: '9-12 months' },
            { metrica: 'Conversion (Tilapia)', valor: '1.5:1' },
            { metrica: 'Density (Tilapia)', valor: '10-20 fish/m³' },
        ]
    }
};