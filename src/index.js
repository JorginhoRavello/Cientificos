import router from './routes';

window.addEventListener('load', router);

// escuchar las rutas del hash que estamos viendo

window.addEventListener('hashchange', router);