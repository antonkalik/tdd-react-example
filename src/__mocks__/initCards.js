export const title = "Test Card";
export const initCards = Array.from({ length: 5 }, (_, i) => ({
  title: `${title} ${i + 1}`,
  id: i + 1,
}));
