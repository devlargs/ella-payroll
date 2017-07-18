switch(__page){
    case 'login' : 
        require('./pages/home/login');
        break;
    case 'dashboard' : 
        require('./pages/admin/dashboard');
        break;
}