# MeteoApp

## Description
Cette application Angular permet d'afficher les prévisions météorologiques en temps réel pour une ville donnée au Sénégal. L'application consomme une API météo publique (par exemple OpenWeatherMap) pour récupérer les données météorologiques et les afficher dans une interface utilisateur. 

Les fonctionnalités incluent l'affichage de la température actuelle, les conditions météorologiques, les prévisions à court et long terme, ainsi que d'autres informations pertinentes.

## Objectifs
- Consommer une API météo publique pour récupérer des données en temps réel.
- Manipuler les données récupérées pour les afficher dans une interface utilisateur.
- Gérer les erreurs éventuelles lors de la récupération des données depuis l'API.
- Ajouter des fonctionnalités supplémentaires comme la possibilité de rechercher la météo pour différentes villes.

## Fonctionnalités
- **Affichage de la température actuelle** : Affiche la température actuelle pour la ville sélectionnée.
- **Conditions météorologiques** : Affiche les conditions (ensoleillé, nuageux, pluvieux, etc.) pour la ville sélectionnée.
- **Prévisions météorologiques** : Affiche les prévisions météorologiques à court et long terme.
- **Gestion des erreurs** : Affiche des messages d'erreur en cas de problème lors de la récupération des données depuis l'API.
- **Recherche de villes** : Permet à l'utilisateur de rechercher la météo pour différentes villes.
- **Affichage des icônes météorologiques** : Affiche des icônes correspondant aux conditions météorologiques.

## Technologies utilisées
- **Angular** (dernière version)
- **OpenWeatherMap API** (ou toute autre API météo publique)
- **CSS** pour le style

## Installation
### Prérequis
- Node.js (version 12 ou supérieure)
- npm (gestionnaire de paquets Node)
- Angular CLI

### Étapes d'installation
1. Clonez ce repository :
   ```bash
   git clone https://github.com/username/projet-meteo.git

2. Allez dans le dossier du projet :

cd projet-meteo

3. Installez les dépendances du projet :

npm install

4. Configurez l'API clé d'OpenWeatherMap (ou autre) dans le fichier src/environments/environment.ts :

typescript

export const environment = {
  production: false,
  apiKey: 'VOTRE_API_KEY',
  apiUrl: 'https://api.openweathermap.org/data/2.5/'
};

5. Lancez le serveur de développement :

ng serve

6. Ouvrez votre navigateur et accédez à http://localhost:4200 pour voir l'application en action.