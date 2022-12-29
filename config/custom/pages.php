<?php

return [
    'features' => env('FEATURES_ROUTE', 'https://www.wrmd.org/features'),
    'getHelp' => env('GET_HELP_ROUTE', 'https://help.wrmd.org/'),
    'makeADonation' => env('MAKE_DONATION_ROUTE', 'https://www.wrmd.org/donate'),
    'register' => env('REGISTER_ROUTE', 'https://www.wrmd.org/register'),
    'forgotPassword' => env('FORGOT_PASSWORD_ROUTE', 'https://www.wrmd.org/password/reset'),
    'termsAndPolicies' => env('TERMS_AND_POLICIES_ROUTE', 'https://www.wrmd.org/about/terms-and-conditions'),
    'about' => env('ABOUT_ROUTE', 'https://www.wrmd.org/about'),
    'blog' => env("BLOG_ROUTE", 'https://blog.wrmd.org/'),
    'contact' => env('CONTACT_ROUTE', 'https://www.wrmd.org/about/contact')
];
