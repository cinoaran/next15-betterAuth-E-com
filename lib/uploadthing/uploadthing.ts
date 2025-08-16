import {generateReactHelpers} from "@uploadthing/react";

import type {OurFileRouter} from "@/lib/uploadthing/uploadthing.config";

export const {useUploadThing, uploadFiles} =
  generateReactHelpers<OurFileRouter>();
