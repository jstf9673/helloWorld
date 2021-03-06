//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
/*!
 * jQuery JavaScript Library v2.1.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-18T15:11Z
 */

/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org
/**
 * @license RequireJS text 2.0.12 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

(function() {
	var e = this,
	t = e._,
	n = Array.prototype,
	r = Object.prototype,
	i = Function.prototype,
	s = n.push,
	o = n.slice,
	u = n.concat,
	a = r.toString,
	f = r.hasOwnProperty,
	l = Array.isArray,
	c = Object.keys,
	h = i.bind,
	p = function(e) {
		if (e instanceof p) return e;
		if (! (this instanceof p)) return new p(e);
		this._wrapped = e
	};
	typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = p), exports._ = p) : e._ = p,
	p.VERSION = "1.7.0";
	var d = function(e, t, n) {
		if (t === void 0) return e;
		switch (n == null ? 3 : n) {
		case 1:
			return function(n) {
				return e.call(t, n)
			};
		case 2:
			return function(n, r) {
				return e.call(t, n, r)
			};
		case 3:
			return function(n, r, i) {
				return e.call(t, n, r, i)
			};
		case 4:
			return function(n, r, i, s) {
				return e.call(t, n, r, i, s)
			}
		}
		return function() {
			return e.apply(t, arguments)
		}
	};
	p.iteratee = function(e, t, n) {
		return e == null ? p.identity: p.isFunction(e) ? d(e, t, n) : p.isObject(e) ? p.matches(e) : p.property(e)
	},
	p.each = p.forEach = function(e, t, n) {
		if (e == null) return e;
		t = d(t, n);
		var r, i = e.length;
		if (i === +i) for (r = 0; r < i; r++) t(e[r], r, e);
		else {
			var s = p.keys(e);
			for (r = 0, i = s.length; r < i; r++) t(e[s[r]], s[r], e)
		}
		return e
	},
	p.map = p.collect = function(e, t, n) {
		if (e == null) return [];
		t = p.iteratee(t, n);
		var r = e.length !== +e.length && p.keys(e),
		i = (r || e).length,
		s = Array(i),
		o;
		for (var u = 0; u < i; u++) o = r ? r[u] : u,
		s[u] = t(e[o], o, e);
		return s
	};
	var v = "Reduce of empty array with no initial value";
	p.reduce = p.foldl = p.inject = function(e, t, n, r) {
		e == null && (e = []),
		t = d(t, r, 4);
		var i = e.length !== +e.length && p.keys(e),
		s = (i || e).length,
		o = 0,
		u;
		if (arguments.length < 3) {
			if (!s) throw new TypeError(v);
			n = e[i ? i[o++] : o++]
		}
		for (; o < s; o++) u = i ? i[o] : o,
		n = t(n, e[u], u, e);
		return n
	},
	p.reduceRight = p.foldr = function(e, t, n, r) {
		e == null && (e = []),
		t = d(t, r, 4);
		var i = e.length !== +e.length && p.keys(e),
		s = (i || e).length,
		o;
		if (arguments.length < 3) {
			if (!s) throw new TypeError(v);
			n = e[i ? i[--s] : --s]
		}
		while (s--) o = i ? i[s] : s,
		n = t(n, e[o], o, e);
		return n
	},
	p.find = p.detect = function(e, t, n) {
		var r;
		return t = p.iteratee(t, n),
		p.some(e,
		function(e, n, i) {
			if (t(e, n, i)) return r = e,
			!0
		}),
		r
	},
	p.filter = p.select = function(e, t, n) {
		var r = [];
		return e == null ? r: (t = p.iteratee(t, n), p.each(e,
		function(e, n, i) {
			t(e, n, i) && r.push(e)
		}), r)
	},
	p.reject = function(e, t, n) {
		return p.filter(e, p.negate(p.iteratee(t)), n)
	},
	p.every = p.all = function(e, t, n) {
		if (e == null) return ! 0;
		t = p.iteratee(t, n);
		var r = e.length !== +e.length && p.keys(e),
		i = (r || e).length,
		s,
		o;
		for (s = 0; s < i; s++) {
			o = r ? r[s] : s;
			if (!t(e[o], o, e)) return ! 1
		}
		return ! 0
	},
	p.some = p.any = function(e, t, n) {
		if (e == null) return ! 1;
		t = p.iteratee(t, n);
		var r = e.length !== +e.length && p.keys(e),
		i = (r || e).length,
		s,
		o;
		for (s = 0; s < i; s++) {
			o = r ? r[s] : s;
			if (t(e[o], o, e)) return ! 0
		}
		return ! 1
	},
	p.contains = p.include = function(e, t) {
		return e == null ? !1 : (e.length !== +e.length && (e = p.values(e)), p.indexOf(e, t) >= 0)
	},
	p.invoke = function(e, t) {
		var n = o.call(arguments, 2),
		r = p.isFunction(t);
		return p.map(e,
		function(e) {
			return (r ? t: e[t]).apply(e, n)
		})
	},
	p.pluck = function(e, t) {
		return p.map(e, p.property(t))
	},
	p.where = function(e, t) {
		return p.filter(e, p.matches(t))
	},
	p.findWhere = function(e, t) {
		return p.find(e, p.matches(t))
	},
	p.max = function(e, t, n) {
		var r = -Infinity,
		i = -Infinity,
		s, o;
		if (t == null && e != null) {
			e = e.length === +e.length ? e: p.values(e);
			for (var u = 0,
			a = e.length; u < a; u++) s = e[u],
			s > r && (r = s)
		} else t = p.iteratee(t, n),
		p.each(e,
		function(e, n, s) {
			o = t(e, n, s);
			if (o > i || o === -Infinity && r === -Infinity) r = e,
			i = o
		});
		return r
	},
	p.min = function(e, t, n) {
		var r = Infinity,
		i = Infinity,
		s, o;
		if (t == null && e != null) {
			e = e.length === +e.length ? e: p.values(e);
			for (var u = 0,
			a = e.length; u < a; u++) s = e[u],
			s < r && (r = s)
		} else t = p.iteratee(t, n),
		p.each(e,
		function(e, n, s) {
			o = t(e, n, s);
			if (o < i || o === Infinity && r === Infinity) r = e,
			i = o
		});
		return r
	},
	p.shuffle = function(e) {
		var t = e && e.length === +e.length ? e: p.values(e),
		n = t.length,
		r = Array(n);
		for (var i = 0,
		s; i < n; i++) s = p.random(0, i),
		s !== i && (r[i] = r[s]),
		r[s] = t[i];
		return r
	},
	p.sample = function(e, t, n) {
		return t == null || n ? (e.length !== +e.length && (e = p.values(e)), e[p.random(e.length - 1)]) : p.shuffle(e).slice(0, Math.max(0, t))
	},
	p.sortBy = function(e, t, n) {
		return t = p.iteratee(t, n),
		p.pluck(p.map(e,
		function(e, n, r) {
			return {
				value: e,
				index: n,
				criteria: t(e, n, r)
			}
		}).sort(function(e, t) {
			var n = e.criteria,
			r = t.criteria;
			if (n !== r) {
				if (n > r || n === void 0) return 1;
				if (n < r || r === void 0) return - 1
			}
			return e.index - t.index
		}), "value")
	};
	var m = function(e) {
		return function(t, n, r) {
			var i = {};
			return n = p.iteratee(n, r),
			p.each(t,
			function(r, s) {
				var o = n(r, s, t);
				e(i, r, o)
			}),
			i
		}
	};
	p.groupBy = m(function(e, t, n) {
		p.has(e, n) ? e[n].push(t) : e[n] = [t]
	}),
	p.indexBy = m(function(e, t, n) {
		e[n] = t
	}),
	p.countBy = m(function(e, t, n) {
		p.has(e, n) ? e[n]++:e[n] = 1
	}),
	p.sortedIndex = function(e, t, n, r) {
		n = p.iteratee(n, r, 1);
		var i = n(t),
		s = 0,
		o = e.length;
		while (s < o) {
			var u = s + o >>> 1;
			n(e[u]) < i ? s = u + 1 : o = u
		}
		return s
	},
	p.toArray = function(e) {
		return e ? p.isArray(e) ? o.call(e) : e.length === +e.length ? p.map(e, p.identity) : p.values(e) : []
	},
	p.size = function(e) {
		return e == null ? 0 : e.length === +e.length ? e.length: p.keys(e).length
	},
	p.partition = function(e, t, n) {
		t = p.iteratee(t, n);
		var r = [],
		i = [];
		return p.each(e,
		function(e, n, s) { (t(e, n, s) ? r: i).push(e)
		}),
		[r, i]
	},
	p.first = p.head = p.take = function(e, t, n) {
		return e == null ? void 0 : t == null || n ? e[0] : t < 0 ? [] : o.call(e, 0, t)
	},
	p.initial = function(e, t, n) {
		return o.call(e, 0, Math.max(0, e.length - (t == null || n ? 1 : t)))
	},
	p.last = function(e, t, n) {
		return e == null ? void 0 : t == null || n ? e[e.length - 1] : o.call(e, Math.max(e.length - t, 0))
	},
	p.rest = p.tail = p.drop = function(e, t, n) {
		return o.call(e, t == null || n ? 1 : t)
	},
	p.compact = function(e) {
		return p.filter(e, p.identity)
	};
	var g = function(e, t, n, r) {
		if (t && p.every(e, p.isArray)) return u.apply(r, e);
		for (var i = 0,
		o = e.length; i < o; i++) {
			var a = e[i]; ! p.isArray(a) && !p.isArguments(a) ? n || r.push(a) : t ? s.apply(r, a) : g(a, t, n, r)
		}
		return r
	};
	p.flatten = function(e, t) {
		return g(e, t, !1, [])
	},
	p.without = function(e) {
		return p.difference(e, o.call(arguments, 1))
	},
	p.uniq = p.unique = function(e, t, n, r) {
		if (e == null) return [];
		p.isBoolean(t) || (r = n, n = t, t = !1),
		n != null && (n = p.iteratee(n, r));
		var i = [],
		s = [];
		for (var o = 0,
		u = e.length; o < u; o++) {
			var a = e[o];
			if (t)(!o || s !== a) && i.push(a),
			s = a;
			else if (n) {
				var f = n(a, o, e);
				p.indexOf(s, f) < 0 && (s.push(f), i.push(a))
			} else p.indexOf(i, a) < 0 && i.push(a)
		}
		return i
	},
	p.union = function() {
		return p.uniq(g(arguments, !0, !0, []))
	},
	p.intersection = function(e) {
		if (e == null) return [];
		var t = [],
		n = arguments.length;
		for (var r = 0,
		i = e.length; r < i; r++) {
			var s = e[r];
			if (p.contains(t, s)) continue;
			for (var o = 1; o < n; o++) if (!p.contains(arguments[o], s)) break;
			o === n && t.push(s)
		}
		return t
	},
	p.difference = function(e) {
		var t = g(o.call(arguments, 1), !0, !0, []);
		return p.filter(e,
		function(e) {
			return ! p.contains(t, e)
		})
	},
	p.zip = function(e) {
		if (e == null) return [];
		var t = p.max(arguments, "length").length,
		n = Array(t);
		for (var r = 0; r < t; r++) n[r] = p.pluck(arguments, r);
		return n
	},
	p.object = function(e, t) {
		if (e == null) return {};
		var n = {};
		for (var r = 0,
		i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
		return n
	},
	p.indexOf = function(e, t, n) {
		if (e == null) return - 1;
		var r = 0,
		i = e.length;
		if (n) {
			if (typeof n != "number") return r = p.sortedIndex(e, t),
			e[r] === t ? r: -1;
			r = n < 0 ? Math.max(0, i + n) : n
		}
		for (; r < i; r++) if (e[r] === t) return r;
		return - 1
	},
	p.lastIndexOf = function(e, t, n) {
		if (e == null) return - 1;
		var r = e.length;
		typeof n == "number" && (r = n < 0 ? r + n + 1 : Math.min(r, n + 1));
		while (--r >= 0) if (e[r] === t) return r;
		return - 1
	},
	p.range = function(e, t, n) {
		arguments.length <= 1 && (t = e || 0, e = 0),
		n = n || 1;
		var r = Math.max(Math.ceil((t - e) / n), 0),
		i = Array(r);
		for (var s = 0; s < r; s++, e += n) i[s] = e;
		return i
	};
	var y = function() {};
	p.bind = function(e, t) {
		var n, r;
		if (h && e.bind === h) return h.apply(e, o.call(arguments, 1));
		if (!p.isFunction(e)) throw new TypeError("Bind must be called on a function");
		return n = o.call(arguments, 2),
		r = function() {
			if (this instanceof r) {
				y.prototype = e.prototype;
				var i = new y;
				y.prototype = null;
				var s = e.apply(i, n.concat(o.call(arguments)));
				return p.isObject(s) ? s: i
			}
			return e.apply(t, n.concat(o.call(arguments)))
		},
		r
	},
	p.partial = function(e) {
		var t = o.call(arguments, 1);
		return function() {
			var n = 0,
			r = t.slice();
			for (var i = 0,
			s = r.length; i < s; i++) r[i] === p && (r[i] = arguments[n++]);
			while (n < arguments.length) r.push(arguments[n++]);
			return e.apply(this, r)
		}
	},
	p.bindAll = function(e) {
		var t, n = arguments.length,
		r;
		if (n <= 1) throw new Error("bindAll must be passed function names");
		for (t = 1; t < n; t++) r = arguments[t],
		e[r] = p.bind(e[r], e);
		return e
	},
	p.memoize = function(e, t) {
		var n = function(r) {
			var i = n.cache,
			s = t ? t.apply(this, arguments) : r;
			return p.has(i, s) || (i[s] = e.apply(this, arguments)),
			i[s]
		};
		return n.cache = {},
		n
	},
	p.delay = function(e, t) {
		var n = o.call(arguments, 2);
		return setTimeout(function() {
			return e.apply(null, n)
		},
		t)
	},
	p.defer = function(e) {
		return p.delay.apply(p, [e, 1].concat(o.call(arguments, 1)))
	},
	p.throttle = function(e, t, n) {
		var r, i, s, o = null,
		u = 0;
		n || (n = {});
		var a = function() {
			u = n.leading === !1 ? 0 : p.now(),
			o = null,
			s = e.apply(r, i),
			o || (r = i = null)
		};
		return function() {
			var f = p.now(); ! u && n.leading === !1 && (u = f);
			var l = t - (f - u);
			return r = this,
			i = arguments,
			l <= 0 || l > t ? (clearTimeout(o), o = null, u = f, s = e.apply(r, i), o || (r = i = null)) : !o && n.trailing !== !1 && (o = setTimeout(a, l)),
			s
		}
	},
	p.debounce = function(e, t, n) {
		var r, i, s, o, u, a = function() {
			var f = p.now() - o;
			f < t && f > 0 ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i), r || (s = i = null)))
		};
		return function() {
			s = this,
			i = arguments,
			o = p.now();
			var f = n && !r;
			return r || (r = setTimeout(a, t)),
			f && (u = e.apply(s, i), s = i = null),
			u
		}
	},
	p.wrap = function(e, t) {
		return p.partial(t, e)
	},
	p.negate = function(e) {
		return function() {
			return ! e.apply(this, arguments)
		}
	},
	p.compose = function() {
		var e = arguments,
		t = e.length - 1;
		return function() {
			var n = t,
			r = e[t].apply(this, arguments);
			while (n--) r = e[n].call(this, r);
			return r
		}
	},
	p.after = function(e, t) {
		return function() {
			if (--e < 1) return t.apply(this, arguments)
		}
	},
	p.before = function(e, t) {
		var n;
		return function() {
			return--e > 0 ? n = t.apply(this, arguments) : t = null,
			n
		}
	},
	p.once = p.partial(p.before, 2),
	p.keys = function(e) {
		if (!p.isObject(e)) return [];
		if (c) return c(e);
		var t = [];
		for (var n in e) p.has(e, n) && t.push(n);
		return t
	},
	p.values = function(e) {
		var t = p.keys(e),
		n = t.length,
		r = Array(n);
		for (var i = 0; i < n; i++) r[i] = e[t[i]];
		return r
	},
	p.pairs = function(e) {
		var t = p.keys(e),
		n = t.length,
		r = Array(n);
		for (var i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
		return r
	},
	p.invert = function(e) {
		var t = {},
		n = p.keys(e);
		for (var r = 0,
		i = n.length; r < i; r++) t[e[n[r]]] = n[r];
		return t
	},
	p.functions = p.methods = function(e) {
		var t = [];
		for (var n in e) p.isFunction(e[n]) && t.push(n);
		return t.sort()
	},
	p.extend = function(e) {
		if (!p.isObject(e)) return e;
		var t, n;
		for (var r = 1,
		i = arguments.length; r < i; r++) {
			t = arguments[r];
			for (n in t) f.call(t, n) && (e[n] = t[n])
		}
		return e
	},
	p.pick = function(e, t, n) {
		var r = {},
		i;
		if (e == null) return r;
		if (p.isFunction(t)) {
			t = d(t, n);
			for (i in e) {
				var s = e[i];
				t(s, i, e) && (r[i] = s)
			}
		} else {
			var a = u.apply([], o.call(arguments, 1));
			e = new Object(e);
			for (var f = 0,
			l = a.length; f < l; f++) i = a[f],
			i in e && (r[i] = e[i])
		}
		return r
	},
	p.omit = function(e, t, n) {
		if (p.isFunction(t)) t = p.negate(t);
		else {
			var r = p.map(u.apply([], o.call(arguments, 1)), String);
			t = function(e, t) {
				return ! p.contains(r, t)
			}
		}
		return p.pick(e, t, n)
	},
	p.defaults = function(e) {
		if (!p.isObject(e)) return e;
		for (var t = 1,
		n = arguments.length; t < n; t++) {
			var r = arguments[t];
			for (var i in r) e[i] === void 0 && (e[i] = r[i])
		}
		return e
	},
	p.clone = function(e) {
		return p.isObject(e) ? p.isArray(e) ? e.slice() : p.extend({},
		e) : e
	},
	p.tap = function(e, t) {
		return t(e),
		e
	};
	var b = function(e, t, n, r) {
		if (e === t) return e !== 0 || 1 / e === 1 / t;
		if (e == null || t == null) return e === t;
		e instanceof p && (e = e._wrapped),
		t instanceof p && (t = t._wrapped);
		var i = a.call(e);
		if (i !== a.call(t)) return ! 1;
		switch (i) {
		case "[object RegExp]":
		case "[object String]":
			return "" + e == "" + t;
		case "[object Number]":
			if ( + e !== +e) return + t !== +t;
			return + e === 0 ? 1 / +e === 1 / t: +e === +t;
		case "[object Date]":
		case "[object Boolean]":
			return + e === +t
		}
		if (typeof e != "object" || typeof t != "object") return ! 1;
		var s = n.length;
		while (s--) if (n[s] === e) return r[s] === t;
		var o = e.constructor,
		u = t.constructor;
		if (o !== u && "constructor" in e && "constructor" in t && !(p.isFunction(o) && o instanceof o && p.isFunction(u) && u instanceof u)) return ! 1;
		n.push(e),
		r.push(t);
		var f, l;
		if (i === "[object Array]") {
			f = e.length,
			l = f === t.length;
			if (l) while (f--) if (! (l = b(e[f], t[f], n, r))) break
		} else {
			var c = p.keys(e),
			h;
			f = c.length,
			l = p.keys(t).length === f;
			if (l) while (f--) {
				h = c[f];
				if (! (l = p.has(t, h) && b(e[h], t[h], n, r))) break
			}
		}
		return n.pop(),
		r.pop(),
		l
	};
	p.isEqual = function(e, t) {
		return b(e, t, [], [])
	},
	p.isEmpty = function(e) {
		if (e == null) return ! 0;
		if (p.isArray(e) || p.isString(e) || p.isArguments(e)) return e.length === 0;
		for (var t in e) if (p.has(e, t)) return ! 1;
		return ! 0
	},
	p.isElement = function(e) {
		return !! e && e.nodeType === 1
	},
	p.isArray = l ||
	function(e) {
		return a.call(e) === "[object Array]"
	},
	p.isObject = function(e) {
		var t = typeof e;
		return t === "function" || t === "object" && !!e
	},
	p.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"],
	function(e) {
		p["is" + e] = function(t) {
			return a.call(t) === "[object " + e + "]"
		}
	}),
	p.isArguments(arguments) || (p.isArguments = function(e) {
		return p.has(e, "callee")
	}),
	typeof / . / !="function" && (p.isFunction = function(e) {
		return typeof e == "function" || !1
	}),
	p.isFinite = function(e) {
		return isFinite(e) && !isNaN(parseFloat(e))
	},
	p.isNaN = function(e) {
		return p.isNumber(e) && e !== +e
	},
	p.isBoolean = function(e) {
		return e === !0 || e === !1 || a.call(e) === "[object Boolean]"
	},
	p.isNull = function(e) {
		return e === null
	},
	p.isUndefined = function(e) {
		return e === void 0
	},
	p.has = function(e, t) {
		return e != null && f.call(e, t)
	},
	p.noConflict = function() {
		return e._ = t,
		this
	},
	p.identity = function(e) {
		return e
	},
	p.constant = function(e) {
		return function() {
			return e
		}
	},
	p.noop = function() {},
	p.property = function(e) {
		return function(t) {
			return t[e]
		}
	},
	p.matches = function(e) {
		var t = p.pairs(e),
		n = t.length;
		return function(e) {
			if (e == null) return ! n;
			e = new Object(e);
			for (var r = 0; r < n; r++) {
				var i = t[r],
				s = i[0];
				if (i[1] !== e[s] || !(s in e)) return ! 1
			}
			return ! 0
		}
	},
	p.times = function(e, t, n) {
		var r = Array(Math.max(0, e));
		t = d(t, n, 1);
		for (var i = 0; i < e; i++) r[i] = t(i);
		return r
	},
	p.random = function(e, t) {
		return t == null && (t = e, e = 0),
		e + Math.floor(Math.random() * (t - e + 1))
	},
	p.now = Date.now ||
	function() {
		return (new Date).getTime()
	};
	var w = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#x27;",
		"`": "&#x60;"
	},
	E = p.invert(w),
	S = function(e) {
		var t = function(t) {
			return e[t]
		},
		n = "(?:" + p.keys(e).join("|") + ")",
		r = RegExp(n),
		i = RegExp(n, "g");
		return function(e) {
			return e = e == null ? "": "" + e,
			r.test(e) ? e.replace(i, t) : e
		}
	};
	p.escape = S(w),
	p.unescape = S(E),
	p.result = function(e, t) {
		if (e == null) return void 0;
		var n = e[t];
		return p.isFunction(n) ? e[t]() : n
	};
	var x = 0;
	p.uniqueId = function(e) {
		var t = ++x + "";
		return e ? e + t: t
	},
	p.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};
	var T = /(.)^/,
	N = {
		"'": "'",
		"\\": "\\",
		"\r": "r",
		"\n": "n",
		"\u2028": "u2028",
		"\u2029": "u2029"
	},
	C = /\\|'|\r|\n|\u2028|\u2029/g,
	k = function(e) {
		return "\\" + N[e]
	};
	p.template = function(e, t, n) { ! t && n && (t = n),
		t = p.defaults({},
		t, p.templateSettings);
		var r = RegExp([(t.escape || T).source, (t.interpolate || T).source, (t.evaluate || T).source].join("|") + "|$", "g"),
		i = 0,
		s = "__p+='";
		e.replace(r,
		function(t, n, r, o, u) {
			return s += e.slice(i, u).replace(C, k),
			i = u + t.length,
			n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'": r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'": o && (s += "';\n" + o + "\n__p+='"),
			t
		}),
		s += "';\n",
		t.variable || (s = "with(obj||{}){\n" + s + "}\n"),
		s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
		try {
			var o = new Function(t.variable || "obj", "_", s)
		} catch(u) {
			throw u.source = s,
			u
		}
		var a = function(e) {
			return o.call(this, e, p)
		},
		f = t.variable || "obj";
		return a.source = "function(" + f + "){\n" + s + "}",
		a
	},
	p.chain = function(e) {
		var t = p(e);
		return t._chain = !0,
		t
	};
	var L = function(e) {
		return this._chain ? p(e).chain() : e
	};
	p.mixin = function(e) {
		p.each(p.functions(e),
		function(t) {
			var n = p[t] = e[t];
			p.prototype[t] = function() {
				var e = [this._wrapped];
				return s.apply(e, arguments),
				L.call(this, n.apply(p, e))
			}
		})
	},
	p.mixin(p),
	p.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
	function(e) {
		var t = n[e];
		p.prototype[e] = function() {
			var n = this._wrapped;
			return t.apply(n, arguments),
			(e === "shift" || e === "splice") && n.length === 0 && delete n[0],
			L.call(this, n)
		}
	}),
	p.each(["concat", "join", "slice"],
	function(e) {
		var t = n[e];
		p.prototype[e] = function() {
			return L.call(this, t.apply(this._wrapped, arguments))
		}
	}),
	p.prototype.value = function() {
		return this._wrapped
	},
	typeof define == "function" && define.amd && define("underscore", [],
	function() {
		return p
	})
}).call(this),
function(e, t) {
	typeof module == "object" && typeof module.exports == "object" ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	}: t(e)
} (typeof window != "undefined" ? window: this,
function(window, noGlobal) {
	function isArraylike(e) {
		var t = e.length,
		n = jQuery.type(e);
		return n === "function" || jQuery.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
	}
	function winnow(e, t, n) {
		if (jQuery.isFunction(t)) return jQuery.grep(e,
		function(e, r) {
			return !! t.call(e, r, e) !== n
		});
		if (t.nodeType) return jQuery.grep(e,
		function(e) {
			return e === t !== n
		});
		if (typeof t == "string") {
			if (risSimple.test(t)) return jQuery.filter(t, e, n);
			t = jQuery.filter(t, e)
		}
		return jQuery.grep(e,
		function(e) {
			return indexOf.call(t, e) >= 0 !== n
		})
	}
	function sibling(e, t) {
		while ((e = e[t]) && e.nodeType !== 1);
		return e
	}
	function createOptions(e) {
		var t = optionsCache[e] = {};
		return jQuery.each(e.match(rnotwhite) || [],
		function(e, n) {
			t[n] = !0
		}),
		t
	}
	function completed() {
		document.removeEventListener("DOMContentLoaded", completed, !1),
		window.removeEventListener("load", completed, !1),
		jQuery.ready()
	}
	function Data() {
		Object.defineProperty(this.cache = {},
		0, {
			get: function() {
				return {}
			}
		}),
		this.expando = jQuery.expando + Data.uid++
	}
	function dataAttr(e, t, n) {
		var r;
		if (n === undefined && e.nodeType === 1) {
			r = "data-" + t.replace(rmultiDash, "-$1").toLowerCase(),
			n = e.getAttribute(r);
			if (typeof n == "string") {
				try {
					n = n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null: +n + "" === n ? +n: rbrace.test(n) ? jQuery.parseJSON(n) : n
				} catch(i) {}
				data_user.set(e, t, n)
			} else n = undefined
		}
		return n
	}
	function returnTrue() {
		return ! 0
	}
	function returnFalse() {
		return ! 1
	}
	function safeActiveElement() {
		try {
			return document.activeElement
		} catch(e) {}
	}
	function manipulationTarget(e, t) {
		return jQuery.nodeName(e, "table") && jQuery.nodeName(t.nodeType !== 11 ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}
	function disableScript(e) {
		return e.type = (e.getAttribute("type") !== null) + "/" + e.type,
		e
	}
	function restoreScript(e) {
		var t = rscriptTypeMasked.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"),
		e
	}
	function setGlobalEval(e, t) {
		var n = 0,
		r = e.length;
		for (; n < r; n++) data_priv.set(e[n], "globalEval", !t || data_priv.get(t[n], "globalEval"))
	}
	function cloneCopyEvent(e, t) {
		var n, r, i, s, o, u, a, f;
		if (t.nodeType !== 1) return;
		if (data_priv.hasData(e)) {
			s = data_priv.access(e),
			o = data_priv.set(t, s),
			f = s.events;
			if (f) {
				delete o.handle,
				o.events = {};
				for (i in f) for (n = 0, r = f[i].length; n < r; n++) jQuery.event.add(t, i, f[i][n])
			}
		}
		data_user.hasData(e) && (u = data_user.access(e), a = jQuery.extend({},
		u), data_user.set(t, a))
	}
	function getAll(e, t) {
		var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return t === undefined || t && jQuery.nodeName(e, t) ? jQuery.merge([e], n) : n
	}
	function fixInput(e, t) {
		var n = t.nodeName.toLowerCase();
		if (n === "input" && rcheckableType.test(e.type)) t.checked = e.checked;
		else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
	}
	function actualDisplay(e, t) {
		var n, r = jQuery(t.createElement(e)).appendTo(t.body),
		i = window.getDefaultComputedStyle && (n = window.getDefaultComputedStyle(r[0])) ? n.display: jQuery.css(r[0], "display");
		return r.detach(),
		i
	}
	function defaultDisplay(e) {
		var t = document,
		n = elemdisplay[e];
		if (!n) {
			n = actualDisplay(e, t);
			if (n === "none" || !n) iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
			t = iframe[0].contentDocument,
			t.write(),
			t.close(),
			n = actualDisplay(e, t),
			iframe.detach();
			elemdisplay[e] = n
		}
		return n
	}
	function curCSS(e, t, n) {
		var r, i, s, o, u = e.style;
		return n = n || getStyles(e),
		n && (o = n.getPropertyValue(t) || n[t]),
		n && (o === "" && !jQuery.contains(e.ownerDocument, e) && (o = jQuery.style(e, t)), rnumnonpx.test(o) && rmargin.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s)),
		o !== undefined ? o + "": o
	}
	function addGetHookIf(e, t) {
		return {
			get: function() {
				if (e()) {
					delete this.get;
					return
				}
				return (this.get = t).apply(this, arguments)
			}
		}
	}
	function vendorPropName(e, t) {
		if (t in e) return t;
		var n = t[0].toUpperCase() + t.slice(1),
		r = t,
		i = cssPrefixes.length;
		while (i--) {
			t = cssPrefixes[i] + n;
			if (t in e) return t
		}
		return r
	}
	function setPositiveNumber(e, t, n) {
		var r = rnumsplit.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}
	function augmentWidthOrHeight(e, t, n, r, i) {
		var s = n === (r ? "border": "content") ? 4 : t === "width" ? 1 : 0,
		o = 0;
		for (; s < 4; s += 2) n === "margin" && (o += jQuery.css(e, n + cssExpand[s], !0, i)),
		r ? (n === "content" && (o -= jQuery.css(e, "padding" + cssExpand[s], !0, i)), n !== "margin" && (o -= jQuery.css(e, "border" + cssExpand[s] + "Width", !0, i))) : (o += jQuery.css(e, "padding" + cssExpand[s], !0, i), n !== "padding" && (o += jQuery.css(e, "border" + cssExpand[s] + "Width", !0, i)));
		return o
	}
	function getWidthOrHeight(e, t, n) {
		var r = !0,
		i = t === "width" ? e.offsetWidth: e.offsetHeight,
		s = getStyles(e),
		o = jQuery.css(e, "boxSizing", !1, s) === "border-box";
		if (i <= 0 || i == null) {
			i = curCSS(e, t, s);
			if (i < 0 || i == null) i = e.style[t];
			if (rnumnonpx.test(i)) return i;
			r = o && (support.boxSizingReliable() || i === e.style[t]),
			i = parseFloat(i) || 0
		}
		return i + augmentWidthOrHeight(e, t, n || (o ? "border": "content"), r, s) + "px"
	}
	function showHide(e, t) {
		var n, r, i, s = [],
		o = 0,
		u = e.length;
		for (; o < u; o++) {
			r = e[o];
			if (!r.style) continue;
			s[o] = data_priv.get(r, "olddisplay"),
			n = r.style.display,
			t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && isHidden(r) && (s[o] = data_priv.access(r, "olddisplay", defaultDisplay(r.nodeName)))) : (i = isHidden(r), (n !== "none" || !i) && data_priv.set(r, "olddisplay", i ? n: jQuery.css(r, "display")))
		}
		for (o = 0; o < u; o++) {
			r = e[o];
			if (!r.style) continue;
			if (!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "": "none"
		}
		return e
	}
	function Tween(e, t, n, r, i) {
		return new Tween.prototype.init(e, t, n, r, i)
	}
	function createFxNow() {
		return setTimeout(function() {
			fxNow = undefined
		}),
		fxNow = jQuery.now()
	}
	function genFx(e, t) {
		var n, r = 0,
		i = {
			height: e
		};
		t = t ? 1 : 0;
		for (; r < 4; r += 2 - t) n = cssExpand[r],
		i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e),
		i
	}
	function createTween(e, t, n) {
		var r, i = (tweeners[t] || []).concat(tweeners["*"]),
		s = 0,
		o = i.length;
		for (; s < o; s++) if (r = i[s].call(n, t, e)) return r
	}
	function defaultPrefilter(e, t, n) {
		var r, i, s, o, u, a, f, l, c = this,
		h = {},
		p = e.style,
		d = e.nodeType && isHidden(e),
		v = data_priv.get(e, "fxshow");
		n.queue || (u = jQuery._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
			u.unqueued || a()
		}), u.unqueued++, c.always(function() {
			c.always(function() {
				u.unqueued--,
				jQuery.queue(e, "fx").length || u.empty.fire()
			})
		})),
		e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], f = jQuery.css(e, "display"), l = f === "none" ? data_priv.get(e, "olddisplay") || defaultDisplay(e.nodeName) : f, l === "inline" && jQuery.css(e, "float") === "none" && (p.display = "inline-block")),
		n.overflow && (p.overflow = "hidden", c.always(function() {
			p.overflow = n.overflow[0],
			p.overflowX = n.overflow[1],
			p.overflowY = n.overflow[2]
		}));
		for (r in t) {
			i = t[r];
			if (rfxtypes.exec(i)) {
				delete t[r],
				s = s || i === "toggle";
				if (i === (d ? "hide": "show")) {
					if (i !== "show" || !v || v[r] === undefined) continue;
					d = !0
				}
				h[r] = v && v[r] || jQuery.style(e, r)
			} else f = undefined
		}
		if (!jQuery.isEmptyObject(h)) {
			v ? "hidden" in v && (d = v.hidden) : v = data_priv.access(e, "fxshow", {}),
			s && (v.hidden = !d),
			d ? jQuery(e).show() : c.done(function() {
				jQuery(e).hide()
			}),
			c.done(function() {
				var t;
				data_priv.remove(e, "fxshow");
				for (t in h) jQuery.style(e, t, h[t])
			});
			for (r in h) o = createTween(d ? v[r] : 0, r, c),
			r in v || (v[r] = o.start, d && (o.end = o.start, o.start = r === "width" || r === "height" ? 1 : 0))
		} else(f === "none" ? defaultDisplay(e.nodeName) : f) === "inline" && (p.display = f)
	}
	function propFilter(e, t) {
		var n, r, i, s, o;
		for (n in e) {
			r = jQuery.camelCase(n),
			i = t[r],
			s = e[n],
			jQuery.isArray(s) && (i = s[1], s = e[n] = s[0]),
			n !== r && (e[r] = s, delete e[n]),
			o = jQuery.cssHooks[r];
			if (o && "expand" in o) {
				s = o.expand(s),
				delete e[r];
				for (n in s) n in e || (e[n] = s[n], t[n] = i)
			} else t[r] = i
		}
	}
	function Animation(e, t, n) {
		var r, i, s = 0,
		o = animationPrefilters.length,
		u = jQuery.Deferred().always(function() {
			delete a.elem
		}),
		a = function() {
			if (i) return ! 1;
			var t = fxNow || createFxNow(),
			n = Math.max(0, f.startTime + f.duration - t),
			r = n / f.duration || 0,
			s = 1 - r,
			o = 0,
			a = f.tweens.length;
			for (; o < a; o++) f.tweens[o].run(s);
			return u.notifyWith(e, [f, s, n]),
			s < 1 && a ? n: (u.resolveWith(e, [f]), !1)
		},
		f = u.promise({
			elem: e,
			props: jQuery.extend({},
			t),
			opts: jQuery.extend(!0, {
				specialEasing: {}
			},
			n),
			originalProperties: t,
			originalOptions: n,
			startTime: fxNow || createFxNow(),
			duration: n.duration,
			tweens: [],
			createTween: function(t, n) {
				var r = jQuery.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
				return f.tweens.push(r),
				r
			},
			stop: function(t) {
				var n = 0,
				r = t ? f.tweens.length: 0;
				if (i) return this;
				i = !0;
				for (; n < r; n++) f.tweens[n].run(1);
				return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]),
				this
			}
		}),
		l = f.props;
		propFilter(l, f.opts.specialEasing);
		for (; s < o; s++) {
			r = animationPrefilters[s].call(f, e, l, f.opts);
			if (r) return r
		}
		return jQuery.map(l, createTween, f),
		jQuery.isFunction(f.opts.start) && f.opts.start.call(e, f),
		jQuery.fx.timer(jQuery.extend(a, {
			elem: e,
			anim: f,
			queue: f.opts.queue
		})),
		f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
	}
	function addToPrefiltersOrTransports(e) {
		return function(t, n) {
			typeof t != "string" && (n = t, t = "*");
			var r, i = 0,
			s = t.toLowerCase().match(rnotwhite) || [];
			if (jQuery.isFunction(n)) while (r = s[i++]) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}
	function inspectPrefiltersOrTransports(e, t, n, r) {
		function o(u) {
			var a;
			return i[u] = !0,
			jQuery.each(e[u] || [],
			function(e, u) {
				var f = u(t, n, r);
				if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f),
				o(f),
				!1;
				if (s) return ! (a = f)
			}),
			a
		}
		var i = {},
		s = e === transports;
		return o(t.dataTypes[0]) || !i["*"] && o("*")
	}
	function ajaxExtend(e, t) {
		var n, r, i = jQuery.ajaxSettings.flatOptions || {};
		for (n in t) t[n] !== undefined && ((i[n] ? e: r || (r = {}))[n] = t[n]);
		return r && jQuery.extend(!0, e, r),
		e
	}
	function ajaxHandleResponses(e, t, n) {
		var r, i, s, o, u = e.contents,
		a = e.dataTypes;
		while (a[0] === "*") a.shift(),
		r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if (r) for (i in u) if (u[i] && u[i].test(r)) {
			a.unshift(i);
			break
		}
		if (a[0] in n) s = a[0];
		else {
			for (i in n) {
				if (!a[0] || e.converters[i + " " + a[0]]) {
					s = i;
					break
				}
				o || (o = i)
			}
			s = s || o
		}
		if (s) return s !== a[0] && a.unshift(s),
		n[s]
	}
	function ajaxConvert(e, t, n, r) {
		var i, s, o, u, a, f = {},
		l = e.dataTypes.slice();
		if (l[1]) for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
		s = l.shift();
		while (s) {
			e.responseFields[s] && (n[e.responseFields[s]] = t),
			!a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
			a = s,
			s = l.shift();
			if (s) if (s === "*") s = a;
			else if (a !== "*" && a !== s) {
				o = f[a + " " + s] || f["* " + s];
				if (!o) for (i in f) {
					u = i.split(" ");
					if (u[1] === s) {
						o = f[a + " " + u[0]] || f["* " + u[0]];
						if (o) {
							o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
							break
						}
					}
				}
				if (o !== !0) if (o && e["throws"]) t = o(t);
				else try {
					t = o(t)
				} catch(c) {
					return {
						state: "parsererror",
						error: o ? c: "No conversion from " + a + " to " + s
					}
				}
			}
		}
		return {
			state: "success",
			data: t
		}
	}
	function buildParams(e, t, n, r) {
		var i;
		if (jQuery.isArray(t)) jQuery.each(t,
		function(t, i) {
			n || rbracket.test(e) ? r(e, i) : buildParams(e + "[" + (typeof i == "object" ? t: "") + "]", i, n, r)
		});
		else if (!n && jQuery.type(t) === "object") for (i in t) buildParams(e + "[" + i + "]", t[i], n, r);
		else r(e, t)
	}
	function getWindow(e) {
		return jQuery.isWindow(e) ? e: e.nodeType === 9 && e.defaultView
	}
	var arr = [],
	slice = arr.slice,
	concat = arr.concat,
	push = arr.push,
	indexOf = arr.indexOf,
	class2type = {},
	toString = class2type.toString,
	hasOwn = class2type.hasOwnProperty,
	support = {},
	document = window.document,
	version = "2.1.3",
	jQuery = function(e, t) {
		return new jQuery.fn.init(e, t)
	},
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,
	fcamelCase = function(e, t) {
		return t.toUpperCase()
	};
	jQuery.fn = jQuery.prototype = {
		jquery: version,
		constructor: jQuery,
		selector: "",
		length: 0,
		toArray: function() {
			return slice.call(this)
		},
		get: function(e) {
			return e != null ? e < 0 ? this[e + this.length] : this[e] : slice.call(this)
		},
		pushStack: function(e) {
			var t = jQuery.merge(this.constructor(), e);
			return t.prevObject = this,
			t.context = this.context,
			t
		},
		each: function(e, t) {
			return jQuery.each(this, e, t)
		},
		map: function(e) {
			return this.pushStack(jQuery.map(this,
			function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(slice.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq( - 1)
		},
		eq: function(e) {
			var t = this.length,
			n = +e + (e < 0 ? t: 0);
			return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: push,
		sort: arr.sort,
		splice: arr.splice
	},
	jQuery.extend = jQuery.fn.extend = function() {
		var e, t, n, r, i, s, o = arguments[0] || {},
		u = 1,
		a = arguments.length,
		f = !1;
		typeof o == "boolean" && (f = o, o = arguments[u] || {},
		u++),
		typeof o != "object" && !jQuery.isFunction(o) && (o = {}),
		u === a && (o = this, u--);
		for (; u < a; u++) if ((e = arguments[u]) != null) for (t in e) {
			n = o[t],
			r = e[t];
			if (o === r) continue;
			f && r && (jQuery.isPlainObject(r) || (i = jQuery.isArray(r))) ? (i ? (i = !1, s = n && jQuery.isArray(n) ? n: []) : s = n && jQuery.isPlainObject(n) ? n: {},
			o[t] = jQuery.extend(f, s, r)) : r !== undefined && (o[t] = r)
		}
		return o
	},
	jQuery.extend({
		expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return jQuery.type(e) === "function"
		},
		isArray: Array.isArray,
		isWindow: function(e) {
			return e != null && e === e.window
		},
		isNumeric: function(e) {
			return ! jQuery.isArray(e) && e - parseFloat(e) + 1 >= 0
		},
		isPlainObject: function(e) {
			return jQuery.type(e) !== "object" || e.nodeType || jQuery.isWindow(e) ? !1 : e.constructor && !hasOwn.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return ! 1;
			return ! 0
		},
		type: function(e) {
			return e == null ? e + "": typeof e == "object" || typeof e == "function" ? class2type[toString.call(e)] || "object": typeof e
		},
		globalEval: function(code) {
			var script, indirect = eval;
			code = jQuery.trim(code),
			code && (code.indexOf("use strict") === 1 ? (script = document.createElement("script"), script.text = code, document.head.appendChild(script).parentNode.removeChild(script)) : indirect(code))
		},
		camelCase: function(e) {
			return e.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, n) {
			var r, i = 0,
			s = e.length,
			o = isArraylike(e);
			if (n) if (o) for (; i < s; i++) {
				r = t.apply(e[i], n);
				if (r === !1) break
			} else for (i in e) {
				r = t.apply(e[i], n);
				if (r === !1) break
			} else if (o) for (; i < s; i++) {
				r = t.call(e[i], i, e[i]);
				if (r === !1) break
			} else for (i in e) {
				r = t.call(e[i], i, e[i]);
				if (r === !1) break
			}
			return e
		},
		trim: function(e) {
			return e == null ? "": (e + "").replace(rtrim, "")
		},
		makeArray: function(e, t) {
			var n = t || [];
			return e != null && (isArraylike(Object(e)) ? jQuery.merge(n, typeof e == "string" ? [e] : e) : push.call(n, e)),
			n
		},
		inArray: function(e, t, n) {
			return t == null ? -1 : indexOf.call(t, e, n)
		},
		merge: function(e, t) {
			var n = +t.length,
			r = 0,
			i = e.length;
			for (; r < n; r++) e[i++] = t[r];
			return e.length = i,
			e
		},
		grep: function(e, t, n) {
			var r, i = [],
			s = 0,
			o = e.length,
			u = !n;
			for (; s < o; s++) r = !t(e[s], s),
			r !== u && i.push(e[s]);
			return i
		},
		map: function(e, t, n) {
			var r, i = 0,
			s = e.length,
			o = isArraylike(e),
			u = [];
			if (o) for (; i < s; i++) r = t(e[i], i, n),
			r != null && u.push(r);
			else for (i in e) r = t(e[i], i, n),
			r != null && u.push(r);
			return concat.apply([], u)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, r, i;
			return typeof t == "string" && (n = e[t], t = e, e = n),
			jQuery.isFunction(e) ? (r = slice.call(arguments, 2), i = function() {
				return e.apply(t || this, r.concat(slice.call(arguments)))
			},
			i.guid = e.guid = e.guid || jQuery.guid++, i) : undefined
		},
		now: Date.now,
		support: support
	}),
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
	function(e, t) {
		class2type["[object " + t + "]"] = t.toLowerCase()
	});
	var Sizzle = function(e) {
		function ot(e, t, r, i) {
			var s, u, f, l, c, d, g, y, S, x; (t ? t.ownerDocument || t: E) !== p && h(t),
			t = t || p,
			r = r || [],
			l = t.nodeType;
			if (typeof e != "string" || !e || l !== 1 && l !== 9 && l !== 11) return r;
			if (!i && v) {
				if (l !== 11 && (s = Z.exec(e))) if (f = s[1]) {
					if (l === 9) {
						u = t.getElementById(f);
						if (!u || !u.parentNode) return r;
						if (u.id === f) return r.push(u),
						r
					} else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && b(t, u) && u.id === f) return r.push(u),
					r
				} else {
					if (s[2]) return D.apply(r, t.getElementsByTagName(e)),
					r;
					if ((f = s[3]) && n.getElementsByClassName) return D.apply(r, t.getElementsByClassName(f)),
					r
				}
				if (n.qsa && (!m || !m.test(e))) {
					y = g = w,
					S = t,
					x = l !== 1 && e;
					if (l === 1 && t.nodeName.toLowerCase() !== "object") {
						d = o(e),
						(g = t.getAttribute("id")) ? y = g.replace(tt, "\\$&") : t.setAttribute("id", y),
						y = "[id='" + y + "'] ",
						c = d.length;
						while (c--) d[c] = y + gt(d[c]);
						S = et.test(e) && vt(t.parentNode) || t,
						x = d.join(",")
					}
					if (x) try {
						return D.apply(r, S.querySelectorAll(x)),
						r
					} catch(T) {} finally {
						g || t.removeAttribute("id")
					}
				}
			}
			return a(e.replace(z, "$1"), t, r, i)
		}
		function ut() {
			function t(n, i) {
				return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
				t[n + " "] = i
			}
			var e = [];
			return t
		}
		function at(e) {
			return e[w] = !0,
			e
		}
		function ft(e) {
			var t = p.createElement("div");
			try {
				return !! e(t)
			} catch(n) {
				return ! 1
			} finally {
				t.parentNode && t.parentNode.removeChild(t),
				t = null
			}
		}
		function lt(e, t) {
			var n = e.split("|"),
			i = e.length;
			while (i--) r.attrHandle[n[i]] = t
		}
		function ct(e, t) {
			var n = t && e,
			r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || L) - (~e.sourceIndex || L);
			if (r) return r;
			if (n) while (n = n.nextSibling) if (n === t) return - 1;
			return e ? 1 : -1
		}
		function ht(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return n === "input" && t.type === e
			}
		}
		function pt(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return (n === "input" || n === "button") && t.type === e
			}
		}
		function dt(e) {
			return at(function(t) {
				return t = +t,
				at(function(n, r) {
					var i, s = e([], n.length, t),
					o = s.length;
					while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}
		function vt(e) {
			return e && typeof e.getElementsByTagName != "undefined" && e
		}
		function mt() {}
		function gt(e) {
			var t = 0,
			n = e.length,
			r = "";
			for (; t < n; t++) r += e[t].value;
			return r
		}
		function yt(e, t, n) {
			var r = t.dir,
			i = n && r === "parentNode",
			s = x++;
			return t.first ?
			function(t, n, s) {
				while (t = t[r]) if (t.nodeType === 1 || i) return e(t, n, s)
			}: function(t, n, o) {
				var u, a, f = [S, s];
				if (o) {
					while (t = t[r]) if (t.nodeType === 1 || i) if (e(t, n, o)) return ! 0
				} else while (t = t[r]) if (t.nodeType === 1 || i) {
					a = t[w] || (t[w] = {});
					if ((u = a[r]) && u[0] === S && u[1] === s) return f[2] = u[2];
					a[r] = f;
					if (f[2] = e(t, n, o)) return ! 0
				}
			}
		}
		function bt(e) {
			return e.length > 1 ?
			function(t, n, r) {
				var i = e.length;
				while (i--) if (!e[i](t, n, r)) return ! 1;
				return ! 0
			}: e[0]
		}
		function wt(e, t, n) {
			var r = 0,
			i = t.length;
			for (; r < i; r++) ot(e, t[r], n);
			return n
		}
		function Et(e, t, n, r, i) {
			var s, o = [],
			u = 0,
			a = e.length,
			f = t != null;
			for (; u < a; u++) if (s = e[u]) if (!n || n(s, r, i)) o.push(s),
			f && t.push(u);
			return o
		}
		function St(e, t, n, r, i, s) {
			return r && !r[w] && (r = St(r)),
			i && !i[w] && (i = St(i, s)),
			at(function(s, o, u, a) {
				var f, l, c, h = [],
				p = [],
				d = o.length,
				v = s || wt(t || "*", u.nodeType ? [u] : u, []),
				m = e && (s || !t) ? Et(v, h, e, u, a) : v,
				g = n ? i || (s ? e: d || r) ? [] : o: m;
				n && n(m, g, u, a);
				if (r) {
					f = Et(g, p),
					r(f, [], u, a),
					l = f.length;
					while (l--) if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
				}
				if (s) {
					if (i || e) {
						if (i) {
							f = [],
							l = g.length;
							while (l--)(c = g[l]) && f.push(m[l] = c);
							i(null, g = [], f, a)
						}
						l = g.length;
						while (l--)(c = g[l]) && (f = i ? H(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
					}
				} else g = Et(g === o ? g.splice(d, g.length) : g),
				i ? i(null, o, g, a) : D.apply(o, g)
			})
		}
		function xt(e) {
			var t, n, i, s = e.length,
			o = r.relative[e[0].type],
			u = o || r.relative[" "],
			a = o ? 1 : 0,
			l = yt(function(e) {
				return e === t
			},
			u, !0),
			c = yt(function(e) {
				return H(t, e) > -1
			},
			u, !0),
			h = [function(e, n, r) {
				var i = !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
				return t = null,
				i
			}];
			for (; a < s; a++) if (n = r.relative[e[a].type]) h = [yt(bt(h), n)];
			else {
				n = r.filter[e[a].type].apply(null, e[a].matches);
				if (n[w]) {
					i = ++a;
					for (; i < s; i++) if (r.relative[e[i].type]) break;
					return St(a > 1 && bt(h), a > 1 && gt(e.slice(0, a - 1).concat({
						value: e[a - 2].type === " " ? "*": ""
					})).replace(z, "$1"), n, a < i && xt(e.slice(a, i)), i < s && xt(e = e.slice(i)), i < s && gt(e))
				}
				h.push(n)
			}
			return bt(h)
		}
		function Tt(e, t) {
			var n = t.length > 0,
			i = e.length > 0,
			s = function(s, o, u, a, l) {
				var c, h, d, v = 0,
				m = "0",
				g = s && [],
				y = [],
				b = f,
				w = s || i && r.find.TAG("*", l),
				E = S += b == null ? 1 : Math.random() || .1,
				x = w.length;
				l && (f = o !== p && o);
				for (; m !== x && (c = w[m]) != null; m++) {
					if (i && c) {
						h = 0;
						while (d = e[h++]) if (d(c, o, u)) {
							a.push(c);
							break
						}
						l && (S = E)
					}
					n && ((c = !d && c) && v--, s && g.push(c))
				}
				v += m;
				if (n && m !== v) {
					h = 0;
					while (d = t[h++]) d(g, y, o, u);
					if (s) {
						if (v > 0) while (m--) ! g[m] && !y[m] && (y[m] = M.call(a));
						y = Et(y)
					}
					D.apply(a, y),
					l && !s && y.length > 0 && v + t.length > 1 && ot.uniqueSort(a)
				}
				return l && (S = E, f = b),
				g
			};
			return n ? at(s) : s
		}
		var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w = "sizzle" + 1 * new Date,
		E = e.document,
		S = 0,
		x = 0,
		T = ut(),
		N = ut(),
		C = ut(),
		k = function(e, t) {
			return e === t && (c = !0),
			0
		},
		L = 1 << 31,
		A = {}.hasOwnProperty,
		O = [],
		M = O.pop,
		_ = O.push,
		D = O.push,
		P = O.slice,
		H = function(e, t) {
			var n = 0,
			r = e.length;
			for (; n < r; n++) if (e[n] === t) return n;
			return - 1
		},
		B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		j = "[\\x20\\t\\r\\n\\f]",
		F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
		I = F.replace("w", "w#"),
		q = "\\[" + j + "*(" + F + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + j + "*\\]",
		R = ":(" + F + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|" + ".*" + ")\\)|)",
		U = new RegExp(j + "+", "g"),
		z = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
		W = new RegExp("^" + j + "*," + j + "*"),
		X = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
		V = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
		$ = new RegExp(R),
		J = new RegExp("^" + I + "$"),
		K = {
			ID: new RegExp("^#(" + F + ")"),
			CLASS: new RegExp("^\\.(" + F + ")"),
			TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
			ATTR: new RegExp("^" + q),
			PSEUDO: new RegExp("^" + R),
			CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
			bool: new RegExp("^(?:" + B + ")$", "i"),
			needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
		},
		Q = /^(?:input|select|textarea|button)$/i,
		G = /^h\d$/i,
		Y = /^[^{]+\{\s*\[native \w/,
		Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		et = /[+~]/,
		tt = /'|\\/g,
		nt = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
		rt = function(e, t, n) {
			var r = "0x" + t - 65536;
			return r !== r || n ? t: r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
		},
		it = function() {
			h()
		};
		try {
			D.apply(O = P.call(E.childNodes), E.childNodes),
			O[E.childNodes.length].nodeType
		} catch(st) {
			D = {
				apply: O.length ?
				function(e, t) {
					_.apply(e, P.call(t))
				}: function(e, t) {
					var n = e.length,
					r = 0;
					while (e[n++] = t[r++]);
					e.length = n - 1
				}
			}
		}
		n = ot.support = {},
		s = ot.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? t.nodeName !== "HTML": !1
		},
		h = ot.setDocument = function(e) {
			var t, i, o = e ? e.ownerDocument || e: E;
			if (o === p || o.nodeType !== 9 || !o.documentElement) return p;
			p = o,
			d = o.documentElement,
			i = o.defaultView,
			i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", it, !1) : i.attachEvent && i.attachEvent("onunload", it)),
			v = !s(o),
			n.attributes = ft(function(e) {
				return e.className = "i",
				!e.getAttribute("className")
			}),
			n.getElementsByTagName = ft(function(e) {
				return e.appendChild(o.createComment("")),
				!e.getElementsByTagName("*").length
			}),
			n.getElementsByClassName = Y.test(o.getElementsByClassName),
			n.getById = ft(function(e) {
				return d.appendChild(e).id = w,
				!o.getElementsByName || !o.getElementsByName(w).length
			}),
			n.getById ? (r.find.ID = function(e, t) {
				if (typeof t.getElementById != "undefined" && v) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			},
			r.filter.ID = function(e) {
				var t = e.replace(nt, rt);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (delete r.find.ID, r.filter.ID = function(e) {
				var t = e.replace(nt, rt);
				return function(e) {
					var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
					return n && n.value === t
				}
			}),
			r.find.TAG = n.getElementsByTagName ?
			function(e, t) {
				if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(e);
				if (n.qsa) return t.querySelectorAll(e)
			}: function(e, t) {
				var n, r = [],
				i = 0,
				s = t.getElementsByTagName(e);
				if (e === "*") {
					while (n = s[i++]) n.nodeType === 1 && r.push(n);
					return r
				}
				return s
			},
			r.find.CLASS = n.getElementsByClassName &&
			function(e, t) {
				if (v) return t.getElementsByClassName(e)
			},
			g = [],
			m = [];
			if (n.qsa = Y.test(o.querySelectorAll)) ft(function(e) {
				d.appendChild(e).innerHTML = "<a id='" + w + "'></a>" + "<select id='" + w + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>",
				e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"),
				e.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + B + ")"),
				e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="),
				e.querySelectorAll(":checked").length || m.push(":checked"),
				e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
			}),
			ft(function(e) {
				var t = o.createElement("input");
				t.setAttribute("type", "hidden"),
				e.appendChild(t).setAttribute("name", "D"),
				e.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="),
				e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"),
				e.querySelectorAll("*,:x"),
				m.push(",.*:")
			});
			return (n.matchesSelector = Y.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ft(function(e) {
				n.disconnectedMatch = y.call(e, "div"),
				y.call(e, "[s!='']:x"),
				g.push("!=", R)
			}),
			m = m.length && new RegExp(m.join("|")),
			g = g.length && new RegExp(g.join("|")),
			t = Y.test(d.compareDocumentPosition),
			b = t || Y.test(d.contains) ?
			function(e, t) {
				var n = e.nodeType === 9 ? e.documentElement: e,
				r = t && t.parentNode;
				return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
			}: function(e, t) {
				if (t) while (t = t.parentNode) if (t === e) return ! 0;
				return ! 1
			},
			k = t ?
			function(e, t) {
				if (e === t) return c = !0,
				0;
				var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return r ? r: (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, r & 1 || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === o || e.ownerDocument === E && b(E, e) ? -1 : t === o || t.ownerDocument === E && b(E, t) ? 1 : l ? H(l, e) - H(l, t) : 0 : r & 4 ? -1 : 1)
			}: function(e, t) {
				if (e === t) return c = !0,
				0;
				var n, r = 0,
				i = e.parentNode,
				s = t.parentNode,
				u = [e],
				a = [t];
				if (!i || !s) return e === o ? -1 : t === o ? 1 : i ? -1 : s ? 1 : l ? H(l, e) - H(l, t) : 0;
				if (i === s) return ct(e, t);
				n = e;
				while (n = n.parentNode) u.unshift(n);
				n = t;
				while (n = n.parentNode) a.unshift(n);
				while (u[r] === a[r]) r++;
				return r ? ct(u[r], a[r]) : u[r] === E ? -1 : a[r] === E ? 1 : 0
			},
			o
		},
		ot.matches = function(e, t) {
			return ot(e, null, null, t)
		},
		ot.matchesSelector = function(e, t) { (e.ownerDocument || e) !== p && h(e),
			t = t.replace(V, "='$1']");
			if (n.matchesSelector && v && (!g || !g.test(t)) && (!m || !m.test(t))) try {
				var r = y.call(e, t);
				if (r || n.disconnectedMatch || e.document && e.document.nodeType !== 11) return r
			} catch(i) {}
			return ot(t, p, null, [e]).length > 0
		},
		ot.contains = function(e, t) {
			return (e.ownerDocument || e) !== p && h(e),
			b(e, t)
		},
		ot.attr = function(e, t) { (e.ownerDocument || e) !== p && h(e);
			var i = r.attrHandle[t.toLowerCase()],
			s = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : undefined;
			return s !== undefined ? s: n.attributes || !v ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value: null
		},
		ot.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		},
		ot.uniqueSort = function(e) {
			var t, r = [],
			i = 0,
			s = 0;
			c = !n.detectDuplicates,
			l = !n.sortStable && e.slice(0),
			e.sort(k);
			if (c) {
				while (t = e[s++]) t === e[s] && (i = r.push(s));
				while (i--) e.splice(r[i], 1)
			}
			return l = null,
			e
		},
		i = ot.getText = function(e) {
			var t, n = "",
			r = 0,
			s = e.nodeType;
			if (!s) while (t = e[r++]) n += i(t);
			else if (s === 1 || s === 9 || s === 11) {
				if (typeof e.textContent == "string") return e.textContent;
				for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
			} else if (s === 3 || s === 4) return e.nodeValue;
			return n
		},
		r = ot.selectors = {
			cacheLength: 50,
			createPseudo: at,
			match: K,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(nt, rt),
					e[3] = (e[3] || e[4] || e[5] || "").replace(nt, rt),
					e[2] === "~=" && (e[3] = " " + e[3] + " "),
					e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(),
					e[1].slice(0, 3) === "nth" ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ot.error(e[0]),
					e
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return K.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": n && $.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(nt, rt).toLowerCase();
					return e === "*" ?
					function() {
						return ! 0
					}: function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = T[e + " "];
					return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && T(e,
					function(e) {
						return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute != "undefined" && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, t, n) {
					return function(r) {
						var i = ot.attr(r, e);
						return i == null ? t === "!=": t ? (i += "", t === "=" ? i === n: t === "!=" ? i !== n: t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice( - n.length) === n: t === "~=" ? (" " + i.replace(U, " ") + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-": !1) : !0
					}
				},
				CHILD: function(e, t, n, r, i) {
					var s = e.slice(0, 3) !== "nth",
					o = e.slice( - 4) !== "last",
					u = t === "of-type";
					return r === 1 && i === 0 ?
					function(e) {
						return !! e.parentNode
					}: function(t, n, a) {
						var f, l, c, h, p, d, v = s !== o ? "nextSibling": "previousSibling",
						m = t.parentNode,
						g = u && t.nodeName.toLowerCase(),
						y = !a && !u;
						if (m) {
							if (s) {
								while (v) {
									c = t;
									while (c = c[v]) if (u ? c.nodeName.toLowerCase() === g: c.nodeType === 1) return ! 1;
									d = v = e === "only" && !d && "nextSibling"
								}
								return ! 0
							}
							d = [o ? m.firstChild: m.lastChild];
							if (o && y) {
								l = m[w] || (m[w] = {}),
								f = l[e] || [],
								p = f[0] === S && f[1],
								h = f[0] === S && f[2],
								c = p && m.childNodes[p];
								while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) if (c.nodeType === 1 && ++h && c === t) {
									l[e] = [S, p, h];
									break
								}
							} else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === S) h = f[1];
							else while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) if ((u ? c.nodeName.toLowerCase() === g: c.nodeType === 1) && ++h) {
								y && ((c[w] || (c[w] = {}))[e] = [S, h]);
								if (c === t) break
							}
							return h -= i,
							h === r || h % r === 0 && h / r >= 0
						}
					}
				},
				PSEUDO: function(e, t) {
					var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
					return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function(e, n) {
						var r, s = i(e, t),
						o = s.length;
						while (o--) r = H(e, s[o]),
						e[r] = !(n[r] = s[o])
					}) : function(e) {
						return i(e, 0, n)
					}) : i
				}
			},
			pseudos: {
				not: at(function(e) {
					var t = [],
					n = [],
					r = u(e.replace(z, "$1"));
					return r[w] ? at(function(e, t, n, i) {
						var s, o = r(e, null, i, []),
						u = e.length;
						while (u--) if (s = o[u]) e[u] = !(t[u] = s)
					}) : function(e, i, s) {
						return t[0] = e,
						r(t, null, s, n),
						t[0] = null,
						!n.pop()
					}
				}),
				has: at(function(e) {
					return function(t) {
						return ot(e, t).length > 0
					}
				}),
				contains: at(function(e) {
					return e = e.replace(nt, rt),
					function(t) {
						return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
					}
				}),
				lang: at(function(e) {
					return J.test(e || "") || ot.error("unsupported lang: " + e),
					e = e.replace(nt, rt).toLowerCase(),
					function(t) {
						var n;
						do
						if (n = v ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
						n === e || n.indexOf(e + "-") === 0;
						while ((t = t.parentNode) && t.nodeType === 1);
						return ! 1
					}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === d
				},
				focus: function(e) {
					return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return t === "input" && !!e.checked || t === "option" && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex,
					e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
					return ! 0
				},
				parent: function(e) {
					return ! r.pseudos.empty(e)
				},
				header: function(e) {
					return G.test(e.nodeName)
				},
				input: function(e) {
					return Q.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return t === "input" && e.type === "button" || t === "button"
				},
				text: function(e) {
					var t;
					return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
				},
				first: dt(function() {
					return [0]
				}),
				last: dt(function(e, t) {
					return [t - 1]
				}),
				eq: dt(function(e, t, n) {
					return [n < 0 ? n + t: n]
				}),
				even: dt(function(e, t) {
					var n = 0;
					for (; n < t; n += 2) e.push(n);
					return e
				}),
				odd: dt(function(e, t) {
					var n = 1;
					for (; n < t; n += 2) e.push(n);
					return e
				}),
				lt: dt(function(e, t, n) {
					var r = n < 0 ? n + t: n;
					for (; --r >= 0;) e.push(r);
					return e
				}),
				gt: dt(function(e, t, n) {
					var r = n < 0 ? n + t: n;
					for (; ++r < t;) e.push(r);
					return e
				})
			}
		},
		r.pseudos.nth = r.pseudos.eq;
		for (t in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) r.pseudos[t] = ht(t);
		for (t in {
			submit: !0,
			reset: !0
		}) r.pseudos[t] = pt(t);
		return mt.prototype = r.filters = r.pseudos,
		r.setFilters = new mt,
		o = ot.tokenize = function(e, t) {
			var n, i, s, o, u, a, f, l = N[e + " "];
			if (l) return t ? 0 : l.slice(0);
			u = e,
			a = [],
			f = r.preFilter;
			while (u) {
				if (!n || (i = W.exec(u))) i && (u = u.slice(i[0].length) || u),
				a.push(s = []);
				n = !1;
				if (i = X.exec(u)) n = i.shift(),
				s.push({
					value: n,
					type: i[0].replace(z, " ")
				}),
				u = u.slice(n.length);
				for (o in r.filter)(i = K[o].exec(u)) && (!f[o] || (i = f[o](i))) && (n = i.shift(), s.push({
					value: n,
					type: o,
					matches: i
				}), u = u.slice(n.length));
				if (!n) break
			}
			return t ? u.length: u ? ot.error(e) : N(e, a).slice(0)
		},
		u = ot.compile = function(e, t) {
			var n, r = [],
			i = [],
			s = C[e + " "];
			if (!s) {
				t || (t = o(e)),
				n = t.length;
				while (n--) s = xt(t[n]),
				s[w] ? r.push(s) : i.push(s);
				s = C(e, Tt(i, r)),
				s.selector = e
			}
			return s
		},
		a = ot.select = function(e, t, i, s) {
			var a, f, l, c, h, p = typeof e == "function" && e,
			d = !s && o(e = p.selector || e);
			i = i || [];
			if (d.length === 1) {
				f = d[0] = d[0].slice(0);
				if (f.length > 2 && (l = f[0]).type === "ID" && n.getById && t.nodeType === 9 && v && r.relative[f[1].type]) {
					t = (r.find.ID(l.matches[0].replace(nt, rt), t) || [])[0];
					if (!t) return i;
					p && (t = t.parentNode),
					e = e.slice(f.shift().value.length)
				}
				a = K.needsContext.test(e) ? 0 : f.length;
				while (a--) {
					l = f[a];
					if (r.relative[c = l.type]) break;
					if (h = r.find[c]) if (s = h(l.matches[0].replace(nt, rt), et.test(f[0].type) && vt(t.parentNode) || t)) {
						f.splice(a, 1),
						e = s.length && gt(f);
						if (!e) return D.apply(i, s),
						i;
						break
					}
				}
			}
			return (p || u(e, d))(s, t, !v, i, et.test(e) && vt(t.parentNode) || t),
			i
		},
		n.sortStable = w.split("").sort(k).join("") === w,
		n.detectDuplicates = !!c,
		h(),
		n.sortDetached = ft(function(e) {
			return e.compareDocumentPosition(p.createElement("div")) & 1
		}),
		ft(function(e) {
			return e.innerHTML = "<a href='#'></a>",
			e.firstChild.getAttribute("href") === "#"
		}) || lt("type|href|height|width",
		function(e, t, n) {
			if (!n) return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
		}),
		(!n.attributes || !ft(function(e) {
			return e.innerHTML = "<input/>",
			e.firstChild.setAttribute("value", ""),
			e.firstChild.getAttribute("value") === ""
		})) && lt("value",
		function(e, t, n) {
			if (!n && e.nodeName.toLowerCase() === "input") return e.defaultValue
		}),
		ft(function(e) {
			return e.getAttribute("disabled") == null
		}) || lt(B,
		function(e, t, n) {
			var r;
			if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
		}),
		ot
	} (window);
	jQuery.find = Sizzle,
	jQuery.expr = Sizzle.selectors,
	jQuery.expr[":"] = jQuery.expr.pseudos,
	jQuery.unique = Sizzle.uniqueSort,
	jQuery.text = Sizzle.getText,
	jQuery.isXMLDoc = Sizzle.isXML,
	jQuery.contains = Sizzle.contains;
	var rneedsContext = jQuery.expr.match.needsContext,
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	risSimple = /^.[^:#\[\.,]*$/;
	jQuery.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"),
		t.length === 1 && r.nodeType === 1 ? jQuery.find.matchesSelector(r, e) ? [r] : [] : jQuery.find.matches(e, jQuery.grep(t,
		function(e) {
			return e.nodeType === 1
		}))
	},
	jQuery.fn.extend({
		find: function(e) {
			var t, n = this.length,
			r = [],
			i = this;
			if (typeof e != "string") return this.pushStack(jQuery(e).filter(function() {
				for (t = 0; t < n; t++) if (jQuery.contains(i[t], this)) return ! 0
			}));
			for (t = 0; t < n; t++) jQuery.find(e, i[t], r);
			return r = this.pushStack(n > 1 ? jQuery.unique(r) : r),
			r.selector = this.selector ? this.selector + " " + e: e,
			r
		},
		filter: function(e) {
			return this.pushStack(winnow(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(winnow(this, e || [], !0))
		},
		is: function(e) {
			return !! winnow(this, typeof e == "string" && rneedsContext.test(e) ? jQuery(e) : e || [], !1).length
		}
	});
	var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	init = jQuery.fn.init = function(e, t) {
		var n, r;
		if (!e) return this;
		if (typeof e == "string") {
			e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? n = [null, e, null] : n = rquickExpr.exec(e);
			if (n && (n[1] || !t)) {
				if (n[1]) {
					t = t instanceof jQuery ? t[0] : t,
					jQuery.merge(this, jQuery.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t: document, !0));
					if (rsingleTag.test(n[1]) && jQuery.isPlainObject(t)) for (n in t) jQuery.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
					return this
				}
				return r = document.getElementById(n[2]),
				r && r.parentNode && (this.length = 1, this[0] = r),
				this.context = document,
				this.selector = e,
				this
			}
			return ! t || t.jquery ? (t || rootjQuery).find(e) : this.constructor(t).find(e)
		}
		return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : jQuery.isFunction(e) ? typeof rootjQuery.ready != "undefined" ? rootjQuery.ready(e) : e(jQuery) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), jQuery.makeArray(e, this))
	};
	init.prototype = jQuery.fn,
	rootjQuery = jQuery(document);
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	guaranteedUnique = {
		children: !0,
		contents: !0,
		next: !0,
		prev: !0
	};
	jQuery.extend({
		dir: function(e, t, n) {
			var r = [],
			i = n !== undefined;
			while ((e = e[t]) && e.nodeType !== 9) if (e.nodeType === 1) {
				if (i && jQuery(e).is(n)) break;
				r.push(e)
			}
			return r
		},
		sibling: function(e, t) {
			var n = [];
			for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
			return n
		}
	}),
	jQuery.fn.extend({
		has: function(e) {
			var t = jQuery(e, this),
			n = t.length;
			return this.filter(function() {
				var e = 0;
				for (; e < n; e++) if (jQuery.contains(this, t[e])) return ! 0
			})
		},
		closest: function(e, t) {
			var n, r = 0,
			i = this.length,
			s = [],
			o = rneedsContext.test(e) || typeof e != "string" ? jQuery(e, t || this.context) : 0;
			for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && jQuery.find.matchesSelector(n, e))) {
				s.push(n);
				break
			}
			return this.pushStack(s.length > 1 ? jQuery.unique(s) : s)
		},
		index: function(e) {
			return e ? typeof e == "string" ? indexOf.call(jQuery(e), this[0]) : indexOf.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
		},
		add: function(e, t) {
			return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(e, t))))
		},
		addBack: function(e) {
			return this.add(e == null ? this.prevObject: this.prevObject.filter(e))
		}
	}),
	jQuery.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && t.nodeType !== 11 ? t: null
		},
		parents: function(e) {
			return jQuery.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return jQuery.dir(e, "parentNode", n)
		},
		next: function(e) {
			return sibling(e, "nextSibling")
		},
		prev: function(e) {
			return sibling(e, "previousSibling")
		},
		nextAll: function(e) {
			return jQuery.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return jQuery.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return jQuery.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return jQuery.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return jQuery.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return jQuery.sibling(e.firstChild)
		},
		contents: function(e) {
			return e.contentDocument || jQuery.merge([], e.childNodes)
		}
	},
	function(e, t) {
		jQuery.fn[e] = function(n, r) {
			var i = jQuery.map(this, t, n);
			return e.slice( - 5) !== "Until" && (r = n),
			r && typeof r == "string" && (i = jQuery.filter(r, i)),
			this.length > 1 && (guaranteedUnique[e] || jQuery.unique(i), rparentsprev.test(e) && i.reverse()),
			this.pushStack(i)
		}
	});
	var rnotwhite = /\S+/g,
	optionsCache = {};
	jQuery.Callbacks = function(e) {
		e = typeof e == "string" ? optionsCache[e] || createOptions(e) : jQuery.extend({},
		e);
		var t, n, r, i, s, o, u = [],
		a = !e.once && [],
		f = function(c) {
			t = e.memory && c,
			n = !0,
			o = i || 0,
			i = 0,
			s = u.length,
			r = !0;
			for (; u && o < s; o++) if (u[o].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
				t = !1;
				break
			}
			r = !1,
			u && (a ? a.length && f(a.shift()) : t ? u = [] : l.disable())
		},
		l = {
			add: function() {
				if (u) {
					var n = u.length; (function o(t) {
						jQuery.each(t,
						function(t, n) {
							var r = jQuery.type(n);
							r === "function" ? (!e.unique || !l.has(n)) && u.push(n) : n && n.length && r !== "string" && o(n)
						})
					})(arguments),
					r ? s = u.length: t && (i = n, f(t))
				}
				return this
			},
			remove: function() {
				return u && jQuery.each(arguments,
				function(e, t) {
					var n;
					while ((n = jQuery.inArray(t, u, n)) > -1) u.splice(n, 1),
					r && (n <= s && s--, n <= o && o--)
				}),
				this
			},
			has: function(e) {
				return e ? jQuery.inArray(e, u) > -1 : !!u && !!u.length
			},
			empty: function() {
				return u = [],
				s = 0,
				this
			},
			disable: function() {
				return u = a = t = undefined,
				this
			},
			disabled: function() {
				return ! u
			},
			lock: function() {
				return a = undefined,
				t || l.disable(),
				this
			},
			locked: function() {
				return ! a
			},
			fireWith: function(e, t) {
				return u && (!n || a) && (t = t || [], t = [e, t.slice ? t.slice() : t], r ? a.push(t) : f(t)),
				this
			},
			fire: function() {
				return l.fireWith(this, arguments),
				this
			},
			fired: function() {
				return !! n
			}
		};
		return l
	},
	jQuery.extend({
		Deferred: function(e) {
			var t = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
			n = "pending",
			r = {
				state: function() {
					return n
				},
				always: function() {
					return i.done(arguments).fail(arguments),
					this
				},
				then: function() {
					var e = arguments;
					return jQuery.Deferred(function(n) {
						jQuery.each(t,
						function(t, s) {
							var o = jQuery.isFunction(e[t]) && e[t];
							i[s[1]](function() {
								var e = o && o.apply(this, arguments);
								e && jQuery.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
							})
						}),
						e = null
					}).promise()
				},
				promise: function(e) {
					return e != null ? jQuery.extend(e, r) : r
				}
			},
			i = {};
			return r.pipe = r.then,
			jQuery.each(t,
			function(e, s) {
				var o = s[2],
				u = s[3];
				r[s[1]] = o.add,
				u && o.add(function() {
					n = u
				},
				t[e ^ 1][2].disable, t[2][2].lock),
				i[s[0]] = function() {
					return i[s[0] + "With"](this === i ? r: this, arguments),
					this
				},
				i[s[0] + "With"] = o.fireWith
			}),
			r.promise(i),
			e && e.call(i, i),
			i
		},
		when: function(e) {
			var t = 0,
			n = slice.call(arguments),
			r = n.length,
			i = r !== 1 || e && jQuery.isFunction(e.promise) ? r: 0,
			s = i === 1 ? e: jQuery.Deferred(),
			o = function(e, t, n) {
				return function(r) {
					t[e] = this,
					n[e] = arguments.length > 1 ? slice.call(arguments) : r,
					n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
				}
			},
			u,
			a,
			f;
			if (r > 1) {
				u = new Array(r),
				a = new Array(r),
				f = new Array(r);
				for (; t < r; t++) n[t] && jQuery.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
			}
			return i || s.resolveWith(f, n),
			s.promise()
		}
	});
	var readyList;
	jQuery.fn.ready = function(e) {
		return jQuery.ready.promise().done(e),
		this
	},
	jQuery.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? jQuery.readyWait++:jQuery.ready(!0)
		},
		ready: function(e) {
			if (e === !0 ? --jQuery.readyWait: jQuery.isReady) return;
			jQuery.isReady = !0;
			if (e !== !0 && --jQuery.readyWait > 0) return;
			readyList.resolveWith(document, [jQuery]),
			jQuery.fn.triggerHandler && (jQuery(document).triggerHandler("ready"), jQuery(document).off("ready"))
		}
	}),
	jQuery.ready.promise = function(e) {
		return readyList || (readyList = jQuery.Deferred(), document.readyState === "complete" ? setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", completed, !1), window.addEventListener("load", completed, !1))),
		readyList.promise(e)
	},
	jQuery.ready.promise();
	var access = jQuery.access = function(e, t, n, r, i, s, o) {
		var u = 0,
		a = e.length,
		f = n == null;
		if (jQuery.type(n) === "object") {
			i = !0;
			for (u in n) jQuery.access(e, t, u, n[u], !0, s, o)
		} else if (r !== undefined) {
			i = !0,
			jQuery.isFunction(r) || (o = !0),
			f && (o ? (t.call(e, r), t = null) : (f = t, t = function(e, t, n) {
				return f.call(jQuery(e), n)
			}));
			if (t) for (; u < a; u++) t(e[u], n, o ? r: r.call(e[u], u, t(e[u], n)))
		}
		return i ? e: f ? t.call(e) : a ? t(e[0], n) : s
	};
	jQuery.acceptData = function(e) {
		return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
	},
	Data.uid = 1,
	Data.accepts = jQuery.acceptData,
	Data.prototype = {
		key: function(e) {
			if (!Data.accepts(e)) return 0;
			var t = {},
			n = e[this.expando];
			if (!n) {
				n = Data.uid++;
				try {
					t[this.expando] = {
						value: n
					},
					Object.defineProperties(e, t)
				} catch(r) {
					t[this.expando] = n,
					jQuery.extend(e, t)
				}
			}
			return this.cache[n] || (this.cache[n] = {}),
			n
		},
		set: function(e, t, n) {
			var r, i = this.key(e),
			s = this.cache[i];
			if (typeof t == "string") s[t] = n;
			else if (jQuery.isEmptyObject(s)) jQuery.extend(this.cache[i], t);
			else for (r in t) s[r] = t[r];
			return s
		},
		get: function(e, t) {
			var n = this.cache[this.key(e)];
			return t === undefined ? n: n[t]
		},
		access: function(e, t, n) {
			var r;
			return t === undefined || t && typeof t == "string" && n === undefined ? (r = this.get(e, t), r !== undefined ? r: this.get(e, jQuery.camelCase(t))) : (this.set(e, t, n), n !== undefined ? n: t)
		},
		remove: function(e, t) {
			var n, r, i, s = this.key(e),
			o = this.cache[s];
			if (t === undefined) this.cache[s] = {};
			else {
				jQuery.isArray(t) ? r = t.concat(t.map(jQuery.camelCase)) : (i = jQuery.camelCase(t), t in o ? r = [t, i] : (r = i, r = r in o ? [r] : r.match(rnotwhite) || [])),
				n = r.length;
				while (n--) delete o[r[n]]
			}
		},
		hasData: function(e) {
			return ! jQuery.isEmptyObject(this.cache[e[this.expando]] || {})
		},
		discard: function(e) {
			e[this.expando] && delete this.cache[e[this.expando]]
		}
	};
	var data_priv = new Data,
	data_user = new Data,
	rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;
	jQuery.extend({
		hasData: function(e) {
			return data_user.hasData(e) || data_priv.hasData(e)
		},
		data: function(e, t, n) {
			return data_user.access(e, t, n)
		},
		removeData: function(e, t) {
			data_user.remove(e, t)
		},
		_data: function(e, t, n) {
			return data_priv.access(e, t, n)
		},
		_removeData: function(e, t) {
			data_priv.remove(e, t)
		}
	}),
	jQuery.fn.extend({
		data: function(e, t) {
			var n, r, i, s = this[0],
			o = s && s.attributes;
			if (e === undefined) {
				if (this.length) {
					i = data_user.get(s);
					if (s.nodeType === 1 && !data_priv.get(s, "hasDataAttrs")) {
						n = o.length;
						while (n--) o[n] && (r = o[n].name, r.indexOf("data-") === 0 && (r = jQuery.camelCase(r.slice(5)), dataAttr(s, r, i[r])));
						data_priv.set(s, "hasDataAttrs", !0)
					}
				}
				return i
			}
			return typeof e == "object" ? this.each(function() {
				data_user.set(this, e)
			}) : access(this,
			function(t) {
				var n, r = jQuery.camelCase(e);
				if (s && t === undefined) {
					n = data_user.get(s, e);
					if (n !== undefined) return n;
					n = data_user.get(s, r);
					if (n !== undefined) return n;
					n = dataAttr(s, r, undefined);
					if (n !== undefined) return n;
					return
				}
				this.each(function() {
					var n = data_user.get(this, r);
					data_user.set(this, r, t),
					e.indexOf("-") !== -1 && n !== undefined && data_user.set(this, e, t)
				})
			},
			null, t, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				data_user.remove(this, e)
			})
		}
	}),
	jQuery.extend({
		queue: function(e, t, n) {
			var r;
			if (e) return t = (t || "fx") + "queue",
			r = data_priv.get(e, t),
			n && (!r || jQuery.isArray(n) ? r = data_priv.access(e, t, jQuery.makeArray(n)) : r.push(n)),
			r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = jQuery.queue(e, t),
			r = n.length,
			i = n.shift(),
			s = jQuery._queueHooks(e, t),
			o = function() {
				jQuery.dequeue(e, t)
			};
			i === "inprogress" && (i = n.shift(), r--),
			i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)),
			!r && s && s.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return data_priv.get(e, n) || data_priv.access(e, n, {
				empty: jQuery.Callbacks("once memory").add(function() {
					data_priv.remove(e, [t + "queue", n])
				})
			})
		}
	}),
	jQuery.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return typeof e != "string" && (t = e, e = "fx", n--),
			arguments.length < n ? jQuery.queue(this[0], e) : t === undefined ? this: this.each(function() {
				var n = jQuery.queue(this, e, t);
				jQuery._queueHooks(this, e),
				e === "fx" && n[0] !== "inprogress" && jQuery.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				jQuery.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
			i = jQuery.Deferred(),
			s = this,
			o = this.length,
			u = function() {--r || i.resolveWith(s, [s])
			};
			typeof e != "string" && (t = e, e = undefined),
			e = e || "fx";
			while (o--) n = data_priv.get(s[o], e + "queueHooks"),
			n && n.empty && (r++, n.empty.add(u));
			return u(),
			i.promise(t)
		}
	});
	var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	cssExpand = ["Top", "Right", "Bottom", "Left"],
	isHidden = function(e, t) {
		return e = t || e,
		jQuery.css(e, "display") === "none" || !jQuery.contains(e.ownerDocument, e)
	},
	rcheckableType = /^(?:checkbox|radio)$/i; (function() {
		var e = document.createDocumentFragment(),
		t = e.appendChild(document.createElement("div")),
		n = document.createElement("input");
		n.setAttribute("type", "radio"),
		n.setAttribute("checked", "checked"),
		n.setAttribute("name", "t"),
		t.appendChild(n),
		support.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
		t.innerHTML = "<textarea>x</textarea>",
		support.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
	})();
	var strundefined = typeof undefined;
	support.focusinBubbles = "onfocusin" in window;
	var rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
	jQuery.event = {
		global: {},
		add: function(e, t, n, r, i) {
			var s, o, u, a, f, l, c, h, p, d, v, m = data_priv.get(e);
			if (!m) return;
			n.handler && (s = n, n = s.handler, i = s.selector),
			n.guid || (n.guid = jQuery.guid++),
			(a = m.events) || (a = m.events = {}),
			(o = m.handle) || (o = m.handle = function(t) {
				return typeof jQuery !== strundefined && jQuery.event.triggered !== t.type ? jQuery.event.dispatch.apply(e, arguments) : undefined
			}),
			t = (t || "").match(rnotwhite) || [""],
			f = t.length;
			while (f--) {
				u = rtypenamespace.exec(t[f]) || [],
				p = v = u[1],
				d = (u[2] || "").split(".").sort();
				if (!p) continue;
				c = jQuery.event.special[p] || {},
				p = (i ? c.delegateType: c.bindType) || p,
				c = jQuery.event.special[p] || {},
				l = jQuery.extend({
					type: p,
					origType: v,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && jQuery.expr.match.needsContext.test(i),
					namespace: d.join(".")
				},
				s),
				(h = a[p]) || (h = a[p] = [], h.delegateCount = 0, (!c.setup || c.setup.call(e, r, d, o) === !1) && e.addEventListener && e.addEventListener(p, o, !1)),
				c.add && (c.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)),
				i ? h.splice(h.delegateCount++, 0, l) : h.push(l),
				jQuery.event.global[p] = !0
			}
		},
		remove: function(e, t, n, r, i) {
			var s, o, u, a, f, l, c, h, p, d, v, m = data_priv.hasData(e) && data_priv.get(e);
			if (!m || !(a = m.events)) return;
			t = (t || "").match(rnotwhite) || [""],
			f = t.length;
			while (f--) {
				u = rtypenamespace.exec(t[f]) || [],
				p = v = u[1],
				d = (u[2] || "").split(".").sort();
				if (!p) {
					for (p in a) jQuery.event.remove(e, p + t[f], n, r, !0);
					continue
				}
				c = jQuery.event.special[p] || {},
				p = (r ? c.delegateType: c.bindType) || p,
				h = a[p] || [],
				u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
				o = s = h.length;
				while (s--) l = h[s],
				(i || v === l.origType) && (!n || n.guid === l.guid) && (!u || u.test(l.namespace)) && (!r || r === l.selector || r === "**" && l.selector) && (h.splice(s, 1), l.selector && h.delegateCount--, c.remove && c.remove.call(e, l));
				o && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && jQuery.removeEvent(e, p, m.handle), delete a[p])
			}
			jQuery.isEmptyObject(a) && (delete m.handle, data_priv.remove(e, "events"))
		},
		trigger: function(e, t, n, r) {
			var i, s, o, u, a, f, l, c = [n || document],
			h = hasOwn.call(e, "type") ? e.type: e,
			p = hasOwn.call(e, "namespace") ? e.namespace.split(".") : [];
			s = o = n = n || document;
			if (n.nodeType === 3 || n.nodeType === 8) return;
			if (rfocusMorph.test(h + jQuery.event.triggered)) return;
			h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()),
			a = h.indexOf(":") < 0 && "on" + h,
			e = e[jQuery.expando] ? e: new jQuery.Event(h, typeof e == "object" && e),
			e.isTrigger = r ? 2 : 3,
			e.namespace = p.join("."),
			e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
			e.result = undefined,
			e.target || (e.target = n),
			t = t == null ? [e] : jQuery.makeArray(t, [e]),
			l = jQuery.event.special[h] || {};
			if (!r && l.trigger && l.trigger.apply(n, t) === !1) return;
			if (!r && !l.noBubble && !jQuery.isWindow(n)) {
				u = l.delegateType || h,
				rfocusMorph.test(u + h) || (s = s.parentNode);
				for (; s; s = s.parentNode) c.push(s),
				o = s;
				o === (n.ownerDocument || document) && c.push(o.defaultView || o.parentWindow || window)
			}
			i = 0;
			while ((s = c[i++]) && !e.isPropagationStopped()) e.type = i > 1 ? u: l.bindType || h,
			f = (data_priv.get(s, "events") || {})[e.type] && data_priv.get(s, "handle"),
			f && f.apply(s, t),
			f = a && s[a],
			f && f.apply && jQuery.acceptData(s) && (e.result = f.apply(s, t), e.result === !1 && e.preventDefault());
			return e.type = h,
			!r && !e.isDefaultPrevented() && (!l._default || l._default.apply(c.pop(), t) === !1) && jQuery.acceptData(n) && a && jQuery.isFunction(n[h]) && !jQuery.isWindow(n) && (o = n[a], o && (n[a] = null), jQuery.event.triggered = h, n[h](), jQuery.event.triggered = undefined, o && (n[a] = o)),
			e.result
		},
		dispatch: function(e) {
			e = jQuery.event.fix(e);
			var t, n, r, i, s, o = [],
			u = slice.call(arguments),
			a = (data_priv.get(this, "events") || {})[e.type] || [],
			f = jQuery.event.special[e.type] || {};
			u[0] = e,
			e.delegateTarget = this;
			if (f.preDispatch && f.preDispatch.call(this, e) === !1) return;
			o = jQuery.event.handlers.call(this, e, a),
			t = 0;
			while ((i = o[t++]) && !e.isPropagationStopped()) {
				e.currentTarget = i.elem,
				n = 0;
				while ((s = i.handlers[n++]) && !e.isImmediatePropagationStopped()) if (!e.namespace_re || e.namespace_re.test(s.namespace)) e.handleObj = s,
				e.data = s.data,
				r = ((jQuery.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, u),
				r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())
			}
			return f.postDispatch && f.postDispatch.call(this, e),
			e.result
		},
		handlers: function(e, t) {
			var n, r, i, s, o = [],
			u = t.delegateCount,
			a = e.target;
			if (u && a.nodeType && (!e.button || e.type !== "click")) for (; a !== this; a = a.parentNode || this) if (a.disabled !== !0 || e.type !== "click") {
				r = [];
				for (n = 0; n < u; n++) s = t[n],
				i = s.selector + " ",
				r[i] === undefined && (r[i] = s.needsContext ? jQuery(i, this).index(a) >= 0 : jQuery.find(i, this, null, [a]).length),
				r[i] && r.push(s);
				r.length && o.push({
					elem: a,
					handlers: r
				})
			}
			return u < t.length && o.push({
				elem: this,
				handlers: t.slice(u)
			}),
			o
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return e.which == null && (e.which = t.charCode != null ? t.charCode: t.keyCode),
				e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, r, i, s = t.button;
				return e.pageX == null && t.clientX != null && (n = e.target.ownerDocument || document, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
				!e.which && s !== undefined && (e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0),
				e
			}
		},
		fix: function(e) {
			if (e[jQuery.expando]) return e;
			var t, n, r, i = e.type,
			s = e,
			o = this.fixHooks[i];
			o || (this.fixHooks[i] = o = rmouseEvent.test(i) ? this.mouseHooks: rkeyEvent.test(i) ? this.keyHooks: {}),
			r = o.props ? this.props.concat(o.props) : this.props,
			e = new jQuery.Event(s),
			t = r.length;
			while (t--) n = r[t],
			e[n] = s[n];
			return e.target || (e.target = document),
			e.target.nodeType === 3 && (e.target = e.target.parentNode),
			o.filter ? o.filter(e, s) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== safeActiveElement() && this.focus) return this.focus(),
					!1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === safeActiveElement() && this.blur) return this.blur(),
					!1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) return this.click(),
					!1
				},
				_default: function(e) {
					return jQuery.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = jQuery.extend(new jQuery.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? jQuery.event.trigger(i, null, t) : jQuery.event.dispatch.call(t, i),
			i.isDefaultPrevented() && n.preventDefault()
		}
	},
	jQuery.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	},
	jQuery.Event = function(e, t) {
		if (! (this instanceof jQuery.Event)) return new jQuery.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === !1 ? returnTrue: returnFalse) : this.type = e,
		t && jQuery.extend(this, t),
		this.timeStamp = e && e.timeStamp || jQuery.now(),
		this[jQuery.expando] = !0
	},
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = returnTrue,
			e && e.preventDefault && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = returnTrue,
			e && e.stopPropagation && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = returnTrue,
			e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
			this.stopPropagation()
		}
	},
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	},
	function(e, t) {
		jQuery.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
				i = e.relatedTarget,
				s = e.handleObj;
				if (!i || i !== r && !jQuery.contains(r, i)) e.type = s.origType,
				n = s.handler.apply(this, arguments),
				e.type = t;
				return n
			}
		}
	}),
	support.focusinBubbles || jQuery.each({
		focus: "focusin",
		blur: "focusout"
	},
	function(e, t) {
		var n = function(e) {
			jQuery.event.simulate(t, e.target, jQuery.event.fix(e), !0)
		};
		jQuery.event.special[t] = {
			setup: function() {
				var r = this.ownerDocument || this,
				i = data_priv.access(r, t);
				i || r.addEventListener(e, n, !0),
				data_priv.access(r, t, (i || 0) + 1)
			},
			teardown: function() {
				var r = this.ownerDocument || this,
				i = data_priv.access(r, t) - 1;
				i ? data_priv.access(r, t, i) : (r.removeEventListener(e, n, !0), data_priv.remove(r, t))
			}
		}
	}),
	jQuery.fn.extend({
		on: function(e, t, n, r, i) {
			var s, o;
			if (typeof e == "object") {
				typeof t != "string" && (n = n || t, t = undefined);
				for (o in e) this.on(o, t, n, e[o], i);
				return this
			}
			n == null && r == null ? (r = t, n = t = undefined) : r == null && (typeof t == "string" ? (r = n, n = undefined) : (r = n, n = t, t = undefined));
			if (r === !1) r = returnFalse;
			else if (!r) return this;
			return i === 1 && (s = r, r = function(e) {
				return jQuery().off(e),
				s.apply(this, arguments)
			},
			r.guid = s.guid || (s.guid = jQuery.guid++)),
			this.each(function() {
				jQuery.event.add(this, e, r, n, t)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
			jQuery(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
			this;
			if (typeof e == "object") {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			if (t === !1 || typeof t == "function") n = t,
			t = undefined;
			return n === !1 && (n = returnFalse),
			this.each(function() {
				jQuery.event.remove(this, e, n, t)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				jQuery.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return jQuery.event.trigger(e, t, n, !0)
		}
	});
	var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	wrapMap = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""]
	};
	wrapMap.optgroup = wrapMap.option,
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead,
	wrapMap.th = wrapMap.td,
	jQuery.extend({
		clone: function(e, t, n) {
			var r, i, s, o, u = e.cloneNode(!0),
			a = jQuery.contains(e.ownerDocument, e);
			if (!support.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !jQuery.isXMLDoc(e)) {
				o = getAll(u),
				s = getAll(e);
				for (r = 0, i = s.length; r < i; r++) fixInput(s[r], o[r])
			}
			if (t) if (n) {
				s = s || getAll(e),
				o = o || getAll(u);
				for (r = 0, i = s.length; r < i; r++) cloneCopyEvent(s[r], o[r])
			} else cloneCopyEvent(e, u);
			return o = getAll(u, "script"),
			o.length > 0 && setGlobalEval(o, !a && getAll(e, "script")),
			u
		},
		buildFragment: function(e, t, n, r) {
			var i, s, o, u, a, f, l = t.createDocumentFragment(),
			c = [],
			h = 0,
			p = e.length;
			for (; h < p; h++) {
				i = e[h];
				if (i || i === 0) if (jQuery.type(i) === "object") jQuery.merge(c, i.nodeType ? [i] : i);
				else if (!rhtml.test(i)) c.push(t.createTextNode(i));
				else {
					s = s || l.appendChild(t.createElement("div")),
					o = (rtagName.exec(i) || ["", ""])[1].toLowerCase(),
					u = wrapMap[o] || wrapMap._default,
					s.innerHTML = u[1] + i.replace(rxhtmlTag, "<$1></$2>") + u[2],
					f = u[0];
					while (f--) s = s.lastChild;
					jQuery.merge(c, s.childNodes),
					s = l.firstChild,
					s.textContent = ""
				}
			}
			l.textContent = "",
			h = 0;
			while (i = c[h++]) {
				if (r && jQuery.inArray(i, r) !== -1) continue;
				a = jQuery.contains(i.ownerDocument, i),
				s = getAll(l.appendChild(i), "script"),
				a && setGlobalEval(s);
				if (n) {
					f = 0;
					while (i = s[f++]) rscriptType.test(i.type || "") && n.push(i)
				}
			}
			return l
		},
		cleanData: function(e) {
			var t, n, r, i, s = jQuery.event.special,
			o = 0;
			for (; (n = e[o]) !== undefined; o++) {
				if (jQuery.acceptData(n)) {
					i = n[data_priv.expando];
					if (i && (t = data_priv.cache[i])) {
						if (t.events) for (r in t.events) s[r] ? jQuery.event.remove(n, r) : jQuery.removeEvent(n, r, t.handle);
						data_priv.cache[i] && delete data_priv.cache[i]
					}
				}
				delete data_user.cache[n[data_user.expando]]
			}
		}
	}),
	jQuery.fn.extend({
		text: function(e) {
			return access(this,
			function(e) {
				return e === undefined ? jQuery.text(this) : this.empty().each(function() {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) this.textContent = e
				})
			},
			null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments,
			function(e) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var t = manipulationTarget(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments,
			function(e) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var t = manipulationTarget(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments,
			function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments,
			function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			var n, r = e ? jQuery.filter(e, this) : this,
			i = 0;
			for (; (n = r[i]) != null; i++) ! t && n.nodeType === 1 && jQuery.cleanData(getAll(n)),
			n.parentNode && (t && jQuery.contains(n.ownerDocument, n) && setGlobalEval(getAll(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			var e, t = 0;
			for (; (e = this[t]) != null; t++) e.nodeType === 1 && (jQuery.cleanData(getAll(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = e == null ? !1 : e,
			t = t == null ? e: t,
			this.map(function() {
				return jQuery.clone(this, e, t)
			})
		},
		html: function(e) {
			return access(this,
			function(e) {
				var t = this[0] || {},
				n = 0,
				r = this.length;
				if (e === undefined && t.nodeType === 1) return t.innerHTML;
				if (typeof e == "string" && !rnoInnerhtml.test(e) && !wrapMap[(rtagName.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(rxhtmlTag, "<$1></$2>");
					try {
						for (; n < r; n++) t = this[n] || {},
						t.nodeType === 1 && (jQuery.cleanData(getAll(t, !1)), t.innerHTML = e);
						t = 0
					} catch(i) {}
				}
				t && this.empty().append(e)
			},
			null, e, arguments.length)
		},
		replaceWith: function() {
			var e = arguments[0];
			return this.domManip(arguments,
			function(t) {
				e = this.parentNode,
				jQuery.cleanData(getAll(this)),
				e && e.replaceChild(t, this)
			}),
			e && (e.length || e.nodeType) ? this: this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t) {
			e = concat.apply([], e);
			var n, r, i, s, o, u, a = 0,
			f = this.length,
			l = this,
			c = f - 1,
			h = e[0],
			p = jQuery.isFunction(h);
			if (p || f > 1 && typeof h == "string" && !support.checkClone && rchecked.test(h)) return this.each(function(n) {
				var r = l.eq(n);
				p && (e[0] = h.call(this, n, r.html())),
				r.domManip(e, t)
			});
			if (f) {
				n = jQuery.buildFragment(e, this[0].ownerDocument, !1, this),
				r = n.firstChild,
				n.childNodes.length === 1 && (n = r);
				if (r) {
					i = jQuery.map(getAll(n, "script"), disableScript),
					s = i.length;
					for (; a < f; a++) o = n,
					a !== c && (o = jQuery.clone(o, !0, !0), s && jQuery.merge(i, getAll(o, "script"))),
					t.call(this[a], o, a);
					if (s) {
						u = i[i.length - 1].ownerDocument,
						jQuery.map(i, restoreScript);
						for (a = 0; a < s; a++) o = i[a],
						rscriptType.test(o.type || "") && !data_priv.access(o, "globalEval") && jQuery.contains(u, o) && (o.src ? jQuery._evalUrl && jQuery._evalUrl(o.src) : jQuery.globalEval(o.textContent.replace(rcleanScript, "")))
					}
				}
			}
			return this
		}
	}),
	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	},
	function(e, t) {
		jQuery.fn[e] = function(e) {
			var n, r = [],
			i = jQuery(e),
			s = i.length - 1,
			o = 0;
			for (; o <= s; o++) n = o === s ? this: this.clone(!0),
			jQuery(i[o])[t](n),
			push.apply(r, n.get());
			return this.pushStack(r)
		}
	});
	var iframe, elemdisplay = {},
	rmargin = /^margin/,
	rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"),
	getStyles = function(e) {
		return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : window.getComputedStyle(e, null)
	}; (function() {
		function s() {
			i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
			i.innerHTML = "",
			n.appendChild(r);
			var s = window.getComputedStyle(i, null);
			e = s.top !== "1%",
			t = s.width === "4px",
			n.removeChild(r)
		}
		var e, t, n = document.documentElement,
		r = document.createElement("div"),
		i = document.createElement("div");
		if (!i.style) return;
		i.style.backgroundClip = "content-box",
		i.cloneNode(!0).style.backgroundClip = "",
		support.clearCloneStyle = i.style.backgroundClip === "content-box",
		r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
		r.appendChild(i),
		window.getComputedStyle && jQuery.extend(support, {
			pixelPosition: function() {
				return s(),
				e
			},
			boxSizingReliable: function() {
				return t == null && s(),
				t
			},
			reliableMarginRight: function() {
				var e, t = i.appendChild(document.createElement("div"));
				return t.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
				t.style.marginRight = t.style.width = "0",
				i.style.width = "1px",
				n.appendChild(r),
				e = !parseFloat(window.getComputedStyle(t, null).marginRight),
				n.removeChild(r),
				i.removeChild(t),
				e
			}
		})
	})(),
	jQuery.swap = function(e, t, n, r) {
		var i, s, o = {};
		for (s in t) o[s] = e.style[s],
		e.style[s] = t[s];
		i = n.apply(e, r || []);
		for (s in t) e.style[s] = o[s];
		return i
	};
	var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
	rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
	cssShow = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	},
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},
	cssPrefixes = ["Webkit", "O", "Moz", "ms"];
	jQuery.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = curCSS(e, "opacity");
						return n === "" ? "1": n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(e, t, n, r) {
			if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
			var i, s, o, u = jQuery.camelCase(t),
			a = e.style;
			t = jQuery.cssProps[u] || (jQuery.cssProps[u] = vendorPropName(a, u)),
			o = jQuery.cssHooks[t] || jQuery.cssHooks[u];
			if (n === undefined) return o && "get" in o && (i = o.get(e, !1, r)) !== undefined ? i: a[t];
			s = typeof n,
			s === "string" && (i = rrelNum.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(jQuery.css(e, t)), s = "number");
			if (n == null || n !== n) return;
			s === "number" && !jQuery.cssNumber[u] && (n += "px"),
			!support.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (a[t] = "inherit");
			if (!o || !("set" in o) || (n = o.set(e, n, r)) !== undefined) a[t] = n
		},
		css: function(e, t, n, r) {
			var i, s, o, u = jQuery.camelCase(t);
			return t = jQuery.cssProps[u] || (jQuery.cssProps[u] = vendorPropName(e.style, u)),
			o = jQuery.cssHooks[t] || jQuery.cssHooks[u],
			o && "get" in o && (i = o.get(e, !0, n)),
			i === undefined && (i = curCSS(e, t, r)),
			i === "normal" && t in cssNormalTransform && (i = cssNormalTransform[t]),
			n === "" || n ? (s = parseFloat(i), n === !0 || jQuery.isNumeric(s) ? s || 0 : i) : i
		}
	}),
	jQuery.each(["height", "width"],
	function(e, t) {
		jQuery.cssHooks[t] = {
			get: function(e, n, r) {
				if (n) return rdisplayswap.test(jQuery.css(e, "display")) && e.offsetWidth === 0 ? jQuery.swap(e, cssShow,
				function() {
					return getWidthOrHeight(e, t, r)
				}) : getWidthOrHeight(e, t, r)
			},
			set: function(e, n, r) {
				var i = r && getStyles(e);
				return setPositiveNumber(e, n, r ? augmentWidthOrHeight(e, t, r, jQuery.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
			}
		}
	}),
	jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight,
	function(e, t) {
		if (t) return jQuery.swap(e, {
			display: "inline-block"
		},
		curCSS, [e, "marginRight"])
	}),
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	},
	function(e, t) {
		jQuery.cssHooks[e + t] = {
			expand: function(n) {
				var r = 0,
				i = {},
				s = typeof n == "string" ? n.split(" ") : [n];
				for (; r < 4; r++) i[e + cssExpand[r] + t] = s[r] || s[r - 2] || s[0];
				return i
			}
		},
		rmargin.test(e) || (jQuery.cssHooks[e + t].set = setPositiveNumber)
	}),
	jQuery.fn.extend({
		css: function(e, t) {
			return access(this,
			function(e, t, n) {
				var r, i, s = {},
				o = 0;
				if (jQuery.isArray(t)) {
					r = getStyles(e),
					i = t.length;
					for (; o < i; o++) s[t[o]] = jQuery.css(e, t[o], !1, r);
					return s
				}
				return n !== undefined ? jQuery.style(e, t, n) : jQuery.css(e, t)
			},
			e, t, arguments.length > 1)
		},
		show: function() {
			return showHide(this, !0)
		},
		hide: function() {
			return showHide(this)
		},
		toggle: function(e) {
			return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
				isHidden(this) ? jQuery(this).show() : jQuery(this).hide()
			})
		}
	}),
	jQuery.Tween = Tween,
	Tween.prototype = {
		constructor: Tween,
		init: function(e, t, n, r, i, s) {
			this.elem = e,
			this.prop = n,
			this.easing = i || "swing",
			this.options = t,
			this.start = this.now = this.cur(),
			this.end = r,
			this.unit = s || (jQuery.cssNumber[n] ? "": "px")
		},
		cur: function() {
			var e = Tween.propHooks[this.prop];
			return e && e.get ? e.get(this) : Tween.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = Tween.propHooks[this.prop];
			return this.options.duration ? this.pos = t = jQuery.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
			this.now = (this.end - this.start) * t + this.start,
			this.options.step && this.options.step.call(this.elem, this.now, this),
			n && n.set ? n.set(this) : Tween.propHooks._default.set(this),
			this
		}
	},
	Tween.prototype.init.prototype = Tween.prototype,
	Tween.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = jQuery.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
			},
			set: function(e) {
				jQuery.fx.step[e.prop] ? jQuery.fx.step[e.prop](e) : e.elem.style && (e.elem.style[jQuery.cssProps[e.prop]] != null || jQuery.cssHooks[e.prop]) ? jQuery.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	},
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	},
	jQuery.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return.5 - Math.cos(e * Math.PI) / 2
		}
	},
	jQuery.fx = Tween.prototype.init,
	jQuery.fx.step = {};
	var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
	rrun = /queueHooks$/,
	animationPrefilters = [defaultPrefilter],
	tweeners = {
		"*": [function(e, t) {
			var n = this.createTween(e, t),
			r = n.cur(),
			i = rfxnum.exec(t),
			s = i && i[3] || (jQuery.cssNumber[e] ? "": "px"),
			o = (jQuery.cssNumber[e] || s !== "px" && +r) && rfxnum.exec(jQuery.css(n.elem, e)),
			u = 1,
			a = 20;
			if (o && o[3] !== s) {
				s = s || o[3],
				i = i || [],
				o = +r || 1;
				do u = u || ".5",
				o /= u,
				jQuery.style(n.elem, e, o + s);
				while (u !== (u = n.cur() / r) && u !== 1 && --a)
			}
			return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]),
			n
		}]
	};
	jQuery.Animation = jQuery.extend(Animation, {
		tweener: function(e, t) {
			jQuery.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			var n, r = 0,
			i = e.length;
			for (; r < i; r++) n = e[r],
			tweeners[n] = tweeners[n] || [],
			tweeners[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? animationPrefilters.unshift(e) : animationPrefilters.push(e)
		}
	}),
	jQuery.speed = function(e, t, n) {
		var r = e && typeof e == "object" ? jQuery.extend({},
		e) : {
			complete: n || !n && t || jQuery.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !jQuery.isFunction(t) && t
		};
		r.duration = jQuery.fx.off ? 0 : typeof r.duration == "number" ? r.duration: r.duration in jQuery.fx.speeds ? jQuery.fx.speeds[r.duration] : jQuery.fx.speeds._default;
		if (r.queue == null || r.queue === !0) r.queue = "fx";
		return r.old = r.complete,
		r.complete = function() {
			jQuery.isFunction(r.old) && r.old.call(this),
			r.queue && jQuery.dequeue(this, r.queue)
		},
		r
	},
	jQuery.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(isHidden).css("opacity", 0).show().end().animate({
				opacity: t
			},
			e, n, r)
		},
		animate: function(e, t, n, r) {
			var i = jQuery.isEmptyObject(e),
			s = jQuery.speed(t, n, r),
			o = function() {
				var t = Animation(this, jQuery.extend({},
				e), s); (i || data_priv.get(this, "finish")) && t.stop(!0)
			};
			return o.finish = o,
			i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
		},
		stop: function(e, t, n) {
			var r = function(e) {
				var t = e.stop;
				delete e.stop,
				t(n)
			};
			return typeof e != "string" && (n = t, t = e, e = undefined),
			t && e !== !1 && this.queue(e || "fx", []),
			this.each(function() {
				var t = !0,
				i = e != null && e + "queueHooks",
				s = jQuery.timers,
				o = data_priv.get(this);
				if (i) o[i] && o[i].stop && r(o[i]);
				else for (i in o) o[i] && o[i].stop && rrun.test(i) && r(o[i]);
				for (i = s.length; i--;) s[i].elem === this && (e == null || s[i].queue === e) && (s[i].anim.stop(n), t = !1, s.splice(i, 1)); (t || !n) && jQuery.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"),
			this.each(function() {
				var t, n = data_priv.get(this),
				r = n[e + "queue"],
				i = n[e + "queueHooks"],
				s = jQuery.timers,
				o = r ? r.length: 0;
				n.finish = !0,
				jQuery.queue(this, e, []),
				i && i.stop && i.stop.call(this, !0);
				for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
				for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	}),
	jQuery.each(["toggle", "show", "hide"],
	function(e, t) {
		var n = jQuery.fn[t];
		jQuery.fn[t] = function(e, r, i) {
			return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(genFx(t, !0), e, r, i)
		}
	}),
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	},
	function(e, t) {
		jQuery.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	}),
	jQuery.timers = [],
	jQuery.fx.tick = function() {
		var e, t = 0,
		n = jQuery.timers;
		fxNow = jQuery.now();
		for (; t < n.length; t++) e = n[t],
		!e() && n[t] === e && n.splice(t--, 1);
		n.length || jQuery.fx.stop(),
		fxNow = undefined
	},
	jQuery.fx.timer = function(e) {
		jQuery.timers.push(e),
		e() ? jQuery.fx.start() : jQuery.timers.pop()
	},
	jQuery.fx.interval = 13,
	jQuery.fx.start = function() {
		timerId || (timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval))
	},
	jQuery.fx.stop = function() {
		clearInterval(timerId),
		timerId = null
	},
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	},
	jQuery.fn.delay = function(e, t) {
		return e = jQuery.fx ? jQuery.fx.speeds[e] || e: e,
		t = t || "fx",
		this.queue(t,
		function(t, n) {
			var r = setTimeout(t, e);
			n.stop = function() {
				clearTimeout(r)
			}
		})
	},
	function() {
		var e = document.createElement("input"),
		t = document.createElement("select"),
		n = t.appendChild(document.createElement("option"));
		e.type = "checkbox",
		support.checkOn = e.value !== "",
		support.optSelected = n.selected,
		t.disabled = !0,
		support.optDisabled = !n.disabled,
		e = document.createElement("input"),
		e.value = "t",
		e.type = "radio",
		support.radioValue = e.value === "t"
	} ();
	var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle;
	jQuery.fn.extend({
		attr: function(e, t) {
			return access(this, jQuery.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				jQuery.removeAttr(this, e)
			})
		}
	}),
	jQuery.extend({
		attr: function(e, t, n) {
			var r, i, s = e.nodeType;
			if (!e || s === 3 || s === 8 || s === 2) return;
			if (typeof e.getAttribute === strundefined) return jQuery.prop(e, t, n);
			if (s !== 1 || !jQuery.isXMLDoc(e)) t = t.toLowerCase(),
			r = jQuery.attrHooks[t] || (jQuery.expr.match.bool.test(t) ? boolHook: nodeHook);
			if (n === undefined) return r && "get" in r && (i = r.get(e, t)) !== null ? i: (i = jQuery.find.attr(e, t), i == null ? undefined: i);
			if (n !== null) return r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i: (e.setAttribute(t, n + ""), n);
			jQuery.removeAttr(e, t)
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
			s = t && t.match(rnotwhite);
			if (s && e.nodeType === 1) while (n = s[i++]) r = jQuery.propFix[n] || n,
			jQuery.expr.match.bool.test(n) && (e[r] = !1),
			e.removeAttribute(n)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!support.radioValue && t === "radio" && jQuery.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t),
						n && (e.value = n),
						t
					}
				}
			}
		}
	}),
	boolHook = {
		set: function(e, t, n) {
			return t === !1 ? jQuery.removeAttr(e, n) : e.setAttribute(n, n),
			n
		}
	},
	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),
	function(e, t) {
		var n = attrHandle[t] || jQuery.find.attr;
		attrHandle[t] = function(e, t, r) {
			var i, s;
			return r || (s = attrHandle[t], attrHandle[t] = i, i = n(e, t, r) != null ? t.toLowerCase() : null, attrHandle[t] = s),
			i
		}
	});
	var rfocusable = /^(?:input|select|textarea|button)$/i;
	jQuery.fn.extend({
		prop: function(e, t) {
			return access(this, jQuery.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[jQuery.propFix[e] || e]
			})
		}
	}),
	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, t, n) {
			var r, i, s, o = e.nodeType;
			if (!e || o === 3 || o === 8 || o === 2) return;
			return s = o !== 1 || !jQuery.isXMLDoc(e),
			s && (t = jQuery.propFix[t] || t, i = jQuery.propHooks[t]),
			n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r: e[t] = n: i && "get" in i && (r = i.get(e, t)) !== null ? r: e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					return e.hasAttribute("tabindex") || rfocusable.test(e.nodeName) || e.href ? e.tabIndex: -1
				}
			}
		}
	}),
	support.optSelected || (jQuery.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex,
			null
		}
	}),
	jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
	function() {
		jQuery.propFix[this.toLowerCase()] = this
	});
	var rclass = /[\t\r\n\f]/g;
	jQuery.fn.extend({
		addClass: function(e) {
			var t, n, r, i, s, o, u = typeof e == "string" && e,
			a = 0,
			f = this.length;
			if (jQuery.isFunction(e)) return this.each(function(t) {
				jQuery(this).addClass(e.call(this, t, this.className))
			});
			if (u) {
				t = (e || "").match(rnotwhite) || [];
				for (; a < f; a++) {
					n = this[a],
					r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(rclass, " ") : " ");
					if (r) {
						s = 0;
						while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
						o = jQuery.trim(r),
						n.className !== o && (n.className = o)
					}
				}
			}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, s, o, u = arguments.length === 0 || typeof e == "string" && e,
			a = 0,
			f = this.length;
			if (jQuery.isFunction(e)) return this.each(function(t) {
				jQuery(this).removeClass(e.call(this, t, this.className))
			});
			if (u) {
				t = (e || "").match(rnotwhite) || [];
				for (; a < f; a++) {
					n = this[a],
					r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(rclass, " ") : "");
					if (r) {
						s = 0;
						while (i = t[s++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
						o = e ? jQuery.trim(r) : "",
						n.className !== o && (n.className = o)
					}
				}
			}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : jQuery.isFunction(e) ? this.each(function(n) {
				jQuery(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if (n === "string") {
					var t, r = 0,
					i = jQuery(this),
					s = e.match(rnotwhite) || [];
					while (t = s[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
				} else if (n === strundefined || n === "boolean") this.className && data_priv.set(this, "__className__", this.className),
				this.className = this.className || e === !1 ? "": data_priv.get(this, "__className__") || ""
			})
		},
		hasClass: function(e) {
			var t = " " + e + " ",
			n = 0,
			r = this.length;
			for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(rclass, " ").indexOf(t) >= 0) return ! 0;
			return ! 1
		}
	});
	var rreturn = /\r/g;
	jQuery.fn.extend({
		val: function(e) {
			var t, n, r, i = this[0];
			if (!arguments.length) {
				if (i) return t = jQuery.valHooks[i.type] || jQuery.valHooks[i.nodeName.toLowerCase()],
				t && "get" in t && (n = t.get(i, "value")) !== undefined ? n: (n = i.value, typeof n == "string" ? n.replace(rreturn, "") : n == null ? "": n);
				return
			}
			return r = jQuery.isFunction(e),
			this.each(function(n) {
				var i;
				if (this.nodeType !== 1) return;
				r ? i = e.call(this, n, jQuery(this).val()) : i = e,
				i == null ? i = "": typeof i == "number" ? i += "": jQuery.isArray(i) && (i = jQuery.map(i,
				function(e) {
					return e == null ? "": e + ""
				})),
				t = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
				if (!t || !("set" in t) || t.set(this, i, "value") === undefined) this.value = i
			})
		}
	}),
	jQuery.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = jQuery.find.attr(e, "value");
					return t != null ? t: jQuery.trim(jQuery.text(e))
				}
			},
			select: {
				get: function(e) {
					var t, n, r = e.options,
					i = e.selectedIndex,
					s = e.type === "select-one" || i < 0,
					o = s ? null: [],
					u = s ? i + 1 : r.length,
					a = i < 0 ? u: s ? i: 0;
					for (; a < u; a++) {
						n = r[a];
						if ((n.selected || a === i) && (support.optDisabled ? !n.disabled: n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !jQuery.nodeName(n.parentNode, "optgroup"))) {
							t = jQuery(n).val();
							if (s) return t;
							o.push(t)
						}
					}
					return o
				},
				set: function(e, t) {
					var n, r, i = e.options,
					s = jQuery.makeArray(t),
					o = i.length;
					while (o--) {
						r = i[o];
						if (r.selected = jQuery.inArray(r.value, s) >= 0) n = !0
					}
					return n || (e.selectedIndex = -1),
					s
				}
			}
		}
	}),
	jQuery.each(["radio", "checkbox"],
	function() {
		jQuery.valHooks[this] = {
			set: function(e, t) {
				if (jQuery.isArray(t)) return e.checked = jQuery.inArray(jQuery(e).val(), t) >= 0
			}
		},
		support.checkOn || (jQuery.valHooks[this].get = function(e) {
			return e.getAttribute("value") === null ? "on": e.value
		})
	}),
	jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
	function(e, t) {
		jQuery.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}),
	jQuery.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var nonce = jQuery.now(),
	rquery = /\?/;
	jQuery.parseJSON = function(e) {
		return JSON.parse(e + "")
	},
	jQuery.parseXML = function(e) {
		var t, n;
		if (!e || typeof e != "string") return null;
		try {
			n = new DOMParser,
			t = n.parseFromString(e, "text/xml")
		} catch(r) {
			t = undefined
		}
		return (!t || t.getElementsByTagName("parsererror").length) && jQuery.error("Invalid XML: " + e),
		t
	};
	var rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	prefilters = {},
	transports = {},
	allTypes = "*/".concat("*"),
	ajaxLocation = window.location.href,
	ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
	jQuery.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test(ajaxLocParts[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": jQuery.parseJSON,
				"text xml": jQuery.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? ajaxExtend(ajaxExtend(e, jQuery.ajaxSettings), t) : ajaxExtend(jQuery.ajaxSettings, e)
		},
		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
		ajaxTransport: addToPrefiltersOrTransports(transports),
		ajax: function(e, t) {
			function S(e, t, s, u) {
				var f, m, g, b, E, S = t;
				if (y === 2) return;
				y = 2,
				o && clearTimeout(o),
				n = undefined,
				i = u || "",
				w.readyState = e > 0 ? 4 : 0,
				f = e >= 200 && e < 300 || e === 304,
				s && (b = ajaxHandleResponses(l, w, s)),
				b = ajaxConvert(l, b, w, f);
				if (f) l.ifModified && (E = w.getResponseHeader("Last-Modified"), E && (jQuery.lastModified[r] = E), E = w.getResponseHeader("etag"), E && (jQuery.etag[r] = E)),
				e === 204 || l.type === "HEAD" ? S = "nocontent": e === 304 ? S = "notmodified": (S = b.state, m = b.data, g = b.error, f = !g);
				else {
					g = S;
					if (e || !S) S = "error",
					e < 0 && (e = 0)
				}
				w.status = e,
				w.statusText = (t || S) + "",
				f ? p.resolveWith(c, [m, S, w]) : p.rejectWith(c, [w, S, g]),
				w.statusCode(v),
				v = undefined,
				a && h.trigger(f ? "ajaxSuccess": "ajaxError", [w, l, f ? m: g]),
				d.fireWith(c, [w, S]),
				a && (h.trigger("ajaxComplete", [w, l]), --jQuery.active || jQuery.event.trigger("ajaxStop"))
			}
			typeof e == "object" && (t = e, e = undefined),
			t = t || {};
			var n, r, i, s, o, u, a, f, l = jQuery.ajaxSetup({},
			t),
			c = l.context || l,
			h = l.context && (c.nodeType || c.jquery) ? jQuery(c) : jQuery.event,
			p = jQuery.Deferred(),
			d = jQuery.Callbacks("once memory"),
			v = l.statusCode || {},
			m = {},
			g = {},
			y = 0,
			b = "canceled",
			w = {
				readyState: 0,
				getResponseHeader: function(e) {
					var t;
					if (y === 2) {
						if (!s) {
							s = {};
							while (t = rheaders.exec(i)) s[t[1].toLowerCase()] = t[2]
						}
						t = s[e.toLowerCase()]
					}
					return t == null ? null: t
				},
				getAllResponseHeaders: function() {
					return y === 2 ? i: null
				},
				setRequestHeader: function(e, t) {
					var n = e.toLowerCase();
					return y || (e = g[n] = g[n] || e, m[e] = t),
					this
				},
				overrideMimeType: function(e) {
					return y || (l.mimeType = e),
					this
				},
				statusCode: function(e) {
					var t;
					if (e) if (y < 2) for (t in e) v[t] = [v[t], e[t]];
					else w.always(e[w.status]);
					return this
				},
				abort: function(e) {
					var t = e || b;
					return n && n.abort(t),
					S(0, t),
					this
				}
			};
			p.promise(w).complete = d.add,
			w.success = w.done,
			w.error = w.fail,
			l.url = ((e || l.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//"),
			l.type = t.method || t.type || l.method || l.type,
			l.dataTypes = jQuery.trim(l.dataType || "*").toLowerCase().match(rnotwhite) || [""],
			l.crossDomain == null && (u = rurl.exec(l.url.toLowerCase()), l.crossDomain = !(!u || u[1] === ajaxLocParts[1] && u[2] === ajaxLocParts[2] && (u[3] || (u[1] === "http:" ? "80": "443")) === (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80": "443")))),
			l.data && l.processData && typeof l.data != "string" && (l.data = jQuery.param(l.data, l.traditional)),
			inspectPrefiltersOrTransports(prefilters, l, t, w);
			if (y === 2) return w;
			a = jQuery.event && l.global,
			a && jQuery.active++===0 && jQuery.event.trigger("ajaxStart"),
			l.type = l.type.toUpperCase(),
			l.hasContent = !rnoContent.test(l.type),
			r = l.url,
			l.hasContent || (l.data && (r = l.url += (rquery.test(r) ? "&": "?") + l.data, delete l.data), l.cache === !1 && (l.url = rts.test(r) ? r.replace(rts, "$1_=" + nonce++) : r + (rquery.test(r) ? "&": "?") + "_=" + nonce++)),
			l.ifModified && (jQuery.lastModified[r] && w.setRequestHeader("If-Modified-Since", jQuery.lastModified[r]), jQuery.etag[r] && w.setRequestHeader("If-None-Match", jQuery.etag[r])),
			(l.data && l.hasContent && l.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", l.contentType),
			w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01": "") : l.accepts["*"]);
			for (f in l.headers) w.setRequestHeader(f, l.headers[f]);
			if (!l.beforeSend || l.beforeSend.call(c, w, l) !== !1 && y !== 2) {
				b = "abort";
				for (f in {
					success: 1,
					error: 1,
					complete: 1
				}) w[f](l[f]);
				n = inspectPrefiltersOrTransports(transports, l, t, w);
				if (!n) S( - 1, "No Transport");
				else {
					w.readyState = 1,
					a && h.trigger("ajaxSend", [w, l]),
					l.async && l.timeout > 0 && (o = setTimeout(function() {
						w.abort("timeout")
					},
					l.timeout));
					try {
						y = 1,
						n.send(m, S)
					} catch(E) {
						if (! (y < 2)) throw E;
						S( - 1, E)
					}
				}
				return w
			}
			return w.abort()
		},
		getJSON: function(e, t, n) {
			return jQuery.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return jQuery.get(e, undefined, t, "script")
		}
	}),
	jQuery.each(["get", "post"],
	function(e, t) {
		jQuery[t] = function(e, n, r, i) {
			return jQuery.isFunction(n) && (i = i || r, r = n, n = undefined),
			jQuery.ajax({
				url: e,
				type: t,
				dataType: i,
				data: n,
				success: r
			})
		}
	}),
	jQuery._evalUrl = function(e) {
		return jQuery.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	},
	jQuery.fn.extend({
		wrapAll: function(e) {
			var t;
			return jQuery.isFunction(e) ? this.each(function(t) {
				jQuery(this).wrapAll(e.call(this, t))
			}) : (this[0] && (t = jQuery(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				var e = this;
				while (e.firstElementChild) e = e.firstElementChild;
				return e
			}).append(this)), this)
		},
		wrapInner: function(e) {
			return jQuery.isFunction(e) ? this.each(function(t) {
				jQuery(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = jQuery(this),
				n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = jQuery.isFunction(e);
			return this.each(function(n) {
				jQuery(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes)
			}).end()
		}
	}),
	jQuery.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0
	},
	jQuery.expr.filters.visible = function(e) {
		return ! jQuery.expr.filters.hidden(e)
	};
	var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;
	jQuery.param = function(e, t) {
		var n, r = [],
		i = function(e, t) {
			t = jQuery.isFunction(t) ? t() : t == null ? "": t,
			r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
		};
		t === undefined && (t = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional);
		if (jQuery.isArray(e) || e.jquery && !jQuery.isPlainObject(e)) jQuery.each(e,
		function() {
			i(this.name, this.value)
		});
		else for (n in e) buildParams(n, e[n], t, i);
		return r.join("&").replace(r20, "+")
	},
	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = jQuery.prop(this, "elements");
				return e ? jQuery.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(e) && (this.checked || !rcheckableType.test(e))
			}).map(function(e, t) {
				var n = jQuery(this).val();
				return n == null ? null: jQuery.isArray(n) ? jQuery.map(n,
				function(e) {
					return {
						name: t.name,
						value: e.replace(rCRLF, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(rCRLF, "\r\n")
				}
			}).get()
		}
	}),
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch(e) {}
	};
	var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		0 : 200,
		1223 : 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();
	window.attachEvent && window.attachEvent("onunload",
	function() {
		for (var e in xhrCallbacks) xhrCallbacks[e]()
	}),
	support.cors = !!xhrSupported && "withCredentials" in xhrSupported,
	support.ajax = xhrSupported = !!xhrSupported,
	jQuery.ajaxTransport(function(e) {
		var t;
		if (support.cors || xhrSupported && !e.crossDomain) return {
			send: function(n, r) {
				var i, s = e.xhr(),
				o = ++xhrId;
				s.open(e.type, e.url, e.async, e.username, e.password);
				if (e.xhrFields) for (i in e.xhrFields) s[i] = e.xhrFields[i];
				e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
				!e.crossDomain && !n["X-Requested-With"] && (n["X-Requested-With"] = "XMLHttpRequest");
				for (i in n) s.setRequestHeader(i, n[i]);
				t = function(e) {
					return function() {
						t && (delete xhrCallbacks[o], t = s.onload = s.onerror = null, e === "abort" ? s.abort() : e === "error" ? r(s.status, s.statusText) : r(xhrSuccessStatus[s.status] || s.status, s.statusText, typeof s.responseText == "string" ? {
							text: s.responseText
						}: undefined, s.getAllResponseHeaders()))
					}
				},
				s.onload = t(),
				s.onerror = t("error"),
				t = xhrCallbacks[o] = t("abort");
				try {
					s.send(e.hasContent && e.data || null)
				} catch(u) {
					if (t) throw u
				}
			},
			abort: function() {
				t && t()
			}
		}
	}),
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return jQuery.globalEval(e),
				e
			}
		}
	}),
	jQuery.ajaxPrefilter("script",
	function(e) {
		e.cache === undefined && (e.cache = !1),
		e.crossDomain && (e.type = "GET")
	}),
	jQuery.ajaxTransport("script",
	function(e) {
		if (e.crossDomain) {
			var t, n;
			return {
				send: function(r, i) {
					t = jQuery("<script>").prop({
						async: !0,
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function(e) {
						t.remove(),
						n = null,
						e && i(e.type === "error" ? 404 : 200, e.type)
					}),
					document.head.appendChild(t[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	});
	var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
			return this[e] = !0,
			e
		}
	}),
	jQuery.ajaxPrefilter("json jsonp",
	function(e, t, n) {
		var r, i, s, o = e.jsonp !== !1 && (rjsonp.test(e.url) ? "url": typeof e.data == "string" && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(e.data) && "data");
		if (o || e.dataTypes[0] === "jsonp") return r = e.jsonpCallback = jQuery.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
		o ? e[o] = e[o].replace(rjsonp, "$1" + r) : e.jsonp !== !1 && (e.url += (rquery.test(e.url) ? "&": "?") + e.jsonp + "=" + r),
		e.converters["script json"] = function() {
			return s || jQuery.error(r + " was not called"),
			s[0]
		},
		e.dataTypes[0] = "json",
		i = window[r],
		window[r] = function() {
			s = arguments
		},
		n.always(function() {
			window[r] = i,
			e[r] && (e.jsonpCallback = t.jsonpCallback, oldCallbacks.push(r)),
			s && jQuery.isFunction(i) && i(s[0]),
			s = i = undefined
		}),
		"script"
	}),
	jQuery.parseHTML = function(e, t, n) {
		if (!e || typeof e != "string") return null;
		typeof t == "boolean" && (n = t, t = !1),
		t = t || document;
		var r = rsingleTag.exec(e),
		i = !n && [];
		return r ? [t.createElement(r[1])] : (r = jQuery.buildFragment([e], t, i), i && i.length && jQuery(i).remove(), jQuery.merge([], r.childNodes))
	};
	var _load = jQuery.fn.load;
	jQuery.fn.load = function(e, t, n) {
		if (typeof e != "string" && _load) return _load.apply(this, arguments);
		var r, i, s, o = this,
		u = e.indexOf(" ");
		return u >= 0 && (r = jQuery.trim(e.slice(u)), e = e.slice(0, u)),
		jQuery.isFunction(t) ? (n = t, t = undefined) : t && typeof t == "object" && (i = "POST"),
		o.length > 0 && jQuery.ajax({
			url: e,
			type: i,
			dataType: "html",
			data: t
		}).done(function(e) {
			s = arguments,
			o.html(r ? jQuery("<div>").append(jQuery.parseHTML(e)).find(r) : e)
		}).complete(n &&
		function(e, t) {
			o.each(n, s || [e.responseText, t, e])
		}),
		this
	},
	jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
	function(e, t) {
		jQuery.fn[t] = function(e) {
			return this.on(t, e)
		}
	}),
	jQuery.expr.filters.animated = function(e) {
		return jQuery.grep(jQuery.timers,
		function(t) {
			return e === t.elem
		}).length
	};
	var docElem = window.document.documentElement;
	jQuery.offset = {
		setOffset: function(e, t, n) {
			var r, i, s, o, u, a, f, l = jQuery.css(e, "position"),
			c = jQuery(e),
			h = {};
			l === "static" && (e.style.position = "relative"),
			u = c.offset(),
			s = jQuery.css(e, "top"),
			a = jQuery.css(e, "left"),
			f = (l === "absolute" || l === "fixed") && (s + a).indexOf("auto") > -1,
			f ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(a) || 0),
			jQuery.isFunction(t) && (t = t.call(e, n, u)),
			t.top != null && (h.top = t.top - u.top + o),
			t.left != null && (h.left = t.left - u.left + i),
			"using" in t ? t.using.call(e, h) : c.css(h)
		}
	},
	jQuery.fn.extend({
		offset: function(e) {
			if (arguments.length) return e === undefined ? this: this.each(function(t) {
				jQuery.offset.setOffset(this, e, t)
			});
			var t, n, r = this[0],
			i = {
				top: 0,
				left: 0
			},
			s = r && r.ownerDocument;
			if (!s) return;
			return t = s.documentElement,
			jQuery.contains(t, r) ? (typeof r.getBoundingClientRect !== strundefined && (i = r.getBoundingClientRect()), n = getWindow(s), {
				top: i.top + n.pageYOffset - t.clientTop,
				left: i.left + n.pageXOffset - t.clientLeft
			}) : i
		},
		position: function() {
			if (!this[0]) return;
			var e, t, n = this[0],
			r = {
				top: 0,
				left: 0
			};
			return jQuery.css(n, "position") === "fixed" ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), jQuery.nodeName(e[0], "html") || (r = e.offset()), r.top += jQuery.css(e[0], "borderTopWidth", !0), r.left += jQuery.css(e[0], "borderLeftWidth", !0)),
			{
				top: t.top - r.top - jQuery.css(n, "marginTop", !0),
				left: t.left - r.left - jQuery.css(n, "marginLeft", !0)
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent || docElem;
				while (e && !jQuery.nodeName(e, "html") && jQuery.css(e, "position") === "static") e = e.offsetParent;
				return e || docElem
			})
		}
	}),
	jQuery.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	},
	function(e, t) {
		var n = "pageYOffset" === t;
		jQuery.fn[e] = function(r) {
			return access(this,
			function(e, r, i) {
				var s = getWindow(e);
				if (i === undefined) return s ? s[t] : e[r];
				s ? s.scrollTo(n ? window.pageXOffset: i, n ? i: window.pageYOffset) : e[r] = i
			},
			e, r, arguments.length, null)
		}
	}),
	jQuery.each(["top", "left"],
	function(e, t) {
		jQuery.cssHooks[t] = addGetHookIf(support.pixelPosition,
		function(e, n) {
			if (n) return n = curCSS(e, t),
			rnumnonpx.test(n) ? jQuery(e).position()[t] + "px": n
		})
	}),
	jQuery.each({
		Height: "height",
		Width: "width"
	},
	function(e, t) {
		jQuery.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		},
		function(n, r) {
			jQuery.fn[r] = function(r, i) {
				var s = arguments.length && (n || typeof r != "boolean"),
				o = n || (r === !0 || i === !0 ? "margin": "border");
				return access(this,
				function(t, n, r) {
					var i;
					return jQuery.isWindow(t) ? t.document.documentElement["client" + e] : t.nodeType === 9 ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? jQuery.css(t, n, o) : jQuery.style(t, n, r, o)
				},
				t, s ? r: undefined, s, null)
			}
		})
	}),
	jQuery.fn.size = function() {
		return this.length
	},
	jQuery.fn.andSelf = jQuery.fn.addBack,
	typeof define == "function" && define.amd && define("jquery", [],
	function() {
		return jQuery
	});
	var _jQuery = window.jQuery,
	_$ = window.$;
	return jQuery.noConflict = function(e) {
		return window.$ === jQuery && (window.$ = _$),
		e && window.jQuery === jQuery && (window.jQuery = _jQuery),
		jQuery
	},
	typeof noGlobal === strundefined && (window.jQuery = window.$ = jQuery),
	jQuery
}),
function(e, t) {
	if (typeof define == "function" && define.amd) define("backbone", ["underscore", "jquery", "exports"],
	function(n, r, i) {
		e.Backbone = t(e, i, n, r)
	});
	else if (typeof exports != "undefined") {
		var n = require("underscore");
		t(e, exports, n)
	} else e.Backbone = t(e, {},
	e._, e.jQuery || e.Zepto || e.ender || e.$)
} (this,
function(e, t, n, r) {
	var i = e.Backbone,
	s = [],
	o = s.push,
	u = s.slice,
	a = s.splice;
	t.VERSION = "1.1.2",
	t.$ = r,
	t.noConflict = function() {
		return e.Backbone = i,
		this
	},
	t.emulateHTTP = !1,
	t.emulateJSON = !1;
	var f = t.Events = {
		on: function(e, t, n) {
			if (!c(this, "on", e, [t, n]) || !t) return this;
			this._events || (this._events = {});
			var r = this._events[e] || (this._events[e] = []);
			return r.push({
				callback: t,
				context: n,
				ctx: n || this
			}),
			this
		},
		once: function(e, t, r) {
			if (!c(this, "once", e, [t, r]) || !t) return this;
			var i = this,
			s = n.once(function() {
				i.off(e, s),
				t.apply(this, arguments)
			});
			return s._callback = t,
			this.on(e, s, r)
		},
		off: function(e, t, r) {
			var i, s, o, u, a, f, l, h;
			if (!this._events || !c(this, "off", e, [t, r])) return this;
			if (!e && !t && !r) return this._events = void 0,
			this;
			u = e ? [e] : n.keys(this._events);
			for (a = 0, f = u.length; a < f; a++) {
				e = u[a];
				if (o = this._events[e]) {
					this._events[e] = i = [];
					if (t || r) for (l = 0, h = o.length; l < h; l++) s = o[l],
					(t && t !== s.callback && t !== s.callback._callback || r && r !== s.context) && i.push(s);
					i.length || delete this._events[e]
				}
			}
			return this
		},
		trigger: function(e) {
			if (!this._events) return this;
			var t = u.call(arguments, 1);
			if (!c(this, "trigger", e, t)) return this;
			var n = this._events[e],
			r = this._events.all;
			return n && h(n, t),
			r && h(r, arguments),
			this
		},
		stopListening: function(e, t, r) {
			var i = this._listeningTo;
			if (!i) return this;
			var s = !t && !r; ! r && typeof t == "object" && (r = this),
			e && ((i = {})[e._listenId] = e);
			for (var o in i) e = i[o],
			e.off(t, r, this),
			(s || n.isEmpty(e._events)) && delete this._listeningTo[o];
			return this
		}
	},
	l = /\s+/,
	c = function(e, t, n, r) {
		if (!n) return ! 0;
		if (typeof n == "object") {
			for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
			return ! 1
		}
		if (l.test(n)) {
			var s = n.split(l);
			for (var o = 0,
			u = s.length; o < u; o++) e[t].apply(e, [s[o]].concat(r));
			return ! 1
		}
		return ! 0
	},
	h = function(e, t) {
		var n, r = -1,
		i = e.length,
		s = t[0],
		o = t[1],
		u = t[2];
		switch (t.length) {
		case 0:
			while (++r < i)(n = e[r]).callback.call(n.ctx);
			return;
		case 1:
			while (++r < i)(n = e[r]).callback.call(n.ctx, s);
			return;
		case 2:
			while (++r < i)(n = e[r]).callback.call(n.ctx, s, o);
			return;
		case 3:
			while (++r < i)(n = e[r]).callback.call(n.ctx, s, o, u);
			return;
		default:
			while (++r < i)(n = e[r]).callback.apply(n.ctx, t);
			return
		}
	},
	p = {
		listenTo: "on",
		listenToOnce: "once"
	};
	n.each(p,
	function(e, t) {
		f[t] = function(t, r, i) {
			var s = this._listeningTo || (this._listeningTo = {}),
			o = t._listenId || (t._listenId = n.uniqueId("l"));
			return s[o] = t,
			!i && typeof r == "object" && (i = this),
			t[e](r, i, this),
			this
		}
	}),
	f.bind = f.on,
	f.unbind = f.off,
	n.extend(t, f);
	var d = t.Model = function(e, t) {
		var r = e || {};
		t || (t = {}),
		this.cid = n.uniqueId("c"),
		this.attributes = {},
		t.collection && (this.collection = t.collection),
		t.parse && (r = this.parse(r, t) || {}),
		r = n.defaults({},
		r, n.result(this, "defaults")),
		this.set(r, t),
		this.changed = {},
		this.initialize.apply(this, arguments)
	};
	n.extend(d.prototype, f, {
		changed: null,
		validationError: null,
		idAttribute: "id",
		initialize: function() {},
		toJSON: function(e) {
			return n.clone(this.attributes)
		},
		sync: function() {
			return t.sync.apply(this, arguments)
		},
		get: function(e) {
			return this.attributes[e]
		},
		escape: function(e) {
			return n.escape(this.get(e))
		},
		has: function(e) {
			return this.get(e) != null
		},
		set: function(e, t, r) {
			var i, s, o, u, a, f, l, c;
			if (e == null) return this;
			typeof e == "object" ? (s = e, r = t) : (s = {})[e] = t,
			r || (r = {});
			if (!this._validate(s, r)) return ! 1;
			o = r.unset,
			a = r.silent,
			u = [],
			f = this._changing,
			this._changing = !0,
			f || (this._previousAttributes = n.clone(this.attributes), this.changed = {}),
			c = this.attributes,
			l = this._previousAttributes,
			this.idAttribute in s && (this.id = s[this.idAttribute]);
			for (i in s) t = s[i],
			n.isEqual(c[i], t) || u.push(i),
			n.isEqual(l[i], t) ? delete this.changed[i] : this.changed[i] = t,
			o ? delete c[i] : c[i] = t;
			if (!a) {
				u.length && (this._pending = r);
				for (var h = 0,
				p = u.length; h < p; h++) this.trigger("change:" + u[h], this, c[u[h]], r)
			}
			if (f) return this;
			if (!a) while (this._pending) r = this._pending,
			this._pending = !1,
			this.trigger("change", this, r);
			return this._pending = !1,
			this._changing = !1,
			this
		},
		unset: function(e, t) {
			return this.set(e, void 0, n.extend({},
			t, {
				unset: !0
			}))
		},
		clear: function(e) {
			var t = {};
			for (var r in this.attributes) t[r] = void 0;
			return this.set(t, n.extend({},
			e, {
				unset: !0
			}))
		},
		hasChanged: function(e) {
			return e == null ? !n.isEmpty(this.changed) : n.has(this.changed, e)
		},
		changedAttributes: function(e) {
			if (!e) return this.hasChanged() ? n.clone(this.changed) : !1;
			var t, r = !1,
			i = this._changing ? this._previousAttributes: this.attributes;
			for (var s in e) {
				if (n.isEqual(i[s], t = e[s])) continue; (r || (r = {}))[s] = t
			}
			return r
		},
		previous: function(e) {
			return e == null || !this._previousAttributes ? null: this._previousAttributes[e]
		},
		previousAttributes: function() {
			return n.clone(this._previousAttributes)
		},
		fetch: function(e) {
			e = e ? n.clone(e) : {},
			e.parse === void 0 && (e.parse = !0);
			var t = this,
			r = e.success;
			return e.success = function(n) {
				if (!t.set(t.parse(n, e), e)) return ! 1;
				r && r(t, n, e),
				t.trigger("sync", t, n, e)
			},
			I(this, e),
			this.sync("read", this, e)
		},
		save: function(e, t, r) {
			var i, s, o, u = this.attributes;
			e == null || typeof e == "object" ? (i = e, r = t) : (i = {})[e] = t,
			r = n.extend({
				validate: !0
			},
			r);
			if (i && !r.wait) {
				if (!this.set(i, r)) return ! 1
			} else if (!this._validate(i, r)) return ! 1;
			i && r.wait && (this.attributes = n.extend({},
			u, i)),
			r.parse === void 0 && (r.parse = !0);
			var a = this,
			f = r.success;
			return r.success = function(e) {
				a.attributes = u;
				var t = a.parse(e, r);
				r.wait && (t = n.extend(i || {},
				t));
				if (n.isObject(t) && !a.set(t, r)) return ! 1;
				f && f(a, e, r),
				a.trigger("sync", a, e, r)
			},
			I(this, r),
			s = this.isNew() ? "create": r.patch ? "patch": "update",
			s === "patch" && (r.attrs = i),
			o = this.sync(s, this, r),
			i && r.wait && (this.attributes = u),
			o
		},
		destroy: function(e) {
			e = e ? n.clone(e) : {};
			var t = this,
			r = e.success,
			i = function() {
				t.trigger("destroy", t, t.collection, e)
			};
			e.success = function(n) { (e.wait || t.isNew()) && i(),
				r && r(t, n, e),
				t.isNew() || t.trigger("sync", t, n, e)
			};
			if (this.isNew()) return e.success(),
			!1;
			I(this, e);
			var s = this.sync("delete", this, e);
			return e.wait || i(),
			s
		},
		url: function() {
			var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || F();
			return this.isNew() ? e: e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
		},
		parse: function(e, t) {
			return e
		},
		clone: function() {
			return new this.constructor(this.attributes)
		},
		isNew: function() {
			return ! this.has(this.idAttribute)
		},
		isValid: function(e) {
			return this._validate({},
			n.extend(e || {},
			{
				validate: !0
			}))
		},
		_validate: function(e, t) {
			if (!t.validate || !this.validate) return ! 0;
			e = n.extend({},
			this.attributes, e);
			var r = this.validationError = this.validate(e, t) || null;
			return r ? (this.trigger("invalid", this, r, n.extend(t, {
				validationError: r
			})), !1) : !0
		}
	});
	var v = ["keys", "values", "pairs", "invert", "pick", "omit"];
	n.each(v,
	function(e) {
		d.prototype[e] = function() {
			var t = u.call(arguments);
			return t.unshift(this.attributes),
			n[e].apply(n, t)
		}
	});
	var m = t.Collection = function(e, t) {
		t || (t = {}),
		t.model && (this.model = t.model),
		t.comparator !== void 0 && (this.comparator = t.comparator),
		this._reset(),
		this.initialize.apply(this, arguments),
		e && this.reset(e, n.extend({
			silent: !0
		},
		t))
	},
	g = {
		add: !0,
		remove: !0,
		merge: !0
	},
	y = {
		add: !0,
		remove: !1
	};
	n.extend(m.prototype, f, {
		model: d,
		initialize: function() {},
		toJSON: function(e) {
			return this.map(function(t) {
				return t.toJSON(e)
			})
		},
		sync: function() {
			return t.sync.apply(this, arguments)
		},
		add: function(e, t) {
			return this.set(e, n.extend({
				merge: !1
			},
			t, y))
		},
		remove: function(e, t) {
			var r = !n.isArray(e);
			e = r ? [e] : n.clone(e),
			t || (t = {});
			var i, s, o, u;
			for (i = 0, s = e.length; i < s; i++) {
				u = e[i] = this.get(e[i]);
				if (!u) continue;
				delete this._byId[u.id],
				delete this._byId[u.cid],
				o = this.indexOf(u),
				this.models.splice(o, 1),
				this.length--,
				t.silent || (t.index = o, u.trigger("remove", u, this, t)),
				this._removeReference(u, t)
			}
			return r ? e[0] : e
		},
		set: function(e, t) {
			t = n.defaults({},
			t, g),
			t.parse && (e = this.parse(e, t));
			var r = !n.isArray(e);
			e = r ? e ? [e] : [] : n.clone(e);
			var i, s, o, u, a, f, l, c = t.at,
			h = this.model,
			p = this.comparator && c == null && t.sort !== !1,
			v = n.isString(this.comparator) ? this.comparator: null,
			m = [],
			y = [],
			b = {},
			w = t.add,
			E = t.merge,
			S = t.remove,
			x = !p && w && S ? [] : !1;
			for (i = 0, s = e.length; i < s; i++) {
				a = e[i] || {},
				a instanceof d ? o = u = a: o = a[h.prototype.idAttribute || "id"];
				if (f = this.get(o)) S && (b[f.cid] = !0),
				E && (a = a === u ? u.attributes: a, t.parse && (a = f.parse(a, t)), f.set(a, t), p && !l && f.hasChanged(v) && (l = !0)),
				e[i] = f;
				else if (w) {
					u = e[i] = this._prepareModel(a, t);
					if (!u) continue;
					m.push(u),
					this._addReference(u, t)
				}
				u = f || u,
				x && (u.isNew() || !b[u.id]) && x.push(u),
				b[u.id] = !0
			}
			if (S) {
				for (i = 0, s = this.length; i < s; ++i) b[(u = this.models[i]).cid] || y.push(u);
				y.length && this.remove(y, t)
			}
			if (m.length || x && x.length) {
				p && (l = !0),
				this.length += m.length;
				if (c != null) for (i = 0, s = m.length; i < s; i++) this.models.splice(c + i, 0, m[i]);
				else {
					x && (this.models.length = 0);
					var T = x || m;
					for (i = 0, s = T.length; i < s; i++) this.models.push(T[i])
				}
			}
			l && this.sort({
				silent: !0
			});
			if (!t.silent) {
				for (i = 0, s = m.length; i < s; i++)(u = m[i]).trigger("add", u, this, t); (l || x && x.length) && this.trigger("sort", this, t)
			}
			return r ? e[0] : e
		},
		reset: function(e, t) {
			t || (t = {});
			for (var r = 0,
			i = this.models.length; r < i; r++) this._removeReference(this.models[r], t);
			return t.previousModels = this.models,
			this._reset(),
			e = this.add(e, n.extend({
				silent: !0
			},
			t)),
			t.silent || this.trigger("reset", this, t),
			e
		},
		push: function(e, t) {
			return this.add(e, n.extend({
				at: this.length
			},
			t))
		},
		pop: function(e) {
			var t = this.at(this.length - 1);
			return this.remove(t, e),
			t
		},
		unshift: function(e, t) {
			return this.add(e, n.extend({
				at: 0
			},
			t))
		},
		shift: function(e) {
			var t = this.at(0);
			return this.remove(t, e),
			t
		},
		slice: function() {
			return u.apply(this.models, arguments)
		},
		get: function(e) {
			return e == null ? void 0 : this._byId[e] || this._byId[e.id] || this._byId[e.cid]
		},
		at: function(e) {
			return this.models[e]
		},
		where: function(e, t) {
			return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find": "filter"](function(t) {
				for (var n in e) if (e[n] !== t.get(n)) return ! 1;
				return ! 0
			})
		},
		findWhere: function(e) {
			return this.where(e, !0)
		},
		sort: function(e) {
			if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
			return e || (e = {}),
			n.isString(this.comparator) || this.comparator.length === 1 ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)),
			e.silent || this.trigger("sort", this, e),
			this
		},
		pluck: function(e) {
			return n.invoke(this.models, "get", e)
		},
		fetch: function(e) {
			e = e ? n.clone(e) : {},
			e.parse === void 0 && (e.parse = !0);
			var t = e.success,
			r = this;
			return e.success = function(n) {
				var i = e.reset ? "reset": "set";
				r[i](n, e),
				t && t(r, n, e),
				r.trigger("sync", r, n, e)
			},
			I(this, e),
			this.sync("read", this, e)
		},
		create: function(e, t) {
			t = t ? n.clone(t) : {};
			if (! (e = this._prepareModel(e, t))) return ! 1;
			t.wait || this.add(e, t);
			var r = this,
			i = t.success;
			return t.success = function(e, n) {
				t.wait && r.add(e, t),
				i && i(e, n, t)
			},
			e.save(null, t),
			e
		},
		parse: function(e, t) {
			return e
		},
		clone: function() {
			return new this.constructor(this.models)
		},
		_reset: function() {
			this.length = 0,
			this.models = [],
			this._byId = {}
		},
		_prepareModel: function(e, t) {
			if (e instanceof d) return e;
			t = t ? n.clone(t) : {},
			t.collection = this;
			var r = new this.model(e, t);
			return r.validationError ? (this.trigger("invalid", this, r.validationError, t), !1) : r
		},
		_addReference: function(e, t) {
			this._byId[e.cid] = e,
			e.id != null && (this._byId[e.id] = e),
			e.collection || (e.collection = this),
			e.on("all", this._onModelEvent, this)
		},
		_removeReference: function(e, t) {
			this === e.collection && delete e.collection,
			e.off("all", this._onModelEvent, this)
		},
		_onModelEvent: function(e, t, n, r) {
			if ((e === "add" || e === "remove") && n !== this) return;
			e === "destroy" && this.remove(t, r),
			t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)),
			this.trigger.apply(this, arguments)
		}
	});
	var b = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
	n.each(b,
	function(e) {
		m.prototype[e] = function() {
			var t = u.call(arguments);
			return t.unshift(this.models),
			n[e].apply(n, t)
		}
	});
	var w = ["groupBy", "countBy", "sortBy", "indexBy"];
	n.each(w,
	function(e) {
		m.prototype[e] = function(t, r) {
			var i = n.isFunction(t) ? t: function(e) {
				return e.get(t)
			};
			return n[e](this.models, i, r)
		}
	});
	var E = t.View = function(e) {
		this.cid = n.uniqueId("view"),
		e || (e = {}),
		n.extend(this, n.pick(e, x)),
		this._ensureElement(),
		this.initialize.apply(this, arguments),
		this.delegateEvents()
	},
	S = /^(\S+)\s*(.*)$/,
	x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
	n.extend(E.prototype, f, {
		tagName: "div",
		$: function(e) {
			return this.$el.find(e)
		},
		initialize: function() {},
		render: function() {
			return this
		},
		remove: function() {
			return this.$el.remove(),
			this.stopListening(),
			this
		},
		setElement: function(e, n) {
			return this.$el && this.undelegateEvents(),
			this.$el = e instanceof t.$ ? e: t.$(e),
			this.el = this.$el[0],
			n !== !1 && this.delegateEvents(),
			this
		},
		delegateEvents: function(e) {
			if (!e && !(e = n.result(this, "events"))) return this;
			this.undelegateEvents();
			for (var t in e) {
				var r = e[t];
				n.isFunction(r) || (r = this[e[t]]);
				if (!r) continue;
				var i = t.match(S),
				s = i[1],
				o = i[2];
				r = n.bind(r, this),
				s += ".delegateEvents" + this.cid,
				o === "" ? this.$el.on(s, r) : this.$el.on(s, o, r)
			}
			return this
		},
		undelegateEvents: function() {
			return this.$el.off(".delegateEvents" + this.cid),
			this
		},
		_ensureElement: function() {
			if (!this.el) {
				var e = n.extend({},
				n.result(this, "attributes"));
				this.id && (e.id = n.result(this, "id")),
				this.className && (e["class"] = n.result(this, "className"));
				var r = t.$("<" + n.result(this, "tagName") + ">").attr(e);
				this.setElement(r, !1)
			} else this.setElement(n.result(this, "el"), !1)
		}
	}),
	t.sync = function(e, r, i) {
		var s = N[e];
		n.defaults(i || (i = {}), {
			emulateHTTP: t.emulateHTTP,
			emulateJSON: t.emulateJSON
		});
		var o = {
			type: s,
			dataType: "json"
		};
		i.url || (o.url = n.result(r, "url") || F()),
		i.data == null && r && (e === "create" || e === "update" || e === "patch") && (o.contentType = "application/json", o.data = JSON.stringify(i.attrs || r.toJSON(i))),
		i.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
			model: o.data
		}: {});
		if (i.emulateHTTP && (s === "PUT" || s === "DELETE" || s === "PATCH")) {
			o.type = "POST",
			i.emulateJSON && (o.data._method = s);
			var u = i.beforeSend;
			i.beforeSend = function(e) {
				e.setRequestHeader("X-HTTP-Method-Override", s);
				if (u) return u.apply(this, arguments)
			}
		}
		o.type !== "GET" && !i.emulateJSON && (o.processData = !1),
		o.type === "PATCH" && T && (o.xhr = function() {
			return new ActiveXObject("Microsoft.XMLHTTP")
		});
		var a = i.xhr = t.ajax(n.extend(o, i));
		return r.trigger("request", r, a, i),
		a
	};
	var T = typeof window != "undefined" && !!window.ActiveXObject && (!window.XMLHttpRequest || !(new XMLHttpRequest).dispatchEvent),
	N = {
		create: "POST",
		update: "PUT",
		patch: "PATCH",
		"delete": "DELETE",
		read: "GET"
	};
	t.ajax = function() {
		return t.$.ajax.apply(t.$, arguments)
	};
	var C = t.Router = function(e) {
		e || (e = {}),
		e.routes && (this.routes = e.routes),
		this._bindRoutes(),
		this.initialize.apply(this, arguments)
	},
	k = /\((.*?)\)/g,
	L = /(\(\?)?:\w+/g,
	A = /\*\w+/g,
	O = /[\-{}\[\]+?.,\\\^$|#\s]/g;
	n.extend(C.prototype, f, {
		initialize: function() {},
		route: function(e, r, i) {
			n.isRegExp(e) || (e = this._routeToRegExp(e)),
			n.isFunction(r) && (i = r, r = ""),
			i || (i = this[r]);
			var s = this;
			return t.history.route(e,
			function(n) {
				var o = s._extractParameters(e, n);
				s.execute(i, o),
				s.trigger.apply(s, ["route:" + r].concat(o)),
				s.trigger("route", r, o),
				t.history.trigger("route", s, r, o)
			}),
			this
		},
		execute: function(e, t) {
			e && e.apply(this, t)
		},
		navigate: function(e, n) {
			return t.history.navigate(e, n),
			this
		},
		_bindRoutes: function() {
			if (!this.routes) return;
			this.routes = n.result(this, "routes");
			var e, t = n.keys(this.routes);
			while ((e = t.pop()) != null) this.route(e, this.routes[e])
		},
		_routeToRegExp: function(e) {
			return e = e.replace(O, "\\$&").replace(k, "(?:$1)?").replace(L,
			function(e, t) {
				return t ? e: "([^/?]+)"
			}).replace(A, "([^?]*?)"),
			new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
		},
		_extractParameters: function(e, t) {
			var r = e.exec(t).slice(1);
			return n.map(r,
			function(e, t) {
				return t === r.length - 1 ? e || null: e ? decodeURIComponent(e) : null
			})
		}
	});
	var M = t.History = function() {
		this.handlers = [],
		n.bindAll(this, "checkUrl"),
		typeof window != "undefined" && (this.location = window.location, this.history = window.history)
	},
	_ = /^[#\/]|\s+$/g,
	D = /^\/+|\/+$/g,
	P = /msie [\w.]+/,
	H = /\/$/,
	B = /#.*$/;
	M.started = !1,
	n.extend(M.prototype, f, {
		interval: 50,
		atRoot: function() {
			return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
		},
		getHash: function(e) {
			var t = (e || this).location.href.match(/#(.*)$/);
			return t ? t[1] : ""
		},
		getFragment: function(e, t) {
			if (e == null) if (this._hasPushState || !this._wantsHashChange || t) {
				e = decodeURI(this.location.pathname + this.location.search);
				var n = this.root.replace(H, "");
				e.indexOf(n) || (e = e.slice(n.length))
			} else e = this.getHash();
			return e.replace(_, "")
		},
		start: function(e) {
			if (M.started) throw new Error("Backbone.history has already been started");
			M.started = !0,
			this.options = n.extend({
				root: "/"
			},
			this.options, e),
			this.root = this.options.root,
			this._wantsHashChange = this.options.hashChange !== !1,
			this._wantsPushState = !!this.options.pushState,
			this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
			var r = this.getFragment(),
			i = document.documentMode,
			s = P.exec(navigator.userAgent.toLowerCase()) && (!i || i <= 7);
			this.root = ("/" + this.root + "/").replace(D, "/");
			if (s && this._wantsHashChange) {
				var o = t.$('<iframe src="javascript:0" tabindex="-1">');
				this.iframe = o.hide().appendTo("body")[0].contentWindow,
				this.navigate(r)
			}
			this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !s ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
			this.fragment = r;
			var u = this.location;
			if (this._wantsHashChange && this._wantsPushState) {
				if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0),
				this.location.replace(this.root + "#" + this.fragment),
				!0;
				this._hasPushState && this.atRoot() && u.hash && (this.fragment = this.getHash().replace(_, ""), this.history.replaceState({},
				document.title, this.root + this.fragment))
			}
			if (!this.options.silent) return this.loadUrl()
		},
		stop: function() {
			t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
			this._checkUrlInterval && clearInterval(this._checkUrlInterval),
			M.started = !1
		},
		route: function(e, t) {
			this.handlers.unshift({
				route: e,
				callback: t
			})
		},
		checkUrl: function(e) {
			var t = this.getFragment();
			t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
			if (t === this.fragment) return ! 1;
			this.iframe && this.navigate(t),
			this.loadUrl()
		},
		loadUrl: function(e) {
			return e = this.fragment = this.getFragment(e),
			n.any(this.handlers,
			function(t) {
				if (t.route.test(e)) return t.callback(e),
				!0
			})
		},
		navigate: function(e, t) {
			if (!M.started) return ! 1;
			if (!t || t === !0) t = {
				trigger: !!t
			};
			var n = this.root + (e = this.getFragment(e || ""));
			e = e.replace(B, "");
			if (this.fragment === e) return;
			this.fragment = e,
			e === "" && n !== "/" && (n = n.slice(0, -1));
			if (this._hasPushState) this.history[t.replace ? "replaceState": "pushState"]({},
			document.title, n);
			else {
				if (!this._wantsHashChange) return this.location.assign(n);
				this._updateHash(this.location, e, t.replace),
				this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
			}
			if (t.trigger) return this.loadUrl(e)
		},
		_updateHash: function(e, t, n) {
			if (n) {
				var r = e.href.replace(/(javascript:|#).*$/, "");
				e.replace(r + "#" + t)
			} else e.hash = "#" + t
		}
	}),
	t.history = new M;
	var j = function(e, t) {
		var r = this,
		i;
		e && n.has(e, "constructor") ? i = e.constructor: i = function() {
			return r.apply(this, arguments)
		},
		n.extend(i, r, t);
		var s = function() {
			this.constructor = i
		};
		return s.prototype = r.prototype,
		i.prototype = new s,
		e && n.extend(i.prototype, e),
		i.__super__ = r.prototype,
		i
	};
	d.extend = m.extend = C.extend = E.extend = M.extend = j;
	var F = function() {
		throw new Error('A "url" property or function must be specified')
	},
	I = function(e, t) {
		var n = t.error;
		t.error = function(r) {
			n && n(e, r, t),
			e.trigger("error", e, r, t)
		}
	};
	return t
}),
define("text", ["module"],
function(e) {
	var t, n, r, i, s, o = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
	u = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
	a = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
	f = typeof location != "undefined" && location.href,
	l = f && location.protocol && location.protocol.replace(/\:/, ""),
	c = f && location.hostname,
	h = f && (location.port || undefined),
	p = {},
	d = e.config && e.config() || {};
	t = {
		version: "2.0.12",
		strip: function(e) {
			if (e) {
				e = e.replace(u, "");
				var t = e.match(a);
				t && (e = t[1])
			} else e = "";
			return e
		},
		jsEscape: function(e) {
			return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
		},
		createXhr: d.createXhr ||
		function() {
			var e, t, n;
			if (typeof XMLHttpRequest != "undefined") return new XMLHttpRequest;
			if (typeof ActiveXObject != "undefined") for (t = 0; t < 3; t += 1) {
				n = o[t];
				try {
					e = new ActiveXObject(n)
				} catch(r) {}
				if (e) {
					o = [n];
					break
				}
			}
			return e
		},
		parseName: function(e) {
			var t, n, r, i = !1,
			s = e.indexOf("."),
			o = e.indexOf("./") === 0 || e.indexOf("../") === 0;
			return s !== -1 && (!o || s > 1) ? (t = e.substring(0, s), n = e.substring(s + 1, e.length)) : t = e,
			r = n || t,
			s = r.indexOf("!"),
			s !== -1 && (i = r.substring(s + 1) === "strip", r = r.substring(0, s), n ? n = r: t = r),
			{
				moduleName: t,
				ext: n,
				strip: i
			}
		},
		xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
		useXhr: function(e, n, r, i) {
			var s, o, u, a = t.xdRegExp.exec(e);
			return a ? (s = a[2], o = a[3], o = o.split(":"), u = o[1], o = o[0], (!s || s === n) && (!o || o.toLowerCase() === r.toLowerCase()) && (!u && !o || u === i)) : !0
		},
		finishLoad: function(e, n, r, i) {
			r = n ? t.strip(r) : r,
			d.isBuild && (p[e] = r),
			i(r)
		},
		load: function(e, n, r, i) {
			if (i && i.isBuild && !i.inlineText) {
				r();
				return
			}
			d.isBuild = i && i.isBuild;
			var s = t.parseName(e),
			o = s.moduleName + (s.ext ? "." + s.ext: ""),
			u = n.toUrl(o),
			a = d.useXhr || t.useXhr;
			if (u.indexOf("empty:") === 0) {
				r();
				return
			} ! f || a(u, l, c, h) ? t.get(u,
			function(n) {
				t.finishLoad(e, s.strip, n, r)
			},
			function(e) {
				r.error && r.error(e)
			}) : n([o],
			function(e) {
				t.finishLoad(s.moduleName + "." + s.ext, s.strip, e, r)
			})
		},
		write: function(e, n, r, i) {
			if (p.hasOwnProperty(n)) {
				var s = t.jsEscape(p[n]);
				r.asModule(e + "!" + n, "define(function () { return '" + s + "';});\n")
			}
		},
		writeFile: function(e, n, r, i, s) {
			var o = t.parseName(n),
			u = o.ext ? "." + o.ext: "",
			a = o.moduleName + u,
			f = r.toUrl(o.moduleName + u) + ".js";
			t.load(a, r,
			function(n) {
				var r = function(e) {
					return i(f, e)
				};
				r.asModule = function(e, t) {
					return i.asModule(e, f, t)
				},
				t.write(e, a, r, s)
			},
			s)
		}
	};
	if (d.env === "node" || !d.env && typeof process != "undefined" && process.versions && !!process.versions.node && !process.versions["node-webkit"]) n = require.nodeRequire("fs"),
	t.get = function(e, t, r) {
		try {
			var i = n.readFileSync(e, "utf8");
			i.indexOf("﻿") === 0 && (i = i.substring(1)),
			t(i)
		} catch(s) {
			r && r(s)
		}
	};
	else if (d.env === "xhr" || !d.env && t.createXhr()) t.get = function(e, n, r, i) {
		var s = t.createXhr(),
		o;
		s.open("GET", e, !0);
		if (i) for (o in i) i.hasOwnProperty(o) && s.setRequestHeader(o.toLowerCase(), i[o]);
		d.onXhr && d.onXhr(s, e),
		s.onreadystatechange = function(t) {
			var i, o;
			s.readyState === 4 && (i = s.status || 0, i > 399 && i < 600 ? (o = new Error(e + " HTTP status: " + i), o.xhr = s, r && r(o)) : n(s.responseText), d.onXhrComplete && d.onXhrComplete(s, e))
		},
		s.send(null)
	};
	else if (d.env === "rhino" || !d.env && typeof Packages != "undefined" && typeof java != "undefined") t.get = function(e, t) {
		var n, r, i = "utf-8",
		s = new java.io.File(e),
		o = java.lang.System.getProperty("line.separator"),
		u = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s), i)),
		a = "";
		try {
			n = new java.lang.StringBuffer,
			r = u.readLine(),
			r && r.length() && r.charAt(0) === 65279 && (r = r.substring(1)),
			r !== null && n.append(r);
			while ((r = u.readLine()) !== null) n.append(o),
			n.append(r);
			a = String(n.toString())
		} finally {
			u.close()
		}
		t(a)
	};
	else if (d.env === "xpconnect" || !d.env && typeof Components != "undefined" && Components.classes && Components.interfaces) r = Components.classes,
	i = Components.interfaces,
	Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),
	s = "@mozilla.org/windows-registry-key;1" in r,
	t.get = function(e, t) {
		var n, o, u, a = {};
		s && (e = e.replace(/\//g, "\\")),
		u = new FileUtils.File(e);
		try {
			n = r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream),
			n.init(u, 1, 0, !1),
			o = r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream),
			o.init(n, "utf-8", n.available(), i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),
			o.readString(n.available(), a),
			o.close(),
			n.close(),
			t(a.value)
		} catch(f) {
			throw new Error((u && u.path || "") + ": " + f)
		}
	};
	return t
}),
define("text!module/templates/index.html", [],
function() {
	return '\r  <div id="menu" class="menu" style="top:-80px;">\r      <div>\r          <div>\r              <p>\r                  <img src="http://7xj0rt.com1.z0.glb.clouddn.com/header.jpg">\r              </p>\r          </div>\r          <ul>\r              <li class="menu-li select" data-url="index">首页</li>\r              <li class="menu-li" data-url="subject">细目</li>\r              <li class="menu-li" data-url="article">文章</li>\r              <li class="menu-li" data-url="image">图文</li>\r              <li class="menu-li" data-url="book">读书</li>\r          </ul>\r      </div>\r  </div>\r\r   <div id="content">\r\r   	  <div class="m-header">\r   	  	   <div class="header-card">\r   	  	  	  <div class="part-1">\r   	  	  	  	 <div class="foam foam-l">\r   	  	  	  	 	<div></div>\r   	  	  	  	 </div>\r   	  	  	  	 <div class="avatar">\r   	  	  	  	 	 <b>\r   	  	  	  	 	 	<img src="http://7xj0rt.com1.z0.glb.clouddn.com/avatar/avatar.png">\r   	  	  	  	 	 </b>\r   	  	  	  	 	 <p>\r   	  	  	  	 	 	<!-- <span></span> -->\r   	  	  	  	 	 </p>\r   	  	  	  	 </div>\r   	  	  	  	 <div class="foam foam-r">\r   	  	  	  	 	<div></div>\r   	  	  	  	 </div>\r   	  	  	  </div>\r   	  	  	  <div class="part-2">\r   	  	  	  	 <h2>i am blue</h2>\r   	  	  	  	 <i></i>\r   	  	  	  	 <p>If on a winter\'s morning</p>\r   	  	  	  </div>\r   	  	  </div>\r   	  </div>\r      <div class="m-profession">\r   	  	  <div class="logo">\r   	  	  	  \r   	  	  </div>\r   	  	  <div class="m-profession-info">\r   	  	  	  <div class="year">2016</div>\r   	  	  	  <div class="text">\r                 <p>从此恋上一个女子</p>  \r                 <p class="t">并行</p>  \r                 <p>读,一本书</p>  \r                 <p>走,一段路</p>  \r              </div>\r   	  	  </div>\r   	  </div>\r      <div class="m-info">\r   	  	  <div class="mark">\r             <p>”</p> \r          </div>\r          <div class=""></div>\r          <div class="text">\r            <!-- <p>你好，我叫Lanry(蓝少)，自学差一点点就成才的H5开发人员，来自广州。</p> -->\r            <!-- <p>你好，我叫Blue(蓝少)；来自深圳(來自哪裡不重要，將要去哪裡才是重點)。</p> -->\r            <p>你好，我叫Blue(蓝少)；来自深圳(來自哪裡不重要，將要去哪裡才是重點)。</p>\r            <p>自学自残乱弄就成才的前端开发人员，现在却专注在移动端开发的路上；未来将走上数据算法的道路！！！</p>\r            <p>一直很幸运能与非常出色的人一起做项目，而且他们给了我很多帮助和指导；谢谢他们。</p>\r            <p>很喜欢简约设计风格的味道，简而言之，它推动了我的好奇心和激情。\r               我决定把更多的时间投入到收集简约设计的灵感和逐步设计并开发中来；开始追逐我的梦想。</p>\r            <p>就是喜欢奇奇怪怪的东西；看一些心理、惊悚、黑色叙事...的电影；比如：昆汀·塔伦蒂诺、克里斯托弗·诺兰、佩德罗·阿尔莫多瓦...；听一些古灵、迷幻、另类独立的音乐；比如：拉娜·德雷...；有一段疯狂恋上日本文学的日子；有一段不知所措简笔画的日子；...；再过着一段自以为是的日子。</p>\r            <p>在我这个年龄，大部分人不在旅途，就是心在旅途的路上。没错，我也不例外。我打算去丽江、日月潭、九寨沟、青海湖、武当山、虎跳峡、那拉提草原、腾格里沙漠、土耳其、地中海、巴塞罗那、伯尔尼、悉尼...  [哭][哭][哭] 好像根本就没打算过。</p>\r            <p>有一天我会喝下一碗粥，在还没起风的晨早出发；</p>\r            <p>带上她，去那些我们想去的地方，做那些我们想做的事情...</p>\r            <p></p>\r\r          </div>\r\r        \r   	  </div>\r\r      <!-- 主题，作品 -->\r   	  <div class="m-product" style="display:none">\r   	  	  \r          <div></div>\r\r   	  </div>\r      \r      <!-- 展示简简单单生活板块 -->\r   	  <div class="m-life">\r          <div class="logo">\r              <div></div>\r          </div>\r   	  	  <div class="debris">\r\r              <div class="debris-1">\r                  <div>\r                    <span style="background-image: url(http://7xj0rt.com1.z0.glb.clouddn.com/header-bg/big.jpg)"></span>\r                  </div>\r                  <div>\r                      <div class="s1"><span style="background-image: url(http://7xj0rt.com1.z0.glb.clouddn.com/header-bg/fang.jpg)"></span></div>\r                      <div class="s2">\r                         <h2>没想到遇上你</h2>\r                         <p>素色的背景，大面积的留白，让画中人仿佛处于无限的空间中。世界变换颜色，人变换心情，请赠我一页空有乐谱的素签。</p>\r                      </div>\r                  </div>\r              </div>\r              <div class="debris-2">\r                  <div><span style="background-image: url(http://7xj0rt.com1.z0.glb.clouddn.com/header-bg/f01.jpg)"></span></div>\r                  <div><span style="background-image: url(http://7xj0rt.com1.z0.glb.clouddn.com/header-bg/f02.jpg)"></span></div>\r                  <div><span style="background-image: url(http://7xj0rt.com1.z0.glb.clouddn.com/header-bg/f03.jpg)"></span></div>\r              </div>\r\r          </div>\r   	  </div>\r\r   	  <div class="m-footer">\r   	  	  <p class="word">当生活不再只是为了梦想的时候 ...</p>\r          <div class="logo">\r               <div></div>\r          </div>\r          <p class="blue">BLUE</p>\r          <div class="x">\r             <span></span>\r             <span></span>\r          </div>\r          <p class="blue">蓝</p>\r          <p class="n">2013/2014/2015</p>\r\r   	  </div>\r\r   </div> \r\r    <style type="text/css">\r      .b-a { position: relative;  z-index: 1000; width: 100%; height: 50px; left: 0;\r        text-align: center; background-color: #F5F6FA}\r      .b-a a { color: #6D7075; font-size: 12px; }\r    </style>\r    \r   <p class="b-a"><a href="http://www.miitbeian.gov.cn/" title="" target="_blank">粤ICP备14074912号-3</a></p>\r\r   <script type="text/javascript">\r   \r    // var _droflag = true; \r    //      $(document).click(function(e){\r    //         if($(e.target).is(".dropdown-toggle , .hidden-xs-only , .thumb-small .img-circle , .caret")){\r    //          //  return false;\r    //              if (_droflag) {\r    //                 $(".dropdown-menu").css("display","block");\r    //                 $(".caret").addClass("caret2");\r    //                 _droflag = false; \r    //               }else{\r    //                 $(".dropdown-menu").css("display","none");\r    //                 $(".caret").removeClass("caret2");\r    //                 _droflag = true; \r    //               };\r    //               return false;\r    //         }else{\r    //            $(".dropdown-menu").css("display","none");\r    //            $(".caret").removeClass("caret2");\r    //            _droflag = true; \r    //         };\r            \r    //      });\r\r\r         </script>\r\r\r'
}),
define("common/common_function", ["jquery"],
function(e) {
	var t = 1e3,
	n = {
		good: "5555",
		fun: function(e) {
			console.log(good)
		},
		page_show: function(t, n) {
			e(t).show(),
			e(n).addClass("loading-out-animation"),
			setTimeout(function() {
				e(n).hide()
			},
			1500),
			window.scrollTo(0, 0)
		},
		page_images_loading: function(t) {
			var n = t,
			r = images_arr.length,
			i = 0,
			s = e("#loading"),
			o = e("#loading_text"),
			u = function(e) {
				var t = new Image;
				t.onload = function() {++i,
					o.text(parseInt(i / r * 100) + "%")
				},
				t.src = e
			};
			for (var a = 0; a < r; ++a) u("images/" + n[a]);
			var f = 60,
			l = function() {
				0 >= f ? i / r > .5 ? c() : alert("加载图片失败，请返回刷新尝试!") : (f -= .5, i == r ? c() : setTimeout(l, 500))
			},
			c = function() {};
			return function(e) {
				typeof e == "function" && (c = e),
				l()
			}
		},
		load_image: function(e, t) {
			for (var n = 0; n < e.length; n++) this._go_load_image(e[n], t, n)
		},
		_go_load_image: function(t, n, r) {
			var i = new Image;
			i.src = t,
			i.complete ? e(n).eq(r).find("img").removeClass("img_loading").attr("src", i.src) : (i.onload = function() {
				e(n).eq(r).find("img").removeClass("img_loading").attr("src", i.src)
			},
			i.onerror = function() {})
		},
		progress_bar: function(e) {},
		is_empty_object: function(e) {
			for (var t in e) return ! 1;
			return ! 0
		},
		date_format: function(e, t) {
			t = t || "yyyy-MM-dd";
			var n = new Date(e * 1e3),
			r = ["日", "一", "二", "三", "四", "五", "六"],
			i = {
				"M+": n.getMonth() + 1,
				"d+": n.getDate(),
				"h+": n.getHours(),
				"m+": n.getMinutes(),
				"s+": n.getSeconds(),
				"q+": Math.floor((n.getMonth() + 3) / 3),
				S: n.getMilliseconds(),
				W: r[n.getDay()]
			};
			/(y+)/.test(t) && (t = t.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length)));
			for (var s in i)(new RegExp("(" + s + ")")).test(t) && (t = t.replace(RegExp.$1, RegExp.$1.length == 1 ? i[s] : ("00" + i[s]).substr(("" + i[s]).length)));
			return t
		},
		unique: function(e) {
			var t = [],
			n = {};
			for (var r = 0,
			i; (i = e[r]) != null; r++) n[i] || (t.push(i), n[i] = !0);
			return n
		},
		to_top: function() {
			var e = "<div></div>"
		}
	};
	return n
}),
define("module/views/index", ["jquery", "underscore", "backbone", "text!module/templates/index.html", "common/common_function"],
function(e, t, n, r, i) {
	var s = n.View.extend({
		el: "#page-content",
		template: t.template(r),
		events: {
			"click .menu-li": function(t) {
				window.location.hash = e(t.currentTarget).attr("data-url")
			}
		},
		initialize: function() {
			var t = this;
			e(this.el).removeClass().addClass("page-index"),
			this.render(),
			this.scrollFun(),
			e(window).scroll(function() {
				e("#page-content").hasClass("page-index") && t.scrollFun()
			})
		},
		render: function() {
			e(this.el).html(this.template),
			i.page_show(this.el, "#loading")
		},
		scrollFun: function() {
			var t = e(".page-index"),
			n = t.find(".m-info").offset().top,
			r = e(window).scrollTop();
			r >= n && t.find(".menu").css("top", "0"),
			r < n && t.find(".menu").css("top", "-80px")
		}
	});
	return s
}),
define("text!module/templates/image.html", [],
function() {
	return ' <div id="menu" class="menu">\r      <div>\r          <div>\r              <p>\r                  <img src="http://7xj0rt.com1.z0.glb.clouddn.com/header.jpg">\r              </p>\r          </div>\r          <ul>\r              <li data-url="index">首页</li>\r              <li data-url="subject">细目</li>\r              <li data-url="article">文章</li>\r              <li data-url="image" class="select">图文</li>\r              <li data-url="book">读书</li>\r          </ul>\r      </div>\r  </div>\r\r\r    <div id="content">\r\r         <div class="image-list">\r            <%_.each(obj,function(e,i){%>\r               <div class="image-list-box">\r                  <div class="img"><img class="" src="<%=e.image%>"></div>\r                  <div class="title"><%=e.title%></div>\r                  <div class="time"><%=e.time%></div>\r               </div>\r            <%})%>\r      <!--        <div class="image-list-box">\r                <div class="img"><img class="img_loading" src="http://7xj0rt.com1.z0.glb.clouddn.com/loading.gif"></div>\r                <div class="title">黄山之旅</div>\r\r                <div class="time">公元 2015.01.16 ~ 2015.01.17</div>\r             </div>\r             <div class="image-list-box">\r                <div class="img"><img class="img_loading" src="http://7xj0rt.com1.z0.glb.clouddn.com/loading.gif"></div>\r                <div class="title">西湖一旅</div>\r                <div class="time">公元 2015.01.15</div>\r             </div>\r             <div class="image-list-box">\r                <div class="img"><img class="img_loading" src="http://7xj0rt.com1.z0.glb.clouddn.com/loading.gif"></div>\r                <div class="title">宝墨园</div>\r                <div class="time">公元 2014.11.20</div>\r             </div>\r             <div class="image-list-box">\r                <div class="img"><img class="img_loading" src="http://7xj0rt.com1.z0.glb.clouddn.com/loading.gif"></div>\r                <div class="title">午餐</div>\r                <div class="time">公元 2014.11.08</div>\r             </div>\r             <div class="image-list-box">\r                <div class="img"><img class="img_loading" src="http://7xj0rt.com1.z0.glb.clouddn.com/loading.gif"></div>\r                <div class="title">西樵山一旅</div>\r                <div class="time">公元 2014.12.17</div>\r             </div>\r             <div class="image-list-box">\r                <div class="img"><img class="img_loading" src="http://7xj0rt.com1.z0.glb.clouddn.com/loading.gif"></div>\r                <div class="title">现租之处</div>\r                <div class="time">公元 2014.10.15</div>\r             </div> -->\r\r\r\r         </div>\r\r\r    </div>\r\r'
}),
define("text!data/image.json", [],
function() {
	return '[{\n  "image":"http://7xj0rt.com1.z0.glb.clouddn.com/img02.jpg",\n  "title":"景德镇一旅",\n  "time":"公元 2015.01.18"\n},{\n  "image":"http://7xj0rt.com1.z0.glb.clouddn.com/img01.jpg",\n  "title":"黄山之旅",\n  "time":"公元 2015.01.16 ~ 2015.01.17"\n},{\n  "image":"http://7xj0rt.com1.z0.glb.clouddn.com/img04.jpg",\n  "title":"西湖一旅",\n  "time":"公元 2015.01.15"\n},{\n  "image":"http://7xj0rt.com1.z0.glb.clouddn.com/img/P41120-164041.jpg",\n  "title":"宝墨园",\n  "time":"公元 2014.11.20"\n},{\n  "image":"http://7xj0rt.com1.z0.glb.clouddn.com/img/P41029-124339.jpg",\n  "title":"午餐",\n  "time":"公元 2014.11.08"\n},{\n  "image":"http://7xj0rt.com1.z0.glb.clouddn.com/img/P50102-101221.jpg",\n  "title":"西樵山一旅",\n  "time":"公元 2014.12.17"\n},{\n  "image":"http://7xj0rt.com1.z0.glb.clouddn.com/img/P41130-140121.jpg",\n  "title":"曾租之处",\n  "time":"公元 2013.10.08 ~ 2015.10.18"\n} ]\n'
}),
define("module/views/image", ["underscore", "backbone", "text!module/templates/image.html", "common/common_function", "text!data/image.json"],
function(e, t, n, r, i) {
	var s = t.View.extend({
		el: "#page-content",
		template: e.template(n),
		events: {},
		initialize: function() {
			this.render()
		},
		render: function() {
			$(this.el).removeClass().addClass("page-image");
			var e = JSON.parse(i);
			$(this.el).html(this.template(e)),
			r.page_show(this.el, "#loading"),
			$(".menu li").on("click",
			function() {
				window.location.hash = $(this).attr("data-url")
			});
			var t = ["http://7xj0rt.com1.z0.glb.clouddn.com/img02.jpg", "http://7xj0rt.com1.z0.glb.clouddn.com/img01.jpg", "http://7xj0rt.com1.z0.glb.clouddn.com/img04.jpg", "http://7xj0rt.com1.z0.glb.clouddn.com/img/P41120-164041.jpg", "http://7xj0rt.com1.z0.glb.clouddn.com/img/P41029-124339.jpg", "http://7xj0rt.com1.z0.glb.clouddn.com/img/P50102-101221.jpg", "http://7xj0rt.com1.z0.glb.clouddn.com/img/P41130-140121.jpg"]
		}
	});
	return s
}),
define("text!module/templates/article.html", [],
function() {
	return '<div id="menu" class="menu">\r    <div>\r        <div>\r            <p>\r                <img src="http://7xj0rt.com1.z0.glb.clouddn.com/header.jpg">\r            </p>\r        </div>\r        <ul>\r            <li data-url="index">首页</li>\r            <li data-url="subject">细目</li>\r            <li data-url="article" class="select">文章</li>\r            <li data-url="image">图文</li>\r            <li data-url="book">读书</li>\r        </ul>\r    </div>\r</div>\r<div id="content">\r    <div class="article-list">\r        <%_.each(obj,function(e,i){%>\r            <div data-list="">\r                <div class="list-time">\r                    <p><span><%=e.time.day%></span>/\r                        <%=e.time.mon%>\r                    </p>\r                    <p>\r                        <%=e.time.year%>\r                    </p>\r                </div>\r                <div class="list-content">\r                    <h3><%=e.title%></h3>\r                    <p>\r                        <%=e.content%>\r                    </p>\r                    <% _.each(e.imgs,function(img){ %>\r                        <b><img class="" src="<%=img%>"></b>\r                        <% }) %>\r                            <div class="more">\r                                <!-- <span>查看更多...</span> --></div>\r                            <div class="tags">标签:&nbsp;\r                                <% _.each(e.tags,function(tag){ %>\r                                    <span><%=tag%></span>\r                                    <% }) %>\r                            </div>\r                            <div class="border-bottom"></div>\r                </div>\r            </div>\r            <%})%>\r    </div>\r    <!-- 页码数 -->\r    <div class="page_no_bar">\r    </div>\r    <!-- 更多... -->\r    <div class="page_more_box">\r        <div class="more_btn">\r            <h5>查看更多...</h5>\r            <div class="more_loading on">\r                <div class="div"></div>\r                <div class="div"></div>\r                <div class="div"></div>\r                <div class="div"></div>\r            </div>\r            <h6 class="">That\'s all!</h6>\r        </div>\r    </div>\r</div>\r'
}),
define("text!data/article.json", [],
function() {
	return '[{\n    "time": {\n        "day": "03",\n        "mon": "06",\n        "year": "2015"\n    },\n    "title": "我有点，想念深圳",\n    "content": "夜深人静，我突然心里有点空空荡荡的，开始怀念某个地方...",\n    "imgs": [],\n    "tags": ["想念", "深圳"]\n}, {\n    "time": {\n        "day": "01",\n        "mon": "06",\n        "year": "2015"\n    },\n    "title": "我喜欢，有记忆的地方。",\n    "content": "",\n    "imgs": [],\n    "tags": ["记忆"]\n}, {\n    "time": {\n        "day": "31",\n        "mon": "05",\n        "year": "2015"\n    },\n    "title": "《行走的力量》",\n    "content": "行走，只要开始，就不会结束... ",\n    "imgs": ["http://7xj0rt.com1.z0.glb.clouddn.com/article/xinzou.png"],\n    "tags": ["行走", "故事"]\n}, {\n    "time": {\n        "day": "26",\n        "mon": "05",\n        "year": "2015"\n    },\n    "title": "再给我一点时间，重新去定义时间",\n    "content": "<br /><br /><br />",\n    "imgs": ["http://7xj0rt.com1.z0.glb.clouddn.com/article/mhyb095.gif"],\n    "tags": ["时间", "一点一滴"]\n}, {\n    "time": {\n        "day": "23",\n        "mon": "05",\n        "year": "2015"\n    },\n    "title": "怕的是：雾里看花，水中望月",\n    "content": "",\n    "imgs": ["http://7xj0rt.com1.z0.glb.clouddn.com/article/P50515-083133.jpg"],\n    "tags": ["生活"]\n}, {\n    "time": {\n        "day": "19",\n        "mon": "05",\n        "year": "2015"\n    },\n    "title": "不知道，我的故事还不完整。",\n    "content": "其实我想留下来... ",\n    "imgs": [],\n    "tags": ["我", "故事"]\n}, {\n    "time": {\n        "day": "12",\n        "mon": "05",\n        "year": "2015"\n    },\n    "title": "生活有时候需要点正能量...",\n    "content": "  你无需告诉每个人，那一个个艰难的日子是如何熬过来的，大多数人都看你飞得高不高，很少人在意你飞得累不累。所以，做该做的事，走该走的路，不退缩，不动摇。无论多难，也告诉自己：再坚持一下，别让你配不上自己的野心，也辜负了曾经经历的苦难与磨练。<br /><i>转自人民日报的微博。</i> ",\n    "imgs": [],\n    "tags": ["生活", "正能量"]\n}, {\n    "time": {\n        "day": "10",\n        "mon": "05",\n        "year": "2015"\n    },\n    "title": "而这一切，都不缺...",\n    "content": "如果有一天： 你不再寻找爱情，只是去爱；你不再渴望成功，只是去做；你不再追求成长，只是去修；一切才真正开始！ —— 纪伯伦 ",\n    "imgs": [],\n    "tags": ["读书", "纪伯伦"]\n}, {\n    "time": {\n        "day": "05",\n        "mon": "05",\n        "year": "2015"\n    },\n    "title": "《狩猎》最后一枪",\n    "content": "看来有些事情绝非是一个拥抱能够解决的，最后那一枪证明了胡适的那句诗“湖更静平时毕竟难如旧”，心中的芥蒂到头来还是没有能够解开，或许以后也永远无法解开。 ",\n    "imgs": ["http://7xj0rt.com1.z0.glb.clouddn.com/article/160202.66512499_1000X1000.jpg"],\n    "tags": ["电影", "记录"]\n}, {\n    "time": {\n        "day": "29",\n        "mon": "04",\n        "year": "2015"\n    },\n    "title": "奶奶去了一个很远很远的地方...",\n    "content": "所有的所有的所有的一切<br />只剩下<br />屋前油菜花孤独地开着... ",\n    "imgs": ["http://7xj0rt.com1.z0.glb.clouddn.com/article/mmexport1431271701235.jpg"],\n    "tags": ["爱", "奶奶"]\n}, {\n    "time": {\n        "day": "25",\n        "mon": "04",\n        "year": "2015"\n    },\n    "title": "带着一副“你们不可能击败我们的”表情",\n    "content": "约翰-沃尔(奇才)<br><br> 　　2015年季后赛场均数据：18分、12.5次助攻<br><br> 　　目睹了沃尔在前两场比赛中的表现之后，猛龙显然已经意识到了他的天赋。沃尔的优势非常明显，他已经用他的防守、传球和得分击败了猛龙。第2场，他得到26分和17次助攻，并且带着一副“你们不可能击败我们的”表情。<br><br> 　　毫无疑问，沃尔已经是联盟里的一名顶尖控卫，他可能还是一号位上最好的防守者。他在场上拥有一名大个球员的意志，并总是想办法统治比赛和摧毁对手的内心。<br>",\n    "imgs": ["http://7xj0rt.com1.z0.glb.clouddn.com/article/mp12342531_1429938362712_1_th.jpeg"],\n    "tags": ["NBA", "成长"]\n}, {\n    "time": {\n        "day": "10",\n        "mon": "04",\n        "year": "2015"\n    },\n    "title": "费尔南多·佩索阿",\n    "content": "我从未照看过羊群，<br> 　　却好像看护过它们。<br> 　　我的灵魂像—个牧羊者，<br> 　　熟悉风向，了解太阳，<br> 　　与四个季节携手前进<br> 　　去跟随去倾听。<br> 　　悄无人迹的大自然的全部静谧<br> 　　来到我身边坐下。<br> 　　但我仍然像落日一样悲伤<br> 　　因为我们的想像显露了它，<br> 　　当一场寒流降临山谷遥远的—侧。<br> 　　当你感到黑夜已经闯入<br> 　　像一只蝴蝶穿过了一扇窗户。<br><br><br> 　　但我的悲伤是平静的<br> 　　因为它自然，正确<br> 　　是必将出现在灵魂里的<br> 　　当它正思索着．它就是存在的<br> 　　而双手正摘下花朵。看都不看是哪一朵。<br> .....<br><br>",\n    "imgs": ["http://7xj0rt.com1.z0.glb.clouddn.com/article/70a98b5ag9a8c3858748d&690.jpg"],\n    "tags": ["诗歌", "成长"]\n}, {\n    "time": {\n        "day": "05",\n        "mon": "04",\n        "year": "2015"\n    },\n    "title": "一面镜子",\n    "content": "也许...<br> 他们只是一面镜子<br> 变的是我们",\n    "imgs": [],\n    "tags": ["生活", "一面镜子"]\n}, {\n    "time": {\n        "day": "30",\n        "mon": "03",\n        "year": "2015"\n    },\n    "title": "千刀万剐",\n    "content": "每次都是在将要月尾的时候，才会想起月初自己定下的计划。",\n    "imgs": ["http://7xj0rt.com1.z0.glb.clouddn.com/article/1431272052798.jpg"],\n    "tags": ["生活", "计划", "成长"]\n}, {\n    "time": {\n        "day": "25",\n        "mon": "03",\n        "year": "2015"\n    },\n    "title": "《最近...》",\n    "content": "最近的心情，就像天气一样怪怪的。沒有办法去整顿，因为只要触碰一点，它就要崩解了。",\n    "imgs": [],\n    "tags": ["生活", "心情"]\n}, {\n    "time": {\n        "day": "12",\n        "mon": "03",\n        "year": "2015"\n    },\n    "title": "是的，我在等一首歌。",\n    "content": "<br> 是的，我在等一首歌，等一个预言；<br> 总是在某个时间，我不断的单曲重复某一首歌，一遍又一遍。<br> 而现在，我在一首歌中等你。<br><br> 我会不断重复一首歌，然后回忆一段往事，并且疯狂想念一个人。<br><br> 你会不会突然的出现。<br>",\n    "imgs": ["http://7xj0rt.com1.z0.glb.clouddn.com/article/4154545.jpg"],\n    "tags": ["生活", "一首歌", "回忆"]\n}, {\n    "time": {\n        "day": "10",\n        "mon": "03",\n        "year": "2015"\n    },\n    "title": "佐伯俊男（Toshio Saeki）",\n    "content": "日本画家、情色艺术家。1945年出生于大阪，24岁放弃乏味的职业而从事情色绘画创作，将日本传统鬼神、浮世绘和性巧妙融合，自成一派。",\n    "imgs": ["http://7xj0rt.com1.z0.glb.clouddn.com/article/p215268550-1.jpg"],\n    "tags": ["画画", "日本", "追逐"]\n}, {\n    "time": {\n        "day": "05",\n        "mon": "03",\n        "year": "2015"\n    },\n    "title": "撤下，统统给我撤下",\n    "content": "去年的贴纸<br> 满满的记录<br> 撤下，更新了<br><br> 希望新的一年，遇见不一样的自己~~~",\n    "imgs": ["http://7xj0rt.com1.z0.glb.clouddn.com/article/tiezhi.jpg"],\n    "tags": ["生活", "贴纸", "自己"]\n}, {\n    "time": {\n        "day": "28",\n        "mon": "02",\n        "year": "2015"\n    },\n    "title": "中性笔画，没事勾勒两笔",\n    "content": "人和花一样<br> 都渴求雨露阳光<br> 都希望茁壮成长<br><br> 人生苦短<br> 也许啊 我们什么都可以看淡<br> 却不可以看淡：生命的质量<br> 别放弃 努力 再努力<br> 我的人生我做主<br>",\n    "imgs": ["http://7xj0rt.com1.z0.glb.clouddn.com/article/hua.jpg"],\n    "tags": ["生活", "画画", "随笔", "创意"]\n}, {\n    "time": {\n        "day": "12",\n        "mon": "02",\n        "year": "2015"\n    },\n    "title": "一定要谈论情人节这个话题吗",\n    "content": "我现在凭感觉地告诉你，我想过情人节。不只是想了那么简单。<br>但很可惜，暂时没有人陪在我身边...<br>我想对未来的女友说：我会陪你去看电影，会一直陪在你的身边。",\n    "imgs": ["http://7xj0rt.com1.z0.glb.clouddn.com/article/q.jpg"],\n    "tags": ["生活", "随笔", "闲聊"]\n}, {\n    "time": {\n        "day": "30",\n        "mon": "01",\n        "year": "2015"\n    },\n    "title": "《月亮，我在地球》",\n    "content": "我没有醒过来，就睡着了；这些日子里，<br>我没头没尾的生活着，不是蛇头蛇尾。",\n    "imgs": ["http://7xj0rt.com1.z0.glb.clouddn.com/article/2.png"],\n    "tags": ["闲聊"]\n}, {\n    "time": {\n        "day": "07",\n        "mon": "01",\n        "year": "2015"\n    },\n    "title": "《我是一朵云》",\n    "content": "我是一朵云<br> 没事的时候<br> 我会到处逛逛<br><br> 没事的时候<br> 我也会呆在一个地方<br> 哪里都不去<br><br> 不过有时候<br> 我对天空失去了耐心<br> 我会哭泣<br><br> 我会...<br><br> 关于雨<br> 请原谅我<br> 那是遇见你以后所发生的事情<br> ",\n    "imgs": [],\n    "tags": ["生活", "诗歌"]\n}, {\n    "time": {\n        "day": "05",\n        "mon": "01",\n        "year": "2015"\n    },\n    "title": "就六条，不能再多了...",\n    "content": "1、想方设法去完成你一开始计划的一切。<br> 2、早点起床，听听轻音乐，看看书，如果不跑步的话。<br> 3、作为男人就不能粗心。<br> 4、整理自己日常用品，包括思想。<br> 5、完成一项任务时，可以看看电影，别看大陆片。<br>  6、别去台湾，也别去日本，最好任何地方也别去。<br> ",\n    "imgs": ["http://7xj0rt.com1.z0.glb.clouddn.com/article/circle-cross-2.png"],\n    "tags": ["生活", "闲聊"]\n}, {\n    "time": {\n        "day": "03",\n        "mon": "01",\n        "year": "2016"\n    },\n    "title": "你开心就好",\n    "content": "去一个地方理发，比较固定。 一般我会和理发师讨论过大概是个怎样的发型。 剪完头发，理发师问我觉得怎样，我带上眼镜看了一下， 沉默了一会儿对他说了一句：“你开心...就好”。",\n    "imgs": ["http://7xj0rt.com1.z0.glb.clouddn.com/article/lifa.jpg"],\n    "tags": ["生活", "理发"]\n}]\n'
}),
define("module/views/article", ["jquery", "underscore", "backbone", "text!module/templates/article.html", "common/common_function", "text!data/article.json"],
function(e, t, n, r, i, s) {
	var o = n.View.extend({
		el: "#page-content",
		template: t.template(r),
		events: {},
		initialize: function() {
			this.render()
		},
		render: function() {
			e(this.el).removeClass().addClass("page-article");
			var t = JSON.parse(s);
			e(this.el).html(this.template(t)),
			i.page_show(this.el, "#loading");
			var n = window.location.hash;
			console.log(n),
			e(".menu li").on("click",
			function() {
				window.location.hash = e(this).attr("data-url")
			})
		}
	});
	return o
}),
define("text!module/templates/subject.html", [],
function() {
	return '\r\r\r    <div id="menu" class="menu">\r        <div>\r            <div>\r                <p>\r                    <img src="http://7xj0rt.com1.z0.glb.clouddn.com/header.jpg">\r                </p>\r            </div>\r            <ul>\r                <li data-url="index">首页</li>\r                <li data-url="subject" class="select">细目</li>\r                <li data-url="article">文章</li>\r                <li data-url="image">图文</li>\r                <li data-url="book">读书</li>\r            </ul>\r        </div>\r    </div>\r\r\r    <div id="content" class="content" >\r\r        <header style="display:none">\r\r        </header>\r        <div class="logo">\r            <div>\r                <b>\r                    <img src="http://7xj0rt.com1.z0.glb.clouddn.com/b.png">\r                </b>\r            </div>\r        </div>\r        <div class="item-list">\r            <div class="item left">\r                <div class="item-header">\r                    <span></span>\r                    <div>\r                        <p class="title">《一个Javascript库，允许您创建一个类似通讯录首字母滑动的效果》 </p>\r                    </div>\r                    <span></span>\r                </div>\r                <div class="item-content">\r                    <div class="up-mark">\r                        <div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                        </div>\r                    </div>\r                    <!-- 内容 -->\r                    <div class="m-content">\r\r                        <div class="">\r                            <div class="text">\r                                <div>\r                                    <p class="title">一个Javascript库，允许您创建一个类似通讯录首字母滑动的效果</p>\r                                    <p class="tag"><span>#webapp</span><span>#iScroll</span><span>#jQuery</span></p>\r                                    <p class="info" style="text-align: center"> <br />\r                                    依赖 jQuery & iScroll <br />\r                                    灵感来自苹果手机通讯录 <br />\r                                    制作: 蓝杯子HTML5工作室</p>\r                                </div>\r                            </div>\r                            <div class="img">\r                                 <img src="http://7xj0rt.com1.z0.glb.clouddn.com/ximu/bkg_block2.png">\r                                 <div class="go-btn"  go_to="./subject/iScrollc/index.html">\r                                     来，啾一啾...\r                                 </div>\r                            </div>\r                        </div>  \r\r                    </div>\r                    <div class="down-mark">\r                        <div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                        </div>\r                    </div>\r                </div>\r            </div>\r\r            <div class="item right">\r                <div class="item-header">\r                    <span></span>\r                    <div>\r                        <p class="title">《一个叫LearnH5的webapp，能够让你轻快地得知HTML5的资讯》</p>\r                    </div>\r                    <span></span>\r                </div>\r                <div class="item-content">\r                    <div class="down-mark">\r                        <div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                        </div>\r                    </div>\r                    <div class="m-content">\r                          <div class="">\r                            <div class="text">\r                                <div>\r                                    <p class="title">一个叫LearnH5的webapp，能够让你轻快地得知HTML5的资讯</p>\r                                    <p class="tag"><span>#webapp</span><span>#iScroll</span></p>\r                                    <p class="info">发现, 分享 & 收集 <br />\r                                    引入了一种简化的瀑布流方式与您分享和交流。您将发现和收集更多的知识流;  <br />通过这个共享平台和最新的云同步个人和专业知识快息。\r\r                                    </p>\r                                </div>\r                            </div>\r                            <div class="img">\r                                 <img src="http://7xj0rt.com1.z0.glb.clouddn.com/ximu/bkg_block3.png">\r                                 <div class="go-btn" go_to="./subject/LearnH5/index.html">\r                                     来，啾一啾...\r                                 </div>\r                            </div>\r                        </div>  \r                    </div>\r                    <div class="up-mark">\r                        <div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                        </div>\r                    </div>\r                </div>\r            </div>\r            <div class="item left">\r                <div class="item-header">\r                    <span></span>\r                    <div>\r                        <p class="title">《基于iPad，以梦境般的梦想形式展示》</p>\r                    </div>\r                    <span></span>\r                </div>\r                <div class="item-content">\r                    <div class="up-mark">\r                        <div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                        </div>\r                    </div>\r                    <div class="m-content">\r                          <div class="">\r                            <div class="text">\r                                <div>\r                                    <p class="title">基于iPad，以梦境般的梦想形式展示。</p>\r                                    <p class="tag"><span>#iPad</span><span>#简约</span></p>\r                                    <p class="info">\r                                        我们为梦而来，但梦想永不落幕 <br />\r                                        这一切，只是因为余皓月对自己的绘画梦想忠贞不渝、对iPad手绘充满创作激情、对小动物充满爱心、对社会热点问题极其关注……\r                                    </p>\r                                </div>\r                            </div>\r                            <div class="img">\r                                 <img src="http://7xj0rt.com1.z0.glb.clouddn.com/ximu/bkg_block4.png">\r                                <div class="go-btn">\r                                     来，啾一啾...\r                                 </div>\r                            </div>\r                        </div>  \r                    </div>\r                    <div class="down-mark">\r                        <div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                        </div>\r                    </div>\r                </div>\r            </div>\r\r            <div class="item right">\r                <div class="item-header">\r                    <span></span>\r                    <div>\r                        <p class="title">《iimg-W》</p>\r                    </div>\r                    <span></span>\r                </div>\r                <div class="item-content">\r                    <div class="down-mark">\r                        <div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                        </div>\r                    </div>\r                    <div class="m-content">\r                          <div class="">\r                            <div class="text">\r                                <div>\r                                    <p class="title">iimg-W</p>\r                                    <p class="tag"><span>#JavaScript</span><span>#看图</span></p>\r                                    <p class="info">iimg-W是一款简洁清新的图片社交应用软件。\r它拥有充分而完美的图片展示效果，摆脱无用而过量的信息和文字，打造真正的美图社区。\r独家的【到此一摇】功能，只要开启GPS位置，上传美照，手机摇一摇，便可以发现更多到此一游的美图。点击任意图片，就可以结识图片的“主人”——世界再大，一张图片就能让彼此相遇。</p>\r                                </div>\r                            </div>\r                            <div class="img">\r                                 <img src="http://7xj0rt.com1.z0.glb.clouddn.com/ximu/bkg_block5.png"><div class="go-btn">\r                                     来，啾一啾...\r                                 </div>\r                            </div>\r                        </div>  \r                    </div>\r                    <div class="up-mark">\r                        <div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                        </div>\r                    </div>\r                </div>\r            </div>\r\r            <div class="item left">\r                <div class="item-header">\r                    <span></span>\r                    <div>\r                        <p class="title">《书流，shuliu.h》</p>\r                    </div>\r                    <span></span>\r                </div>\r                <div class="item-content">\r                    <div class="up-mark">\r                        <div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                        </div>\r                    </div>\r                    <div class="m-content">\r                          <div class="">\r                            <div class="text">\r                                <div>\r                                    <p class="title">书流，shuliu.h</p>\r                                    <p class="tag"><span>#web</span><span>#书流</span></p>\r                                    <p class="info">其实很简单，就是爱书的人把手中不看的书在一个平台上展示出来，这样有想看书的人，在平台上选中他想看的书，然后和发布者联系，完成交流。这样一来不但节省很多资源，还为爱书的人提供一个交流探讨的平台，因为买书去书店会花很多钱，再有时间久了买的书多了会占很多空间，特别对我这样在外漂泊的人，很不方便，特别是搬家时感受最深…</p>\r                                </div>\r                            </div>\r                            <div class="img">\r                                 <img src="http://7xj0rt.com1.z0.glb.clouddn.com/ximu/bkg_block6.png">\r                                <div class="go-btn">\r                                     来，啾一啾...\r                                 </div>\r                            </div>\r                        </div>  \r                    </div>\r                    <div class="down-mark">\r                        <div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                           <div><span></span></div>\r                        </div>\r                    </div>\r                </div>\r            </div>\r\r\r        </div>\r        <div class="add-item"></div>\r\r\r    </div>\r\r    <div class="footer"></div>\r'
}),
define("module/views/subject", ["underscore", "backbone", "text!module/templates/subject.html", "common/common_function"],
function(e, t, n, r) {
	var i = t.View.extend({
		el: "#page-content",
		template: e.template(n),
		events: {
			"click [go_to]": function(e) {
				window.location.href = $(e.currentTarget).attr("go_to")
			}
		},
		initialize: function() {
			this.render()
		},
		render: function() {
			$(this.el).removeClass().addClass("page-subject"),
			$(this.el).html(this.template),
			r.page_show(this.el, "#loading"),
			$(".menu li").on("click",
			function() {
				window.location.hash = $(this).attr("data-url")
			})
		}
	});
	return i
}),
define("text!module/templates/book.html", [],
function() {
	return '<div id="menu" class="menu">\r    <div>\r        <div>\r            <p>\r                <img src="http://7xj0rt.com1.z0.glb.clouddn.com/header.jpg">\r            </p>\r        </div>\r        <ul>\r            <li data-url="index">首页</li>\r            <li data-url="subject">细目</li>\r            <li data-url="article">文章</li>\r            <li data-url="image">图文</li>\r            <li data-url="book" class="select">读书</li>\r        </ul>\r    </div>\r</div>\r<div id="content">\r    <div class="book-box">\r        <!-- 进行时 -->\r        <div class="book-ing">\r            <div class="title">\r                最近在读书\r            </div>\r            <div class="list">\r                <%_.each(obj.book,function(e,i){%>\r                    <div>\r                        <b>\r                              <img src="<%=e.image%>">\r                          </b>\r                        <p class="name">\r                            <%=e.name%>\r                        </p>\r                        <p class="author">\r                            <%=e.author%>\r                        </p>\r                    </div>\r                    <%})%>\r             <!--            <div>\r                            <b>\r                              <img src="http://7xj0rt.com1.z0.glb.clouddn.com/book/feng.jpg">\r                          </b>\r                            <p class="name">追风筝的人</p>\r                            <p class="author">卡勒德·胡赛尼</p>\r                        </div>\r                        <div>\r                            <b>\r                              <img src="http://7xj0rt.com1.z0.glb.clouddn.com/book/zua.jpg">\r                          </b>\r                            <p class="name">解忧杂货店</p>\r                            <p class="author">【日】东野圭吾</p>\r                        </div>\r                        <div>\r                            <b>\r                              <img src="http://7xj0rt.com1.z0.glb.clouddn.com/book/she.jpg">\r                          </b>\r                            <p class="name">断离舍</p>\r                            <p class="author">【日】山下英子</p>\r                        </div>\r                        <div>\r                            <b>\r                              <img src="http://7xj0rt.com1.z0.glb.clouddn.com/book/pi.jpg">\r                          </b>\r                            <p class="name">皮囊</p>\r                            <p class="author">蔡崇达</p>\r                        </div>\r                        <div>\r                            <b>\r                              <img src="http://7xj0rt.com1.z0.glb.clouddn.com/book/425.jpg">\r                          </b>\r                            <p class="name">我是猫</p>\r                            <p class="author">【日】夏目漱石</p>\r                        </div>\r                        <div>\r                            <b>\r                              <img src="http://7xj0rt.com1.z0.glb.clouddn.com/book/book202.png">\r                          </b>\r                            <p class="name">蜗牛慢吞吞</p>\r                            <p class="author">周宗伟</p>\r                        </div>\r                        <div>\r                            <b>\r                              <img src="http://7xj0rt.com1.z0.glb.clouddn.com/book/129804big.jpg">\r                          </b>\r                            <p class="name">不裁</p>\r                            <p class="author">古十九</p>\r                        </div>\r                        <div>\r                            <b>\r                              <img src="http://7xj0rt.com1.z0.glb.clouddn.com/book/book5.jpg">\r                          </b>\r                            <p class="name">蚁呓</p>\r                            <p class="author">周宗伟</p>\r                        </div>\r                        <div>\r                            <b>\r                              <img src="http://7xj0rt.com1.z0.glb.clouddn.com/book/book06.jpg">\r                          </b>\r                            <p class="name">邮差总按两遍铃</p>\r                            <p class="author">詹姆斯·M·凯恩</p>\r                        </div>\r                        <div>\r                            <b>\r                              <img src="http://7xj0rt.com1.z0.glb.clouddn.com/book/book07.jpg">\r                          </b>\r                            <p class="name">远方的鼓声</p>\r                            <p class="author">【日】村上春树</p>\r                        </div> -->\r            </div>\r        </div>\r        <!-- 将来时 -->\r        <div class="book-shall" style="display:none">\r            <div class="title">\r                将来时\r            </div>\r            <div class="list">\r                \r                <div>\r                    <b>\r                              <img src="http://7xj0rt.com1.z0.glb.clouddn.com/book/she.jpg">\r                          </b>\r                    <p class="name">布拉格</p>\r                    <p class="author">保罗.科埃略</p>\r                </div>\r\r                <div>\r                    <b>\r                              <img src="http://7xj0rt.com1.z0.glb.clouddn.com/book/she.jpg">\r                          </b>\r                    <p class="name">布拉格</p>\r                    <p class="author">保罗.科埃略</p>\r                </div>\r                <div>\r                    <b>\r                              <img src="http://7xj0rt.com1.z0.glb.clouddn.com/book/she.jpg">\r                          </b>\r                    <p class="name">布拉格</p>\r                    <p class="author">保罗.科埃略</p>\r                </div>\r                <div>\r                    <b>\r                              <img src="http://7xj0rt.com1.z0.glb.clouddn.com/book/she.jpg">\r                          </b>\r                    <p class="name">布拉格</p>\r                    <p class="author">保罗.科埃略</p>\r                </div>\r            </div>\r        </div>\r        <!-- 电影 -->\r        <div class="movie">\r            <div class="movie-title">最近看的电影</div>\r            <div class="movie-list">\r            <%_.each(obj.movie,function(e,i){%>\r                <div>\r                    <b>\r                          <img src="<%=e.image%>">\r                        </b>\r                    <p class="name"><%=e.name%></p>\r                    <p class="info"><%=e.info%></p>\r                </div>\r                    <%})%>\r<!-- \r                <div>\r                    <b>\r                          <img src="http://7xj0rt.com1.z0.glb.clouddn.com/movie/p1173371709.jpg">\r                        </b>\r                    <p class="name">《太极旗飘扬》</p>\r                    <p class="info">影片以1950年爆发的朝鲜半岛战争为时代背景，讲述了一对被迫被推上战场的亲兄弟的悲情命运。</p>\r                </div>\r                <div>\r                    <b>\r                          <img src="http://7xj0rt.com1.z0.glb.clouddn.com/movie/9f510fb30f2442a753ab9419d343ad4bd01302e0.jpg">\r                        </b>\r                    <p class="name">《被嫌弃的松子的一生》</p>\r                    <p class="info">最微弱最无法温暖人的光亮就是那微微的火柴光亮吧；说来很讽刺，为爱而生，却一生得不到爱。就算有人为爱她毁了余生...</p>\r                </div>\r                <div>\r                    <b>\r                          <img src="http://7xj0rt.com1.z0.glb.clouddn.com/movie/p15453235.jpg">\r                        </b>\r                    <p class="name">《偷自行车的人》</p>\r                    <p class="info">二战过后，罗马同许多城市一样，充斥失业和贫困，人们常常为一个工作机会争得头破血流，电影通过第二次世界大战后...</p>\r                </div>\r                <div>\r                    <b>\r                          <img src="http://7xj0rt.com1.z0.glb.clouddn.com/movie/p1998028321.jpg">\r                        </b>\r                    <p class="name">《时空恋旅人》</p>\r                    <p class="info">该剧讲述了一个拥有穿越时间能力的男人的故事。Tim21岁了，他的老爸告诉他，他们家族的男人都有时光旅行的超能力，可以回到过去。</p>\r                </div>\r                <div>\r                    <b>\r                          <img src="http://7xj0rt.com1.z0.glb.clouddn.com/movie/p1309846754.jpg">\r                        </b>\r                    <p class="name">《美国丽人》</p>\r                    <p class="info">《美国丽人》是由山姆·曼德斯执导的，它以一个典型的美国中产阶级家庭为例，展示了隐藏在美国社会肌肤内的种种“癌症”。</p>\r                </div>\r                <div>\r                    <b>\r                          <img src="http://7xj0rt.com1.z0.glb.clouddn.com/movie/novie_rufuruzi.jpg">\r                        </b>\r                    <p class="name">《如父如子》</p>\r                    <p class="info">影片讲述了一个日本安逸的中产家庭突然得知他们6岁孩子出生时在医院被抱错而陷入家庭伦理困境的故事。</p>\r                </div>\r                <div>\r                    <b>\r                          <img src="http://7xj0rt.com1.z0.glb.clouddn.com/movie/movie_liewu.jpg">\r                        </b>\r                    <p class="name">《狩猎》</p>\r                    <p class="info">影片用一个关于绯闻、谎言、仇恨和怀疑的传闻毁掉一个男人生活的故事，讲述了谎言变成“事实”的过程，向我们揭示了众口铄金的的含义。</p>\r                </div>\r                <div>\r                    <b>\r                          <img src="http://7xj0rt.com1.z0.glb.clouddn.com/movie/movie_forpail.jpg">\r                        </b>\r                    <p class="name">《速度与激情7》</p>\r                    <p class="info">“为了保罗”——这似乎成了《速度与激情7》的唯一意义，但不论对于观众还是影片主创来说，和保罗说再见都不是容易的事。</p>\r                </div>\r                <div>\r                    <b>\r                          <img src="http://7xj0rt.com1.z0.glb.clouddn.com/movie/movie01.jpg">\r                        </b>\r                    <p class="name">《霍比特人：五军之战》</p>\r                    <p class="info">在上一部结尾处，比尔博一行人对巨龙史矛革声称将要重新收复自己的家园...</p>\r                </div>\r                <div>\r                    <b>\r                          <img src="http://7xj0rt.com1.z0.glb.clouddn.com/movie/1-150122223A8.jpg">\r                        </b>\r                    <p class="name">《智取威虎山》</p>\r                    <p class="info">改编自曲波小说《林海雪原》，讲述的是解放军一支骁勇善战的小分队与在东北山林盘踞多年的数股土匪斗志斗勇的故事。</p>\r                </div>\r                <div>\r                    <b>\r                          <img src="http://7xj0rt.com1.z0.glb.clouddn.com/movie/movie03.jpg">\r                        </b>\r                    <p class="name">《一步之遥》</p>\r                    <p class="info">影片讲述的是1920年的上海，花国大选如火如荼。操纵大选的几个海外回来的上海小开想借此大捞一把，还...</p>\r                </div>\r                <div>\r                    <b>\r                          <img src="http://7xj0rt.com1.z0.glb.clouddn.com/movie/movie04.jpg">\r                        </b>\r                    <p class="name">《寂静岭》</p>\r                    <p class="info">影片讲述一名普通的母亲发现自己的女儿患上了致命疾病，她完全无法接受这样残酷的事实，所以带着自己的女人踏入了...</p>\r                </div>\r                <div>\r                    <b>\r                          <img src="http://7xj0rt.com1.z0.glb.clouddn.com/movie/movie05.jpg">\r                        </b>\r                    <p class="name">《爆裂鼓手》</p>\r                    <p class="info">讲述一个热爱音乐的年青人努力地想要成为顶尖的爵士乐鼓手的故事。</p>\r                </div>\r                <div>\r                    <b>\r                          <img src="http://7xj0rt.com1.z0.glb.clouddn.com/movie/movie06.jpg">\r                        </b>\r                    <p class="name">《云中漫步》</p>\r                    <p class="info">二战结束后，思乡心切的大批美军士兵踏上旧金山港即投进久候的亲人的怀抱，但保罗•萨顿久等仍不见其妻子... </p>\r                </div> -->\r            </div>\r        </div>\r        <!-- 电视剧 -->\r        <div class="TV-drama">\r            <div class="TV-drama-title">最近看的电视剧</div>\r            <div class="TV-drama-list">\r                <div>\r                    <div class="info">\r                        <div>\r                            <h2>《权利的游戏》</h2>\r                            <i></i>\r                            <p>《权力的游戏》（Game of Thrones）改编自美国作家乔治·R·R·马丁的奇幻小说《冰与火之歌》系列，是美国HBO电视网制作推出的一部中世纪史诗奇幻题材的电视剧。</p>\r                        </div>\r                    </div>\r                    <div class="img">\r                        <div>\r                            <!-- <img src="http://7xj0rt.com1.z0.glb.clouddn.com/fff.png"> -->\r                            <p>第五季进行时</p>\r                            <i>共10集</i>\r                        </div>\r                        <div>\r                            <img src="http://7xj0rt.com1.z0.glb.clouddn.com/tv/fff.png">\r                        </div>\r                        <div>\r                            <img src="http://7xj0rt.com1.z0.glb.clouddn.com/tv/tv01.png">\r                        </div>\r                        <div>\r                            <img src="http://7xj0rt.com1.z0.glb.clouddn.com/tv/tv02.png">\r                        </div>\r                        <div>\r                            <img src="http://7xj0rt.com1.z0.glb.clouddn.com/tv/tv03.png">\r                        </div>\r                        <div>\r                            <img src="http://7xj0rt.com1.z0.glb.clouddn.com/tv/tv04.png">\r                        </div>\r                        <div>\r                            <img src="http://7xj0rt.com1.z0.glb.clouddn.com/tv/tv05.png">\r                        </div>\r                        <div>\r                            <img src="http://7xj0rt.com1.z0.glb.clouddn.com/tv/tv06.png">\r                        </div>\r                    </div>\r                </div>\r                <p></p>\r                <div>\r                    <div class="info the-vampire-diaries">\r                        <div>\r                            <h2>《吸血鬼日记》</h2>\r                            <i></i>\r                            <p>《吸血鬼日记》（The Vampire Diaries）由哥伦比亚及华纳兄弟联合电视网出品，由马科斯·西恩加执导，妮娜·杜波夫、保罗·韦斯利、伊恩·萨默海尔德等领衔主演的一部青春魔幻美国电视连续剧。电视剧由美国女作家L.J.史密斯的同名畅销系列小说《吸血鬼日记》改编而成。</p>\r                        </div>\r                    </div>\r                    <div class="img">\r                        <div>\r                            <!-- <img src="http://7xj0rt.com1.z0.glb.clouddn.com/fff.png"> -->\r                            <p>第六季进行时</p>\r                            <i>共22集</i>\r                        </div>\r                        <div>\r                            <img src="http://7xj0rt.com1.z0.glb.clouddn.com/tv/the-vampire1.png">\r                        </div>\r                        <div>\r                            <img src="http://7xj0rt.com1.z0.glb.clouddn.com/tv/the-vampire2.png">\r                        </div>\r                        <div>\r                            <img src="http://7xj0rt.com1.z0.glb.clouddn.com/tv/the-vampire3.png">\r                        </div>\r                        <div>\r                            <img src="http://7xj0rt.com1.z0.glb.clouddn.com/tv/the-vampire4.png">\r                        </div>\r                        <div>\r                            <img src="http://7xj0rt.com1.z0.glb.clouddn.com/tv/the-vampire5.png">\r                        </div>\r                        <div>\r                            <img src="http://7xj0rt.com1.z0.glb.clouddn.com/tv/the-vampire6.png">\r                        </div>\r                        <div>\r                            <img src="http://7xj0rt.com1.z0.glb.clouddn.com/tv/the-vampire7.png">\r                        </div>\r                    </div>\r                </div>\r            </div>\r        </div>\r        <!-- 电视剧 -->\r        <!--               <div class="TV-drama">\r                  <div class="TV-drama-title">以后必看的电视剧</div>\r                  <div class="TV-drama-list"></div>\r\r\r              </div> -->\r    </div>\r</div>\r'
}),
define("text!data/book.json", [],
function() {
	return '{\n    "book": [{\n        "name": "富兰克林自传",\n        "image": "http://ec4.images-amazon.com/images/I/512dV3pfSJL._SX325_BO1,204,203,200_.jpg",\n        "author": "本杰明·富兰克林"\n    },{\n        "name": "偷影子的人",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/book/ying.jpg",\n        "author": "马克·李维"\n    },\n    {\n        "name": "追风筝的人",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/book/feng.jpg",\n        "author": "卡勒德·胡赛尼"\n    }, {\n        "name": "解忧杂货店",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/book/zua.jpg",\n        "author": "【日】东野圭吾"\n    }, {\n        "name": "断离舍",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/book/she.jpg",\n        "author": "【日】山下英子"\n    }, {\n        "name": "皮囊",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/book/pi.jpg",\n        "author": "蔡崇达"\n    }, {\n        "name": "我是猫",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/book/425.jpg",\n        "author": "【日】夏目漱石"\n    }, {\n        "name": "蜗牛慢吞吞",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/book/book202.png",\n        "author": "周宗伟"\n    }, {\n        "name": "不裁",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/book/129804big.jpg",\n        "author": "古十九"\n    }, {\n        "name": "蚁呓",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/book/book5.jpg",\n        "author": "周宗伟"\n    }, {\n        "name": "邮差总按两遍铃",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/book/book06.jpg",\n        "author": "詹姆斯·M·凯恩"\n    }, {\n        "name": "远方的鼓声",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/book/book07.jpg",\n        "author": "【日】村上春树"\n    }],\n    "movie": [{\n        "name": "《恋恋笔记本》",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/movie/p2173731141.jpg",\n        "info": "讲述一对青梅竹马在二次世界大战后历劫重逢，这段刻骨铭心的故事由一名天天来探望住在疗养院病人的老先生笔记本中娓娓道出，随着故事水落石出..."\n    }, {\n        "name": "《太极旗飘扬》",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/movie/p1173371709.jpg",\n        "info": "影片以1950年爆发的朝鲜半岛战争为时代背景，讲述了一对被迫被推上战场的亲兄弟的悲情命运。"\n    }, {\n        "name": "《被嫌弃的松子的一生》",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/movie/9f510fb30f2442a753ab9419d343ad4bd01302e0.jpg",\n        "info": "最微弱最无法温暖人的光亮就是那微微的火柴光亮吧；说来很讽刺，为爱而生，却一生得不到爱。就算有人为爱她毁了余生..."\n    }, {\n        "name": "《偷自行车的人》",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/movie/p15453235.jpg",\n        "info": "二战过后，罗马同许多城市一样，充斥失业和贫困，人们常常为一个工作机会争得头破血流，电影通过第二次世界大战后..."\n    }, {\n        "name": "《时空恋旅人》",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/movie/p1998028321.jpg",\n        "info": "该剧讲述了一个拥有穿越时间能力的男人的故事。Tim21岁了，他的老爸告诉他，他们家族的男人都有时光旅行的超能力，可以回到过去。"\n    }, {\n        "name": "《美国丽人》",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/movie/p1309846754.jpg",\n        "info": "《美国丽人》是由山姆·曼德斯执导的，它以一个典型的美国中产阶级家庭为例，展示了隐藏在美国社会肌肤内的种种“癌症”。"\n    }, {\n        "name": "《如父如子》",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/movie/novie_rufuruzi.jpg",\n        "info": "影片讲述了一个日本安逸的中产家庭突然得知他们6岁孩子出生时在医院被抱错而陷入家庭伦理困境的故事。"\n    }, {\n        "name": "《狩猎》",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/movie/movie_liewu.jpg",\n        "info": "影片用一个关于绯闻、谎言、仇恨和怀疑的传闻毁掉一个男人生活的故事，讲述了谎言变成“事实”的过程，向我们揭示了众口铄金的的含义。"\n    }, {\n        "name": "《速度与激情7》",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/movie/movie_forpail.jpg",\n        "info": "“为了保罗”——这似乎成了《速度与激情7》的唯一意义，但不论对于观众还是影片主创来说，和保罗说再见都不是容易的事。"\n    }, {\n        "name": "《霍比特人：五军之战》",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/movie/movie01.jpg",\n        "info": "在上一部结尾处，比尔博一行人对巨龙史矛革声称将要重新收复自己的家园..."\n    }, {\n        "name": "《智取威虎山》",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/movie/1-150122223A8.jpg",\n        "info": "改编自曲波小说《林海雪原》，讲述的是解放军一支骁勇善战的小分队与在东北山林盘踞多年的数股土匪斗志斗勇的故事。"\n    }, {\n        "name": "《一步之遥》",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/movie/movie03.jpg",\n        "info": "影片讲述的是1920年的上海，花国大选如火如荼。操纵大选的几个海外回来的上海小开想借此大捞一把，还..."\n    }, {\n        "name": "《寂静岭》",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/movie/movie04.jpg",\n        "info": "影片讲述一名普通的母亲发现自己的女儿患上了致命疾病，她完全无法接受这样残酷的事实，所以带着自己的女人踏入了..."\n    }, {\n        "name": "《爆裂鼓手》",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/movie/movie05.jpg",\n        "info": "讲述一个热爱音乐的年青人努力地想要成为顶尖的爵士乐鼓手的故事。"\n    }, {\n        "name": "《云中漫步》",\n        "image": "http://7xj0rt.com1.z0.glb.clouddn.com/movie/movie06.jpg",\n        "info": "二战结束后，思乡心切的大批美军士兵踏上旧金山港即投进久候的亲人的怀抱，但保罗•萨顿久等仍不见其妻子... "\n    }],\n    "teleplay": [{\n\n    }]\n}\n'
}),
define("module/views/book", ["jquery", "underscore", "backbone", "text!module/templates/book.html", "common/common_function", "text!data/book.json"],
function(e, t, n, r, i, s) {
	var o = n.View.extend({
		el: "#page-content",
		template: t.template(r),
		events: {},
		initialize: function() {
			this.render()
		},
		render: function() {
			e(this.el).removeClass().addClass("page-book");
			var t = JSON.parse(s);
			console.log("_data"),
			console.log(t),
			e(this.el).html(this.template(t)),
			i.page_show(this.el, "#loading"),
			e(".menu li").on("click",
			function() {
				window.location.hash = e(this).attr("data-url")
			})
		}
	});
	return o
}),
define("module/routers/router", ["jquery", "backbone", "module/views/index", "module/views/image", "module/views/article", "module/views/subject", "module/views/book"],
function(e, t, n, r, i, s, o) {
	var u = t.Router.extend({
		routes: {
			"": "index",
			"article/page/:pageno": "articleRoute",
			"*page": "filterRoute"
		},
		index: function() {
			window.location.hash = "#index"
		},
		filterRoute: function(t) {
			console.log(t);
			var u = ["index", "image", "article", "subject", "book"];
			e.inArray(t, u) == -1 && (window.location.hash = "#index"),
			t == "index" && new n,
			t == "image" && new r,
			t == "article" && new i,
			t == "subject" && new s,
			t == "book" && new o
		},
		articleRoute: function(e) {
			console.log(e),
			isNaN(e) ? window.location.hash = "#article": new i
		}
	});
	return u
}),
require.config({
	paths: {
		jquery: "./lib/jquery",
		underscore: "./lib/underscore",
		backbone: "./lib/backbone",
		backboneLocalstorage: "./lib/backbone.localStorage",
		text: "./lib/text"
	},
	shim: {
		underscore: {
			exports: "_"
		},
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		},
		backboneLocalstorage: {
			deps: ["backbone"],
			exports: "Store"
		}
	}
}),
require(["backbone", "module/routers/router", "common/common_function"],
function(e, t, n) {
	new t,
	e.history.start()
}),
define("main",
function() {});