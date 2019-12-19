module.exports = app => {
  return class AppController extends app.Controller {
    async index() {
      const { ctx } = this;
      await ctx.render('app.tpl', { url: ctx.path });
    }
  };
};
