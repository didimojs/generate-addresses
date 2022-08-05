interface IResponse {
    status: 200 | 400;
    message: any;
}
interface IWallet {
    seed: string;
    private: string;
    address: string;
}
declare class Response implements IResponse {
    status: 200 | 400;
    message: any;
    constructor(_status: 200 | 400, _messsage: any);
}
declare class ResponseWallet implements IResponse {
    status: 200 | 400;
    message: IWallet;
    constructor(_status: 200 | 400, _messsage: IWallet);
}
export { IResponse, Response, ResponseWallet };
