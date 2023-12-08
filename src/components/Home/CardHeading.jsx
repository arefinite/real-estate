const CardHeading = ({title,children}) => {
  return (
    <div className="box-container gap">
      <h1 className="heading">{title}</h1>
      <p>{children}</p>
    </div>
  )
}
export default CardHeading