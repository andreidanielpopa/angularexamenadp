import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServiceCubos {
    public token: string;

    constructor(private _http: HttpClient) {
        this.token = "";
    }

    getToken(email: string, password: string): Observable<any> {
        let json = { email, password };
        let request = 'api/Manage/Login';
        let url = environment.urlApiCubo + request;

        let header = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(url, json, { headers: header });
    }

    getCubos(): Observable<any> {
        let request = 'api/Cubos';
        let url = environment.urlApiCubo + request;

        return this._http.get(url);
    }

    findCubo(id: number): Observable<any> {
        let request = 'api/Cubos/' + id;
        let url = environment.urlApiCubo + request;

        return this._http.get(url);
    }

    findCuboComentarios(id: number): Observable<any> {
        let request = 'api/ComentariosCubo/GetComentariosCubo/' + id;
        let url = environment.urlApiCubo + request;

        return this._http.get(url);
    }

    getMarcasCubos(): Observable<any> {
        let request = 'api/Cubos/Marcas';
        let url = environment.urlApiCubo + request;

        return this._http.get(url);
    }

    findCubosByMarca(marca: string): Observable<any> {
        let request = 'api/Cubos/CubosMarca/' + marca;
        let url = environment.urlApiCubo + request;

        return this._http.get(url);
    }

    getPerfilUserToken(): Observable<any> {
        let request = 'api/Manage/PerfilUsuario';
        let url = environment.urlApiCubo + request;

        let header = new HttpHeaders()
            .set('Authorization', 'Bearer ' + this.token)
            .set('Content-Type', 'application/json');
        return this._http.get(url, { headers: header });
    }

    findComprasUser(): Observable<any> {
        let request = 'api/Compra/ComprasUsuario';
        let url = environment.urlApiCubo + request;

        let header = new HttpHeaders()
            .set('Authorization', 'Bearer ' + this.token)
            .set('Content-Type', 'application/json');
        return this._http.get(url, { headers: header });
    }

    comprarCubo(id: number): Observable<any> {
        let request = 'api/Compra/InsertarPedido/' + id;
        let url = environment.urlApiCubo + request;

        let header = new HttpHeaders()
            .set('Authorization', 'Bearer ' + this.token)
            .set('Content-Type', 'application/json');
        return this._http.post(url, '', { headers: header });
    }
}
