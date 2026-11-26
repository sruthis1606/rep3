function NovelCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Author: {props.author}</p>
      <p>Genre: {props.genre}</p>
    </div>
  );
}

export default NovelCard;