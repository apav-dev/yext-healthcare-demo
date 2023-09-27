import { z } from "zod";

export const FileSchema = z.object({
  size: z.string().optional(),
  name: z.string().optional(),
  url: z.string().url().optional(),
  mimeType: z.string().optional(),
});

export const ContentSchema = z.object({
  id: z.string(),
  type: z.literal("ce_document"),
  $key: z.object({
    locale: z.string(),
    primary_key: z.string(),
  }),
  name: z.string(),
  uid: z.string(),
  c_file: FileSchema.optional(),
});

export type File = z.infer<typeof FileSchema>;
export type Content = z.infer<typeof ContentSchema>;
