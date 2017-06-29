app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/rent/flat", {
            templateUrl: "view/rent/flat/index.html",
            controller: "rentFlatCtrl"
        });
    }
]);

app.controller('rentFlatCtrl', function($scope){

    // $scope.outputBrowsers;
    // $scope.webBrowsersGrouped = [
    //     {
    //         name: '<strong>Modern Web Browsers</strong>',
    //         msGroup: true
    //     },
    //     { 
    //         icon: '<img  src="https://cdn1.iconfinder.com/data/icons/fatcow/32/opera.png" />',                         
    //         name: 'Opera',              
    //         maker: '(Opera Software)',        
    //         ticked: true
    //     },
    //     { 
    //         icon: '<img  src="https://cdn1.iconfinder.com/data/icons/fatcow/32/internet_explorer.png" />',             
    //         name: 'Internet Explorer',  
    //         maker: '(Microsoft)',
    //         ticked: false   
    //     },
    //     { 
    //         icon: '<img  src="https://cdn1.iconfinder.com/data/icons/humano2/32x32/apps/firefox-icon.png" />',         
    //         name: 'Firefox',            
    //         maker: '(Mozilla Foundation)',    
    //         ticked: true    
    //     },
    //     { 
    //         icon: '<img  src="https://cdn1.iconfinder.com/data/icons/fatcow/32x32/safari_browser.png" />',             
    //         name: 'Safari',             
    //         maker: '(Apple)',                 
    //         ticked: false   
    //     },
    //     { 
    //         icon: '<img  src="https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/32/chrome.png" />',  
    //         name: 'Chrome',             
    //         maker: '(Google)',                
    //         ticked: true   
    //     },
    //     {
    //         msGroup: false
    //     },
    //     {
    //         name: '<strong>Classic Web Browsers</strong>',
    //         msGroup: true
    //     },
    //     { 
    //         icon: '<img  src="http://www.ucdmc.ucdavis.edu/apps/error/nojavascript/images/netscape_icon.jpg" />',      
    //         name: 'Netscape Navigator', 
    //         maker: '(Netscape Corporation)',  
    //         ticked: true    
    //     },
    //     { 
    //         icon: '<img  src="http://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Amaya_logo_65x50.png/48px-Amaya_logo_65x50.png" />',             
    //         name: 'Amaya',  
    //         maker: '(Inria & W3C)',             
    //         ticked: true   
    //     },
    //     {
    //         icon: '<img  src="http://upload.wikimedia.org/wikipedia/commons/8/8c/WorldWideWeb_Icon.png" />',
    //         name: 'WorldWideWeb Nexus',
    //         maker: '(Tim Berners-Lee)',
    //         ticked: false
    //     },
    //     {
    //         msGroup: false
    //     }
    // ];

    // $scope.metroStationOutput;



    $scope.params = [
        {name: 'Цена', socr: 'Цена', check: true},
        {name: 'Об / Раз', socr: 'Об/Раз', check: false},
        {name: 'Улица', socr: 'Улица', check: false},
        {name: 'Дом', socr: 'Дом', check: false},
        {name: 'Корпус', socr: 'Кор', check: false},
        {name: 'Этаж', socr: 'Этаж', check: false},
        {name: 'Мебель', socr: 'Мебель', check: false},
        {name: 'Холодильник', socr: 'Хол', check: false},
        {name: 'С/м', socr: 'С/м', check: false},
        {name: 'Телефон', socr: 'Тел', check: false},
        {name: 'Телевизор', socr: 'ТВ', check: false},
        {name: 'Предложения', socr: 'Пред.', check: false},
        {name: 'Срок аренды', socr: 'Срок', check: false},
        {name: 'Примечание', socr: 'Примечание', check: false},
        {name: '-', socr: '-', check: false},
        {name: '-', socr: '-', check: false},
        {name: 'Заметки', socr: 'Змт', check: false},
        {name: 'Ответственный', socr: 'Ответств', check: false},
        {name: 'Телефоны', socr: 'Телефоны', check: false},
        {name: 'Дата измененения', socr: 'Изменен', check: false},
        {name: 'Дата добавления', socr: 'Добавлен', check: false},
        {name: 'Статус', socr: 'Статус', check: false},
        {name: '-', socr: '-', check: false},
        {name: '-', socr: '-', check: false},
        {name: '-', socr: '-', check: false},
        {name: 'Уникальный ID', socr: 'ID', check: false}
    ];

});