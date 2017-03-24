app.factory('clientFactory', function($http){
    /*
    return{
        getClients : function(){
            return $http({
                url : 'http://localhost:8080/clients',
                method : 'GET'
            })
        }
    }
    */
    return{
        getClients : function(){
            return $http.get('http://localhost:8080/clients');
        },
        addClient : function(nom, prenom, age){
            console.log(nom, prenom, age);
            var req = {
                method: 'POST',
                url: 'http://localhost:8080/addClient',
                data: {nom:nom, prenom:prenom, age:age}
            }
            return $http(req);
            //return $http.post('http://localhost:8080/addClient', {nom:'abraham'});
        },
        deleteClient : function(id){
            var req = {
                method: 'POST',
                url: 'http://localhost:8080/delete',
                data: {id:id}
            }
            return $http(req);
        },
        getInterationByClient : function(id){
            console.log(id);
            var url = "http://localhost:8080/getInterationByClient/"+id
            console.log(url);
            var req = {
                method: 'GET',
                url: url
            }
            return $http(req);
        }
    }
});