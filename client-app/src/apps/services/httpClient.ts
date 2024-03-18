import {objectToFormData} from "./formDataUtils";

export class HTTPClient {
    private static base_url: string = 'http://localhost:5087';
    public static async getJson<T = {} | any>(url: string, data?: any, host: string = ''): Promise<T> {

        let fullUrl = `${this.base_url}${url}${HTTPClient.toQueryString(data)}`;

        const headers = HTTPClient.getHeaders();
        headers.append('X-Requested-With', 'XMLHttpRequest');
        const response = await HTTPClient.httpHandler(await fetch(fullUrl, { method: 'GET', headers: headers }));
        return response.json();
    }

    public static async postJson<T = {} | any>(url: string, data: any, host: string = ''): Promise<T> {
        return HTTPClient.postFormData(url, objectToFormData(data), host);
    }

    public static async postFormData(url: string, data: FormData, host: string = ''){
        let fullUrl = `${host}${url}`;

        const headers = new Headers({
            'Enctype': 'multipart/form-data'
        });

        const response = await fetch(fullUrl, {
            method: 'POST',
            headers: headers,
            credentials: 'same-origin',
            body: data
        });

        return response.json();
    }

    public static getAsync(){

    }

    public static postAsync(){

    }

    public static getHeaders(): Headers {
        return new Headers();
    }

    private static toQueryString(obj: any) {
        return obj
            ? `?${Object.keys(obj)
                .map(k => {

                    if (Array.isArray(obj[k])){
                        return (obj[k] as any[])
                            .map(val => `${encodeURIComponent(k)}=${encodeURIComponent(val)}`)
                            .join('&');
                    }

                    if(obj[k] instanceof Date) {
                        let date = new Date(obj[k].getTime()).toISOString();
                        return `${encodeURIComponent(k)}=${encodeURIComponent(date)}`;
                    }

                    return `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`;
                }).join('&')}`
            : '';
    }

    private static httpHandler(response: Response): Promise<Response> {

        switch (response.status) {
            case 401:
                window.location.href = '/';
                return Promise.reject(new Error('Unauthorized'));
            case 403:
                return Promise.reject(new Error('Forbidden'));
            case 404:
                window.location.href = '/';
                return Promise.reject(new Error('Not Found'));
            case 500:
                return Promise.reject(new Error('Server Error'));
        }

        if (response.status !== 200) {
            return Promise.reject(new Error(`${response.status} - unknown status code`));
        }

        return Promise.resolve(response);
    }
}