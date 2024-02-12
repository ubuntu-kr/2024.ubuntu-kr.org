import {
	Navigation, Theme
} from "@canonical/react-components";
import type {
	NavItem
} from "@canonical/react-components";

type GlobalNavigationProps = {
	logoTitle: string
	navItems: NavItem[]
	navItemsRight: NavItem[]
	logoImgSrc: string
}
export default function GlobalNavigation(props: GlobalNavigationProps) {
	return (
		<Navigation
			items={props.navItems}
			itemsRight={props.navItemsRight}
			logo={{
				src: props.logoImgSrc,
				title: props.logoTitle,
				url: '/'
			}}
			theme={Theme.DARK}
		/>
	)
}