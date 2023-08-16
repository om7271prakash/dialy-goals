import styles from './progressBar.module.css'

const ProgressBar = (props) => {
    const {
        steps,
        currentStep,
    } = props;

    const totalSteps = steps.length;

    return (
        <div className={styles.container}>
            <div className={styles['progress-bar']}>
                <div style={{
                    width: `${(currentStep+1) * 100 / totalSteps}%`,
                    height: '100%',
                    borderRadius: '10px',
                    backgroundColor: '#784af4',
                    transition: 'all 1s ease-out'
                }} />
            </div>
            <div className={styles['progress-info']}>
                <div>({currentStep + 1}/{totalSteps})</div>
                <div>{steps[currentStep]?.title}</div>
            </div>
        </div>
    )
}

export default ProgressBar;