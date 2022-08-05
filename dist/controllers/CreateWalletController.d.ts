import { Request, Response } from "express";
declare const ControllerCreateWallet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const ControllerGetWallet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { ControllerCreateWallet, ControllerGetWallet };
