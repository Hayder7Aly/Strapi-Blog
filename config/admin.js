module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd4cf67a28b643feaa046bbddcc2d632f'),
  },
});
