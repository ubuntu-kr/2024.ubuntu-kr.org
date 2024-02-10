import UbuntuIndiaLogo from "@assets/UbuntuIndia.svg"
import UbuConAsiaCommitteeLogo from "@assets/UbuConAsiaCommittee.svg"
import OSCollectiveLogo from "@assets/oscollective.webp";
import JaipurPhoto from "@assets/jaipur.jpg"

export const config = {
    siteTitle: "UbuCon Korea 2024",
    siteDescription: "Microsoft Korea, Seoul, South Korea | August 10th",
    socialMedia: {
        twitter: "UbuntuKrOrg"
    },
    blog: {
        rssFeedUrl: "https://blog.ubucon.asia/tags/uca24/index.xml",
        viewMoreUrl: "https://blog.ubucon.asia/tags/uca24"
    },
    cityBanner: {
        title: "Let's meet in the pink city of innovation!",
        description: 'Learn about the Jaipur, India the city where UbuCon Korea 2024 will be held. And plan your trip today!',
        image: JaipurPhoto.src,
        buttons: [
            {
                label: 'Venue & Safety',
                url: '/venue-and-travel/venue-and-safety'
            },
            {
                label: 'Getting to the city',
                url: '/venue-and-travel/getting-to-city'
            },
            {
                label: 'Exploring the city',
                url: '/venue-and-travel/explore-city'
            },
        ]
    },
    footer: {
        copyright: "© 2024-Present Ubuntu Korea Community. Ubuntu and Canonical are registered trademarks of Canonical Ltd. Unless otherwise noted, content licensed under CC BY 4.0 source code under MIT.",
        contactUs: "mailto:contact@ubucon.asia",
        srcRepoUrl: "https://github.com/ubucon-asia/2024.ubucon.asia",
        organizers: [
            { name: "Ubuntu Korea Community", logoImage: UbuntuIndiaLogo.src, link: "https://ubuntu-kr.org" }
        ]
    },
    navigation: [
        {
            label: 'About',
            url: '/about'
        },
        {
            label: 'Venue & Travel',
            items: [
                {
                    label: 'Venue & Safety',
                    url: '/venue-and-travel/venue-and-safety'
                },
                {
                    label: 'Getting to the city',
                    url: '/venue-and-travel/getting-to-city'
                },
                {
                    label: 'Exploring the city',
                    url: '/venue-and-travel/explore-city'
                },
                {
                    label: 'Accommodations',
                    url: '/venue-and-travel/accommodations'
                },
                {
                    label: 'Travel grant',
                    url: '/venue-and-travel/travel-grant'
                }
            ],
        },
        {
            label: 'Programs',
            items: [
                {
                    label: 'Important dates',
                    url: '/programs/important-dates'
                },
                {
                    label: 'Call for proposals (TBD)',
                    url: '#'
                },
                {
                    label: 'Schedules (TBD)',
                    url: '#'
                },
                {
                    label: 'Social events',
                    url: '/programs/social-events'
                }
            ]
        },
        {
            label: 'Sponsors/Patrons',
            items: [
                {
                    label: 'Become a sponsor',
                    url: '/sponsors/become-a-sponsor'
                },
                {
                    label: 'Our sponsors',
                    url: '/sponsors/our-sponsors'
                }
            ]
        },
        {
            label: 'News',
            url: 'https://blog.ubucon.asia/'
        },
        {
            label: 'Docs',
            url: 'https://docs.ubucon.asia'
        }
    ],
    navigationRight: [
        {
            label: 'Register',
            url: '#'
        }
    ]
}