const render = (props) => {
    const username = document.createElement('span');
    username.textContent = 'Guest';
    props.onGlobalStateChange((state) => {
        if (state.user != null) {
            username.textContent = state.user.username;
            const avatar = document.createElement('img');
            avatar.src = state.user.avatar;
            avatar.style['width'] = '20px';
            avatar.style['height'] = '20px';
            avatar.style['borderRadius'] = '50%';
            username.appendChild(avatar);
        }
    }, true);
    props.container.innerHTML = 'About us works! Welcome ';
    props.container.appendChild(username);
    return Promise.resolve();
};

((global) => {
    global['purehtml'] = {
        bootstrap: () => {
            console.log('[purehtml] bootstrap');
            return Promise.resolve();
        },
        mount: (props) => {
            console.log('[purehtml] mount', props);
            return render(props);
        },
        unmount: () => {
            console.log('[purehtml] unmount');
            return Promise.resolve();
        },
    };
})(window);