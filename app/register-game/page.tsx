"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Textarea } from "@/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import {
  Save,
  X,
  Upload,
  FileText,
  Image as ImageIcon,
  File,
  Trash2,
} from "lucide-react";
import { Separator } from "@/ui/separator";
import { Badge } from "@/ui/badge";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import {
  gameSchema,
  type UploadedFile,
} from "../../schemas/gameSchema";
import { IGame } from "../../interfaces/IGame";
import { GameStatusEnum } from "@/enums/GameStatusEnum";
import { registerGame } from "@/services/RegisterGameService";
import { useParams } from "next/navigation";
import { showErrorToast } from "@/utils/toast";


export default function GameRegistration(

) {

  const form = useForm<IGame>({
    resolver: zodResolver(gameSchema),
  });

  const gameId = useParams<{ gameId: string }>()

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "files") {
        // Atualizar estado local se necessário
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "egdd" | "draft" | "screenshot",
  ) => {
    const files = event.target.files;
    if (!files) return;

    const newFiles: UploadedFile[] = Array.from(files).map((file) => ({
      id: Date.now().toString() + Math.random(),
      name: file.name,
      size: file.size,
      type: type,
      uploadDate: new Date().toISOString(),
    }));

    const currentFiles = form.getValues("files") || [];
    form.setValue("files", [...currentFiles, ...newFiles]);
  };

  const handleDeleteFile = (fileId: string) => {
    const currentFiles = form.getValues("files") || [];
    form.setValue(
      "files",
      currentFiles.filter((f) => f.id !== fileId),
    );
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case "egdd":
        return <FileText className="w-5 h-5 text-primary" />;
      case "draft":
        return <File className="w-5 h-5 text-accent" />;
      case "screenshot":
        return <ImageIcon className="w-5 h-5 text-green-600" />;
      default:
        return <File className="w-5 h-5" />;
    }
  };

  const getFileTypeLabel = (type: string) => {
    switch (type) {
      case "egdd":
        return "EGDD";
      case "draft":
        return "Rascunho";
      case "screenshot":
        return "Tela";
      default:
        return "Arquivo";
    }
  };

  const handleSubmit = async (game: IGame) => {
    try {
      await registerGame(game);
    } catch (error) {
      showErrorToast("Erro ao cadastrar jogo. Por favor, tente novamente.");
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading">
              {gameId ? "Editar Jogo" : "Cadastrar Novo Jogo"}
            </h1>
            <p className="text-muted-foreground mt-1">
              {gameId
                ? "Atualize as informações e documentos do seu jogo educacional"
                : "Defina a estrutura do seu jogo educacional e objetivos de aprendizagem"}
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => onNavigate("dashboard")}
            className="rounded-xl"
          >
            <X className="mr-2 w-4 h-4" />
            Cancelar
          </Button>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            {/* Main Card with all fields */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>
                  {gameId ? "Editar Informações" : "Informações do Jogo"}
                </CardTitle>
                <CardDescription>
                  {gameId
                    ? "Atualize os detalhes do seu jogo educacional"
                    : "Preencha os detalhes essenciais sobre seu jogo educacional"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Nome do Jogo */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome do jogo *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite o nome do jogo"
                          className="rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Separator />

                {/* Público-alvo */}
                <FormField
                  control={form.control}
                  name="targetAudience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Público-alvo</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="ex: Estudantes do ensino fundamental (6-10 anos)"
                          className="rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Separator />

                {/* Plataforma */}
                <FormField
                  control={form.control}
                  name="platform"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Plataforma</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="ex: Web, Mobile (iOS/Android)"
                          className="rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Separator />

                {/* Gênero do Jogo */}
                <FormField
                  control={form.control}
                  name="genre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gênero do Jogo</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Selecione o gênero" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Quebra-cabeça Educacional">
                            Quebra-cabeça Educacional
                          </SelectItem>
                          <SelectItem value="Aventura">Aventura</SelectItem>
                          <SelectItem value="Simulação">Simulação</SelectItem>
                          <SelectItem value="Estratégia">Estratégia</SelectItem>
                          <SelectItem value="Quiz">Quiz</SelectItem>
                          <SelectItem value="RPG Educacional">
                            RPG Educacional
                          </SelectItem>
                          <SelectItem value="Ação">Ação</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Separator />

                {/* História */}
                <FormField
                  control={form.control}
                  name="story"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>História</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Descreva a história e o contexto narrativo do jogo"
                          className="rounded-xl min-h-25"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Separator />

                {/* Gameplay */}
                <FormField
                  control={form.control}
                  name="gameplay"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gameplay</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Descreva como o jogo é jogado e suas mecânicas principais"
                          className="rounded-xl min-h-25"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Separator />

                {/* Fluxo do jogo */}
                <FormField
                  control={form.control}
                  name="gameFlow"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fluxo do jogo</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Descreva o fluxo e a progressão do jogo"
                          className="rounded-xl min-h-20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Separator />

                {/* Mecânica de aprendizagem */}
                <FormField
                  control={form.control}
                  name="learningMechanics"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mecânica de aprendizagem</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Descreva as mecânicas pedagógicas utilizadas"
                          className="rounded-xl min-h-20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Separator />

                {/* Objetivos de aprendizagem */}
                <FormField
                  control={form.control}
                  name="learningObjectives"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Objetivos de aprendizagem</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Quais são os objetivos de aprendizagem do jogo?"
                          className="rounded-xl min-h-20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Separator />

                {/* Componente Curricular */}
                <FormField
                  control={form.control}
                  name="bnccSkills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Componente Curricular (opcional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ex: Habilidades da BNCC, Competências dos PCNs, ou outros frameworks curriculares"
                          className="rounded-xl min-h-25"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Pode incluir códigos e descrições de habilidades da
                        BNCC, competências dos PCNs, entre outros componentes
                        curriculares.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Separator />

                {/* Status do Projeto */}
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status do Projeto *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Selecione o status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="development">
                            Em Desenvolvimento
                          </SelectItem>
                          <SelectItem value="testing">Em Teste</SelectItem>
                          <SelectItem value="completed">Concluído</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* File Upload Section */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Arquivos do Jogo (Opcional)</CardTitle>
                <CardDescription>
                  Anexe documentos de design, rascunhos e capturas de tela do
                  seu jogo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* EGDD Upload */}
                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    EGDD (Educational Game Design Document)
                  </Label>
                  <div className="relative">
                    <Input
                      id="egddUpload"
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={(e) => handleFileUpload(e, "egdd")}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full rounded-xl h-24 border-2 border-dashed border-primary/30 hover:border-primary/50 hover:bg-primary/5"
                      onClick={() =>
                        document.getElementById("egddUpload")?.click()
                      }
                    >
                      <div className="flex flex-col items-center gap-2">
                        <Upload className="w-6 h-6 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          Clique para adicionar EGDD
                        </span>
                      </div>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Formatos aceitos: PDF, DOC, DOCX, TXT
                  </p>
                </div>

                <Separator />

                {/* Drafts Upload */}
                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <File className="w-4 h-4 text-accent" />
                    Rascunhos e Documentos
                  </Label>
                  <div className="relative">
                    <Input
                      id="draftUpload"
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.txt,.xls,.xlsx"
                      onChange={(e) => handleFileUpload(e, "draft")}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full rounded-xl h-24 border-2 border-dashed border-accent/30 hover:border-accent/50 hover:bg-accent/5"
                      onClick={() =>
                        document.getElementById("draftUpload")?.click()
                      }
                    >
                      <div className="flex flex-col items-center gap-2">
                        <Upload className="w-6 h-6 text-accent" />
                        <span className="text-sm text-muted-foreground">
                          Clique para adicionar rascunhos
                        </span>
                      </div>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Formatos aceitos: PDF, DOC, DOCX, TXT, XLS, XLSX
                  </p>
                </div>

                <Separator />

                {/* Screenshots Upload */}
                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-green-600" />
                    Telas e Capturas de Tela
                  </Label>
                  <div className="relative">
                    <Input
                      id="screenshotUpload"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, "screenshot")}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full rounded-xl h-24 border-2 border-dashed border-green-600/30 hover:border-green-600/50 hover:bg-green-50 dark:hover:bg-green-950/20"
                      onClick={() =>
                        document.getElementById("screenshotUpload")?.click()
                      }
                    >
                      <div className="flex flex-col items-center gap-2">
                        <Upload className="w-6 h-6 text-green-600" />
                        <span className="text-sm text-muted-foreground">
                          Clique para adicionar imagens
                        </span>
                      </div>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Formatos aceitos: PNG, JPG, JPEG, GIF, SVG
                  </p>
                </div>

                {/* Uploaded Files List */}
                {(form.watch("files")?.length ?? 0) > 0 && (
                  <>
                    <Separator />
                    <div className="space-y-3">
                      <Label>
                        Arquivos Anexados ({form.watch("files")?.length ?? 0})
                      </Label>
                      <div className="space-y-2 max-h-75 overflow-y-auto">
                        {(form.watch("files") || []).map((file) => (
                          <div
                            key={file.id}
                            className="flex items-center justify-between p-3 bg-muted/30 rounded-xl border hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              {getFileIcon(file.type)}
                              <div className="flex-1 min-w-0">
                                <p className="text-sm truncate">{file.name}</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge
                                    variant="outline"
                                    className="text-xs rounded-full"
                                  >
                                    {getFileTypeLabel(file.type)}
                                  </Badge>
                                  <span className="text-xs text-muted-foreground">
                                    {formatFileSize(file.size)}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDeleteFile(file.id)}
                              className="rounded-lg text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onNavigate("dashboard")}
                className="rounded-xl"
              >
                Cancelar
              </Button>
              <Button type="submit" className="rounded-xl">
                <Save className="mr-2 w-4 h-4" />
                {gameId ? "Atualizar Jogo" : "Salvar Jogo"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
