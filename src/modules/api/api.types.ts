

export interface providerApiType {
    providerId: string,
    name: string,
    description: string,
    baseUrl: string,
    endPoint: string,
    method: string,
    price: string,
    rateLimit: string
}

export interface updateApiType {
    apiId: string,
    providerId: string,
    status: string,
    isPublic: boolean
}