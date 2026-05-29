import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GenerateVariantsRequest, GenerateVariantsResponse } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/products`;

  generateVariants(payload: GenerateVariantsRequest): Observable<GenerateVariantsResponse> {
    return this.http.post<GenerateVariantsResponse>(`${this.baseUrl}/generate-variants`, payload);
  }

  deleteImage(publicId: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/image/${encodeURIComponent(publicId)}`);
  }
}
