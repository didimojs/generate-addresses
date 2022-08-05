import { db } from "../database/config";
import { Response, IResponse } from "../domain/protocol";

async function put(key: string, value: string): Promise<IResponse> {
  try {
    await db.put(key, value);
    return new Response(200, "");
  } catch (error) {
    return new Response(400, JSON.stringify(error));
  }
}

async function get(key: string): Promise<IResponse> {
  try {
    const value = await db.get(key);
    return new Response(200, value);
  } catch (error) {
    return new Response(400, JSON.stringify(error));
  }
}

export { get, put };
