switch(__page){
    case 'login' : 
        require('./pages/home/login');
        break;
    case 'blank' : 
        require('./pages/admin/blank');
        break;
}