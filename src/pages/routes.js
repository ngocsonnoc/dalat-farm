
import HomePage from "./HomePage";
import NotFound from "./NotFound";

export const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    }, {
        path: '',
        exact: true,
        main: () => <NotFound />
    },
]