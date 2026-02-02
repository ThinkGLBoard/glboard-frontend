"use client";

import { useState } from "react";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Textarea } from "@/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/select";
import { Save, X, Upload, FileText, Image as ImageIcon, File, Trash2 } from "lucide-react";
import { Separator } from "@/ui/separator";
import { Badge } from "@/ui/badge";

interface Game {
  id: string;
  name: string;
  status: 'development' | 'testing' | 'completed';
  targetAudience?: string;
  platform?: string;
  genre?: string;
  story?: string;
  gameplay?: string;
  gameFlow?: string;
  learningMechanics?: string;
  learningObjectives?: string;
  bnccSkills?: string;
  createdDate?: string;
  phases?: number;
  files?: UploadedFile[];
}

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: 'egdd' | 'draft' | 'screenshot';
  uploadDate: string;
}

interface GameRegistrationProps {
  onNavigate: (page: string) => void;
  onSaveGame: (gameData: any) => void;
  gameId?: string;
  games?: Game[];
}

export default function GameRegistration({ onNavigate, onSaveGame, gameId, games }: GameRegistrationProps) {
  const currentGame = games?.find(g => g.id === gameId);

  const [formData, setFormData] = useState({
    name: currentGame?.name || "",
    targetAudience: currentGame?.targetAudience || "",
    platform: currentGame?.platform || "",
    genre: currentGame?.genre || "",
    story: currentGame?.story || "",
    gameplay: currentGame?.gameplay || "",
    gameFlow: currentGame?.gameFlow || "",
    learningMechanics: currentGame?.learningMechanics || "",
    learningObjectives: currentGame?.learningObjectives || "",
    bnccSkills: currentGame?.bnccSkills || "",
    status: currentGame?.status || "development",
  });

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>(currentGame?.files || []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'egdd' | 'draft' | 'screenshot') => {
    const files = event.target.files;
    if (!files) return;

    const newFiles: UploadedFile[] = Array.from(files).map(file => ({
      id: Date.now().toString() + Math.random(),
      name: file.name,
      size: file.size,
      type: type,
      uploadDate: new Date().toISOString()
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const handleDeleteFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'egdd': return <FileText className="w-5 h-5 text-primary" />;
      case 'draft': return <File className="w-5 h-5 text-accent" />;
      case 'screenshot': return <ImageIcon className="w-5 h-5 text-green-600" />;
      default: return <File className="w-5 h-5" />;
    }
  };

  const getFileTypeLabel = (type: string) => {
    switch (type) {
      case 'egdd': return 'EGDD';
      case 'draft': return 'Rascunho';
      case 'screenshot': return 'Tela';
      default: return 'Arquivo';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveGame({ ...formData, files: uploadedFiles });
    onNavigate('dashboard');
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading">{gameId ? 'Editar Jogo' : 'Cadastrar Novo Jogo'}</h1>
            <p className="text-muted-foreground mt-1">
              {gameId 
                ? 'Atualize as informações e documentos do seu jogo educacional'
                : 'Defina a estrutura do seu jogo educacional e objetivos de aprendizagem'
              }
            </p>
          </div>
          <Button variant="outline" onClick={() => onNavigate('dashboard')} className="rounded-xl">
            <X className="mr-2 w-4 h-4" />
            Cancelar
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Main Card with all fields */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>{gameId ? 'Editar Informações' : 'Informações do Jogo'}</CardTitle>
              <CardDescription>
                {gameId
                  ? 'Atualize os detalhes do seu jogo educacional'
                  : 'Preencha os detalhes essenciais sobre seu jogo educacional'
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Nome do Jogo */}
              <div className="space-y-2">
                <Label htmlFor="name">Nome do jogo *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Digite o nome do jogo"
                  required
                  className="rounded-xl"
                />
              </div>

              <Separator />

              {/* Público-alvo */}
              <div className="space-y-2">
                <Label htmlFor="targetAudience">Público-alvo</Label>
                <Input
                  id="targetAudience"
                  value={formData.targetAudience}
                  onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                  placeholder="ex: Estudantes do ensino fundamental (6-10 anos)"
                  className="rounded-xl"
                />
              </div>

              <Separator />

              {/* Plataforma */}
              <div className="space-y-2">
                <Label htmlFor="platform">Plataforma</Label>
                <Input
                  id="platform"
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                  placeholder="ex: Web, Mobile (iOS/Android)"
                  className="rounded-xl"
                />
              </div>

              <Separator />

              {/* Gênero do Jogo */}
              <div className="space-y-2">
                <Label htmlFor="genre">Gênero do Jogo</Label>
                <Select value={formData.genre} onValueChange={(value) => setFormData({ ...formData, genre: value })}>
                  <SelectTrigger id="genre" className="rounded-xl">
                    <SelectValue placeholder="Selecione o gênero" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Quebra-cabeça Educacional">Quebra-cabeça Educacional</SelectItem>
                    <SelectItem value="Aventura">Aventura</SelectItem>
                    <SelectItem value="Simulação">Simulação</SelectItem>
                    <SelectItem value="Estratégia">Estratégia</SelectItem>
                    <SelectItem value="Quiz">Quiz</SelectItem>
                    <SelectItem value="RPG Educacional">RPG Educacional</SelectItem>
                    <SelectItem value="Ação">Ação</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              {/* História */}
              <div className="space-y-2">
                <Label htmlFor="story">História</Label>
                <Textarea
                  id="story"
                  value={formData.story}
                  onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                  placeholder="Descreva a história e o contexto narrativo do jogo"
                  className="rounded-xl min-h-25"
                />
              </div>

              <Separator />

              {/* Gameplay */}
              <div className="space-y-2">
                <Label htmlFor="gameplay">Gameplay</Label>
                <Textarea
                  id="gameplay"
                  value={formData.gameplay}
                  onChange={(e) => setFormData({ ...formData, gameplay: e.target.value })}
                  placeholder="Descreva como o jogo é jogado e suas mecânicas principais"
                  className="rounded-xl min-h-25"
                />
              </div>

              <Separator />

              {/* Fluxo do jogo */}
              <div className="space-y-2">
                <Label htmlFor="gameFlow">Fluxo do jogo</Label>
                <Textarea
                  id="gameFlow"
                  value={formData.gameFlow}
                  onChange={(e) => setFormData({ ...formData, gameFlow: e.target.value })}
                  placeholder="Descreva o fluxo e a progressão do jogo"
                  className="rounded-xl min-h-20"
                />
              </div>

              <Separator />

              {/* Mecânica de aprendizagem */}
              <div className="space-y-2">
                <Label htmlFor="learningMechanics">Mecânica de aprendizagem</Label>
                <Textarea
                  id="learningMechanics"
                  value={formData.learningMechanics}
                  onChange={(e: { target: { value: any; }; }) => setFormData({ ...formData, learningMechanics: e.target.value })}
                  placeholder="Descreva as mecânicas pedagógicas utilizadas"
                  className="rounded-xl min-h-20"
                />
              </div>

              <Separator />

              {/* Objetivos de aprendizagem */}
              <div className="space-y-2">
                <Label htmlFor="learningObjectives">Objetivos de aprendizagem</Label>
                <Textarea
                  id="learningObjectives"
                  value={formData.learningObjectives}
                  onChange={(e) => setFormData({ ...formData, learningObjectives: e.target.value })}
                  placeholder="Quais são os objetivos de aprendizagem do jogo?"
                  className="rounded-xl min-h-20"
                />
              </div>

              <Separator />

              {/* Componente Curricular */}
              <div className="space-y-2">
                <Label htmlFor="bnccSkills">Componente Curricular (opcional)</Label>
                <Textarea
                  id="bnccSkills"
                  value={formData.bnccSkills}
                  onChange={(e) => setFormData({ ...formData, bnccSkills: e.target.value })}
                  placeholder="Ex: Habilidades da BNCC, Competências dos PCNs, ou outros frameworks curriculares"
                  className="rounded-xl min-h-25"
                />
                <p className="text-xs text-muted-foreground">
                  Pode incluir códigos e descrições de habilidades da BNCC, competências dos PCNs, entre outros componentes curriculares.
                </p>
              </div>

              <Separator />

              {/* Status do Projeto */}
              <div className="space-y-2">
                <Label htmlFor="status">Status do Projeto *</Label>
                <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value as 'development' | 'testing' | 'completed' })}>
                  <SelectTrigger id="status" className="rounded-xl">
                    <SelectValue placeholder="Selecione o status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="development">Em Desenvolvimento</SelectItem>
                    <SelectItem value="testing">Em Teste</SelectItem>
                    <SelectItem value="completed">Concluído</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* File Upload Section */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Arquivos do Jogo (Opcional)</CardTitle>
              <CardDescription>Anexe documentos de design, rascunhos e capturas de tela do seu jogo</CardDescription>
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
                    onChange={(e) => handleFileUpload(e, 'egdd')}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full rounded-xl h-24 border-2 border-dashed border-primary/30 hover:border-primary/50 hover:bg-primary/5"
                    onClick={() => document.getElementById('egddUpload')?.click()}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="w-6 h-6 text-primary" />
                      <span className="text-sm text-muted-foreground">Clique para adicionar EGDD</span>
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
                    onChange={(e) => handleFileUpload(e, 'draft')}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full rounded-xl h-24 border-2 border-dashed border-accent/30 hover:border-accent/50 hover:bg-accent/5"
                    onClick={() => document.getElementById('draftUpload')?.click()}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="w-6 h-6 text-accent" />
                      <span className="text-sm text-muted-foreground">Clique para adicionar rascunhos</span>
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
                    onChange={(e) => handleFileUpload(e, 'screenshot')}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full rounded-xl h-24 border-2 border-dashed border-green-600/30 hover:border-green-600/50 hover:bg-green-50 dark:hover:bg-green-950/20"
                    onClick={() => document.getElementById('screenshotUpload')?.click()}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="w-6 h-6 text-green-600" />
                      <span className="text-sm text-muted-foreground">Clique para adicionar imagens</span>
                    </div>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Formatos aceitos: PNG, JPG, JPEG, GIF, SVG
                </p>
              </div>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <>
                  <Separator />
                  <div className="space-y-3">
                    <Label>Arquivos Anexados ({uploadedFiles.length})</Label>
                    <div className="space-y-2 max-h-[300px] overflow-y-auto">
                      {uploadedFiles.map(file => (
                        <div
                          key={file.id}
                          className="flex items-center justify-between p-3 bg-muted/30 rounded-xl border hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            {getFileIcon(file.type)}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm truncate">{file.name}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className="text-xs rounded-full">
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
                            className="rounded-lg text-destructive hover:text-destructive hover:bg-destructive/10 flex-shrink-0"
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
            <Button type="button" variant="outline" onClick={() => onNavigate('dashboard')} className="rounded-xl">
              Cancelar
            </Button>
            <Button type="submit" className="rounded-xl">
              <Save className="mr-2 w-4 h-4" />
              {gameId ? 'Atualizar Jogo' : 'Salvar Jogo'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
