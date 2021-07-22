const render = (props) => {
    props.container.innerHTML = 'About us works!';
    return Promise.resolve();
};

((global) => {
    global['purehtml'] = {
        bootstrap: () => {
            console.log('purehtml bootstrap');
            return Promise.resolve();
        },
        mount: (props) => {
            console.log('purehtml mount');
            return render(props);
        },
        unmount: () => {
            console.log('purehtml unmount');
            return Promise.resolve();
        },
    };
})(window);