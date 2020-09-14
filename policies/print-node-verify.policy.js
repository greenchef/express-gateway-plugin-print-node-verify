module.exports = {
  name: 'print-node-verify',
  schema: {
    $id: 'N/A',
    type: 'object',
    properties: {
      secret: {
        type: 'string',
      }
    }
  },
  policy: ({ secret }) => {
    return async (req, res, next) => {
      try {
          if (req.headers['x-printnode-webhook-secret'] !== secret) {
            res.sendStatus(401);
            return;
          }
      } catch (e) {
        console.error('Error in print node verify policy:', e.error);
        res.sendStatus(500);
        return;
      }
      next();
    };
  }
};