import * as z from "zod";

export const uploadedFileSchema = z.object({
  id: z.string(),
  name: z.string(),
  size: z.number(),
  type: z.enum(["egdd", "draft", "screenshot"]),
  uploadDate: z.string(),
});

export const gameFormSchema = z.object({
  name: z.string().trim().min(1, "Nome do jogo é obrigatório"),
  targetAudience: z
    .string()
    .trim()
    .min(1, "Público-alvo é obrigatório"),
  platformId: z.string().optional(),
  genre: z.string().trim().min(1, "Gênero do jogo é obrigatório"),
  story: z.string().trim().min(1, "História é obrigatória"),
  gameplay: z.string().trim().min(1, "Gameplay é obrigatório"),
  gameFlow: z.string().trim().min(1, "Fluxo do jogo é obrigatório"),
  learningMechanics: z
    .string()
    .trim()
    .min(1, "Mecânica de aprendizagem é obrigatória"),
  learningObjectives: z
    .string()
    .trim()
    .min(1, "Objetivos de aprendizagem são obrigatórios"),
  bnccSkills: z.string().optional(),
  status: z.enum(["development", "testing", "completed"]),
  files: z.array(uploadedFileSchema).optional(),
});

export type UploadedFile = z.infer<typeof uploadedFileSchema>;
export type GameFormValues = z.infer<typeof gameFormSchema>;
