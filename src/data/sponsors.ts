import type { ColSize } from "@canonical/react-components"
import logoPlaceHolder from "@assets/logo_placeholder.svg";
import groMetric from "@assets/sponsors/grometric.svg";
import ahnlabCloudmate from "@assets/sponsors/ahnlab_cloudmate.png";

export const sponsors = [
    {
        sponsorLevelName: "Diamond",
        sizeOnLargeScreen: 6 as ColSize,
        sizeOnMediumScreen: 6 as ColSize,
        sizeOnSmallScreen: 6 as ColSize,
    },
    {
        sponsorLevelName: "Venue",
        sizeOnLargeScreen: 4 as ColSize,
        sizeOnMediumScreen: 4 as ColSize,
        sizeOnSmallScreen: 3 as ColSize,
    },
    {
        sponsorLevelName: "Gold",
        sizeOnLargeScreen: 4 as ColSize,
        sizeOnMediumScreen: 4 as ColSize,
        sizeOnSmallScreen: 3 as ColSize,
    },
    {
        sponsorLevelName: "Silver",
        sizeOnLargeScreen: 3 as ColSize,
        sizeOnMediumScreen: 3 as ColSize,
        sizeOnSmallScreen: 2 as ColSize,
        list: [
            {
                name: "안랩클라우드메이트",
                logoUrl: ahnlabCloudmate.src,
                url: "https://www.cloudmt.co.kr",
                description: "Ahnlab CloudMate is the certified CSP company that located in Seoul, Korea. Ahnlab CloudMate provides professional managed service on cloud environment. Based on experiences from MNCs, Ahnlab CloudMate has its best certified engineers and developers in the cloud sector. Through the professional managed service, Ahnlab CloudMate supports systematic management and its cloud infrastructure to the customers. Furthermore, Ahnlab CloudMate also offers consulting for cloud service to industries that are adapting cloud infrastructure for the first time. Lastly, With Microsoft Azure MVP, Ahnlab CloudMate has been contributed educational programs and activities to various vendors and many communities for years."
            }
        ]
    },
    {
        sponsorLevelName: "Bronze",
        sizeOnLargeScreen: 2 as ColSize,
        sizeOnMediumScreen: 2 as ColSize,
        sizeOnSmallScreen: 1 as ColSize,
        list: [
            {
                name: "GroMetric",
                logoUrl: groMetric.src,
                url: "http://www.grometric.kr/",
                description: "그로메트릭은 고객의 지속가능한 성장을 위한 인텔리전스와 안전함을 제공합니다. 중장기적인 관점에서 데이터 메트릭을 통한 고객의 성장을 돕는 솔루션 개발을 목표하고 있어요. 아울러 다양한 OpenSource Software, Cloud, Security 솔루션으로 여러분의 성장과 함께 하고 싶어요."
            },
        ]
    },
    {
        sponsorLevelName: "Supporter",
        sizeOnLargeScreen: 2 as ColSize,
        sizeOnMediumScreen: 2 as ColSize,
        sizeOnSmallScreen: 1 as ColSize,
    }
]