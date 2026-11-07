function setHeaderValue(headers, key, value) {
    headers[key.toLowerCase()] !== undefined ? (headers[key.toLowerCase()] = value) : (headers[key] = value);
}

if (typeof $request === "undefined" || !$request || !$request.headers) {
    $done({});
} else {
    const headers = $request.headers;
    const allheaders = [
        "x-revenuecat-etag",
        "if-none-match",
        "if-modified-since",
        "x-goog-if-none-match"
    ];

    for (let key in headers) {
        if (allheaders.includes(key.toLowerCase())) {
            delete headers[key];
        }
    }

    $done({headers});
}