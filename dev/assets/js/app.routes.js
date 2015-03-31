app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/404');

    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'pages/home.html',
        controller: 'HomeController as Home'
    });

    $stateProvider.state('404', {
        url: '/404',
        templateUrl: 'pages/404.html',
        controller: '404Controller as Error'
    });

    $stateProvider.state('resume', {
        url: '/resume',
        templateUrl: 'pages/resume.html',
        controller: 'ResumeController as Resume'
    });

    $stateProvider.state('portfolio', {
        url: '/portfolio',
        templateUrl: 'pages/portfolio.html',
        controller: 'PortfolioController as Portfolio'
    });

    $stateProvider.state('blog', {
        url: '/blog',
        templateUrl: 'pages/blog.html',
        controller: 'BlogController as Blog'
    });

});
