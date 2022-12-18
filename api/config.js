module.exports = {
    api: {
        port: process.env.API_PORT || 3000
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'cubicajedb.cdno4chgdy94.us-east-1.rds.amazonaws.com',
        user: process.env.MYSQL_USER || 'admin',
        password: process.env.MYSQL_PASS || 'patosoto2022',
        database: process.env.MYSQL_DB || 'cubicaje'
    },
    mysqlService: {
        host: process.env.MYSQL_SERVER_HOST || 'cubicajedb.cdno4chgdy94.us-east-1.rds.amazonaws.com',
        port: process.env.MYSQL_SERVER_PORT || 3001
    }
};