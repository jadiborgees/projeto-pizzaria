import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = 'https://projeto-pizzaria-production.up.railway.app/produtos';

  constructor(private http: HttpClient) {}

  listarProdutos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}