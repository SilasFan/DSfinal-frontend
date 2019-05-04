const remoteAddress: string = 'http://localhost:4000';

export default function(queryPayloadObject: any) {
    return fetch(remoteAddress + '/graphql/', {
        method: 'POST',
        body: JSON.stringify({
            variables: queryPayloadObject.variables,
            query: queryPayloadObject.query,
        }),
        headers: {
            'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + queryPayloadObject.auth || 'not-set',
        },
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('--Network Error--');
            }
        })
        .then((json) => {
            // dig into two layer
            // tslint:disable-next-line:forin
            for (const data in json) {
                // tslint:disable-next-line:forin
                for (const f in json[data]) {
                    return json[data][f];
                }
            }
        });
}
