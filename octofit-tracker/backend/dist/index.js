"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = __importDefault(require("./models/User"));
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT ?? 8000);
const MONGODB_URI = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit';
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.json({ message: 'OctoFit Tracker API is running', port: PORT });
});
app.get('/api/users', async (_req, res) => {
    const users = await User_1.default.find().select('-__v');
    res.json(users);
});
app.post('/api/users', async (req, res) => {
    const newUser = new User_1.default(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
});
mongoose_1.default
    .connect(MONGODB_URI)
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Backend listening on http://localhost:${PORT}`);
        console.log(`Connected to MongoDB at ${MONGODB_URI}`);
    });
})
    .catch((error) => {
    console.error('MongoDB connection failed', error);
    process.exit(1);
});
