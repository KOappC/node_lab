(function() {
    function FormController(TaskService) {
        var vm = this;
        vm.getTasks = function() {
            TaskService.getTasks().then(function(response) {
                console.log(response);
            })
        };
        vm.toDoList = ["Grocery Shop", "Laundry", "Get Gas", "Vacuum"];
        vm.addToDo = function(index) {
            vm.toDoList.push(index);
            vm.newToDo = "";
        };
        vm.removeToDo = function(index) {
            vm.toDoList.splice(index, 1);
            TaskService.deleteTask(index).then(function(response) {
                console.log(response);
            });
        };
    }




    angular
        .module("moduleApp")
        .controller("FormController", FormController)
})();