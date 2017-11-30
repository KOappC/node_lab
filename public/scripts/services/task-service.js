(function() {
    function TaskService($http) {

        return {
            addTask: addTask,
            deleteTask: deleteTask,
            editTask: editTask,
            getTasks: getTasks
        };

        function getTasks() {
            return $http({
                url: "/tasks",
                method: "GET"
            }).then(function(response) {
                return response;

            })
        }

        function addTask(newTask) {
            return $http({
                url: "/tasks",
                method: "POST",
                data: { task: newTask }
            }).then(function(response) {
                return response;
            })
        }

        function deleteTask(id) {
            return $http({
                url: "/tasks/" + id,
                method: "DELETE"
            }).then(function(response) {
                return response;
            });
        }
        function editTask(id, newTask) {
            return $http({
                url: "/tasks/" + id,
                method: "PUT",
                data: {task: newTask }
            }).then(function(response) {
                return response;
            });
        }

    }

    angular
        .module("moduleApp")
        .factory("TaskService", TaskService);
})();