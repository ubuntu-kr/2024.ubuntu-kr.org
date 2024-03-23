import UbuntuKrCircleWhite from "@assets/UbuntuKrCircleWhite.svg"
import UbuntuKoreaLogo from "@assets/UbuntuKorea.svg"
import GroupPhoto2023 from "@assets/group_photo.jpg"
import { useTranslations } from "@i18n/utils";
import { languages } from '@i18n/ui';


export const config = {
    siteTitle: "UbuCon Korea 2024",
    siteDescription: "Microsoft Korea, Seoul, South Korea | August 10th",
    siteHeaderTagLogoImg: UbuntuKrCircleWhite.src,
    socialMedia: {
        twitter: "UbuntuKrOrg"
    },
    forum: {
        forumEndpoint: "https://discourse.ubuntu-kr.org",
        forumSlug: "/tags/c/notice/9/ubucon-kr-2023",
    },
    featuredSpeakers: {
        indicoExportUrl: "https://events.canonical.com/export/event/48.json?detail=contributions&occ=yes&pretty=yes",
        contributionIds: [22, 5, 19, 16, 8, 4]
    },
    cityBanner: {
        title: "cityBanner.title",
        description: 'cityBanner.description',
        image: GroupPhoto2023.src,
        buttons: [
            {
                label: 'nav.venue',
                url: '/venue-and-safety'
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
    navigation: (locale: string) => {
        const t = useTranslations(locale);
        return [
            {
                label: t('nav.about'),
                url: `/${locale}/about`
            },
            {
                label: t('nav.venue'),
                url: `/${locale}/venue-and-safety`
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
                label: t('nav.sponsors'),
                items: [
                    {
                        label: t('nav.sponsors.join'),
                        url: `/${locale}/sponsors/become-a-sponsor`
                    },
                    {
                        label: t('nav.sponsors.list'),
                        url: `/${locale}/sponsors/our-sponsors`
                    }
                ]
            }
        ]
    },
    navigationRight: (locale: string) => {
        const t = useTranslations(locale);
        const langPickerItems = Object.entries(languages).map(([lang, label]) => ({ label: label, url: `/${lang}/` }));
        return [
            /* {
                label: '🎟️',
                url: '#'
            }, */
            {
                label: '🌐',
                items: langPickerItems
            }
        ]
    }
}