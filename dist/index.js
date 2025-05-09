"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = require("C:/Users/profe/OneDrive/Desktop/docker-compose/src/generated/prisma");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const prismaClient = new prisma_1.PrismaClient();
app.get("/me", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const user = yield prismaClient.user.findFirst({
        where: {
            email: username,
        },
    });
    if (!user) {
        res.json({
            msg: "user not exist",
        });
    }
    res.json({
        msg: "Yours User Credentials",
        id: user === null || user === void 0 ? void 0 : user.id,
        username: user === null || user === void 0 ? void 0 : user.email,
        name: user === null || user === void 0 ? void 0 : user.name,
    });
}));
app.get("/health", (req, res) => {
    res.status(200).json({
        msg: "sever is running",
    });
});
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    console.log(req.body);
    console.log(req.params);
    console.log(req.baseUrl);
    console.log(req.header);
    console.log(req.headers);
    console.log(req);
    if (!username) {
        return;
    }
    try {
        const user = yield prismaClient.user.create({
            data: {
                email: username,
                password: password,
                name: name,
            },
        });
        res.json({
            msg: "user created successfully",
            id: user.id,
        });
    }
    catch (e) {
        console.log(e);
    }
}));
app.listen(3000, () => {
    console.log("sever running on port..3000");
});
