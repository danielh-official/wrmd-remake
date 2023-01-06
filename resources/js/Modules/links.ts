import {ConfigInterface} from "../interfaces";

export const navbarLinks = (props: {
    config: ConfigInterface
}) => {
    return [
        {
            condition: props.config.custom.pages.features == 'https://www.wrmd.org/features',
            name: "Features",
            href: props.config?.custom.pages.features
        },
        {
            condition: props.config.custom.pages.getHelp == 'https://help.wrmd.org/',
            name: "Get Help",
            href: props.config?.custom.pages.getHelp
        },
        {
            condition: false,
            name: "Sign In",
            // @ts-ignore
            href: route('login')
        }
    ];
}
