const InsideShower = ({ color }: { color: string }): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        className={`fill-current ${color}`}
        d="M22.42 10.647H2a.78.78 0 01-.6-.31.74.74 0 01-.11-.66 11.406 11.406 0 014.117-5.9 11.43 11.43 0 0113.666 0 11.405 11.405 0 014.117 5.9.738.738 0 01-.402.897.78.78 0 01-.368.073zM3 9.149h18.37a9.92 9.92 0 00-3.656-4.47A9.939 9.939 0 003 9.15z"
      />
      <path
        className={`fill-current ${color}`}
        d="M12.19 3.026a.76.76 0 01-.75-.749V.75a.749.749 0 011.28-.53c.141.14.22.331.22.53v1.528a.759.759 0 01-.75.75z"
      />
      <path
        className={`stroke-current ${color}`}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.87 13.323a.38.38 0 11-.02.76.38.38 0 01.02-.76m-6.11 6.093a.38.38 0 110 .76.38.38 0 010-.76m6.12 0a.38.38 0 110 .76.38.38 0 010-.76m6.1 0a.38.38 0 110 .76.38.38 0 010-.76M8.81 16.37a.38.38 0 110 .759.38.38 0 010-.76m6.11.001a.38.38 0 110 .76.38.38 0 010-.76m-6.11 6.092a.38.38 0 110 .76.38.38 0 010-.76m-6.1 0a.38.38 0 110 .76.38.38 0 010-.76m12.21 0a.38.38 0 110 .76.38.38 0 010-.76m6.06 0a.38.38 0 110 .76.38.38 0 010-.76"
      />
    </svg>
  )
}

export default InsideShower