import { Outlet, Link, useLocation } from 'react-router-dom';
import Header from '../../../../bpl-tools/Admin/Header';

// License activation exists only in Cards Layout Pro, so the free build has no Activation link.
const getNavigation = (hasPro) => [
	{ name: 'Welcome', href: '/welcome' },
	{ name: 'Demos', href: '/demos' },
	{ name: 'Pricing', href: '/pricing' },
	{ name: 'Feature Comparison', href: '/feature-comparison' },
	...(PHCLB_PRO && hasPro ? [{ name: 'Activation', href: '/activation' }] : [])
];

const Layout = (props) => {
	const { isPremium, hasPro } = props;

	const location = useLocation();

	return <div className='bPlDashboard'>
		<Header {...props}>
			<nav className='bPlDashboardNav'>
				{getNavigation(hasPro)
					?.filter(item => !isPremium || !['/purchase', '/pricing', '/feature-comparison'].includes(item.href)) // Hide link for premium users
					?.map((item, index) => <Link
						key={index}
						to={item.href}
						className={`navLink ${location.pathname === item.href ? 'active' : ''}`}
					>
						{item.name}
					</Link>)}
			</nav>
		</Header>

		<main className='bPlDashboardMain'>
			<Outlet />
		</main>
	</div>
}
export default Layout;