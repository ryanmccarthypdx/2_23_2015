studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
  $scope.students = [];
  $scope.addStudent = function() {
    $scope.students.push({ name: $scope.studentName });
    $scope.studentName = null;
  };
  $scope.deleteStudent = function(student) {
    $scope.students.splice($scope.students.indexOf(student), 1);
  }
});
