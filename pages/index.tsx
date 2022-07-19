import type { NextPage } from 'next'
import styles from '../styles/Dashboard.module.css'
import {mockEntries} from "./api/constants/mockEntries";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import EditIcon from '@mui/icons-material/Edit';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Dashboard: NextPage = () => {
  const renderHeaderPanel = () => {
    return (
      <div className={styles.headerPanelSubContainer}>
        <span className={styles.brandContainer}>
        <a id={styles.mainBrandIcon}>{<CollectionsBookmarkIcon/>}</a>
        <h1 id={styles.mainBrandName}>script journal</h1>
        </span>

        <span className={styles.userPanelNavContainer}>
          <ul className={styles.userPanelNavUl}>
            <a className={styles.userPanelIcon}>{<EditIcon/>}</a>
            <a className={styles.userPanelIcon}>{<CalendarMonthIcon/>}</a>
            <a className={styles.userPanelIcon}>{<SearchIcon/>}</a>
            <a className={styles.userPanelIcon}>{<ManageAccountsIcon/>}</a>
            <a className={styles.userPanelIcon}>{<DarkModeIcon/>}</a>
          </ul>
        </span>
      </div>
    )
  }

  const renderMainBodyPanel = () => {
    const renderEntries = () => {

      return (
      mockEntries.map((entry, key) => ( 
        <div className={styles.entryListBodyContainer} key={key}>
                  <div className={styles.entryListHeaderContainer}>
          <div className={styles.entryListHeaderPanel}>
        <p className={styles.entryListDate}>{entry.entryListDate}</p>
        <span className={styles.cycleThroughButtonContainer}>
        <p id={styles.cycleThroughBack}>{"<"}</p>
        <p id={styles.cycleThroughBack}>{">"}</p>
        </span>
        </div>
        </div>
        <div className={styles.entryListSubContainer} >
        <span className={styles.entryTitleContainer}>
        <p className={styles.entryTitle}>{entry.title}</p>
        <p className={styles.entryTimestamp}>{entry.lastSavedTimestamp}</p>
        </span>
        <div className={styles.entryBodyTextContainer}>
          <p className={styles.entryBodyText}>
          {entry.body}
          </p>
        </div>
        </div>
        </div>
      )
      ))
    }
    return (
      <div className={styles.mainBodyPanelContainer}>
        <div className={styles.entryListsContainer}>
     <>
          {renderEntries()}
          </>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.mainBodyContainer}>
    <div className={styles.headerPanelContainer}>{renderHeaderPanel()}</div>
    <>{renderMainBodyPanel()}</>
    </div>
  )
}

export default Dashboard
