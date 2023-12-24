import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth.service";

export const getRecommended = async () => {
  let userId;
  try {
    const selft = await getSelf();
    userId = selft.id;
  } catch (error) {
    userId = null;
  }
  let users = [];
  if (userId) {
    users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        stream: {
          select: {
            isLive: true,
          },
        },
      },
      where: {
        AND: [
          {
            NOT: {
              id: userId,
            },
          },
          {
            NOT: {
              followedBy: {
                some: {
                  followerId: userId,
                },
              },
            },
          },
          {
            NOT: {
              blocking: {
                some: {
                  blockedId: userId,
                },
              },
            },
          },
        ],
      },
    });
  } else {
    users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        stream: {
          select: {
            isLive: true,
          },
        },
      },
    });
  }

  return users;
};
