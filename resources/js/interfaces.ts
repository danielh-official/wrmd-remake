export interface UserInterface {
    current_team: {
        name: string;
    },
    all_teams: TeamInterface[];
    current_team_id: number;
    profile_photo_url: string;
    name: string;
    email: string;
}

export interface TeamInterface {
    id: number;
    name: string;
}

export interface JetstreamInterface {
    hasTeamFeatures: boolean;
    canCreateTeams: boolean;
    managesProfilePhotos: boolean;
    hasApiFeatures: boolean;
}

export interface ConfigInterface {
    custom: {
        pages: {
            features: string;
            getHelp: string;
            makeADonation: string;
            forgotPassword: string;
            register: string;
            termsAndPolicies: string;
            about: string;
            blog: string;
            contact: string;
            donateMonthly: string;
            donateNow: string;
            testimonials: string;
        }
    }
}

export interface RouteInterface {
    uri: string;
    methods: string[];
}

export interface ZiggyInterface {
    url: string;
    port: string | null;
    defaults: object;
    routes: {
        login: RouteInterface
        logout: RouteInterface
        'password.request': RouteInterface,
        'password.reset': RouteInterface,
    };
}
