"use strict";
var core;
(function (core) {
    class Router {
        _activeLink;
        _linkData;
        _routingTable;
        get ActiveLink() {
            return this._activeLink;
        }
        set ActiveLink(link) {
            this._activeLink = link;
        }
        get LinkData() {
            return this._linkData;
        }
        set LinkData(link) {
            this._linkData = link;
        }
        constructor() {
            this._activeLink = "";
            this._linkData = "";
            this._routingTable = [];
        }
        Add(route) {
            this._routingTable.push(route);
        }
        AddTable(routingTable) {
            this._routingTable = routingTable;
        }
        Find(route) {
            return this._routingTable.indexOf(route);
        }
        Remove(route) {
            if (this.Find(route) > -1) {
                this._routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }
        toString() {
            return this._routingTable.toString();
        }
    }
    core.Router = Router;
})(core || (core = {}));
let router = new core.Router();
router.AddTable([
    "/",
    "/home",
    "/about",
    "/services",
    "/contact",
    "/contact-list",
    "/projects",
    "/register",
    "/login",
    "/edit"
]);
let route = location.pathname;
if (router.Find(route) > -1) {
    router.ActiveLink = (route == "/") ? "home" : route.substring(1);
}
else {
    router.ActiveLink = "404";
}
//# sourceMappingURL=router.js.map