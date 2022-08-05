import { Level } from "level";

export const db = new Level("walletHD", {
  valueEncoding: "json",
  keyEncoding: "utf8",
});
