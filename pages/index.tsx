import type { NextPage } from 'next'
import styles from '../styles/landing.module.css'
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import EditIcon from '@mui/icons-material/Edit';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Landing: NextPage = () => {
  const Headerpanel = () => {
    return (
      <div className={styles.header}>
        <span className={styles.brand}>
        <a id={styles.brand__icon}>{<CollectionsBookmarkIcon/>}</a>
        <h1 id={styles.brand__name}>script journal</h1>
        </span>

        <span className={styles.user_panel}>
          <ul className={styles.user_panel__nav}>
            <a className={styles.user_panel__icon}>{<EditIcon/>}</a>
            <a className={styles.user_panel__icon}>{<CalendarMonthIcon/>}</a>
            <a className={styles.user_panel__icon}>{<SearchIcon/>}</a>
            <a className={styles.user_panel__icon}>{<ManageAccountsIcon/>}</a>
            <a className={styles.user_panel__icon}>{<DarkModeIcon/>}</a>
          </ul>
        </span>
      </div>
    )
  }

  const MainBodyPanel = () => {
    return (
      <div className={styles.main_body_panel}>
     <p>test</p>
      </div>
    )
  }

  const FooterPanel = () => {
    return <div className={styles.footer}>
      <div className={styles.footer__sub_container}>
            <hr id={styles.footer_hr}></hr>
        <ul className={styles.about_heading__wrapper}>
        <li className={styles.about_heading}><p>Author</p></li>
        <li className={styles.about_heading}><p>Purpose</p></li>
        <li className={styles.about_heading}><p>Roadmap</p></li>
        </ul>
        </div>
      </div>
  }
  return (
    <div className={styles.main_body}>
    <div className={styles.header_panel}>{Headerpanel()}</div>
    <MainBodyPanel/>
    <FooterPanel/>
    </div>
  )
}

export default Landing
