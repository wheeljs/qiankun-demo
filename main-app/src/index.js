import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
        name: 'purehtml',
        entry: '//localhost:8081/about.html',
        container: '#subapp-container',
        activeRule: '/about',
    },
    {
        name: 'admin-app',
        entry: '//localhost:8080',
        container: '#subapp-container',
        activeRule: '/admin',
    }
]);

start();
