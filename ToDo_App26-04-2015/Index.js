var app = angular.module("myApp",["ngMaterial"]);
app.service("todo",function(){
    var todo1=[];
    this._saveItemInService = function(todoObj){
        todo1.push(todoObj);
    };
 this.getAlltodo = function(){
        return todo1;
    }
})
app.controller('myCtrl',function($scope , todo){
    $scope.Todo_item = "";
    $scope.savetodo = function(){
        var sObj = {
            name : $scope.Todo_item
        };
        todo._saveItemInService(sObj);
    };
    $scope.delete = function(){
      todo.getAlltodo().length = 0
    };
 //           $scope.remove = function($index){
 //               todo.getAlltodo().splice($index,1);
 //};
});
app.controller("myctrl1", function(todo, $scope){
    $scope.alltodo = todo.getAlltodo();
    $scope.remove = function(index){
        //alert()
        $scope.alltodo.splice(index,1);

   }
});
app.controller("views" ,function($scope, todo3){
    $scope.add = function(){
        var ok = {
            name : $scope.user.name,
            email : $scope.user.email,
            subject : $scope.user.subject,
            feature : $scope.user.feature
        };
        todo3._saveIN(ok);
   }
});
app.service("todo3",function(){
    var todo4=[];
    this._saveIN = function(ok){
        todo4.push(ok)
    };
    this.getok = function(){
        return todo4;
    };
})
app.controller("ika",function($scope,todo3){
    $scope.myviews = todo3.getok()
});