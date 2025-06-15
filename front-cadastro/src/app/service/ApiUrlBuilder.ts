import { environment } from "../../../environments/environment"; 

export class ApiUrlBuilder {
  static build(service: string): string {
    if (!environment.sufixoGateway) {
      throw new Error("sufixoGateway não definido no environment!");
    }

    const url = `${environment.apiUrl}/api-${service}-${environment.sufixoGateway}`;
    console.log('[ApiUrlBuilder] URL gerada:', url);
    return url;
  }
}
