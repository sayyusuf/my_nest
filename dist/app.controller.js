"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = exports.IndexController = exports.CatsController = void 0;
const common_1 = require("@nestjs/common");
const index_service_1 = require("./index.service");
const app_service_1 = require("./app.service");
const gameService_1 = require("./gameService");
let CatsController = class CatsController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello(request, body) {
        console.log(request.body);
        return this.appService.getHello();
    }
    asdfasdf() {
        return { name: 'mehmet', age: 31 };
    }
    mehmetali() {
        return { name: 'ali', age: 31 };
    }
    kotu() {
        return 'This is so bad';
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", String)
], CatsController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('mehmet'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], CatsController.prototype, "asdfasdf", null);
__decorate([
    (0, common_1.Get)('test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], CatsController.prototype, "mehmetali", null);
__decorate([
    (0, common_1.Get)('kotu'),
    (0, common_1.HttpCode)(400),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], CatsController.prototype, "kotu", null);
CatsController = __decorate([
    (0, common_1.Controller)('cats'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], CatsController);
exports.CatsController = CatsController;
let IndexController = class IndexController {
    constructor(appService) {
        this.appService = appService;
    }
    async getHello() {
        return this.appService.getRes();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IndexController.prototype, "getHello", null);
IndexController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [index_service_1.IndexService])
], IndexController);
exports.IndexController = IndexController;
let GameController = class GameController {
    constructor(appService) {
        this.appService = appService;
    }
    async getHello() {
        return this.appService.getRes();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GameController.prototype, "getHello", null);
GameController = __decorate([
    (0, common_1.Controller)('game'),
    __metadata("design:paramtypes", [gameService_1.GameService])
], GameController);
exports.GameController = GameController;
//# sourceMappingURL=app.controller.js.map