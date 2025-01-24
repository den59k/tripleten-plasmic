import cn from 'classnames'
import { useEffect, useMemo, useState } from 'react'
import AppHeaderItem from './AppHeaderItem'
import tripletenLogo from '../../assets/tripleten-logo.svg'
import './AppHeader.sass'

type Props = {
  headerType: string
}

const AppHeader = ({ headerType }: Props) => {

  const [ scrolled, setScrolled ] = useState(false)
  const items = useMemo(() => {
    if (headerType === 'contentPage') {
      return [
        {
          title: "Programs",
          children: [
            { title: "Software Engineering", to: "/se" }
          ]
        }
      ]
    }
  
    return [
      {
        title: "Programs",
        children: [
          { title: "Software Engineering", to: "/se" }
        ]
      },
      {
        title: "Why TripleTen",
        children: [
          { title: "Software Engineering", to: "/se" }
        ]
      },
      {
        title: "Resources",
        children: [
          { title: "Software Engineering", to: "/se" }
        ]
      },
      {
        title: "Blog",
        to: "https://tripleten.com/blog/"
      }
    ]
  }, [ headerType ])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  })

  return (
    <div className="app-header-wrapper full-width">
      <header className="app-header">
        <a className="app-header__home-link" href="/">
          <img src={tripletenLogo} alt="Tripleten" />
        </a>
        <div className={cn("app-header__links-container", headerType === 'contentPage' && 'align-left')}>
          { items.map((item, index) => (
            item.children?
              <AppHeaderItem key={index} item={item} /> :
              <a  key={index} className="app-header-item" href={item.to}>{ item.title }</a>
          )) }
        </div>
        <div className={ cn("app-header__backing", !scrolled && "hide", false && "transition") }></div>
      </header>
    </div>
  )
}

export default AppHeader