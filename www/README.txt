Les controlleurs permettent d'instancier les objets présents dans le module (modèle, vues, etc...) mais ne communiquent pas avec les autres modules
Seul le module de base communiquent avec les autres modules et seulement avec les classes de base des autres modules.

Sinon il faut faire des écouteurs dans les controlleurs pour écouter les événements des autres modules