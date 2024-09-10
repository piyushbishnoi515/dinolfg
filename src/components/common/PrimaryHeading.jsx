const PrimaryHeading = ( props) => {
  return (
      <h2 className={`font-chewy font-normal text-[64px] text-center text-white ${props.className}`}>{props.text}</h2>
  )
}

export default PrimaryHeading