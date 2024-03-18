import {HTTPClient} from "../../apps/services/httpClient";


export class AuthProvider  {
    public static async logIn(login: string, password: string): Promise<any> {
        const params = {login, password};
        return await HTTPClient.getJson('/Authenticate', params);
    }
}