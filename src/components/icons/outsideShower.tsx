const OutsideShower = ({ color }: { color: string }): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        className={`fill-current ${color}`}
        d="M21.55 24a.76.76 0 01-.75-.75V6.75a5.25 5.25 0 10-10.5 0 .75.75 0 11-1.5 0 6.75 6.75 0 1113.5 0v16.5a.75.75 0 01-.75.75z"
      />
      <path
        className={`fill-current ${color}`}
        d="M14.05 12h-9a.76.76 0 01-.75-.75 5.25 5.25 0 1110.5 0 .75.75 0 01-.75.75zm-8.17-1.5h7.35a3.75 3.75 0 00-7.35 0z"
      />
      <path
        className={`stroke-current ${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.55 15a.38.38 0 11.02.76.38.38 0 01-.02-.76m-4.13 0a.38.38 0 11.02.76.38.38 0 01-.02-.76m4.13 6a.38.38 0 11.02.76.38.38 0 01-.02-.76m4.01-6a.37.37 0 11-.24.47v0a.38.38 0 01.24-.47m1.86 5.72a.38.38 0 01.23.72.39.39 0 01-.47-.24v0a.38.38 0 01.24-.48m-11.73 0a.38.38 0 10-.23.72.39.39 0 00.47-.24v0a.39.39 0 00-.24-.48"
      />
    </svg>
  )
}

export default OutsideShower
