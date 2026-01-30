import "./SectionTitle.css"

const SectionTitle = ({ title, subTitle }) => {
    return (
      <>
            <h2 className="inner-title">{title}</h2>
            <span className="inner-second-title">{subTitle}</span>
      </>
  )
}

export default SectionTitle