import UbuntuKoreaLogo from "@assets/UbuntuKorea.svg"
import GroupPhoto2023 from "@assets/group_photo.jpg"

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
        title: "cityBanner.title",
        description: 'cityBanner.description',
        image: GroupPhoto2023.src,
        buttons: [
            {
                label: 'nav.venue',
                url: '/venue-and-travel/venue-and-safety'
            }
        ]
    },
    footer: {
        copyright: "© 2024-Present Ubuntu Korea Community. Ubuntu and Canonical are registered trademarks of Canonical Ltd. Unless otherwise noted, content licensed under CC BY 4.0 source code under MIT.",
        contactUs: "mailto:contact@ubuntu-kr.org",
        srcRepoUrl: "https://github.com/ubuntu-kr/2024.ubuntu-kr.org",
        organizers: [
            { name: "Ubuntu Korea Community", logoImage: UbuntuKoreaLogo.src, link: "https://ubuntu-kr.org" }
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