# [Google's Business Communications: Node.js Client](https://github.com/google-business-communications/nodejs-businesscommunications)

[Business Communications](https://developers.google.com/business-communications/business-messages/reference/business-communications/rest) is an API for creating, managing, and launching agents for Google's Verified SMS and Business Messages platforms.

## Documentation

The documentation for the Business Commmunications API can be found [here](https://developers.google.com/business-communications/business-messages/reference/business-communications/rest).

## Quickstart

### Before you begin

1.  [Register with Business Messages](https://developers.google.com/business-communications/business-messages/guides/set-up/register).
1.  Once registered, follow the instructions to [enable the APIs for your project](https://developers.google.com/business-communications/business-messages/guides/set-up/register#enable-api).

### Installing the client library

```bash
npm install businesscommunications
```

### Using the client library

```javascript
function initClientLibrary(serviceAccountFile) {
  // Get the GoogleAPI library
  const {google} = require('googleapis');
  const {businesscommunications} = require('businesscommunications');

  // Set the scope that we need for the Business Communications API
  const scopes = [
    'https://www.googleapis.com/auth/businesscommunications',
  ];

  // Set the private key to the service account file
  const privatekey = require(serviceAccountFile);

  // Configure a JWT auth client
  let authClient = new google.auth.JWT(
    privatekey.client_email,
    null,
    privatekey.private_key,
    scopes,
  );

  // Initialize the client library
  let bcApi = new businesscommunications.businesscommunications_v1.Businesscommunications({}, google);

  return new Promise(function(resolve, reject) {
    // Authenticate request
    authClient.authorize(function(err, tokens) {
      if (err) {
        console.log('Error initiatizing library.');
      } else {
        resolve({authClient: authClient, bcApi: bcApi});
      }
    });
  });
}

// Authenticate with the API using a service account key file and
// create a test brand
const apiConnector = initClientLibrary('your-service-account-key-file-locatoin');
apiConnector.then((apiObject) => {
  // Setup the parameters for the API call
  const apiParams = {
    auth: apiObject.authClient,
    resource: {
      displayName: 'Test Brand',
    },
  };

  // Create a new brand with the name "Test Brand"
  apiObject.bcApi.brands.create(apiParams, {}, (err, response) => {
    if (err !== undefined && err !== null) {
      console.log('Error creating brand: ' + err);
    } else {
      // Print newly created brand details
      console.log(response.data);
    }
  });
});
```

## Samples

See [code examples](https://github.com/google-business-communications/bc-bm-nodejs-command-line-examples) to see example
usage for most API features. The samples' `README.md` has instructions for running the samples.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| Brand CRUD Operations | [source code](https://github.com/google-business-communications/bc-bm-nodejs-command-line-examples/blob/master/brand_sample.js) |
| Agent CRUD Operations | [source code](https://github.com/google-business-communications/bc-bm-nodejs-command-line-examples/blob/master/agent_sample.js) |
| Location CRUD Operations | [source code](https://github.com/google-business-communications/bc-bm-nodejs-command-line-examples/blob/master/location_sample.js) |

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/google-business-communications/nodejs-businesscommunications/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/google-business-communications/nodejs-businesscommunications/LICENSE)
