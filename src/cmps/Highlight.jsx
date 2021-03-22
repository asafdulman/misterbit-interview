import { HighlightPreview } from "./HighlightPreview"
import line from '../assets/img/highlight-line.png'

export function Highlight() {

  const items = [
    {
      title: 'Seared Salmon Fillet',
      desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
      imgUrl: 'https://res.cloudinary.com/dg0knvywy/image/upload/v1616403934/misterbit/menu-item1_ypdvsp.jpg'
    },
    {
      title: 'Rosemary Filet Mignon',
      desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
      imgUrl: 'https://res.cloudinary.com/dg0knvywy/image/upload/v1616403934/misterbit/menu-item2_tbkj73.jpg'
    },
    {
      title: 'Summer Fruit Chocolate Mousse',
      desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
      imgUrl: 'https://res.cloudinary.com/dg0knvywy/image/upload/v1616403934/misterbit/menu-item3_vduqx6.jpg'
    },

  ]

  return (
    <div className="highlight-outer-box">
      <div className="highlight-box">
        <img className="highlight-box-line" src={line} alt=""/>
      <div className="highlight-left-box">
          <h1>A few highlights from our menu</h1>
          <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
      </div>
      <div className="highlight-right-box">
          {items.map( item => <HighlightPreview key={item.title} item={item} /> )}
      </div>
      </div>
    </div>
  )
}
