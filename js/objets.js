// Simule le chargement de données d'objets depuis un fichier JSON ou une API
const objets = [
    {
        "nom": "Épée de feu",
        "utilite": "Combat",
        "statistiques": {
            "attaque": 15,
            "défense": 5
        },
        "lieu": "Volcan de lave",
        "type": "Arme",
        "image": "https://via.placeholder.com/150"
    },
    {
        "nom": "Bouclier ancestral",
        "utilite": "Défense",
        "statistiques": {
            "attaque": 3,
            "défense": 20
        },
        "lieu": "Ruines oubliées",
        "type": "Bouclier",
        "image": "https://via.placeholder.com/150"
    },
    // Ajoutez d'autres objets ici selon le besoin
];

// Fonction pour afficher les objets dans le HTML
function displayObjects(objets) {
    const container = document.getElementById('objectsContainer');
    objets.forEach(objet => {
        const objetHTML = `
            <div class="p-6 bg-gray-900 rounded-lg shadow-lg">
                <img src="${objet.image}" alt="${objet.nom}" class="h-40 w-full object-cover mb-4">
                <h3 class="text-xl font-bold">${objet.nom}</h3>
                <p class="text-gray-400">Type: ${objet.type}</p>
                <p class="text-gray-400">Utilité: ${objet.utilite}</p>
                <p class="text-gray-400">Lieu: ${objet.lieu}</p>
                <p class="text-gray-400">Attaque: ${objet.statistiques.attaque}, Défense: ${objet.statistiques.défense}</p>
            </div>
        `;
        container.innerHTML += objetHTML;
    });
}

// Appel de la fonction au chargement de la page
window.onload = () => displayObjects(objets);
