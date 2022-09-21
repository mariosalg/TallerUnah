export namespace ShippingModels {
    export interface Shipping{
        type: string;
        price: number;
    }

    export interface DatosEnvio{
        name: string;
        address: string;
    }
}