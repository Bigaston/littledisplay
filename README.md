# littledisplay
Mini système de routage en vanilla JS

Pour fonctionner une div qui passera par LittleDisplay doit avoir une classe `ld` contenant des div avec la classe `ld-part`

## Attributs personalisé
### ld
`ld-mode` (Valeur : "hash"/"url") : Endroit à partir duquel LittleDisplay ira chercher les informations
`ld-base-url` (Valeur : chaine) : Url de base de la section à afficher, et des sous sections. Commence avec un "/" 

### ld-part
`ld-default` (Valeurs : true/false) : Affiche ou non la section par défaut
`ld-url` (Valeur : chaine) : Url à partir de laquelle la div sera affichée, en partant de la base url de la div parente. Commence par un "/"

## Truc à savoir
Les titres H2 présent dans une div ld, si ils sont premier enfant de la div, seront transformés en h1 (titre de la page) et serviront de titre d'onglet