

export interface providerApi {
    providerId: string,
    name: string,
    description: string,
    baseUrl: string,
    endPoint: string,
    method: string,
    price: string,
    rateLimit: string
}

export interface updateApi {
    apiId: string,
    providerId: string,
    status: string,
    isPublic: boolean
}