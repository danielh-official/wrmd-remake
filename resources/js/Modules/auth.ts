import {Inertia} from "@inertiajs/inertia";

const logout = () => {
    // @ts-ignore
    Inertia.post(route('logout'));
};

export { logout }
