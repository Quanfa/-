! function() {
	if(void 0 === window.changyan && void 0 === window.cyan) {
		var n = function() {
				void 0 === window.changyan && (window.changyan = {}, window.changyan.api = {}, window.changyan.api.config = function(n) {
					window.changyan.api.tmpIsvPageConfig = n
				}, window.changyan.api.ready = function(n) {
					window.changyan.api.tmpHandles = window.changyan.api.tmpHandles || [], window.changyan.api.tmpHandles.push(n)
				})
			},
			a = function() {
				window.cyan || (window.cyan = {}, window.cyan.api = {}, window.cyan.api.ready = function(n) {
					window.cyan.api.tmpHandles = window.cyan.api.tmpHandles || [], window.cyan.api.tmpHandles.push(n)
				})
			},
			t = function() {
				var n = function(n, a) {
						var t = document.getElementsByTagName("head")[0] || document.head || document.documentElement,
							o = document.createElement("script");
						o.setAttribute("type", "text/javascript"), o.setAttribute("charset", "UTF-8"), o.setAttribute("src", n), "function" == typeof a && (window.attachEvent ? o.onreadystatechange = function() {
							var n = o.readyState;
							("loaded" === n || "complete" === n) && (o.onreadystatechange = null, a())
						} : o.onload = a), t.appendChild(o)
					},
					a = +new Date + window.Math.random().toFixed(16),
					t = "https:" == window.document.location.protocol ? "https://" : "http://",
					o = t + "changyan.sohu.com/upload/version-v3.js?" + a;
				n(o)
			};
		n(), a(), t()
	}
}();