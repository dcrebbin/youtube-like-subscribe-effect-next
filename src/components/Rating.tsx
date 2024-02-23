export default function Rating(props: any) {
  return (
    <div className="w-min">
      <div className="flex flex-col items-center py-2">
        <button onClick={props.handleRating}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="none" stroke={props.hasRated ? "purple" : "black"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4.5 15.75l7.5-7.5l7.5 7.5" />
          </svg>
        </button>
        <p className={props.hasRated ? "text-xl font-bold text-[#9B31A0]" : "text-xl text-black/80 font-bold"}>{props.rating}</p>
      </div>
    </div>
  );
}
