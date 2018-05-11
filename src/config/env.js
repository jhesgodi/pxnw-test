import Config from 'react-native-config';

// FIXME: Fix issue with package react-native-config
// is not properly realoading variables from .env file at root

export const githubAPI = {
  graphql: 'https://api.github.com/graphql/', // Config.GIHUB_API_GRAPHQL_URL,
  v3: 'https://api.github.com/', //Config.GIHUB_API_V3_URL,
};

export const AuthHelper = {
  url: 'auth-pxnwchallenge.wedeploy.io',
};

if (__DEV__) {
  console.log('Config: ', Config);
  console.log('githubAPI: ', githubAPI);
  console.log('AuthHelper: ', AuthHelper);
}
