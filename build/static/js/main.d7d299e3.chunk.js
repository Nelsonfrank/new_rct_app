(this['webpackJsonprct-app'] = this['webpackJsonprct-app'] || []).push([
  [0],
  {
    236: function (e, t, a) {},
    242: function (e, t, a) {},
    262: function (e, t, a) {},
    277: function (e, t, a) {},
    302: function (e, t, a) {},
    313: function (e, t, a) {},
    314: function (e, t, a) {},
    321: function (e, t, a) {},
    407: function (e, t, a) {},
    408: function (e, t, a) {},
    409: function (e, t, a) {},
    410: function (e, t, a) {},
    411: function (e, t, a) {},
    412: function (e, t, a) {},
    413: function (e, t, a) {},
    424: function (e, t, a) {},
    425: function (e, t, a) {},
    426: function (e, t, a) {},
    427: function (e, t, a) {},
    428: function (e, t, a) {},
    429: function (e, t, a) {},
    430: function (e, t, a) {},
    431: function (e, t, a) {},
    432: function (e, t, a) {},
    433: function (e, t, a) {},
    434: function (e, t, a) {},
    435: function (e, t, a) {},
    436: function (e, t, a) {},
    437: function (e, t, a) {},
    446: function (e, t, a) {},
    447: function (e, t, a) {},
    448: function (e, t, a) {},
    449: function (e, t, a) {},
    450: function (e, t, a) {},
    451: function (e, t, a) {},
    452: function (e, t, a) {},
    453: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(1),
        i = a(0),
        c = a.n(i),
        r = a(29),
        o = a.n(r),
        s =
          (a(236),
          function (e) {
            e &&
              e instanceof Function &&
              a
                .e(3)
                .then(a.bind(null, 488))
                .then(function (t) {
                  var a = t.getCLS,
                    n = t.getFID,
                    i = t.getFCP,
                    c = t.getLCP,
                    r = t.getTTFB;
                  a(e), n(e), i(e), c(e), r(e);
                });
          }),
        l = a(8),
        d = a(9),
        u = a.n(d),
        m = a(12),
        j = a(10),
        p = a(35),
        h = a(454),
        b = a.p + 'static/media/Slide-1.50804790.jpg',
        f = a.p + 'static/media/Slide-1.71885ce7.webp',
        O = a.p + 'static/media/Slide-2.afe3315b.jpg',
        x = a.p + 'static/media/Slide-2.22111f43.webp',
        g = a.p + 'static/media/Slide-3.0937482c.jpg',
        y = a.p + 'static/media/Slide-3.078ba1b5.webp',
        v = a.p + 'static/media/Slide-4.ad1fc390.jpg',
        _ = a.p + 'static/media/Slide-4.789de0e6.webp',
        S =
          (a(242),
          {
            infinite: !0,
            speed: 500,
            arrows: !1,
            swipeToSlide: !0,
            autoplay: !0,
            pauseOnFocus: !0,
            className: 'ArrowContainer',
          }),
        N = function () {
          return Object(n.jsx)(n.Fragment, {
            children: Object(n.jsx)('div', {
              style: { margin: '1rem 0rem' },
              children: Object(n.jsxs)(
                h.a,
                Object(p.a)(
                  Object(p.a)({}, S),
                  {},
                  {
                    children: [
                      Object(n.jsx)('div', {
                        children: Object(n.jsxs)('picture', {
                          children: [
                            Object(n.jsx)('source', {
                              type: 'image/webp',
                              srcSet: f,
                            }),
                            Object(n.jsx)('img', {
                              src: b,
                              alt: 'Slider1',
                              className: 'carousel--image',
                            }),
                          ],
                        }),
                      }),
                      Object(n.jsx)('div', {
                        children: Object(n.jsxs)('picture', {
                          children: [
                            Object(n.jsx)('source', {
                              type: 'image/webp',
                              srcSet: x,
                            }),
                            Object(n.jsx)('img', {
                              src: O,
                              alt: 'Slider2',
                              className: 'carousel--image',
                            }),
                          ],
                        }),
                      }),
                      Object(n.jsx)('div', {
                        children: Object(n.jsxs)('picture', {
                          children: [
                            Object(n.jsx)('source', {
                              type: 'image/webp',
                              srcSet: y,
                            }),
                            Object(n.jsx)('img', {
                              src: g,
                              alt: 'Slider3',
                              className: 'carousel--image',
                            }),
                          ],
                        }),
                      }),
                      Object(n.jsx)('div', {
                        children: Object(n.jsxs)('picture', {
                          children: [
                            Object(n.jsx)('source', {
                              type: 'image/webp',
                              srcSet: _,
                            }),
                            Object(n.jsx)('img', {
                              src: v,
                              alt: 'Slider4',
                              className: 'carousel--image',
                            }),
                          ],
                        }),
                      }),
                    ],
                  },
                ),
              ),
            }),
          });
        },
        T = a(49),
        k =
          (a(262),
          function (e) {
            var t = e.title,
              a = e.route,
              i = void 0 === a ? '' : a,
              c = e.handleViewAllAction;
            return Object(n.jsxs)('div', {
              style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '1.5rem 0 1rem 0',
                padding: '0 0.5rem',
                width: '100%',
                borderRadius: '4px',
              },
              children: [
                Object(n.jsx)('div', {
                  children: Object(n.jsx)('h2', {
                    className: 'section--header_title',
                    children: t,
                  }),
                }),
                Object(n.jsx)('div', {
                  className: 'actionBtn-section',
                  children: Object(n.jsx)(T.a, {
                    type: 'ghost',
                    className: 'view-all_button',
                    onClick: function () {
                      i.length <= 0 ? c() : Object(l.d)(i);
                    },
                    children: 'View All',
                  }),
                }),
              ],
            });
          }),
        C = a(462),
        w = a(467),
        I = function (e) {
          var t = e.title,
            a = e.subtitle,
            i = e.children,
            c = e.styles,
            r = e.actionBtn,
            o = e.actionBtnRoute,
            s = void 0 === o ? '' : o,
            d = e.className,
            u = e.img,
            m = e.imgTitle,
            j = e.imgDescrip,
            h = e.backButton,
            b = e.onClick,
            f = e.isHoverable;
          return Object(n.jsxs)(C.a, {
            style: Object(p.a)(
              Object(p.a)({}, c),
              {},
              { borderRadius: 10, marginBottom: '1.2rem', marginLeft: '1rem' },
            ),
            cover:
              u &&
              Object(n.jsx)('img', {
                src: u,
                alt: 'slider-1',
                style: { width: '100%' },
              }),
            className: d,
            onClick: b,
            hoverable: f,
            children: [
              t
                ? Object(n.jsxs)('div', {
                    style: { display: 'flex', alignItems: 'center' },
                    children: [
                      h
                        ? Object(n.jsx)('div', {
                            children: Object(n.jsx)('div', {
                              style: { marginRight: '1rem' },
                              children: Object(n.jsx)(T.a, {
                                type: 'text',
                                onClick: function () {
                                  return Object(l.d)(-1);
                                },
                                style: {
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                },
                                children: Object(n.jsx)(w.a, {
                                  style: {
                                    fontSize: '1.75rem',
                                    fontWeight: 600,
                                  },
                                }),
                              }),
                            }),
                          })
                        : null,
                      Object(n.jsx)('h3', {
                        style: {
                          fontSize: '1.5rem',
                          fontWeight: 600,
                          marginBottom: 0,
                        },
                        children: t,
                      }),
                    ],
                  })
                : null,
              a
                ? Object(n.jsx)('h1', {
                    style: { fontSize: '1.125rem' },
                    children: a,
                  })
                : null,
              u ? Object(n.jsx)(C.a.Meta, { title: m, description: j }) : null,
              i,
              r &&
                Object(n.jsx)(T.a, {
                  type: 'link',
                  style: { paddingLeft: 0 },
                  onClick: function () {
                    return Object(l.d)(s);
                  },
                  children: r,
                }),
            ],
          });
        },
        z = a(80),
        A = Object(i.createContext)({
          path: '',
          platformVariety: [],
          sellerInfo: {
            item: {
              id: '',
              image: '',
              category: '',
              full_name: '',
              location: '',
              phone_number: '',
              platform_leader: '',
            },
          },
          savePlatformVariety: function (e, t) {},
          saveSellerInfo: function (e, t) {},
        }),
        q = A.Provider,
        B = (A.Consumer, A),
        M =
          (a(277),
          function (e) {
            var t = e.title,
              a = e.route,
              c = void 0 === a ? '' : a,
              r = e.listItems,
              o = e.cardStyles,
              s = e.viewAllAction,
              d = Object(i.useContext)(B).saveSellerInfo;
            return Object(n.jsxs)(n.Fragment, {
              children: [
                Object(n.jsx)(k, {
                  title: t,
                  route: c,
                  handleViewAllAction: s,
                }),
                0 !== r.length
                  ? Object(n.jsx)('div', {
                      className: 'card--list_group',
                      children: r.map(function (e) {
                        return Object(n.jsx)(
                          I,
                          {
                            styles: Object(p.a)({ margin: '0 10px' }, o),
                            className: 'card-section_container',
                            img: e.img,
                            imgTitle: e.title,
                            imgDescrip: e.cardDescrip,
                            isHoverable: !0,
                            onClick: function () {
                              return (function (e) {
                                Object(l.d)(e.routes, { state: e.state }),
                                  'Shop by Seller' === t && d(e, 'seller_info'),
                                  'Rice Buyers' === t && d(e, 'seller_info');
                              })(e);
                            },
                          },
                          e.id,
                        );
                      }),
                    })
                  : Object(n.jsx)('div', {
                      style: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                      },
                      children: Object(n.jsx)(z.a, {}),
                    }),
                Object(n.jsx)('div', {
                  className: 'SeeAll-Btn-sm',
                  children: Object(n.jsx)(T.a, {
                    type: 'primary',
                    shape: 'round',
                    size: 'large',
                    onClick: function () {
                      s ? s() : Object(l.d)(c);
                    },
                    children: 'See All',
                  }),
                }),
              ],
            });
          }),
        R = a(463),
        P = a(150),
        L = a(24),
        D = a.n(L);
      D.a.defaults.baseURL = 'http://142.93.210.105:1122';
      var F = function (e, t) {
          return D.a
            .post('/api/v1/seller/tender', e, {
              headers: { Authorization: 'Bearer '.concat(t) },
            })
            .then(function (e) {
              return e;
            });
        },
        G = function (e) {
          return D.a
            .get('/api/v1/buyer/all-buyer', {
              headers: { Authorization: 'Bearer '.concat(e) },
            })
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e;
            });
        },
        Z = function (e, t) {
          return D.a
            .post('/api/v1/buyer/give-tender', e, {
              headers: { Authorization: 'Bearer '.concat(t) },
            })
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e;
            });
        },
        K = function () {
          return D.a
            .get('/api/v1/seller/offset/0')
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e;
            });
        },
        E = function (e, t, a) {
          return D.a
            .post('/api/v1/seller/'.concat(t), e, {
              headers: { Authorization: 'Bearer '.concat(a) },
            })
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e;
            });
        },
        V = function (e, t) {
          return D.a
            .delete('/api/v1/seller/'.concat(e), {
              headers: { Authorization: 'Bearer '.concat(t) },
            })
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e;
            });
        },
        H = function (e, t, a) {
          return D.a
            .put('/api/v1/seller/toggle/'.concat(e), t, {
              headers: { Authorization: 'Bearer '.concat(a) },
            })
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e;
            });
        },
        U = function (e) {
          return D.a
            .put('/api/v1/user/complete', e)
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e;
            });
        },
        J = function (e) {
          return D.a
            .get('/api/v1/variety/platform/'.concat(e))
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e;
            });
        },
        W = function (e, t) {
          return D.a
            .post('/api/v1/platform', e, {
              headers: { Authorization: 'Bearer '.concat(t) },
            })
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e;
            });
        },
        Y = function () {
          return D.a
            .get('/api/v1/platform/offset/0')
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e;
            });
        },
        Q = function (e) {
          return D.a
            .get('/api/v1/seller/platform/'.concat(e, '/offset/0'))
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e;
            });
        },
        X = function (e, t) {
          return D.a
            .delete('/api/v1/platform/'.concat(e), {
              headers: { Authorization: 'Bearer '.concat(t) },
            })
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e;
            });
        },
        $ = function (e, t, a) {
          return D.a
            .post('/api/v1/leader/'.concat(t), e, {
              headers: { Authorization: 'Bearer '.concat(a) },
            })
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e;
            });
        },
        ee = function (e) {
          return D.a
            .get('/api/v1/leader', {
              headers: { Authorization: 'Bearer '.concat(e) },
            })
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e;
            });
        },
        te = function (e) {
          return D.a
            .post('/api/v1/session/refreshtoken', e)
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e.message;
            });
        },
        ae = function (e) {
          return D.a
            .get('/api/v1/user/information', {
              headers: { Authorization: 'Bearer '.concat(e) },
            })
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e;
            });
        },
        ne = function (e) {
          return D.a
            .post('/api/v1/session/generatetoken-by-password', e)
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e.message;
            });
        },
        ie = function (e, t) {
          return D.a
            .post('/api/v1/variety', e, {
              headers: { Authorization: 'Bearer '.concat(t) },
            })
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e.message;
            });
        },
        ce = function () {
          return D.a
            .get('/api/v1/variety')
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e.message;
            });
        },
        re = function (e) {
          return D.a
            .post('/api/v1/price-rate', e)
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e;
            });
        },
        oe = function () {
          return D.a
            .get('/api/v1/price-rate')
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return e;
            });
        },
        se = Object(i.createContext)({
          authenticated: !1,
          userRole: '',
          userAccessToken: '',
          adminRole: '',
          adminAccessToken: '',
          userInfo: {
            active: 1,
            dial_code: '',
            id: '',
            name: null,
            password: null,
            phone_number: '',
            role: '',
            salt: null,
          },
          handleAuthentication: function () {},
          handleAuthDashboard: function () {},
          logout: function () {},
          dashboardLogout: function () {},
        }),
        le = se.Provider,
        de = se.Consumer,
        ue = se,
        me = a(227),
        je = function (e, t, a) {
          e
            ? me.a.success({ message: t, description: a })
            : me.a.error({ message: t, description: a });
        },
        pe = a.p + 'static/media/slider-1.99f830b2.jpg',
        he =
          (a(302),
          function () {
            var e = Object(i.useState)(!1),
              t = Object(j.a)(e, 2),
              a = t[0],
              c = t[1],
              r = Object(i.useState)([]),
              o = Object(j.a)(r, 2),
              s = o[0],
              d = o[1],
              p = Object(i.useState)([]),
              h = Object(j.a)(p, 2),
              b = h[0],
              f = h[1],
              O = Object(i.useState)([]),
              x = Object(j.a)(O, 2),
              g = x[0],
              y = x[1],
              v = Object(i.useState)(),
              _ = Object(j.a)(v, 2),
              S = _[0],
              T = _[1],
              k = Object(i.useState)(''),
              C = Object(j.a)(k, 2),
              w = C[0],
              z = C[1],
              A = Object(i.useState)([]),
              q = Object(j.a)(A, 2),
              B = q[0],
              L = q[1],
              F = Object(i.useContext)(ue).userAccessToken,
              G = (function () {
                var e = Object(m.a)(
                  u.a.mark(function e() {
                    var t, a, n;
                    return u.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              Y().then(function (e) {
                                return e;
                              })
                            );
                          case 2:
                            (t = e.sent),
                              console.log(t),
                              200 === t.status
                                ? ((a = t.data.data.platform.map(function (e) {
                                    return {
                                      id: e.id,
                                      title: e.platform_name,
                                      platform_region: e.platform_region,
                                      img: pe,
                                      cardDescrip:
                                        e.number_of_members.toString() || '0',
                                      routes: 'buyers/platform-subscriber-list',
                                      state: { data: { platformId: e.id } },
                                    };
                                  })),
                                  (n = a.slice(0, 4)),
                                  d(n))
                                : je(!1, 'Failed to fetch Platform');
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              Z = (function () {
                var e = Object(m.a)(
                  u.a.mark(function e() {
                    var t, a, n;
                    return u.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              K().then(function (e) {
                                return e;
                              })
                            );
                          case 2:
                            (t = e.sent),
                              console.log(t),
                              200 === t.status
                                ? ((a = t.data.data.sellerInformations.map(
                                    function (e) {
                                      return {
                                        id: e.id,
                                        img: pe,
                                        title: e.full_name,
                                        cardDescrip: e.category,
                                        routes: 'buyers/shop-by-sellers',
                                        item: e,
                                        state: { data: e },
                                      };
                                    },
                                  )),
                                  (n = a.slice(0, 4)),
                                  f(n))
                                : je(!1, 'Failed to fetch sellers', t.messages);
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              E = (function () {
                var e = Object(m.a)(
                  u.a.mark(function e() {
                    var t;
                    return u.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              ((a = F),
                              D.a
                                .get('/api/v1/buyer/tender-request', {
                                  headers: {
                                    Authorization: 'Bearer '.concat(a),
                                  },
                                })
                                .then(function (e) {
                                  return e;
                                })
                                .catch(function (e) {
                                  return e;
                                })).then(function (e) {
                                return e;
                              })
                            );
                          case 2:
                            200 === (t = e.sent).status && L(t.data.data);
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                      var a;
                    }, e);
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              V = (function () {
                var e = Object(m.a)(
                  u.a.mark(function e() {
                    var t, a;
                    return u.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              ce().then(function (e) {
                                return e;
                              })
                            );
                          case 2:
                            200 === (t = e.sent).status
                              ? ((a = t.data.data.map(function (e) {
                                  return {
                                    key: e.id,
                                    name: e.variety_name,
                                    platform_name: e.platform_name,
                                  };
                                })),
                                y(a))
                              : je(!1, 'Fail to Fetch Variety');
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            return (
              Object(i.useEffect)(function () {
                E(), V(), G(), Z();
              }, []),
              Object(n.jsxs)(n.Fragment, {
                children: [
                  Object(n.jsx)(N, {}),
                  Object(n.jsxs)('div', {
                    className: 'buyer--card_group',
                    children: [
                      Object(n.jsx)(I, {
                        subtitle: '1. Give Tender',
                        className: 'buyer--card',
                        styles: { margin: '0.5rem 0' },
                        isHoverable: !0,
                        children: Object(n.jsx)('div', {
                          children: Object(n.jsx)('p', {
                            style: { fontSize: 16 },
                            children:
                              'A formal, structured procedure for generating competing offers from different potential suppliers or contractors looking to obtain an award of business activity in works, supply.',
                          }),
                        }),
                      }),
                      Object(n.jsx)(I, {
                        subtitle: '2. Request Tender',
                        className: 'buyer--card',
                        styles: { margin: '0.5rem 0' },
                        isHoverable: !0,
                        children: Object(n.jsx)('div', {
                          children: Object(n.jsx)('p', {
                            style: { fontSize: 16 },
                            children:
                              'A formal, structured procedure for generating competing offers from different potential suppliers or contractors looking to obtain an award of business activity in works, supply.',
                          }),
                        }),
                      }),
                      Object(n.jsx)(I, {
                        subtitle: '3. Price Rate',
                        className: 'buyer--card',
                        styles: { margin: '0.5rem 0' },
                        isHoverable: !0,
                        children: Object(n.jsx)('div', {
                          children: Object(n.jsx)('p', {
                            style: { fontSize: 16 },
                            children:
                              'A formal, structured procedure for generating competing offers from different potential suppliers or contractors looking to obtain an award of business activity in works, supply.',
                          }),
                        }),
                      }),
                      Object(n.jsx)(M, {
                        title: 'Recent Tender Request',
                        route: 'buyers/tender-requests',
                        listItems: B,
                      }),
                      Object(n.jsx)(M, {
                        title: 'Shop by Seller',
                        viewAllAction: function () {
                          c(!a);
                        },
                        listItems: b,
                      }),
                      Object(n.jsx)(M, {
                        title: 'Shop By Platform',
                        route: 'buyers/shop-by-platforms',
                        listItems: s,
                      }),
                    ],
                  }),
                  Object(n.jsxs)(R.a, {
                    title: 'Shop By Seller',
                    centered: !0,
                    visible: a,
                    okText: 'Next',
                    onOk: function () {
                      Object(l.d)('buyers/shop-by-sellers', {
                        state: { data: { selectedVariety: S } },
                      });
                      var e = g.filter(function (e) {
                        return e.key === w;
                      });
                      sessionStorage.setItem(
                        'shopBySellerVarity',
                        JSON.stringify(e),
                      );
                    },
                    okButtonProps: {
                      disabled:
                        !S ||
                        !S.variety_selection ||
                        0 === S.variety_selection.ids.length,
                    },
                    onCancel: function () {
                      return c(!a);
                    },
                    children: [
                      Object(n.jsx)('h3', { children: 'Choose Variety' }),
                      Object(n.jsx)('div', {
                        children: Object(n.jsx)(P.a.Group, {
                          onChange: function (e) {
                            var t = {
                              variety_selection: {
                                ids: [{ variety_id: e.target.value }],
                              },
                            };
                            T(t), z(e.target.value);
                          },
                          size: 'large',
                          children: g.map(function (e) {
                            return Object(n.jsxs)(
                              P.a,
                              {
                                value: e.key,
                                style: { fontSize: '20px' },
                                children: [
                                  e.name,
                                  ' ',
                                  Object(n.jsxs)('span', {
                                    style: {
                                      color: 'grey',
                                      marginLeft: '20px',
                                    },
                                    children: ['| ', e.platform_name],
                                  }),
                                ],
                              },
                              e.key,
                            );
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
          }),
        be = a(40),
        fe = a(117),
        Oe = a(118),
        xe = a(468),
        ge =
          (a(313),
          function (e) {
            var t = e.id,
              a = e.image,
              r = e.ownerName,
              o = e.description,
              s = e.type,
              d = e.variety,
              u = e.grade,
              m = e.pickupLocation,
              p = e.stock,
              h = e.need,
              b = e.isAllChecked,
              f = e.addCheckedItem,
              O = e.removeCheckedItem,
              x = e.category,
              g = e.user_location,
              y = e.platformLeader,
              v = e.phone_number,
              _ = e.platform_name,
              S = Object(i.useContext)(ue).userInfo;
            c.a.useEffect(
              function () {
                w(!!b);
              },
              [b],
            );
            var N = c.a.useState(!1),
              k = Object(j.a)(N, 2),
              C = k[0],
              w = k[1],
              I = function (e, t) {
                if ('Give Tender' === s)
                  if (S && S.phone_number) Object(l.d)(e);
                  else {
                    Object(l.d)('/app/login', {
                      state: { data: 'buyer redirected' },
                    });
                    var a = {
                      currentRoute: '/app/buyers',
                      togoRoute: 'give-tender-form',
                      userInfo: S,
                    };
                    sessionStorage.setItem(
                      'destinationRoute',
                      JSON.stringify(a),
                    );
                  }
                else Object(l.d)(e);
                sessionStorage.setItem('selectedItems', JSON.stringify(t));
              },
              z = function (e) {
                'request-tender' === s
                  ? I('request-tender-form', e)
                  : 'Send Quote' === s
                  ? I('quote-form', e)
                  : 'Give Tender' === s
                  ? I('give-tender-form', e)
                  : 'Chat' === s
                  ? I('chats', e)
                  : Object(l.d)('profile');
              };
            return Object(n.jsxs)(n.Fragment, {
              children: [
                Object(n.jsx)(
                  Oe.a,
                  {
                    checked: C,
                    value: t,
                    style: {
                      display: 'flex',
                      margin: '1rem 0.125rem',
                      width: '100%',
                    },
                    onChange: function () {
                      w(!C), C ? O(t) : f({ ownerName: r, id: t });
                    },
                    children: Object(n.jsxs)('div', {
                      className: 'listItemContainer',
                      children: [
                        Object(n.jsx)('div', {
                          className: 'listitemImageContainer',
                          children: Object(n.jsx)('img', {
                            src: a,
                            alt: 'cover image',
                            className: 'listitemImage',
                          }),
                        }),
                        Object(n.jsxs)('div', {
                          className: 'listDetailsContainer',
                          children: [
                            Object(n.jsxs)('div', {
                              className: 'listDetails',
                              children: [
                                Object(n.jsx)('h3', {
                                  className: 'listDetailsHeader',
                                  style: { margin: '0rem' },
                                  children: r,
                                }),
                                Object(n.jsx)('p', {
                                  className: 'listDetailsParag dispay-parag',
                                  children: o,
                                }),
                                Object(n.jsx)('div', {
                                  className: 'listOptions',
                                }),
                                Object(n.jsxs)('div', {
                                  className: 'listOptions',
                                  children: [
                                    Object(n.jsxs)('div', {
                                      className: 'listOptions_items',
                                      children: [
                                        d
                                          ? Object(n.jsxs)('p', {
                                              className:
                                                'listDetailsParag listDetailsParagBold',
                                              children: [
                                                ' ',
                                                Object(n.jsxs)('span', {
                                                  style: {
                                                    fontWeight: 600,
                                                    marginRight: 2,
                                                  },
                                                  children: ['Variety:', ' '],
                                                }),
                                                d,
                                              ],
                                            })
                                          : null,
                                        u
                                          ? Object(n.jsxs)('p', {
                                              className:
                                                'listDetailsParag listDetailsParagBold dispay-item',
                                              children: [
                                                Object(n.jsxs)('span', {
                                                  style: {
                                                    fontWeight: 600,
                                                    marginRight: 2,
                                                  },
                                                  children: ['Grade:', ' '],
                                                }),
                                                ' ',
                                                u,
                                              ],
                                            })
                                          : null,
                                        p
                                          ? Object(n.jsxs)('p', {
                                              className:
                                                'listDetailsParag listDetailsParagBold pickup_location',
                                              children: [
                                                Object(n.jsxs)('span', {
                                                  style: {
                                                    fontWeight: 600,
                                                    marginRight: 2,
                                                  },
                                                  children: ['Stock:', ' '],
                                                }),
                                                ' ',
                                                p,
                                              ],
                                            })
                                          : null,
                                        m
                                          ? Object(n.jsxs)('p', {
                                              className:
                                                'listDetailsParag listDetailsParagBold pickup_location',
                                              children: [
                                                Object(n.jsxs)('span', {
                                                  style: {
                                                    fontWeight: 600,
                                                    marginRight: 2,
                                                  },
                                                  children: [
                                                    'Pickup Location:',
                                                    ' ',
                                                  ],
                                                }),
                                                ' ',
                                                m,
                                              ],
                                            })
                                          : null,
                                        h
                                          ? Object(n.jsxs)('p', {
                                              className:
                                                'listDetailsParag listDetailsParagBold pickup_location',
                                              children: [
                                                Object(n.jsxs)('span', {
                                                  style: {
                                                    fontWeight: 600,
                                                    marginRight: 2,
                                                  },
                                                  children: [
                                                    'Buyers Need:',
                                                    ' ',
                                                  ],
                                                }),
                                                ' ',
                                                h,
                                              ],
                                            })
                                          : null,
                                        x
                                          ? Object(n.jsxs)('p', {
                                              className:
                                                'listDetailsParag listDetailsParagBold pickup_location',
                                              children: [
                                                Object(n.jsxs)('span', {
                                                  style: {
                                                    fontWeight: 600,
                                                    marginRight: 2,
                                                  },
                                                  children: ['Category:', ' '],
                                                }),
                                                ' ',
                                                x,
                                              ],
                                            })
                                          : null,
                                        g
                                          ? Object(n.jsxs)('p', {
                                              className:
                                                'listDetailsParag listDetailsParagBold pickup_location',
                                              children: [
                                                Object(n.jsxs)('span', {
                                                  style: {
                                                    fontWeight: 600,
                                                    marginRight: 2,
                                                  },
                                                  children: ['Location:', ' '],
                                                }),
                                                ' ',
                                                g,
                                              ],
                                            })
                                          : null,
                                        v
                                          ? Object(n.jsxs)('p', {
                                              className:
                                                'listDetailsParag listDetailsParagBold pickup_location',
                                              children: [
                                                Object(n.jsxs)('span', {
                                                  style: {
                                                    fontWeight: 600,
                                                    marginRight: 2,
                                                  },
                                                  children: [
                                                    'Phone Number:',
                                                    ' ',
                                                  ],
                                                }),
                                                ' ',
                                                v,
                                              ],
                                            })
                                          : null,
                                        _
                                          ? Object(n.jsxs)('p', {
                                              className:
                                                'listDetailsParag listDetailsParagBold pickup_location',
                                              children: [
                                                Object(n.jsxs)('span', {
                                                  style: {
                                                    fontWeight: 600,
                                                    marginRight: 2,
                                                  },
                                                  children: [
                                                    'Platform Name:',
                                                    ' ',
                                                  ],
                                                }),
                                                ' ',
                                                _,
                                              ],
                                            })
                                          : null,
                                        y
                                          ? Object(n.jsxs)('p', {
                                              className:
                                                'listDetailsParag listDetailsParagBold pickup_location',
                                              children: [
                                                Object(n.jsxs)('span', {
                                                  style: {
                                                    fontWeight: 600,
                                                    marginRight: 2,
                                                  },
                                                  children: [
                                                    'Platform Leader:',
                                                    ' ',
                                                  ],
                                                }),
                                                ' ',
                                                y,
                                              ],
                                            })
                                          : null,
                                      ],
                                    }),
                                    Object(n.jsx)('div', {
                                      className: 'moreDetailsBtn',
                                      children:
                                        'request-tender' === s
                                          ? Object(n.jsx)(T.a, {
                                              type: 'primary',
                                              onClick: function () {
                                                return z(e);
                                              },
                                              children: 'Request Tender',
                                            })
                                          : 'Send Quote' === s
                                          ? Object(n.jsxs)(n.Fragment, {
                                              children: [
                                                Object(n.jsx)(T.a, {
                                                  type: 'primary',
                                                  onClick: function () {
                                                    return z(e);
                                                  },
                                                  children: 'Send Quote',
                                                }),
                                                Object(n.jsx)(T.a, {
                                                  danger: !0,
                                                  style: { marginLeft: '10px' },
                                                  onClick: function () {
                                                    return z(e);
                                                  },
                                                  children: 'Quit Tender',
                                                }),
                                              ],
                                            })
                                          : 'Chat with Seller' === s
                                          ? Object(n.jsx)(T.a, {
                                              type: 'primary',
                                              onClick: function () {
                                                return z(e);
                                              },
                                              children: 'Chat',
                                            })
                                          : 'Give Tender' === s
                                          ? Object(n.jsx)(T.a, {
                                              type: 'primary',
                                              onClick: function () {
                                                return z(e);
                                              },
                                              children: 'Give Tender',
                                            })
                                          : null,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(n.jsx)('div', {
                              className: 'listItemIconBtn',
                              onClick: function () {
                                return z(e);
                              },
                              children: Object(n.jsx)(xe.a, {
                                className: 'listItemIcon',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  t,
                ),
                Object(n.jsx)('hr', {}),
              ],
            });
          }),
        ye =
          (a(314),
          function (e) {
            var t = e.itemSelected,
              a = e.title,
              c = e.route,
              r = e.checkedItems,
              o = Object(i.useContext)(ue).userInfo;
            return Object(n.jsxs)('div', {
              style: {
                margin: '0rem auto',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              },
              children: [
                Object(n.jsxs)('div', {
                  style: { display: 'flex', justifyContent: 'flex-start' },
                  children: [
                    Object(n.jsxs)('div', {
                      style: { margin: '0rem 0.5rem' },
                      children: [
                        Object(n.jsx)('div', {
                          children: Object(n.jsx)('h2', {
                            style: { fontSize: 16, marginBottom: 1 },
                            children: 'Filter:',
                          }),
                        }),
                        Object(n.jsxs)(fe.a, {
                          defaultValue: 'TZS',
                          style: { width: 120 },
                          children: [
                            Object(n.jsx)(_e, {
                              value: 'TZS',
                              children: 'TZS',
                            }),
                            Object(n.jsx)(_e, {
                              value: 'UGS',
                              children: 'UGS',
                            }),
                            Object(n.jsx)(_e, {
                              value: 'KSH',
                              children: 'KSH',
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(n.jsxs)('div', {
                      style: { margin: '0rem 0.5rem' },
                      children: [
                        Object(n.jsx)('div', {
                          children: Object(n.jsx)('h2', {
                            style: { fontSize: 16, marginBottom: 1 },
                            children: 'Sort By:',
                          }),
                        }),
                        Object(n.jsxs)(fe.a, {
                          defaultValue: 'non-TBS Certified',
                          style: { width: 120 },
                          children: [
                            Object(n.jsx)(_e, {
                              value: 'TBS Certified',
                              children: 'TBS Certified',
                            }),
                            Object(n.jsx)(_e, {
                              value: 'non-TBS Certified',
                              children: 'Non-TBS Certified',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                a &&
                  Object(n.jsx)('div', {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '1rem',
                    },
                    children: Object(n.jsx)(T.a, {
                      disabled: t,
                      danger: !0,
                      onClick: function () {
                        if ('give-tender-form' === c)
                          if (o && o.phone_number) Object(l.d)(c);
                          else {
                            Object(l.d)('/app/login', {
                              state: { data: 'buyer redirected' },
                            });
                            var e = {
                              currentRoute: '/app/buyers',
                              togoRoute: 'give-tender-form',
                              userInfo: o,
                            };
                            sessionStorage.setItem(
                              'destinationRoute',
                              JSON.stringify(e),
                            );
                          }
                        else Object(l.d)(c);
                        sessionStorage.setItem(
                          'selectedItems',
                          JSON.stringify(r),
                        );
                      },
                      style: { textTransform: 'uppercase' },
                      children: a,
                    }),
                  }),
              ],
            });
          }),
        ve = function (e) {
          var t = e.count;
          return Object(n.jsxs)('div', {
            style: { display: 'flex', marginBottom: 2, marginTop: 3 },
            children: [
              Object(n.jsx)('p', {
                style: {
                  fontSize: '1rem',
                  fontWeight: 600,
                  marginBottom: 0,
                  marginRight: 5,
                },
                children: 'Result:',
              }),
              Object(n.jsx)('p', { style: { marginBottom: 0 }, children: t }),
            ],
          });
        },
        _e = fe.a.Option,
        Se = function (e) {
          var t = e.btnTitle,
            a = e.routes,
            i = e.itemData,
            r = e.type,
            o = c.a.useState([]),
            s = Object(j.a)(o, 2),
            l = s[0],
            d = s[1],
            u = c.a.useState(!1),
            m = Object(j.a)(u, 2),
            p = m[0],
            h = m[1];
          c.a.useEffect(
            function () {
              0 === l.length && h(!1);
            },
            [l],
          );
          var b = function (e) {
              var t = []
                .concat(Object(be.a)(l), [e])
                .filter(function (e, t, a) {
                  return (
                    t ===
                    a.findIndex(function (t) {
                      return t.id === e.id && t.ownerName === e.ownerName;
                    })
                  );
                });
              d(t);
            },
            f = function (e) {
              var t =
                null === l || void 0 === l
                  ? void 0
                  : l.filter(function (t) {
                      return t.id !== e;
                    });
              d(t);
            };
          return Object(n.jsxs)('div', {
            className: 'list-container',
            children: [
              Object(n.jsx)('div', {
                style: { margin: '1.875rem 0rem' },
                children: Object(n.jsx)(ye, {
                  itemSelected: l.length <= 0,
                  checkedItems: l,
                  title: t,
                  route: a,
                }),
              }),
              Object(n.jsxs)('div', {
                style: { width: '100%' },
                children: [
                  Object(n.jsxs)('div', {
                    children: [
                      Object(n.jsx)(Oe.a, {
                        checked: p,
                        style: { display: 'flex', margin: '1rem 0.125rem' },
                        onChange: function () {
                          h(!p);
                          var e = i.map(function (e) {
                            return { ownerName: e.ownerName, id: e.id };
                          });
                          d(p ? [] : e);
                        },
                        children: Object(n.jsx)(ve, { count: i.length }),
                      }),
                      Object(n.jsx)('div', {
                        style: {
                          height: 3,
                          width: '100%',
                          backgroundColor: 'grey',
                        },
                      }),
                    ],
                  }),
                  0 !== i.length
                    ? Object(n.jsx)(n.Fragment, {
                        children: i.map(function (e) {
                          return Object(n.jsx)(
                            ge,
                            {
                              id: e.id,
                              type: r,
                              image: e.image,
                              ownerName: e.ownerName,
                              description: e.description,
                              variety: e.variety,
                              pickupLocation: e.pickupLocation,
                              grade: e.grade,
                              stock: e.stock,
                              need: e.need,
                              addCheckedItem: b,
                              removeCheckedItem: f,
                              isAllChecked: p,
                              category: e.category,
                              user_location: e.user_location,
                              phone_number: e.phone_number,
                              platform_name: e.platform_name,
                            },
                            e.id,
                          );
                        }),
                      })
                    : Object(n.jsx)('div', {
                        style: {
                          height: '700px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        },
                        children: Object(n.jsx)(z.a, {}),
                      }),
                ],
              }),
            ],
          });
        },
        Ne = a.p + 'static/media/12.f788e43e.png',
        Te = function (e) {
          var t = Object(i.useState)([]),
            a = Object(j.a)(t, 2),
            c = a[0],
            r = a[1],
            o = Object(i.useContext)(B),
            s = o.sellerInfo,
            l = o.path,
            d = (function () {
              var t = Object(m.a)(
                u.a.mark(function t() {
                  var a, n;
                  return u.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            ((i = e.location.state.data.selectedVariety),
                            D.a
                              .post('/api/v1/seller/variety', i)
                              .then(function (e) {
                                return e;
                              })
                              .catch(function (e) {
                                return e;
                              })).then(function (e) {
                              return e;
                            })
                          );
                        case 2:
                          (a = t.sent),
                            console.log(a),
                            200 === a.status
                              ? ((n = a.data.data.map(function (e) {
                                  return {
                                    id: e.id,
                                    image: Ne,
                                    category: e.category,
                                    ownerName: e.full_name,
                                    user_location: e.location,
                                    phone_number: e.phone_number,
                                    platformLeader: e.platform_leader,
                                  };
                                })),
                                r(n))
                              : je(!1, 'Failed to fetch Seller');
                        case 5:
                        case 'end':
                          return t.stop();
                      }
                    var i;
                  }, t);
                }),
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          return (
            Object(i.useEffect)(function () {
              console.log(l);
              'seller_info' === l
                ? (function () {
                    var e = {
                      id: s.item.id,
                      image: Ne,
                      category: s.item.category,
                      ownerName: s.item.full_name,
                      user_location: s.item.location,
                      phone_number: s.item.phone_number,
                      platformLeader: s.item.platform_leader,
                    };
                    r([e]);
                  })()
                : d();
            }, []),
            Object(n.jsx)('div', {
              style: { minHeight: '700px' },
              children: Object(n.jsx)(Se, {
                btnTitle: 'Give Tender',
                routes: 'give-tender-form',
                itemData: c,
                type: 'Give Tender',
              }),
            })
          );
        },
        ke = function () {
          var e = Object(i.useState)([]),
            t = Object(j.a)(e, 2),
            a = t[0],
            c = t[1];
          return (
            Object(i.useEffect)(function () {
              (function () {
                var e = Object(m.a)(
                  u.a.mark(function e() {
                    var t, a;
                    return u.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              Y().then(function (e) {
                                return e;
                              })
                            );
                          case 2:
                            (t = e.sent),
                              console.log(t),
                              200 === t.status
                                ? ((a = t.data.data.platform.map(function (e) {
                                    return {
                                      id: e.id,
                                      title: e.platform_name,
                                      platform_region: e.platform_region,
                                      img: pe,
                                      cardDescrip:
                                        e.number_of_members.toString() || '0',
                                      routes: 'platform-subscriber-list',
                                    };
                                  })),
                                  c(a))
                                : je(!1, 'Failed to fetch Platform');
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            }, []),
            Object(n.jsxs)('div', {
              children: [
                Object(n.jsx)('h1', { children: 'Platforms' }),
                Object(n.jsx)('hr', {}),
                Object(n.jsx)('div', {
                  style: { minHeight: '700px' },
                  children:
                    0 !== a.length
                      ? Object(n.jsx)('div', {
                          style: { display: 'flex', flexWrap: 'wrap' },
                          children: a.map(function (e) {
                            return Object(n.jsx)(
                              I,
                              {
                                imgTitle: e.title,
                                imgDescrip: e.platform_region,
                                img: e.img,
                                styles: { maxWidth: '300px' },
                                onClick: function () {
                                  return Object(l.d)(''.concat(e.routes), {
                                    state: { data: { platformId: e.id } },
                                  });
                                },
                              },
                              e.id,
                            );
                          }),
                        })
                      : Object(n.jsx)('div', {
                          style: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          },
                          children: Object(n.jsx)(z.a, {}),
                        }),
                }),
              ],
            })
          );
        },
        Ce = function (e) {
          var t = Object(i.useState)([]),
            a = Object(j.a)(t, 2),
            c = a[0],
            r = a[1],
            o = Object(i.useContext)(B).savePlatformVariety,
            s = (function () {
              var e = Object(m.a)(
                u.a.mark(function e(t) {
                  var a, n;
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Q(t).then(function (e) {
                              return e;
                            })
                          );
                        case 2:
                          200 === (a = e.sent).status
                            ? (console.log(a.data.data.sellerInformations),
                              (n = a.data.data.sellerInformations.map(function (
                                e,
                              ) {
                                return {
                                  id: e.id,
                                  image: pe,
                                  ownerName: e.full_name,
                                  category: e.application_type,
                                  user_location: e.location,
                                  phone_number: '0'.concat(e.phone_number),
                                  platform_name: e.platform_name,
                                  routes: 'buyers/give-tender-form',
                                };
                              })),
                              r(n))
                            : je(!1, 'Failed to fetch Sellers', a.message);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            l = (function () {
              var e = Object(m.a)(
                u.a.mark(function e(t) {
                  var a, n;
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            J(t).then(function (e) {
                              return e;
                            })
                          );
                        case 2:
                          (a = e.sent),
                            console.log(a),
                            200 === a.status &&
                              (console.log(a.data.data),
                              (n = a.data.data.map(function (e) {
                                return { key: e.id, name: e.variety_name };
                              })),
                              o(n, 'platform_list'));
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(i.useEffect)(function () {
              var t = e.location.state.data.platformId;
              l(t), s(t);
            }, []),
            Object(n.jsx)(n.Fragment, {
              children:
                0 !== c.length
                  ? Object(n.jsx)('div', {
                      style: { minHeight: '700px' },
                      children: Object(n.jsx)(Se, {
                        btnTitle: 'Give Tender',
                        routes: 'give-tender-form',
                        itemData: c,
                        type: 'Give Tender',
                      }),
                    })
                  : Object(n.jsx)('div', {
                      style: {
                        height: '700px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      },
                      children: Object(n.jsx)(z.a, {}),
                    }),
            })
          );
        },
        we = [
          {
            id: 1,
            image: a.p + 'static/media/14.36fc04de.jpg',
            ownerName: 'Wamama Union Association',
            description:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos \n                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!',
            variety: 'Super Kyela',
            grade: 'One',
            pickupLocation: 'Kilosa',
            stock: '14,342kgs',
          },
          {
            id: 2,
            image: a.p + 'static/media/6.3f5c58e0.jpg',
            ownerName: 'Ally juma',
            description:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos \n                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!',
            variety: 'Super Mtibwa',
            grade: 'One',
            pickupLocation: 'Morogoro',
            stock: '14,342kgs',
          },
          {
            id: 3,
            image: a.p + 'static/media/7.50a534bb.jpg',
            ownerName: 'Alfred john',
            description:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos \n                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!',
            variety: 'Super Pwani',
            grade: 'One',
            pickupLocation: 'Pwani',
            stock: '14,342kgs',
          },
          {
            id: 4,
            image: a.p + 'static/media/13.fbdfbf75.jpg',
            ownerName: 'Frank David',
            description:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos \n                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!',
            variety: 'Super Ngorongoro',
            grade: 'One',
            pickupLocation: 'Arusha',
            stock: '14,342kgs',
          },
          {
            id: 5,
            image: a.p + 'static/media/11.022cc552.jpg',
            ownerName: 'East Africa milling Ltd',
            description:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos \n                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!',
            variety: 'Super Kyela',
            grade: 'One',
            pickupLocation: 'Shinyanya',
            stock: '14,342kgs',
          },
        ],
        Ie = function () {
          return Object(n.jsx)(n.Fragment, {
            children: Object(n.jsx)(Se, {
              btnTitle: 'Give Tender',
              routes: 'give-tender-form',
              itemData: we,
              type: 'Chat with Seller',
            }),
          });
        },
        ze = a(464),
        Ae = a(45),
        qe =
          (a(321),
          function (e) {
            var t = Object(Ae.a)({
                mode: 'onBlur',
                reValidateMode: 'onChange',
              }),
              a = t.register,
              c = t.handleSubmit,
              r = t.setValue,
              o = t.errors,
              s = fe.a.Option,
              d = Object(i.useContext)(ue).userAccessToken,
              p = Object(i.useContext)(B),
              h = p.platformVariety,
              b = p.path,
              f = Object(i.useState)(!1),
              O = Object(j.a)(f, 2),
              x = O[0],
              g = O[1],
              y = Object(i.useState)([]),
              v = Object(j.a)(y, 2),
              _ = v[0],
              S = v[1],
              N = Object(i.useState)([]),
              k = Object(j.a)(N, 2),
              C = k[0],
              w = k[1],
              I = (function () {
                var e = Object(m.a)(
                  u.a.mark(function e() {
                    var t, a;
                    return u.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              ce().then(function (e) {
                                return e;
                              })
                            );
                          case 2:
                            200 === (t = e.sent).status
                              ? ((a = t.data.data.map(function (e) {
                                  return { key: e.id, name: e.variety_name };
                                })),
                                S(a))
                              : je(!1, 'Fail to Fetch Variety');
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            Object(i.useEffect)(function () {
              var e = JSON.parse(
                sessionStorage.getItem('shopBySellerVarity') || '[]',
              );
              w(e),
                e.length,
                0 !== h.length && 'platform_list' === b ? S(h) : I();
            }, []),
              Object(i.useEffect)(
                function () {
                  a('amount', { required: !0 }),
                    a('grade', { required: !0 }),
                    a('variety', { required: !1 }),
                    a('description');
                },
                [a],
              );
            return Object(n.jsxs)('div', {
              children: [
                Object(n.jsx)('h3', { children: 'Give Tender' }),
                Object(n.jsxs)('form', {
                  className: 'tenderrequest_container',
                  onSubmit: c(function (e) {
                    var t = JSON.parse(
                        sessionStorage.getItem('selectedItems') || '[]',
                      ).map(function (e) {
                        return { id: e.id };
                      }),
                      a =
                        0 === C.length
                          ? {
                              quantity: e.amount,
                              grade: e.grade,
                              pickup_location: e.description,
                              variety: e.variety,
                              seller_selection: { seller_id: t },
                            }
                          : {
                              quantity: e.amount,
                              grade: e.grade,
                              pickup_location: e.description,
                              variety: C[0].name,
                              seller_selection: { seller_id: t },
                            };
                    console.log(a),
                      g(!0),
                      (function () {
                        var e = Object(m.a)(
                          u.a.mark(function e() {
                            var t;
                            return u.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.next = 2), Z(a, d);
                                  case 2:
                                    (t = e.sent),
                                      g(!1),
                                      200 === t.status
                                        ? (je(!0, 'Tender Given Successfully'),
                                          Object(l.d)('/app/buyers'))
                                        : je(!1, 'Failed To Give Tender'),
                                      console.log(t);
                                  case 6:
                                  case 'end':
                                    return e.stop();
                                }
                            }, e);
                          }),
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })()();
                  }),
                  children: [
                    Object(n.jsx)('div', {
                      className: 'request-quantity_input',
                      children: Object(n.jsx)(ze.a, {
                        size: 'large',
                        placeholder: 'RICE',
                        style: { width: '100%' },
                        disabled: !0,
                      }),
                    }),
                    Object(n.jsxs)('div', {
                      className: 'request-quantity_input',
                      children: [
                        Object(n.jsx)('h3', { children: 'Quantity Needed' }),
                        Object(n.jsx)(ze.a, {
                          size: 'large',
                          placeholder: 'Quantity in Kg',
                          style: { width: '100%' },
                          addonAfter: 'Kgs',
                          onChange: function (e) {
                            r('amount', e.target.value);
                          },
                        }),
                        Object(n.jsx)('span', {
                          style: { fontSize: '1rem', color: 'red' },
                          children: o.amount && 'Amount is required',
                        }),
                      ],
                    }),
                    Object(n.jsxs)('div', {
                      className: 'select-option',
                      children: [
                        Object(n.jsxs)('div', {
                          className: 'option-select',
                          children: [
                            Object(n.jsxs)(fe.a, {
                              size: 'large',
                              style: { width: '100%' },
                              defaultValue: '',
                              onChange: function (e) {
                                r('grade', e);
                              },
                              children: [
                                Object(n.jsx)(s, {
                                  value: '',
                                  children: 'Select Grade',
                                }),
                                Object(n.jsx)(s, { value: '1', children: '1' }),
                                Object(n.jsx)(s, { value: '2', children: '2' }),
                                Object(n.jsx)(s, { value: '3', children: '3' }),
                              ],
                            }),
                            Object(n.jsx)('span', {
                              style: { fontSize: '1rem', color: 'red' },
                              children: o.grade && 'Grade is required',
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'option-select',
                          children: [
                            Object(n.jsxs)(fe.a, {
                              size: 'large',
                              defaultValue: 'variety',
                              style: { width: '100%' },
                              onChange: function (e) {
                                r('variety', e);
                              },
                              children: [
                                Object(n.jsx)(s, {
                                  value: 'variety',
                                  children: 'Select Variety',
                                }),
                                _.map(function (e) {
                                  return Object(n.jsx)(
                                    s,
                                    { value: e.name, children: e.name },
                                    e.key,
                                  );
                                }),
                              ],
                            }),
                            Object(n.jsx)('span', {
                              style: { fontSize: '1rem', color: 'red' },
                              children: o.variety && 'Variety is required',
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(n.jsx)('div', {
                      className: 'request-textarea',
                      children: Object(n.jsx)(ze.a.TextArea, {
                        placeholder: 'Other Necessary Details',
                        autoSize: { minRows: 3, maxRows: 5 },
                        onChange: function (e) {
                          r('description', e.target.value);
                        },
                      }),
                    }),
                    Object(n.jsx)('div', {
                      className: 'request-action_btn',
                      children: Object(n.jsx)(T.a, {
                        size: 'large',
                        type: 'primary',
                        htmlType: 'submit',
                        loading: x,
                        children: 'Give Tender',
                      }),
                    }),
                  ],
                }),
              ],
            });
          }),
        Be = a(459),
        Me = a(57),
        Re = a.n(Me),
        Pe = [
          {
            title: 'Variety',
            dataIndex: 'variety',
            key: 'variety',
            sorter: {
              compare: function (e, t) {
                return e.variety.length - t.variety.length;
              },
            },
          },
          {
            title: 'Price (TZS)',
            dataIndex: 'price',
            key: 'price',
            sorter: {
              compare: function (e, t) {
                return e.price.length - t.price.length;
              },
            },
          },
          {
            title: 'Region',
            dataIndex: 'region',
            key: 'region',
            sorter: {
              compare: function (e, t) {
                return e.region.length - t.region.length;
              },
            },
          },
          {
            title: 'Effect Date',
            dataIndex: 'effectiveDate',
            key: 'effectiveDate',
            sorter: {
              compare: function (e, t) {
                return e.effectiveDate.length - t.effectiveDate.length;
              },
            },
          },
        ],
        Le = function () {
          var e = Object(i.useState)([]),
            t = Object(j.a)(e, 2),
            a = t[0],
            c = t[1];
          return (
            Object(i.useEffect)(function () {
              (function () {
                var e = Object(m.a)(
                  u.a.mark(function e() {
                    var t, a;
                    return u.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              oe().then(function (e) {
                                return e;
                              })
                            );
                          case 2:
                            200 === (t = e.sent).status
                              ? ((a = t.data.data.map(function (e) {
                                  return {
                                    key: e.id,
                                    variety: e.variety,
                                    price: e.price_rate,
                                    region: e.region,
                                    effectiveDate: Re()(e.date).format(
                                      'Do MMMM YYYY',
                                    ),
                                  };
                                })),
                                c(a))
                              : je(!1, 'Fail to fetch Price Rate', t.message);
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            }, []),
            Object(n.jsx)(n.Fragment, {
              children: Object(n.jsx)('div', {
                style: { height: '700px' },
                children: Object(n.jsx)(Be.a, { dataSource: a, columns: Pe }),
              }),
            })
          );
        },
        De = a(172),
        Fe = a(228),
        Ge = a.p + 'static/media/2.dca4c616.png',
        Ze = [
          {
            id: 1,
            img: Ge,
            title: 'East Africa milling Ltd',
            cardDescrip: 'Lorem is here',
            routes: 'sellers/user-profile',
          },
          {
            id: 2,
            img: Ge,
            title: 'East Africa milling Ltd',
            cardDescrip: 'Lorem is here',
            routes: 'sellers/user-profile',
          },
          {
            id: 3,
            img: Ge,
            title: 'East Africa milling Ltd',
            cardDescrip: 'Lorem is here',
            routes: 'sellers/user-profile',
          },
        ],
        Ke = function (e) {
          var t = e.type;
          return Object(n.jsx)('div', {
            children: Object(n.jsxs)('div', {
              style: { width: '80%' },
              children: [
                Object(n.jsxs)('div', {
                  style: { marginBottom: '1.25rem', marginTop: '1.25rem' },
                  children: [
                    Object(n.jsx)('h2', {
                      style: { fontSize: '1.125rem', fontWeight: 600 },
                      children: 'Contact Person:',
                    }),
                    Object(n.jsxs)('div', {
                      style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                      },
                      children: [
                        Object(n.jsxs)('div', {
                          style: { display: 'flex' },
                          children: [
                            Object(n.jsx)('h3', { children: 'Phone Number: ' }),
                            Object(n.jsx)('p', {
                              style: {
                                fontSize: 16,
                                marginLeft: '1rem',
                                textAlign: 'center',
                              },
                              children: '0784490987',
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          style: { display: 'flex' },
                          children: [
                            Object(n.jsx)('h3', { children: 'Scale Status: ' }),
                            Object(n.jsx)('p', {
                              style: {
                                fontSize: 16,
                                marginLeft: '1rem',
                                textAlign: 'center',
                                textTransform: 'capitalize',
                              },
                              children: 'large',
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          style: { display: 'flex' },
                          children: [
                            Object(n.jsx)('h3', { children: 'Experience: ' }),
                            Object(n.jsx)('p', {
                              style: {
                                fontSize: 16,
                                marginLeft: '1rem',
                                textAlign: 'center',
                              },
                              children: '11-20 years in rice business',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(n.jsxs)('div', {
                  style: { marginBottom: '1.25rem' },
                  children: [
                    Object(n.jsxs)('div', {
                      style: { marginBottom: '1.25rem', marginTop: '1.25rem' },
                      children: [
                        Object(n.jsx)('div', {
                          style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                          },
                          children: Object(n.jsxs)('div', {
                            children: [
                              Object(n.jsx)('h3', {
                                style: {
                                  fontSize: '1.125rem',
                                  fontWeight: 600,
                                },
                                children: 'Label:',
                              }),
                              Object(n.jsx)('div', {
                                style: { display: 'flex' },
                                children: Object(n.jsx)(Fe.a, {
                                  color: '#f50',
                                  style: {
                                    padding: '0.2rem 0.5rem',
                                    fontSize: '14px',
                                  },
                                  children: 'Tbs Certic',
                                }),
                              }),
                            ],
                          }),
                        }),
                        Object(n.jsx)('hr', {}),
                      ],
                    }),
                    Object(n.jsxs)('div', {
                      children: [
                        Object(n.jsx)('h3', {
                          style: { fontSize: '1.125rem', fontWeight: 600 },
                          children: 'Action',
                        }),
                        Object(n.jsx)(T.a, {
                          type: 'primary',
                          onClick: function () {
                            'quote_tender' === t
                              ? console.log('Send Quote')
                              : 'tender-request' === t
                              ? Object(l.d)('tender-bid-form')
                              : 'chat' === t
                              ? console.log('Chat with Seller')
                              : console.log('Give Tender');
                          },
                          children:
                            'quote_tender' === t
                              ? 'Send Quote'
                              : 'tender-request' === t
                              ? 'Request Tender'
                              : 'chat' === t
                              ? 'Chat with Seller'
                              : 'Give Tender',
                        }),
                      ],
                    }),
                  ],
                }),
                Object(n.jsx)('div', {
                  style: { marginTop: '4rem' },
                  children: Object(n.jsx)(M, {
                    title: 'Related Sellers',
                    route: '/',
                    listItems: Ze,
                  }),
                }),
              ],
            }),
          });
        },
        Ee = function (e) {
          var t = e.profileImage;
          return Object(n.jsx)('div', {
            className: 'profile-sidebar',
            children: Object(n.jsx)('div', {
              className: 'profile-image_container',
              children: Object(n.jsx)('img', {
                src: t,
                alt: 'user profile picture',
                className: 'profile-picture',
              }),
            }),
          });
        },
        Ve = function () {
          return Object(n.jsx)('div', {
            className: 'profile-sm-container',
            children: Object(n.jsxs)('div', {
              children: [
                Object(n.jsxs)('div', {
                  children: [
                    Object(n.jsxs)('div', {
                      className: 'profile-sm-image_container',
                      children: [
                        Object(n.jsx)('div', {
                          style: {
                            marginBottom: '1rem',
                            display: 'flex',
                            justifyContent: 'center',
                          },
                          children: Object(n.jsx)('img', {
                            src: Ge,
                            alt: 'profile-image',
                            className: 'profile-sm-image',
                          }),
                        }),
                        Object(n.jsx)('h1', {
                          className: 'profile-user-name',
                          children: 'Jack Dorsey',
                        }),
                      ],
                    }),
                    Object(n.jsxs)('div', {
                      className: 'profile-sm-info',
                      children: [
                        Object(n.jsxs)('h2', {
                          children: [
                            Object(n.jsx)('span', {
                              style: { fontWeight: 500 },
                              children: 'Experience:',
                            }),
                            ' 11-20 years',
                          ],
                        }),
                        Object(n.jsxs)('h2', {
                          children: [
                            Object(n.jsx)('span', {
                              style: { fontWeight: 500 },
                              children: 'Scale Status:',
                            }),
                            ' Large',
                          ],
                        }),
                        Object(n.jsx)('div', {
                          style: { display: 'flex', justifyContent: 'center' },
                          children: Object(n.jsxs)('div', {
                            className: 'profile-sm-tags',
                            children: [
                              Object(n.jsx)('div', {
                                children: Object(n.jsx)(Fe.a, {
                                  color: '#f50',
                                  style: {
                                    padding: '0.2rem 0.5rem',
                                    fontSize: '14px',
                                  },
                                  children: 'RCT Approved',
                                }),
                              }),
                              Object(n.jsx)('div', {
                                children: Object(n.jsx)(Fe.a, {
                                  color: '#2db7f5',
                                  style: {
                                    padding: '0.2rem 0.5rem',
                                    fontSize: '14px',
                                  },
                                  children: 'TBS Certicified',
                                }),
                              }),
                              Object(n.jsx)('div', {
                                children: Object(n.jsx)(Fe.a, {
                                  color: '#87d068',
                                  style: {
                                    padding: '0.2rem 0.5rem',
                                    fontSize: '14px',
                                  },
                                  children: 'Individual',
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    Object(n.jsx)('hr', {}),
                  ],
                }),
                Object(n.jsxs)('div', {
                  style: { marginBottom: '4rem' },
                  children: [
                    Object(n.jsxs)('div', {
                      children: [
                        Object(n.jsx)('h2', {
                          style: { fontSize: '1.135rem', fontWeight: 600 },
                          children: 'Tender Details',
                        }),
                        Object(n.jsxs)('div', {
                          children: [
                            Object(n.jsxs)('p', {
                              children: [
                                Object(n.jsx)('span', {
                                  style: { fontWeight: 500 },
                                  children: 'Variety: ',
                                }),
                                ' Kyela',
                              ],
                            }),
                            Object(n.jsxs)('p', {
                              children: [
                                Object(n.jsx)('span', {
                                  style: { fontWeight: 500 },
                                  children: 'Grade: ',
                                }),
                                ' 1',
                              ],
                            }),
                            Object(n.jsxs)('p', {
                              children: [
                                Object(n.jsx)('span', {
                                  style: { fontWeight: 500 },
                                  children: 'Stock: ',
                                }),
                                ' 10 Tonnes',
                              ],
                            }),
                            Object(n.jsxs)('p', {
                              children: [
                                Object(n.jsx)('span', {
                                  style: { fontWeight: 500 },
                                  children: 'Request: ',
                                }),
                                ' 200 Tonnes',
                              ],
                            }),
                            Object(n.jsxs)('p', {
                              children: [
                                Object(n.jsx)('span', {
                                  style: { fontWeight: 500 },
                                  children: 'Location: ',
                                }),
                                ' Morogoro',
                              ],
                            }),
                            Object(n.jsxs)('p', {
                              children: [
                                Object(n.jsx)('span', {
                                  style: { fontWeight: 500 },
                                  children: 'Pickup Location: ',
                                }),
                                ' Mbeya',
                              ],
                            }),
                            Object(n.jsxs)('div', {
                              children: [
                                Object(n.jsxs)('p', {
                                  style: {
                                    fontWeight: 500,
                                    marginBottom: '0px',
                                  },
                                  children: ['Description:', ' '],
                                }),
                                ' ',
                                Object(n.jsx)('hr', {}),
                                Object(n.jsx)('p', {
                                  children:
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, possimus! Hic quos ipsum a eligendi illo id laboriosam ratione culpa ipsam dignissimos error, architecto alias eveniet dolore officia quas cumque.',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(n.jsx)('div', {
                      style: { marginTop: '1.5rem', display: 'flex' },
                      children: Object(n.jsx)(T.a, {
                        type: 'primary',
                        size: 'large',
                        style: {
                          fontSize: '1.25rem',
                          fontWeight: 600,
                          padding: '1.75rem 1.2rem',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        },
                        children: 'Give Tender',
                      }),
                    }),
                  ],
                }),
                Object(n.jsxs)('div', {
                  style: { marginTop: '1.23rem' },
                  children: [
                    Object(n.jsx)('h2', {
                      style: { fontSize: '1.23rem' },
                      children: 'Related Seller',
                    }),
                    Object(n.jsxs)('div', {
                      style: {
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                      },
                      children: [
                        Object(n.jsx)('div', {
                          children: Object(n.jsx)(I, {
                            img: Ge,
                            imgTitle: 'Mr.Alfred John',
                            imgDescrip: 'Some description goes here',
                            styles: { maxWidth: '300px' },
                          }),
                        }),
                        Object(n.jsx)('div', {
                          children: Object(n.jsx)(I, {
                            img: Ge,
                            imgTitle: 'Mr.Alfred John',
                            imgDescrip: 'Some description goes here',
                            styles: { maxWidth: '300px' },
                          }),
                        }),
                        Object(n.jsx)('div', {
                          children: Object(n.jsx)(I, {
                            img: Ge,
                            imgTitle: 'Mr.Alfred John',
                            imgDescrip: 'Some description goes here',
                            styles: { maxWidth: '300px' },
                          }),
                        }),
                      ],
                    }),
                    Object(n.jsx)('div', {
                      style: {
                        marginTop: '1.5rem',
                        display: 'flex',
                        justifyContent: 'center',
                      },
                      children: Object(n.jsx)(T.a, {
                        type: 'primary',
                        shape: 'round',
                        size: 'large',
                        style: {
                          padding: '2rem 1.75rem',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontSize: '1.125rem',
                          fontWeight: 600,
                        },
                        children: 'See More',
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        He = (a(407), De.a.TabPane),
        Ue = function (e) {
          var t = e.request;
          return (
            Object(i.useEffect)(function () {
              console.log(e);
            }, []),
            Object(n.jsxs)(n.Fragment, {
              children: [
                Object(n.jsx)('div', {
                  className: 'profile-lg-container',
                  children: Object(n.jsxs)('div', {
                    className: 'userprofile-container',
                    children: [
                      Object(n.jsx)(Ee, { profileImage: Ge }),
                      Object(n.jsxs)('div', {
                        className: 'userprofile_detailed',
                        children: [
                          Object(n.jsxs)('div', {
                            children: [
                              Object(n.jsx)('h1', {
                                className: 'username',
                                children: 'Joseph Joel',
                              }),
                              Object(n.jsx)('p', { children: 'Seller' }),
                            ],
                          }),
                          ' ',
                          Object(n.jsx)('div', {
                            children: Object(n.jsx)(De.a, {
                              defaultActiveKey: '1',
                              size: 'large',
                              style: { fontSize: 16 },
                              children: Object(n.jsx)(
                                He,
                                {
                                  tab: 'Info',
                                  children: Object(n.jsx)(Ke, { type: t }),
                                },
                                '1',
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                Object(n.jsx)(Ve, {}),
              ],
            })
          );
        },
        Je = function (e) {
          var t = Object(i.useState)(''),
            a = Object(j.a)(t, 2),
            c = a[0],
            r = a[1];
          return (
            Object(i.useEffect)(
              function () {
                r(e.location.state.data);
              },
              [e.location.state.data],
            ),
            Object(n.jsx)(n.Fragment, {
              children: Object(n.jsx)(Ue, { request: c }),
            })
          );
        },
        We = function (e) {
          var t = e.style;
          return Object(n.jsx)(n.Fragment, {
            children: Object(n.jsx)('div', {
              children: Object(n.jsx)('div', {
                style: Object(p.a)(
                  { marginLeft: '-5rem', marginTop: '1rem' },
                  t,
                ),
                children: Object(n.jsx)(T.a, {
                  type: 'text',
                  onClick: function () {
                    return Object(l.d)(-1);
                  },
                  children: Object(n.jsx)(w.a, {
                    style: { fontSize: '1.875rem', fontWeight: 600 },
                  }),
                }),
              }),
            }),
          });
        };
      function Ye(e) {
        var t = '0' + e.getHours(),
          a = '0' + e.getMinutes();
        return ''.concat(t.slice(-2), ':').concat(a.slice(-2));
      }
      var Qe = function (e) {
          var t = e.img,
            a = e.side,
            i = e.text,
            c = e.name;
          return Object(n.jsxs)('div', {
            className: 'msg '.concat(a, '-msg'),
            children: [
              Object(n.jsx)('div', {
                className: 'msg-img',
                style: { backgroundImage: 'url('.concat(t, ')') },
              }),
              Object(n.jsxs)('div', {
                className: 'msg-bubble',
                children: [
                  Object(n.jsxs)('div', {
                    className: 'msg-info',
                    children: [
                      Object(n.jsx)('div', {
                        className: 'msg-info-name',
                        children: c,
                      }),
                      Object(n.jsx)('div', {
                        className: 'msg-info-time',
                        children: Ye(new Date()),
                      }),
                    ],
                  }),
                  Object(n.jsx)('div', { className: 'msg-text', children: i }),
                ],
              }),
            ],
          });
        },
        Xe =
          (a(408),
          function () {
            var e = Object(i.useState)([]),
              t = Object(j.a)(e, 2),
              a = t[0],
              c = t[1],
              r = Object(Ae.a)(),
              o = r.register,
              s = r.handleSubmit,
              l = r.setValue;
            return Object(n.jsxs)(n.Fragment, {
              children: [
                Object(n.jsx)(We, {}),
                Object(n.jsx)('div', {
                  className: 'msger-container',
                  children: Object(n.jsxs)('section', {
                    className: 'msger',
                    children: [
                      Object(n.jsxs)('header', {
                        className: 'msger-header',
                        children: [
                          Object(n.jsx)('div', {
                            className: 'msger-header-title',
                            children: Object(n.jsx)('i', {
                              className: 'fas fa-comment-alt',
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'msger-header-options',
                            children: Object(n.jsx)('span', {
                              children: Object(n.jsx)('i', {
                                className: 'fas fa-cog',
                              }),
                            }),
                          }),
                        ],
                      }),
                      Object(n.jsxs)('main', {
                        className: 'msger-chat',
                        children: [
                          Object(n.jsxs)('div', {
                            className: 'msg left-msg',
                            children: [
                              Object(n.jsx)('div', {
                                className: 'msg-img',
                                style: {
                                  backgroundImage:
                                    'url(https://image.flaticon.com/icons/svg/327/327779.svg)',
                                },
                              }),
                              Object(n.jsxs)('div', {
                                className: 'msg-bubble',
                                children: [
                                  Object(n.jsxs)('div', {
                                    className: 'msg-info',
                                    children: [
                                      Object(n.jsx)('div', {
                                        className: 'msg-info-name',
                                        children: 'JOHN',
                                      }),
                                      Object(n.jsx)('div', {
                                        className: 'msg-info-time',
                                        children: '12:45',
                                      }),
                                    ],
                                  }),
                                  Object(n.jsx)('div', {
                                    className: 'msg-text',
                                    children:
                                      'Hi, welcome to SimpleChat! Go ahead and send me a message. \ud83d\ude04',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(n.jsxs)('div', {
                            className: 'msg right-msg',
                            children: [
                              Object(n.jsx)('div', {
                                className: 'msg-img',
                                style: {
                                  backgroundImage:
                                    'url(https://image.flaticon.com/icons/svg/145/145867.svg)',
                                },
                              }),
                              Object(n.jsxs)('div', {
                                className: 'msg-bubble',
                                children: [
                                  Object(n.jsxs)('div', {
                                    className: 'msg-info',
                                    children: [
                                      Object(n.jsx)('div', {
                                        className: 'msg-info-name',
                                        children: 'Sajad',
                                      }),
                                      Object(n.jsx)('div', {
                                        className: 'msg-info-time',
                                        children: '12:46',
                                      }),
                                    ],
                                  }),
                                  Object(n.jsx)('div', {
                                    className: 'msg-text',
                                    children:
                                      'You can change your name in JS section!',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.map(function (e, t) {
                            return Object(n.jsx)(
                              Qe,
                              {
                                text: e.text,
                                img: e.image,
                                side: e.side,
                                name: e.name,
                              },
                              t + 1,
                            );
                          }),
                        ],
                      }),
                      Object(n.jsxs)('form', {
                        className: 'msger-inputarea',
                        onSubmit: s(function (e) {
                          var t = {
                            image:
                              'https://image.flaticon.com/icons/svg/145/145867.svg',
                            side: 'left',
                            text: e.message,
                            name: 'Joseph',
                          };
                          c([].concat(Object(be.a)(a), [t])), l('message', '');
                        }),
                        children: [
                          Object(n.jsx)('input', {
                            type: 'text',
                            className: 'msger-input',
                            ref: o,
                            name: 'message',
                            placeholder: 'Enter your message...',
                          }),
                          Object(n.jsx)('button', {
                            type: 'submit',
                            className: 'msger-send-btn',
                            children: 'Send',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            });
          }),
        $e = function () {
          return Object(n.jsx)(de, {
            children: function (e) {
              return e.userAccessToken
                ? Object(n.jsxs)(l.c, {
                    primary: !1,
                    children: [
                      Object(n.jsx)(he, { path: '/' }),
                      Object(n.jsx)(Te, { path: 'shop-by-sellers' }),
                      Object(n.jsx)(ke, { path: 'shop-by-platforms' }),
                      Object(n.jsx)(Ce, { path: 'platform-subscriber-list' }),
                      Object(n.jsx)(Ie, { path: 'tender-requests' }),
                      Object(n.jsx)(qe, { path: 'give-tender-form' }),
                      Object(n.jsx)(Le, { path: 'market-info' }),
                      Object(n.jsx)(Je, { path: 'profile' }),
                      Object(n.jsx)(Xe, { path: 'chats' }),
                    ],
                  })
                : Object(n.jsxs)(l.c, {
                    primary: !1,
                    children: [
                      Object(n.jsx)(he, { path: '/' }),
                      Object(n.jsx)(Te, { path: 'shop-by-sellers' }),
                      Object(n.jsx)(ke, { path: 'shop-by-platforms' }),
                      Object(n.jsx)(Ce, { path: 'platform-subscriber-list' }),
                      Object(n.jsx)(Ie, { path: 'tender-requests' }),
                      Object(n.jsx)(qe, { path: 'give-tender-form' }),
                      Object(n.jsx)(Le, { path: 'market-info' }),
                      Object(n.jsx)(Je, { path: 'profile' }),
                    ],
                  });
            },
          });
        },
        et = a(455),
        tt = a(456),
        at = a(469),
        nt = a(470),
        it = (a(409), ze.a.Search),
        ct = function (e) {
          var t = Object(i.useState)(!1),
            a = Object(j.a)(t, 2),
            c = a[0],
            r = a[1],
            o = Object(l.e)(),
            s = Object(i.useContext)(ue),
            d = s.userAccessToken,
            u = s.logout,
            m = e.hideOptions,
            p = function () {
              r(!c);
            };
          Object(i.useEffect)(
            function () {
              console.log(o.pathname);
            },
            [o],
          );
          return Object(n.jsxs)(n.Fragment, {
            children: [
              Object(n.jsxs)('div', {
                className: c
                  ? 'navigation--user_closed'
                  : 'navigation--user_container',
                children: [
                  Object(n.jsxs)('div', {
                    className: 'navigation--user',
                    children: [
                      Object(n.jsxs)('div', {
                        className: 'navigation--menu',
                        children: [
                          Object(n.jsx)('div', {
                            className: 'humbergerIcon',
                            onClick: p,
                            children: Object(n.jsx)(at.a, {
                              style: { fontSize: 24 },
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'app--logo',
                            children: Object(n.jsx)('h2', {
                              style: { marginBottom: 0 },
                              children: 'RCT APP',
                            }),
                          }),
                        ],
                      }),
                      Object(n.jsxs)('div', {
                        className: 'user--app',
                        children: [
                          Object(n.jsx)('div', {
                            className: 'search--input',
                            children: Object(n.jsx)(it, {
                              placeholder: 'Search Here',
                              size: 'large',
                              onSearch: function (e) {
                                return console.log(e);
                              },
                              allowClear: !0,
                              style: { width: '90%' },
                              enterButton: !0,
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'navigation--user_action',
                            children: d
                              ? Object(n.jsx)('div', {
                                  children: Object(n.jsx)(et.a, {
                                    placement: 'bottom',
                                    content: Object(n.jsx)(n.Fragment, {
                                      children: Object(n.jsxs)('div', {
                                        style: {
                                          display: 'flex',
                                          flexDirection: 'column',
                                        },
                                        children: [
                                          Object(n.jsx)(T.a, {
                                            type: 'link',
                                            children: 'Profile',
                                          }),
                                          Object(n.jsx)(T.a, {
                                            type: 'link',
                                            onClick: function () {
                                              u(), Object(l.d)('/app/buyers');
                                            },
                                            children: 'Logout',
                                          }),
                                        ],
                                      }),
                                    }),
                                    trigger: 'click',
                                    children: Object(n.jsx)('div', {
                                      className: 'profile',
                                      children: Object(n.jsx)('div', {
                                        className: 'profile--shape',
                                        children: Object(n.jsx)('p', {
                                          className: 'user--name',
                                          children: Object(n.jsx)('svg', {
                                            version: '1.1',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            width: '40',
                                            height: '40',
                                            viewBox: '0 0 28 28',
                                            children: Object(n.jsx)('path', {
                                              d:
                                                'M14 0c7.734 0 14 6.266 14 14 0 7.688-6.234 14-14 14-7.75 0-14-6.297-14-14 0-7.734 6.266-14 14-14zM23.672 21.109c1.453-2 2.328-4.453 2.328-7.109 0-6.609-5.391-12-12-12s-12 5.391-12 12c0 2.656 0.875 5.109 2.328 7.109 0.562-2.797 1.922-5.109 4.781-5.109 1.266 1.234 2.984 2 4.891 2s3.625-0.766 4.891-2c2.859 0 4.219 2.312 4.781 5.109zM20 11c0-3.313-2.688-6-6-6s-6 2.688-6 6 2.688 6 6 6 6-2.688 6-6z',
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                })
                              : Object(n.jsxs)('div', {
                                  className: 'registry-container',
                                  children: [
                                    Object(n.jsx)('span', {
                                      className: 'register--welcome',
                                      children: 'Welcome!',
                                    }),
                                    Object(n.jsxs)('div', {
                                      style: {
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                      },
                                      children: [
                                        Object(n.jsx)(l.a, {
                                          to: '/app/login',
                                          children: 'Login',
                                        }),
                                        ' ',
                                      ],
                                    }),
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(n.jsx)(tt.a, {
                    style: {
                      margin: '0  0 0.5rem 0 ',
                      borderTop: '2px solid rgba(0, 0, 0, 0.06)',
                    },
                  }),
                ],
              }),
              Object(n.jsxs)('div', {
                className: ''.concat(
                  m ? 'option-list_hide' : 'option--group',
                  ' ',
                ),
                children: [
                  o.pathname.includes('/app/sellers')
                    ? Object(n.jsxs)('div', {
                        className: 'options-lgscreen',
                        children: [
                          Object(n.jsx)('div', {
                            className: 'option--item__lgscreen ',
                            children: Object(n.jsx)('p', {
                              style: { marginBottom: 0 },
                              children: Object(n.jsx)(l.a, {
                                to: '/',
                                children: 'Home',
                              }),
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'option--item__lgscreen ',
                            children: Object(n.jsx)('p', {
                              style: { marginBottom: 0 },
                              children: Object(n.jsx)(l.a, {
                                to: 'tender-requests',
                                children: 'Tender Given',
                              }),
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'option--item__lgscreen ',
                            children: Object(n.jsx)('p', {
                              style: { marginBottom: 0 },
                              children: Object(n.jsx)(l.a, {
                                to: 'shop-by-sellers',
                                children: 'Buyers',
                              }),
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'option--item__lgscreen ',
                            children: Object(n.jsx)('p', {
                              style: { marginBottom: 0 },
                              children: Object(n.jsx)(l.a, {
                                to: '/app/buyers',
                                children: 'Buy Rice',
                              }),
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'option--item__lgscreen ',
                            children: Object(n.jsx)('p', {
                              style: { marginBottom: 0 },
                              children: Object(n.jsx)(l.a, {
                                to: 'market-info',
                                children: 'Market Today',
                              }),
                            }),
                          }),
                        ],
                      })
                    : Object(n.jsxs)('div', {
                        className: 'options-lgscreen',
                        children: [
                          Object(n.jsx)('div', {
                            className: 'option--item__lgscreen ',
                            children: Object(n.jsx)('p', {
                              style: { marginBottom: 0 },
                              children: Object(n.jsx)(l.a, {
                                to: '/',
                                children: 'Home',
                              }),
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'option--item__lgscreen ',
                            children: Object(n.jsx)('p', {
                              style: { marginBottom: 0 },
                              children: Object(n.jsx)(l.a, {
                                to: 'tender-requests',
                                children: 'Tender Request',
                              }),
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'option--item__lgscreen ',
                            children: Object(n.jsx)('p', {
                              style: { marginBottom: 0 },
                              children: Object(n.jsx)(l.a, {
                                to: 'shop-by-sellers',
                                children: 'Sellers',
                              }),
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'option--item__lgscreen ',
                            children: Object(n.jsx)('p', {
                              style: { marginBottom: 0 },
                              children: Object(n.jsx)(l.a, {
                                to: 'shop-by-platforms',
                                children: 'Platforms',
                              }),
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'option--item__lgscreen ',
                            children: Object(n.jsx)('p', {
                              style: { marginBottom: 0 },
                              children: Object(n.jsx)(l.a, {
                                to: '/app/sellers',
                                children: 'Sell Rice',
                              }),
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'option--item__lgscreen ',
                            children: Object(n.jsx)('p', {
                              style: { marginBottom: 0 },
                              children: Object(n.jsx)(l.a, {
                                to: 'market-info',
                                children: 'Market Today',
                              }),
                            }),
                          }),
                        ],
                      }),
                  Object(n.jsx)(tt.a, {
                    style: {
                      margin: '0.5rem 0 ',
                      borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                    },
                  }),
                ],
              }),
              Object(n.jsxs)('div', {
                className: c ? 'nav--list' : 'nav--list_closed',
                children: [
                  Object(n.jsx)('div', {
                    className: 'nav-close',
                    children: Object(n.jsx)('button', {
                      type: 'button',
                      style: { backgroundColor: 'transparent', border: 'none' },
                      className: 'nav--close_btn',
                      onClick: p,
                      children: Object(n.jsx)(nt.a, {
                        style: { fontSize: 28 },
                      }),
                    }),
                  }),
                  Object(n.jsx)('div', {
                    className: 'user--nav',
                    children: Object(n.jsxs)('ul', {
                      className: 'nav--option',
                      children: [
                        Object(n.jsx)('li', {
                          children: Object(n.jsx)(l.a, {
                            to: '/',
                            className: 'nav--option_item',
                            children: 'Home',
                          }),
                        }),
                        Object(n.jsx)('li', {
                          onClick: p,
                          children: Object(n.jsx)(l.a, {
                            to: 'tender-request',
                            className: 'nav--option_item',
                            children: 'Tender Request',
                          }),
                        }),
                        Object(n.jsx)('li', {
                          onClick: p,
                          children: Object(n.jsx)(l.a, {
                            to: 'shop-by-sellers',
                            className: 'nav--option_item',
                            children: 'Seller',
                          }),
                        }),
                        Object(n.jsx)('li', {
                          onClick: p,
                          children: Object(n.jsx)(l.a, {
                            to: 'shop-by-platforms',
                            className: 'nav--option_item',
                            children: 'Platform',
                          }),
                        }),
                        Object(n.jsx)('li', {
                          onClick: p,
                          children: Object(n.jsx)(l.a, {
                            to: 'market-info',
                            className: 'nav--option_item',
                            children: 'Market Info',
                          }),
                        }),
                        Object(n.jsx)('li', {
                          onClick: p,
                          children: Object(n.jsx)('a', {
                            href: '#',
                            className: 'nav--option_item',
                            children: 'My Profile',
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        rt =
          (a(410),
          function (e) {
            var t = e.children,
              a = e.hideOptions;
            return Object(n.jsxs)(n.Fragment, {
              children: [
                Object(n.jsx)(ct, { hideOptions: a }),
                Object(n.jsx)('div', {
                  className: 'content--section',
                  children: t,
                }),
              ],
            });
          }),
        ot =
          (a(411),
          function () {
            return Object(n.jsx)('footer', {
              children: Object(n.jsx)('div', {
                className: 'site-footer',
                children: Object(n.jsxs)('div', {
                  className: 'container',
                  children: [
                    Object(n.jsxs)('div', {
                      className: 'row',
                      children: [
                        Object(n.jsxs)('div', {
                          className: 'about',
                          children: [
                            Object(n.jsx)('h6', { children: 'About' }),
                            Object(n.jsx)('p', {
                              className: 'text-justify',
                              children:
                                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque recusandae earum sequi vero blanditiis aliquid impedit eos aut vel reprehenderit velit sunt natus voluptates iure, facere neque nemo non culpa.',
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'categories',
                          children: [
                            Object(n.jsx)('h6', { children: 'Categories' }),
                            Object(n.jsxs)('ul', {
                              className: 'footer-links',
                              children: [
                                Object(n.jsx)('li', {
                                  children: Object(n.jsx)('a', {
                                    href: '#',
                                    children: 'Home',
                                  }),
                                }),
                                Object(n.jsx)('li', {
                                  children: Object(n.jsx)('a', {
                                    href: '#',
                                    children: 'Tender request',
                                  }),
                                }),
                                Object(n.jsx)('li', {
                                  children: Object(n.jsx)('a', {
                                    href: '#',
                                    children: 'Tender Bid',
                                  }),
                                }),
                                Object(n.jsx)('li', {
                                  children: Object(n.jsx)('a', {
                                    href: '#',
                                    children: 'Sellers',
                                  }),
                                }),
                                Object(n.jsx)('li', {
                                  children: Object(n.jsx)('a', {
                                    href: '#',
                                    children: 'Buyer',
                                  }),
                                }),
                                Object(n.jsx)('li', {
                                  children: Object(n.jsx)('a', {
                                    href: '#',
                                    children: 'Feedback',
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'QuickLink',
                          children: [
                            Object(n.jsx)('h6', { children: 'Quick Links' }),
                            Object(n.jsxs)('ul', {
                              className: 'footer-links',
                              children: [
                                Object(n.jsx)('li', {
                                  children: Object(n.jsx)('a', {
                                    href: 'about/',
                                    children: 'About Us',
                                  }),
                                }),
                                Object(n.jsx)('li', {
                                  children: Object(n.jsx)('a', {
                                    href: '#',
                                    children: 'Contact Us',
                                  }),
                                }),
                                Object(n.jsx)('li', {
                                  children: Object(n.jsx)('a', {
                                    href: '#',
                                    children: 'Contribute',
                                  }),
                                }),
                                Object(n.jsx)('li', {
                                  children: Object(n.jsx)('a', {
                                    href: '#',
                                    children: 'Privacy Policy',
                                  }),
                                }),
                                Object(n.jsx)('li', {
                                  children: Object(n.jsx)('a', {
                                    href: '#',
                                    children: 'Sitemap',
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(n.jsx)('hr', {}),
                    Object(n.jsx)('div', {
                      className: 'container',
                      children: Object(n.jsxs)('div', {
                        className: 'row',
                        children: [
                          Object(n.jsx)('div', {
                            className: 'copyright',
                            children: Object(n.jsxs)('p', {
                              className: 'copyright-text',
                              children: [
                                'Copyright \xa9 2020 All Rights Reserved by',
                                Object(n.jsx)('a', {
                                  href: '#',
                                  children: ' RCT',
                                }),
                                '.',
                              ],
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'social-media',
                            children: Object(n.jsxs)('ul', {
                              className: 'social-icons',
                              children: [
                                Object(n.jsx)('li', {
                                  children: Object(n.jsx)('a', {
                                    className: 'facebook',
                                    href: '#',
                                    children: Object(n.jsx)('i', {
                                      className: 'fa fa-facebook',
                                    }),
                                  }),
                                }),
                                Object(n.jsx)('li', {
                                  children: Object(n.jsx)('a', {
                                    className: 'twitter',
                                    href: '#',
                                    children: Object(n.jsx)('i', {
                                      className: 'fa fa-twitter',
                                    }),
                                  }),
                                }),
                                Object(n.jsx)('li', {
                                  children: Object(n.jsx)('a', {
                                    className: 'instagram',
                                    href: '#',
                                    children: Object(n.jsx)('i', {
                                      className: 'fa fa-instagram',
                                    }),
                                  }),
                                }),
                                Object(n.jsx)('li', {
                                  children: Object(n.jsx)('a', {
                                    className: 'linkedin',
                                    href: '#',
                                    children: Object(n.jsx)('i', {
                                      className: 'fa fa-linkedin',
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            });
          }),
        st = a(145),
        lt = a(146),
        dt = a(153),
        ut = a(149),
        mt = (function (e) {
          Object(dt.a)(a, e);
          var t = Object(ut.a)(a);
          function a() {
            var e;
            Object(st.a)(this, a);
            for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++)
              i[c] = arguments[c];
            return (
              ((e = t.call.apply(t, [this].concat(i))).state = {
                path: '',
                platformVariety: [],
                sellerInfo: {},
              }),
              (e.savePlatformVariety = function (t, a) {
                e.setState({ platformVariety: t, path: a });
              }),
              (e.saveSellerInfo = function (t, a) {
                e.setState({ sellerInfo: t, path: a });
              }),
              e
            );
          }
          return (
            Object(lt.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = Object(p.a)(
                    Object(p.a)({}, this.state),
                    {},
                    {
                      saveSellerInfo: this.saveSellerInfo,
                      savePlatformVariety: this.savePlatformVariety,
                    },
                  );
                  return Object(n.jsx)(q, {
                    value: e,
                    children: this.props.children,
                  });
                },
              },
            ]),
            a
          );
        })(i.Component),
        jt = function () {
          return Object(n.jsx)(n.Fragment, {
            children: Object(n.jsxs)(mt, {
              children: [
                Object(n.jsx)(rt, { children: Object(n.jsx)($e, {}) }),
                Object(n.jsx)(ot, {}),
              ],
            }),
          });
        },
        pt = a.p + 'static/media/10.97931fd3.jpg',
        ht = [
          {
            id: 1,
            img: Ge,
            title: 'East Africa milling Ltd',
            cardDescrip: 'Lorem is here',
            routes: 'sellers/profile',
          },
          {
            id: 2,
            img: pt,
            title: 'East Africa milling Ltd',
            cardDescrip: 'Lorem is here',
            routes: 'sellers/profile',
          },
          {
            id: 3,
            img: Ge,
            title: 'East Africa milling Ltd',
            cardDescrip: 'Lorem is here',
            routes: 'sellers/profile',
          },
          {
            id: 4,
            img: pt,
            title: 'East Africa milling Ltd',
            cardDescrip: 'Lorem is here',
            routes: 'sellers/profile',
          },
        ],
        bt =
          (a(412),
          function () {
            var e = Object(i.useState)([]),
              t = Object(j.a)(e, 2),
              a = t[0],
              c = t[1],
              r = Object(i.useContext)(ue).userAccessToken;
            return (
              Object(i.useEffect)(function () {
                (function () {
                  var e = Object(m.a)(
                    u.a.mark(function e() {
                      var t, a, n;
                      return u.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                G(r).then(function (e) {
                                  return e;
                                })
                              );
                            case 2:
                              (t = e.sent),
                                console.log(t),
                                200 === t.status
                                  ? ((a = t.data.data.map(function (e) {
                                      return {
                                        id: e.id,
                                        img: pt,
                                        title: e.name,
                                        cardDescrip: e.countryName,
                                        routes: 'sellers/buyers-list',
                                        state: {
                                          data: {
                                            action: 'tender-request',
                                            userId: e.id,
                                          },
                                        },
                                      };
                                    })),
                                    (n = a.slice(0, 4)),
                                    c(n))
                                  : je(!1, 'Failed to Fetch Buyer', t.message);
                            case 5:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              }, []),
              Object(n.jsxs)(n.Fragment, {
                children: [
                  Object(n.jsx)(N, {}),
                  Object(n.jsxs)('div', {
                    className: 'seller--card_group',
                    children: [
                      Object(n.jsx)(I, {
                        subtitle: '1. Give Tender',
                        className: 'seller--card',
                        styles: { margin: '0.5rem 0' },
                        isHoverable: !0,
                        children: Object(n.jsx)('div', {
                          children: Object(n.jsx)('p', {
                            children:
                              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque recusandae earum sequi vero blanditiis aliquid impedit eos aut vel reprehenderit velit sunt natus voluptates iure, facere neque nemo non culpa.',
                          }),
                        }),
                      }),
                      Object(n.jsx)(I, {
                        subtitle: '2. Request Tender ',
                        className: 'seller--card',
                        styles: { margin: '0.5rem 0' },
                        isHoverable: !0,
                        children: Object(n.jsx)('div', {
                          children: Object(n.jsx)('p', {
                            children:
                              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque recusandae earum sequi vero blanditiis aliquid impedit eos aut vel reprehenderit velit sunt natus voluptates iure, facere neque nemo non culpa.',
                          }),
                        }),
                      }),
                      Object(n.jsx)(I, {
                        subtitle: '3. Price Rate',
                        className: 'seller--card',
                        styles: { margin: '0.5rem 0' },
                        isHoverable: !0,
                        children: Object(n.jsx)('div', {
                          children: Object(n.jsx)('p', {
                            children:
                              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque recusandae earum sequi vero blanditiis aliquid impedit eos aut vel reprehenderit velit sunt natus voluptates iure, facere neque nemo non culpa.',
                          }),
                        }),
                      }),
                      Object(n.jsx)(M, {
                        title: 'Recent Tender Given',
                        route: 'sellers/tender-bids',
                        listItems: ht,
                        users: !0,
                      }),
                      Object(n.jsx)(M, {
                        title: 'Rice Buyers',
                        route: 'sellers/buyers-list',
                        listItems: a,
                        users: !0,
                      }),
                    ],
                  }),
                ],
              })
            );
          }),
        ft = function () {
          var e = Object(i.useState)([]),
            t = Object(j.a)(e, 2),
            a = t[0],
            c = t[1],
            r = Object(i.useContext)(ue).userAccessToken,
            o = Object(i.useContext)(B),
            s = o.sellerInfo,
            l = o.path,
            d = (function () {
              var e = Object(m.a)(
                u.a.mark(function e() {
                  var t, a, n;
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            G(r).then(function (e) {
                              return e;
                            })
                          );
                        case 2:
                          200 === (t = e.sent).status
                            ? ((a = t.data.data
                                .map(function (e) {
                                  return {
                                    id: e.id,
                                    image: pt,
                                    ownerName: e.name,
                                    user_location: e.countryName,
                                    phone_number: '0'.concat(e.phone_number),
                                    routes: 'sellers/buyer-list',
                                    state: { data: 'tender-request' },
                                  };
                                })
                                .filter(function (e) {
                                  return null !== e.title;
                                })),
                              console.log(a),
                              (n = a.slice(0, 4)),
                              c(n))
                            : je(!1, 'Failed to Fetch Buyer', t.message);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(i.useEffect)(function () {
              'seller_info' === l
                ? (function () {
                    var e = {
                      id: s.item.id,
                      image: pt,
                      category: s.item.category,
                      ownerName: s.item.full_name,
                      user_location: s.item.location,
                      phone_number: '0'.concat(s.item.phone_number),
                      platformLeader: s.item.platform_leader,
                    };
                    c([e]);
                  })()
                : d();
            }, []),
            Object(n.jsx)(n.Fragment, {
              children: Object(n.jsx)('div', {
                style: { minHeight: '700px' },
                children: Object(n.jsx)(Se, {
                  btnTitle: 'Request Tender',
                  routes: 'request-tender-form',
                  itemData: a,
                  type: 'request-tender',
                }),
              }),
            })
          );
        },
        Ot = [
          {
            id: 1,
            image: Ge,
            ownerName: 'East Africa milling Ltd',
            description:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos \n                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!',
            variety: 'Super Kyela',
            grade: 'One',
            need: '123000kgs',
          },
          {
            id: 2,
            image: pt,
            ownerName: 'East Africa milling Ltd',
            description:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos \n                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!',
            variety: 'Super Kyela',
            grade: 'One',
            need: '123000kgs',
          },
          {
            id: 3,
            image: Ge,
            ownerName: 'East Africa milling Ltd',
            description:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos \n                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!',
            variety: 'Super Kyela',
            grade: 'One',
            need: '123000kgs',
          },
          {
            id: 4,
            image: pt,
            ownerName: 'East Africa milling Ltd',
            description:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos \n                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!',
            variety: 'Super Kyela',
            grade: 'One',
            need: '123000kgs',
          },
          {
            id: 5,
            image: Ge,
            ownerName: 'East Africa milling Ltd',
            description:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos \n                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!',
            variety: 'Super Kyela',
            grade: 'One',
            need: '123000kgs',
          },
        ],
        xt = function () {
          return Object(n.jsx)(n.Fragment, {
            children: Object(n.jsx)(Se, {
              routes: 'tender-bid-form',
              itemData: Ot,
              type: 'Send Quote',
            }),
          });
        },
        gt = a(461),
        yt = a(471),
        vt =
          (a(413),
          function () {
            var e = Object(i.useState)([]),
              t = Object(j.a)(e, 2),
              a = t[0],
              c = t[1],
              r = Object(i.useState)([]),
              o = Object(j.a)(r, 2),
              s = o[0],
              l = o[1],
              d = Object(i.useState)(!1),
              h = Object(j.a)(d, 2),
              b = h[0],
              f = h[1],
              O = Object(i.useContext)(ue).userAccessToken,
              x = Object(Ae.a)({ mode: 'onBlur' }),
              g = x.register,
              y = x.handleSubmit,
              v = x.setValue,
              _ = x.errors,
              S = (function () {
                var e = Object(m.a)(
                  u.a.mark(function e() {
                    var t, a;
                    return u.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              ce().then(function (e) {
                                return e;
                              })
                            );
                          case 2:
                            200 === (t = e.sent).status
                              ? ((a = t.data.data.map(function (e) {
                                  return { key: e.id, name: e.variety_name };
                                })),
                                c(a))
                              : je(!1, 'Fail to Fetch Variety');
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            Object(i.useEffect)(function () {
              S();
            }, []),
              Object(i.useEffect)(
                function () {
                  g('quantity', { required: !0 }),
                    g('variety', { required: !0 }),
                    g('grade', { required: !0 }),
                    g('price', { required: !0 }),
                    g('batch_number'),
                    g('batch_img'),
                    g('pickup_location', { required: !0 }),
                    g('description');
                },
                [g],
              );
            var N = {
              name: 'file',
              onRemove: function (e) {
                var t = s.indexOf(e),
                  a = s.slice();
                a.splice(t, 1), l(a);
              },
              beforeUpload: function (e) {
                return l([].concat(Object(be.a)(s), [e])), !1;
              },
              TBSFileList: s,
            };
            return Object(n.jsxs)('div', {
              children: [
                Object(n.jsx)('div', {
                  children: Object(n.jsx)(tt.a, {
                    style: {
                      margin: '0  0 0.5rem 0 ',
                      borderTop: '2px solid rgba(0, 0, 0, 0.06)',
                    },
                  }),
                }),
                Object(n.jsxs)('form', {
                  className: 'tenderBid_container',
                  onSubmit: y(function (e) {
                    var t = JSON.parse(
                        sessionStorage.getItem('selectedItems') || '[]',
                      ),
                      a = {
                        quantity: e.quantity,
                        selling_price: '',
                        is_graded: 1,
                        grade: e.grade,
                        is_batch_certified: 1,
                        pickup_location: e.pickup_location,
                        extra_details: e.description,
                        variety: e.variety,
                        buyer_sellection: { ids: t },
                        document_string: e.batch_img,
                      };
                    console.log(a),
                      (function () {
                        var e = Object(m.a)(
                          u.a.mark(function e() {
                            var t;
                            return u.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      F(a, O).then(function (e) {
                                        return e;
                                      })
                                    );
                                  case 2:
                                    (t = e.sent), console.log(t);
                                  case 4:
                                  case 'end':
                                    return e.stop();
                                }
                            }, e);
                          }),
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })()(),
                      v('quantity', ''),
                      v('variety', ''),
                      v('grade', ''),
                      v('price', ''),
                      v('batch_number', ''),
                      v('batch_img', ''),
                      v('pickup_location', ''),
                      v('description', '');
                  }),
                  children: [
                    Object(n.jsxs)('div', {
                      className: 'Bid-quantity_input',
                      children: [
                        Object(n.jsx)('h3', { children: 'Request Tender' }),
                        Object(n.jsx)(ze.a, {
                          size: 'large',
                          placeholder: 'RICE',
                          style: { width: '100%' },
                          disabled: !0,
                        }),
                      ],
                    }),
                    Object(n.jsxs)('div', {
                      className: 'Bid-quantity_input',
                      children: [
                        Object(n.jsx)('h3', { children: 'Quantity Available' }),
                        Object(n.jsx)(ze.a, {
                          size: 'large',
                          placeholder: 'Quantity in Kgs',
                          style: { width: '100%' },
                          onChange: function (e) {
                            v('quantity', e.target.value);
                          },
                          addonAfter: 'kgs',
                        }),
                        Object(n.jsx)('span', {
                          style: { fontSize: '1rem', color: 'red' },
                          children: _.quantity && 'Quantity is required',
                        }),
                      ],
                    }),
                    Object(n.jsxs)('div', {
                      className: 'option-select_bid',
                      children: [
                        Object(n.jsx)('h3', { children: 'Variety' }),
                        Object(n.jsx)(fe.a, {
                          size: 'large',
                          placeholder: 'variety',
                          style: { width: '100%' },
                          onChange: function (e) {
                            v('variety', e);
                          },
                          children: a.map(function (e) {
                            return Object(n.jsx)(
                              fe.a.Option,
                              { value: e.name, children: e.name },
                              e.key,
                            );
                          }),
                        }),
                        Object(n.jsx)('span', {
                          style: { fontSize: '1rem', color: 'red' },
                          children: _.variety && 'Variety is required',
                        }),
                      ],
                    }),
                    Object(n.jsxs)('div', {
                      children: [
                        Object(n.jsx)('h3', { children: 'Grade' }),
                        Object(n.jsxs)('div', {
                          className: 'option-select_bid',
                          children: [
                            Object(n.jsxs)(fe.a, {
                              size: 'large',
                              placeholder: 'grade',
                              style: { width: '100%' },
                              onChange: function (e) {
                                v('grade', e);
                              },
                              children: [
                                Object(n.jsx)(fe.a.Option, {
                                  value: '1',
                                  children: '1',
                                }),
                                Object(n.jsx)(fe.a.Option, {
                                  value: '2',
                                  children: '2',
                                }),
                                Object(n.jsx)(fe.a.Option, {
                                  value: '3',
                                  children: '3',
                                }),
                              ],
                            }),
                            Object(n.jsx)('span', {
                              style: { fontSize: '1rem', color: 'red' },
                              children: _.grade && 'Grade is required',
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(n.jsxs)('div', {
                      className: 'Bid-quantity_input',
                      children: [
                        Object(n.jsx)('h3', { children: 'Price (Tzs/kg)' }),
                        Object(n.jsx)(ze.a, {
                          size: 'large',
                          placeholder: 'Price',
                          style: { width: '100%' },
                          onChange: function (e) {
                            v('price', e);
                          },
                          addonAfter: 'kgs',
                        }),
                        Object(n.jsx)('span', {
                          style: { fontSize: '1rem', color: 'red' },
                          children: _.price && 'Price is required',
                        }),
                      ],
                    }),
                    Object(n.jsxs)('div', {
                      className: 'option-select_bid',
                      children: [
                        Object(n.jsx)('h3', {
                          children: 'Is it Batch Certified?',
                        }),
                        Object(n.jsxs)(P.a.Group, {
                          name: 'radiogroup',
                          value: b,
                          onChange: function (e) {
                            f(e.target.value);
                          },
                          children: [
                            Object(n.jsx)(P.a, { value: !0, children: 'Yes' }),
                            Object(n.jsx)(P.a, { value: !1, children: 'No' }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          children: [
                            Object(n.jsx)(ze.a, {
                              size: 'large',
                              placeholder: 'Add Batch Certified Number',
                              style: { width: '100%' },
                              onChange: function (e) {
                                v('batch_number', e.target.value);
                              },
                              disabled: !b,
                            }),
                            Object(n.jsx)('span', {
                              style: { fontSize: '1rem', color: 'red' },
                              children:
                                _.batch_number && 'Batch Certif is required',
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          style: { marginTop: '1rem' },
                          children: [
                            Object(n.jsx)('h3', {
                              children: 'Add Batch Certificate',
                            }),
                            Object(n.jsx)(
                              gt.a,
                              Object(p.a)(
                                Object(p.a)({}, N),
                                {},
                                {
                                  listType: 'picture',
                                  style: { width: '100%' },
                                  onChange: function (e) {
                                    var t = e.file,
                                      a = new FileReader();
                                    (a.onload = function (e) {
                                      v('batch_img', e.target.result);
                                    }),
                                      t && t.type.match('image.*')
                                        ? a.readAsDataURL(t)
                                        : console.log(t.type);
                                  },
                                  disabled: !b,
                                  children: Object(n.jsx)(T.a, {
                                    icon: Object(n.jsx)(yt.a, {}),
                                    size: 'large',
                                    onClick: function () {
                                      document
                                        .querySelectorAll('input')[0]
                                        .click();
                                    },
                                    children: 'Batch Certificate',
                                  }),
                                },
                              ),
                            ),
                            Object(n.jsx)('span', {
                              style: { fontSize: '1rem', color: 'red' },
                              children:
                                _.batch_img && 'Batch Certificate is required',
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(n.jsxs)('div', {
                      className: 'Bid-quantity_input',
                      children: [
                        Object(n.jsx)('h3', { children: 'Pickup Location' }),
                        Object(n.jsx)(ze.a, {
                          size: 'large',
                          placeholder: 'Add Pickup Location',
                          style: { width: '100%' },
                          onChange: function (e) {
                            v('pickup_location', e.target.value);
                          },
                        }),
                        Object(n.jsx)('span', {
                          style: { fontSize: '1rem', color: 'red' },
                          children:
                            _.pickup_location && 'Pickup Location is required',
                        }),
                      ],
                    }),
                    Object(n.jsx)('div', {
                      className: 'Bid-textarea',
                      children: Object(n.jsx)(ze.a.TextArea, {
                        placeholder: 'Other Necessary Details',
                        autoSize: { minRows: 3, maxRows: 5 },
                        onChange: function (e) {
                          v('description', e.target.value);
                        },
                      }),
                    }),
                    Object(n.jsx)('div', {
                      className: 'Bid-action_btn',
                      children: Object(n.jsx)(T.a, {
                        size: 'large',
                        type: 'primary',
                        htmlType: 'submit',
                        children: 'Request Tender',
                      }),
                    }),
                  ],
                }),
              ],
            });
          }),
        _t = a(472),
        St =
          (a(424),
          function () {
            var e = Object(i.useState)(''),
              t = Object(j.a)(e, 2),
              a = t[0],
              c = (t[1], Object(i.useState)(!1)),
              r = Object(j.a)(c, 2),
              o = r[0],
              s = r[1],
              l = Object(i.useState)(''),
              d = Object(j.a)(l, 2),
              u = d[0],
              m = (d[1], Object(i.useState)([])),
              p = Object(j.a)(m, 2),
              h = p[0],
              b = p[1];
            return Object(n.jsx)(n.Fragment, {
              children: Object(n.jsxs)('div', {
                className: 'uploadPictureContainer',
                children: [
                  Object(n.jsx)('h3', {
                    style: { marginLeft: '15px' },
                    children: 'Add Picture For Your Tender Request',
                  }),
                  Object(n.jsxs)(I, {
                    styles: { width: '100%', height: '350px' },
                    children: [
                      Object(n.jsx)(gt.a, {
                        listType: 'picture-card',
                        fileList: h,
                        onChange: function (e) {
                          var t = e.fileList;
                          b({ fileList: t });
                        },
                        children:
                          h.length >= 8
                            ? null
                            : Object(n.jsxs)('div', {
                                children: [
                                  Object(n.jsx)(_t.a, {}),
                                  Object(n.jsx)('div', {
                                    style: { marginTop: 8 },
                                    children: 'Upload',
                                  }),
                                ],
                              }),
                      }),
                      Object(n.jsx)(R.a, {
                        visible: o,
                        title: u,
                        footer: null,
                        onCancel: function () {
                          return s(!1);
                        },
                        children: Object(n.jsx)('img', {
                          alt: 'example',
                          style: { width: '100%' },
                          src: a,
                        }),
                      }),
                    ],
                  }),
                  0 !== h.length
                    ? Object(n.jsx)('div', {
                        style: { position: 'relative' },
                        children: Object(n.jsx)('div', {
                          style: { position: 'absolute', bottom: 0, right: 0 },
                          children: Object(n.jsx)(T.a, {
                            type: 'primary',
                            size: 'large',
                            children: 'Upload',
                          }),
                        }),
                      })
                    : null,
                ],
              }),
            });
          }),
        Nt = function (e) {
          var t = Object(i.useState)([]),
            a = Object(j.a)(t, 2),
            c = (a[0], a[1], Object(i.useState)()),
            r = Object(j.a)(c, 2),
            o = r[0],
            s = r[1];
          Object(i.useContext)(ue).userAccessToken;
          Object(i.useEffect)(
            function () {
              s(e.location.state.data);
            },
            [e.location.state.data],
          );
          var l = o && o.action;
          return Object(n.jsx)(n.Fragment, {
            children: Object(n.jsx)(Ue, { request: l }),
          });
        },
        Tt =
          (a(425),
          function () {
            var e = Object(i.useState)([]),
              t = Object(j.a)(e, 2),
              a = (t[0], t[1]),
              c = Object(Ae.a)({ mode: 'onBlur', reValidateMode: 'onChange' }),
              r = c.register,
              o = c.handleSubmit,
              s = c.setValue,
              l = c.errors;
            Object(i.useEffect)(function () {
              (function () {
                var e = Object(m.a)(
                  u.a.mark(function e() {
                    var t, n;
                    return u.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              ce().then(function (e) {
                                return e;
                              })
                            );
                          case 2:
                            200 === (t = e.sent).status
                              ? ((n = t.data.data.map(function (e) {
                                  return { key: e.id, name: e.variety_name };
                                })),
                                a(n))
                              : je(!1, 'Fail to Fetch Variety');
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            }, []),
              Object(i.useEffect)(
                function () {
                  r('quantity', { required: !0 }),
                    r('variety'),
                    r('grade'),
                    r('price', { required: !0 }),
                    r('pickup_location', { required: !0 }),
                    r('description');
                },
                [r],
              );
            return Object(n.jsxs)('div', {
              children: [
                Object(n.jsx)('div', {
                  children: Object(n.jsx)(tt.a, {
                    style: {
                      margin: '0  0 0.5rem 0 ',
                      borderTop: '2px solid rgba(0, 0, 0, 0.06)',
                    },
                  }),
                }),
                Object(n.jsxs)('form', {
                  className: 'tenderBid_container',
                  onSubmit: o(function (e) {
                    console.log(e);
                  }),
                  children: [
                    Object(n.jsxs)('div', {
                      className: 'Bid-quantity_input',
                      children: [
                        Object(n.jsx)('h3', { children: 'Tender Details' }),
                        Object(n.jsx)(ze.a, {
                          size: 'large',
                          placeholder: 'RICE',
                          style: { width: '100%' },
                          disabled: !0,
                        }),
                      ],
                    }),
                    Object(n.jsxs)('div', {
                      className: 'Bid-quantity_input',
                      children: [
                        Object(n.jsx)('h3', { children: 'Quantity Needed' }),
                        Object(n.jsx)(ze.a, {
                          size: 'large',
                          placeholder: 'Quantity in Kg',
                          style: { width: '100%' },
                          disabled: !0,
                        }),
                      ],
                    }),
                    Object(n.jsxs)('div', {
                      style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                      },
                      children: [
                        Object(n.jsx)(ze.a, {
                          size: 'large',
                          placeholder: 'Grade',
                          style: { width: '48%' },
                          disabled: !0,
                        }),
                        Object(n.jsx)(ze.a, {
                          size: 'large',
                          placeholder: 'Variety',
                          style: { width: '48%' },
                          disabled: !0,
                        }),
                      ],
                    }),
                    Object(n.jsx)(tt.a, {}),
                    Object(n.jsxs)('div', {
                      className: 'option-select_bid',
                      children: [
                        Object(n.jsx)('h3', { children: 'Quote Details' }),
                        Object(n.jsxs)('div', {
                          className: 'option-select_bid',
                          children: [
                            Object(n.jsx)(ze.a, {
                              size: 'large',
                              placeholder: 'Add Amount you Can Supply',
                              style: { width: '100%' },
                              onChange: function (e) {
                                s('quantity', e.target.value);
                              },
                            }),
                            Object(n.jsx)('span', {
                              style: { fontSize: '1rem', color: 'red' },
                              children: l.quantity && 'Quantity is required',
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'option-select_bid',
                          children: [
                            Object(n.jsx)(ze.a, {
                              size: 'large',
                              placeholder: 'Add Selling Price @Kg',
                              style: { width: '100%' },
                              onChange: function (e) {
                                s('price', e.target.value);
                              },
                            }),
                            Object(n.jsx)('span', {
                              style: { fontSize: '1rem', color: 'red' },
                              children: l.price && 'Price is required',
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'Bid-quantity_input',
                          children: [
                            Object(n.jsx)(ze.a, {
                              size: 'large',
                              placeholder: 'Add Pickup Location',
                              style: { width: '100%' },
                              onChange: function (e) {
                                s('pickup_location', e);
                              },
                            }),
                            Object(n.jsx)('span', {
                              style: { fontSize: '1rem', color: 'red' },
                              children:
                                l.pickup_location && 'Location is required',
                            }),
                          ],
                        }),
                        Object(n.jsx)('div', {
                          className: 'Bid-textarea',
                          children: Object(n.jsx)(ze.a.TextArea, {
                            placeholder: 'Other Necessary Details',
                            autoSize: { minRows: 3, maxRows: 5 },
                            onChange: function (e) {
                              s('description', e);
                            },
                          }),
                        }),
                        Object(n.jsx)('div', {
                          className: 'Bid-action_btn',
                          children: Object(n.jsx)(T.a, {
                            size: 'large',
                            type: 'primary',
                            htmlType: 'submit',
                            children: 'Submit Quote',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }),
        kt = function () {
          return Object(n.jsxs)(l.c, {
            primary: !1,
            children: [
              Object(n.jsx)(bt, { path: '/' }),
              Object(n.jsx)(vt, { path: 'request-tender-form' }),
              Object(n.jsx)(ft, { path: 'buyers-list' }),
              Object(n.jsx)(xt, { path: 'tender-bids' }),
              Object(n.jsx)(St, { path: 'upload-images' }),
              Object(n.jsx)(Nt, { path: 'profile' }),
              Object(n.jsx)(Tt, { path: 'quote-form' }),
              Object(n.jsx)(Le, { path: 'market-info' }),
              Object(n.jsx)(Xe, { path: 'chats' }),
            ],
          });
        },
        Ct =
          (a(426),
          function () {
            return Object(n.jsxs)(n.Fragment, {
              children: [
                Object(n.jsx)(rt, { children: Object(n.jsx)(kt, {}) }),
                Object(n.jsx)(ot, {}),
              ],
            });
          }),
        wt =
          (a(427),
          function (e) {
            var t = Object(Ae.a)(),
              a = t.register,
              c = t.handleSubmit,
              r = t.setValue,
              o = t.getValues,
              s = t.errors,
              d = Object(i.useState)(!1),
              p = Object(j.a)(d, 2),
              h = p[0],
              b = p[1];
            Object(i.useEffect)(function () {
              var t = e.location.state.data;
              r('dial_code', e.location.state.data.dial_code),
                r('phone_number', e.location.state.data.phone_number),
                console.log(t);
            }, []),
              Object(i.useEffect)(
                function () {
                  a('first_name', { required: !0 }),
                    a('last_name', { required: !0 }),
                    a('dial_code'),
                    a('phone_number');
                },
                [a],
              );
            return Object(n.jsx)('div', {
              children: Object(n.jsx)('div', {
                className: 'signup_container',
                children: Object(n.jsx)('div', {
                  className: 'signup_innerContainer',
                  children: Object(n.jsxs)('div', {
                    className: 'signup_inner',
                    children: [
                      Object(n.jsxs)('div', {
                        className: 'signup_header',
                        children: [
                          Object(n.jsx)('h2', { children: 'Sign Up' }),
                          Object(n.jsx)(tt.a, {
                            style: {
                              margin: '0  0 0.5rem 0 ',
                              borderTop: '2px solid rgba(0, 0, 0, 0.06)',
                            },
                          }),
                        ],
                      }),
                      Object(n.jsxs)('form', {
                        style: { width: '100%' },
                        onSubmit: c(function (t) {
                          var a = {
                            dial_code: t.dial_code,
                            phone_number: t.phone_number,
                            name: ''
                              .concat(t.first_name, ' ')
                              .concat(t.last_name),
                          };
                          console.log(a),
                            b(!0),
                            (function () {
                              var t = Object(m.a)(
                                u.a.mark(function t() {
                                  var n, i;
                                  return u.a.wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (
                                            (t.next = 2),
                                            U(a)
                                              .then(function (e) {
                                                return e;
                                              })
                                              .catch(function (e) {
                                                return e;
                                              })
                                          );
                                        case 2:
                                          (n = t.sent),
                                            b(!1),
                                            200 === n.status
                                              ? (je(
                                                  !0,
                                                  'Account Update Successfully',
                                                ),
                                                (i = {
                                                  dial_code:
                                                    e.location.state.data
                                                      .dial_code,
                                                  phone_number:
                                                    e.location.state.data
                                                      .phone_number,
                                                  checkBuyer:
                                                    e.location.state.data
                                                      .checkBuyer,
                                                }),
                                                Object(l.d)(
                                                  '/app/verify-phone',
                                                  { state: { data: i } },
                                                ))
                                              : je(!1, 'Account Update Failed');
                                        case 5:
                                        case 'end':
                                          return t.stop();
                                      }
                                  }, t);
                                }),
                              );
                              return function () {
                                return t.apply(this, arguments);
                              };
                            })()();
                        }),
                        children: [
                          Object(n.jsxs)('div', {
                            className: 'signup_username',
                            children: [
                              Object(n.jsxs)('div', {
                                className: 'signup_names',
                                children: [
                                  Object(n.jsx)(ze.a, {
                                    placeholder: 'First Name',
                                    size: 'large',
                                    onChange: function (e) {
                                      r('first_name', e.target.value);
                                    },
                                  }),
                                  Object(n.jsx)('span', {
                                    style: { fontSize: '1rem', color: 'red' },
                                    children:
                                      s.first_name && 'First name is required',
                                  }),
                                ],
                              }),
                              Object(n.jsxs)('div', {
                                className: 'signup_names',
                                children: [
                                  Object(n.jsx)(ze.a, {
                                    placeholder: 'Last Name',
                                    size: 'large',
                                    onChange: function (e) {
                                      r('last_name', e.target.value);
                                    },
                                  }),
                                  Object(n.jsx)('span', {
                                    style: { fontSize: '1rem', color: 'red' },
                                    children:
                                      s.last_name && 'Last name is required',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(n.jsx)('div', {
                            className: 'signup_phoneNo',
                            children: Object(n.jsx)(ze.a, {
                              placeholder: 'Phone Number',
                              size: 'large',
                              style: { width: '100%' },
                              value: e.location.state.data.phone_number,
                              maxLength: 9,
                              addonBefore: o('dial_code') || '+255',
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'signup_btn',
                            children: Object(n.jsxs)(T.a, {
                              type: 'primary',
                              size: 'large',
                              htmlType: 'submit',
                              loading: h,
                              children: [' ', 'SignUp'],
                            }),
                          }),
                          Object(n.jsxs)('div', {
                            style: {
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            },
                            children: [
                              Object(n.jsx)('div', {
                                style: { marginTop: 10 },
                                children: Object(n.jsxs)('p', {
                                  children: [
                                    'Update Phone Number?!.',
                                    ' ',
                                    Object(n.jsx)(l.a, {
                                      to: '/app/login',
                                      children: ' Click Here',
                                    }),
                                  ],
                                }),
                              }),
                              Object(n.jsx)('div', {
                                children: Object(n.jsx)(l.a, {
                                  to: '/',
                                  children: Object(n.jsx)('p', {
                                    children: 'Go Home',
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            });
          }),
        It = [
          { name: 'Afghanistan', dial_code: '+93', code: 'AF' },
          { name: 'Aland Islands', dial_code: '+358', code: 'AX' },
          { name: 'Albania', dial_code: '+355', code: 'AL' },
          { name: 'Algeria', dial_code: '+213', code: 'DZ' },
          { name: 'AmericanSamoa', dial_code: '+1 684', code: 'AS' },
          { name: 'Andorra', dial_code: '+376', code: 'AD' },
          { name: 'Angola', dial_code: '+244', code: 'AO' },
          { name: 'Anguilla', dial_code: '+1 264', code: 'AI' },
          { name: 'Antarctica', dial_code: '+672', code: 'AQ' },
          { name: 'Antigua and Barbuda', dial_code: '+1268', code: 'AG' },
          { name: 'Argentina', dial_code: '+54', code: 'AR' },
          { name: 'Armenia', dial_code: '+374', code: 'AM' },
          { name: 'Aruba', dial_code: '+297', code: 'AW' },
          { name: 'Australia', dial_code: '+61', code: 'AU' },
          { name: 'Austria', dial_code: '+43', code: 'AT' },
          { name: 'Azerbaijan', dial_code: '+994', code: 'AZ' },
          { name: 'Bahamas', dial_code: '+1 242', code: 'BS' },
          { name: 'Bahrain', dial_code: '+973', code: 'BH' },
          { name: 'Bangladesh', dial_code: '+880', code: 'BD' },
          { name: 'Barbados', dial_code: '+1 246', code: 'BB' },
          { name: 'Belarus', dial_code: '+375', code: 'BY' },
          { name: 'Belgium', dial_code: '+32', code: 'BE' },
          { name: 'Belize', dial_code: '+501', code: 'BZ' },
          { name: 'Benin', dial_code: '+229', code: 'BJ' },
          { name: 'Bermuda', dial_code: '+1 441', code: 'BM' },
          { name: 'Bhutan', dial_code: '+975', code: 'BT' },
          {
            name: 'Bolivia, Plurinational State of',
            dial_code: '+591',
            code: 'BO',
          },
          { name: 'Bosnia and Herzegovina', dial_code: '+387', code: 'BA' },
          { name: 'Botswana', dial_code: '+267', code: 'BW' },
          { name: 'Brazil', dial_code: '+55', code: 'BR' },
          {
            name: 'British Indian Ocean Territory',
            dial_code: '+246',
            code: 'IO',
          },
          { name: 'Brunei Darussalam', dial_code: '+673', code: 'BN' },
          { name: 'Bulgaria', dial_code: '+359', code: 'BG' },
          { name: 'Burkina Faso', dial_code: '+226', code: 'BF' },
          { name: 'Burundi', dial_code: '+257', code: 'BI' },
          { name: 'Cambodia', dial_code: '+855', code: 'KH' },
          { name: 'Cameroon', dial_code: '+237', code: 'CM' },
          { name: 'Canada', dial_code: '+1', code: 'CA' },
          { name: 'Cape Verde', dial_code: '+238', code: 'CV' },
          { name: 'Cayman Islands', dial_code: '+ 345', code: 'KY' },
          { name: 'Central African Republic', dial_code: '+236', code: 'CF' },
          { name: 'Chad', dial_code: '+235', code: 'TD' },
          { name: 'Chile', dial_code: '+56', code: 'CL' },
          { name: 'China', dial_code: '+86', code: 'CN' },
          { name: 'Christmas Island', dial_code: '+61', code: 'CX' },
          { name: 'Cocos (Keeling) Islands', dial_code: '+61', code: 'CC' },
          { name: 'Colombia', dial_code: '+57', code: 'CO' },
          { name: 'Comoros', dial_code: '+269', code: 'KM' },
          { name: 'Congo', dial_code: '+242', code: 'CG' },
          {
            name: 'Congo, The Democratic Republic of the Congo',
            dial_code: '+243',
            code: 'CD',
          },
          { name: 'Cook Islands', dial_code: '+682', code: 'CK' },
          { name: 'Costa Rica', dial_code: '+506', code: 'CR' },
          { name: "Cote d'Ivoire", dial_code: '+225', code: 'CI' },
          { name: 'Croatia', dial_code: '+385', code: 'HR' },
          { name: 'Cuba', dial_code: '+53', code: 'CU' },
          { name: 'Cyprus', dial_code: '+357', code: 'CY' },
          { name: 'Czech Republic', dial_code: '+420', code: 'CZ' },
          { name: 'Denmark', dial_code: '+45', code: 'DK' },
          { name: 'Djibouti', dial_code: '+253', code: 'DJ' },
          { name: 'Dominica', dial_code: '+1 767', code: 'DM' },
          { name: 'Dominican Republic', dial_code: '+1 849', code: 'DO' },
          { name: 'Ecuador', dial_code: '+593', code: 'EC' },
          { name: 'Egypt', dial_code: '+20', code: 'EG' },
          { name: 'El Salvador', dial_code: '+503', code: 'SV' },
          { name: 'Equatorial Guinea', dial_code: '+240', code: 'GQ' },
          { name: 'Eritrea', dial_code: '+291', code: 'ER' },
          { name: 'Estonia', dial_code: '+372', code: 'EE' },
          { name: 'Ethiopia', dial_code: '+251', code: 'ET' },
          {
            name: 'Falkland Islands (Malvinas)',
            dial_code: '+500',
            code: 'FK',
          },
          { name: 'Faroe Islands', dial_code: '+298', code: 'FO' },
          { name: 'Fiji', dial_code: '+679', code: 'FJ' },
          { name: 'Finland', dial_code: '+358', code: 'FI' },
          { name: 'France', dial_code: '+33', code: 'FR' },
          { name: 'French Guiana', dial_code: '+594', code: 'GF' },
          { name: 'French Polynesia', dial_code: '+689', code: 'PF' },
          { name: 'Gabon', dial_code: '+241', code: 'GA' },
          { name: 'Gambia', dial_code: '+220', code: 'GM' },
          { name: 'Georgia', dial_code: '+995', code: 'GE' },
          { name: 'Germany', dial_code: '+49', code: 'DE' },
          { name: 'Ghana', dial_code: '+233', code: 'GH' },
          { name: 'Gibraltar', dial_code: '+350', code: 'GI' },
          { name: 'Greece', dial_code: '+30', code: 'GR' },
          { name: 'Greenland', dial_code: '+299', code: 'GL' },
          { name: 'Grenada', dial_code: '+1 473', code: 'GD' },
          { name: 'Guadeloupe', dial_code: '+590', code: 'GP' },
          { name: 'Guam', dial_code: '+1 671', code: 'GU' },
          { name: 'Guatemala', dial_code: '+502', code: 'GT' },
          { name: 'Guernsey', dial_code: '+44', code: 'GG' },
          { name: 'Guinea', dial_code: '+224', code: 'GN' },
          { name: 'Guinea-Bissau', dial_code: '+245', code: 'GW' },
          { name: 'Guyana', dial_code: '+595', code: 'GY' },
          { name: 'Haiti', dial_code: '+509', code: 'HT' },
          {
            name: 'Holy See (Vatican City State)',
            dial_code: '+379',
            code: 'VA',
          },
          { name: 'Honduras', dial_code: '+504', code: 'HN' },
          { name: 'Hong Kong', dial_code: '+852', code: 'HK' },
          { name: 'Hungary', dial_code: '+36', code: 'HU' },
          { name: 'Iceland', dial_code: '+354', code: 'IS' },
          { name: 'India', dial_code: '+91', code: 'IN' },
          { name: 'Indonesia', dial_code: '+62', code: 'ID' },
          {
            name: 'Iran, Islamic Republic of Persian Gulf',
            dial_code: '+98',
            code: 'IR',
          },
          { name: 'Iraq', dial_code: '+964', code: 'IQ' },
          { name: 'Ireland', dial_code: '+353', code: 'IE' },
          { name: 'Isle of Man', dial_code: '+44', code: 'IM' },
          { name: 'Israel', dial_code: '+972', code: 'IL' },
          { name: 'Italy', dial_code: '+39', code: 'IT' },
          { name: 'Jamaica', dial_code: '+1 876', code: 'JM' },
          { name: 'Japan', dial_code: '+81', code: 'JP' },
          { name: 'Jersey', dial_code: '+44', code: 'JE' },
          { name: 'Jordan', dial_code: '+962', code: 'JO' },
          { name: 'Kazakhstan', dial_code: '+7 7', code: 'KZ' },
          { name: 'Kenya', dial_code: '+254', code: 'KE' },
          { name: 'Kiribati', dial_code: '+686', code: 'KI' },
          {
            name: "Korea, Democratic People's Republic of Korea",
            dial_code: '+850',
            code: 'KP',
          },
          {
            name: 'Korea, Republic of South Korea',
            dial_code: '+82',
            code: 'KR',
          },
          { name: 'Kuwait', dial_code: '+965', code: 'KW' },
          { name: 'Kyrgyzstan', dial_code: '+996', code: 'KG' },
          { name: 'Laos', dial_code: '+856', code: 'LA' },
          { name: 'Latvia', dial_code: '+371', code: 'LV' },
          { name: 'Lebanon', dial_code: '+961', code: 'LB' },
          { name: 'Lesotho', dial_code: '+266', code: 'LS' },
          { name: 'Liberia', dial_code: '+231', code: 'LR' },
          { name: 'Libyan Arab Jamahiriya', dial_code: '+218', code: 'LY' },
          { name: 'Liechtenstein', dial_code: '+423', code: 'LI' },
          { name: 'Lithuania', dial_code: '+370', code: 'LT' },
          { name: 'Luxembourg', dial_code: '+352', code: 'LU' },
          { name: 'Macao', dial_code: '+853', code: 'MO' },
          { name: 'Macedonia', dial_code: '+389', code: 'MK' },
          { name: 'Madagascar', dial_code: '+261', code: 'MG' },
          { name: 'Malawi', dial_code: '+265', code: 'MW' },
          { name: 'Malaysia', dial_code: '+60', code: 'MY' },
          { name: 'Maldives', dial_code: '+960', code: 'MV' },
          { name: 'Mali', dial_code: '+223', code: 'ML' },
          { name: 'Malta', dial_code: '+356', code: 'MT' },
          { name: 'Marshall Islands', dial_code: '+692', code: 'MH' },
          { name: 'Martinique', dial_code: '+596', code: 'MQ' },
          { name: 'Mauritania', dial_code: '+222', code: 'MR' },
          { name: 'Mauritius', dial_code: '+230', code: 'MU' },
          { name: 'Mayotte', dial_code: '+262', code: 'YT' },
          { name: 'Mexico', dial_code: '+52', code: 'MX' },
          {
            name: 'Micronesia, Federated States of Micronesia',
            dial_code: '+691',
            code: 'FM',
          },
          { name: 'Moldova', dial_code: '+373', code: 'MD' },
          { name: 'Monaco', dial_code: '+377', code: 'MC' },
          { name: 'Mongolia', dial_code: '+976', code: 'MN' },
          { name: 'Montenegro', dial_code: '+382', code: 'ME' },
          { name: 'Montserrat', dial_code: '+1664', code: 'MS' },
          { name: 'Morocco', dial_code: '+212', code: 'MA' },
          { name: 'Mozambique', dial_code: '+258', code: 'MZ' },
          { name: 'Myanmar', dial_code: '+95', code: 'MM' },
          { name: 'Namibia', dial_code: '+264', code: 'NA' },
          { name: 'Nauru', dial_code: '+674', code: 'NR' },
          { name: 'Nepal', dial_code: '+977', code: 'NP' },
          { name: 'Netherlands', dial_code: '+31', code: 'NL' },
          { name: 'Netherlands Antilles', dial_code: '+599', code: 'AN' },
          { name: 'New Caledonia', dial_code: '+687', code: 'NC' },
          { name: 'New Zealand', dial_code: '+64', code: 'NZ' },
          { name: 'Nicaragua', dial_code: '+505', code: 'NI' },
          { name: 'Niger', dial_code: '+227', code: 'NE' },
          { name: 'Nigeria', dial_code: '+234', code: 'NG' },
          { name: 'Niue', dial_code: '+683', code: 'NU' },
          { name: 'Norfolk Island', dial_code: '+672', code: 'NF' },
          { name: 'Northern Mariana Islands', dial_code: '+1 670', code: 'MP' },
          { name: 'Norway', dial_code: '+47', code: 'NO' },
          { name: 'Oman', dial_code: '+968', code: 'OM' },
          { name: 'Pakistan', dial_code: '+92', code: 'PK' },
          { name: 'Palau', dial_code: '+680', code: 'PW' },
          {
            name: 'Palestinian Territory, Occupied',
            dial_code: '+970',
            code: 'PS',
          },
          { name: 'Panama', dial_code: '+507', code: 'PA' },
          { name: 'Papua New Guinea', dial_code: '+675', code: 'PG' },
          { name: 'Paraguay', dial_code: '+595', code: 'PY' },
          { name: 'Peru', dial_code: '+51', code: 'PE' },
          { name: 'Philippines', dial_code: '+63', code: 'PH' },
          { name: 'Pitcairn', dial_code: '+872', code: 'PN' },
          { name: 'Poland', dial_code: '+48', code: 'PL' },
          { name: 'Portugal', dial_code: '+351', code: 'PT' },
          { name: 'Puerto Rico', dial_code: '+1 939', code: 'PR' },
          { name: 'Qatar', dial_code: '+974', code: 'QA' },
          { name: 'Romania', dial_code: '+40', code: 'RO' },
          { name: 'Russia', dial_code: '+7', code: 'RU' },
          { name: 'Rwanda', dial_code: '+250', code: 'RW' },
          { name: 'Reunion', dial_code: '+262', code: 'RE' },
          { name: 'Saint Barthelemy', dial_code: '+590', code: 'BL' },
          {
            name: 'Saint Helena, Ascension and Tristan Da Cunha',
            dial_code: '+290',
            code: 'SH',
          },
          { name: 'Saint Kitts and Nevis', dial_code: '+1 869', code: 'KN' },
          { name: 'Saint Lucia', dial_code: '+1 758', code: 'LC' },
          { name: 'Saint Martin', dial_code: '+590', code: 'MF' },
          { name: 'Saint Pierre and Miquelon', dial_code: '+508', code: 'PM' },
          {
            name: 'Saint Vincent and the Grenadines',
            dial_code: '+1 784',
            code: 'VC',
          },
          { name: 'Samoa', dial_code: '+685', code: 'WS' },
          { name: 'San Marino', dial_code: '+378', code: 'SM' },
          { name: 'Sao Tome and Principe', dial_code: '+239', code: 'ST' },
          { name: 'Saudi Arabia', dial_code: '+966', code: 'SA' },
          { name: 'Senegal', dial_code: '+221', code: 'SN' },
          { name: 'Serbia', dial_code: '+381', code: 'RS' },
          { name: 'Seychelles', dial_code: '+248', code: 'SC' },
          { name: 'Sierra Leone', dial_code: '+232', code: 'SL' },
          { name: 'Singapore', dial_code: '+65', code: 'SG' },
          { name: 'Slovakia', dial_code: '+421', code: 'SK' },
          { name: 'Slovenia', dial_code: '+386', code: 'SI' },
          { name: 'Solomon Islands', dial_code: '+677', code: 'SB' },
          { name: 'Somalia', dial_code: '+252', code: 'SO' },
          { name: 'South Africa', dial_code: '+27', code: 'ZA' },
          {
            name: 'South Georgia and the South Sandwich Islands',
            dial_code: '+500',
            code: 'GS',
          },
          { name: 'Spain', dial_code: '+34', code: 'ES' },
          { name: 'Sri Lanka', dial_code: '+94', code: 'LK' },
          { name: 'Sudan', dial_code: '+249', code: 'SD' },
          { name: 'Suriname', dial_code: '+597', code: 'SR' },
          { name: 'Svalbard and Jan Mayen', dial_code: '+47', code: 'SJ' },
          { name: 'Swaziland', dial_code: '+268', code: 'SZ' },
          { name: 'Sweden', dial_code: '+46', code: 'SE' },
          { name: 'Switzerland', dial_code: '+41', code: 'CH' },
          { name: 'Syrian Arab Republic', dial_code: '+963', code: 'SY' },
          { name: 'Taiwan', dial_code: '+886', code: 'TW' },
          { name: 'Tajikistan', dial_code: '+992', code: 'TJ' },
          {
            name: 'Tanzania, United Republic of Tanzania',
            dial_code: '+255',
            code: 'TZ',
          },
          { name: 'Thailand', dial_code: '+66', code: 'TH' },
          { name: 'Timor-Leste', dial_code: '+670', code: 'TL' },
          { name: 'Togo', dial_code: '+228', code: 'TG' },
          { name: 'Tokelau', dial_code: '+690', code: 'TK' },
          { name: 'Tonga', dial_code: '+676', code: 'TO' },
          { name: 'Trinidad and Tobago', dial_code: '+1 868', code: 'TT' },
          { name: 'Tunisia', dial_code: '+216', code: 'TN' },
          { name: 'Turkey', dial_code: '+90', code: 'TR' },
          { name: 'Turkmenistan', dial_code: '+993', code: 'TM' },
          { name: 'Turks and Caicos Islands', dial_code: '+1 649', code: 'TC' },
          { name: 'Tuvalu', dial_code: '+688', code: 'TV' },
          { name: 'Uganda', dial_code: '+256', code: 'UG' },
          { name: 'Ukraine', dial_code: '+380', code: 'UA' },
          { name: 'United Arab Emirates', dial_code: '+971', code: 'AE' },
          { name: 'United Kingdom', dial_code: '+44', code: 'GB' },
          { name: 'United States', dial_code: '+1', code: 'US' },
          { name: 'Uruguay', dial_code: '+598', code: 'UY' },
          { name: 'Uzbekistan', dial_code: '+998', code: 'UZ' },
          { name: 'Vanuatu', dial_code: '+678', code: 'VU' },
          {
            name: 'Venezuela, Bolivarian Republic of Venezuela',
            dial_code: '+58',
            code: 'VE',
          },
          { name: 'Vietnam', dial_code: '+84', code: 'VN' },
          { name: 'Virgin Islands, British', dial_code: '+1 284', code: 'VG' },
          { name: 'Virgin Islands, U.S.', dial_code: '+1 340', code: 'VI' },
          { name: 'Wallis and Futuna', dial_code: '+681', code: 'WF' },
          { name: 'Yemen', dial_code: '+967', code: 'YE' },
          { name: 'Zambia', dial_code: '+260', code: 'ZM' },
          { name: 'Zimbabwe', dial_code: '+263', code: 'ZW' },
        ],
        zt = (a(428), fe.a.Option),
        At = function (e) {
          var t = Object(i.useState)(''),
            a = Object(j.a)(t, 2),
            c = a[0],
            r = a[1],
            o = Object(i.useState)('+255'),
            s = Object(j.a)(o, 2),
            d = s[0],
            h = s[1],
            b = Object(i.useState)(!1),
            f = Object(j.a)(b, 2),
            O = f[0],
            x = f[1],
            g = Object(i.useState)(''),
            y = Object(j.a)(g, 2),
            v = y[0],
            _ = y[1],
            S = Object(Ae.a)(),
            N = S.register,
            k = S.handleSubmit,
            C = S.setValue;
          Object(i.useEffect)(
            function () {
              e.location.state.data && _(e.location.state.data),
                N('dial_code'),
                N('phone_number'),
                (function (e, t) {
                  var a = e.filter(function (e) {
                      return e.dial_code === t;
                    }),
                    n = Array.isArray(a) && a.length >= 1 ? a[0].dial_code : '';
                  h(n);
                })(It, c);
            },
            [N, c, e.location.state.data],
          );
          return Object(n.jsx)('div', {
            children: Object(n.jsx)('div', {
              className: 'login_container',
              children: Object(n.jsx)('div', {
                className: 'login_innerContainer',
                children: Object(n.jsxs)('div', {
                  className: 'login_inner',
                  children: [
                    Object(n.jsxs)('div', {
                      className: 'login_header',
                      children: [
                        Object(n.jsx)('h2', { children: 'Sign In' }),
                        Object(n.jsx)(tt.a, {
                          style: {
                            margin: '0  0 0.5rem 0 ',
                            borderTop: '2px solid rgba(0, 0, 0, 0.06)',
                          },
                        }),
                      ],
                    }),
                    Object(n.jsxs)('form', {
                      style: { width: '100%' },
                      onSubmit: k(function (e) {
                        x(!0),
                          (function () {
                            var t = Object(m.a)(
                              u.a.mark(function t() {
                                var a;
                                return u.a.wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (t.next = 2),
                                          ((n = e),
                                          D.a
                                            .post('/api/v1/user/signin', n)
                                            .then(function (e) {
                                              return e;
                                            })
                                            .catch(function (e) {
                                              return e;
                                            })).then(function (e) {
                                            return e;
                                          })
                                        );
                                      case 2:
                                        200 === (a = t.sent).status
                                          ? (x(!1),
                                            Object(l.d)('/app/verify-phone', {
                                              state: {
                                                data: Object(p.a)(
                                                  Object(p.a)({}, e),
                                                  {},
                                                  { checkBuyer: v },
                                                ),
                                              },
                                            }))
                                          : 201 === a.status
                                          ? (x(!1),
                                            Object(l.d)('/app/signup', {
                                              state: {
                                                data: Object(p.a)(
                                                  Object(p.a)({}, e),
                                                  {},
                                                  { checkBuyer: v },
                                                ),
                                              },
                                            }))
                                          : je(
                                              !1,
                                              'Failed To Login',
                                              a.message,
                                            );
                                      case 4:
                                      case 'end':
                                        return t.stop();
                                    }
                                  var n;
                                }, t);
                              }),
                            );
                            return function () {
                              return t.apply(this, arguments);
                            };
                          })()();
                      }),
                      children: [
                        Object(n.jsx)('div', {
                          className: 'add-seller-input',
                          children: Object(n.jsx)(fe.a, {
                            size: 'large',
                            showSearch: !0,
                            style: { width: '100%' },
                            placeholder: 'Select Country',
                            optionFilterProp: 'children',
                            filterOption: function (e, t) {
                              return (
                                t.children
                                  .toLowerCase()
                                  .indexOf(e.toLowerCase()) >= 0
                              );
                            },
                            onChange: function (e) {
                              return C('dial_code', (t = e)), void r(t);
                              var t;
                            },
                            children: It.map(function (e) {
                              return Object(n.jsx)(
                                zt,
                                { value: e.dial_code, children: e.name },
                                e.code,
                              );
                            }),
                          }),
                        }),
                        Object(n.jsx)('div', {
                          className: 'login_phoneNo',
                          children: Object(n.jsx)(ze.a, {
                            placeholder: 'Phone Number',
                            addonBefore: d || '+255',
                            name: 'phone_number',
                            size: 'large',
                            maxLength: 9,
                            onChange: function (e) {
                              C('phone_number', e.target.value);
                            },
                            style: { width: '100%' },
                          }),
                        }),
                        Object(n.jsx)('div', {
                          className: 'login_btn',
                          children: Object(n.jsxs)(T.a, {
                            type: 'primary',
                            htmlType: 'submit',
                            size: 'large',
                            loading: O,
                            children: [' ', 'Login'],
                          }),
                        }),
                        Object(n.jsxs)('div', {
                          style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          },
                          children: [
                            Object(n.jsx)('div', {
                              style: { marginTop: 10 },
                              children: Object(n.jsxs)('p', {
                                children: [
                                  'Management staff?!.',
                                  ' ',
                                  Object(n.jsx)(l.a, {
                                    to: '/management/signin',
                                    children: ' Sign In Here',
                                  }),
                                ],
                              }),
                            }),
                            Object(n.jsx)('div', {
                              children: Object(n.jsx)(l.a, {
                                to: '/',
                                children: Object(n.jsx)('p', {
                                  children: 'Go Back',
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        qt = a(219),
        Bt =
          (a(429),
          function (e) {
            var t = c.a.useState({}),
              a = Object(j.a)(t, 2),
              r = a[0],
              o = a[1],
              s = c.a.useState(!1),
              d = Object(j.a)(s, 2),
              p = d[0],
              h = d[1],
              b = Object(Ae.a)(),
              f = b.register,
              O = b.handleSubmit,
              x = b.setValue,
              g = b.errors,
              y = e.handleAuth,
              v = (function () {
                var e = Object(m.a)(
                  u.a.mark(function e(t) {
                    var a;
                    return u.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              ((n = t),
                              D.a
                                .post('/api/v1/user/createotp', n)
                                .then(function (e) {
                                  return e;
                                })
                                .catch(function (e) {
                                  return e;
                                })).then(function (e) {
                                return e;
                              })
                            );
                          case 2:
                            (a = e.sent),
                              console.log(a),
                              201 === a.status
                                ? console.log(a)
                                : je(
                                    !1,
                                    'Failed to send verification token',
                                    a.message,
                                  );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                      var n;
                    }, e);
                  }),
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })();
            Object(i.useEffect)(function () {
              f('otpcode', { required: !0 });
              var t = {
                dial_code: e.location.state.data.dial_code,
                phone_number: e.location.state.data.phone_number,
              };
              o(t), console.log(e.location.state.data), v(t);
            }, []);
            return Object(n.jsx)('div', {
              className: 'verifyPhone_container',
              children: Object(n.jsx)('div', {
                className: 'verifyPhone_innerContainer',
                children: Object(n.jsx)('div', {
                  className: 'verifyPhone_inner',
                  children: Object(n.jsx)('div', {
                    children: Object(n.jsxs)('form', {
                      className: 'verifyPhone_verifyCode',
                      onSubmit: O(function (e) {
                        h(!0);
                        var t = {
                          otpcode: e.otpcode,
                          phone_number: r.phone_number,
                          dial_code: r.dial_code,
                        };
                        (function () {
                          var a = Object(m.a)(
                            u.a.mark(function a() {
                              var n;
                              return u.a.wrap(function (a) {
                                for (;;)
                                  switch ((a.prev = a.next)) {
                                    case 0:
                                      return (
                                        (a.next = 2),
                                        ((i = t),
                                        D.a
                                          .post('/api/v1/user/verifyotp', i)
                                          .then(function (e) {
                                            return e;
                                          })
                                          .catch(function (e) {
                                            return e;
                                          })).then(function (e) {
                                          return e;
                                        })
                                      );
                                    case 2:
                                      (n = a.sent),
                                        console.log(n),
                                        200 === n.status
                                          ? (function () {
                                              var t = Object(m.a)(
                                                u.a.mark(function t() {
                                                  var a;
                                                  return u.a.wrap(function (t) {
                                                    for (;;)
                                                      switch (
                                                        (t.prev = t.next)
                                                      ) {
                                                        case 0:
                                                          return (
                                                            (t.next = 2),
                                                            ((n = e.otpcode),
                                                            D.a
                                                              .post(
                                                                '/api/v1/session/generatetoken/'.concat(
                                                                  n,
                                                                ),
                                                              )
                                                              .then(function (
                                                                e,
                                                              ) {
                                                                return e;
                                                              })
                                                              .catch(function (
                                                                e,
                                                              ) {
                                                                return e;
                                                              })).then(
                                                              function (e) {
                                                                return e;
                                                              },
                                                            )
                                                          );
                                                        case 2:
                                                          (a = t.sent),
                                                            console.log(a),
                                                            201 === a.status
                                                              ? (h(!1),
                                                                localStorage.setItem(
                                                                  'accessToken',
                                                                  a.data.data
                                                                    .token,
                                                                ),
                                                                localStorage.setItem(
                                                                  'refreshToken',
                                                                  a.data.data
                                                                    .refreshToken,
                                                                ),
                                                                localStorage.setItem(
                                                                  'authenticated',
                                                                  a.data.data
                                                                    .token,
                                                                ),
                                                                (function () {
                                                                  var e = Object(
                                                                    m.a,
                                                                  )(
                                                                    u.a.mark(
                                                                      function e() {
                                                                        var t,
                                                                          n,
                                                                          i,
                                                                          c,
                                                                          o;
                                                                        return u.a.wrap(
                                                                          function (
                                                                            e,
                                                                          ) {
                                                                            for (;;)
                                                                              switch (
                                                                                (e.prev =
                                                                                  e.next)
                                                                              ) {
                                                                                case 0:
                                                                                  return (
                                                                                    (e.next = 2),
                                                                                    ae(
                                                                                      a
                                                                                        .data
                                                                                        .data
                                                                                        .token,
                                                                                    ).then(
                                                                                      function (
                                                                                        e,
                                                                                      ) {
                                                                                        return e;
                                                                                      },
                                                                                    )
                                                                                  );
                                                                                case 2:
                                                                                  (t =
                                                                                    e.sent),
                                                                                    console.log(
                                                                                      t,
                                                                                    ),
                                                                                    200 ===
                                                                                    t.status
                                                                                      ? (h(
                                                                                          !1,
                                                                                        ),
                                                                                        localStorage.setItem(
                                                                                          'UserRole',
                                                                                          JSON.stringify(
                                                                                            t
                                                                                              .data
                                                                                              .data
                                                                                              .roles,
                                                                                          ),
                                                                                        ),
                                                                                        localStorage.setItem(
                                                                                          'UserInfo',
                                                                                          JSON.stringify(
                                                                                            t
                                                                                              .data
                                                                                              .data
                                                                                              .user,
                                                                                          ),
                                                                                        ),
                                                                                        (n = t.data.data.roles.map(
                                                                                          function (
                                                                                            e,
                                                                                          ) {
                                                                                            return e.role;
                                                                                          },
                                                                                        )).includes(
                                                                                          'regular',
                                                                                        )
                                                                                          ? r &&
                                                                                            r.checkBuyer
                                                                                            ? ((i = sessionStorage.getItem(
                                                                                                'destinationRoute',
                                                                                              )),
                                                                                              (c =
                                                                                                i &&
                                                                                                JSON.parse(
                                                                                                  i,
                                                                                                )),
                                                                                              (o = ''
                                                                                                .concat(
                                                                                                  c.currentRoute,
                                                                                                  '/',
                                                                                                )
                                                                                                .concat(
                                                                                                  c.togoRoute,
                                                                                                )),
                                                                                              console.log(
                                                                                                o,
                                                                                              ),
                                                                                              Object(
                                                                                                l.d,
                                                                                              )(
                                                                                                o,
                                                                                              ),
                                                                                              console.log(
                                                                                                'Buyer checked successfully!',
                                                                                              ))
                                                                                            : Object(
                                                                                                l.d,
                                                                                              )(
                                                                                                '/',
                                                                                              )
                                                                                          : n.includes(
                                                                                              'seller',
                                                                                            ) &&
                                                                                            n.includes(
                                                                                              'reqular',
                                                                                            )
                                                                                          ? Object(
                                                                                              l.d,
                                                                                            )(
                                                                                              '/app/sellers',
                                                                                            )
                                                                                          : Object(
                                                                                              l.d,
                                                                                            )(
                                                                                              '/',
                                                                                            ),
                                                                                        console.log(
                                                                                          n,
                                                                                        ),
                                                                                        y(),
                                                                                        console.log(
                                                                                          t,
                                                                                        ))
                                                                                      : (h(
                                                                                          !1,
                                                                                        ),
                                                                                        je(
                                                                                          !1,
                                                                                          'Fail to verify Token',
                                                                                          t.message,
                                                                                        ));
                                                                                case 5:
                                                                                case 'end':
                                                                                  return e.stop();
                                                                              }
                                                                          },
                                                                          e,
                                                                        );
                                                                      },
                                                                    ),
                                                                  );
                                                                  return function () {
                                                                    return e.apply(
                                                                      this,
                                                                      arguments,
                                                                    );
                                                                  };
                                                                })()())
                                                              : (h(!1),
                                                                console.log(
                                                                  a.message,
                                                                )),
                                                            Object(l.d)('/');
                                                        case 6:
                                                        case 'end':
                                                          return t.stop();
                                                      }
                                                    var n;
                                                  }, t);
                                                }),
                                              );
                                              return function () {
                                                return t.apply(this, arguments);
                                              };
                                            })()()
                                          : (h(!1),
                                            je(
                                              !1,
                                              'Fail to verify token',
                                              n.message,
                                            ));
                                    case 5:
                                    case 'end':
                                      return a.stop();
                                  }
                                var i;
                              }, a);
                            }),
                          );
                          return function () {
                            return a.apply(this, arguments);
                          };
                        })()(),
                          console.log(t);
                      }),
                      children: [
                        Object(n.jsx)('div', {
                          className: 'verifyPhone_header',
                          children: Object(n.jsx)('h2', {
                            children: 'Verify Mobile Number',
                          }),
                        }),
                        Object(n.jsx)(qt.a, {
                          customInput: ze.a,
                          placeholder: 'Enter Code',
                          onValueChange: function (e) {
                            var t = e.value;
                            x('otpcode', t);
                          },
                          style: {
                            width: '100%',
                            height: '50px',
                            fontSize: '16px',
                          },
                          format: '###-###',
                        }),
                        Object(n.jsx)('span', {
                          style: { fontSize: '1rem', color: 'red' },
                          children: g.otpcode && 'Last name is required',
                        }),
                        Object(n.jsxs)('div', {
                          className: 'verifyPhone_resendCode',
                          children: [
                            Object(n.jsx)('span', {
                              style: { marginRight: 5 },
                              onClick: function () {
                                Object(l.d)(-1);
                              },
                              children: Object(n.jsx)('p', {
                                children: 'Change Number',
                              }),
                            }),
                            Object(n.jsx)('div', {
                              onClick: function () {
                                var e;
                                (e = '2021-01-31T13:20:00+0400'),
                                  console.log(e),
                                  Re()().isSameOrBefore(e) && v(r);
                              },
                              children: Object(n.jsx)('span', {
                                children: 'Resend Code',
                              }),
                            }),
                          ],
                        }),
                        Object(n.jsx)('div', {
                          className: 'verifyPhone_btn',
                          children: Object(n.jsxs)(T.a, {
                            type: 'primary',
                            htmlType: 'submit',
                            size: 'large',
                            loading: p,
                            children: [' ', 'Confirm'],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            });
          }),
        Mt = function () {
          return Object(n.jsx)(de, {
            children: function (e) {
              var t = e.userAccessToken,
                a = e.handleAuthentication;
              return t
                ? Object(n.jsxs)(l.c, {
                    primary: !1,
                    children: [
                      Object(n.jsx)(jt, { path: 'buyers/*' }),
                      Object(n.jsx)(Ct, { path: 'sellers/*' }),
                      Object(n.jsx)(Le, { path: 'market-info' }),
                    ],
                  })
                : Object(n.jsxs)(l.c, {
                    primary: !1,
                    children: [
                      Object(n.jsx)(Le, { path: 'market-info' }),
                      Object(n.jsx)(jt, { path: 'buyers/*' }),
                      Object(n.jsx)(Ct, { path: 'sellers/*' }),
                      Object(n.jsx)(At, { path: '/login' }),
                      Object(n.jsx)(wt, { path: '/signup' }),
                      Object(n.jsx)(Bt, {
                        path: '/verify-phone',
                        handleAuth: a,
                      }),
                    ],
                  });
            },
          });
        },
        Rt = a(457),
        Pt =
          (a(430),
          function (e) {
            var t = e.handleShowNavBar,
              a = e.isNavBarOpened,
              c = Object(i.useContext)(ue).dashboardLogout;
            return Object(n.jsxs)(n.Fragment, {
              children: [
                Object(n.jsx)('div', {
                  style: {
                    width: '100%',
                    display: 'flex',
                    backgroundColor: '#fff',
                    position: 'fixed',
                    top: 0,
                    zIndex: 100,
                  },
                  children: Object(n.jsxs)('div', {
                    className: 'navigation',
                    children: [
                      Object(n.jsx)('div', {
                        style: { display: 'flex', marginLeft: '1rem' },
                        onClick: t,
                        children: Object(n.jsx)('div', {
                          className: 'screen-sm',
                          style: { alignSelf: 'center' },
                          children: Object(n.jsx)(at.a, {
                            style: { fontSize: '1.25rem' },
                          }),
                        }),
                      }),
                      Object(n.jsx)('div', {
                        className: 'navigation--options',
                        children: Object(n.jsx)('div', {
                          className: 'navigation--DM',
                          children: Object(n.jsx)(et.a, {
                            placement: 'bottom',
                            content: Object(n.jsx)(n.Fragment, {
                              children: Object(n.jsxs)('div', {
                                style: {
                                  display: 'flex',
                                  flexDirection: 'column',
                                },
                                children: [
                                  Object(n.jsx)(T.a, {
                                    type: 'link',
                                    children: 'Update Username',
                                  }),
                                  Object(n.jsx)(T.a, {
                                    type: 'link',
                                    children: 'Update Password',
                                  }),
                                  Object(n.jsx)(T.a, {
                                    type: 'link',
                                    onClick: c,
                                    children: 'Logout',
                                  }),
                                ],
                              }),
                            }),
                            trigger: 'click',
                            children: Object(n.jsx)(T.a, {
                              type: 'link',
                              children: 'My Account',
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                Object(n.jsxs)('div', {
                  className: a ? 'nav--list' : 'nav--list_closed',
                  children: [
                    Object(n.jsx)('div', {
                      className: 'nav-close',
                      children: Object(n.jsx)('button', {
                        type: 'button',
                        style: {
                          backgroundColor: 'transparent',
                          border: 'none',
                        },
                        className: 'nav--close_btn',
                        onClick: function () {
                          return t();
                        },
                        children: Object(n.jsx)(nt.a, {
                          style: { fontSize: 28 },
                        }),
                      }),
                    }),
                    Object(n.jsx)('div', {
                      className: 'user--nav',
                      children: Object(n.jsxs)('ul', {
                        className: 'nav--option',
                        children: [
                          Object(n.jsx)('li', {
                            onClick: function () {
                              return t();
                            },
                            children: Object(n.jsx)(l.a, {
                              to: '/dashboard',
                              className: 'nav--option_item',
                              children: 'Dashboard',
                            }),
                          }),
                          Object(n.jsx)('li', {
                            onClick: function () {
                              return t();
                            },
                            children: Object(n.jsxs)(l.a, {
                              to: 'variety',
                              className: 'nav--option_item',
                              children: [' ', 'Varieties'],
                            }),
                          }),
                          Object(n.jsx)('li', {
                            onClick: function () {
                              return t();
                            },
                            children: Object(n.jsx)(l.a, {
                              to: 'price-rate',
                              className: 'nav--option_item',
                              children: 'Price Rate',
                            }),
                          }),
                          Object(n.jsx)('li', {
                            onClick: function () {
                              return t();
                            },
                            children: Object(n.jsx)(l.a, {
                              to: 'users/sellers',
                              className: 'nav--option_item',
                              children: 'Sellers',
                            }),
                          }),
                          Object(n.jsx)('li', {
                            onClick: function () {
                              return t();
                            },
                            children: Object(n.jsx)(l.a, {
                              to: 'users/buyers',
                              className: 'nav--option_item',
                              children: 'Buyers',
                            }),
                          }),
                          Object(n.jsx)('li', {
                            onClick: function () {
                              return t();
                            },
                            children: Object(n.jsx)(l.a, {
                              to: 'users/leaders',
                              className: 'nav--option_item',
                              children: 'Leaders',
                            }),
                          }),
                          Object(n.jsx)('li', {
                            onClick: function () {
                              return t();
                            },
                            children: Object(n.jsx)(l.a, {
                              to: 'platforms',
                              className: 'nav--option_item',
                              children: 'Platforms',
                            }),
                          }),
                          Object(n.jsx)('li', {
                            onClick: function () {
                              return t();
                            },
                            children: Object(n.jsx)(l.a, {
                              to: 'tender-request',
                              className: 'nav--option_item',
                              children: 'Tender Request',
                            }),
                          }),
                          Object(n.jsx)('li', {
                            onClick: function () {
                              return t();
                            },
                            children: Object(n.jsx)(l.a, {
                              to: 'tender-given',
                              className: 'nav--option_item',
                              children: 'Tender Given',
                            }),
                          }),
                          Object(n.jsx)('li', {
                            onClick: function () {
                              return t();
                            },
                            children: Object(n.jsx)(l.a, {
                              to: '/dashboard',
                              className: 'nav--option_item',
                              children: 'Feedback',
                            }),
                          }),
                          Object(n.jsx)('li', {
                            onClick: function () {
                              return t();
                            },
                            children: Object(n.jsx)(l.a, {
                              to: '/dashboard',
                              className: 'nav--option_item',
                              children: 'My Profile',
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            });
          }),
        Lt = a(93),
        Dt = a(473),
        Ft = a(474),
        Gt = a(475),
        Zt = a(476),
        Kt = a(477),
        Et = a(478),
        Vt = a(479),
        Ht = a(480),
        Ut = a(481),
        Jt = a.p + 'static/media/logo.503ecd68.png',
        Wt = {
          admin: {
            static: [
              'variety:listing',
              'price-rate: listing',
              'price-rate: create',
              'price-rate: delete',
              'price-rate: edit',
              'seller: create',
              'seller: disable',
              'seller: delete',
              'seller: edit',
              'seller: MoreInfo',
              'buyer: listing',
              'buyer: disable',
              'buyer: delete',
              'leader: listing',
              'leader: delete',
              'platform: create',
              'platform: edit',
              'platform: delete',
              'tender-given: listing',
              'tender-given: disable',
              'tender-given: delete',
              'tender-given: view',
              'tender-request: listing',
              'tender-request: view',
              'tender-request: delete',
              'all: full-access',
            ],
          },
          leader: {
            static: [
              'variety:listing',
              'variety:create',
              'variety:edit',
              'seller: listing',
              'seller: create',
              'seller:edit',
              'seller:delete',
            ],
          },
          seller: {
            static: ['user:listing', 'cashout:listing', 'finance:module'],
          },
          buyer: {
            static: [
              'customer:listing',
              'customer:followup',
              'customer:viewQuestions',
            ],
          },
        },
        Yt = function (e) {
          return (function (e, t, a, n) {
            var i = e[t];
            if (!i) return !1;
            var c = i.static;
            if (c && c.includes(a)) return !0;
            var r = i.dynamic;
            if (r) {
              var o = r[a];
              return !!o && o(n);
            }
            return !1;
          })(Wt, e.role, e.perform, e.data)
            ? e.yes()
            : e.no();
        };
      Yt.defaultProps = {
        yes: function () {
          return null;
        },
        no: function () {
          return null;
        },
      };
      var Qt = Yt,
        Xt = (a(431), Rt.a.Sider),
        $t = Lt.a.SubMenu,
        ea = function (e) {
          var t = Object(i.useState)(!1),
            a = Object(j.a)(t, 2),
            c = a[0],
            r = a[1],
            o = e.className,
            s = e.isCollapsable,
            d = e.isCollapsed,
            u = function () {
              r(!c), d(!c);
            };
          return Object(n.jsx)(de, {
            children: function (e) {
              var t = e.adminRole;
              return Object(n.jsx)(n.Fragment, {
                children: Object(n.jsxs)(Xt, {
                  collapsible: s,
                  collapsed: s ? c : void 0,
                  onCollapse: s ? u : void 0,
                  className: o,
                  style: {
                    overflow: 'auto',
                    minHeight: '100vh',
                    position: 'fixed',
                    left: 0,
                    zIndex: 200,
                  },
                  children: [
                    Object(n.jsx)('div', {
                      className: 'logo',
                      children: Object(n.jsx)('img', {
                        src: Jt,
                        alt: 'Logo',
                        className: ''.concat(
                          c ? 'logo--image' : 'logo--image_collapsed',
                        ),
                      }),
                    }),
                    Object(n.jsx)(Qt, {
                      role: t,
                      perform: 'all: full-access',
                      yes: function () {
                        return Object(n.jsxs)(Lt.a, {
                          className: 'sider--menu',
                          theme: 'dark',
                          defaultSelectedKeys: ['1'],
                          mode: 'inline',
                          children: [
                            Object(n.jsx)(
                              Lt.a.Item,
                              {
                                icon: Object(n.jsx)(Dt.a, {}),
                                children: Object(n.jsx)(l.a, {
                                  to: 'dashboard',
                                  children: 'Dashboard',
                                }),
                              },
                              '1',
                            ),
                            Object(n.jsx)(
                              Lt.a.Item,
                              {
                                icon: Object(n.jsx)(Ft.a, {}),
                                children: Object(n.jsx)(l.a, {
                                  to: 'variety',
                                  children: ' Varieties',
                                }),
                              },
                              '2',
                            ),
                            Object(n.jsx)(
                              Lt.a.Item,
                              {
                                icon: Object(n.jsx)(Gt.a, {}),
                                children: Object(n.jsx)(l.a, {
                                  to: 'price-rate',
                                  children: 'Price Rate',
                                }),
                              },
                              '3',
                            ),
                            Object(n.jsxs)(
                              $t,
                              {
                                icon: Object(n.jsx)(Zt.a, {}),
                                title: 'Users',
                                children: [
                                  Object(n.jsx)(
                                    Lt.a.Item,
                                    {
                                      children: Object(n.jsx)(l.a, {
                                        to: 'users/sellers',
                                        children: 'Sellers',
                                      }),
                                    },
                                    '4',
                                  ),
                                  Object(n.jsx)(
                                    Lt.a.Item,
                                    {
                                      children: Object(n.jsx)(l.a, {
                                        to: 'users/buyers',
                                        children: 'Buyers',
                                      }),
                                    },
                                    '5',
                                  ),
                                  Object(n.jsx)(
                                    Lt.a.Item,
                                    {
                                      children: Object(n.jsx)(l.a, {
                                        to: 'users/leaders',
                                        children: 'Leaders',
                                      }),
                                    },
                                    '6',
                                  ),
                                ],
                              },
                              'sub1',
                            ),
                            Object(n.jsx)(
                              Lt.a.Item,
                              {
                                icon: Object(n.jsx)(Kt.a, {}),
                                children: Object(n.jsx)(l.a, {
                                  to: 'platforms',
                                  children: 'Platforms',
                                }),
                              },
                              '7',
                            ),
                            Object(n.jsx)(
                              Lt.a.Item,
                              {
                                icon: Object(n.jsx)(Et.a, {}),
                                children: Object(n.jsx)(l.a, {
                                  to: 'tender-request',
                                  children: 'Tender Request',
                                }),
                              },
                              '8',
                            ),
                            Object(n.jsx)(
                              Lt.a.Item,
                              {
                                icon: Object(n.jsx)(Vt.a, {}),
                                children: Object(n.jsx)(l.a, {
                                  to: 'tender-given',
                                  children: 'Tender Given',
                                }),
                              },
                              '9',
                            ),
                            Object(n.jsx)(
                              Lt.a.Item,
                              {
                                icon: Object(n.jsx)(Ht.a, {}),
                                children: Object(n.jsx)(l.a, {
                                  to: 'banner',
                                  children: 'Bunners',
                                }),
                              },
                              '11',
                            ),
                            Object(n.jsx)(
                              Lt.a.Item,
                              {
                                icon: Object(n.jsx)(Ut.a, {}),
                                children: Object(n.jsx)(l.a, {
                                  to: 'logs',
                                  children: 'Logs',
                                }),
                              },
                              '13',
                            ),
                          ],
                        });
                      },
                      no: function () {
                        return Object(n.jsxs)(Lt.a, {
                          className: 'sider--menu',
                          theme: 'dark',
                          defaultSelectedKeys: ['1'],
                          mode: 'inline',
                          children: [
                            Object(n.jsx)(
                              Lt.a.Item,
                              {
                                icon: Object(n.jsx)(Dt.a, {}),
                                children: Object(n.jsx)(l.a, {
                                  to: 'dashboard',
                                  children: 'Dashboard',
                                }),
                              },
                              '1',
                            ),
                            Object(n.jsx)(
                              Lt.a.Item,
                              {
                                icon: Object(n.jsx)(Ft.a, {}),
                                children: Object(n.jsx)(l.a, {
                                  to: 'variety',
                                  children: ' Varieties',
                                }),
                              },
                              '2',
                            ),
                            Object(n.jsx)(
                              Lt.a.Item,
                              {
                                icon: Object(n.jsx)(Zt.a, {}),
                                children: Object(n.jsx)(l.a, {
                                  to: 'users/sellers',
                                  children: 'Sellers',
                                }),
                              },
                              '3',
                            ),
                          ],
                        });
                      },
                    }),
                  ],
                }),
              });
            },
          });
        },
        ta =
          (a(432),
          function (e) {
            var t = e.children,
              a = Object(i.useState)(!1),
              c = Object(j.a)(a, 2),
              r = c[0],
              o = c[1],
              s = Object(i.useState)(!1),
              l = Object(j.a)(s, 2),
              d = l[0],
              u = l[1];
            return Object(n.jsx)(n.Fragment, {
              children: Object(n.jsxs)(Rt.a, {
                style: { width: '100%' },
                children: [
                  Object(n.jsx)(ea, {
                    isCollapsable: !0,
                    className: 'sideBar',
                    isCollapsed: function (e) {
                      o(e);
                    },
                  }),
                  Object(n.jsxs)(Rt.a, {
                    className: 'site-layout',
                    style: {
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    },
                    children: [
                      Object(n.jsx)(Pt, {
                        handleShowNavBar: function () {
                          u(!d);
                        },
                        isNavBarOpened: d,
                      }),
                      Object(n.jsx)('div', {
                        style: {
                          marginTop: '60px',
                          display: d ? 'none' : 'block',
                        },
                        className: r
                          ? 'marginAfterCollapse'
                          : 'marginBeforeCollapse',
                        children: t,
                      }),
                    ],
                  }),
                ],
              }),
            });
          }),
        aa = [
          {
            key: '1',
            seller: 'Mike Johnson',
            variety: 'Kilombero',
            amount: 32,
            location: 'Dar es salaam',
          },
          {
            key: '2',
            seller: 'John Doe',
            variety: 'Kyela',
            amount: 20,
            location: 'Mbeya',
          },
          {
            key: '3',
            seller: 'Mike Johnson',
            variety: 'Kilombero',
            amount: 32,
            location: 'Dar es salaam',
          },
          {
            key: '4',
            seller: 'John Doe',
            variety: 'Kyela',
            amount: 20,
            location: 'Mbeya',
          },
          {
            key: '5',
            seller: 'Mike Johnson',
            variety: 'Kilombero',
            amount: 32,
            location: 'Dar es salaam',
          },
        ],
        na = function () {
          return Object(n.jsx)(Be.a, {
            dataSource: aa,
            columns: [
              {
                title: 'Seller',
                dataIndex: 'seller',
                key: 'seller',
                resposive: ['md'],
              },
              {
                title: 'Variety',
                dataIndex: 'variety',
                key: 'variety',
                resposive: ['md'],
                sorter: {
                  compare: function (e, t) {
                    return e.variety.length - t.variety.length;
                  },
                },
              },
              {
                title: 'Amount(Tonnes)',
                dataIndex: 'amount',
                key: 'amount',
                resposive: ['md'],
                sorter: {
                  compare: function (e, t) {
                    return e.amount - t.amount;
                  },
                },
              },
              {
                title: 'Location',
                dataIndex: 'location',
                key: 'location',
                sorter: {
                  compare: function (e, t) {
                    return e.location.length - t.location.length;
                  },
                },
              },
            ],
            pagination: !1,
          });
        },
        ia = [
          {
            key: '1',
            buyer: 'Mike Johnson',
            variety: 'Morogoro',
            amount: 32,
            destination: 'Dar es salaam',
          },
          {
            key: '2',
            buyer: 'John Doe',
            variety: 'Kyela',
            amount: 20,
            destination: 'Nairobi',
          },
          {
            key: '3',
            buyer: 'Mike Johnson',
            variety: 'Morogoro',
            amount: 32,
            destination: 'Dar es salaam',
          },
          {
            key: '4',
            buyer: 'John Doe',
            variety: 'Kyela',
            amount: 20,
            destination: 'Nairobi',
          },
          {
            key: '5',
            buyer: 'Mike Johnson',
            variety: 'Morogoro',
            amount: 32,
            destination: 'Dar es salaam',
          },
        ],
        ca = function () {
          return Object(n.jsx)(Be.a, {
            dataSource: ia,
            columns: [
              { title: 'Buyer', dataIndex: 'buyer', key: 'buyer' },
              {
                title: 'Variety',
                dataIndex: 'variety',
                key: 'variety',
                sorter: {
                  compare: function (e, t) {
                    return e.variety.length - t.variety.length;
                  },
                },
              },
              {
                title: 'Amount(Tonnes)',
                dataIndex: 'amount',
                key: 'amount',
                sorter: {
                  compare: function (e, t) {
                    return e.amount - t.amount;
                  },
                },
              },
              {
                title: 'Destination',
                dataIndex: 'destination',
                key: 'destination',
                sorter: {
                  compare: function (e, t) {
                    return e.destination.length - t.destination.length;
                  },
                },
              },
            ],
            pagination: !1,
          });
        },
        ra = De.a.TabPane,
        oa = function () {
          return Object(n.jsx)(I, {
            styles: { width: '97%' },
            children: Object(n.jsxs)(De.a, {
              defaultActiveKey: '1',
              children: [
                Object(n.jsx)(
                  ra,
                  {
                    tab: 'Tender Request',
                    children: Object(n.jsx)(I, {
                      styles: { width: '100%', overflowY: 'auto' },
                      actionBtn: 'View More',
                      actionBtnRoute: 'dashboard/tender-request',
                      children: Object(n.jsx)(na, {}),
                    }),
                  },
                  '1',
                ),
                Object(n.jsx)(
                  ra,
                  {
                    tab: 'Tender Given',
                    children: Object(n.jsx)(I, {
                      styles: { width: '100%', overflowY: 'auto' },
                      actionBtn: 'View More',
                      actionBtnRoute: 'dashboard/tender-given',
                      children: Object(n.jsx)(ca, {}),
                    }),
                  },
                  '2',
                ),
              ],
            }),
          });
        },
        sa = function (e) {
          var t = e.style,
            a = Object(i.useState)([]),
            c = Object(j.a)(a, 2),
            r = c[0],
            o = c[1];
          Object(i.useEffect)(function () {
            (function () {
              var e = Object(m.a)(
                u.a.mark(function e() {
                  var t, a;
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            oe().then(function (e) {
                              return e;
                            })
                          );
                        case 2:
                          200 === (t = e.sent).status
                            ? ((a = t.data.data.map(function (e, t) {
                                return {
                                  id: t + 1,
                                  variety: e.variety,
                                  price: e.price_rate,
                                  region: e.region,
                                  effectiveDate: Re()(e.date).format(
                                    'Do MMMM YYYY',
                                  ),
                                };
                              })),
                              o(a))
                            : je(!1, 'Fail to fetch Price Rate', t.message);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []);
          return Object(n.jsx)(I, {
            styles: Object(p.a)(Object(p.a)({}, t), {}, { overflowY: 'auto' }),
            actionBtn: 'View More',
            actionBtnRoute: 'price-rate',
            children: Object(n.jsxs)('div', {
              children: [
                Object(n.jsx)('div', {
                  children: Object(n.jsx)('h2', {
                    children: 'Today Price Rate(Tzs/Kg)',
                  }),
                }),
                Object(n.jsx)(Be.a, {
                  dataSource: r,
                  columns: [
                    { title: 'S/N', dataIndex: 'id', key: 'id' },
                    { title: 'Variety', dataIndex: 'variety', key: 'variety' },
                    {
                      title: 'Price (TZS)',
                      dataIndex: 'price',
                      key: 'price',
                      sorter: {
                        compare: function (e, t) {
                          return e.price - t.price;
                        },
                      },
                    },
                    {
                      title: 'Region',
                      dataIndex: 'region',
                      key: 'region',
                      sorter: {
                        compare: function (e, t) {
                          return e.region.length - t.region.length;
                        },
                      },
                    },
                    {
                      title: 'Effective Date',
                      dataIndex: 'effectiveDate',
                      key: 'effectiveDate',
                      sorter: {
                        compare: function (e, t) {
                          return (
                            e.effectiveDate.length - t.effectiveDate.length
                          );
                        },
                      },
                    },
                  ],
                  pagination: !1,
                }),
              ],
            }),
          });
        },
        la = function () {
          var e = Object(i.useState)({}),
            t = Object(j.a)(e, 2),
            a = t[0],
            c = t[1];
          return (
            Object(i.useEffect)(function () {
              (function () {
                var e = Object(m.a)(
                  u.a.mark(function e() {
                    var t;
                    return u.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              D.a
                                .get('/api/v1/counter')
                                .then(function (e) {
                                  return e;
                                })
                                .catch(function (e) {
                                  return e;
                                })
                                .then(function (e) {
                                  return e;
                                })
                            );
                          case 2:
                            200 === (t = e.sent).status &&
                              (c(t.data.data), console.log(t.data.data));
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            }, []),
            Object(n.jsxs)('div', {
              className: 'dashboard',
              children: [
                Object(n.jsx)(I, {
                  className: 'dashboard-card',
                  title: (a.platform && a.platform.toString()) || '0',
                  subtitle: 'Total Platform',
                  actionBtn: 'View More',
                  actionBtnRoute: 'dashboard/platforms',
                }),
                Object(n.jsx)(I, {
                  className: 'dashboard-card',
                  title: (a.seller && a.seller.toString()) || '0',
                  subtitle: 'Total Seller',
                  actionBtn: 'View More',
                  actionBtnRoute: 'dashboard/users/sellers',
                }),
                Object(n.jsx)(I, {
                  className: 'dashboard-card',
                  title: (a.buyer && a.buyer.toString()) || '0',
                  subtitle: 'Total Buyers',
                  actionBtn: 'View More',
                  actionBtnRoute: 'dashboard/users/buyers',
                }),
                Object(n.jsx)(I, {
                  className: 'dashboard-card',
                  title: (a.tender_given && a.tender_given.toString()) || '0',
                  subtitle: 'Total Tender Request',
                  actionBtn: 'View More',
                  actionBtnRoute: 'dashboard/tender-request',
                }),
                Object(n.jsx)(I, {
                  className: 'dashboard-card',
                  title:
                    (a.tender_request && a.tender_request.toString()) || '0',
                  subtitle: 'Total Tender Given',
                  actionBtn: 'View More',
                  actionBtnRoute: 'dashboard/tender-given',
                }),
              ],
            })
          );
        },
        da =
          (a(433),
          function () {
            return Object(n.jsxs)('div', {
              className: 'dashboard-container',
              children: [
                Object(n.jsx)(la, {}),
                Object(n.jsx)('div', {
                  className: 'dashboard--section',
                  children: Object(n.jsx)(sa, { style: { width: '97%' } }),
                }),
                Object(n.jsx)('div', {
                  className: 'dashboard--section',
                  children: Object(n.jsx)(oa, {}),
                }),
              ],
            });
          }),
        ua = a(466),
        ma = a(75),
        ja = a(458),
        pa = a(482),
        ha = a(483),
        ba = a(484),
        fa = a(485),
        Oa = Be.a.Column,
        xa = function () {
          var e = Object(i.useState)([]),
            t = Object(j.a)(e, 2),
            a = t[0],
            c = t[1],
            r = Object(i.useState)([]),
            o = Object(j.a)(r, 2),
            s = o[0],
            d = o[1],
            p = Object(i.useState)(!1),
            h = Object(j.a)(p, 1)[0],
            b = Object(i.useContext)(ue).adminAccessToken,
            f = (function () {
              var e = Object(m.a)(
                u.a.mark(function e(t) {
                  var a;
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            V(t, b).then(function (e) {
                              return e;
                            })
                          );
                        case 2:
                          200 === (a = e.sent).status
                            ? (x(), je(!0, 'Seller Deleted Successfully'))
                            : je(!1, 'Fail To Delete Seller', a.message),
                            console.log(t);
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            O = (function () {
              var e = Object(m.a)(
                u.a.mark(function e(t) {
                  var a, n;
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = { toggle: 'false' }),
                            (e.next = 3),
                            H(t, a, b).then(function (e) {
                              return e;
                            })
                          );
                        case 3:
                          200 === (n = e.sent).status
                            ? je(!0, 'Seller Disabled Successfully')
                            : je(!1, 'Fail To Delete Seller', n.message);
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            x = (function () {
              var e = Object(m.a)(
                u.a.mark(function e() {
                  var t, a;
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            K().then(function (e) {
                              return e;
                            })
                          );
                        case 2:
                          200 === (t = e.sent).status
                            ? ((a = t.data.data.sellerInformations.map(
                                function (e) {
                                  return {
                                    keys: e.id,
                                    firstName:
                                      e.full_name && e.full_name.split(' ')[0],
                                    lastName:
                                      e.full_name && e.full_name.split(' ')[1],
                                    phone: '0'.concat(e.phone_number),
                                    platform: e.platform_name,
                                    leader: e.platform_leader,
                                    location: e.location,
                                    tags: [
                                      e.is_tbs_certified &&
                                      0 !== e.is_tbs_certified.length
                                        ? 'TBS Certificed'
                                        : '',
                                    ],
                                  };
                                },
                              )),
                              d(a))
                            : je(!1, 'Failed to fetch sellers', t.messages);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          Object(i.useEffect)(function () {
            x();
          }, []);
          var g = function (e) {
              return 'TBS Certificed' === e ? '#f50' : '#2db7f5';
            },
            y = {
              selectedRowKeys: a,
              onChange: function (e) {
                c(e);
              },
            };
          return Object(n.jsxs)(Be.a, {
            dataSource: s,
            rowSelection: y,
            children: [
              Object(n.jsx)(
                Oa,
                { title: 'First Name', dataIndex: 'firstName' },
                'firstName',
              ),
              Object(n.jsx)(
                Oa,
                { title: 'Last Name', dataIndex: 'lastName' },
                'lastName',
              ),
              Object(n.jsx)(
                Oa,
                { title: 'Phone Number', dataIndex: 'phone' },
                'phone',
              ),
              Object(n.jsx)(
                Oa,
                {
                  title: 'Platform',
                  dataIndex: 'platform',
                  sorter: function (e, t) {
                    return e.platform - t.platform;
                  },
                },
                'platform',
              ),
              Object(n.jsx)(
                Oa,
                { title: 'Platform Leader', dataIndex: 'leader' },
                'leader',
              ),
              Object(n.jsx)(
                Oa,
                {
                  title: 'Location',
                  dataIndex: 'location',
                  sorter: function (e, t) {
                    return e.location - t.location;
                  },
                },
                'location',
              ),
              Object(n.jsx)(
                Oa,
                {
                  title: 'Tags',
                  dataIndex: 'tags',
                  render: function (e) {
                    return Object(n.jsx)(n.Fragment, {
                      children: e.map(function (e) {
                        return Object(n.jsx)(
                          Fe.a,
                          { color: g(e), children: e },
                          e,
                        );
                      }),
                    });
                  },
                },
                'tags',
              ),
              Object(n.jsx)(
                Oa,
                {
                  title: 'Action',
                  dataIndex: 'keys',
                  render: function (e) {
                    return Object(n.jsx)(n.Fragment, {
                      children: Object(n.jsxs)(ua.b, {
                        split: Object(n.jsx)(tt.a, { type: 'vertical' }),
                        children: [
                          Object(n.jsx)('div', {
                            onClick: function () {
                              return (function (e) {
                                var t = { event: 'update seller', sellerId: e };
                                Object(l.d)('add-sellers-form', {
                                  state: { data: t },
                                });
                              })(e);
                            },
                            children: Object(n.jsx)(ma.a, {
                              title: 'Edit',
                              children: Object(n.jsx)(pa.a, {
                                style: { fontSize: '1.25rem' },
                              }),
                            }),
                          }),
                          Object(n.jsx)('div', {
                            onClick: function () {
                              return Object(l.d)('view');
                            },
                            children: Object(n.jsx)(ma.a, {
                              title: 'View More',
                              children: Object(n.jsx)(ha.a, {
                                style: { fontSize: '1.25rem' },
                              }),
                            }),
                          }),
                          Object(n.jsx)('div', {
                            children: Object(n.jsx)(ja.a, {
                              title: 'Disable Seller\uff1f',
                              okText: 'Yes',
                              cancelText: 'No',
                              onConfirm: function () {
                                return O(e);
                              },
                              children: Object(n.jsx)(ma.a, {
                                title: 'Disable Seller',
                                visible: h,
                                trigger: 'hover',
                                children: Object(n.jsx)(ba.a, {
                                  style: { fontSize: '1.25rem' },
                                }),
                              }),
                            }),
                          }),
                          Object(n.jsx)('div', {
                            children: Object(n.jsx)(ja.a, {
                              title: 'Delete Seller?',
                              okText: 'Yes',
                              cancelText: 'No',
                              onConfirm: function () {
                                return f(e);
                              },
                              children: Object(n.jsx)(ma.a, {
                                title: 'Delete Buyer',
                                color: 'red',
                                visible: h,
                                trigger: 'hover',
                                children: Object(n.jsx)(fa.a, {
                                  style: {
                                    fontSize: '1.25rem',
                                    color: '#ff0000',
                                  },
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    });
                  },
                },
                'keys',
              ),
            ],
          });
        },
        ga = function () {
          return Object(n.jsx)(n.Fragment, {
            children: Object(n.jsxs)(I, {
              title: 'Sellers',
              styles: { minHeight: '90vh', overflowY: 'auto' },
              children: [
                Object(n.jsx)('div', {
                  style: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    paddingRight: '4rem',
                  },
                  children: Object(n.jsxs)(T.a, {
                    type: 'primary',
                    size: 'large',
                    onClick: function () {
                      return Object(l.d)('add-sellers-form');
                    },
                    children: [' ', 'Add Sellers'],
                  }),
                }),
                Object(n.jsx)(tt.a, {}),
                Object(n.jsx)(xa, {}),
              ],
            }),
          });
        },
        ya = function () {
          var e = Object(i.useState)([]),
            t = Object(j.a)(e, 2),
            a = t[0],
            c = t[1],
            r = Object(i.useState)(!1),
            o = Object(j.a)(r, 2),
            s = o[0],
            l = o[1],
            d = Object(i.useState)([]),
            p = Object(j.a)(d, 2),
            h = p[0],
            b = p[1],
            f = Object(i.useContext)(ue).adminAccessToken;
          Object(i.useEffect)(
            function () {
              (function () {
                var e = Object(m.a)(
                  u.a.mark(function e() {
                    var t, a;
                    return u.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              G(f).then(function (e) {
                                return e;
                              })
                            );
                          case 2:
                            (t = e.sent),
                              console.log(t),
                              200 === t.status
                                ? ((a = t.data.data.map(function (e) {
                                    return {
                                      firstName: e.name && e.name.split(' ')[0],
                                      lastName: e.name && e.name.split(' ')[1],
                                      phoneNumber: '0'.concat(e.phone_number),
                                      country: e.countryName,
                                    };
                                  })),
                                  b(a))
                                : je(!1, 'Failed to Fetch Buyer', t.message);
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [f],
          );
          var O = {
              selectedRowKeys: a,
              onChange: function (e) {
                console.log('selectedRowKeys changed: ', e), c(e);
              },
            },
            x = [
              {
                title: 'First Name',
                dataIndex: 'firstName',
                key: 'firstName',
                sorter: {
                  compare: function (e, t) {
                    return e.firstName.length - t.firstName.length;
                  },
                },
              },
              {
                title: 'Last Name',
                dataIndex: 'lastName',
                key: 'lastName',
                sorter: {
                  compare: function (e, t) {
                    return e.lastName.length - t.lastName.length;
                  },
                },
              },
              {
                title: 'Phone Number',
                dataIndex: 'phoneNumber',
                key: 'phoneNumber',
              },
              {
                title: 'Country',
                dataIndex: 'country',
                key: 'country',
                sorter: {
                  compare: function (e, t) {
                    return e.country.length - t.country.length;
                  },
                },
              },
              {
                title: 'Action',
                dataIndex: 'action',
                key: 'action',
                render: function () {
                  return Object(n.jsx)(n.Fragment, {
                    children: Object(n.jsxs)(ua.b, {
                      split: Object(n.jsx)(tt.a, { type: 'vertical' }),
                      children: [
                        Object(n.jsx)('div', {
                          onClick: function () {
                            return l(!s);
                          },
                          children: Object(n.jsx)(ma.a, {
                            title: 'Disable Buyer',
                            children: Object(n.jsx)(ba.a, {
                              style: { fontSize: '1.25rem' },
                              disabled: s,
                            }),
                          }),
                        }),
                        Object(n.jsx)('div', {
                          children: Object(n.jsx)(ma.a, {
                            title: 'Delete Buyer',
                            color: 'red',
                            children: Object(n.jsx)(fa.a, {
                              style: { fontSize: '1.25rem', color: '#ff0000' },
                            }),
                          }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ];
          return Object(n.jsx)(Be.a, {
            rowSelection: O,
            dataSource: h,
            columns: x,
          });
        },
        va = function () {
          return Object(n.jsx)(n.Fragment, {
            children: Object(n.jsxs)(I, {
              title: 'Buyers',
              styles: { minHeight: '90vh', overflowY: 'auto' },
              children: [Object(n.jsx)(tt.a, {}), Object(n.jsx)(ya, {})],
            }),
          });
        },
        _a = function () {
          var e = Object(i.useState)([]),
            t = Object(j.a)(e, 2),
            a = t[0],
            c = t[1],
            r = Object(i.useContext)(ue).adminAccessToken;
          Object(i.useEffect)(function () {
            (function () {
              var e = Object(m.a)(
                u.a.mark(function e() {
                  var t, a, n, i;
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            ee(r).then(function (e) {
                              return e;
                            })
                          );
                        case 2:
                          200 === (t = e.sent).status
                            ? ((a = t.data.data
                                .map(function (e) {
                                  return {
                                    key: e.user_id,
                                    name: e.name,
                                    platform: e.platform_name,
                                    region: e.platform_region,
                                    phone_number: '0'.concat(e.phone_number),
                                  };
                                })
                                .filter(function (e) {
                                  return null !== e.name;
                                })),
                              c(a),
                              console.log(a))
                            : 'Request failed with status code 401' ===
                              t.message
                            ? ((n = sessionStorage.getItem('refreshToken')),
                              (i = { refresh_token: n }),
                              (function () {
                                var e = Object(m.a)(
                                  u.a.mark(function e() {
                                    var t;
                                    return u.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2),
                                              te(i).then(function (e) {
                                                return e;
                                              })
                                            );
                                          case 2:
                                            201 === (t = e.sent).status
                                              ? (sessionStorage.setItem(
                                                  'accessToken',
                                                  t.data.data.token,
                                                ),
                                                sessionStorage.setItem(
                                                  'refreshToken',
                                                  t.data.data.refreshToken,
                                                ),
                                                (function () {
                                                  var e = Object(m.a)(
                                                    u.a.mark(function e() {
                                                      var a, n;
                                                      return u.a.wrap(function (
                                                        e,
                                                      ) {
                                                        for (;;)
                                                          switch (
                                                            (e.prev = e.next)
                                                          ) {
                                                            case 0:
                                                              return (
                                                                (e.next = 2),
                                                                ee(
                                                                  t.data.data
                                                                    .token,
                                                                ).then(
                                                                  function (e) {
                                                                    return e;
                                                                  },
                                                                )
                                                              );
                                                            case 2:
                                                              200 ===
                                                              (a = e.sent)
                                                                .status
                                                                ? ((n = a.data.data
                                                                    .map(
                                                                      function (
                                                                        e,
                                                                      ) {
                                                                        return {
                                                                          key:
                                                                            e.user_id,
                                                                          name:
                                                                            e.name,
                                                                          platform:
                                                                            e.platform_name,
                                                                          region:
                                                                            e.platform_region,
                                                                          phone_number:
                                                                            e.phone_number,
                                                                        };
                                                                      },
                                                                    )
                                                                    .filter(
                                                                      function (
                                                                        e,
                                                                      ) {
                                                                        return (
                                                                          null !==
                                                                          e.name
                                                                        );
                                                                      },
                                                                    )),
                                                                  c(n),
                                                                  console.log(
                                                                    n,
                                                                  ))
                                                                : je(
                                                                    !1,
                                                                    'Fail to fetch Leader',
                                                                    a.message,
                                                                  );
                                                            case 4:
                                                            case 'end':
                                                              return e.stop();
                                                          }
                                                      },
                                                      e);
                                                    }),
                                                  );
                                                  return function () {
                                                    return e.apply(
                                                      this,
                                                      arguments,
                                                    );
                                                  };
                                                })()())
                                              : je(
                                                  !1,
                                                  'Fail to fetch Leader',
                                                  t,
                                                );
                                          case 4:
                                          case 'end':
                                            return e.stop();
                                        }
                                    }, e);
                                  }),
                                );
                                return function () {
                                  return e.apply(this, arguments);
                                };
                              })()())
                            : je(!1, 'Fail to fetch Leader', t.message);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []);
          var o = [
            { title: 'Name', dataIndex: 'name', key: 'name' },
            {
              title: 'Phone Number',
              dataIndex: 'phone_number',
              key: 'phone_number',
              sorter: {
                compare: function (e, t) {
                  return e.phone_number.length - t.phone_number.length;
                },
              },
            },
            {
              title: 'Platform',
              dataIndex: 'platform',
              key: 'platform',
              sorter: {
                compare: function (e, t) {
                  return e.platform.length - t.platform.length;
                },
              },
            },
            {
              title: 'Region',
              dataIndex: 'region',
              key: 'region',
              sorter: {
                compare: function (e, t) {
                  return e.region.length - t.region.length;
                },
              },
            },
            {
              title: 'Action',
              dataIndex: 'action',
              key: 'action',
              render: function () {
                return Object(n.jsx)(n.Fragment, {
                  children: Object(n.jsxs)(ua.b, {
                    split: Object(n.jsx)(tt.a, { type: 'vertical' }),
                    children: [
                      Object(n.jsx)('div', {
                        children: Object(n.jsx)(ma.a, {
                          title: 'Edit',
                          children: Object(n.jsx)(pa.a, {
                            style: { fontSize: '1.25rem' },
                          }),
                        }),
                      }),
                      Object(n.jsx)('div', {
                        children: Object(n.jsx)(ma.a, {
                          title: 'Disable Leader',
                          children: Object(n.jsx)(ba.a, {
                            style: { fontSize: '1.25rem' },
                          }),
                        }),
                      }),
                      Object(n.jsx)('div', {
                        children: Object(n.jsx)(ma.a, {
                          title: 'Delete Leader',
                          color: 'red',
                          children: Object(n.jsx)(fa.a, {
                            style: { fontSize: '1.25rem', color: '#ff0000' },
                          }),
                        }),
                      }),
                    ],
                  }),
                });
              },
            },
          ];
          return Object(n.jsx)(Be.a, { dataSource: a, columns: o });
        },
        Sa = function () {
          return Object(n.jsx)(n.Fragment, {
            children: Object(n.jsxs)(I, {
              title: 'Leaders',
              styles: { minHeight: '90vh', overflowY: 'auto' },
              children: [Object(n.jsx)(tt.a, {}), Object(n.jsx)(_a, {})],
            }),
          });
        },
        Na = [
          { name: 'Afghanistan', dial_code: '+93', code: 'AF' },
          { name: 'Aland Islands', dial_code: '+358', code: 'AX' },
          { name: 'Albania', dial_code: '+355', code: 'AL' },
          { name: 'Algeria', dial_code: '+213', code: 'DZ' },
          { name: 'AmericanSamoa', dial_code: '+1 684', code: 'AS' },
          { name: 'Andorra', dial_code: '+376', code: 'AD' },
          { name: 'Angola', dial_code: '+244', code: 'AO' },
          { name: 'Anguilla', dial_code: '+1 264', code: 'AI' },
          { name: 'Antarctica', dial_code: '+672', code: 'AQ' },
          { name: 'Antigua and Barbuda', dial_code: '+1268', code: 'AG' },
          { name: 'Argentina', dial_code: '+54', code: 'AR' },
          { name: 'Armenia', dial_code: '+374', code: 'AM' },
          { name: 'Aruba', dial_code: '+297', code: 'AW' },
          { name: 'Australia', dial_code: '+61', code: 'AU' },
          { name: 'Austria', dial_code: '+43', code: 'AT' },
          { name: 'Azerbaijan', dial_code: '+994', code: 'AZ' },
          { name: 'Bahamas', dial_code: '+1 242', code: 'BS' },
          { name: 'Bahrain', dial_code: '+973', code: 'BH' },
          { name: 'Bangladesh', dial_code: '+880', code: 'BD' },
          { name: 'Barbados', dial_code: '+1 246', code: 'BB' },
          { name: 'Belarus', dial_code: '+375', code: 'BY' },
          { name: 'Belgium', dial_code: '+32', code: 'BE' },
          { name: 'Belize', dial_code: '+501', code: 'BZ' },
          { name: 'Benin', dial_code: '+229', code: 'BJ' },
          { name: 'Bermuda', dial_code: '+1 441', code: 'BM' },
          { name: 'Bhutan', dial_code: '+975', code: 'BT' },
          {
            name: 'Bolivia, Plurinational State of',
            dial_code: '+591',
            code: 'BO',
          },
          { name: 'Bosnia and Herzegovina', dial_code: '+387', code: 'BA' },
          { name: 'Botswana', dial_code: '+267', code: 'BW' },
          { name: 'Brazil', dial_code: '+55', code: 'BR' },
          {
            name: 'British Indian Ocean Territory',
            dial_code: '+246',
            code: 'IO',
          },
          { name: 'Brunei Darussalam', dial_code: '+673', code: 'BN' },
          { name: 'Bulgaria', dial_code: '+359', code: 'BG' },
          { name: 'Burkina Faso', dial_code: '+226', code: 'BF' },
          { name: 'Burundi', dial_code: '+257', code: 'BI' },
          { name: 'Cambodia', dial_code: '+855', code: 'KH' },
          { name: 'Cameroon', dial_code: '+237', code: 'CM' },
          { name: 'Canada', dial_code: '+1', code: 'CA' },
          { name: 'Cape Verde', dial_code: '+238', code: 'CV' },
          { name: 'Cayman Islands', dial_code: '+ 345', code: 'KY' },
          { name: 'Central African Republic', dial_code: '+236', code: 'CF' },
          { name: 'Chad', dial_code: '+235', code: 'TD' },
          { name: 'Chile', dial_code: '+56', code: 'CL' },
          { name: 'China', dial_code: '+86', code: 'CN' },
          { name: 'Christmas Island', dial_code: '+61', code: 'CX' },
          { name: 'Cocos (Keeling) Islands', dial_code: '+61', code: 'CC' },
          { name: 'Colombia', dial_code: '+57', code: 'CO' },
          { name: 'Comoros', dial_code: '+269', code: 'KM' },
          { name: 'Congo', dial_code: '+242', code: 'CG' },
          {
            name: 'Congo, The Democratic Republic of the Congo',
            dial_code: '+243',
            code: 'CD',
          },
          { name: 'Cook Islands', dial_code: '+682', code: 'CK' },
          { name: 'Costa Rica', dial_code: '+506', code: 'CR' },
          { name: "Cote d'Ivoire", dial_code: '+225', code: 'CI' },
          { name: 'Croatia', dial_code: '+385', code: 'HR' },
          { name: 'Cuba', dial_code: '+53', code: 'CU' },
          { name: 'Cyprus', dial_code: '+357', code: 'CY' },
          { name: 'Czech Republic', dial_code: '+420', code: 'CZ' },
          { name: 'Denmark', dial_code: '+45', code: 'DK' },
          { name: 'Djibouti', dial_code: '+253', code: 'DJ' },
          { name: 'Dominica', dial_code: '+1 767', code: 'DM' },
          { name: 'Dominican Republic', dial_code: '+1 849', code: 'DO' },
          { name: 'Ecuador', dial_code: '+593', code: 'EC' },
          { name: 'Egypt', dial_code: '+20', code: 'EG' },
          { name: 'El Salvador', dial_code: '+503', code: 'SV' },
          { name: 'Equatorial Guinea', dial_code: '+240', code: 'GQ' },
          { name: 'Eritrea', dial_code: '+291', code: 'ER' },
          { name: 'Estonia', dial_code: '+372', code: 'EE' },
          { name: 'Ethiopia', dial_code: '+251', code: 'ET' },
          {
            name: 'Falkland Islands (Malvinas)',
            dial_code: '+500',
            code: 'FK',
          },
          { name: 'Faroe Islands', dial_code: '+298', code: 'FO' },
          { name: 'Fiji', dial_code: '+679', code: 'FJ' },
          { name: 'Finland', dial_code: '+358', code: 'FI' },
          { name: 'France', dial_code: '+33', code: 'FR' },
          { name: 'French Guiana', dial_code: '+594', code: 'GF' },
          { name: 'French Polynesia', dial_code: '+689', code: 'PF' },
          { name: 'Gabon', dial_code: '+241', code: 'GA' },
          { name: 'Gambia', dial_code: '+220', code: 'GM' },
          { name: 'Georgia', dial_code: '+995', code: 'GE' },
          { name: 'Germany', dial_code: '+49', code: 'DE' },
          { name: 'Ghana', dial_code: '+233', code: 'GH' },
          { name: 'Gibraltar', dial_code: '+350', code: 'GI' },
          { name: 'Greece', dial_code: '+30', code: 'GR' },
          { name: 'Greenland', dial_code: '+299', code: 'GL' },
          { name: 'Grenada', dial_code: '+1 473', code: 'GD' },
          { name: 'Guadeloupe', dial_code: '+590', code: 'GP' },
          { name: 'Guam', dial_code: '+1 671', code: 'GU' },
          { name: 'Guatemala', dial_code: '+502', code: 'GT' },
          { name: 'Guernsey', dial_code: '+44', code: 'GG' },
          { name: 'Guinea', dial_code: '+224', code: 'GN' },
          { name: 'Guinea-Bissau', dial_code: '+245', code: 'GW' },
          { name: 'Guyana', dial_code: '+595', code: 'GY' },
          { name: 'Haiti', dial_code: '+509', code: 'HT' },
          {
            name: 'Holy See (Vatican City State)',
            dial_code: '+379',
            code: 'VA',
          },
          { name: 'Honduras', dial_code: '+504', code: 'HN' },
          { name: 'Hong Kong', dial_code: '+852', code: 'HK' },
          { name: 'Hungary', dial_code: '+36', code: 'HU' },
          { name: 'Iceland', dial_code: '+354', code: 'IS' },
          { name: 'India', dial_code: '+91', code: 'IN' },
          { name: 'Indonesia', dial_code: '+62', code: 'ID' },
          {
            name: 'Iran, Islamic Republic of Persian Gulf',
            dial_code: '+98',
            code: 'IR',
          },
          { name: 'Iraq', dial_code: '+964', code: 'IQ' },
          { name: 'Ireland', dial_code: '+353', code: 'IE' },
          { name: 'Isle of Man', dial_code: '+44', code: 'IM' },
          { name: 'Israel', dial_code: '+972', code: 'IL' },
          { name: 'Italy', dial_code: '+39', code: 'IT' },
          { name: 'Jamaica', dial_code: '+1 876', code: 'JM' },
          { name: 'Japan', dial_code: '+81', code: 'JP' },
          { name: 'Jersey', dial_code: '+44', code: 'JE' },
          { name: 'Jordan', dial_code: '+962', code: 'JO' },
          { name: 'Kazakhstan', dial_code: '+7 7', code: 'KZ' },
          { name: 'Kenya', dial_code: '+254', code: 'KE' },
          { name: 'Kiribati', dial_code: '+686', code: 'KI' },
          {
            name: "Korea, Democratic People's Republic of Korea",
            dial_code: '+850',
            code: 'KP',
          },
          {
            name: 'Korea, Republic of South Korea',
            dial_code: '+82',
            code: 'KR',
          },
          { name: 'Kuwait', dial_code: '+965', code: 'KW' },
          { name: 'Kyrgyzstan', dial_code: '+996', code: 'KG' },
          { name: 'Laos', dial_code: '+856', code: 'LA' },
          { name: 'Latvia', dial_code: '+371', code: 'LV' },
          { name: 'Lebanon', dial_code: '+961', code: 'LB' },
          { name: 'Lesotho', dial_code: '+266', code: 'LS' },
          { name: 'Liberia', dial_code: '+231', code: 'LR' },
          { name: 'Libyan Arab Jamahiriya', dial_code: '+218', code: 'LY' },
          { name: 'Liechtenstein', dial_code: '+423', code: 'LI' },
          { name: 'Lithuania', dial_code: '+370', code: 'LT' },
          { name: 'Luxembourg', dial_code: '+352', code: 'LU' },
          { name: 'Macao', dial_code: '+853', code: 'MO' },
          { name: 'Macedonia', dial_code: '+389', code: 'MK' },
          { name: 'Madagascar', dial_code: '+261', code: 'MG' },
          { name: 'Malawi', dial_code: '+265', code: 'MW' },
          { name: 'Malaysia', dial_code: '+60', code: 'MY' },
          { name: 'Maldives', dial_code: '+960', code: 'MV' },
          { name: 'Mali', dial_code: '+223', code: 'ML' },
          { name: 'Malta', dial_code: '+356', code: 'MT' },
          { name: 'Marshall Islands', dial_code: '+692', code: 'MH' },
          { name: 'Martinique', dial_code: '+596', code: 'MQ' },
          { name: 'Mauritania', dial_code: '+222', code: 'MR' },
          { name: 'Mauritius', dial_code: '+230', code: 'MU' },
          { name: 'Mayotte', dial_code: '+262', code: 'YT' },
          { name: 'Mexico', dial_code: '+52', code: 'MX' },
          {
            name: 'Micronesia, Federated States of Micronesia',
            dial_code: '+691',
            code: 'FM',
          },
          { name: 'Moldova', dial_code: '+373', code: 'MD' },
          { name: 'Monaco', dial_code: '+377', code: 'MC' },
          { name: 'Mongolia', dial_code: '+976', code: 'MN' },
          { name: 'Montenegro', dial_code: '+382', code: 'ME' },
          { name: 'Montserrat', dial_code: '+1664', code: 'MS' },
          { name: 'Morocco', dial_code: '+212', code: 'MA' },
          { name: 'Mozambique', dial_code: '+258', code: 'MZ' },
          { name: 'Myanmar', dial_code: '+95', code: 'MM' },
          { name: 'Namibia', dial_code: '+264', code: 'NA' },
          { name: 'Nauru', dial_code: '+674', code: 'NR' },
          { name: 'Nepal', dial_code: '+977', code: 'NP' },
          { name: 'Netherlands', dial_code: '+31', code: 'NL' },
          { name: 'Netherlands Antilles', dial_code: '+599', code: 'AN' },
          { name: 'New Caledonia', dial_code: '+687', code: 'NC' },
          { name: 'New Zealand', dial_code: '+64', code: 'NZ' },
          { name: 'Nicaragua', dial_code: '+505', code: 'NI' },
          { name: 'Niger', dial_code: '+227', code: 'NE' },
          { name: 'Nigeria', dial_code: '+234', code: 'NG' },
          { name: 'Niue', dial_code: '+683', code: 'NU' },
          { name: 'Norfolk Island', dial_code: '+672', code: 'NF' },
          { name: 'Northern Mariana Islands', dial_code: '+1 670', code: 'MP' },
          { name: 'Norway', dial_code: '+47', code: 'NO' },
          { name: 'Oman', dial_code: '+968', code: 'OM' },
          { name: 'Pakistan', dial_code: '+92', code: 'PK' },
          { name: 'Palau', dial_code: '+680', code: 'PW' },
          {
            name: 'Palestinian Territory, Occupied',
            dial_code: '+970',
            code: 'PS',
          },
          { name: 'Panama', dial_code: '+507', code: 'PA' },
          { name: 'Papua New Guinea', dial_code: '+675', code: 'PG' },
          { name: 'Paraguay', dial_code: '+595', code: 'PY' },
          { name: 'Peru', dial_code: '+51', code: 'PE' },
          { name: 'Philippines', dial_code: '+63', code: 'PH' },
          { name: 'Pitcairn', dial_code: '+872', code: 'PN' },
          { name: 'Poland', dial_code: '+48', code: 'PL' },
          { name: 'Portugal', dial_code: '+351', code: 'PT' },
          { name: 'Puerto Rico', dial_code: '+1 939', code: 'PR' },
          { name: 'Qatar', dial_code: '+974', code: 'QA' },
          { name: 'Romania', dial_code: '+40', code: 'RO' },
          { name: 'Russia', dial_code: '+7', code: 'RU' },
          { name: 'Rwanda', dial_code: '+250', code: 'RW' },
          { name: 'Reunion', dial_code: '+262', code: 'RE' },
          { name: 'Saint Barthelemy', dial_code: '+590', code: 'BL' },
          {
            name: 'Saint Helena, Ascension and Tristan Da Cunha',
            dial_code: '+290',
            code: 'SH',
          },
          { name: 'Saint Kitts and Nevis', dial_code: '+1 869', code: 'KN' },
          { name: 'Saint Lucia', dial_code: '+1 758', code: 'LC' },
          { name: 'Saint Martin', dial_code: '+590', code: 'MF' },
          { name: 'Saint Pierre and Miquelon', dial_code: '+508', code: 'PM' },
          {
            name: 'Saint Vincent and the Grenadines',
            dial_code: '+1 784',
            code: 'VC',
          },
          { name: 'Samoa', dial_code: '+685', code: 'WS' },
          { name: 'San Marino', dial_code: '+378', code: 'SM' },
          { name: 'Sao Tome and Principe', dial_code: '+239', code: 'ST' },
          { name: 'Saudi Arabia', dial_code: '+966', code: 'SA' },
          { name: 'Senegal', dial_code: '+221', code: 'SN' },
          { name: 'Serbia', dial_code: '+381', code: 'RS' },
          { name: 'Seychelles', dial_code: '+248', code: 'SC' },
          { name: 'Sierra Leone', dial_code: '+232', code: 'SL' },
          { name: 'Singapore', dial_code: '+65', code: 'SG' },
          { name: 'Slovakia', dial_code: '+421', code: 'SK' },
          { name: 'Slovenia', dial_code: '+386', code: 'SI' },
          { name: 'Solomon Islands', dial_code: '+677', code: 'SB' },
          { name: 'Somalia', dial_code: '+252', code: 'SO' },
          { name: 'South Africa', dial_code: '+27', code: 'ZA' },
          {
            name: 'South Georgia and the South Sandwich Islands',
            dial_code: '+500',
            code: 'GS',
          },
          { name: 'Spain', dial_code: '+34', code: 'ES' },
          { name: 'Sri Lanka', dial_code: '+94', code: 'LK' },
          { name: 'Sudan', dial_code: '+249', code: 'SD' },
          { name: 'Suriname', dial_code: '+597', code: 'SR' },
          { name: 'Svalbard and Jan Mayen', dial_code: '+47', code: 'SJ' },
          { name: 'Swaziland', dial_code: '+268', code: 'SZ' },
          { name: 'Sweden', dial_code: '+46', code: 'SE' },
          { name: 'Switzerland', dial_code: '+41', code: 'CH' },
          { name: 'Syrian Arab Republic', dial_code: '+963', code: 'SY' },
          { name: 'Taiwan', dial_code: '+886', code: 'TW' },
          { name: 'Tajikistan', dial_code: '+992', code: 'TJ' },
          {
            name: 'Tanzania, United Republic of Tanzania',
            dial_code: '+255',
            code: 'TZ',
          },
          { name: 'Thailand', dial_code: '+66', code: 'TH' },
          { name: 'Timor-Leste', dial_code: '+670', code: 'TL' },
          { name: 'Togo', dial_code: '+228', code: 'TG' },
          { name: 'Tokelau', dial_code: '+690', code: 'TK' },
          { name: 'Tonga', dial_code: '+676', code: 'TO' },
          { name: 'Trinidad and Tobago', dial_code: '+1 868', code: 'TT' },
          { name: 'Tunisia', dial_code: '+216', code: 'TN' },
          { name: 'Turkey', dial_code: '+90', code: 'TR' },
          { name: 'Turkmenistan', dial_code: '+993', code: 'TM' },
          { name: 'Turks and Caicos Islands', dial_code: '+1 649', code: 'TC' },
          { name: 'Tuvalu', dial_code: '+688', code: 'TV' },
          { name: 'Uganda', dial_code: '+256', code: 'UG' },
          { name: 'Ukraine', dial_code: '+380', code: 'UA' },
          { name: 'United Arab Emirates', dial_code: '+971', code: 'AE' },
          { name: 'United Kingdom', dial_code: '+44', code: 'GB' },
          { name: 'United States', dial_code: '+1', code: 'US' },
          { name: 'Uruguay', dial_code: '+598', code: 'UY' },
          { name: 'Uzbekistan', dial_code: '+998', code: 'UZ' },
          { name: 'Vanuatu', dial_code: '+678', code: 'VU' },
          {
            name: 'Venezuela, Bolivarian Republic of Venezuela',
            dial_code: '+58',
            code: 'VE',
          },
          { name: 'Vietnam', dial_code: '+84', code: 'VN' },
          { name: 'Virgin Islands, British', dial_code: '+1 284', code: 'VG' },
          { name: 'Virgin Islands, U.S.', dial_code: '+1 340', code: 'VI' },
          { name: 'Wallis and Futuna', dial_code: '+681', code: 'WF' },
          { name: 'Yemen', dial_code: '+967', code: 'YE' },
          { name: 'Zambia', dial_code: '+260', code: 'ZM' },
          { name: 'Zimbabwe', dial_code: '+263', code: 'ZW' },
        ],
        Ta = (a(434), fe.a.Option),
        ka = function () {
          var e = Object(i.useState)(!1),
            t = Object(j.a)(e, 2),
            a = t[0],
            c = t[1],
            r = Object(i.useState)([]),
            o = Object(j.a)(r, 2),
            s = o[0],
            d = o[1],
            h = Object(i.useState)([]),
            b = Object(j.a)(h, 2),
            f = b[0],
            O = b[1],
            x = Object(i.useState)(!1),
            g = Object(j.a)(x, 2),
            y = g[0],
            v = g[1],
            _ = Object(i.useState)([]),
            S = Object(j.a)(_, 2),
            N = S[0],
            k = S[1],
            C = Object(Ae.a)({ mode: 'onBlur' }),
            w = C.register,
            I = C.handleSubmit,
            z = C.setValue,
            A = C.errors,
            q = C.clearErrors,
            B = Object(i.useContext)(ue),
            M = B.adminAccessToken,
            R = B.userInfo;
          Object(i.useEffect)(function () {
            (function () {
              var e = Object(m.a)(
                u.a.mark(function e() {
                  var t;
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Y().then(function (e) {
                              return e;
                            })
                          );
                        case 2:
                          (t = e.sent), k(t.data.data.platform), console.log(t);
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []),
            Object(i.useEffect)(
              function () {
                w('firstname', { required: !0 }),
                  w('lastname', { required: !0 }),
                  w('platform', { required: !0 }),
                  w('phone_number', { required: !0 }),
                  w('experience', { required: !0 }),
                  w('category', { required: !0 }),
                  w('scale_status', { required: !0 }),
                  w('address', { required: !0 }),
                  w('website'),
                  w('tbs_certificate_num', { required: a }),
                  w('tbs_certificate_img', { required: a }),
                  w('id_type', { required: !0 }),
                  w('id_num', { required: !0 }),
                  w('idImage', { required: !0 });
              },
              [a, w],
            );
          var L = {
              name: 'file',
              onRemove: function (e) {
                var t = s.indexOf(e),
                  a = s.slice();
                a.splice(t, 1), d(a);
              },
              beforeUpload: function (e) {
                return d([].concat(Object(be.a)(s), [e])), !1;
              },
              idFileList: s,
            },
            D = {
              name: 'file',
              onRemove: function (e) {
                var t = f.indexOf(e),
                  a = f.slice();
                a.splice(t, 1), O(a);
              },
              beforeUpload: function (e) {
                return O([].concat(Object(be.a)(f), [e])), !1;
              },
              TBSFileList: f,
            },
            F = function () {
              document.querySelectorAll('input')[0].click();
            },
            G = function (e) {
              q(e);
            };
          return Object(n.jsxs)('div', {
            style: { minHeight: '90vh', marginTop: '2rem' },
            children: [
              Object(n.jsx)('div', {
                className: 'form-header',
                children: Object(n.jsx)('h1', { children: 'Add Sellers' }),
              }),
              Object(n.jsxs)('form', {
                className: 'add-seller-form-container',
                onSubmit: I(function (e) {
                  console.log(e);
                  var t = {
                    user: {
                      dial_code: '+255',
                      phone_number: e.phone_number,
                      name: ''.concat(e.firstname, ' ').concat(e.lastname),
                      role: 'seller',
                    },
                    seller: {
                      first_time: e.firstname,
                      last_name: e.lastname,
                      application_type: e.scale_status,
                      category: e.category,
                      address: e.address,
                      website: e.website,
                      grade: '2',
                      experience: e.experience,
                      tbs_certification_number: e.tbs_certificate_num,
                      certification_number: e.id_num,
                      card_type: e.id_type,
                      variety_name: 'kyela',
                    },
                    certificate: e.tbs_certificate_img,
                    card: e.idImage,
                  };
                  v(!0),
                    (function () {
                      var a = Object(m.a)(
                        u.a.mark(function a() {
                          var n, i, c;
                          return u.a.wrap(function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (a.next = 2),
                                    E(t, e.platform, M).then(function (e) {
                                      return e;
                                    })
                                  );
                                case 2:
                                  (n = a.sent),
                                    v(!1),
                                    console.log(n),
                                    200 === n.status
                                      ? (Object(l.d)(-1),
                                        je(
                                          !0,
                                          'Seller Account Created Successfully',
                                        ))
                                      : 'Request failed with status code 401' ===
                                        n.message
                                      ? ((i = sessionStorage.getItem(
                                          'refreshToken',
                                        )),
                                        (c = { refresh_token: i }),
                                        (function () {
                                          var e = Object(m.a)(
                                            u.a.mark(function e() {
                                              var a;
                                              return u.a.wrap(function (e) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                      return (
                                                        (e.next = 2),
                                                        te(c).then(function (
                                                          e,
                                                        ) {
                                                          return e;
                                                        })
                                                      );
                                                    case 2:
                                                      201 ===
                                                        (a = e.sent).status &&
                                                        (sessionStorage.setItem(
                                                          'accessToken',
                                                          a.data.data.token,
                                                        ),
                                                        sessionStorage.setItem(
                                                          'refreshToken',
                                                          a.data.data
                                                            .refreshToken,
                                                        ),
                                                        (function () {
                                                          var e = Object(m.a)(
                                                            u.a.mark(
                                                              function e() {
                                                                return u.a.wrap(
                                                                  function (e) {
                                                                    for (;;)
                                                                      switch (
                                                                        (e.prev =
                                                                          e.next)
                                                                      ) {
                                                                        case 0:
                                                                          return (
                                                                            (e.next = 2),
                                                                            E(
                                                                              t,
                                                                              R.id,
                                                                              a
                                                                                .data
                                                                                .data
                                                                                .token,
                                                                            ).then(
                                                                              function (
                                                                                e,
                                                                              ) {
                                                                                return e;
                                                                              },
                                                                            )
                                                                          );
                                                                        case 2:
                                                                          200 ===
                                                                            e
                                                                              .sent
                                                                              .status &&
                                                                            (Object(
                                                                              l.d,
                                                                            )(
                                                                              -1,
                                                                            ),
                                                                            je(
                                                                              !0,
                                                                              'Seller Account Created Successfully',
                                                                            ));
                                                                        case 4:
                                                                        case 'end':
                                                                          return e.stop();
                                                                      }
                                                                  },
                                                                  e,
                                                                );
                                                              },
                                                            ),
                                                          );
                                                          return function () {
                                                            return e.apply(
                                                              this,
                                                              arguments,
                                                            );
                                                          };
                                                        })()());
                                                    case 4:
                                                    case 'end':
                                                      return e.stop();
                                                  }
                                              }, e);
                                            }),
                                          );
                                          return function () {
                                            return e.apply(this, arguments);
                                          };
                                        })()())
                                      : (je(
                                          !1,
                                          'Fail to Create Seller Account',
                                          n.message,
                                        ),
                                        v(!1));
                                case 6:
                                case 'end':
                                  return a.stop();
                              }
                          }, a);
                        }),
                      );
                      return function () {
                        return a.apply(this, arguments);
                      };
                    })()();
                }),
                children: [
                  Object(n.jsx)(tt.a, { style: { marginTop: 0 } }),
                  Object(n.jsxs)('div', {
                    className: 'add-sellers-name',
                    children: [
                      Object(n.jsxs)('div', {
                        className: 'add-sellers-name_item',
                        children: [
                          Object(n.jsx)(ze.a, {
                            placeholder: 'First Name',
                            size: 'large',
                            onChange: function (e) {
                              z('firstname', e.target.value);
                            },
                            onFocus: function () {
                              return G('firstname');
                            },
                          }),
                          Object(n.jsx)('span', {
                            style: { fontSize: '1rem', color: 'red' },
                            children: A.firstname && 'First name is required',
                          }),
                        ],
                      }),
                      Object(n.jsxs)('div', {
                        className: 'add-sellers-name_item',
                        children: [
                          Object(n.jsx)(ze.a, {
                            placeholder: 'Last Name',
                            size: 'large',
                            onChange: function (e) {
                              z('lastname', e.target.value);
                            },
                            onFocus: function () {
                              return G('lastname');
                            },
                          }),
                          Object(n.jsx)('span', {
                            style: { fontSize: '1rem', color: 'red' },
                            children: A.lastname && 'Last name is required',
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(n.jsx)('div', {
                    className: 'add-seller-input',
                    children: Object(n.jsx)(fe.a, {
                      size: 'large',
                      showSearch: !0,
                      style: { width: '100%' },
                      placeholder: 'Select Country',
                      value: 'Tanzania',
                      disabled: !0,
                      children: Na.map(function (e) {
                        return Object(n.jsx)(
                          Ta,
                          { value: e.code, children: e.name },
                          e.code,
                        );
                      }),
                    }),
                  }),
                  Object(n.jsx)('div', {
                    className: 'add-sellers-name',
                    children: Object(n.jsxs)('div', {
                      className: 'add-sellers-name_item',
                      children: [
                        Object(n.jsx)(fe.a, {
                          style: { width: '100%' },
                          size: 'large',
                          placeholder: 'Platform',
                          onChange: function (e) {
                            z('platform', e);
                          },
                          onFocus: function () {
                            return G('platform');
                          },
                          children: N.map(function (e) {
                            return Object(n.jsx)(
                              Ta,
                              { value: e.id, children: e.platform_name },
                              e.id,
                            );
                          }),
                        }),
                        Object(n.jsx)('span', {
                          style: { fontSize: '1rem', color: 'red' },
                          children: A.platform && 'Platform is required',
                        }),
                      ],
                    }),
                  }),
                  Object(n.jsxs)('div', {
                    className: 'add-seller-input',
                    children: [
                      Object(n.jsx)(ze.a, {
                        addonBefore: '+255',
                        placeholder: 'PhoneNumber',
                        maxLength: 9,
                        size: 'large',
                        onChange: function (e) {
                          z('phone_number', e.target.value);
                        },
                        onFocus: function () {
                          return G('phone_number');
                        },
                      }),
                      Object(n.jsx)('span', {
                        style: { fontSize: '1rem', color: 'red' },
                        children: A.phone_number && 'Phone Number is required',
                      }),
                    ],
                  }),
                  Object(n.jsxs)('div', {
                    className: 'add-seller-input',
                    children: [
                      Object(n.jsxs)(fe.a, {
                        style: { width: '100%' },
                        size: 'large',
                        placeholder: 'Experience',
                        onChange: function (e) {
                          z('experience', e);
                        },
                        onFocus: function () {
                          return G('experience');
                        },
                        children: [
                          Object(n.jsx)(Ta, {
                            value: '0-5',
                            children: '0 - 5 years',
                          }),
                          Object(n.jsx)(Ta, {
                            value: '6-10',
                            children: '6 - 10 years',
                          }),
                          Object(n.jsx)(Ta, {
                            value: '11-20',
                            children: '11 - 20 years',
                          }),
                          Object(n.jsx)(Ta, {
                            value: '21+',
                            children: '21 years - above',
                          }),
                        ],
                      }),
                      Object(n.jsx)('span', {
                        style: { fontSize: '1rem', color: 'red' },
                        children: A.experience && 'Experience is required',
                      }),
                    ],
                  }),
                  Object(n.jsxs)('div', {
                    className: 'add-seller-input',
                    children: [
                      Object(n.jsxs)(fe.a, {
                        style: { width: '100%' },
                        size: 'large',
                        placeholder: 'Applicant Category',
                        onChange: function (e) {
                          z('category', e);
                        },
                        onFocus: function () {
                          return G('category');
                        },
                        children: [
                          Object(n.jsx)(Ta, {
                            value: 'individual',
                            children: 'Individual',
                          }),
                          Object(n.jsx)(Ta, {
                            value: 'association',
                            children: 'Association',
                          }),
                          Object(n.jsx)(Ta, {
                            value: 'company',
                            children: 'Company',
                          }),
                        ],
                      }),
                      Object(n.jsx)('span', {
                        style: { fontSize: '1rem', color: 'red' },
                        children:
                          A.category && 'Applicant category is required',
                      }),
                    ],
                  }),
                  Object(n.jsxs)('div', {
                    className: 'add-seller-input',
                    children: [
                      Object(n.jsxs)(fe.a, {
                        style: { width: '100%' },
                        size: 'large',
                        placeholder: 'Scale Status',
                        onChange: function (e) {
                          z('scale_status', e);
                        },
                        onFocus: function () {
                          return G('scale_status');
                        },
                        children: [
                          Object(n.jsx)(Ta, {
                            value: 'small',
                            children: 'Small',
                          }),
                          Object(n.jsx)(Ta, {
                            value: 'medium',
                            children: 'Medium',
                          }),
                          Object(n.jsx)(Ta, {
                            value: 'large',
                            children: 'Large',
                          }),
                        ],
                      }),
                      Object(n.jsx)('span', {
                        style: { fontSize: '1rem', color: 'red' },
                        children: A.scale_status && 'Scale Status is required',
                      }),
                    ],
                  }),
                  Object(n.jsxs)('div', {
                    className: 'add-seller-input',
                    children: [
                      Object(n.jsx)(ze.a, {
                        placeholder: 'P.O Box Address',
                        size: 'large',
                        onChange: function (e) {
                          z('address', e.target.value);
                        },
                        onFocus: function () {
                          return G('address');
                        },
                      }),
                      Object(n.jsx)('span', {
                        style: { fontSize: '1rem', color: 'red' },
                        children: A.address && 'Address is required',
                      }),
                    ],
                  }),
                  Object(n.jsx)('div', {
                    className: 'add-seller-input',
                    children: Object(n.jsx)(ze.a, {
                      placeholder: 'Website',
                      size: 'large',
                      onChange: function (e) {
                        z('website', e.target.value);
                      },
                    }),
                  }),
                  Object(n.jsxs)('div', {
                    className: 'add-seller-input',
                    children: [
                      Object(n.jsx)('p', {
                        style: { marginLeft: '0.5rem', marginBottom: '0rem' },
                        children: 'TBS Certified?',
                      }),
                      Object(n.jsxs)(P.a.Group, {
                        size: 'large',
                        onChange: function () {
                          return c(!a);
                        },
                        value: a,
                        children: [
                          Object(n.jsx)(P.a, { value: !0, children: 'Yes' }),
                          Object(n.jsx)(P.a, { value: !1, children: 'No' }),
                        ],
                      }),
                    ],
                  }),
                  Object(n.jsxs)('div', {
                    className: 'add-sellers-name',
                    children: [
                      Object(n.jsxs)('div', {
                        className: 'add-sellers-name_item',
                        children: [
                          Object(n.jsx)(ze.a, {
                            placeholder: 'TBS Certification Number',
                            size: 'large',
                            disabled: !a,
                            onChange: function (e) {
                              z('tbs_certificate_num', e.target.value);
                            },
                            onFocus: function () {
                              return G('tbs_certificate_num');
                            },
                          }),
                          Object(n.jsx)('span', {
                            style: { fontSize: '1rem', color: 'red' },
                            children:
                              A.tbs_certificate_num &&
                              'Certificate Number is required',
                          }),
                        ],
                      }),
                      Object(n.jsxs)('div', {
                        className: 'add-sellers-name_item',
                        children: [
                          Object(n.jsx)(
                            gt.a,
                            Object(p.a)(
                              Object(p.a)({}, D),
                              {},
                              {
                                style: { width: '100%' },
                                accept: 'image/*',
                                onChange: function (e) {
                                  return (function (e) {
                                    var t = e.file,
                                      a = new FileReader();
                                    (a.onload = function (e) {
                                      z('tbs_certificate_img', e.target.result);
                                    }),
                                      a.readAsDataURL(t);
                                  })(e);
                                },
                                children: Object(n.jsx)(T.a, {
                                  icon: Object(n.jsx)(yt.a, {}),
                                  size: 'large',
                                  disabled: !a,
                                  onChange: F,
                                  children: 'Attach TBS Certificate Image',
                                }),
                              },
                            ),
                          ),
                          Object(n.jsx)('span', {
                            style: { fontSize: '1rem', color: 'red' },
                            children:
                              A.tbs_certificate_img &&
                              'Platform Image is required',
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(n.jsxs)('div', {
                    className: 'add-seller-input',
                    children: [
                      Object(n.jsxs)(fe.a, {
                        style: { width: '100%' },
                        size: 'large',
                        placeholder: 'Select Your Identification',
                        onChange: function (e) {
                          z('id_type', e);
                        },
                        onFocus: function () {
                          return G('id_type');
                        },
                        children: [
                          Object(n.jsx)(Ta, {
                            value: 'voter',
                            children: 'Voter Id',
                          }),
                          Object(n.jsx)(Ta, {
                            value: 'nida',
                            children: 'National Id',
                          }),
                          Object(n.jsx)(Ta, {
                            value: 'driving-license',
                            children: 'Driving License Id',
                          }),
                        ],
                      }),
                      Object(n.jsx)('span', {
                        style: { fontSize: '1rem', color: 'red' },
                        children:
                          A.id_type && 'Identification Category is required',
                      }),
                    ],
                  }),
                  Object(n.jsxs)('div', {
                    className: 'add-sellers-name',
                    children: [
                      Object(n.jsxs)('div', {
                        className: 'add-sellers-name_item',
                        children: [
                          Object(n.jsx)(ze.a, {
                            placeholder: 'Add Id Number',
                            size: 'large',
                            onChange: function (e) {
                              z('id_num', e.target.value);
                            },
                            onFocus: function () {
                              return G('id_num');
                            },
                          }),
                          Object(n.jsx)('span', {
                            style: { fontSize: '1rem', color: 'red' },
                            children: A.id_num && 'Id Number is required',
                          }),
                        ],
                      }),
                      Object(n.jsx)('div', {
                        className: 'add-sellers-name_item',
                        children: Object(n.jsx)(
                          gt.a,
                          Object(p.a)(
                            Object(p.a)({}, L),
                            {},
                            {
                              style: { width: '100%' },
                              accept: 'image/*',
                              onChange: function (e) {
                                return (function (e) {
                                  console.log(e);
                                  var t = e.file,
                                    a = new FileReader();
                                  (a.onload = function (e) {
                                    z('idImage', e.target.result);
                                  }),
                                    t && t.type.match('image.*')
                                      ? a.readAsDataURL(t)
                                      : console.log(t.type);
                                })(e);
                              },
                              children: Object(n.jsx)(T.a, {
                                icon: Object(n.jsx)(yt.a, {}),
                                size: 'large',
                                onClick: F,
                                children: 'Attach Identification Image',
                              }),
                            },
                          ),
                        ),
                      }),
                    ],
                  }),
                  Object(n.jsx)('div', {
                    className: 'add-seller-input',
                    children: Object(n.jsx)(T.a, {
                      type: 'primary',
                      size: 'large',
                      htmlType: 'submit',
                      loading: y,
                      children: 'Submit',
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Ca = a(486),
        wa = function () {
          return Object(n.jsxs)(I, {
            title: 'Seller Information',
            backButton: !0,
            styles: { minHeight: '90vh' },
            children: [
              Object(n.jsx)(tt.a, {}),
              Object(n.jsxs)('div', {
                className: 'Tender-request-container',
                children: [
                  Object(n.jsx)('h2', { children: 'Basic Information' }),
                  Object(n.jsxs)('div', {
                    className: 'tender-request-info',
                    children: [
                      Object(n.jsxs)('div', {
                        className: 'detail-item',
                        children: [
                          Object(n.jsx)('div', {
                            className: 'item-part',
                            children: Object(n.jsx)('h3', {
                              className: 'item-part-title',
                              children: 'Full Name:',
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'item-info',
                            children: Object(n.jsx)('h3', {
                              className: 'item-info-detail',
                              children: 'Juma Alfred Ally',
                            }),
                          }),
                        ],
                      }),
                      Object(n.jsxs)('div', {
                        className: 'detail-item',
                        children: [
                          Object(n.jsx)('div', {
                            className: 'item-part',
                            children: Object(n.jsx)('h3', {
                              className: 'item-part-title',
                              children: 'Phone Number:',
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'item-info',
                            children: Object(n.jsx)('h3', {
                              className: 'item-info-detail',
                              children: '+255 6423 234 213',
                            }),
                          }),
                        ],
                      }),
                      Object(n.jsxs)('div', {
                        className: 'detail-item',
                        children: [
                          Object(n.jsx)('div', {
                            className: 'item-part',
                            children: Object(n.jsx)('h3', {
                              className: 'item-part-title',
                              children: 'Platform:',
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'item-info',
                            children: Object(n.jsx)('h3', {
                              className: 'item-info-detail',
                              children: 'Mbeya Group',
                            }),
                          }),
                        ],
                      }),
                      Object(n.jsxs)('div', {
                        className: 'detail-item',
                        children: [
                          Object(n.jsx)('div', {
                            className: 'item-part',
                            children: Object(n.jsx)('h3', {
                              className: 'item-part-title',
                              children: 'Location:',
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'item-info',
                            children: Object(n.jsx)('h3', {
                              className: 'item-info-detail',
                              children: 'Mbeya Mjini',
                            }),
                          }),
                        ],
                      }),
                      Object(n.jsxs)('div', {
                        className: 'detail-item',
                        children: [
                          Object(n.jsx)('div', {
                            className: 'item-part',
                            children: Object(n.jsx)('h3', {
                              className: 'item-part-title',
                              children: 'Tags:',
                            }),
                          }),
                          Object(n.jsx)('div', {
                            className: 'item-info',
                            children: Object(n.jsxs)('div', {
                              className: 'item-info-detail',
                              children: [
                                Object(n.jsx)(Fe.a, {
                                  color: '#f50',
                                  children: 'Individual',
                                }),
                                Object(n.jsx)(Fe.a, {
                                  color: '#2db7f5',
                                  children: 'RCT Approved',
                                }),
                                Object(n.jsx)(Fe.a, {
                                  color: '#87d068',
                                  children: 'TBS Certified',
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(n.jsx)(tt.a, {}),
                  Object(n.jsx)('h2', { children: 'TBS Certificate' }),
                  Object(n.jsx)('div', {
                    className: '',
                    children: Object(n.jsx)(I, {
                      subtitle: 'TBS Certificate',
                      styles: { width: '450px' },
                      children: Object(n.jsx)('div', {
                        style: {
                          display: 'flex',
                          justifyContent: 'flex-end',
                          alignItems: 'center',
                        },
                        children: Object(n.jsx)(T.a, {
                          type: 'text',
                          children: Object(n.jsx)(Ca.a, {
                            style: { fontSize: '1.875rem', fontWeight: 700 },
                          }),
                        }),
                      }),
                    }),
                  }),
                  Object(n.jsx)('h2', { children: 'Identification ()' }),
                  Object(n.jsx)('div', {
                    className: '',
                    children: Object(n.jsx)(I, {
                      subtitle: '',
                      styles: { width: '450px' },
                      children: Object(n.jsx)('div', {
                        style: {
                          display: 'flex',
                          justifyContent: 'flex-end',
                          alignItems: 'center',
                        },
                        children: Object(n.jsx)(T.a, {
                          type: 'text',
                          children: Object(n.jsx)(Ca.a, {
                            style: { fontSize: '1.875rem', fontWeight: 700 },
                          }),
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Ia = function () {
          return Object(n.jsxs)(l.c, {
            children: [
              Object(n.jsx)(ga, { path: 'sellers' }),
              Object(n.jsx)(va, { path: 'buyers' }),
              Object(n.jsx)(Sa, { path: 'leaders' }),
              Object(n.jsx)(ka, { path: 'add-sellers-form' }),
              Object(n.jsx)(wa, { path: 'view' }),
            ],
          });
        },
        za = function () {
          var e = Object(i.useState)([]),
            t = Object(j.a)(e, 2),
            a = t[0],
            c = t[1],
            r = Object(i.useState)([]),
            o = Object(j.a)(r, 2),
            s = o[0],
            d = o[1],
            p = Object(i.useContext)(ue).adminAccessToken,
            h = {
              selectedRowKeys: a,
              onChange: function (e) {
                console.log('selectedRowKeys changed: ', e), c(e);
              },
            },
            b = (function () {
              var e = Object(m.a)(
                u.a.mark(function e(t) {
                  var a;
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            X(t, p).then(function (e) {
                              return e;
                            })
                          );
                        case 2:
                          (a = e.sent),
                            console.log(a),
                            200 === a.status
                              ? (je(!0, 'Platform Deleted Successfully'), f())
                              : je(!1, 'Fail To Delete Platform', a.message);
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            f = (function () {
              var e = Object(m.a)(
                u.a.mark(function e() {
                  var t, a;
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Y().then(function (e) {
                              return e;
                            })
                          );
                        case 2:
                          200 === (t = e.sent).status
                            ? ((a = t.data.data.platform.map(function (e) {
                                return {
                                  platform_name: e.platform_name,
                                  country: e.country,
                                  platform_region: e.platform_region,
                                  phone_number: '0'.concat(e.phone_number),
                                  leader_name: e.leader_name,
                                  number_of_members: e.number_of_members,
                                };
                              })),
                              d(a))
                            : je(!1, 'Failed to fetch Platform');
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          Object(i.useEffect)(function () {
            f();
          }, []);
          var O = [
            {
              title: 'Name',
              dataIndex: 'platform_name',
              key: 'platform_name',
              sorter: {
                compare: function (e, t) {
                  return e.platform_name.length - t.platform_name.length;
                },
              },
            },
            {
              title: 'Country',
              dataIndex: 'country',
              key: 'country',
              sorter: {
                compare: function (e, t) {
                  return e.country.length - t.country.length;
                },
              },
            },
            {
              title: 'Region',
              dataIndex: 'platform_region',
              key: 'platform_region',
              sorter: {
                compare: function (e, t) {
                  return e.platform_region.length - t.platform_region.length;
                },
              },
            },
            {
              title: 'Contacts',
              dataIndex: 'phone_number',
              key: 'phone_number',
              sorter: {
                compare: function (e, t) {
                  return e.phone_number.length - t.phone_number.length;
                },
              },
            },
            {
              title: 'Platform Leader',
              dataIndex: 'leader_name',
              key: 'leader_name',
              sorter: {
                compare: function (e, t) {
                  return e.user_name.length - t.user_name.length;
                },
              },
            },
            {
              title: 'Number Of Member',
              dataIndex: 'number_of_members',
              key: 'number_of_members',
              sorter: {
                compare: function (e, t) {
                  return (
                    e.number_of_members.length - t.number_of_members.length
                  );
                },
              },
            },
            {
              title: 'Action',
              dataIndex: 'id',
              key: 'id',
              render: function (e) {
                return Object(n.jsx)(n.Fragment, {
                  children: Object(n.jsxs)(ua.b, {
                    split: Object(n.jsx)(tt.a, { type: 'vertical' }),
                    children: [
                      Object(n.jsx)('div', {
                        onClick: function () {
                          return (function (e) {
                            var t = { event: 'update platform', sellerId: e };
                            Object(l.d)('platforms/add-platform-form', {
                              state: { data: t },
                            });
                          })(e);
                        },
                        children: Object(n.jsx)(ma.a, {
                          title: 'Edit',
                          children: Object(n.jsx)(pa.a, {
                            style: { fontSize: '1.25rem' },
                          }),
                        }),
                      }),
                      Object(n.jsx)('div', {
                        children: Object(n.jsx)(ja.a, {
                          title: 'Delete Platfrom?',
                          okText: 'Yes',
                          cancelText: 'No',
                          onConfirm: function () {
                            return b(e);
                          },
                          children: Object(n.jsx)(ma.a, {
                            title: 'Delete Request',
                            children: Object(n.jsx)(fa.a, {
                              style: { fontSize: '1.25rem', color: '#ff0000' },
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                });
              },
            },
          ];
          return Object(n.jsxs)(I, {
            title: 'Platform List',
            styles: { minHeight: '90vh', overflowY: 'auto' },
            children: [
              Object(n.jsx)('div', {
                style: {
                  display: 'flex',
                  justifyContent: 'flex-end',
                  paddingRight: '4rem',
                },
                children: Object(n.jsxs)(T.a, {
                  type: 'primary',
                  size: 'large',
                  onClick: function () {
                    Object(l.d)('platforms/add-platform-form');
                  },
                  children: [' ', 'Add Platform'],
                }),
              }),
              Object(n.jsx)(tt.a, {}),
              Object(n.jsx)(Be.a, {
                rowSelection: h,
                dataSource: s,
                columns: O,
              }),
            ],
          });
        },
        Aa =
          (a(435),
          [
            {
              city: 'Dar es Salaam',
              lat: '-6.8000',
              lng: '39.2833',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Dar es Salaam',
              capital: 'primary',
              population: '6698000',
              population_proper: '4364541',
            },
            {
              city: 'Arusha',
              lat: '-3.3667',
              lng: '36.6833',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Arusha',
              capital: 'admin',
              population: '416442',
              population_proper: '416442',
            },
            {
              city: 'Dodoma',
              lat: '-6.2500',
              lng: '35.7500',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Dodoma',
              capital: 'primary',
              population: '410956',
              population_proper: '410956',
            },
            {
              city: 'Mwanza',
              lat: '-2.5167',
              lng: '32.9000',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Mwanza',
              capital: 'admin',
              population: '385810',
              population_proper: '385810',
            },
            {
              city: 'Mbeya',
              lat: '-8.9000',
              lng: '33.4500',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Mbeya',
              capital: 'admin',
              population: '291649',
              population_proper: '232062',
            },
            {
              city: 'Tanga',
              lat: '-5.0667',
              lng: '39.1000',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Tanga',
              capital: 'admin',
              population: '243580',
              population_proper: '243580',
            },
            {
              city: 'Morogoro',
              lat: '-6.8242',
              lng: '37.6633',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Morogoro',
              capital: 'admin',
              population: '207000',
              population_proper: '207000',
            },
            {
              city: 'Zanzibar',
              lat: '-6.1667',
              lng: '39.2000',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Zanzibar Urban/West',
              capital: 'admin',
              population: '205870',
              population_proper: '205870',
            },
            {
              city: 'Sumbawanga',
              lat: '-7.9667',
              lng: '31.6167',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Rukwa',
              capital: 'admin',
              population: '147483',
              population_proper: '147483',
            },
            {
              city: 'Moshi',
              lat: '-3.3349',
              lng: '37.3404',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Kilimanjaro',
              capital: 'admin',
              population: '144739',
              population_proper: '144739',
            },
            {
              city: 'Kigoma',
              lat: '-4.8833',
              lng: '29.6333',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Kigoma',
              capital: 'admin',
              population: '130142',
              population_proper: '130142',
            },
            {
              city: 'Tabora',
              lat: '-5.0167',
              lng: '32.8000',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Tabora',
              capital: 'admin',
              population: '127880',
              population_proper: '127880',
            },
            {
              city: 'Tukuyu',
              lat: '-9.2583',
              lng: '33.6417',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Mbeya',
              capital: '',
              population: '127570',
              population_proper: '28398',
            },
            {
              city: 'Iringa',
              lat: '-7.7700',
              lng: '35.6900',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Iringa',
              capital: 'admin',
              population: '111820',
              population_proper: '94760',
            },
            {
              city: 'Shinyanga',
              lat: '-3.6619',
              lng: '33.4231',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Shinyanga',
              capital: 'admin',
              population: '107362',
              population_proper: '80226',
            },
            {
              city: 'Musoma',
              lat: '-1.5069',
              lng: '33.8042',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Mara',
              capital: 'admin',
              population: '103497',
              population_proper: '103497',
            },
            {
              city: 'Bukoba',
              lat: '-1.3333',
              lng: '31.8167',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Kagera',
              capital: 'admin',
              population: '100504',
              population_proper: '70628',
            },
            {
              city: 'Songea',
              lat: '-10.6833',
              lng: '35.6500',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Ruvuma',
              capital: 'admin',
              population: '99961',
              population_proper: '99961',
            },
            {
              city: 'Mtwara',
              lat: '-10.2736',
              lng: '40.1828',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Mtwara',
              capital: 'admin',
              population: '92602',
              population_proper: '92602',
            },
            {
              city: 'Kilosa',
              lat: '-6.8396',
              lng: '36.9900',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Morogoro',
              capital: '',
              population: '91889',
              population_proper: '13227',
            },
            {
              city: 'Uvinza',
              lat: '-5.1036',
              lng: '30.3911',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Kigoma',
              capital: '',
              population: '80350',
              population_proper: '24650',
            },
            {
              city: 'Mpanda',
              lat: '-6.3436',
              lng: '31.0694',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Katavi',
              capital: 'admin',
              population: '73338',
              population_proper: '73338',
            },
            {
              city: 'Singida',
              lat: '-4.8186',
              lng: '34.7506',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Singida',
              capital: 'admin',
              population: '62432',
              population_proper: '33067',
            },
            {
              city: 'Chake Chake',
              lat: '-5.2395',
              lng: '39.7700',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Pemba South',
              capital: 'admin',
              population: '49959',
              population_proper: '21686',
            },
            {
              city: 'Ifakara',
              lat: '-8.1296',
              lng: '36.6800',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Morogoro',
              capital: '',
              population: '49528',
              population_proper: '6331',
            },
            {
              city: 'Njombe',
              lat: '-9.3296',
              lng: '34.7700',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Njombe',
              capital: 'admin',
              population: '46724',
              population_proper: '37311',
            },
            {
              city: 'Korogwe',
              lat: '-5.1558',
              lng: '38.4503',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Tanga',
              capital: '',
              population: '44000',
              population_proper: '44000',
            },
            {
              city: 'Lindi',
              lat: '-9.9969',
              lng: '39.7144',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Lindi',
              capital: 'admin',
              population: '41549',
              population_proper: '41549',
            },
            {
              city: 'Tunduma',
              lat: '-9.3000',
              lng: '32.7667',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Mbeya',
              capital: '',
              population: '36556',
              population_proper: '18530',
            },
            {
              city: 'Masasi',
              lat: '-10.7296',
              lng: '38.7999',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Mtwara',
              capital: '',
              population: '36032',
              population_proper: '27067',
            },
            {
              city: 'Kahama',
              lat: '-3.8400',
              lng: '32.6000',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Shinyanga',
              capital: '',
              population: '36014',
              population_proper: '34544',
            },
            {
              city: 'Bagamoyo',
              lat: '-6.4333',
              lng: '38.9000',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Coast',
              capital: '',
              population: '35000',
              population_proper: '35000',
            },
            {
              city: 'Biharamulo',
              lat: '-2.6296',
              lng: '31.3100',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Kagera',
              capital: '',
              population: '34038',
              population_proper: '9597',
            },
            {
              city: 'Kasulu',
              lat: '-4.5767',
              lng: '30.1025',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Kigoma',
              capital: '',
              population: '33452',
              population_proper: '33452',
            },
            {
              city: 'Babati',
              lat: '-4.2117',
              lng: '35.7475',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Manyara',
              capital: 'admin',
              population: '30975',
              population_proper: '30975',
            },
            {
              city: 'Kibiti',
              lat: '-7.7296',
              lng: '38.9500',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Coast',
              capital: '',
              population: '30163',
              population_proper: '943',
            },
            {
              city: 'Sikonge',
              lat: '-5.6295',
              lng: '32.7700',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Tabora',
              capital: '',
              population: '27113',
              population_proper: '1986',
            },
            {
              city: 'Nzega',
              lat: '-4.2096',
              lng: '33.1800',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Tabora',
              capital: '',
              population: '26584',
              population_proper: '10066',
            },
            {
              city: 'Wete',
              lat: '-5.0567',
              lng: '39.7281',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Pemba North',
              capital: 'admin',
              population: '26450',
              population_proper: '26450',
            },
            {
              city: 'Kakonko',
              lat: '-3.2796',
              lng: '30.9600',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Kigoma',
              capital: '',
              population: '24688',
              population_proper: '7950',
            },
            {
              city: 'Kibaha',
              lat: '-6.7586',
              lng: '38.9289',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Coast',
              capital: 'admin',
              population: '23050',
              population_proper: '23050',
            },
            {
              city: 'Mkokotoni',
              lat: '-5.8800',
              lng: '39.2731',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Zanzibar North',
              capital: 'minor',
              population: '2572',
              population_proper: '2572',
            },
            {
              city: 'Geita',
              lat: '-2.8714',
              lng: '32.2294',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Geita',
              capital: 'admin',
              population: '1536',
              population_proper: '1536',
            },
            {
              city: 'Bariadi',
              lat: '-2.8000',
              lng: '33.9833',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Simiyu',
              capital: 'admin',
              population: '',
              population_proper: '',
            },
            {
              city: 'Mahonda',
              lat: '-5.9897',
              lng: '39.2519',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Zanzibar North',
              capital: 'admin',
              population: '',
              population_proper: '',
            },
            {
              city: 'Vwawa',
              lat: '-9.1081',
              lng: '32.9347',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Mbeya',
              capital: 'admin',
              population: '',
              population_proper: '',
            },
            {
              city: 'Koani',
              lat: '-6.1333',
              lng: '39.2833',
              country: 'Tanzania',
              iso2: 'TZ',
              admin_name: 'Zanzibar Central/South',
              capital: 'admin',
              population: '',
              population_proper: '',
            },
          ]),
        qa = fe.a.Option,
        Ba = function (e) {
          var t = Object(i.useContext)(ue).adminAccessToken,
            a = Object(i.useState)(''),
            c = Object(j.a)(a, 2),
            r = c[0],
            o = c[1],
            s = Object(i.useState)(!1),
            d = Object(j.a)(s, 2),
            h = d[0],
            b = d[1],
            f = Object(i.useState)([]),
            O = Object(j.a)(f, 2),
            x = O[0],
            g = O[1],
            y = Object(Ae.a)({ mode: 'onChange' }),
            v = y.register,
            _ = y.handleSubmit,
            S = y.setValue,
            N = y.errors;
          Object(i.useEffect)(function () {
            console.log(e.location.state);
          }, []),
            Object(i.useEffect)(
              function () {
                v('platform_name', { required: !0 }),
                  v('platform_region', { required: !0 }),
                  v('platform_img', { required: !0 }),
                  v('first_name', { required: !0 }),
                  v('surname', { required: !0 }),
                  v('phone_number', { required: !0, pattern: /^\d+$/ });
              },
              [v],
            );
          var k = {
            name: 'file',
            onRemove: function (e) {
              var t = x.indexOf(e),
                a = x.slice();
              a.splice(t, 1), g(a);
            },
            beforeUpload: function (e) {
              return g([].concat(Object(be.a)(x), [e])), !1;
            },
            platformImage: x,
          };
          return Object(n.jsxs)(n.Fragment, {
            children: [
              Object(n.jsx)(We, {}),
              Object(n.jsxs)('form', {
                onSubmit: _(function (e) {
                  console.log(e);
                  var a = {
                    platform_name: e.platform_name,
                    platform_country_dial_code: '+255',
                    platform_region: e.platform_region,
                    image_string: e.platform_img,
                  };
                  sessionStorage.setItem('base_64', e.platform_img);
                  var n = {
                    dial_code: '+255',
                    phone_number: e.phone_number,
                    name: ''.concat(e.first_name, ' ').concat(e.surname),
                    role: 'leader',
                  };
                  b(!0),
                    (function () {
                      var e = Object(m.a)(
                        u.a.mark(function e() {
                          var i, c, r;
                          return u.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    W(a, t).then(function (e) {
                                      return e;
                                    })
                                  );
                                case 2:
                                  200 === (i = e.sent).status
                                    ? (function () {
                                        var e = Object(m.a)(
                                          u.a.mark(function e() {
                                            var a;
                                            return u.a.wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (e.next = 2),
                                                      $(n, i.data.data, t).then(
                                                        function (e) {
                                                          return e;
                                                        },
                                                      )
                                                    );
                                                  case 2:
                                                    (a = e.sent),
                                                      console.log(a),
                                                      b(!1),
                                                      Object(l.d)(-1),
                                                      je(
                                                        !0,
                                                        'Platform Created Successfully',
                                                      );
                                                  case 7:
                                                  case 'end':
                                                    return e.stop();
                                                }
                                            }, e);
                                          }),
                                        );
                                        return function () {
                                          return e.apply(this, arguments);
                                        };
                                      })()()
                                    : 'Request failed with status code 401' ===
                                      i.message
                                    ? ((c = sessionStorage.getItem(
                                        'refreshToken',
                                      )),
                                      (r = { refresh_token: c }),
                                      (function () {
                                        var e = Object(m.a)(
                                          u.a.mark(function e() {
                                            var t;
                                            return u.a.wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (e.next = 2),
                                                      te(r).then(function (e) {
                                                        return e;
                                                      })
                                                    );
                                                  case 2:
                                                    201 ===
                                                      (t = e.sent).status &&
                                                      (sessionStorage.setItem(
                                                        'accessToken',
                                                        t.data.data.token,
                                                      ),
                                                      sessionStorage.setItem(
                                                        'refreshToken',
                                                        t.data.data
                                                          .refreshToken,
                                                      ),
                                                      (function () {
                                                        var e = Object(m.a)(
                                                          u.a.mark(
                                                            function e() {
                                                              var i;
                                                              return u.a.wrap(
                                                                function (e) {
                                                                  for (;;)
                                                                    switch (
                                                                      (e.prev =
                                                                        e.next)
                                                                    ) {
                                                                      case 0:
                                                                        return (
                                                                          (e.next = 2),
                                                                          W(
                                                                            a,
                                                                            t
                                                                              .data
                                                                              .data
                                                                              .token,
                                                                          ).then(
                                                                            function (
                                                                              e,
                                                                            ) {
                                                                              return e;
                                                                            },
                                                                          )
                                                                        );
                                                                      case 2:
                                                                        200 ===
                                                                          (i =
                                                                            e.sent)
                                                                            .status &&
                                                                          (function () {
                                                                            var e = Object(
                                                                              m.a,
                                                                            )(
                                                                              u.a.mark(
                                                                                function e() {
                                                                                  return u.a.wrap(
                                                                                    function (
                                                                                      e,
                                                                                    ) {
                                                                                      for (;;)
                                                                                        switch (
                                                                                          (e.prev =
                                                                                            e.next)
                                                                                        ) {
                                                                                          case 0:
                                                                                            return (
                                                                                              (e.next = 2),
                                                                                              $(
                                                                                                n,
                                                                                                i
                                                                                                  .data
                                                                                                  .data,
                                                                                                t
                                                                                                  .data
                                                                                                  .data
                                                                                                  .token,
                                                                                              ).then(
                                                                                                function (
                                                                                                  e,
                                                                                                ) {
                                                                                                  return e;
                                                                                                },
                                                                                              )
                                                                                            );
                                                                                          case 2:
                                                                                            b(
                                                                                              !1,
                                                                                            ),
                                                                                              Object(
                                                                                                l.d,
                                                                                              )(
                                                                                                -1,
                                                                                              ),
                                                                                              je(
                                                                                                !0,
                                                                                                'Platform Created Successfully',
                                                                                              );
                                                                                          case 5:
                                                                                          case 'end':
                                                                                            return e.stop();
                                                                                        }
                                                                                    },
                                                                                    e,
                                                                                  );
                                                                                },
                                                                              ),
                                                                            );
                                                                            return function () {
                                                                              return e.apply(
                                                                                this,
                                                                                arguments,
                                                                              );
                                                                            };
                                                                          })()();
                                                                      case 4:
                                                                      case 'end':
                                                                        return e.stop();
                                                                    }
                                                                },
                                                                e,
                                                              );
                                                            },
                                                          ),
                                                        );
                                                        return function () {
                                                          return e.apply(
                                                            this,
                                                            arguments,
                                                          );
                                                        };
                                                      })()());
                                                  case 4:
                                                  case 'end':
                                                    return e.stop();
                                                }
                                            }, e);
                                          }),
                                        );
                                        return function () {
                                          return e.apply(this, arguments);
                                        };
                                      })()())
                                    : (b(!1),
                                      je(
                                        !1,
                                        'Failed to Create Platform',
                                        i.message,
                                      ));
                                case 4:
                                case 'end':
                                  return e.stop();
                              }
                          }, e);
                        }),
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })()();
                }),
                className: 'create-platform-container',
                children: [
                  Object(n.jsx)('h1', {
                    className: 'create-platform-header',
                    children: 'Create Platform',
                  }),
                  Object(n.jsx)('hr', { className: 'platform-divider' }),
                  Object(n.jsx)('h3', {
                    className: 'platform-info',
                    children: 'Platform Information',
                  }),
                  Object(n.jsxs)('div', {
                    children: [
                      Object(n.jsx)(ze.a, {
                        placeholder: 'Platform Name',
                        size: 'large',
                        onChange: function (e) {
                          S('platform_name', e.target.value);
                        },
                      }),
                      Object(n.jsx)('span', {
                        style: { fontSize: '1rem', color: 'red' },
                        children:
                          N.platform_name && 'Platform Name is required',
                      }),
                    ],
                  }),
                  Object(n.jsxs)('div', {
                    className: 'create-platform-location',
                    children: [
                      Object(n.jsx)('div', {
                        className: 'platform-location-options',
                        children: Object(n.jsx)(ze.a, {
                          value: 'Tanzania',
                          disabled: !0,
                          size: 'large',
                        }),
                      }),
                      Object(n.jsxs)('div', {
                        className: 'platform-location-options',
                        children: [
                          Object(n.jsx)(fe.a, {
                            size: 'large',
                            showSearch: !0,
                            style: { width: '100%' },
                            placeholder: 'Region',
                            optionFilterProp: 'children',
                            filterOption: function (e, t) {
                              return (
                                t.children
                                  .toLowerCase()
                                  .indexOf(e.toLowerCase()) >= 0
                              );
                            },
                            onChange: function (e) {
                              return (
                                o((t = e)),
                                S('platform_region', t),
                                void console.log(r)
                              );
                              var t;
                            },
                            children: Aa.map(function (e) {
                              return Object(n.jsx)(
                                qa,
                                { value: e.admin_name, children: e.admin_name },
                                e.city,
                              );
                            }),
                          }),
                          Object(n.jsx)('span', {
                            style: { fontSize: '1rem', color: 'red' },
                            children: N.platform_region && 'Region is required',
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(n.jsx)('div', {
                    className: 'create-platform-location',
                    children: Object(n.jsx)(
                      gt.a,
                      Object(p.a)(
                        Object(p.a)({}, k),
                        {},
                        {
                          onChange: function (e) {
                            var t = e.file;
                            console.log(t);
                            var a = new FileReader();
                            (a.onload = function (e) {
                              S('platform_img', e.target.result);
                            }),
                              t && t.type.match('image.*')
                                ? a.readAsDataURL(t)
                                : console.log(t);
                          },
                          children: Object(n.jsx)(T.a, {
                            icon: Object(n.jsx)(yt.a, {}),
                            onChange: function () {
                              document.querySelectorAll('input')[0].click();
                            },
                            children: 'Add Platform Image',
                          }),
                        },
                      ),
                    ),
                  }),
                  Object(n.jsxs)('div', {
                    children: [
                      Object(n.jsx)('h3', {
                        className: 'platform-info',
                        children: 'Add Platform Leader',
                      }),
                      Object(n.jsxs)('div', {
                        children: [
                          Object(n.jsxs)('div', {
                            className: 'create-platform-location',
                            children: [
                              Object(n.jsxs)('div', {
                                className: 'platform-location-options',
                                children: [
                                  Object(n.jsx)(ze.a, {
                                    placeholder: 'First Name',
                                    size: 'large',
                                    onChange: function (e) {
                                      S('first_name', e.target.value);
                                    },
                                  }),
                                  Object(n.jsx)('span', {
                                    style: { fontSize: '1rem', color: 'red' },
                                    children:
                                      N.first_name && 'First name is required',
                                  }),
                                ],
                              }),
                              Object(n.jsxs)('div', {
                                className: 'platform-location-options',
                                children: [
                                  Object(n.jsx)(ze.a, {
                                    placeholder: 'Surname',
                                    size: 'large',
                                    onChange: function (e) {
                                      S('surname', e.target.value);
                                    },
                                  }),
                                  Object(n.jsx)('span', {
                                    style: { fontSize: '1rem', color: 'red' },
                                    children:
                                      N.surname && 'Surname is required',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(n.jsx)('div', {
                            className: 'create-platform-location',
                            children: Object(n.jsxs)('div', {
                              className: 'platform-location-options',
                              style: { width: '100%' },
                              children: [
                                Object(n.jsx)(ze.a, {
                                  placeholder: 'Phone Number',
                                  addonBefore: '+255',
                                  maxLength: 9,
                                  size: 'large',
                                  onChange: function (e) {
                                    S('phone_number', e.target.value);
                                  },
                                  style: { width: '100%' },
                                }),
                                Object(n.jsx)('span', {
                                  style: { fontSize: '1rem', color: 'red' },
                                  children:
                                    N.phone_number &&
                                    'Phone number is required',
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(n.jsx)('div', {
                    style: {
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: '2.5rem',
                    },
                    children: Object(n.jsx)(T.a, {
                      size: 'large',
                      type: 'primary',
                      htmlType: 'submit',
                      loading: h,
                      children: 'Submit',
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Ma = function () {
          return Object(n.jsxs)(l.c, {
            children: [
              Object(n.jsx)(za, { path: '/' }),
              Object(n.jsx)(Ba, { path: 'add-platform-form' }),
            ],
          });
        },
        Ra =
          (a(436),
          function () {
            return Object(n.jsx)(n.Fragment, {
              children: Object(n.jsx)('div', {
                children: Object(n.jsx)(Ma, {}),
              }),
            });
          }),
        Pa = a(465),
        La = a(460),
        Da = [
          {
            city: 'Dar es Salaam',
            lat: '-6.8000',
            lng: '39.2833',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Dar es Salaam',
            capital: 'primary',
            population: '6698000',
            population_proper: '4364541',
          },
          {
            city: 'Arusha',
            lat: '-3.3667',
            lng: '36.6833',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Arusha',
            capital: 'admin',
            population: '416442',
            population_proper: '416442',
          },
          {
            city: 'Dodoma',
            lat: '-6.2500',
            lng: '35.7500',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Dodoma',
            capital: 'primary',
            population: '410956',
            population_proper: '410956',
          },
          {
            city: 'Mwanza',
            lat: '-2.5167',
            lng: '32.9000',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Mwanza',
            capital: 'admin',
            population: '385810',
            population_proper: '385810',
          },
          {
            city: 'Mbeya',
            lat: '-8.9000',
            lng: '33.4500',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Mbeya',
            capital: 'admin',
            population: '291649',
            population_proper: '232062',
          },
          {
            city: 'Tanga',
            lat: '-5.0667',
            lng: '39.1000',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Tanga',
            capital: 'admin',
            population: '243580',
            population_proper: '243580',
          },
          {
            city: 'Morogoro',
            lat: '-6.8242',
            lng: '37.6633',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Morogoro',
            capital: 'admin',
            population: '207000',
            population_proper: '207000',
          },
          {
            city: 'Zanzibar',
            lat: '-6.1667',
            lng: '39.2000',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Zanzibar Urban/West',
            capital: 'admin',
            population: '205870',
            population_proper: '205870',
          },
          {
            city: 'Sumbawanga',
            lat: '-7.9667',
            lng: '31.6167',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Rukwa',
            capital: 'admin',
            population: '147483',
            population_proper: '147483',
          },
          {
            city: 'Moshi',
            lat: '-3.3349',
            lng: '37.3404',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Kilimanjaro',
            capital: 'admin',
            population: '144739',
            population_proper: '144739',
          },
          {
            city: 'Kigoma',
            lat: '-4.8833',
            lng: '29.6333',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Kigoma',
            capital: 'admin',
            population: '130142',
            population_proper: '130142',
          },
          {
            city: 'Tabora',
            lat: '-5.0167',
            lng: '32.8000',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Tabora',
            capital: 'admin',
            population: '127880',
            population_proper: '127880',
          },
          {
            city: 'Tukuyu',
            lat: '-9.2583',
            lng: '33.6417',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Mbeya',
            capital: '',
            population: '127570',
            population_proper: '28398',
          },
          {
            city: 'Iringa',
            lat: '-7.7700',
            lng: '35.6900',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Iringa',
            capital: 'admin',
            population: '111820',
            population_proper: '94760',
          },
          {
            city: 'Shinyanga',
            lat: '-3.6619',
            lng: '33.4231',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Shinyanga',
            capital: 'admin',
            population: '107362',
            population_proper: '80226',
          },
          {
            city: 'Musoma',
            lat: '-1.5069',
            lng: '33.8042',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Mara',
            capital: 'admin',
            population: '103497',
            population_proper: '103497',
          },
          {
            city: 'Bukoba',
            lat: '-1.3333',
            lng: '31.8167',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Kagera',
            capital: 'admin',
            population: '100504',
            population_proper: '70628',
          },
          {
            city: 'Songea',
            lat: '-10.6833',
            lng: '35.6500',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Ruvuma',
            capital: 'admin',
            population: '99961',
            population_proper: '99961',
          },
          {
            city: 'Mtwara',
            lat: '-10.2736',
            lng: '40.1828',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Mtwara',
            capital: 'admin',
            population: '92602',
            population_proper: '92602',
          },
          {
            city: 'Kilosa',
            lat: '-6.8396',
            lng: '36.9900',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Morogoro',
            capital: '',
            population: '91889',
            population_proper: '13227',
          },
          {
            city: 'Uvinza',
            lat: '-5.1036',
            lng: '30.3911',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Kigoma',
            capital: '',
            population: '80350',
            population_proper: '24650',
          },
          {
            city: 'Mpanda',
            lat: '-6.3436',
            lng: '31.0694',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Katavi',
            capital: 'admin',
            population: '73338',
            population_proper: '73338',
          },
          {
            city: 'Singida',
            lat: '-4.8186',
            lng: '34.7506',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Singida',
            capital: 'admin',
            population: '62432',
            population_proper: '33067',
          },
          {
            city: 'Chake Chake',
            lat: '-5.2395',
            lng: '39.7700',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Pemba South',
            capital: 'admin',
            population: '49959',
            population_proper: '21686',
          },
          {
            city: 'Ifakara',
            lat: '-8.1296',
            lng: '36.6800',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Morogoro',
            capital: '',
            population: '49528',
            population_proper: '6331',
          },
          {
            city: 'Njombe',
            lat: '-9.3296',
            lng: '34.7700',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Njombe',
            capital: 'admin',
            population: '46724',
            population_proper: '37311',
          },
          {
            city: 'Korogwe',
            lat: '-5.1558',
            lng: '38.4503',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Tanga',
            capital: '',
            population: '44000',
            population_proper: '44000',
          },
          {
            city: 'Lindi',
            lat: '-9.9969',
            lng: '39.7144',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Lindi',
            capital: 'admin',
            population: '41549',
            population_proper: '41549',
          },
          {
            city: 'Tunduma',
            lat: '-9.3000',
            lng: '32.7667',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Mbeya',
            capital: '',
            population: '36556',
            population_proper: '18530',
          },
          {
            city: 'Masasi',
            lat: '-10.7296',
            lng: '38.7999',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Mtwara',
            capital: '',
            population: '36032',
            population_proper: '27067',
          },
          {
            city: 'Kahama',
            lat: '-3.8400',
            lng: '32.6000',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Shinyanga',
            capital: '',
            population: '36014',
            population_proper: '34544',
          },
          {
            city: 'Bagamoyo',
            lat: '-6.4333',
            lng: '38.9000',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Coast',
            capital: '',
            population: '35000',
            population_proper: '35000',
          },
          {
            city: 'Biharamulo',
            lat: '-2.6296',
            lng: '31.3100',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Kagera',
            capital: '',
            population: '34038',
            population_proper: '9597',
          },
          {
            city: 'Kasulu',
            lat: '-4.5767',
            lng: '30.1025',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Kigoma',
            capital: '',
            population: '33452',
            population_proper: '33452',
          },
          {
            city: 'Babati',
            lat: '-4.2117',
            lng: '35.7475',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Manyara',
            capital: 'admin',
            population: '30975',
            population_proper: '30975',
          },
          {
            city: 'Kibiti',
            lat: '-7.7296',
            lng: '38.9500',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Coast',
            capital: '',
            population: '30163',
            population_proper: '943',
          },
          {
            city: 'Sikonge',
            lat: '-5.6295',
            lng: '32.7700',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Tabora',
            capital: '',
            population: '27113',
            population_proper: '1986',
          },
          {
            city: 'Nzega',
            lat: '-4.2096',
            lng: '33.1800',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Tabora',
            capital: '',
            population: '26584',
            population_proper: '10066',
          },
          {
            city: 'Wete',
            lat: '-5.0567',
            lng: '39.7281',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Pemba North',
            capital: 'admin',
            population: '26450',
            population_proper: '26450',
          },
          {
            city: 'Kakonko',
            lat: '-3.2796',
            lng: '30.9600',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Kigoma',
            capital: '',
            population: '24688',
            population_proper: '7950',
          },
          {
            city: 'Kibaha',
            lat: '-6.7586',
            lng: '38.9289',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Coast',
            capital: 'admin',
            population: '23050',
            population_proper: '23050',
          },
          {
            city: 'Mkokotoni',
            lat: '-5.8800',
            lng: '39.2731',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Zanzibar North',
            capital: 'minor',
            population: '2572',
            population_proper: '2572',
          },
          {
            city: 'Geita',
            lat: '-2.8714',
            lng: '32.2294',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Geita',
            capital: 'admin',
            population: '1536',
            population_proper: '1536',
          },
          {
            city: 'Bariadi',
            lat: '-2.8000',
            lng: '33.9833',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Simiyu',
            capital: 'admin',
            population: '',
            population_proper: '',
          },
          {
            city: 'Mahonda',
            lat: '-5.9897',
            lng: '39.2519',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Zanzibar North',
            capital: 'admin',
            population: '',
            population_proper: '',
          },
          {
            city: 'Vwawa',
            lat: '-9.1081',
            lng: '32.9347',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Mbeya',
            capital: 'admin',
            population: '',
            population_proper: '',
          },
          {
            city: 'Koani',
            lat: '-6.1333',
            lng: '39.2833',
            country: 'Tanzania',
            iso2: 'TZ',
            admin_name: 'Zanzibar Central/South',
            capital: 'admin',
            population: '',
            population_proper: '',
          },
        ],
        Fa =
          (a(437),
          function () {
            var e = fe.a.Option,
              t = Object(i.useState)([]),
              a = Object(j.a)(t, 2),
              c = a[0],
              r = a[1],
              o = Object(Ae.a)({ mode: 'onBlur' }),
              s = o.register,
              d = o.handleSubmit,
              p = o.setValue,
              h = o.errors;
            Object(i.useEffect)(function () {
              (function () {
                var e = Object(m.a)(
                  u.a.mark(function e() {
                    var t, a;
                    return u.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              ce().then(function (e) {
                                return e;
                              })
                            );
                          case 2:
                            200 === (t = e.sent).status
                              ? ((a = t.data.data.map(function (e) {
                                  return { key: e.id, name: e.variety_name };
                                })),
                                r(a))
                              : je(!1, 'Fail to Fetch Variety');
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            }, []),
              Object(i.useEffect)(
                function () {
                  s('region', { required: !0 }),
                    s('variety_name', { required: !0 }),
                    s('price', { required: !0 }),
                    s('date', { required: !0 });
                },
                [s],
              );
            return Object(n.jsxs)(n.Fragment, {
              children: [
                Object(n.jsx)(We, {}),
                Object(n.jsxs)('div', {
                  className: 'price-rate-container',
                  children: [
                    Object(n.jsx)('div', {
                      children: Object(n.jsx)('h1', {
                        className: 'price-rate-form-header',
                        children: 'Add Price Rate',
                      }),
                    }),
                    Object(n.jsx)('hr', {}),
                    Object(n.jsxs)('form', {
                      className: 'price-rate-inner',
                      onSubmit: d(function (e) {
                        console.log(e);
                        var t = {
                          price_rate: e.price,
                          region: e.region,
                          variety: e.variety_name,
                          date: e.date,
                        };
                        (function () {
                          var e = Object(m.a)(
                            u.a.mark(function e() {
                              var a;
                              return u.a.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        re(t).then(function (e) {
                                          return e;
                                        })
                                      );
                                    case 2:
                                      200 === (a = e.sent).status
                                        ? (je(
                                            !0,
                                            'Price Rate Added Successfully',
                                          ),
                                          Object(l.d)(-1))
                                        : je(
                                            !1,
                                            'Failed to Add Price Rate',
                                            a.message,
                                          );
                                    case 4:
                                    case 'end':
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()();
                      }),
                      children: [
                        Object(n.jsxs)('div', {
                          className: 'price-rate-input',
                          children: [
                            Object(n.jsx)(fe.a, {
                              size: 'large',
                              showSearch: !0,
                              style: { width: '100%' },
                              placeholder: 'Region',
                              optionFilterProp: 'children',
                              filterOption: function (e, t) {
                                return (
                                  t.children
                                    .toLowerCase()
                                    .indexOf(e.toLowerCase()) >= 0
                                );
                              },
                              onChange: function (e) {
                                p('region', e);
                              },
                              children: Da.map(function (t) {
                                return Object(n.jsx)(
                                  e,
                                  { value: t.city, children: t.city },
                                  t.city,
                                );
                              }),
                            }),
                            Object(n.jsx)('span', {
                              style: { fontSize: '1rem', color: 'red' },
                              children: h.region && 'Region is required',
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'price-rate-input',
                          children: [
                            Object(n.jsx)(fe.a, {
                              size: 'large',
                              showSearch: !0,
                              style: { width: '100%' },
                              placeholder: 'Variety',
                              optionFilterProp: 'children',
                              filterOption: function (e, t) {
                                return (
                                  t.children
                                    .toLowerCase()
                                    .indexOf(e.toLowerCase()) >= 0
                                );
                              },
                              onChange: function (e) {
                                p('variety_name', e);
                              },
                              children: c.map(function (t) {
                                return Object(n.jsx)(
                                  e,
                                  { value: t.name, children: t.name },
                                  t.key,
                                );
                              }),
                            }),
                            Object(n.jsx)('span', {
                              style: { fontSize: '1rem', color: 'red' },
                              children: h.variety_name && 'Variety is required',
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'price-rate-input',
                          children: [
                            Object(n.jsx)(Pa.a, {
                              size: 'large',
                              placeholder: 'Price (TZS/Kg)',
                              style: { width: '100%' },
                              onChange: function (e) {
                                p('price', e);
                              },
                            }),
                            Object(n.jsx)('span', {
                              style: { fontSize: '1rem', color: 'red' },
                              children: h.price && 'Price is required',
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'price-rate-input',
                          children: [
                            Object(n.jsxs)(ze.a.Group, {
                              compact: !0,
                              children: [
                                Object(n.jsx)(ze.a, {
                                  style: { width: '30%' },
                                  disabled: !0,
                                  defaultValue: 'Price Effect Date  (From)',
                                  size: 'large',
                                }),
                                Object(n.jsx)(La.a, {
                                  style: { width: '70%' },
                                  size: 'large',
                                  onChange: function (e) {
                                    p('date', new Date(e).toISOString());
                                  },
                                }),
                              ],
                            }),
                            Object(n.jsx)('span', {
                              style: { fontSize: '1rem', color: 'red' },
                              children: h.date && 'Date is required',
                            }),
                          ],
                        }),
                        Object(n.jsx)('div', {
                          style: {
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '2.5rem',
                          },
                          children: Object(n.jsx)(T.a, {
                            size: 'large',
                            type: 'primary',
                            style: {
                              padding: '1.33rem 1.875rem',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                            },
                            htmlType: 'submit',
                            children: 'Submit',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }),
        Ga = a(487),
        Za =
          (a(446),
          [
            {
              title: 'Variety',
              dataIndex: 'variety',
              key: 'variety',
              sorter: {
                compare: function (e, t) {
                  return e.variety.length - t.variety.length;
                },
              },
            },
            {
              title: 'Price (TZS)',
              dataIndex: 'price',
              key: 'price',
              sorter: {
                compare: function (e, t) {
                  return e.price.length - t.price.length;
                },
              },
            },
            {
              title: 'Region',
              dataIndex: 'region',
              key: 'region',
              sorter: {
                compare: function (e, t) {
                  return e.region.length - t.region.length;
                },
              },
            },
            {
              title: 'Effect Date',
              dataIndex: 'effectiveDate',
              key: 'effectiveDate',
              sorter: {
                compare: function (e, t) {
                  return e.effectiveDate.length - t.effectiveDate.length;
                },
              },
            },
            {
              title: 'Action',
              dataIndex: 'action',
              key: 'action',
              render: function () {
                return Object(n.jsx)(n.Fragment, {
                  children: Object(n.jsxs)(ua.b, {
                    split: Object(n.jsx)(tt.a, { type: 'vertical' }),
                    children: [
                      Object(n.jsx)('div', {
                        children: Object(n.jsx)(ma.a, {
                          title: 'Update',
                          children: Object(n.jsx)(pa.a, {
                            style: { fontSize: '1.25rem' },
                          }),
                        }),
                      }),
                      Object(n.jsx)('div', {
                        onClick: function () {
                          return Object(l.d)('price-rate/price-history');
                        },
                        children: Object(n.jsx)(ma.a, {
                          title: 'Price History',
                          children: Object(n.jsx)(Ga.a, {
                            style: { fontSize: '1.25rem' },
                          }),
                        }),
                      }),
                      Object(n.jsx)('div', {
                        children: Object(n.jsx)(ma.a, {
                          title: 'Delete Tender',
                          children: Object(n.jsx)(fa.a, {
                            style: { fontSize: '1.25rem', color: '#ff0000' },
                          }),
                        }),
                      }),
                    ],
                  }),
                });
              },
            },
          ]),
        Ka = function () {
          var e = Object(i.useState)([]),
            t = Object(j.a)(e, 2),
            a = t[0],
            c = t[1];
          Object(i.useEffect)(function () {
            (function () {
              var e = Object(m.a)(
                u.a.mark(function e() {
                  var t, a;
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            oe().then(function (e) {
                              return e;
                            })
                          );
                        case 2:
                          200 === (t = e.sent).status
                            ? ((a = t.data.data.map(function (e) {
                                return {
                                  key: e.id,
                                  variety: e.variety,
                                  price: e.price_rate,
                                  region: e.region,
                                  effectiveDate: Re()(e.date).format(
                                    'Do MMMM YYYY',
                                  ),
                                };
                              })),
                              c(a))
                            : je(!1, 'Fail to fetch Price Rate', t.message);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []);
          return Object(n.jsx)(n.Fragment, {
            children: Object(n.jsxs)(I, {
              title: 'Price Rate',
              styles: { minHeight: '90vh', overflowY: 'auto' },
              children: [
                Object(n.jsx)('div', {
                  style: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    paddingRight: '4rem',
                  },
                  children: Object(n.jsxs)(T.a, {
                    type: 'primary',
                    size: 'large',
                    onClick: function () {
                      Object(l.d)('price-rate/price-rate-form');
                    },
                    children: [' ', 'Add Price Rate'],
                  }),
                }),
                Object(n.jsx)(tt.a, {}),
                Object(n.jsx)(Be.a, { dataSource: a, columns: Za }),
              ],
            }),
          });
        },
        Ea = [
          {
            key: '1',
            variety: 'Super Kyela',
            price: '2000/=',
            region: 'Mbeya',
            startDate: 'Jan 26, 2020',
            endDate: 'Jan 26, 2021',
          },
          {
            key: '2',
            region: 'Shinyanga',
            variety: 'Super Shinyanga',
            price: '2200/=',
            startDate: 'Jan 26, 2020',
            endDate: 'Feb 25 2021',
          },
          {
            key: '3',
            region: 'Singida',
            variety: 'Super Singida',
            price: '1800/=',
            startDate: 'Jan 26, 2020',
            endDate: 'Feb 25 2021',
          },
          {
            key: '4',
            variety: 'Super Kyela',
            price: '2200/=',
            region: 'Mbeya',
            startDate: 'Jan 26, 2021',
            endDate: 'N/A',
          },
        ],
        Va = [
          {
            title: 'Region',
            dataIndex: 'region',
            key: 'region',
            sorter: {
              compare: function (e, t) {
                return e.region.length - t.region.length;
              },
            },
          },
          {
            title: 'Variety',
            dataIndex: 'variety',
            key: 'variety',
            sorter: {
              compare: function (e, t) {
                return e.variety.length - t.variety.length;
              },
            },
          },
          {
            title: 'Price (TZS)',
            dataIndex: 'price',
            key: 'price',
            sorter: {
              compare: function (e, t) {
                return e.price.length - t.price.length;
              },
            },
          },
          {
            title: 'Start Date',
            dataIndex: 'startDate',
            key: 'startDate',
            sorter: {
              compare: function (e, t) {
                return e.startDate.length - t.startDate.length;
              },
            },
          },
          {
            title: 'End Date',
            dataIndex: 'endDate',
            key: 'endDate',
            sorter: {
              compare: function (e, t) {
                return e.endDate.length - t.endDate.length;
              },
            },
          },
        ],
        Ha = function () {
          return Object(n.jsx)(n.Fragment, {
            children: Object(n.jsxs)(I, {
              title: 'Price History',
              backButton: !0,
              styles: { minHeight: '90vh', overflowY: 'auto' },
              children: [
                Object(n.jsx)(tt.a, {}),
                Object(n.jsx)(Be.a, { dataSource: Ea, columns: Va }),
              ],
            }),
          });
        },
        Ua = function () {
          return Object(n.jsxs)(l.c, {
            children: [
              Object(n.jsx)(Ka, { path: '/' }),
              Object(n.jsx)(Fa, { path: 'price-rate-form' }),
              Object(n.jsx)(Ha, { path: 'price-history' }),
            ],
          });
        },
        Ja = function () {
          return Object(n.jsx)(n.Fragment, { children: Object(n.jsx)(Ua, {}) });
        },
        Wa =
          (a(447),
          [
            {
              key: '1',
              action: 'Delete Seller',
              performer: 'John Doe',
              role: 'Admin',
              time: 'Dec 10th, 12:00pm',
            },
            {
              key: '2',
              action: 'Add 10 Sellers',
              performer: 'Ally Juma',
              role: 'Leader',
              time: 'Dec 10th, 11:00am',
            },
          ]),
        Ya = [
          {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            sorter: {
              compare: function (e, t) {
                return e.action.length - t.action.length;
              },
            },
          },
          {
            title: 'Performer',
            dataIndex: 'performer',
            key: 'performer',
            sorter: {
              compare: function (e, t) {
                return e.performer.length - t.performer.length;
              },
            },
          },
          {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            sorter: {
              compare: function (e, t) {
                return e.role.length - t.role.length;
              },
            },
          },
          {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            sorter: {
              compare: function (e, t) {
                return e.time.length - t.time.length;
              },
            },
          },
        ],
        Qa = function () {
          var e = Object(i.useState)([]),
            t = Object(j.a)(e, 2),
            a = t[0],
            c = t[1],
            r = {
              selectedRowKeys: a,
              onChange: function (e) {
                console.log('selectedRowKeys changed: ', e), c(e);
              },
            };
          return Object(n.jsx)(n.Fragment, {
            children: Object(n.jsxs)(I, {
              title: 'Logs',
              styles: { minHeight: '90vh', overflowY: 'auto' },
              children: [
                Object(n.jsx)(tt.a, {}),
                Object(n.jsx)(Be.a, {
                  dataSource: Wa,
                  columns: Ya,
                  rowSelection: r,
                }),
                ';',
              ],
            }),
          });
        },
        Xa = function () {
          var e = Object(i.useState)([]),
            t = Object(j.a)(e, 2),
            a = t[0],
            c = t[1],
            r = Object(i.useState)([]),
            o = Object(j.a)(r, 2),
            s = o[0],
            d = o[1];
          Object(i.useEffect)(function () {
            (function () {
              var e = Object(m.a)(
                u.a.mark(function e() {
                  var t, a;
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            ce().then(function (e) {
                              return e;
                            })
                          );
                        case 2:
                          200 === (t = e.sent).status
                            ? ((a = t.data.data.map(function (e) {
                                return {
                                  key: e.id,
                                  name: e.variety_name,
                                  platform: e.platform_name,
                                  region: e.platform_region,
                                  added_by: e.user_name,
                                };
                              })),
                              d(a))
                            : je(!1, 'Fail to Fetch Variety');
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []);
          var p = {
              selectedRowKeys: a,
              onChange: function (e) {
                console.log('selectedRowKeys changed: ', e), c(e);
              },
            },
            h = [
              { title: 'Name', dataIndex: 'name', key: 'name' },
              {
                title: 'Platform',
                dataIndex: 'platform',
                key: 'platform',
                sorter: {
                  compare: function (e, t) {
                    return e.platform.length - t.platform.length;
                  },
                },
              },
              {
                title: 'Region',
                dataIndex: 'region',
                key: 'region',
                sorter: {
                  compare: function (e, t) {
                    return e.region.length - t.region.length;
                  },
                },
              },
              {
                title: 'Added By',
                dataIndex: 'added_by',
                key: 'added_by',
                sorter: {
                  compare: function (e, t) {
                    return e.added_by.length - t.added_by.length;
                  },
                },
              },
              {
                title: 'Action',
                dataIndex: 'action',
                key: 'action',
                render: function () {
                  return Object(n.jsx)(n.Fragment, {
                    children: Object(n.jsxs)(ua.b, {
                      split: Object(n.jsx)(tt.a, { type: 'vertical' }),
                      children: [
                        Object(n.jsx)('div', {
                          children: Object(n.jsx)(ma.a, {
                            title: 'Disable Buyer',
                            children: Object(n.jsx)(ba.a, {
                              style: { fontSize: '1.25rem' },
                            }),
                          }),
                        }),
                        Object(n.jsx)('div', {
                          children: Object(n.jsx)(ma.a, {
                            title: 'Delete Buyer',
                            color: 'red',
                            children: Object(n.jsx)(fa.a, {
                              style: { fontSize: '1.25rem', color: '#ff0000' },
                            }),
                          }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ];
          return Object(n.jsx)(de, {
            children: function (e) {
              var t = e.adminRole;
              return Object(n.jsx)(n.Fragment, {
                children: Object(n.jsx)(Qt, {
                  role: t,
                  perform: 'variety:create',
                  yes: function () {
                    return Object(n.jsxs)(I, {
                      title: 'Varieties',
                      styles: { minHeight: '90vh', overflowY: 'auto' },
                      children: [
                        Object(n.jsx)('div', {
                          style: {
                            display: 'flex',
                            justifyContent: 'flex-end',
                            paddingRight: '4rem',
                          },
                          children: Object(n.jsxs)(T.a, {
                            type: 'primary',
                            size: 'large',
                            onClick: function () {
                              return Object(l.d)('variety/add-variety-form');
                            },
                            children: [' ', 'Add Variety'],
                          }),
                        }),
                        Object(n.jsx)(tt.a, {}),
                        Object(n.jsx)(Be.a, {
                          rowSelection: p,
                          dataSource: s,
                          columns: h,
                        }),
                      ],
                    });
                  },
                  no: function () {
                    return Object(n.jsxs)(I, {
                      title: 'Varieties',
                      styles: { minHeight: '90vh', overflowY: 'auto' },
                      children: [
                        Object(n.jsx)(tt.a, {}),
                        Object(n.jsx)(Be.a, {
                          rowSelection: p,
                          dataSource: s,
                          columns: h,
                        }),
                      ],
                    });
                  },
                }),
              });
            },
          });
        },
        $a =
          (a(448),
          function () {
            var e = Object(Ae.a)({ mode: 'onBlur' }),
              t = e.register,
              a = e.handleSubmit,
              c = e.setValue,
              r = e.errors,
              o = Object(i.useContext)(ue).adminAccessToken;
            Object(i.useEffect)(
              function () {
                (function () {
                  var e = Object(m.a)(
                    u.a.mark(function e() {
                      var t;
                      return u.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                ((a = o),
                                D.a
                                  .get('/api/v1/leader/leader-platform', {
                                    headers: {
                                      Authorization: 'Bearer '.concat(a),
                                    },
                                  })
                                  .then(function (e) {
                                    return e;
                                  })
                                  .catch(function (e) {
                                    return e;
                                  })).then(function (e) {
                                  return e;
                                })
                              );
                            case 2:
                              (t = e.sent), console.log(t);
                            case 4:
                            case 'end':
                              return e.stop();
                          }
                        var a;
                      }, e);
                    }),
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              },
              [o],
            ),
              Object(i.useEffect)(
                function () {
                  t('variety_name', { required: !0 });
                },
                [t],
              );
            return Object(n.jsxs)(n.Fragment, {
              children: [
                Object(n.jsx)(We, {}),
                Object(n.jsxs)('div', {
                  className: 'add-variety-container',
                  children: [
                    Object(n.jsx)('div', {
                      children: Object(n.jsx)('h1', {
                        className: 'add-variety-form-header',
                        children: 'Add Variety',
                      }),
                    }),
                    Object(n.jsx)('hr', {}),
                    Object(n.jsxs)('form', {
                      className: 'add-variety-inner',
                      onSubmit: a(function (e) {
                        var t = { variety_name: e.variety_name };
                        (function () {
                          var e = Object(m.a)(
                            u.a.mark(function e() {
                              var a;
                              return u.a.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        ie(t, o).then(function (e) {
                                          return e;
                                        })
                                      );
                                    case 2:
                                      (a = e.sent),
                                        console.log(a),
                                        200 === a.status
                                          ? (je(
                                              !0,
                                              'Variety Created Successfully',
                                              'Succeed with status '.concat(
                                                a.status,
                                              ),
                                            ),
                                            Object(l.d)(-1))
                                          : je(
                                              !1,
                                              'Failed to Create Variety',
                                              a,
                                            ),
                                        console.log(a);
                                    case 6:
                                    case 'end':
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()();
                      }),
                      children: [
                        Object(n.jsxs)('div', {
                          className: 'add-variety-input',
                          children: [
                            Object(n.jsx)(ze.a, {
                              size: 'large',
                              placeholder: 'Name',
                              onChange: function (e) {
                                c('variety_name', e.target.value);
                              },
                            }),
                            Object(n.jsx)('span', {
                              style: { fontSize: '1rem', color: 'red' },
                              children:
                                r.variety_name && 'Variety name is required',
                            }),
                          ],
                        }),
                        Object(n.jsx)('div', {
                          style: {
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '2.5rem',
                          },
                          children: Object(n.jsx)(T.a, {
                            size: 'large',
                            type: 'primary',
                            style: {
                              padding: '1.33rem 1.875rem',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                            },
                            htmlType: 'submit',
                            children: 'Submit',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }),
        en = function () {
          return Object(n.jsxs)(l.c, {
            children: [
              Object(n.jsx)(Xa, { path: '/' }),
              Object(n.jsx)($a, { path: 'add-variety-form' }),
            ],
          });
        },
        tn = function () {
          return Object(n.jsx)(n.Fragment, { children: Object(n.jsx)(en, {}) });
        },
        an = function () {
          var e = Object(i.useState)([]),
            t = Object(j.a)(e, 2),
            a = t[0],
            c = t[1],
            r = Object(i.useState)([]),
            o = Object(j.a)(r, 2),
            s = o[0],
            d = o[1],
            p = Object(i.useContext)(ue).adminAccessToken;
          Object(i.useEffect)(function () {
            (function () {
              var e = Object(m.a)(
                u.a.mark(function e() {
                  var t;
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            ((a = p),
                            D.a
                              .get('/api/v1/seller/tender/offset/0', {
                                headers: { Authorization: 'Bearer '.concat(a) },
                              })
                              .then(function (e) {
                                return e;
                              })
                              .catch(function (e) {
                                return e;
                              })).then(function (e) {
                              return e;
                            })
                          );
                        case 2:
                          200 === (t = e.sent).status
                            ? d(t.data.data.requestTenderList)
                            : je(
                                !0,
                                'Failed to Fetch Tender Request',
                                t.message,
                              );
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                    var a;
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []);
          var h = {
              selectedRowKeys: a,
              onChange: function (e) {
                console.log('selectedRowKeys changed: ', e), c(e);
              },
            },
            b = function () {
              var e = ['#2db7f5', '#f50', '#2db7f5', '#9B59B6'];
              return e[Math.floor(Math.random() * e.length)];
            },
            f = [
              {
                title: 'Quantity(kgs)',
                dataIndex: 'quantity',
                key: 'quantity',
                sorter: {
                  compare: function (e, t) {
                    return e.quantity.length - t.quantity.length;
                  },
                },
              },
              {
                title: 'Grade',
                dataIndex: 'grade',
                key: 'grade',
                sorter: {
                  compare: function (e, t) {
                    return e.grade.length - t.grade.length;
                  },
                },
              },
              {
                title: 'Variety',
                dataIndex: 'variety',
                key: 'variety',
                sorter: {
                  compare: function (e, t) {
                    return e.variety.length - t.variety.length;
                  },
                },
              },
              {
                title: 'Price (TZS/kg)',
                dataIndex: 'price',
                key: 'price',
                sorter: {
                  compare: function (e, t) {
                    return e.price.length - t.price.length;
                  },
                },
              },
              {
                title: 'Pickup Location',
                dataIndex: 'pickupLocation',
                key: 'pickupLocation',
                sorter: {
                  compare: function (e, t) {
                    return e.pickupLocation.length - t.pickupLocation.length;
                  },
                },
              },
              {
                title: 'Tags',
                dataIndex: 'tags',
                key: 'tags',
                render: function (e) {
                  return Object(n.jsx)(n.Fragment, {
                    children: e.map(function (e) {
                      return Object(n.jsx)(
                        Fe.a,
                        { color: b(), children: e },
                        e,
                      );
                    }),
                  });
                },
              },
              {
                title: 'Action',
                dataIndex: 'action',
                key: 'action',
                render: function () {
                  return Object(n.jsx)(n.Fragment, {
                    children: Object(n.jsxs)(ua.b, {
                      split: Object(n.jsx)(tt.a, { type: 'vertical' }),
                      children: [
                        Object(n.jsx)('div', {
                          onClick: function () {
                            return Object(l.d)('tender-request/view');
                          },
                          children: Object(n.jsx)(ma.a, {
                            title: 'View More',
                            children: Object(n.jsx)(ha.a, {
                              style: { fontSize: '1.25rem' },
                            }),
                          }),
                        }),
                        Object(n.jsx)('div', {
                          children: Object(n.jsx)(ma.a, {
                            title: 'Disable Request',
                            children: Object(n.jsx)(ba.a, {
                              style: { fontSize: '1.25rem' },
                            }),
                          }),
                        }),
                        Object(n.jsx)('div', {
                          children: Object(n.jsx)(ma.a, {
                            title: 'Delete Request',
                            children: Object(n.jsx)(fa.a, {
                              style: { fontSize: '1.25rem', color: '#ff0000' },
                            }),
                          }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ];
          return Object(n.jsxs)(I, {
            title: 'Tender Request',
            styles: { minHeight: '90vh', overflowY: 'auto' },
            children: [
              Object(n.jsx)(tt.a, {}),
              Object(n.jsx)(Be.a, {
                rowSelection: h,
                dataSource: s,
                columns: f,
              }),
            ],
          });
        },
        nn =
          (a(449),
          function () {
            return Object(n.jsx)(C.a, {
              hoverable: !0,
              style: {
                width: 240,
                marginBottom: '1.25rem',
                marginRight: '1rem',
              },
              cover: Object(n.jsx)('img', {
                alt: 'example',
                src:
                  'https://images.unsplash.com/photo-1592997571659-0b21ff64313b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              }),
              children: Object(n.jsx)(C.a.Meta, {
                title: 'Image',
                description: 'Image sample',
              }),
            });
          }),
        cn = function () {
          return Object(n.jsx)(n.Fragment, {
            children: Object(n.jsxs)(I, {
              title: 'Tender Request View',
              backButton: !0,
              styles: { minHeight: '90vh' },
              children: [
                Object(n.jsx)(tt.a, {}),
                Object(n.jsxs)('div', {
                  className: 'Tender-request-container',
                  children: [
                    Object(n.jsx)('h2', { children: 'Tender Information' }),
                    Object(n.jsxs)('div', {
                      className: 'tender-request-info',
                      children: [
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: ' item-part-title',
                                children: 'Quantity:',
                              }),
                            }),
                            Object(n.jsx)('div', {
                              className: 'item-info',
                              children: Object(n.jsx)('h3', {
                                className: 'item-info-detail',
                                children: '1000 kgs',
                              }),
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: 'item-part-title',
                                children: ' Grade:',
                              }),
                            }),
                            Object(n.jsx)('div', {
                              className: 'item-info',
                              children: Object(n.jsx)('h3', {
                                className: 'item-info-detail',
                                children: '1',
                              }),
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: 'item-part-title',
                                children: ' Variety:',
                              }),
                            }),
                            Object(n.jsxs)('div', {
                              className: 'item-info',
                              children: [
                                ' ',
                                Object(n.jsx)('h3', {
                                  className: 'item-info-detail',
                                  children: 'Super Kyela',
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: 'item-part-title',
                                children: ' Price(TZS/Kg):',
                              }),
                            }),
                            Object(n.jsxs)('div', {
                              className: 'item-info',
                              children: [
                                ' ',
                                Object(n.jsx)('h3', {
                                  className: 'item-info-detail',
                                  children: '1800/=',
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: 'item-part-title',
                                children: ' Batch Number:',
                              }),
                            }),
                            Object(n.jsxs)('div', {
                              className: 'item-info',
                              children: [
                                ' ',
                                Object(n.jsx)('h3', {
                                  className: 'item-info-detail',
                                  children: '12436578',
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: 'item-part-title',
                                children: ' Pickup Location:',
                              }),
                            }),
                            Object(n.jsxs)('div', {
                              className: 'item-info',
                              children: [
                                ' ',
                                Object(n.jsx)('h3', {
                                  className: 'item-info-detail',
                                  children: 'Mbeya Mjini',
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: 'item-part-title',
                                children: 'Description:',
                              }),
                            }),
                            Object(n.jsx)('div', {
                              className: 'item-description',
                              children: Object(n.jsx)('h3', {
                                className: 'item-description-detail',
                                children:
                                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam a aspernatur ducimus nostrum, eum itaque animi facere, mollitia ea atque nulla omnis dignissimos ad consectetur fuga recusandae suscipit sapiente.',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(n.jsx)(tt.a, {}),
                    Object(n.jsx)('h2', { children: 'Seller Information' }),
                    Object(n.jsxs)('div', {
                      className: 'tender-request-info',
                      children: [
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: 'item-part-title',
                                children: 'Full Name:',
                              }),
                            }),
                            Object(n.jsx)('div', {
                              className: 'item-info',
                              children: Object(n.jsx)('h3', {
                                className: 'item-info-detail',
                                children: 'Juma Alfred Ally',
                              }),
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: 'item-part-title',
                                children: 'Phone Number:',
                              }),
                            }),
                            Object(n.jsx)('div', {
                              className: 'item-info',
                              children: Object(n.jsx)('h3', {
                                className: 'item-info-detail',
                                children: '+255 6423 234 213',
                              }),
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: 'item-part-title',
                                children: 'Platform:',
                              }),
                            }),
                            Object(n.jsx)('div', {
                              className: 'item-info',
                              children: Object(n.jsx)('h3', {
                                className: 'item-info-detail',
                                children: 'Mbeya Group',
                              }),
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: 'item-part-title',
                                children: 'Location:',
                              }),
                            }),
                            Object(n.jsx)('div', {
                              className: 'item-info',
                              children: Object(n.jsx)('h3', {
                                className: 'item-info-detail',
                                children: 'Mbeya Mjini',
                              }),
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: 'item-part-title',
                                children: 'Tags:',
                              }),
                            }),
                            Object(n.jsx)('div', {
                              className: 'item-info',
                              children: Object(n.jsxs)('div', {
                                className: 'item-info-detail',
                                children: [
                                  Object(n.jsx)(Fe.a, {
                                    color: '#f50',
                                    children: 'Individual',
                                  }),
                                  Object(n.jsx)(Fe.a, {
                                    color: '#2db7f5',
                                    children: 'RCT Approved',
                                  }),
                                  Object(n.jsx)(Fe.a, {
                                    color: '#87d068',
                                    children: 'TBS Certified',
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(n.jsx)(tt.a, {}),
                    Object(n.jsx)('h2', { children: 'Images' }),
                    Object(n.jsxs)('div', {
                      className: 'image-container',
                      children: [
                        Object(n.jsx)(nn, {}),
                        Object(n.jsx)(nn, {}),
                        Object(n.jsx)(nn, {}),
                        Object(n.jsx)(nn, {}),
                        Object(n.jsx)(nn, {}),
                        Object(n.jsx)(nn, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        rn = function () {
          return Object(n.jsxs)(l.c, {
            children: [
              Object(n.jsx)(an, { path: '/' }),
              Object(n.jsx)(cn, { path: 'view' }),
            ],
          });
        },
        on = function () {
          var e = Object(i.useState)([]),
            t = Object(j.a)(e, 2),
            a = t[0],
            c = t[1],
            r = {
              selectedRowKeys: a,
              onChange: function (e) {
                console.log('selectedRowKeys changed: ', e), c(e);
              },
            },
            o = [
              {
                title: 'Quantity(kg)',
                dataIndex: 'quantity',
                key: 'quantity',
                sorter: {
                  compare: function (e, t) {
                    return e.quantity.length - t.quantity.length;
                  },
                },
              },
              {
                title: 'Grade',
                dataIndex: 'grade',
                key: 'grade',
                sorter: {
                  compare: function (e, t) {
                    return e.grade.length - t.grade.length;
                  },
                },
              },
              {
                title: 'Variety',
                dataIndex: 'variety',
                key: 'variety',
                sorter: {
                  compare: function (e, t) {
                    return e.variety.length - t.variety.length;
                  },
                },
              },
              {
                title: 'Destination',
                dataIndex: 'destination',
                key: 'destination',
                sorter: {
                  compare: function (e, t) {
                    return e.destination.length - t.destination.length;
                  },
                },
              },
              {
                title: 'Action',
                dataIndex: 'action',
                key: 'action',
                render: function () {
                  return Object(n.jsx)(n.Fragment, {
                    children: Object(n.jsxs)(ua.b, {
                      split: Object(n.jsx)(tt.a, { type: 'vertical' }),
                      children: [
                        Object(n.jsx)('div', {
                          onClick: function () {
                            return Object(l.d)('tender-given/view');
                          },
                          children: Object(n.jsx)(ma.a, {
                            title: 'View More',
                            children: Object(n.jsx)(ha.a, {
                              style: { fontSize: '1.25rem' },
                            }),
                          }),
                        }),
                        Object(n.jsx)('div', {
                          children: Object(n.jsx)(ma.a, {
                            title: 'Disable Tender',
                            children: Object(n.jsx)(ba.a, {
                              style: { fontSize: '1.25rem' },
                            }),
                          }),
                        }),
                        Object(n.jsx)('div', {
                          children: Object(n.jsx)(ma.a, {
                            title: 'Delete Tender',
                            children: Object(n.jsx)(fa.a, {
                              style: { fontSize: '1.25rem', color: '#ff0000' },
                            }),
                          }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ];
          return Object(n.jsxs)(I, {
            title: 'Tender Given',
            styles: { minHeight: '90vh', overflowY: 'auto' },
            children: [
              Object(n.jsx)(tt.a, {}),
              Object(n.jsx)(Be.a, {
                rowSelection: r,
                dataSource: [],
                columns: o,
              }),
            ],
          });
        },
        sn =
          (a(450),
          function () {
            return Object(n.jsxs)(I, {
              title: 'Tender Given View',
              backButton: !0,
              styles: { minHeight: '90vh' },
              children: [
                Object(n.jsx)(tt.a, {}),
                Object(n.jsxs)('div', {
                  className: 'Tender-given-container',
                  children: [
                    Object(n.jsx)('h2', { children: 'Tender Information' }),
                    Object(n.jsxs)('div', {
                      className: 'tender-given-info',
                      children: [
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: ' item-part-title',
                                children: 'Quantity:',
                              }),
                            }),
                            Object(n.jsx)('div', {
                              className: 'item-info',
                              children: Object(n.jsx)('h3', {
                                className: 'item-info-detail',
                                children: '1000 kgs',
                              }),
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: 'item-part-title',
                                children: ' Grade:',
                              }),
                            }),
                            Object(n.jsx)('div', {
                              className: 'item-info',
                              children: Object(n.jsx)('h3', {
                                className: 'item-info-detail',
                                children: '1',
                              }),
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: 'item-part-title',
                                children: ' Variety:',
                              }),
                            }),
                            Object(n.jsxs)('div', {
                              className: 'item-info',
                              children: [
                                ' ',
                                Object(n.jsx)('h3', {
                                  className: 'item-info-detail',
                                  children: 'Super Kyela',
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: 'item-part-title',
                                children: 'Destination:',
                              }),
                            }),
                            Object(n.jsx)('div', {
                              className: 'item-info',
                              children: Object(n.jsx)('h3', {
                                className: 'item-info-detail',
                                children: 'Dar es salaam',
                              }),
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: 'item-part-title',
                                children: 'Description:',
                              }),
                            }),
                            Object(n.jsx)('div', {
                              className: 'item-description',
                              children: Object(n.jsx)('h3', {
                                className: 'item-description-detail',
                                children:
                                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam a aspernatur ducimus nostrum, eum itaque animi facere, mollitia ea atque nulla omnis dignissimos ad consectetur fuga recusandae suscipit sapiente.',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(n.jsx)(tt.a, {}),
                    Object(n.jsx)('h2', { children: 'Buyer Information' }),
                    Object(n.jsxs)('div', {
                      className: 'tender-given-info',
                      children: [
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: 'item-part-title',
                                children: ' Full Name:',
                              }),
                            }),
                            Object(n.jsxs)('div', {
                              className: 'item-info',
                              children: [
                                ' ',
                                Object(n.jsx)('h3', {
                                  className: 'item-info-detail',
                                  children: 'Alfred Juma',
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: 'item-part-title',
                                children: 'Phone Number:',
                              }),
                            }),
                            Object(n.jsxs)('div', {
                              className: 'item-info',
                              children: [
                                ' ',
                                Object(n.jsx)('h3', {
                                  className: 'item-info-detail',
                                  children: '+255 6423 234 213',
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'detail-item',
                          children: [
                            Object(n.jsx)('div', {
                              className: 'item-part',
                              children: Object(n.jsx)('h3', {
                                className: 'item-part-title',
                                children: 'Location:',
                              }),
                            }),
                            Object(n.jsxs)('div', {
                              className: 'item-info',
                              children: [
                                ' ',
                                Object(n.jsx)('h3', {
                                  className: 'item-info-detail',
                                  children: 'Mbeya Mjini',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }),
        ln = function () {
          return Object(n.jsxs)(l.c, {
            children: [
              Object(n.jsx)(on, { path: '/' }),
              Object(n.jsx)(sn, { path: 'view' }),
            ],
          });
        },
        dn = function (e) {
          var t = e.handleAuth,
            a = Object(i.useState)(!1),
            r = Object(j.a)(a, 2),
            o = r[0],
            s = r[1],
            d = Object(Ae.a)({
              defaultValues: {
                dial_code: '+255',
                phone_number: '',
                password: '',
              },
            }),
            h = d.register,
            b = d.handleSubmit,
            f = d.setValue;
          c.a.useEffect(
            function () {
              h('phone_number'), h('password');
            },
            [h],
          );
          return Object(n.jsx)('div', {
            children: Object(n.jsx)('div', {
              className: 'login_container',
              children: Object(n.jsx)('div', {
                className: 'login_innerContainer',
                children: Object(n.jsxs)('div', {
                  className: 'login_inner',
                  children: [
                    Object(n.jsxs)('div', {
                      className: 'login_header',
                      children: [
                        Object(n.jsx)('h2', { children: 'Management Sign In' }),
                        Object(n.jsx)(tt.a, {
                          style: {
                            margin: '0  0 0.5rem 0 ',
                            borderTop: '2px solid rgba(0, 0, 0, 0.06)',
                          },
                        }),
                      ],
                    }),
                    Object(n.jsxs)('form', {
                      style: { width: '100%' },
                      onSubmit: b(function (e) {
                        var a = Object(p.a)({ dial_code: '+255' }, e);
                        console.log(a),
                          s(!0),
                          (function () {
                            var e = Object(m.a)(
                              u.a.mark(function e() {
                                var n;
                                return u.a.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          ((i = a),
                                          D.a
                                            .post(
                                              '/api/v1/user/signin-password',
                                              i,
                                            )
                                            .then(function (e) {
                                              return e;
                                            })
                                            .catch(function (e) {
                                              return e;
                                            }))
                                            .then(function (e) {
                                              return e;
                                            })
                                            .catch(function (e) {
                                              return e.response.message;
                                            })
                                        );
                                      case 2:
                                        200 === (n = e.sent).status
                                          ? (function () {
                                              var e = Object(m.a)(
                                                u.a.mark(function e() {
                                                  var n;
                                                  return u.a.wrap(function (e) {
                                                    for (;;)
                                                      switch (
                                                        (e.prev = e.next)
                                                      ) {
                                                        case 0:
                                                          return (
                                                            (e.next = 2),
                                                            ne(a).then(
                                                              function (e) {
                                                                return e;
                                                              },
                                                            )
                                                          );
                                                        case 2:
                                                          201 ===
                                                          (n = e.sent).status
                                                            ? (sessionStorage.setItem(
                                                                'accessToken',
                                                                n.data.data
                                                                  .token,
                                                              ),
                                                              sessionStorage.setItem(
                                                                'refreshToken',
                                                                n.data.data
                                                                  .refreshToken,
                                                              ),
                                                              (function () {
                                                                var e = Object(
                                                                  m.a,
                                                                )(
                                                                  u.a.mark(
                                                                    function e() {
                                                                      var a;
                                                                      return u.a.wrap(
                                                                        function (
                                                                          e,
                                                                        ) {
                                                                          for (;;)
                                                                            switch (
                                                                              (e.prev =
                                                                                e.next)
                                                                            ) {
                                                                              case 0:
                                                                                return (
                                                                                  (e.next = 2),
                                                                                  ae(
                                                                                    n
                                                                                      .data
                                                                                      .data
                                                                                      .token,
                                                                                  ).then(
                                                                                    function (
                                                                                      e,
                                                                                    ) {
                                                                                      return e;
                                                                                    },
                                                                                  )
                                                                                );
                                                                              case 2:
                                                                                (a =
                                                                                  e.sent),
                                                                                  console.log(
                                                                                    a,
                                                                                  ),
                                                                                  200 ===
                                                                                  a.status
                                                                                    ? (a.data.data.roles.some(
                                                                                        function (
                                                                                          e,
                                                                                        ) {
                                                                                          return (
                                                                                            'leader' ===
                                                                                            e.role
                                                                                          );
                                                                                        },
                                                                                      )
                                                                                        ? sessionStorage.setItem(
                                                                                            'adminRole',
                                                                                            'leader',
                                                                                          )
                                                                                        : sessionStorage.setItem(
                                                                                            'adminRole',
                                                                                            'admin',
                                                                                          ),
                                                                                      sessionStorage.setItem(
                                                                                        'UserInfo',
                                                                                        JSON.stringify(
                                                                                          a
                                                                                            .data
                                                                                            .data
                                                                                            .user,
                                                                                        ),
                                                                                      ),
                                                                                      t(),
                                                                                      Object(
                                                                                        l.d,
                                                                                      )(
                                                                                        '/management/dashboard',
                                                                                      ))
                                                                                    : je(
                                                                                        !1,
                                                                                        'Failed to Login in',
                                                                                        a.message,
                                                                                      ),
                                                                                  s(
                                                                                    !1,
                                                                                  );
                                                                              case 6:
                                                                              case 'end':
                                                                                return e.stop();
                                                                            }
                                                                        },
                                                                        e,
                                                                      );
                                                                    },
                                                                  ),
                                                                );
                                                                return function () {
                                                                  return e.apply(
                                                                    this,
                                                                    arguments,
                                                                  );
                                                                };
                                                              })()())
                                                            : je(
                                                                !1,
                                                                'Failed to Login in',
                                                                n.message,
                                                              );
                                                        case 4:
                                                        case 'end':
                                                          return e.stop();
                                                      }
                                                  }, e);
                                                }),
                                              );
                                              return function () {
                                                return e.apply(this, arguments);
                                              };
                                            })()()
                                          : (s(!1),
                                            je(
                                              !1,
                                              'Failed to Login in',
                                              n.message,
                                            ));
                                      case 4:
                                      case 'end':
                                        return e.stop();
                                    }
                                  var i;
                                }, e);
                              }),
                            );
                            return function () {
                              return e.apply(this, arguments);
                            };
                          })()();
                      }),
                      children: [
                        Object(n.jsx)('div', {
                          className: 'login_phoneNo',
                          children: Object(n.jsx)(ze.a, {
                            placeholder: 'Phone Number',
                            addonBefore: '+255',
                            name: 'phone_number',
                            size: 'large',
                            onChange: function (e) {
                              f('phone_number', e.target.value);
                            },
                            style: { width: '100%' },
                          }),
                        }),
                        Object(n.jsx)('div', {
                          className: 'login_phoneNo',
                          children: Object(n.jsx)(ze.a, {
                            placeholder: 'Password',
                            name: 'password',
                            size: 'large',
                            type: 'password',
                            onChange: function (e) {
                              f('password', e.target.value);
                            },
                            style: { width: '100%' },
                          }),
                        }),
                        Object(n.jsx)('div', {
                          className: 'login_btn',
                          children: Object(n.jsxs)(T.a, {
                            type: 'primary',
                            htmlType: 'submit',
                            size: 'large',
                            loading: o,
                            children: [' ', 'Signin'],
                          }),
                        }),
                        Object(n.jsxs)('div', {
                          style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          },
                          children: [
                            Object(n.jsx)('div', {
                              style: { marginTop: 10 },
                              children: Object(n.jsxs)('p', {
                                children: [
                                  'Are you seller or buyer?!.',
                                  ' ',
                                  Object(n.jsx)(l.a, {
                                    to: '/app/login',
                                    children: ' Sign In Here',
                                  }),
                                ],
                              }),
                            }),
                            Object(n.jsx)('div', {
                              children: Object(n.jsx)(l.a, {
                                to: '/',
                                children: Object(n.jsx)('p', {
                                  children: 'Go Back',
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        un = function () {
          return Object(n.jsxs)(I, {
            title: 'Banners',
            styles: { minHeight: '90vh', overflowY: 'auto' },
            children: [
              Object(n.jsx)(tt.a, {}),
              Object(n.jsx)('div', {
                style: {
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: '100%',
                },
                children: Object(n.jsx)(T.a, {
                  type: 'ghost',
                  children: ' Edit',
                }),
              }),
              Object(n.jsx)('p', { children: 'Banner goes here!!!...' }),
            ],
          });
        },
        mn = function () {
          return Object(n.jsx)(de, {
            children: function (e) {
              var t = e.adminAccessToken,
                a = e.handleAuthDashboard;
              return t
                ? Object(n.jsx)(l.c, {
                    children: Object(n.jsxs)(ta, {
                      path: '/',
                      children: [
                        Object(n.jsx)(da, { path: 'dashboard' }),
                        Object(n.jsx)(da, { default: !0 }),
                        Object(n.jsx)(Ia, { path: 'users/*' }),
                        Object(n.jsx)(Ra, { path: 'platforms/*' }),
                        Object(n.jsx)(Ja, { path: 'price-rate/*' }),
                        Object(n.jsx)(rn, { path: 'tender-request/*' }),
                        Object(n.jsx)(ln, { path: 'tender-given/*' }),
                        Object(n.jsx)(tn, { path: 'variety/*' }),
                        Object(n.jsx)(Qa, { path: 'logs' }),
                        Object(n.jsx)(un, { path: 'banner' }),
                      ],
                    }),
                  })
                : Object(n.jsx)(l.c, {
                    children: Object(n.jsx)(dn, {
                      path: 'signin',
                      handleAuth: a,
                    }),
                  });
            },
          });
        },
        jn =
          (a(451),
          function () {
            return Object(n.jsx)(n.Fragment, {
              children: Object(n.jsx)(mn, { path: '/' }),
            });
          }),
        pn = function (e) {
          var t = Object(l.e)(),
            a = e.children;
          return (
            c.a.useEffect(
              function () {
                return window.scrollTo(0, 0);
              },
              [t.pathname],
            ),
            Object(n.jsx)(n.Fragment, { children: a })
          );
        },
        hn = function () {
          return Object(n.jsx)(n.Fragment, {
            children: Object(n.jsx)(l.c, {
              primary: !1,
              children: Object(n.jsxs)(pn, {
                path: '/',
                children: [
                  Object(n.jsx)(l.b, { from: '/', to: '/app/buyers' }),
                  Object(n.jsx)(Mt, { path: 'app/*' }),
                  Object(n.jsx)(jn, { path: 'management/*' }),
                ],
              }),
            }),
          });
        };
      a(452);
      var bn = function () {
          return Object(n.jsx)('div', {
            className: 'app',
            children: Object(n.jsx)(hn, {}),
          });
        },
        fn = (function (e) {
          Object(dt.a)(a, e);
          var t = Object(ut.a)(a);
          function a() {
            var e;
            Object(st.a)(this, a);
            for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++)
              i[c] = arguments[c];
            return (
              ((e = t.call.apply(t, [this].concat(i))).state = {
                authenticated: !1,
                userRole: '',
                adminRole: sessionStorage.getItem('adminRole'),
                userAccessToken: localStorage.getItem('accessToken'),
                adminAccessToken: sessionStorage.getItem('accessToken'),
                userInfo:
                  JSON.parse(sessionStorage.getItem('UserInfo')) ||
                  JSON.parse(localStorage.getItem('UserInfo')) ||
                  {},
              }),
              (e.logout = function () {
                localStorage.clear(),
                  location.reload(),
                  e.setState({
                    authenticated: !1,
                    userRole: '',
                    userAccessToken: '',
                  }),
                  Object(l.d)('/');
              }),
              (e.dashboardLogout = function () {
                sessionStorage.clear(),
                  e.setState({
                    authenticated: !1,
                    adminRole: '',
                    adminAccessToken: '',
                  }),
                  Object(l.d)('/management/signin');
              }),
              (e.handleAuthentication = function () {
                e.setState({
                  authenticated: !0,
                  userRole: JSON.parse(localStorage.getItem('UserRole')),
                  userAccessToken: localStorage.getItem('accessToken'),
                  userInfo: JSON.parse(localStorage.getItem('UserInfo')),
                });
              }),
              (e.handleAuthDashboard = function () {
                e.setState({
                  authenticated: !0,
                  adminRole: sessionStorage.getItem('adminRole'),
                  adminAccessToken: sessionStorage.getItem('accessToken'),
                  userInfo: JSON.parse(sessionStorage.getItem('UserInfo')),
                });
              }),
              e
            );
          }
          return (
            Object(lt.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = Object(p.a)(
                    Object(p.a)({}, this.state),
                    {},
                    {
                      handleAuthentication: this.handleAuthentication,
                      handleAuthDashboard: this.handleAuthDashboard,
                      logout: this.logout,
                      dashboardLogout: this.dashboardLogout,
                    },
                  );
                  return Object(n.jsx)(le, {
                    value: e,
                    children: this.props.children,
                  });
                },
              },
            ]),
            a
          );
        })(i.Component);
      o.a.render(
        Object(n.jsx)(c.a.StrictMode, {
          children: Object(n.jsx)(fn, { children: Object(n.jsx)(bn, {}) }),
        }),
        document.getElementById('root'),
      ),
        s();
    },
  },
  [[453, 1, 2]],
]);
//# sourceMappingURL=main.d7d299e3.chunk.js.map
