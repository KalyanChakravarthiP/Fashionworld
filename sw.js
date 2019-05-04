this.addEventListener('install',event=>{
	event.waitUntil(caches.open('version1')
		.then(cache=>{
		return cache.addAll[];
	})
	);
});

this.addEventListener('fetch',event=>{
	event.respondWith(
		caches.match(event.request)
		.then(resp=>{
			return resp || fetch(event.request)
			.then(response=>{
				return caches.open('v1')
				.then(cache=>{
					cache.put(event.request, response.clone());
					return response;
				});
			});
		})
		);
});