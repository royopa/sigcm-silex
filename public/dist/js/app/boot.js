//Comparado com o ASP.NET MVC angular é um framework MVC
//temos controllers, views e um arquivo de inicialização (rotas, urls amigáveis)
//É dentro desse arquivo que vamos criar nossa aplicação em angular
//Esse arquivo é como se fosse o arquivo RouteConfig (APP_START)
//arquivos de configuração, urls amigáveis, etc.

//Criamos um módulo (Aplicação em Angular chamada SIGCM)
//Se quiser criar algum componente, biblioteca para rodar no angular
//É sempre MODULE
//O angular é inteligente, é rápido, é leve
//Ele trabalha com INJEÇÂO DE DEPENDÊNCIA (DI)
//Para habilitar comandos temos que injetar módulos
//Como se fosse o ADD REFERENTE e o USING NAMESPACE
//Para definir urls amigáveis temos que injetar o módulo NGROUTE
var app = angular.module("SIGCM", ["ngRoute","datatables","ngResource"]);

//Definimos as urls amigáveis, as rotas de navegação no projeto
//Sempre que o usuário digitar uma URL vai abrir um CONTROLLER
//e uma VIEW (Rota Padrão do MVC) {Controller}/{Action}{Id}
//Tudo que começa com $ não é JQUERY são objetos internos do
//Angular. Esse objeto routeProvider desceu do módulo NGROUTE
//Deve ter uma URL amigável para cada página que você quiser abrir


/*
app.config(function ($routeProvider) {
    $routeProvider.when("/consulta", {
        controller: "consultaController",
        templateUrl: "app/views/form-consulta.html"
    });

    $routeProvider.when("/funcionarios", {
        controller: "funcionariosController",
        templateUrl: "app/views/lista-funcionarios.html"
    });

    $routeProvider.when("/portfolio_interno", {
        controller: "portfolioInternoController",
        templateUrl: "app/views/lista-portfolio-interno.html"
    });

    $routeProvider.when("/resumo-historico", {
        controller: "portfolioInternoController",
        templateUrl: "app/views/resumo-historico.html"
    });

    //Essa é a rota padrão se o usuário não informou nenhuma URL
    //No navegador AMIGÁVEL, vai redirecionar para a rota, que no
    //nosso caso é a listagem de contatos
    $routeProvider.otherwise({ redirectTo: "/consulta" });
}
*/
);
