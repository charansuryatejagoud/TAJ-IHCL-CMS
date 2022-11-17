
import sanityClient from "part:@sanity/base/client";
// import { supportedDocumentFormats } from "../Homepage/Constants";
export const client = sanityClient.withConfig({ apiVersion: "v2021-10-21" });



// export const fileValidationRule = (Rule) =>

//   Rule.required().custom((fields) => {

//     let ext;

//     if (fields?._upload) {

//       const nameChunks = fields?._upload?.file?.name?.split(".") || [];

//       ext = nameChunks[nameChunks.length - 1];

//     }

//     if (fields?.asset) {

//       const nameChunks = fields?.asset?._ref?.split("-") || [];

//       ext = nameChunks[nameChunks.length - 1];

//     }

//     if (!ext || !supportedDocumentFormats.includes(ext?.toLowerCase()))

//       return `${

//         ext || "File"

//       } is not supported. Only supported file types are ${supportedDocumentFormats.join(

//         ", ",

//       )}`;

//     return true;

//   });

