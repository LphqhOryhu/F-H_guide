// Données simulées pour les sorts, à remplacer par des données réelles ou chargées depuis une API
const spells = [
    {
        "nom": "Boule de Feu",
        "niveau": "Niveau 3",
        "description": "Lance une puissante boule de feu qui inflige des dégâts de brûlure.",
        "image": "https://via.placeholder.com/150"
    },
    {
        "nom": "Glacier",
        "niveau": "Niveau 4",
        "description": "Crée un mur de glace qui protège contre les attaques ennemies.",
        "image": "https://via.placeholder.com/150"
    },
    // Plus de sorts peuvent être ajoutés ici
];

// Fonction pour afficher les sorts dans le HTML
function displaySpells(spells) {
    const container = document.getElementById('spellsContainer');
    spells.forEach(spell => {
        const spellHTML = `
            <div class="p-6 bg-gray-900 rounded-lg shadow-lg">
                <img src="${spell.image}" alt="${spell.nom}" class="h-40 w-full object-cover mb-4">
                <h3 class="text-xl font-bold">${spell.nom}</h3>
                <p class="text-gray-400">${spell.description}</p>
                <p class="text-gray-400">${spell.niveau}</p>
            </div>
        `;
        container.innerHTML += spellHTML;
    });
}

// Appel de la fonction au chargement de la page
window.onload = () => displaySpells(spells);