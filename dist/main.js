"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const port = 4000;
async function App() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        await app.listen(port);
        console.log(`Server started at port ${port}`);
    }
    catch (e) {
        console.log(`Error starting server!`);
    }
}
App();
//# sourceMappingURL=main.js.map