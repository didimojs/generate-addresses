interface IResponse {
  status: 200 | 400;
  message: any;
}

interface IWallet {
  seed: string;
  private: string;
  address: string;
}

class Response implements IResponse {
  status: 200 | 400;
  message: any;

  constructor(_status: 200 | 400, _messsage: any) {
    this.status = _status;
    this.message = _messsage;
  }
}

class ResponseWallet implements IResponse {
  status: 200 | 400;
  message: IWallet;

  constructor(_status: 200 | 400, _messsage: IWallet) {
    this.status = _status;
    this.message = _messsage;
  }
}

export { IResponse, Response, ResponseWallet };
