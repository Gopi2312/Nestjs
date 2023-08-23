"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const dev_config_1 = require("./dev.config");
exports.default = (0, config_1.registerAs)('typeOrmConfig', async () => {
    let data = (0, dev_config_1.default)();
    const dbSync = process.env.DB_SYNC === 'true';
    return {
        type: 'postgres',
        host: data.host,
        port: parseInt(data.port),
        username: data.username,
        password: data.password,
        database: data.dbName,
        autoLoadEntities: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        subscribers: [__dirname + '/../**/*.subscriber{.ts,.js}'],
        migrations: [__dirname + '/./migrations/**/*{.ts,.js}'],
        cli: {
            migrationsDir: __dirname + '/../migrations',
        },
        synchronize: dbSync,
        logging: !!process.env.DB_LOGGING,
        pool: {
            max: 25,
            min: 1,
            maxWaitingClients: 10,
            idleTimeoutMillis: 300000,
        },
    };
});
//# sourceMappingURL=db.config.js.map