const Refrigerator = ({ color }: { color: string }): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        className={`fill-current ${color}`}
        d="M18.72 24H5.28a1.81 1.81 0 01-1.73-1.87V1.87A1.81 1.81 0 015.28 0h13.44a1.81 1.81 0 011.73 1.87v20.26A1.81 1.81 0 0118.72 24zM5.28 1.5c-.09 0-.23.15-.23.37v20.26c0 .22.14.37.23.37h13.44c.09 0 .23-.15.23-.37V1.87c0-.22-.14-.37-.23-.37H5.28z"
      />
      <path
        className={`fill-current ${color}`}
        d="M19.25 9.49H4.85a.75.75 0 110-1.49h14.4a.75.75 0 110 1.5v-.01zM7.51 19.18a.76.76 0 01-.75-.75v-4.82a.75.75 0 111.5 0v4.82a.75.75 0 01-.75.75zm0-12.86a.75.75 0 01-.75-.75V4a.75.75 0 011.5 0v1.57a.74.74 0 01-.75.75z"
      />
    </svg>
  )
}

export default Refrigerator
