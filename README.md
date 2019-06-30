# oHighKing

Par BRUCHET Maxime et REMOND Théo

## Comment installer oHighKing pour le développement : 
    - git clone https://github.com/mbruchetpro/oHighKing.git
    - cd oHighKing
    - npm i || yarn
    
    - ionic serve --devapp

# Test : 
    - unitaire : npm test
    - fonctionnel : yarn run e2e 

## Réalisé :
    - Page Connexion - Authentification
    - Affichage des randonnées
    - Navigation vers la page détail
    - Affichage des données de la randonnée
    - Démarrage de la randonnée en cours
    - Démarrage du chronomètre
    - Démarrage de la géolocalisation
    - Validation d’une étape
    - Fin de la randonnée en cours
    - L’utilisateur termine manuellement la randonnée
    
    - Compatibilité avec deux plateformes différentes
    - Tests fonctionnels
    - Tests unitaires (Hikings service)
    
## Pas réalisé :
    - Affichage des randonnées hors-ligne (-> erreur).
    - Tests fonctionnels avec géolocalisation (on a pas reussi à mock/fake la position GPS).
    - Commentaires.
    - Tests fonctionnels pour des scénarios hors ligne.
    
## Lancer l'application sur browser :
    (necessite cordova)
    - ionic cordova platforms add browser
    - ionic cordova run browser
    
## Lancer l'application sur Android :
    (necessite cordova)
    - ionic cordova platforms add android
    - ionic cordova run android

