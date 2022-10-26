// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'frontendenzo',
    appId: '1:882168423681:web:f835290d1c1f0932722700',
    storageBucket: 'frontendenzo.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyDF1AClNCH2EWaGYHkk8hJj6SlB9W1-DIY',
    authDomain: 'frontendenzo.firebaseapp.com',
    messagingSenderId: '882168423681',
  },
  production: false,

  URL: "http://localhost:8080/", 
  //URL: "https://backendenzo.herokuapp.com/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
