import { IResponse } from "../domain/protocol";
declare function put(key: string, value: string): Promise<IResponse>;
declare function get(key: string): Promise<IResponse>;
export { get, put };
