const airConditioner = ({ color }: { color: string }): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        className={`fill-current ${color}`}
        d="M21.75 13.5a.75.75 0 110-1.5.76.76 0 00.75-.75v-7.5a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 3.75v7.5a.76.76 0 00.75.75.75.75 0 110 1.5A2.25 2.25 0 010 11.25v-7.5A3.75 3.75 0 013.75 0h16.5A3.75 3.75 0 0124 3.75v7.5a2.25 2.25 0 01-2.25 2.25z"
      />
      <path
        className={`fill-current ${color}`}
        d="M23.25 10.5H.75a.75.75 0 110-1.5h22.5a.75.75 0 110 1.5zM19.5 5.62a1.12 1.12 0 110-2.24 1.12 1.12 0 010 2.24zm0-1.5a.38.38 0 100 .76.38.38 0 000-.76zM2.25 21a.75.75 0 110-1.5 2.25 2.25 0 002.25-2.25v-3a.75.75 0 111.5 0v3A3.75 3.75 0 012.25 21zm6 3a.75.75 0 110-1.5.76.76 0 00.75-.75v-7.5a.75.75 0 111.5 0v7.5A2.25 2.25 0 018.25 24zm13.5-3A3.75 3.75 0 0118 17.25v-3a.75.75 0 111.5 0v3a2.25 2.25 0 002.25 2.25.75.75 0 110 1.5zm-6 3a2.25 2.25 0 01-2.25-2.25v-7.5a.75.75 0 111.5 0v7.5a.76.76 0 00.75.75.75.75 0 110 1.5z"
      />
    </svg>
  )
}

export default airConditioner
