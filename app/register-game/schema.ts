import * as z from "zod";

export const uploadedFileSchema = z.object({
  id: z.string(),
  name: z.string(),
  size: z.number(),
  type: z.enum(["egdd", "draft", "screenshot"]),
  uploadDate: z.string(),
});

export const gameFormSchema = z.object({
  name: z.string().min(1, "Nome do jogo é obrigatório"),
  targetAudience: z.string().optional(),
  platform: z.string().optional(),
  genre: z.string().optional(),
  story: z.string().optional(),
  gameplay: z.string().optional(),
  gameFlow: z.string().optional(),
  learningMechanics: z.string().optional(),
  learningObjectives: z.string().optional(),
  bnccSkills: z.string().optional(),
  status: z.enum(["development", "testing", "completed"]),
  files: z.array(uploadedFileSchema).optional().default([]),
});

export type UploadedFile = z.infer<typeof uploadedFileSchema>;
export type GameFormValues = z.infer<typeof gameFormSchema>;
