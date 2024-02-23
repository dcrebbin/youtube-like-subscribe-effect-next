export default function Rating(props: any) {
  return (
    <div className=" w-min">
      <div className="flex flex-col items-center">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4.5 15.75l7.5-7.5l7.5 7.5" />
          </svg>
        </button>
        <p>{props.rating}</p>
      </div>
    </div>
  );
}
