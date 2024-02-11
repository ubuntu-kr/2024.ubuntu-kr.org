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
}
export default function GlobalNavigation(props: GlobalNavigationProps) {
	return (
		<Navigation
			items={props.navItems}
			itemsRight={props.navItemsRight}
			logo={{
				src: 'https://assets.ubuntu.com/v1/82818827-CoF_white.svg',
				title: props.logoTitle,
				url: '/'
			}}
			theme={Theme.DARK}
		/>
	)
}