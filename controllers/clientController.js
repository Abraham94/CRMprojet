app.controller('clientController', function($scope, $http, clientFactory){

    $scope.allClient = clientFactory.getClients().then(function(value) {
            // successCallback
            console.log(value.data);
            $scope.clients = value.data;
            return value.data;

            }, function(reason) {
            // errorCallback

            }, function(value) {
            // notifyCallback

    });
    
    $scope.deleteClient = function(id){
        console.log(id);
        clientFactory.deleteClient(id).then(function(value) {
                // successCallback
                console.log(value.data);
                return value.data;

                }, function(reason) {
                // errorCallback

                }, function(value) {
                // notifyCallback

                }
        );
    }
    
    $scope.getInterationByClient= function(id){
        console.log(id);

        clientFactory.getInterationByClient(id).then(function(value) {
                // successCallback
                console.log(value.data);
                $scope.inter = true;
            
                $scope.interactions = value.data;
                return value.data;

                }, function(reason) {
                // errorCallback

                }, function(value) {
                // notifyCallback

                }
        );
    }
    
    $scope.ajouterClient = function(){
        var nom = $scope.txtNom;
        var prenom = $scope.txtPrenom;
        var age = $scope.txtAge;
        console.log(nom, prenom, age);
            clientFactory.addClient(nom, prenom, age).then(function(value) {
                // successCallback
                console.log(value.data);
                $scope.allClient;
                return value.data;

                }, function(reason) {
                // errorCallback

                }, function(value) {
                // notifyCallback

            });
    }
    //console.log($scope.clients);
/*    $scope.clients = clientFactory.getClients().success(function(data){
        console.log(data);
        $scope.clients = data;
    });
*/
})