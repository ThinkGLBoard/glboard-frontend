"use client";
import { gameSchema } from "@/schemas/gameSchema";
import z from "zod";

export interface IGame extends z.infer<typeof gameSchema> {}
