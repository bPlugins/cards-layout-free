import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Welcome from '../../../../bpl-tools/Admin/Welcome';
import Demos from '../../../../bpl-tools/Admin/Demos';
import Pricing from '../../../../bpl-tools/Admin/Pricing';
import FeatureCompare from '../../../../bpl-tools/Admin/FeatureCompare';
// License activation screen: Pro build only, so the free plugin ships no license code.
const Activation = PHCLB_PRO ? require('../../../../bpl-tools/Admin/Activation').default : null;
import OurPlugins from '../../../../bpl-tools/Admin/OurPlugins';

import Layout from './Layout';
import { demoInfo, pricingInfo, welcomeInfo } from '../utils/data';

const App = (props) => {
	const { isPremium, hasPro, adminUrl } = props;

	return <Router>
		<Routes>
			<Route path='/' element={<Layout {...props} />}>
				<Route index element={<Welcome {...props} {...welcomeInfo(adminUrl)} />} />

				<Route path='welcome' element={<Welcome {...props} {...welcomeInfo(adminUrl)} />} />

				<Route path='demos' element={<Demos demoInfo={demoInfo} {...props} />} />

				{!isPremium && <Route path='pricing' element={<Pricing pricingInfo={pricingInfo} options={{}} {...props} />} />}

				{!isPremium && <Route path='feature-comparison' element={<FeatureCompare plans={['free', 'pro']} {...props} />} />}

				{PHCLB_PRO && hasPro && <Route path='activation' element={<Activation {...props} />} />}

				<Route path='our-plugins' element={<OurPlugins {...props} />} />

				<Route path='*' element={<Navigate to='/welcome' replace />} />
			</Route>
		</Routes>
	</Router>
}
export default App;