! function(e) {
    var t = {};

    function i(n) {
        if (t[n]) return t[n].exports;
        var a = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, i), a.l = !0, a.exports
    }
    i.m = e, i.c = t, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 15)
}([function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.moveDownMovement = t.tutorialMovement = t.lightningMovement = t.hookUpMovement = t.hookDownMovement = t.bgInitMovement = t.initialAngle = t.out = t.land = t.drop = t.beforeDrop = t.swing = t.rotateLeft = t.rotateRight = t.flightLayer = t.flightCount = t.ropeHeight = t.cloudSize = t.blockHeight = t.blockWidth = t.blockCount = t.bgLinearGradientOffset = t.lineInitialOffset = t.bgImgOffset = t.hookNormal = t.hookUp = t.hookDown = t.gameScore = t.perfectCount = t.failedCount = t.successCount = t.hardMode = t.gameUserOption = t.gameStartNow = void 0;
    t.gameStartNow = "GAME_START_NOW";
    t.gameUserOption = "GAME_USER_OPTION";
    t.hardMode = "HARD_MODE";
    t.successCount = "SUCCESS_COUNT";
    t.failedCount = "FAILED_COUNT";
    t.perfectCount = "PERFECT_COUNT";
    t.gameScore = "GAME_SCORE";
    t.hookDown = "HOOK_DOWN";
    t.hookUp = "HOOK_UP";
    t.hookNormal = "HOOK_NORMAL";
    t.bgImgOffset = "BACKGROUND_IMG_OFFSET_HEIGHT";
    t.lineInitialOffset = "LINE_INITIAL_OFFSET";
    t.bgLinearGradientOffset = "BACKGROUND_LINEAR_GRADIENT_OFFSET_HEIGHT";
    t.blockCount = "BLOCK_COUNT";
    t.blockWidth = "BLOCK_WIDTH";
    t.blockHeight = "BLOCK_HEIGHT";
    t.cloudSize = "CLOUD_SIZE";
    t.ropeHeight = "ROPE_HEIGHT";
    t.flightCount = "FLIGHT_COUNT";
    t.flightLayer = "FLIGHT_LAYER";
    t.rotateRight = "ROTATE_RIGHT";
    t.rotateLeft = "ROTATE_LEFT";
    t.swing = "SWING";
    t.beforeDrop = "BEFORE_DROP";
    t.drop = "DROP";
    t.land = "LAND";
    t.out = "OUT";
    t.initialAngle = "INITIAL_ANGLE";
    t.bgInitMovement = "BG_INIT_MOVEMENT";
    t.hookDownMovement = "HOOK_DOWN_MOVEMENT";
    t.hookUpMovement = "HOOK_UP_MOVEMENT";
    t.lightningMovement = "LIGHTNING_MOVEMENT";
    t.tutorialMovement = "TUTORIAL_MOVEMENT";
    t.moveDownMovement = "MOVE_DOWN_MOVEMENT"
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.drawYellowString = t.addScore = t.addFailedCount = t.addSuccessCount = t.touchEventHandler = t.getHookStatus = t.getLandBlockVelocity = t.getSwingBlockVelocity = t.getAngleBase = t.getMoveDownValue = t.checkMoveDown = void 0;
    var n = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, i) : {};
                    n.get || n.set ? Object.defineProperty(t, i, n) : t[i] = e[i]
                }
        return t.default = e, t
    }(i(0));
    t.checkMoveDown = function(e) {
        return e.checkTimeMovement(n.moveDownMovement)
    };
    t.getMoveDownValue = function(e, t) {
        var i = t ? t.pixelsPerFrame : e.pixelsPerFrame.bind(e),
            a = e.getVariable(n.successCount),
            r = 2 * e.getVariable(n.blockHeight);
        return i(a <= 4 ? 1.25 * r : r)
    };
    t.getAngleBase = function(e) {
        var t = e.getVariable(n.successCount),
            i = e.getVariable(n.gameScore),
            a = e.getVariable(n.gameUserOption).hookAngle;
        if (a) return a(t, i);
        if (e.getVariable(n.hardMode)) return 90;
        switch (!0) {
            case t < 10:
                return 30;
            case t < 20:
                return 60;
            default:
                return 60
        }
    };
    t.getSwingBlockVelocity = function(e, t) {
        var i, a = e.getVariable(n.successCount),
            r = e.getVariable(n.gameScore),
            o = e.getVariable(n.gameUserOption).hookSpeed;
        if (o) return o(a, r);
        switch (!0) {
            case a < 1:
                i = 0;
                break;
            case a < 10:
                i = 0.3;
                break;
            case a < 20:
                i = 0.3;
                break;
            case a < 30:
                i = 0.3;
                break;
			case a < 40:
                i = 0.35;
                break;
			case a < 50:
                i = 0.4;
                break;
			case a < 55:
                i = 0.45;
				break;
			case a < 60:
                i = 0.3;
				break;
			case a < 65:
                i = 0.5;
				break;
            default:
                i = 0.5;

                // case a < 1:
                // i = 0;
                // break;
                // case a < 10:
                // i = 0.3;
                // break;
                // case a < 20:
                // i = 0.33;
                // break;
                // case a < 30:
                // i = 0.36;
                // break;
                // default:
                // i = 0.4;
        }
        return e.getVariable(n.hardMode) && (i = 1.1), Math.sin(t / (200 / i))
    };
    t.getLandBlockVelocity = function(e, t) {
        var i = e.getVariable(n.successCount),
            a = e.getVariable(n.gameScore),
            r = e.getVariable(n.gameUserOption).landBlockSpeed;
        if (r) return r(i, a);
        var o, s = e.width;
        switch (!0) {
            case i < 5:
                o = 0;
                break;
            case i < 13:
                o = .001;
                break;
            case i < 23:
                o = .002;
                break;
            default:
                o = .003
        }
        return Math.cos(t / 200) * o * s
    };
    var a = function(e) {
        return e.checkTimeMovement(n.hookDownMovement) ? n.hookDown : e.checkTimeMovement(n.hookUpMovement) ? n.hookUp : n.hookNormal
    };
    t.getHookStatus = a;
    t.touchEventHandler = function(e) {
        if (e.getVariable(n.gameStartNow) && !(e.debug && e.paused || a(e) !== n.hookNormal)) {
            e.removeInstance("tutorial"), e.removeInstance("tutorial-arrow");
            var t = e.getInstance("block_".concat(e.getVariable(n.blockCount)));
            t && t.status === n.swing && (e.setTimeMovement(n.hookUpMovement, 500), t.status = n.beforeDrop)
        }
    };
    t.addSuccessCount = function(e) {
        var t = e.getVariable(n.gameUserOption).setGameSuccess,
            i = e.getVariable(n.successCount) + 1;
        e.setVariable(n.successCount, i), e.getVariable(n.hardMode) && e.setVariable(n.ropeHeight, e.height * e.utils.random(.35, .55)), t && t(i)
    };
    t.addFailedCount = function(e) {
        var t = e.getVariable(n.gameUserOption).setGameFailed,
            i = e.getVariable(n.failedCount) + 1;
        e.setVariable(n.failedCount, i), e.setVariable(n.perfectCount, 0), t && t(i), i >= 3 && (e.pauseAudio("bgm"), e.playAudio("game-over"), e.setVariable(n.gameStartNow, !1))
    };
    t.addScore = function(e, t) {
        var i = e.getVariable(n.gameUserOption),
            a = i.setGameScore,
            r = i.successScore,
            o = i.perfectScore,
            s = e.getVariable(n.perfectCount, 0),
            c = e.getVariable(n.gameScore),
            u = t ? s + 1 : 0,
            l = c + (r || 25) + (o || 25) * u;
        e.setVariable(n.gameScore, l), e.setVariable(n.perfectCount, u), a && a(l)
    };
    t.drawYellowString = function(e, t) {
        var i = t.string,
            n = t.size,
            a = t.x,
            r = t.y,
            o = t.textAlign,
            s = e.ctx,
            c = n,
            u = .1 * c;
        s.save(), s.beginPath();
        var l = s.createLinearGradient(0, 0, 0, r);
        //文字顏色
        l.addColorStop(0, "#353334"), l.addColorStop(1, "#353334"), s.fillStyle = l, s.lineWidth = u, s.strokeStyle = "#FFF", s.textAlign = o || "center", s.font = "".concat(c, "px ").concat("wenxue"), s.strokeText(i, a, r), s.fillText(i, a, r), s.restore()
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "Engine", {
        enumerable: !0,
        get: function() {
            return n.default
        }
    }), Object.defineProperty(t, "Instance", {
        enumerable: !0,
        get: function() {
            return a.default
        }
    });
    var n = r(i(14)),
        a = r(i(11));

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.addFlight = t.flightPainter = t.flightAction = void 0;
    var n = i(2),
        a = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, i) : {};
                        n.get || n.set ? Object.defineProperty(t, i, n) : t[i] = e[i]
                    }
            return t.default = e, t
        }(i(0));
    var r = function(e, t) {
        var i = e.visible,
            n = e.ready,
            r = e.type;
        if (i) {
            var o = t.getVariable(a.cloudSize);
            if (!n) {
                var s = function(e, t) {
                    var i = e.width,
                        n = e.height,
                        r = e.utils.random,
                        o = e.getVariable(a.cloudSize);
                    return {
                        bottomToTop: {
                            x: i * r(.3, .7),
                            y: n,
                            vx: 0,
                            vy: .7 * e.pixelsPerFrame(n) * -1
                        },
                        leftToRight: {
                            x: -1 * o,
                            y: n * r(.3, .6),
                            vx: .4 * e.pixelsPerFrame(i),
                            vy: .1 * e.pixelsPerFrame(n) * -1
                        },
                        rightToLeft: {
                            x: i,
                            y: n * r(.2, .5),
                            vx: .4 * e.pixelsPerFrame(i) * -1,
                            vy: .1 * e.pixelsPerFrame(n)
                        },
                        rightTopToLeft: {
                            x: i,
                            y: 0,
                            vx: .6 * e.pixelsPerFrame(i) * -1,
                            vy: .5 * e.pixelsPerFrame(n)
                        }
                    }[t]
                }(t, r);
                e.ready = !0, e.width = o, e.height = o, e.x = s.x, e.y = s.y, e.vx = s.vx, e.vy = s.vy
            }
            e.x += e.vx, e.y += e.vy, (e.y + o < 0 || e.y > t.height || e.x + o < 0 || e.x > t.width) && (e.visible = !1)
        }
    };
    t.flightAction = r;
    var o = function(e, t) {
        var i = t.ctx,
            n = t.getImg(e.imgName);
        i.drawImage(n, e.x, e.y, e.width, e.height)
    };
    t.flightPainter = o;
    t.addFlight = function(e, t, i) {
        if (e.getVariable(a.flightCount) !== t) {
            var s = new n.Instance({
                name: "flight_".concat(t),
                action: r,
                painter: o
            });
            s.imgName = "f".concat(t), s.type = i, e.addInstance(s, a.flightLayer), e.setVariable(a.flightCount, t)
        }
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.blockPainter = t.blockAction = void 0;
    var n = i(1),
        a = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, i) : {};
                        n.get || n.set ? Object.defineProperty(t, i, n) : t[i] = e[i]
                    }
            return t.default = e, t
        }(i(0));
    var r = function(e, t) {
        e.status === a.rotateLeft ? e.y - e.width >= t.height && (e.visible = !1, e.status = a.out, (0, n.addFailedCount)(t)) : e.y >= t.height && (e.visible = !1, e.status = a.out, (0, n.addFailedCount)(t))
    };
    t.blockAction = function(e, t, i) {
        var o = e,
            s = t.getVariable(a.ropeHeight);
        if (o.visible) {
            o.ready || (o.ready = !0, o.status = a.swing, e.updateWidth(t.getVariable(a.blockWidth)), e.updateHeight(t.getVariable(a.blockHeight)), e.x = t.width / 2, e.y = -1.5 * s);
            var c = t.getInstance("line");
            switch (o.status) {
                case a.swing:
                    t.getTimeMovement(a.hookDownMovement, [
                            [e.y, e.y + s]
                        ], function(t) {
                            e.y = t
                        }, {
                            name: "block"
                        }),
                        function(e, t, i) {
                            var r = t.getVariable(a.ropeHeight);
                            if (e.status === a.swing) {
                                var o = e,
                                    s = t.getVariable(a.initialAngle);
                                o.angle = s * (0, n.getSwingBlockVelocity)(t, i), o.weightX = o.x + Math.sin(o.angle) * r, o.weightY = o.y + Math.cos(o.angle) * r
                            }
                        }(e, t, i);
                    break;
                case a.beforeDrop:
                    o.x = e.weightX - e.calWidth, o.y = e.weightY + .3 * e.height, o.rotate = 0, o.ay = t.pixelsPerFrame(3e-4 * t.height), o.startDropTime = i, o.status = a.drop;
                    break;
                case a.drop:
                    var u = i - o.startDropTime;
                    o.startDropTime = i, o.vy += o.ay * u, o.y += o.vy * u + .5 * o.ay * Math.pow(u, 2);
                    var l = function(e, t) {
                            return e.y + e.height >= t.y ? e.x < t.x - e.calWidth || e.x > t.collisionX + e.calWidth ? 1 : e.x < t.x ? 2 : e.x > t.collisionX ? 3 : e.x > t.x + .8 * e.calWidth && e.x < t.x + 1.2 * e.calWidth ? 5 : 4 : 0
                        }(e, c),
                        d = c.y - e.height,
                        h = function(e) {
                            e.originOutwardAngle = Math.atan(e.height / e.outwardOffset), e.originHypotenuse = Math.sqrt(Math.pow(e.height, 2) + Math.pow(e.outwardOffset, 2)), t.playAudio("rotate")
                        };
                    switch (l) {
                        case 1:
                            r(e, t);
                            break;
                        case 2:
                            o.status = a.rotateLeft, e.y = d, e.outwardOffset = c.x + e.calWidth - e.x, h(e);
                            break;
                        case 3:
                            o.status = a.rotateRight, e.y = d, e.outwardOffset = c.collisionX + e.calWidth - e.x, h(e);
                            break;
                        case 4:
                        case 5:
                            o.status = a.land;
                            var g = t.getVariable(a.successCount);
                            (0, n.addSuccessCount)(t), t.setTimeMovement(a.moveDownMovement, 500), 10 !== g && 15 !== g, e.y = d, c.y = d, c.x = o.x - o.calWidth, c.collisionX = c.x + o.width;
                            var f = .3 * o.width;
                            (o.x > t.width - 2 * f || o.x < -f) && t.setVariable(a.hardMode, !0), 5 === l ? (e.perfect = !0, (0, n.addScore)(t, !0), t.playAudio("drop-perfect")) : ((0, n.addScore)(t), t.playAudio("drop"))
                    }
                    break;
                case a.land:
                    t.getTimeMovement(a.moveDownMovement, [
                        [e.y, e.y + (0, n.getMoveDownValue)(t, {
                            pixelsPerFrame: function(e) {
                                return e / 2
                            }
                        })]
                    ], function(i) {
                        e.visible && (e.y = i, e.y > t.height && (e.visible = !1))
                    }, {
                        name: e.name
                    }), e.x += (0, n.getLandBlockVelocity)(t, i);
                    break;
                case a.rotateLeft:
                case a.rotateRight:
                    var v = o.status === a.rotateRight,
                        m = t.pixelsPerFrame(4 * Math.PI),
                        p = v ? e.rotate > 1.3 : e.rotate < -1.3,
                        y = v ? 1 : -1;
                    if (p) e.rotate += m / 8 * y, e.y += t.pixelsPerFrame(.7 * t.height), e.x += t.pixelsPerFrame(.3 * t.width) * y;
                    else {
                        var b = (e.calWidth - e.outwardOffset) / e.calWidth;
                        b = b > .5 ? b : .5, e.rotate += m * b * y;
                        var w = e.originOutwardAngle + e.rotate,
                            k = v ? c.collisionX + e.calWidth : c.x + e.calWidth,
                            O = c.y;
                        e.x = k - Math.cos(w) * e.originHypotenuse, e.y = O - Math.sin(w) * e.originHypotenuse
                    }
                    r(e, t)
            }
        }
    };
    var o = function(e, t) {
        var i = e.perfect,
            n = t.getImg(i ? "block-perfect" : "block");
        t.ctx.drawImage(n, e.x, e.y, e.width, e.height)
    };
    t.blockPainter = function(e, t) {
        switch (e.status) {
            case a.swing:
                ! function(e, t) {
                    var i = t.getImg("blockRope");
                    t.ctx.drawImage(i, e.weightX - e.calWidth, e.weightY, e.width, 1.3 * e.height);
                    var n = e.weightX - e.calWidth;
                    t.debugLineY(n)
                }(e, t);
                break;
            case a.drop:
            case a.land:
                o(e, t);
                break;
            case a.rotateLeft:
            case a.rotateRight:
                ! function(e, t) {
                    var i = t.ctx;
                    i.save(), i.translate(e.x, e.y), i.rotate(e.rotate), i.translate(-e.x, -e.y), o(e, t), i.restore()
                }(e, t)
        }
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.startAnimate = t.endAnimate = void 0;
    var n = i(2),
        a = i(4),
        r = i(1),
        o = i(3),
        s = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, i) : {};
                        n.get || n.set ? Object.defineProperty(t, i, n) : t[i] = e[i]
                    }
            return t.default = e, t
        }(i(0));
    t.endAnimate = function(e) {
        if (e.getVariable(s.gameStartNow)) {
            var t = e.getVariable(s.successCount, 0),
                i = e.getVariable(s.failedCount),
                n = e.getVariable(s.gameScore, 0),
                a = Number(t) > 99 ? .1 * e.width : 0;
            (0, r.drawYellowString)(e, {
                string: "盒",
                size: .06 * e.width,
                x: .24 * e.width + a,
                y: .12 * e.width,
                textAlign: "left"
            }), (0, r.drawYellowString)(e, {
                string: t,
                size: .17 * e.width,
                x: .22 * e.width + a,
                y: .2 * e.width,
                textAlign: "right"
            });
            var o = e.getImg("score"),
                c = o.width,
                u = o.height,
                l = .35 * e.width,
                d = u * l / c;
            e.ctx.drawImage(o, .61 * e.width, .038 * e.width, l, d), (0, r.drawYellowString)(e, {
                string: n,
                size: .06 * e.width,
                x: .9 * e.width,
                y: .11 * e.width,
                textAlign: "right"
            });
            for (var h = e.ctx, g = e.getImg("heart"), f = g.width, v = g.height, m = .08 * e.width, p = v * m / f, y = 1; y <= 3; y += 1) h.save(), y <= i && (h.globalAlpha = .2), h.drawImage(g, .66 * e.width + (y - 1) * m, .16 * e.width, m, p), h.restore()
        }
    };
    t.startAnimate = function(e) {
        if (e.getVariable(s.gameStartNow)) {
            var t = e.getInstance("block_".concat(e.getVariable(s.blockCount)));
            if (!t || [s.land, s.out].indexOf(t.status) > -1) {
                if ((0, r.checkMoveDown)(e) && (0, r.getMoveDownValue)(e)) return;
                if (e.checkTimeMovement(s.hookUpMovement)) return;
                var i = (0, r.getAngleBase)(e),
                    c = Math.PI * e.utils.random(i, i + 5) * e.utils.randomPositiveNegative() / 180;
                e.setVariable(s.blockCount, e.getVariable(s.blockCount) + 1), e.setVariable(s.initialAngle, c), e.setTimeMovement(s.hookDownMovement, 500);
                var u = new n.Instance({
                    name: "block_".concat(e.getVariable(s.blockCount)),
                    action: a.blockAction,
                    painter: a.blockPainter
                });
                e.addInstance(u)
            }
            switch (Number(e.getVariable(s.successCount, 0))) {
                case 2:
                    (0, o.addFlight)(e, 1, "leftToRight");
                    break;
                case 6:
                    (0, o.addFlight)(e, 2, "rightToLeft");
                    break;
                case 8:
                    (0, o.addFlight)(e, 3, "leftToRight");
                    break;
                case 14:
                    (0, o.addFlight)(e, 4, "bottomToTop");
                    break;
                case 18:
                    (0, o.addFlight)(e, 5, "bottomToTop");
                    break;
                case 22:
                    (0, o.addFlight)(e, 6, "bottomToTop");
                    break;
                case 25:
                    (0, o.addFlight)(e, 7, "rightTopToLeft")
            }
        }
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.tutorialPainter = t.tutorialAction = void 0;
    var n = i(1),
        a = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, i) : {};
                        n.get || n.set ? Object.defineProperty(t, i, n) : t[i] = e[i]
                    }
            return t.default = e, t
        }(i(0));
    t.tutorialAction = function(e, t, i) {
        var n = t.width,
            a = t.height,
            r = e.name;
        if (!e.ready) {
            e.ready = !0;
            var o = .2 * n;
            e.updateWidth(o), e.height = .46 * o, e.x = t.calWidth - e.calWidth, e.y = .45 * a, "tutorial" !== r && (e.y += 1.2 * e.height)
        }
        "tutorial" !== r && (e.y += Math.cos(i / 200) * e.height * .01)
    };
    t.tutorialPainter = function(e, t) {
        if (!t.checkTimeMovement(a.tutorialMovement) && (0, n.getHookStatus)(t) === a.hookNormal) {
            var i = t.ctx,
                r = e.name,
                o = t.getImg(r);
            i.drawImage(o, e.x, e.y, e.width, e.height)
        }
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.hookPainter = t.hookAction = void 0;
    var n = i(1),
        a = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, i) : {};
                        n.get || n.set ? Object.defineProperty(t, i, n) : t[i] = e[i]
                    }
            return t.default = e, t
        }(i(0));
    t.hookAction = function(e, t, i) {
        var r = t.getVariable(a.ropeHeight);
        e.ready || (e.x = t.width / 2, e.y = -1.5 * r, e.ready = !0), t.getTimeMovement(a.hookUpMovement, [
            [e.y, e.y - r]
        ], function(t) {
            e.y = t
        }, {
            after: function() {
                e.y = -1.5 * r
            }
        }), t.getTimeMovement(a.hookDownMovement, [
            [e.y, e.y + r]
        ], function(t) {
            e.y = t
        }, {
            name: "hook"
        });
        var o = t.getVariable(a.initialAngle);
        e.angle = o * (0, n.getSwingBlockVelocity)(t, i), e.weightX = e.x + Math.sin(e.angle) * r, e.weightY = e.y + Math.cos(e.angle) * r
    };
    t.hookPainter = function(e, t) {
        var i = t.ctx,
            n = t.getVariable(a.ropeHeight),
            r = .1 * n,
            o = t.getImg("hook");
        i.save(), i.translate(e.x, e.y), i.rotate(2 * Math.PI - e.angle), i.translate(-e.x, -e.y), t.ctx.drawImage(o, e.x - r / 2, e.y, r, n + 5), i.restore()
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.cloudPainter = t.cloudAction = void 0;
    var n = i(1),
        a = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, i) : {};
                        n.get || n.set ? Object.defineProperty(t, i, n) : t[i] = e[i]
                    }
            return t.default = e, t
        }(i(0));
    var r = function(e) {
        var t = e.count,
            i = function(e) {
                return e[Math.floor(Math.random() * e.length)]
            };
        e.imgName = i(t > 6 ? ["c4", "c5", "c6", "c7", "c8"] : ["c1", "c2", "c3"])
    };
    t.cloudAction = function(e, t) {
        if (!e.ready) {
            e.ready = !0, r(e), e.width = t.getVariable(a.cloudSize), e.height = t.getVariable(a.cloudSize);
            var i = t.width,
                o = t.height,
                s = [{
                    x: .1 * i,
                    y: .66 * -o
                }, {
                    x: .65 * i,
                    y: .33 * -o
                }, {
                    x: .1 * i,
                    y: 0
                }, {
                    x: .65 * i,
                    y: .33 * o
                }][e.index - 1];
            e.x = t.utils.random(s.x, 1.2 * s.x), e.originX = e.x, e.ax = t.pixelsPerFrame(e.width * t.utils.random(.05, .08) * t.utils.randomPositiveNegative()), e.y = t.utils.random(s.y, 1.2 * s.y)
        }
        e.x += e.ax, (e.x >= e.originX + e.width || e.x <= e.originX - e.width) && (e.ax *= -1), (0, n.checkMoveDown)(t) && (e.y += 1.2 * (0, n.getMoveDownValue)(t)), e.y >= t.height && (e.y = .66 * -t.height, e.count += 4, r(e))
    };
    t.cloudPainter = function(e, t) {
        var i = t.ctx,
            n = t.getImg(e.imgName);
        i.drawImage(n, e.x, e.y, e.width, e.height)
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.linePainter = t.lineAction = void 0;
    var n = i(1),
        a = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, i) : {};
                        n.get || n.set ? Object.defineProperty(t, i, n) : t[i] = e[i]
                    }
            return t.default = e, t
        }(i(0));
    t.lineAction = function(e, t, i) {
        var r = e;
        r.ready || (r.y = t.getVariable(a.lineInitialOffset), r.ready = !0, r.collisionX = t.width - t.getVariable(a.blockWidth)), t.getTimeMovement(a.moveDownMovement, [
            [e.y, e.y + (0, n.getMoveDownValue)(t, {
                pixelsPerFrame: function(e) {
                    return e / 2
                }
            })]
        ], function(t) {
            e.y = t
        }, {
            name: "line"
        });
        var o = (0, n.getLandBlockVelocity)(t, i);
        e.x += o, e.collisionX += o
    };
    t.linePainter = function(e, t) {
        var i = t.ctx;
        t.debug && (i.save(), i.beginPath(), i.strokeStyle = "red", i.moveTo(e.x, e.y), i.lineTo(e.collisionX, e.y), i.lineWidth = 1, i.stroke(), i.restore())
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.background = t.backgroundLinearGradient = t.backgroundImg = void 0;
    var n = i(1),
        a = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, i) : {};
                        n.get || n.set ? Object.defineProperty(t, i, n) : t[i] = e[i]
                    }
            return t.default = e, t
        }(i(0));
    var r = function(e) {
        var t = e.getImg("background"),
            i = t.width,
            r = t.height * e.width / i,
            o = e.getVariable(a.bgImgOffset, e.height - r);
        o > e.height || (e.getTimeMovement(a.moveDownMovement, [
            [o, o + (0, n.getMoveDownValue)(e, {
                pixelsPerFrame: function(e) {
                    return e / 2
                }
            })]
        ], function(e) {
            o = e
        }, {
            name: "background"
        }), e.getTimeMovement(a.bgInitMovement, [
            [o, o + r / 4]
        ], function(e) {
            o = e
        }), e.setVariable(a.bgImgOffset, o), e.setVariable(a.lineInitialOffset, e.height - .394 * r), e.ctx.drawImage(t, 0, o, e.width, r))
    };
    t.backgroundImg = r;
    var o = function(e, t, i) {
            var n = t + 1 >= e.length ? e.length - 1 : t,
                a = e[n],
                r = e[n + 1 >= e.length - 1 ? n : n + 1],
                o = function(e) {
                    var t = a[e],
                        n = r[e];
                    return Math.round(t + (n - t) * i)
                };
            return "rgb(".concat(o(0), ", ").concat(o(1), ", ").concat(o(2), ")")
        },

        //背景顏色
        s = function(e) {
            var t = e.ctx.createLinearGradient(0, 0, 0, e.height),
                i = [
                    [213, 199, 188],
                    [213, 199, 188],
                    [213, 199, 188],
                    [54, 73, 88],
                    [54, 73, 88],
                    [54, 73, 88],
                    // [200, 255, 150],
                    // [105, 230, 240],
                    // [90, 190, 240],
                    // [85, 100, 190],
                    // [55, 20, 35],
                    // [75, 25, 35],
                    // [25, 0, 10]
                ],
                r = e.getVariable(a.bgLinearGradientOffset, 0);
            (0, n.checkMoveDown)(e) && e.setVariable(a.bgLinearGradientOffset, r + 1.5 * (0, n.getMoveDownValue)(e));
            var s = parseInt(r / e.height, 10),
                c = r % e.height / e.height,
                u = o(i, s, c),
                l = o(i, s + 1, c);
            t.addColorStop(0, l), t.addColorStop(1, u), e.ctx.fillStyle = t, e.ctx.beginPath(), e.ctx.rect(0, 0, e.width, e.height), e.ctx.fill();
            var d = function() {
                e.ctx.fillStyle = "rgba(255, 255, 255, 0.7)", e.ctx.fillRect(0, 0, e.width, e.height)
            };
            e.getTimeMovement(a.lightningMovement, [], function() {}, {
                before: d,
                after: d
            })
        };
    t.backgroundLinearGradient = s;
    t.background = function(e) {
        s(e), r(e)
    }
}, function(e, t, i) {
    "use strict";

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var a = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = t.name,
                n = t.painter,
                a = t.action;
            this.name = i, this.x = 0, this.y = 0, this.width = 0, this.height = 0, this.ax = 0, this.ay = 0, this.vx = 0, this.vy = 0, this.visible = !0, this.painter = n || null, this.action = a || null, this.ready = !1
        }
        var t, i, a;
        return t = e, (i = [{
            key: "paint",
            value: function(e) {
                null !== this.painter && this.visible && this.painter(this, e)
            }
        }, {
            key: "update",
            value: function(e, t) {
                null !== this.action && this.action(this, e, t)
            }
        }, {
            key: "updateWidth",
            value: function(e) {
                this.width = e, this.calWidth = e / 2
            }
        }, {
            key: "updateHeight",
            value: function(e) {
                this.height = e, this.calHeight = e / 2
            }
        }]) && n(t.prototype, i), a && n(t, a), e
    }();
    t.default = a
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = {
        linear: function(e, t, i, n) {
            return i * e / n + t
        },
        easeIn: function(e, t, i, n) {
            return i * (e /= n) * e + t
        },
        easeOut: function(e, t, i, n) {
            return -i * (e /= n) * (e - 2) + t
        },
        easeInOut: function(e, t, i, n) {
            return (e /= n / 2) < 1 ? i / 2 * e * e + t : -i / 2 * (--e * (e - 2) - 1) + t
        }
    };
    t.default = n
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.arraySwap = t.requestAnimationFrameTool = t.isTouchDevice = t.isFunction = t.randomPositiveNegative = t.random = t.getCurrentTime = void 0;
    var n = function() {
        return +new Date
    };
    t.getCurrentTime = n;
    t.random = function(e, t) {
        return Math.random() * (t - e) + e
    };
    t.randomPositiveNegative = function() {
        return Math.random() < .5 ? -1 : 1
    };
    t.isFunction = function(e) {
        return "function" == typeof e
    };
    t.isTouchDevice = function() {
        return "ontouchstart" in window || window.navigator.msMaxTouchPoints
    };
    var a, r = (a = 1e3 / 60, window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(function() {
            var t = n();
            e(t);
            var i = n();
            a = 1e3 / 60 - (i - t)
        }, a)
    });
    t.requestAnimationFrameTool = r;
    t.arraySwap = function(e, t, i) {
        var n = e[i];
        e[i] = e[t], e[t] = n
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n, a = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, i) : {};
                        n.get || n.set ? Object.defineProperty(t, i, n) : t[i] = e[i]
                    }
            return t.default = e, t
        }(i(13)),
        r = (n = i(12)) && n.__esModule ? n : {
            default: n
        };

    function o(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, i = new Array(e.length); t < e.length; t++) i[t] = e[t];
                return i
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function s(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var c = a.requestAnimationFrameTool,
        u = a.isFunction,
        l = a.isTouchDevice,
        d = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), document.createElement("canvas").getContext) {
                    var i = t.canvasId,
                        n = t.debug,
                        r = t.width,
                        o = t.height,
                        s = t.highResolution,
                        c = t.loadLimit,
                        u = t.soundOn,
                        d = r || window.innerWidth,
                        h = o || window.innerHeight;
                    this.canvas = document.getElementById(i), s && (this.canvas.style.width = "".concat(d, "px"), this.canvas.style.height = "".concat(h, "px"), d *= 2, h *= 2), this.highResolution = s, this.canvas.width = d, this.canvas.height = h, this.width = this.canvas.width, this.height = this.canvas.height, this.calWidth = .5 * this.width, this.calHeight = .5 * this.height, this.debug = !!n, this.ctx = this.canvas.getContext("2d"), this.defaultLayer = "default", this.layerArr = [this.defaultLayer], this.instancesObj = {}, this.instancesObj[this.defaultLayer] = [], this.utils = a, this.customVariable = {};
                    var g = this;
                    this.isTouchDevice = l(), this.debugArr = [], this.assetsObj = {
                        image: {},
                        audio: {}
                    }, this.assetsCount = {
                        image: 0,
                        audio: 0
                    }, this.assetsErrorQueue = [], this.assetsErrorCount = 0, this.loadLimit = c || 3, this.soundOn = !!u, this.fps = 0, this.lastTime = 0, this.lastPausedAt = 0, this.pausedTime = 0, this.paused = !1, this.timeMovement = {}, this.timeMovementStartArr = [], this.timeMovementFinishArr = [], this.keyUpListeners = {}, this.keyDownListeners = {}, this.keyPressListeners = {}, this.startAnimate = function() {}, this.paintUnderInstance = function() {}, this.paintAboveInstance = function() {}, this.endAnimate = function() {}, this.touchStartListener = function() {}, this.touchEndListener = function() {}, this.touchMoveListener = function() {}, document.addEventListener("keyup", function(e) {
                        g.keyListener(e, "keyup")
                    }, !1), document.addEventListener("keydown", function(e) {
                        g.keyListener(e, "keydown")
                    }, !1), document.addEventListener("keypress", function(e) {
                        g.keyListener(e, "keypress")
                    }, !1), this.isTouchDevice ? (document.addEventListener("touchstart", function(e) {
                        g.touchStartListener(e)
                    }, !1), document.addEventListener("touchend", function(e) {
                        g.touchEndListener(e)
                    }, !1), document.addEventListener("touchmove", function(e) {
                        g.touchMoveListener(e)
                    }, !1)) : (document.addEventListener("mousedown", function(e) {
                        g.touchStartListener(e)
                    }, !1), document.addEventListener("mouseup", function(e) {
                        g.touchEndListener(e)
                    }, !1), document.addEventListener("mousemove", function(e) {
                        g.touchMoveListener(e)
                    }, !1))
                } else window.alert("HTML5 Canvas is not supported in your browser.")
            }
            var t, i, n;
            return t = e, (i = [{
                key: "addAudio",
                value: function(e, t) {
                    var i = this,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    if (this.soundOn) {
                        n || (this.assetsCount.audio += 1);
                        var a = new window.Audio;
                        a.src = t, this.assetsObj.audio[e] = a, a.addEventListener("error", function() {
                            i.assetsErrorQueue.push({
                                name: e,
                                src: t,
                                retry: n + 1,
                                type: "audio"
                            })
                        }, !1), a.load()
                    }
                }
            }, {
                key: "getAudio",
                value: function(e) {
                    return this.assetsObj.audio[e]
                }
            }, {
                key: "playAudio",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.soundOn) {
                        var i = this.getAudio(e);
                        if (i) {
                            if (i.play(), !t) return;
                            i.addEventListener("ended", function() {
                                i.currentTime = 0, i.play()
                            }, !1)
                        }
                    }
                }
            }, {
                key: "pauseAudio",
                value: function(e) {
                    var t = this.getAudio(e);
                    t && t.pause()
                }
            }, {
                key: "setVariable",
                value: function(e, t) {
                    this.customVariable[e] = t
                }
            }, {
                key: "getVariable",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = this.customVariable[e];
                    return i || (null !== t ? (this.setVariable(e, t), t) : null)
                }
            }, {
                key: "addImg",
                value: function(e, t) {
                    var i = this,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    n || (this.assetsCount.image += 1);
                    var a = new window.Image;
                    a.src = t, a.onload = function() {
                        i.assetsObj.image[e] = a
                    }, a.onerror = function() {
                        i.assetsErrorQueue.push({
                            name: e,
                            src: t,
                            retry: n + 1,
                            type: "image"
                        })
                    }
                }
            }, {
                key: "getImg",
                value: function(e) {
                    return this.assetsObj.image[e]
                }
            }, {
                key: "animate",
                value: function(e) {
                    var t = this,
                        i = e - this.pausedTime,
                        n = this;
                    this.paused ? setTimeout(function() {
                        t.animate.call(n, i)
                    }, 100) : (this.tick(i), this.clean(), this.startAnimate(this, i), this.paintUnderInstance(this), this.updateInstances(i), this.paintInstances(), this.paintAboveInstance(), this.endAnimate(this, i), this.tickTimeMovement(), this.debug && this.showFps(), this.debug && this.drawDebug(), c(function(e) {
                        t.animate.call(n, e)
                    }))
                }
            }, {
                key: "showFps",
                value: function() {
                    this.ctx.save(), this.ctx.fillStyle = "red", this.ctx.font = "".concat(this.highResolution ? 32 : 16, "px Arial"), this.ctx.fillText("FPS: ".concat(this.fps.toFixed()), 5, this.highResolution ? 40 : 20), this.ctx.restore()
                }
            }, {
                key: "debugLineX",
                value: function(e) {
                    this.debugArr.push({
                        type: "lineX",
                        y: e
                    })
                }
            }, {
                key: "debugLineY",
                value: function(e) {
                    this.debugArr.push({
                        type: "lineY",
                        x: e
                    })
                }
            }, {
                key: "debugDot",
                value: function(e, t) {
                    this.debugArr.push({
                        type: "dot",
                        x: e,
                        y: t
                    })
                }
            }, {
                key: "drawDebug",
                value: function() {
                    var e = this;
                    this.debugArr.forEach(function(t) {
                        var i = t.type,
                            n = t.x,
                            a = t.y;
                        switch (i) {
                            case "dot":
                                e.drawDebugDot(n, a);
                                break;
                            case "lineX":
                                e.drawDebugLine(null, a);
                                break;
                            case "lineY":
                                e.drawDebugLine(n, null)
                        }
                    })
                }
            }, {
                key: "drawDebugLine",
                value: function(e, t) {
                    var i, n, a = [0, t],
                        r = [this.width, t];
                    e && (a = [e, 0], r = [e, this.height]), this.ctx.save(), this.ctx.strokeStyle = "red", this.ctx.beginPath(), (i = this.ctx).moveTo.apply(i, o(a)), (n = this.ctx).lineTo.apply(n, o(r)), this.ctx.stroke(), this.ctx.restore()
                }
            }, {
                key: "drawDebugDot",
                value: function(e, t) {
                    this.ctx.save(), this.ctx.fillStyle = "red", this.ctx.beginPath(), this.ctx.arc(e, t, 2, 0, 2 * Math.PI, !0), this.ctx.fill(), this.ctx.fillStyle = "white", this.ctx.beginPath(), this.ctx.arc(e, t, 1, 0, 2 * Math.PI, !0), this.ctx.fill(), this.ctx.restore()
                }
            }, {
                key: "tick",
                value: function(e) {
                    this.updateFps(e), this.lastTime = e
                }
            }, {
                key: "updateFps",
                value: function(e) {
                    0 === this.lastTime ? this.fps = 60 : this.fps = 1e3 / (e - this.lastTime)
                }
            }, {
                key: "pixelsPerFrame",
                value: function(e) {
                    return e / this.fps
                }
            }, {
                key: "tickTimeMovement",
                value: function() {
                    var e = this;
                    this.timeMovementStartArr.forEach(function(t) {
                        e.timeMovement[t].processing = !0
                    }), this.timeMovementStartArr = [], this.timeMovementFinishArr.forEach(function(t) {
                        delete e.timeMovement[t]
                    }), this.timeMovementFinishArr = []
                }
            }, {
                key: "getTimeMovement",
                value: function(e, t, i) {
                    var n = this,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        o = a.before,
                        s = a.after,
                        c = r.default[a.easing || "linear"],
                        u = a.name || "default",
                        l = this.timeMovement[e];
                    if (l) {
                        l.processing || ("hook" === a.name && console.log(t), this.timeMovementStartArr.push(e), l.store[u] = [], t.forEach(function(e) {
                            l.store[u].push({
                                start: parseFloat(e[0]),
                                end: parseFloat(e[1])
                            })
                        }), o && o());
                        var d = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = l.duration,
                                a = t;
                            if (!e) {
                                var r = n.utils.getCurrentTime(),
                                    o = l.startTime;
                                a = r - o
                            }
                            var s = l.store[u].map(function(e) {
                                return c(a, e.start, e.end - e.start, t)
                            });
                            i.apply(n, s)
                        };
                        this.checkTimeMovement(e) ? d() : (this.timeMovementFinishArr.push(e), d(!0), s && s())
                    }
                }
            }, {
                key: "checkTimeMovement",
                value: function(e) {
                    var t = this.timeMovement[e] || {};
                    return this.utils.getCurrentTime() <= t.endTime
                }
            }, {
                key: "setTimeMovement",
                value: function(e, t) {
                    var i = this.utils.getCurrentTime();
                    this.timeMovement[e] = {
                        startTime: i,
                        endTime: i + t,
                        duration: t,
                        store: {}
                    }
                }
            }, {
                key: "clean",
                value: function() {
                    this.ctx.clearRect(0, 0, this.width, this.height), this.debugArr = []
                }
            }, {
                key: "addLayer",
                value: function(e) {
                    this.layerArr.push(e), this.instancesObj[e] = []
                }
            }, {
                key: "removeLayer",
                value: function(e) {
                    this.layerArr = this.layerArr.filter(function(t) {
                        return t !== e
                    }), delete this.instancesObj[e]
                }
            }, {
                key: "swapLayer",
                value: function(e, t) {
                    this.utils.arraySwap(this.layerArr, e, t)
                }
            }, {
                key: "addInstance",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.defaultLayer;
                    this.instancesObj[t].push(e)
                }
            }, {
                key: "getInstance",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.defaultLayer;
                    return this.instancesObj[t].filter(function(t) {
                        return t.name === e
                    })[0]
                }
            }, {
                key: "removeInstance",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.defaultLayer;
                    this.getInstance(e, t) && (this.instancesObj[t] = this.instancesObj[t].filter(function(t) {
                        return t.name !== e
                    }))
                }
            }, {
                key: "updateInstances",
                value: function(e) {
                    var t = this;
                    this.layerArr.forEach(function(i) {
                        t.instancesObj[i].forEach(function(i) {
                            i.update && i.update(t, e)
                        })
                    })
                }
            }, {
                key: "paintInstances",
                value: function() {
                    var e = this;
                    this.layerArr.forEach(function(t) {
                        e.instancesObj[t].forEach(function(t) {
                            t.paint && t.paint(e)
                        })
                    })
                }
            }, {
                key: "togglePaused",
                value: function() {
                    var e = this.utils.getCurrentTime();
                    this.paused = !this.paused, this.paused ? this.lastPausedAt = e : this.pausedTime += e - this.lastPausedAt
                }
            }, {
                key: "addKeyUpListener",
                value: function(e, t) {
                    this.keyUpListeners[e] = t
                }
            }, {
                key: "addKeyDownListener",
                value: function(e, t) {
                    this.keyDownListeners[e] = t
                }
            }, {
                key: "addKeyPressListener",
                value: function(e, t) {
                    this.keyPressListeners[e] = t
                }
            }, {
                key: "findKeyListener",
                value: function(e, t) {
                    return "keyup" === t ? this.keyUpListeners[e] : "keydown" === t ? this.keyDownListeners[e] : this.keyPressListeners[e]
                }
            }, {
                key: "keyListener",
                value: function(e, t) {
                    var i;
                    switch (e.keyCode) {
                        case 13:
                            i = "enter";
                            break;
                        case 32:
                            i = "space";
                            break;
                        case 37:
                            i = "leftArrow";
                            break;
                        case 39:
                            i = "rightArrow";
                            break;
                        case 38:
                            i = "upArrow";
                            break;
                        case 40:
                            i = "downArrow";
                            break;
                        default:
                            i = e.keyCode
                    }
                    var n = this.findKeyListener(i, t);
                    n && n()
                }
            }, {
                key: "load",
                value: function(e, t) {
                    var i = this,
                        n = setInterval(function() {
                            var a = i.assetsCount.image + i.assetsCount.audio,
                                r = Object.keys(i.assetsObj.image).length + Object.keys(i.assetsObj.audio).length;
                            t && u(t) && t({
                                success: r,
                                failed: i.assetsErrorCount,
                                total: a
                            }), i.assetsErrorQueue.length > 0 && (i.assetsErrorQueue.forEach(function(e) {
                                var t = e.retry,
                                    n = e.name,
                                    a = e.src,
                                    r = e.type;
                                t >= i.loadLimit ? i.assetsErrorCount += 1 : "image" === r ? i.addImg(n, a, t) : i.addAudio(n, a, t)
                            }), i.assetsErrorQueue = []), r === a && (e && u(e) ? e() : i.init(), clearInterval(n))
                        }, 200)
                }
            }, {
                key: "init",
                value: function() {
                    var e = this,
                        t = this;
                    c(function(i) {
                        e.animate.call(t, i)
                    })
                }
            }]) && s(t.prototype, i), n && s(t, n), e
        }();
    t.default = d
}, function(e, t, i) {
    "use strict";
    var n = i(2),
        a = i(1),
        r = i(10),
        o = i(9),
        s = i(8),
        c = i(7),
        u = i(6),
        l = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, i) : {};
                        n.get || n.set ? Object.defineProperty(t, i, n) : t[i] = e[i]
                    }
            return t.default = e, t
        }(i(0)),
        d = i(5);
    window.TowerGame = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.width,
            i = e.height,
            h = e.canvasId,
            g = e.soundOn,
            f = new n.Engine({
                canvasId: h,
                highResolution: !0,
                width: t,
                height: i,
                soundOn: g
            }),
            v = function(e) {
                return "./assets/".concat(e)
            };
        f.addImg("background", v("background.png")), f.addImg("hook", v("hook.png")), f.addImg("blockRope", v("block-rope.png")), f.addImg("block", v("block.png")), f.addImg("block-perfect", v("block-perfect.png"));
        for (var m = 1; m <= 8; m += 1) f.addImg("c".concat(m), v("c".concat(m, ".png")));
        f.addLayer(l.flightLayer);
        for (var p = 1; p <= 7; p += 1) f.addImg("f".concat(p), v("f".concat(p, ".png")));
        f.swapLayer(0, 1),
            f.addImg("tutorial", v("tutorial.png")),
            f.addImg("tutorial-arrow", v("tutorial-arrow.png")),
            f.addImg("heart", v("heart.png")),
            f.addImg("score", v("score.png")),
            //  f.addAudio("drop-perfect", v("drop-perfect.mp3")), 
            //  f.addAudio("drop", v("drop.mp3")),
            //   f.addAudio("game-over", v("game-over.mp3")), 
            //   f.addAudio("rotate", v("rotate.mp3")), 
            //   f.addAudio("bgm", v("bgm.mp3")),
            f.setVariable(l.blockWidth, .25 * f.width),
            f.setVariable(l.blockHeight, .71 * f.getVariable(l.blockWidth)),
            f.setVariable(l.cloudSize, .3 * f.width),
            f.setVariable(l.ropeHeight, .4 * f.height), f.setVariable(l.blockCount, 0),
            f.setVariable(l.successCount, 0), f.setVariable(l.failedCount, 0),
            f.setVariable(l.gameScore, 0),
            f.setVariable(l.hardMode, !1),
            f.setVariable(l.gameUserOption, e);
        for (var y = 1; y <= 4; y += 1) {
            var b = new n.Instance({
                name: "cloud_".concat(y),
                action: s.cloudAction,
                painter: s.cloudPainter
            });
            b.index = y, b.count = 5 - y, f.addInstance(b)
        }
        var w = new n.Instance({
            name: "line",
            action: o.lineAction,
            painter: o.linePainter
        });
        f.addInstance(w);
        var k = new n.Instance({
            name: "hook",
            action: c.hookAction,
            painter: c.hookPainter
        });
        return f.addInstance(k), f.startAnimate = d.startAnimate, f.endAnimate = d.endAnimate, f.paintUnderInstance = r.background, f.addKeyDownListener("enter", function() {
            f.debug && f.togglePaused()
        }), f.touchStartListener = function() {
            (0, a.touchEventHandler)(f)
        }, f.playBgm = function() {
            f.playAudio("bgm", !0)
        }, f.pauseBgm = function() {
            f.pauseAudio("bgm")
        }, f.start = function() {
            var e = new n.Instance({
                name: "tutorial",
                action: u.tutorialAction,
                painter: u.tutorialPainter
            });
            f.addInstance(e);
            var t = new n.Instance({
                name: "tutorial-arrow",
                action: u.tutorialAction,
                painter: u.tutorialPainter
            });
            f.addInstance(t), f.setTimeMovement(l.bgInitMovement, 500), f.setTimeMovement(l.tutorialMovement, 500), f.setVariable(l.gameStartNow, !0)
        }, f
    }
}]);