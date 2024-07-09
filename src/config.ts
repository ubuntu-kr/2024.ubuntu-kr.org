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
        forumSlug: "/tags/c/notice/9/ubucon-kr-2024",
    },
    featuredSpeakers: {
        indicoExportUrl: "https://events.canonical.com/export/event/48.json?detail=contributions&occ=yes&pretty=yes",
        contributionIds: [7, 21, 10],
        speakerIds: [{ db_id: 562, user: 1624 }, { db_id: 525, user: 2692 }, { db_id: 524, user: 2699 }, { db_id: 526, user: 2658 }]
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
        privacyPolicy: "https://disclosures.ubuntu-kr.org/privacy-policy/uck24/",
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
                label: t('nav.programs'),
                items: [
                    {
                        label: t('nav.cfp'),
                        url: '/cfp'
                    },
                    {
                        label: t('nav.schedules'),
                        url: '/schedules'
                    },
                    {
                        label: t('nav.socialevents'),
                        url: `/${locale}/programs/social-events`
                    },
                    {
                        label: t('nav.ksp'),
                        url: `https://github.com/ubuntu-kr/ksp-toolkits/blob/master/ksp/ksp-20240810/readme.md`
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
                    },
                    {
                        label: t('nav.patrons'),
                        url: `/${locale}/patrons`
                    }
                ]
            }
        ]
    },
    navigationRight: (locale: string, page: { path: string, i18n: boolean}) => {
        const t = useTranslations(locale);
        const langPickerItems = Object.entries(languages).map(([lang, label]) => ({ 
            label: label, url: page.i18n ? `/${lang}${page.path}` : `${page.path}` 
        }));
        return [
            {
                label: '🎟️',
                url: '/tickets'
            },
            {
                label: '🌐',
                items: langPickerItems
            }
        ]
    }
}