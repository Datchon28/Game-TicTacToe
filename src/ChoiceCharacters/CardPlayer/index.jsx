import "./card-player.scss";

function CardPlayer({ shape, player, currentChoiced }) {
  return (
    <div className="card-player-choosing">
      {currentChoiced === player.indexPlayer && (
        <div className="absolute left-1/2 -top-[77px] w-fit">mui ten</div>
      )}
      <div className="player">
        <div className="avatar">
          <img alt="" src={player.avartar} />
        </div>
        <div className="name-player">
          <h4 className="font-semibold text-xl">{player.playerName}</h4>
          <img src={shape} />
        </div>
      </div>
    </div>
  );
}

export default CardPlayer;
