import { registerMicroApps, start } from 'qiankun';

const loader = appName => (loading) => console.log(`[${appName}] loading state change: ${loading}`);

registerMicroApps([
    {
        name: 'purehtml',
        entry: '//localhost:8081/about.html',
        container: '#subapp-container',
        loader: loader('purehtml'),
        activeRule: '/about',
    },
    {
        name: 'admin-app',
        entry: '//localhost:8080',
        container: '#subapp-container',
        loader: loader('admin-app'),
        activeRule: '/admin',
    }
]);

start();
