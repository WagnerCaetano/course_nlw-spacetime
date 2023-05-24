import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function memoriesRoutes(app: FastifyInstance) {
  app.get("/memories", async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return memories.map((memory) => {
      return {
        id: memory.memoryId,
        coverUrl: memory.coverUrl,
        content: memory.content.substring(0, 100) + "...",
      };
    });
  });

  app.get("/memories/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        memoryId: id,
      },
    });

    return memory;
  });

  app.post("/memories", async (request) => {
    const bodySchema = z.object({
      coverUrl: z.string().url(),
      content: z.string(),
      isPublic: z.boolean().default(false),
    });
    const { coverUrl, content, isPublic } = bodySchema.parse(request.body);

    const memory = await prisma.memory.create({
      data: {
        coverUrl,
        content,
        isPublic,
        userId: "1",
      },
    });
    return memory;
  });

  app.put("/memories/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      coverUrl: z.string().url(),
      content: z.string(),
      isPublic: z.boolean().default(false),
    });
    const { coverUrl, content, isPublic } = bodySchema.parse(request.body);

    const memory = await prisma.memory.update({
      where: {
        memoryId: id,
      },
      data: {
        coverUrl,
        content,
        isPublic,
      },
    });

    return memory;
  });

  app.delete("/memories/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    await prisma.memory.delete({
      where: {
        memoryId: id,
      },
    });
  });
}
