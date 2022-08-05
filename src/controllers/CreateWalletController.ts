// libs
import { Request, Response } from "express";

// components
import { put, get } from "../database";
import { createWallet } from "../main";

const ControllerCreateWallet = async (req: Request, res: Response) => {
  const wallet = await createWallet();
  await put(wallet.message.private, JSON.stringify(wallet));
  return res.status(200).send(wallet);
};

const ControllerGetWallet = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    let result = await get(body.private);
    let wallet = JSON.parse(result?.message);
    return res.status(result.status).send(wallet);
  } catch (error) {
    return res.status(error.status).send(error);
  }
};

export { ControllerCreateWallet, ControllerGetWallet };
