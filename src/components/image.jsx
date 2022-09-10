function importAll(r) {
  return r.keys().map(r);
}

export const imagesTumbnail = importAll(
  require.context("../images/thumbnail", false, /\.(png|jpe?g|svg)$/)
);


export const imagesTitle = importAll(
  require.context("../images/title", false, /\.(png|jpe?g|svg)$/)
);

