// definiujemy klasę modelu za pomocą funkcji konstruktora
// model pojedynczego ćwieczenia
function Excercise(args) {
    this.name = args.name;
    this.title = args.title;
    this.description = args.description;
    this.image = args.image;
    this.related = {};
    this.related.videos = args.videos;
    this.nameSound = args.nameSound;
    this.procedure = args.procedure;
}

// model zestawu ćwiczeń
function WorkoutPlan(args) {

    // tablica obiektów w formacie
    // {exercise : new Exercise({}), duration : 30}
    this.exercises = [];

    this.name = args.name;
    this.title = args.title;
    this.restBetweenExercises = args.restBetweenExercises;
}

angular.module('workout_seven').controller('WorkoutController', function($scope) {

});