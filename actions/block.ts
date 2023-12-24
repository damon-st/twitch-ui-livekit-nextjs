"use server";

import { getSelf } from "@/lib/auth.service";
import { blockUser, unBlockUser } from "@/lib/block.service";
import { RoomServiceClient } from "livekit-server-sdk";
import { revalidatePath } from "next/cache";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY,
  process.env.LIVEKIT_API_SECRET
);

export const onBlock = async (id: string) => {
  const self = await getSelf();
  let blockedUser;
  try {
    blockedUser = await blockUser(id);
  } catch (error) {}

  try {
    await roomService.removeParticipant(self.id, id);
  } catch (error) {
    //THIS MENAS USE RNOT IN THE ROROM
  }

  revalidatePath(`/u/${self.username}/community`);

  return blockedUser;
};

export const onUnBlock = async (id: string) => {
  const self = await getSelf();
  const unBlockuser = await unBlockUser(id);
  revalidatePath(`/u/${self.username}/community`);

  return unBlockuser;
};