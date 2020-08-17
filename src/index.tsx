import { useEffect, FunctionComponent } from 'react';

interface ReactIntegrationsProps {
	onLoaded: () => void;
	scriptId: string;
	scriptSrc: string;
}

const ReactIntegrations: FunctionComponent<ReactIntegrationsProps> = ({
	onLoaded,
	scriptId,
	scriptSrc
}) => {
	useEffect(() => {
		const script = document.createElement('script');
		script.async = true;
		script.id = scriptId;
		script.src = scriptSrc;
		script.addEventListener('load', onLoaded);
		document.body.appendChild(script);
	}, [scriptId, scriptSrc, onLoaded]);

	return null;
};

export default ReactIntegrations;
