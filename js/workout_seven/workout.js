// 2 unikamy błędów powstałych po minimalizacji kodu
/*
function WorkoutController($scope) {

}

// static property $inject, wskazujemy na tablicę, która zawiera anotacje w postaci string
WorkoutController['$inject'] = ['$scope'];

angular.module('workout_seven').controller('WorkoutController', WorkoutController);
*/

// 3 anotacje inline
/*
angular.module('workout_seven').controller(['$scope', function($scope) {

}]);
*/

// liczy się kolejność podania zależności, w takiej kolejności będą wstrzykiwane

// 1
angular.module('workout_seven').controller('WorkoutController', function($scope) {

    var restExercise;
    var WorkoutPlan;

    // definiujemy klasę modelu za pomocą funkcji konstruktora
    // model pojedynczego ćwieczenia
    function Exercise(args) {
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

    var startExercise = function() {
        // Javascript: Understanding the Weird Parts
    };

    var createWorkout = function() {

    };

    var startWorkout = function() {
        workoutPlan = createWorkout();
        restExercise = {
            details : new Exercise({
                name : "rest",
                title : "Relax!",
                description : "Relax a bit!",
                image : "img/rest.png"
            }),
            duration : workoutPlan.restBetweenExercises
        };

        startExercise(workoutPlan.exercises.shift());
    };

    var init = function() {
        startWorkout();
    };

    init();
});
