import Vue from 'vue';
import App from './App.vue';

let app;

export async function bootstrap() {
    console.log('admin app bootstraped');
}

export async function mount() {
    app = new Vue({
        render: (h) => h(App),
    }).$mount('#app');
}

export async function unmount() {
    if (app) {
        app.$destroy();
        app = null;
    }
}
