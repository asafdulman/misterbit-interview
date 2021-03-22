
export function HighlightPreview({ item }) {
    return (
        <div className="highlight-preview-box">
            <div className="highlight-preview-img-box">
            <img className="highlight-preview-img" src={item.imgUrl} alt=""/>
            <div className="img-line"></div>
            </div>
            <div className="highlight-preview-details-box">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
            </div>
        </div>
    )
}
