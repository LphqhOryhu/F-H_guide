const characters = [
    {
        "nom": "Aventurier",
        "lieu": "Forêt Ancienne",
        "indications": "Trouvé près de la rivière mystique",
        "description": "Un explorateur courageux, connu pour ses nombreux voyages.",
        "image": "https://via.placeholder.com/150"
    },
    {   
        "nom": "Mage",
        "lieu": "Tour de Magie",
        "indications": "Au sommet de la Tour",
        "description": "Un mage puissant avec des pouvoirs de contrôle des éléments.",
        "image": "https://via.placeholder.com/150"
    },
    // Ajoutez plus de personnages ici
];

// Fonction pour afficher les personnages dans le HTML
function displayCharacters(characters) {
    const container = document.getElementById('charactersContainer');
    characters.forEach(character => {
        container.innerHTML += `
            <div class="p-6 bg-gray-900 rounded-lg shadow-lg">
                <img src="${character.image}" alt="${character.nom}" class="h-40 w-full object-cover mb-4">
                <h3 class="text-xl font-bold">${character.nom}</h3>
                <p class="text-gray-400">${character.description}</p>
                <p class="text-gray-400">Lieu: ${character.lieu}</p>
                <p class="text-gray-400">Indications: ${character.indications}</p>
            </div>
        `;
    });
}

// Appel de la fonction au chargement de la page
window.onload = () => displayCharacters(characters);
