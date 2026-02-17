"use strict";

const chalk = require("chalk");

console.log(chalk.hex("#FF1493")(`
❍══════════════════════════════════════════════════❍
`));
console.log(chalk.hex("#00FFFF")(`
      🔥 𝐒𝐄𝐋𝐀𝐌𝐀𝐓 𝐃𝐀𝐓𝐀𝐍𝐆 𝐃𝐈 𝐃𝐈𝐙𝐙𝐀𝐍𝐙𝐙 𝐁𝐀𝐈𝐋𝐄𝐘𝐒 🔥
`));
console.log(chalk.hex("#FFD700")(`
❍══════════════════════════════════════════════════❍
`));
console.log(chalk.hex("#39FF14")(`
⠀⠀⠀⠀⠀⠀⢀⣤⣶⣶⣖⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣾⡟⣉⣽⣿⢿⡿⣿⣿⣆⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⢠⣿⣿⣿⡗⠋⠙⡿⣷⢌⣿⣿⠀⠀⠀⠀⠀⠀      
⣷⣄⣀⣿⣿⣿⣿⣷⣦⣤⣾⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀ 
⠈⠙⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⢀⠀⠀  
`));
console.log(chalk.hex("#FF1493")("                      𝘿𝙄𝙕𝙕𝘼𝙉𝙕𝙕 𝘽𝘼𝙄𝙇𝙀𝙔𝙎"));
console.log(chalk.hex("#00FFFF")("                      𝘽𝙔 : @𝙄𝙠𝙝𝙨𝙖𝙣𝙥𝙧𝙤𝙟𝙚𝙘𝙩"));
console.log(chalk.hex("#FFD700")("                      𝙎𝙄𝙉𝘾𝙀 2026"));
console.log(chalk.hex("#39FF14")(`
⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠻⠿⠿⠋⠀⠀⠀⠀     
⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⡄
⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⢀⡾⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣷⣶⣴⣾⠏⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠋⠁⠀⠀⠀⠀
`));
console.log(chalk.hex("#FF1493")("❍══════════════════════════════════════════════════❍"));
console.log(chalk.hex("#00FFFF")("    𝐉𝐀𝐍𝐆𝐀𝐍 𝐋𝐔𝐏𝐀 𝐁𝐄𝐑𝐃𝐎𝐀 𝐃𝐀𝐍 𝐒𝐇𝐎𝐋𝐀𝐖𝐀𝐓"));
console.log(chalk.hex("#FFD700")("❍══════════════════════════════════════════════════❍"));
console.log(chalk.hex("#FF1493")("⚡ DIZZANZZ modified by: @Ikhsanproject ⚡"));
console.log(chalk.hex("#00FFFF")("✨ Follow @Ikhsanproject For More Updates ✨"));
console.log(chalk.hex("#FFD700")("🔥 Thanks Udah Pake DIZZANZZ Baileys 🔥"));
console.log(chalk.hex("#39FF14")("❍══════════════════════════════════════════════════❍\n"));

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;