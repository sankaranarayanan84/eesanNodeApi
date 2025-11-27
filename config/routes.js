/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'POST /user': 'UserController.create',
  'GET /user': {controller: 'UserController', action: 'getAllUsers',
    cors: {
    allowOrigins: ['http://localhost:3000'],
    allowRequestMethods: 'GET,PUT,POST,OPTIONS,HEAD'
  }
  },
  'POST /login': 'AuthController.login',
  'POST /donation': {
    controller: 'DonationController',
    action: 'create',
    cors: {
      allowOrigins: ['http://localhost:3000'],
      allowRequestMethods: 'GET,PUT,POST,OPTIONS,HEAD'
    }
  },
  'GET /donation': {
    controller: 'DonationController',
    action: 'getDonation',
    cors: {
      allowOrigins: ['http://localhost:3000'],
      allowRequestMethods: 'GET'
    }
  },
  'GET /donation/user/:userId': {
    controller: 'DonationController',
    action: 'getDonationsByUser',
    cors: {
      allowOrigins: ['http://localhost:3000'],
      allowRequestMethods: 'GET'
    }
  },
  'POST /addbenificiary': 'BenificiaryController.create',
  'GET /getbenificiary': {
    controller: 'BenificiaryController',
    action: 'getBenificiary',
    cors: {
      allowOrigins: ['http://localhost:3000'],
      allowRequestMethods: 'GET'
    }
  }
  


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
