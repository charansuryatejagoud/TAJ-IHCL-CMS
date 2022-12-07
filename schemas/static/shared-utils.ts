
import sanityClient from "part:@sanity/base/client";
// import { supportedDocumentFormats } from "../Homepage/Constants";
export const client = sanityClient.withConfig({ apiVersion: "v2021-10-21" });
