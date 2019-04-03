/* Array.prototype.map - Exercice 3

Ecrire une fonction getMoviesFreshness qui reçoit comme un argument un tableau
d'objets représentant des films.
Chaque film a deux propriétés:
  - `name` le nom du film
  - `rating` la note qui lui attribuée sur le site rottentomatoes.com

La fonction getMoviesWithFreshness doit renvoyer un tableau contenant les objets du tableau
d'entrée, auxquels on aura ajouté une propriété, dont la clé sera label, et la valeur,
une chaîne, dépendante de la valeur de rating :

* Si `rating` est infériéur à 60, la valeur à attribuer à label sera "rotten".
* Si `rating` est compris entre 60 et 75 (inclus), la valeur à attribuer à label sera "fresh".
* Si `rating` est supérieur à 75, la valeur à attribuer à label sera "certified fresh".

Exemple d'entrée:
  [
    {
      name: 'Crazy Rich Asians',
      rating: 93
    },
    {
      name: 'Skyscraper',
      rating: 46
    },
    {
      name: 'Leave No Trace',
      rating: 100
    },
    {
      name: 'White Boy Rick',
      rating: 60
    }
  ]
En sortie:

La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
Syntaxe
Section

var nouveauTableau = arr.map(callback [, thisArg])

Paramètres
Section

callback
    La fonction qui est utilisée pour créer un élément du nouveau tableau. Elle utilise trois arguments :

    valeurCourante
        La valeur de l'élément du tableau à traiter.
    indexFacultatif
        L'index de l'élément qui est traité par la fonction.
    tableauFacultatif
        Le tableau sur lequel on a appelé la méthode map.

thisArg Facultatif
    La valeur à utiliser pour this lors de l'exécution de callback. La valeur par défaut est l'objet global de l'environnement (Window pour un navigateur).

Valeur de retour
Section

Un nouveau tableau composé des images de la fonction de rappel.
Description
Section

Lorsqu'on utilise map, la fonction callback fournie en argument est exécutée une fois pour chacun des éléments du tableau, dans l'ordre du tableau
  [
    {
      name: 'Crazy Rich Asians',
      rating: 93,
      label: 'certified fresh'
    },
    {
      name: 'Skyscraper',
      rating: 46,
      label: 'rotten'
    },
    {
      name: 'Leave No Trace',
      rating: 100,
      label: 'certified fresh'
    },
    {
      name: 'White Boy Rick',
      rating: 60,
      label: 'fresh'
    }
  ]

 */

function getMoviesFreshness(movies) {
  return movies.map ( movie => {
    if (movie.rating < 60){
    movie.label = 'rotten';
    return movie
  } else if (movie.rating >= 60 && movie.rating <= 75) {
      movie.label = 'fresh'
      return movie
  } else {
      movie.label = 'certified fresh'
      return movie
    }
  })
}




// Ne pas modifier l'export
module.exports = getMoviesFreshness;
