
export const fakeAuth = {
    authenticate() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve( true);
            })
        });
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(() => {cb();}, 100);
    }
};
