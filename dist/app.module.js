"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./database/database.module");
const db_config_1 = require("./database/db.config");
const post_module_1 = require("./post/post.module");
const user_module_1 = require("./user/user.module");
const apollo_1 = require("@nestjs/apollo");
const graphql_scalars_1 = require("graphql-scalars");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: './graphqlschema.gql',
                driver: apollo_1.ApolloDriver,
                sortSchema: true,
                playground: true,
                context: ({ req }) => ({ headers: req.headers }),
                buildSchemaOptions: {
                    scalarsMap: [{ type: () => graphql_scalars_1.GraphQLDate, scalar: graphql_scalars_1.GraphQLDate }],
                },
            }),
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
                load: [db_config_1.default],
            }),
            user_module_1.UserModule,
            post_module_1.PostModule,
            database_module_1.DatabaseModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map