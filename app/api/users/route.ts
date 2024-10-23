// app/api/users/route.ts

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Returns a list of users
 *     responses:
 *       200:
 *         description: A JSON array of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
export default function handler(req, res) {
    res.status(200).json([{ id: 1, name: 'John Doe' }]);
  }
  