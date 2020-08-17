<p align="center">
  <h3 align="center">React Integrations</h3>
  <p align="center">
  <a href="https://www.npmjs.org/package/react-integrations"><img src="https://img.shields.io/npm/v/react-integrations.svg?style=flat-square" alt="npm"></a>
  <a href="https://travis-ci.org/ooade/react-integrations"><img src="https://img.shields.io/travis/ooade/react-integrations.svg?style=flat-square" alt="travis"></a>
  <a href="https://github.com/ooade/react-integrations"><img src="https://img.shields.io/codecov/c/github/ooade/react-integrations.svg?style=flat-square" alt="code coverage"></a>
  <a href="https://www.npmjs.org/package/react-integrations"><img src="https://img.shields.io/npm/dm/react-integrations.svg?style=flat-square" alt="downloads/month"></a>
  <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PR(s)-welcome-brightgreen.svg?style=flat-square" alt="pullrequest"></a>
  <a href="http://www.firsttimersonly.com"><img src="https://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat-square" alt="firsttimersonly"></a>
  </p>
</p>

## Installation

```sh
yarn add react-integrations
```

- It's quite small in size.
- It's built with TypeScript.

## Usage

```jsx
import ReactIntegrations from 'react-integrations';

const App = () => {
	const handleMonoLoaded = () => {
		const connect = new window.Connect('YOUR CONNECT PUBLIC KEY', options);
		connect.setup();
	};

	return (
		<ReactIntegrations
			scriptSrc="https://connect.withmono.com/connect.js"
			scriptId="mono-script"
			onLoaded={handleMonoLoaded}
		></ReactIntegrations>
	);
};
```

## LICENSE

MIT
