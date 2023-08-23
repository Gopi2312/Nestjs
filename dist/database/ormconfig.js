"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const db_config_1 = require("./db.config");
config_1.ConfigModule.forRoot({
    isGlobal: true,
});
const datasource = async () => {
    const data = await (0, db_config_1.default)();
    delete data.cli;
    delete data.autoLoadEntities;
    delete data.pool;
    return new typeorm_1.DataSource(data);
};
exports.default = datasource();
//# sourceMappingURL=ormconfig.js.map