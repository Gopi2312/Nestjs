"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    return {
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        dbName: process.env.DB_NAME,
        port: process.env.DB_PORT,
    };
};
//# sourceMappingURL=dev.config.js.map