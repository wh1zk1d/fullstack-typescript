"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const namor_1 = __importDefault(require("namor"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const port = 8080;
app.use(cors_1.default());
app.get('/', (req, res) => {
    const name = namor_1.default.generate();
    res.status(200).json({ name });
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map