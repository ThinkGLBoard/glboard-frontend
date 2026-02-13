import { GameStatusEnum } from "@/enums/GameStatusEnum";
import * as z from "zod";

export const uploadedFileSchema = z.object({
  id: z.string(),
  name: z.string(),
  size: z.number(),
  type: z.enum(["egdd", "draft", "screenshot"]),
  uploadDate: z.string(),
});

export const gameSchema = z.object({
  id: z.uuid().optional(),
  name: z.string("Nome do jogo é obrigatório").min(1, "Nome do jogo é obrigatório"),
  targetAudience: z.string().optional(),
  platformIds: z.array(z.uuid()),
  genre: z.string().optional(),
  story: z.string().optional(),
  gameplay: z.string().optional(),
  gameFlow: z.string().optional(),
  learningMechanics: z.string().optional(),
  learningObjectives: z.string().optional(),
  curricularComponent: z.string().optional(),
  status: z.enum(GameStatusEnum),
});

export type UploadedFile = z.infer<typeof uploadedFileSchema>;
