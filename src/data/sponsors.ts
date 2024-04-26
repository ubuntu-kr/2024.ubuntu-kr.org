import type { ColSize } from "@canonical/react-components"
import logoPlaceHolder from "@assets/logo_placeholder.svg";
import groMetric from "@assets/sponsors/grometric.svg";

export const sponsors = [
    {
        sponsorLevelName: "Diamond",
        sizeOnLargeScreen: 6 as ColSize,
        sizeOnMediumScreen: 6 as ColSize,
        sizeOnSmallScreen: 6 as ColSize,
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