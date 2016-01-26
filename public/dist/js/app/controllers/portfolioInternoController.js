app.controller("portfolioInternoController", function ($scope, $http, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder, $filter) {
    // configuração do datatables
    $scope.dtOptions = DTOptionsBuilder
        .fromSource('http://sigcm-php.dev/portfolio-interno')
        .withPaginationType('full_numbers')
        .withDisplayLength(50)
    ;
    
    $scope.dtColumns = [
        DTColumnBuilder.newColumn('sigla').withTitle('Sigla'),
        DTColumnBuilder.newColumn('gnAplicativos').withTitle('GN Aplicativos'),
        DTColumnBuilder.newColumn('coordenadorProjetosMz').withTitle('Coord Proj Matriz'),
        DTColumnBuilder.newColumn('coordenadorTi').withTitle('Coord Ti'),
        DTColumnBuilder.newColumn('coordenadorProjetosTi').withTitle('Coord Proj Ti'),
        DTColumnBuilder.newColumn('dominioCarteira').withTitle('Domínio/Carteira'),
        DTColumnBuilder.newColumn('fswContrato').withTitle('FSW/Contrato'),
        DTColumnBuilder.newColumn('dataUltimaAtualizacao').withTitle('Última Atualização'),
    ];

    $scope.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(7).notSortable()
    ];
});
