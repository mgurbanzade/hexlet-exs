export const damage = (self, health) =>
  getMethod(self, 'damage')(contents(self), health);
