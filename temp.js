var rt = function (e) {
                        Object(h["a"])(n, e);
                        var t = Object(m["a"])(n);

                        function n() {
                            var e;
                            return Object(f["a"])(this, n), e = t.apply(this, arguments), e.clipStatusInterval = 0, e.VideoMaxHour = Qe, e
                        }

                        return Object(p["a"])(n, [{
                            key: "beforeDestroy", value: function () {
                                clearInterval(this.clipStatusInterval)
                            }
                        }, {
                            key: "calculateAvgKbps", value: function (e, t) {
                                return t / 1024 * 8 / e
                            }
                        }, {
                            key: "validator", value: function () {
                                var e = Object(d["a"])(regeneratorRuntime.mark((function e(t, n) {
                                    var r, o, i, a, s, u;
                                    return regeneratorRuntime.wrap((function (e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                if (r = t.isImage ? Ke : $e, !t.extInfo) {
                                                    e.next = 20;
                                                    break
                                                }
                                                if (o = t.extInfo, !t.isVideo || !o.duration) {
                                                    e.next = 20;
                                                    break
                                                }
                                                if (!(o.duration < Je)) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return B["b"].error("视频时长需".concat(Je, "秒以上")), e.abrupt("return", !1);
                                            case 9:
                                                if (!(o.duration > et)) {
                                                    e.next = 14;
                                                    break
                                                }
                                                return B["b"].error("请上传".concat(Qe, "小时以内的视频")), e.abrupt("return", !1);
                                            case 14:
                                                if (!(o.ratio < tt || o.ratio > nt)) {
                                                    e.next = 19;
                                                    break
                                                }
                                                return B["b"].error("视频宽高比需在1:3至3:1之间"), e.abrupt("return", !1);
                                            case 19:
                                                this.checkbps && (i = this.calculateAvgKbps(o.duration, t.size), i < Xe ? this.$emit("checkBitRateFail", {
                                                    kbpsMinLimit: Xe,
                                                    videoKbps: i,
                                                    success: !1
                                                }) : this.$emit("checkBitRateFail", {
                                                    kbpsMinLimit: Xe,
                                                    videoKbps: i,
                                                    success: !0
                                                }));
                                            case 20:
                                                if (!(t.size > r)) {
                                                    e.next = 23;
                                                    break
                                                }
                                                return B["b"].error("文件大小超过限制"), e.abrupt("return", !1);
                                            case 23:
                                                if (!(n.length > 0)) {
                                                    e.next = 36;
                                                    break
                                                }
                                                if (a = n.filter((function (e) {
                                                    return e.isImage
                                                })), s = n.filter((function (e) {
                                                    return e.isVideo
                                                })), !(s.length > Ze)) {
                                                    e.next = 29;
                                                    break
                                                }
                                                return B["b"].error("最多上传1个视频"), e.abrupt("return", !1);
                                            case 29:
                                                if (u = this.value.filter((function (e) {
                                                    return "done" === e.status
                                                })), !(a.length + u.length > Ye)) {
                                                    e.next = 33;
                                                    break
                                                }
                                                return B["b"].error("最多上传9张图片"), e.abrupt("return", !1);
                                            case 33:
                                                if (!a.length || !s.length) {
                                                    e.next = 36;
                                                    break
                                                }
                                                return B["b"].error("不可同时选择图片和视频文件类型"), e.abrupt("return", !1);
                                            case 36:
                                                return e.abrupt("return", !0);
                                            case 37:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));

                                function t(t, n) {
                                    return e.apply(this, arguments)
                                }

                                return t
                            }()
                        },

                        ----------------------------------


                            {
                            key: "customUpload", value: function () {
                                var e = Object(d["a"])(regeneratorRuntime.mark((function e(t) {
                                    var n, r, o, i, a, s, u, c, l, d, f, p, h, m, v, _;
                                    return regeneratorRuntime.wrap((function (e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                if (n = t.extInfo, n) {
                                                    e.next = 3;
                                                    break
                                                }
                                                return e.abrupt("return", t);
                                            case 3:
                                                if (r = n.ratio, o = this.postStore.createPostStatus.ratio, o || (o = this.calcRightRatio(r), k["b"].$emit(k["a"].updateCreatePostStatus, {ratio: o})), !t.isVideo) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return k["b"].$emit(k["a"].updateCreatePostStatus, {videoType: n.duration > We["i"].videoMaxDuration ? ee["d"].mega : ee["d"].normal}), e.abrupt("return", !0);
                                            case 9:
                                                if (!t.isImage) {
                                                    e.next = 41;
                                                    break
                                                }
                                                return e.next = 12, Object(ze["a"])(n.localFileUrl, o);
                                            case 12:
                                                return i = e.sent, a = i.canvas, e.next = 16, Object(ze["a"])(n.localFileUrl, this.calcRightFullRatio(r));
                                            case 16:
                                                return s = e.sent, u = s.canvas, e.prev = 18, c = C["b"].envInfo.uploadVersion ? De["compressAndUpload"] : Le["c"], e.next = 22, c(a, We["f"].width, We["f"].height, We["f"].quality, Le["a"].picture);
                                            case 22:
                                                return l = e.sent, d = l.uploadRes, e.next = 26, c(a, We["j"].width, We["j"].height, We["j"].quality, Le["a"].thumb);
                                            case 26:
                                                return f = e.sent, p = f.uploadRes, e.next = 30, c(u, We["h"].width, We["h"].height, We["h"].quality, Le["a"].picture);
                                            case 30:
                                                h = e.sent, m = h.uploadRes, v = h.width, _ = h.height, this.updateFile({
                                                    file: t,
                                                    parcials: {
                                                        status: ke.done,
                                                        response: d,
                                                        fullResponse: Object.assign({}, m, {width: v, height: _}),
                                                        fullThumbUrl: m.httpsUrl,
                                                        thumbUrl: p.httpsUrl,
                                                        coverUrl: d.httpsUrl
                                                    }
                                                }), e.next = 40;
                                                break;
                                            case 37:
                                                e.prev = 37, e.t0 = e["catch"](18), this.updateFile({
                                                    file: t,
                                                    parcials: {status: ke.error}
                                                });
                                            case 40:
                                                return e.abrupt("return", !1);
                                            case 41:
                                                return k["b"].$emit(k["a"].updateCreatePostStatus, {traceInfo: Object.assign({}, this.postStore.createPostStatus.traceInfo, {uploadCdnStart: Math.floor(Date.now() / 1e3)})}), e.abrupt("return", t);
                                            case 43:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e, this, [[18, 37]])
                                })));

                                function t(t) {
                                    return e.apply(this, arguments)
                                }

                                return t
                            }()
                        }, {
                            key: "calcRightRatio", value: function (e) {
                                return e > We["i"].max ? We["i"].max : e < We["i"].min ? We["i"].min : e
                            }
                        }, {
                            key: "calcRightFullRatio", value: function (e) {
                                return e > We["i"].fullMax ? We["i"].fullMax : e < We["i"].fullMin ? We["i"].fullMin : e
                            }
                        }, {
                            key: "updateFile", value: function (e) {
                                var t = this;
                                this.postType === ee["b"].video && e.parcials.status === ke.done && (k["b"].$emit(k["a"].updateCreatePostStatus, {traceInfo: Object.assign({}, this.postStore.createPostStatus.traceInfo, {uploadCdnEnd: Math.floor(Date.now() / 1e3)})}), e.parcials.status = ke.croping, this.$emit("updateFile", e), this.$nextTick((function () {
                                    t.handleCropVideo()
                                }))), this.$emit("updateFile", e)
                            }
                        }, {
                            key: "handleCropVideo", value: function () {
                                var e = Object(d["a"])(regeneratorRuntime.mark((function e() {
                                    var t, n, r, o, i, a, s, u, c, l, f, p = this;
                                    return regeneratorRuntime.wrap((function (e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                return o = this.value[0], i = {
                                                    url: null === (t = o.response) || void 0 === t ? void 0 : t.httpsUrl,
                                                    timeStart: 0,
                                                    cropDuration: 0,
                                                    height: o.extInfo.height,
                                                    width: o.extInfo.width,
                                                    x: 0,
                                                    y: 0,
                                                    clipOriginVideoInfo: {
                                                        width: o.extInfo.width,
                                                        height: o.extInfo.height,
                                                        duration: o.extInfo.duration,
                                                        fileSize: o.size
                                                    },
                                                    traceInfo: this.postStore.createPostStatus.traceInfo
                                                }, C["b"].report({
                                                    customCount: 1,
                                                    customCountName: C["a"].sendCrop
                                                }), e.next = 5, this.clipVideoRequest(Object.assign(i, this.calcTargetSize(i)));
                                            case 5:
                                                if (a = e.sent, a) {
                                                    e.next = 8;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 8:
                                                if (s = a.errCode, u = a.data, s === E.Ok && u) {
                                                    e.next = 12;
                                                    break
                                                }
                                                return this.updateVideo({status: ke.error}), e.abrupt("return", B["b"].error("发起裁剪失败"));
                                            case 12:
                                                c = u, k["b"].$emit(k["a"].updateCreatePostStatus, {clipTicket: c}), C["b"].report({
                                                    customCount: 1,
                                                    customCountName: C["a"].sendCropSuccess,
                                                    msg: JSON.stringify(c)
                                                }), this.postStore.asyncClip && !this.postStore.isForAd && this.updateVideo({status: ke.done}), l = null === (n = this.value) || void 0 === n || null === (r = n[0]) || void 0 === r ? void 0 : r.uuid, f = setInterval(Object(d["a"])(regeneratorRuntime.mark((function e() {
                                                    var t, n, r, o, i;
                                                    return regeneratorRuntime.wrap((function (e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                if (r = null === (t = p.value) || void 0 === t || null === (n = t[0]) || void 0 === n ? void 0 : n.uuid, l && r && r === l) {
                                                                    e.next = 4;
                                                                    break
                                                                }
                                                                return clearInterval(f), e.abrupt("return");
                                                            case 4:
                                                                return e.next = 6, p.getClipVideoResult(c);
                                                            case 6:
                                                                o = e.sent, o && o.errCode === E.Ok && o.data ? (i = o.data.flag, i === Ue.success ? (p.updateVideo({
                                                                    status: ke.done,
                                                                    processedResponse: o.data
                                                                }), C["b"].report({
                                                                    customCount: 1,
                                                                    customCountName: C["a"].cropSuccess,
                                                                    msg: JSON.stringify(o.data)
                                                                }), clearInterval(f)) : i !== Ue.fail && i !== Ue.timeout || (p.updateVideo({status: ke.error}), C["b"].report({
                                                                    customCount: 1,
                                                                    customCountName: C["a"].cropFail,
                                                                    msg: "".concat(JSON.stringify(o.data), "; ").concat(JSON.stringify(c))
                                                                }), clearInterval(f))) : (p.updateVideo({status: ke.error}), clearInterval(f));
                                                            case 8:
                                                            case"end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                }))), 5e3), this.clipStatusInterval = f;
                                            case 19:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));

                                function t() {
                                    return e.apply(this, arguments)
                                }

                                return t
                            }()
                        }, {
                            key: "clipVideoRequest", value: function () {
                                var e = Object(d["a"])(regeneratorRuntime.mark((function e(t) {
                                    var n, r;
                                    return regeneratorRuntime.wrap((function (e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                return r = (null === (n = C["b"].postService) || void 0 === n ? void 0 : n.clipVideo.bind(C["b"].postService)) || C["b"].clipVideo, e.next = 3, r(Object.assign({}, t, {type: 4}));
                                            case 3:
                                                return e.abrupt("return", e.sent);
                                            case 4:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));

                                function t(t) {
                                    return e.apply(this, arguments)
                                }

                                return t
                            }()
                        }, {
                            key: "getClipVideoResult", value: function () {
                                var e = Object(d["a"])(regeneratorRuntime.mark((function e(t) {
                                    var n, r;
                                    return regeneratorRuntime.wrap((function (e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                return r = (null === (n = C["b"].postService) || void 0 === n ? void 0 : n.getClipVideoResult.bind(C["b"].postService)) || C["b"].getClipVideoResult, e.next = 3, r(t);
                                            case 3:
                                                return e.abrupt("return", e.sent);
                                            case 4:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));

                                function t(t) {
                                    return e.apply(this, arguments)
                                }

                                return t
                            }()
                        }, {
                            key: "calcTargetSize", value: function (e) {
                                var t = {targetWidth: 0, targetHeight: 0}, n = Math.max(e.width, e.height),
                                    r = Math.min(e.width, e.height), o = 1920, i = 1080;
                                if (n > o || r > i) {
                                    var a = n / r > o / i ? o / n : i / r, s = Math.floor(n * a), u = Math.floor(r * a);
                                    t.targetWidth = e.width > e.height ? s : u, t.targetHeight = e.width > e.height ? u : s
                                } else t.targetWidth = e.width, t.targetHeight = e.height;
                                return t
                            }
                        }, {
                            key: "updateVideo", value: function (e) {
                                this.$emit("updateFile", {file: this.value[0], parcials: e})
                            }
                        }, {
                            key: "setFileList", value: function (e) {
                                this.$emit("input", e)
                            }
                        }, {
                            key: "accept", get: function () {
                                return this.postStore.videoOnly || this.postStore.isForMp || this.postStore.isForAd ? "video/mp4,video/x-m4v,video/*" : this.value.length ? this.postType === ee["b"].image ? "image/*" : void 0 : "video/mp4,video/x-m4v,video/*,image/*"
                            }
                        }]), n
                    }(_["d"]);