import React from 'react'
import styles from './LoadingScreen.module.css'
export default function LoadingScreen() {
    return (
        <div className={styles.loadingScreen + '-mt-40 flex items-center justify-center h-screen w-screen fixed top-0 left-0 bg-[#f1f1e6] dark:bg-[#004852] z-50'}>

            <div className={styles.loadingDiv}><div className={styles.loadingIcon}>
                <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
            </div></div>

        </div>
    )
}
