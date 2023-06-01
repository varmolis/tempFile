var Fe = function (e) {
                        Object(h["a"])(n, e);
                        var t = Object(m["a"])(n);

                        function n() {
                            var e;
                            return Object(f["a"])(this, n), e = t.apply(this, arguments), e.videoUrl = "", e.curRoundFileCount = 0, e
                        }

                        return Object(p["a"])(n, [{
                            key: "mounted", value: function () {
                                k["b"].$on(k["a"].addUploadFile, this.handleAddFile)
                            }
                        }, {
                            key: "beforeUnmount", value: function () {
                                k["b"].$off(k["a"].addUploadFile, this.handleAddFile)
                            }
                        }, {
                            key: "handleAddFile", value: function () {
                                var e = this;
                                this.inputEle || (this.inputEle = document.querySelector(".upload-wrap .ant-upload-btn")), this.$nextTick((function () {
                                    e.inputEle.click()
                                }))
                            }
                        }, {
                            key: "handleReject", value: function () {
                                B["b"].warn("文件格式不支持")
                            }
                        }, {
                            key: "handleChange", value: function (e) {
                                var t = e.fileList;
                                this.$emit("input", t)
                            }
                        }, {
                            key: "updateFile", value: function (e, t) {
                                this.$emit("updateFile", {file: e, parcials: t})
                            }
                        }, {
                            key: "handleUpload", value: function () {
                                var e = Object(d["a"])(regeneratorRuntime.mark((function e(t) {
                                    var n, r, o, i, a, s, u = this;
                                    return regeneratorRuntime.wrap((function (e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                if (n = t.file, "function" !== typeof this.customUpload) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.next = 4, this.customUpload(n);
                                            case 4:
                                                if (r = e.sent, r) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 7:
                                                o = Le["a"].video, n.isImage && (o = Le["a"].picture), i = C["b"].envInfo.uploadVersion ? De["default"] : Le["d"], a = new i(n, {cdnFileType: o}), this.updateFile(n, {uploader: a}), s = Date.now(), a.startUpload((function (e, t) {
                                                    e === Le["b"].chunkSuccess ? u.updateFile(n, {percent: t}) : e === Le["b"].success ? (k["b"].$emit(k["a"].postUploadFile, {file: n}), u.updateFile(n, {
                                                        status: ke.done,
                                                        response: t.data,
                                                        uploadCost: Date.now() - s
                                                    })) : e === Le["b"].fail && (k["b"].$emit(k["a"].postUploadFile, {
                                                        file: n,
                                                        err: t.message || t
                                                    }), u.updateFile(n, {status: ke.error}))
                                                }));
                                            case 14:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));

                                function t(t) {
                                    return e.apply(this, arguments)
                                }

                                return t
                            }()
                        }, {
                            key: "beforeUpload", value: function (e, t) {
                                var n = this;
                                if (this.curRoundFileCount = t.length, !this.validator) return !0;
                                if (!1 === e.isValid) return !1;
                                var r = t.map((function (e) {
                                    var n = e.type.search("image") > -1, r = e.type.search("video") > -1;
                                    return Object.assign(e, {
                                        isImage: n,
                                        isVideo: r,
                                        isValid: !0,
                                        fileCount: t.length,
                                        uuid: Object(z["a"])()
                                    })
                                })), o = this.validator(e, r);
                                return !1 === o ? (r.forEach((function (e) {
                                    return e.isValid = !1
                                })), !1) : new Promise((function (t, o) {
                                    n.resolveFile(e).then(Object(d["a"])(regeneratorRuntime.mark((function i() {
                                        var a;
                                        return regeneratorRuntime.wrap((function (i) {
                                            while (1) switch (i.prev = i.next) {
                                                case 0:
                                                    return i.next = 2, n.validator(e, r);
                                                case 2:
                                                    a = i.sent, a ? t() : (r.forEach((function (e) {
                                                        return e.isValid = !1
                                                    })), o());
                                                case 4:
                                                case"end":
                                                    return i.stop()
                                            }
                                        }), i)
                                    })))).catch((function (e) {
                                        r.forEach((function (e) {
                                            return e.isValid = !1
                                        })), o(e)
                                    }))
                                }))
                            }
                        }, {
                            key: "resolveFile", value: function (e) {
                                return e.isImage ? this.getImageInfo(e) : e.isVideo ? this.getVideoInfo(e) : Promise.resolve({})
                            }
                        }, {
                            key: "getImageInfo", value: function (e) {
                                var t = this;
                                return new Promise((function (n, r) {
                                    var o = URL.createObjectURL(e), i = new Image;
                                    i.src = o, i.onload = function () {
                                        if (!i.width || !i.height) return t.handleImgError(), void r(new Error("image can not be read "));
                                        e.extInfo = {
                                            width: i.width,
                                            height: i.height,
                                            ratio: i.width / i.height,
                                            localFileUrl: o,
                                            duration: 0
                                        }, n()
                                    }, i.onerror = function (e) {
                                        t.handleImgError(), r(e)
                                    }
                                }))
                            }
                        }, {
                            key: "getVideoInfoByWasm", value: function () {
                                var e = Object(d["a"])(regeneratorRuntime.mark((function e(t) {
                                    var n, r, o, i, a, s;
                                    return regeneratorRuntime.wrap((function (e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, n = 4e3, e.next = 4, Promise.race([Object(Ne["d"])({file: t}), Object(x["f"])(n, !0, "getVideoInfoByWasm timeout")]);
                                            case 4:
                                                if (r = e.sent, !r.video) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return o = r.video, i = o.width, a = o.height, s = o.duration, e.abrupt("return", {
                                                    videoWidth: i,
                                                    videoHeight: a,
                                                    duration: s,
                                                    codecType: o.codecType
                                                });
                                            case 11:
                                                throw new Error("videoData is empty: " + JSON.stringify(r));
                                            case 14:
                                                return e.prev = 14, e.t0 = e["catch"](0), C["b"].report({
                                                    customCountName: C["a"].getWasmMediaInfoError,
                                                    customCount: 1,
                                                    msg: JSON.stringify({errInfo: Object(x["b"])(e.t0)})
                                                }), e.abrupt("return", !1);
                                            case 18:
                                                return e.prev = 18, e.finish(18);
                                            case 20:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e, null, [[0, 14, 18, 20]])
                                })));

                                function t(t) {
                                    return e.apply(this, arguments)
                                }

                                return t
                            }()
                        }, {
                            key: "updateVideoInfoByWasm", value: function () {
                                var e = Object(d["a"])(regeneratorRuntime.mark((function e(t) {
                                    var n;
                                    return regeneratorRuntime.wrap((function (e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, this.getVideoInfoByWasm(t);
                                            case 3:
                                                if (n = e.sent, !n) {
                                                    e.next = 8;
                                                    break
                                                }
                                                return t.extInfo = {
                                                    width: n.videoWidth,
                                                    height: n.videoHeight,
                                                    duration: n.duration,
                                                    isVideoCanPlay: !1,
                                                    ratio: n.videoWidth / n.videoHeight,
                                                    localFileUrl: this.videoUrl,
                                                    codecType: n.codecType
                                                }, console.log("@@@[step]Upload getWasmMediaInfoSuccess:", t.extInfo), e.abrupt("return", !0);
                                            case 8:
                                                return e.abrupt("return", !1);
                                            case 11:
                                                return e.prev = 11, e.t0 = e["catch"](0), C["b"].report({
                                                    customCountName: C["a"].getWasmMediaInfoError,
                                                    customCount: 1,
                                                    msg: "message: ".concat(null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message, ";")
                                                }), e.abrupt("return", !1);
                                            case 15:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e, this, [[0, 11]])
                                })));

                                function t(t) {
                                    return e.apply(this, arguments)
                                }

                                return t
                            }()
                        }, {
                            key: "getVideoInfo", value: function (e) {
                                var t = this;
                                return new Promise(function () {
                                    var n = Object(d["a"])(regeneratorRuntime.mark((function n(r, o) {
                                        return regeneratorRuntime.wrap((function (n) {
                                            while (1) switch (n.prev = n.next) {
                                                case 0:
                                                    t.videoUrl = URL.createObjectURL(e), t.$nextTick((function () {
                                                        var n = t.$refs.hiddenVideo;
                                                        n.onloadeddata = Object(d["a"])(regeneratorRuntime.mark((function i() {
                                                            var a, s, u, c, l;
                                                            return regeneratorRuntime.wrap((function (i) {
                                                                while (1) switch (i.prev = i.next) {
                                                                    case 0:
                                                                        if (a = n.videoWidth, s = n.videoHeight, u = n.duration, c = !(e.size && a && s && u), !c) {
                                                                            i.next = 21;
                                                                            break
                                                                        }
                                                                        if (!C["b"].config) {
                                                                            i.next = 18;
                                                                            break
                                                                        }
                                                                        if (C["b"].config.enableH265Upload) {
                                                                            i.next = 10;
                                                                            break
                                                                        }
                                                                        return t.handleDisable265Error(), o(new Error("oversea user cannot use 265")), i.abrupt("return");
                                                                    case 10:
                                                                        return console.log("@@@updateVideoInfoByWasm"), i.next = 13, t.updateVideoInfoByWasm(e);
                                                                    case 13:
                                                                        if (l = i.sent, !l) {
                                                                            i.next = 18;
                                                                            break
                                                                        }
                                                                        return e.extInfo.isVideoCanPlay = !1, r(!0), i.abrupt("return");
                                                                    case 18:
                                                                        return t.handleVideoError(), o(new Error("video can not be read ")), i.abrupt("return");
                                                                    case 21:
                                                                        console.log("@@@updateVideoInfoByBroswer"), e.extInfo = {
                                                                            width: a,
                                                                            height: s,
                                                                            ratio: a / s,
                                                                            localFileUrl: t.videoUrl,
                                                                            duration: u,
                                                                            isVideoCanPlay: !0,
                                                                            codecType: "h264"
                                                                        }, r(!0);
                                                                    case 24:
                                                                    case"end":
                                                                        return i.stop()
                                                                }
                                                            }), i)
                                                        }))), n.onerror = function () {
                                                            var e = Object(d["a"])(regeneratorRuntime.mark((function e(n) {
                                                                return regeneratorRuntime.wrap((function (e) {
                                                                    while (1) switch (e.prev = e.next) {
                                                                        case 0:
                                                                            return t.handleVideoError(), o(new Error("video can not be read ")), e.abrupt("return");
                                                                        case 3:
                                                                        case"end":
                                                                            return e.stop()
                                                                    }
                                                                }), e)
                                                            })));
                                                            return function (t) {
                                                                return e.apply(this, arguments)
                                                            }
                                                        }()
                                                    }));
                                                case 2:
                                                case"end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function (e, t) {
                                        return n.apply(this, arguments)
                                    }
                                }())
                            }
                        }, {
                            key: "handleWasmMediaInfoError", value: function () {
                                B["b"].error("视频文件解析失败，可换成H.264编码格式文件或刷新页面重试"), C["b"].report({
                                    customCount: 1,
                                    customCountName: C["a"].wasmGetMediaInfoError
                                })
                            }
                        }, {
                            key: "handleDisable265Error", value: function () {
                                B["b"].error("当前环境不支持此视频格式，建议上传H.264编码格式文件。"), C["b"].report({
                                    customCount: 1,
                                    customCountName: C["a"].disabled265upload
                                })
                            }
                        }, {
                            key: "handleVideoError", value: function () {
                                B["b"].error("当前浏览器不支持此视频格式，建议上传H.264编码格式文件。"), C["b"].report({
                                    customCount: 1,
                                    customCountName: C["a"].uploadVideoError
                                })
                            }
                        }, {
                            key: "handleImgError", value: function () {
                                B["b"].error("当前浏览器不支持此图片格式。"), C["b"].report({
                                    customCount: 1,
                                    customCountName: C["a"].uploadImgError
                                })
                            }
                        }]), n
                    }(_["d"]);