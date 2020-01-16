import React, { useState, useEffect } from 'react';
import styles from './ChallengeScenario.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const ChallengeScenario = ({scenario}) => {
    const [selectedTestLine, setSelectedTestLine] = useState(null)

    const toggleDisplayHelperImage = (testLine) => {
        if (selectedTestLine && (testLine.lineNumber === selectedTestLine.lineNumber)) {
            setSelectedTestLine(null)
        } else {
            setSelectedTestLine(testLine)
        }
    }

    return (               
        <div className={styles.scenarioContainer}>
            <h3>Scenario : {scenario.scenarioTitle}</h3>
            { scenario.lineNumbers.map((testLine) =>   
                 <>
                 <div className={styles.testLineContainer}>
                     <button 
                         onClick={() => { toggleDisplayHelperImage(testLine) }}
                         type="submit"
                         >{!selectedTestLine || selectedTestLine.lineNumber !== testLine.lineNumber ? <FontAwesomeIcon icon={faChevronRight}/> : <FontAwesomeIcon icon={faChevronDown}/>} 
                     </button>
                     <h4>Test Line {testLine && testLine.lineNumber} - {testLine && testLine.testString}</h4>  
                 </div>
                 {
                 selectedTestLine && (selectedTestLine.lineNumber === testLine.lineNumber) && <img className={styles.helperImage} src={testLine.helperImage}></img>
                 }
                 </>
            )
            }
        </div>
    )
}

export default ChallengeScenario


