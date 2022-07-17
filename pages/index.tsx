import type { NextPage } from 'next'
import styles from '../styles/Dashboard.module.css'
import {mockEntries} from "./api/constants/mockEntries";
const Dashboard: NextPage = () => {
  const renderHeaderPanel = () => {
    return (
      <div className={styles.headerPanelSubContainer}>
        <span className={styles.brandContainer}>
        <p>icon</p>
        <h1>script journal</h1>
        </span>

        <span className={styles.userPanelNavContainer}>
          <ul className={styles.userPanelNavUl}>
            <a id="userPanelPencil">Pencil Icon</a>
            <a id="userPanelCalendar">Calendar Icon</a>
            <a id="userPanelMagnifying">Magnifying Icon</a>
            <a id="userPanelProfile">Profile Icon</a>
            <a id="userPanelDarkMode">Dark Mode Icon</a>
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
