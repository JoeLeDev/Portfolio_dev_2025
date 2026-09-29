/** Lien vers une section de l'accueil, y compris depuis une autre route. */
export const homeSectionTo = (sectionId: string) => ({
  pathname: "/",
  hash: sectionId,
});
