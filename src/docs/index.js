const expressJSDocSwagger = require('express-jsdoc-swagger')
const configureSwagger = (app) => {
  const expressJSDocSwaggerOptions = {
    info: {
      version: '1.0.0',
      title: 'Capital-weather- api',
      description:
        'An api about the capital cities of the world',
      license: {
        name: 'Private',
      },
    },
    security: {
      Bearer: {
        type: 'http',
        scheme: 'bearer',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/api/v1',
        description: 'Local enviroment',
      },
      
    ],
    filesPattern: ['../docs/**/*.js', '../routes/**/*.js'], // Glob pattern to find your jsdoc files (it supports arrays too ['./**/*.controller.js', './**/*.route.js'])
    swaggerUIPath: '/api-docs', // SwaggerUI will be render in this url. Default: '/api-docs'
    baseDir: __dirname,
    exposeSwaggerUI: true, // Expose OpenAPI UI. Default true
    exposeApiDocs: true, // Expose Open API JSON Docs documentation in `apiDocsPath` path. Default false.
    apiDocsPath: '/v3/api-docs', // Open API JSON Docs endpoint. Default value '/v3/api-docs'.
  }
  expressJSDocSwagger(app)(expressJSDocSwaggerOptions)
}

module.exports = {
  configureSwagger,
}
