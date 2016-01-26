app.controller("funcionariosController", function ($scope, $http, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder, $filter) {
    // configuração do datatables
    $scope.dtOptions = DTOptionsBuilder
        .fromSource('http://192.168.33.10/funcionarios_json')
        .withPaginationType('full_numbers')
        .withDisplayLength(40)
    ;
    
    $scope.dtColumns = [
        DTColumnBuilder
            .newColumn('matricula')
            .withTitle('Matrícula')
            .renderWith(function(data, type) {
                return $filter('lowercase')(data); //lowercase filter 
            }),
        DTColumnBuilder.newColumn('nome').withTitle('Nome'),
        DTColumnBuilder.newColumn('coordenacaoTi').withTitle('Coord Ti'),
        DTColumnBuilder.newColumn('coordenacaoProjetosTi').withTitle('Coord Proj TI'),
        DTColumnBuilder.newColumn('funcao').withTitle('Função'),
        DTColumnBuilder.newColumn('tipoFuncao').withTitle('Tipo função'),
        DTColumnBuilder
            .newColumn('dataNascimento')
            .withTitle('Data nascimento')
            .renderWith(function(data, type) {
                return $filter('date')(data, 'dd/MM/yyyy'); //date filter 
            }),
    ];

    $scope.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(6).notSortable()
    ];
});
