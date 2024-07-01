import type { ColSize } from "@canonical/react-components"
import logoPlaceHolder from "@assets/logo_placeholder.svg";
import ubuntu from "@assets/sponsors/ubuntu.svg";
import microsoft from "@assets/sponsors/microsoft.png";
import nhncloud from "@assets/sponsors/nhncloud.png";
import ahnlabCloudmate from "@assets/sponsors/AhnLab_CloudMate_full.svg";
import groMetric from "@assets/sponsors/grometric.svg";
import whaTapLabs from "@assets/sponsors/whatap.png";

export const sponsors = [
    {
        sponsorLevelName: "Diamond",
        sizeOnLargeScreen: 6 as ColSize,
        sizeOnMediumScreen: 6 as ColSize,
        sizeOnSmallScreen: 6 as ColSize,
        list: [
            {
                name: "Ubuntu",
                logoUrl: ubuntu.src,
                url: "https://ubuntu.com/",
                description: "Canonical은 대부분의 퍼블릭 클라우드 워크로드를 위한 OS이자 스마트 게이트웨이, 자율 주행 자동차 및 Advanced robot 등 새롭게 떠오르는 분야를 위한 OS인 Ubuntu를 개발 및 배포하는 회사입니다. Canonical은 상용 Ubuntu 사용자에게 엔터프라이즈 보안, 지원 및 서비스를 제공합니다."
            }
        ]
    },
    {
        sponsorLevelName: "Venue",
        sizeOnLargeScreen: 4 as ColSize,
        sizeOnMediumScreen: 4 as ColSize,
        sizeOnSmallScreen: 3 as ColSize,
        list: [
            {
                name: "Microsoft Korea",
                logoUrl: microsoft.src,
                url: "https://azure.microsoft.com/en-us/ubuntu/?ocid=AID3035196",
                description: "Microsoft는 지구상의 모든 사람과 조직이 더 많은 것을 성취할 수 있도록 역량을 지원하는 것을 사명으로 삼고 있습니다. Ubuntu 기반 워크로드는 Azure에서 가장 빠르게 성장하고 있는 워크로드 중 하나입니다. Microsoft는 Canonical과 제휴하여 Azure에서 동작하는 Ubuntu와 오픈 소스 커뮤니티 참여를 통해 Azure에 최적화된 커널, 개선된 성능, 고급 보안, 자동 패치 및 업데이트, 유연한 가격 책정 옵션을 제공합니다."
            }
        ]
    },
    {
        sponsorLevelName: "Gold",
        sizeOnLargeScreen: 4 as ColSize,
        sizeOnMediumScreen: 4 as ColSize,
        sizeOnSmallScreen: 3 as ColSize,
        list: [
            {
                name: "NHN Cloud",
                logoUrl: nhncloud.src,
                url: "https://www.nhncloud.com/kr?utm_source=ubucon&utm_medium=sponsor&utm_campaign=ubucon2024",
                description: "NHN Cloud는 대규모의 서비스 노하우와 오픈 소스 기술이 융화된 국내 최고의 퍼블릭 클라우드입니다. 데이터 센터 설비부터 소프트웨어를 커버하는 Full-Stack 자체 운영 기술력으로 클라우드 생태계 내의 모든 기술 역량을 보유하고 있으며, Open Stack 기반 클라우드로 멀티/하이브리드 환경에 대응할 수 있는 유연성을 갖췄습니다. Game, Fintech, AI, Notification 등 산업 분야별 최적화된 클라우드 서비스를 지금 확인해 보세요!"
            }
        ]
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
                description: "AhnLab CloudMate is the certified CSP company that located in Seoul, Korea. AhnLab CloudMate provides professional managed service on cloud environment. Based on experiences from MNCs, AhnLab CloudMate has its best certified engineers and developers in the cloud sector. Through the professional managed service, AhnLab CloudMate supports systematic management and its cloud infrastructure to the customers. Furthermore, AhnLab CloudMate also offers consulting for cloud service to industries that are adapting cloud infrastructure for the first time. Lastly, With Microsoft Azure MVP, AhnLab CloudMate has been contributed educational programs and activities to various vendors and many communities for years."
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
            {
                name: "WhaTap Labs",
                logoUrl: whaTapLabs.src,
                url: "https://www.whatap.io/",
                description: "WhaTap Labs 에서는 IT 모니터링 서비스인 “WhaTap” 을 제공하고 있습니다. 개발자와 운영자가 IT 서비스를 더 쉽고 안정적으로 운영할 수 있도록 하고 있습니다."
            }
        ]
    },
    {
        sponsorLevelName: "Supporter",
        sizeOnLargeScreen: 2 as ColSize,
        sizeOnMediumScreen: 2 as ColSize,
        sizeOnSmallScreen: 1 as ColSize,
    }
]