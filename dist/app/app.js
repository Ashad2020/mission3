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
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use(express_1.default.text());
const courseRouter = express_1.default.Router();
app.use("/api/v1/courses", courseRouter);
//router
const userRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "course is created",
        data: course,
    });
});
userRouter.post("/create-users", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "user is created",
        data: user,
    });
});
const logger = (req, res, next) => {
    console.log(req.url);
    console.log(req.body);
    console.log(req.cookies);
    next();
};
app.get("/", logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(Something);
    }
    catch (err) {
        next(err);
    }
}));
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: "successfully receive data",
    });
});
//fallback route
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Not found",
    });
});
//global error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.send({
        success: false,
        message: "Something went wrong",
    });
});
exports.default = app;
