angular.module('todoApp').component('interaction', {
  bindings: { interaction: '<' },
  template: '<h3>Interaction</h3>' +
  
            '<div>Name: {{$ctrl.interaction.name}}</div>' +
            '<div>Id: {{$ctrl.interaction.id}}</div>' +
            '<div>Company: {{$ctrl.interaction.company}}</div>' +
            '<div>Email: {{$ctrl.interaction.email}}</div>' +
            '<div>Address: {{$ctrl.interaction.address}}</div>' +
            
            '<button ui-sref="interaction">Close</button>'
});