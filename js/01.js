//alert("Mon fichier JS fonctionne!");
// Deux slash pour un commentaire uniligne

/*
    Ici, je peux faire un commentaire
    sur plusieur lignes.
    RACCOURCI:
        - CTRL + :
        - SHIFT + ALT + A
*/

// -- 1 : Declarer une variable JS
var prenom;

// -- 2 : Affecter à la variable "prenom"
prenom = "Cindy";

// -- 3 : Afficher la valeur de ma variable dans la console
    console.log( prenom );

    // -- 3 : Afficher la valeur de ma variable dans la console
    
    // console.log( Prenom ); Uncaught RéferenceError: Prenom is not defined. Car javascript est sensible a la casse. Pas d'accent dans les noms de variable

       
            //Les types de variables

    // -- typeof me permet de connaitre le type de la valeur de ma variable.
    console.log( typeof prenom ); // Ma variable "prenom" contient une chaine de caractère (string).


    // -- Déclaration et affection d'un nombre
    var age = 24;

    // -- connaitre son type
    console.log( age );
    console.log(typeof age );

    // -- Les variables de type FLOAT
    var uneDecimale = -2.984;
    console.log( uneDecimale );
    console.log( typeof uneDecimale );

    // -- Les Boléens (vrai / faux )
    var unBoleen = false; // true
    console.log( unBoleen );
    console.log( typeof unBoleen );
   
    // -- Les constantes

     /**
      *  La déclaration "const" me permet de creer
      * une constante accessible UNIQUEMENT en lecture.
      * Sa valeur ne pourra pas être modifiée par des
      * réaffectation ultérieures.
     */

    const host = "localisation";
    const user = "root";
    const password = "mysq1";

    // Je ne peux pas faire cela
    // user = "Cindy";
    // Uncaught TypeError: Assignement to constant variable.

    var unNombre = "24";
    console.log( unNombre );  
    console.log( typeof unNombre ); // Petite subtilité, unNombre est ici de type "string" à cause des quotes au moment de l'affection.

    // -- Pour convertir un nombre entier (Integer, ou Int)
    unNombre = pareInt( unNombre );
    console.log( unNombre );
    console.log( typeof unNombre );

    // -- Pour convertir un nombre a virgule (Float)
    unNombre = "12.55"
    unNombre = pareInt( unNombre );
    console.log( unNombre );
    console.log( typeof unNombre );

            /**  LA PORTEE DES VARIABLES
             
            Les variables déclarées directement à la racine du fichier JS sont appelées: variables GLOBALES.

            Elles sont disponible dans l'ensemble de votre document, y compris dans les fonctions.


            Les variables déclarées a l'intérieur d'une fonction sont appelées: variables LOCALES.

            Elles sont disponible UNIQUEMENT dans le scope de la fonction .
            */