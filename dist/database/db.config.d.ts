declare const _default: (() => Promise<{
    type: "postgres";
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    autoLoadEntities: boolean;
    entities: string[];
    subscribers: string[];
    migrations: string[];
    cli: {
        migrationsDir: string;
    };
    synchronize: boolean;
    logging: boolean;
    pool: {
        max: number;
        min: number;
        maxWaitingClients: number;
        idleTimeoutMillis: number;
    };
}>) & import("@nestjs/config").ConfigFactoryKeyHost<Promise<{
    type: "postgres";
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    autoLoadEntities: boolean;
    entities: string[];
    subscribers: string[];
    migrations: string[];
    cli: {
        migrationsDir: string;
    };
    synchronize: boolean;
    logging: boolean;
    pool: {
        max: number;
        min: number;
        maxWaitingClients: number;
        idleTimeoutMillis: number;
    };
}>>;
export default _default;
