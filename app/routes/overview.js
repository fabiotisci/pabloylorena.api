const service = require('../services/overview.service');

module.exports = (app, modelsService) => {

    const registerGetMainReport = () => {
        const url = '/api/overview/report';
        app.get(url,
            (req, res) => {
                service.getMainReport(modelsService)
                    .then(result => res.status(result.statusCode).send(result.report))
                    .catch(err => res.status(500).send(err.message) );
            });
        app.routesInfo['Overview'] = [];
        app.routesInfo['Overview'].push({ model: 'Overview', name: 'Main Report',  method: 'get', url: url });
    }

    registerGetMainReport();  
};