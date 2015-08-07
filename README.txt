Les controlleurs permettent d'instancier les objets présents dans le module (modèle, vues, etc...) mais ne communiquent pas avec les autres modules
Seul le module de base communiquent avec les autres modules et seulement avec les classes de base des autres modules.

Sinon il faut faire des écouteurs dans les vues pour écouter les événements des autres modules

Mettre à jour les controlleurs et les vues avec bindEntityEvents pour que ce soit bien clair.
La vue instancie TriggerMethod et ce sont les controlleurs des autres modules qui écoutent.

// http://fr.livingtuts.com/illustrator/illustration-3d-isometrique-bases-et-techniques-avancees/


TODO :
Mettre l'attribut "content" dans "ui" mais bug pour les layers // Mettre sprite dans "ui" pour TileView mais bug aussi
Click event fonctionne seulement sur le layer le plus élevé