import prisma from '../prisma'

export default function MyAdapter(client, options = {}) {
  return {
    async createUser(user) {},

    async getUser(id: string) {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          id,
        },
      })

      return {
        id: user?.id,
        name: user?.name,
        avatar_url: user?.avatar_url,
        created_at: new Date(),
      }
    },
    async getUserByEmail(email) {},
    async getUserByAccount({ providerAccountId, provider }) {},
    async updateUser(user) {},
    async deleteUser(userId) {},
    async linkAccount(account) {},
    async unlinkAccount({ providerAccountId, provider }) {},
    async createSession({ sessionToken, userId, expires }) {},
    async getSessionAndUser(sessionToken) {},
    async updateSession({ sessionToken }) {},
    async deleteSession(sessionToken) {},
    async createVerificationToken({ identifier, expires, token }) {},
    async useVerificationToken({ identifier, token }) {},
  }
}
