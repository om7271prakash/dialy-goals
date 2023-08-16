import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import styles from './stepper.module.css'

const Stepper = () => {

    const s = [
        {
            title: "First step",
            description: "First step description",
            completed: false
        },
        {
            title: "Second step",
            description: "Second step description",
            completed: false,
        },
        {
            title: "Third step",
            description: "Third step description",
            completed: false,
        },
        {
            title: "Fourth step",
            description: "Fourth step description",
            completed: false,
        },
        {
            title: "Fifth step",
            description: "Fifth step description",
            completed: false,
        },
    ]
    const [steps, setSteps] = useState(s)
    const [currentStep, setCurrentStep] = useState(null);

    useEffect(() => {
        setCurrentStep(-1)
    }, [])

    const completeGoalHandler = (goalStep) => {
        setCurrentStep(goalStep)
        setSteps(prevSteps => {
            return prevSteps.map((step, i) => {
                if(i <= goalStep){
                    return {
                        ...step,
                        completed: true,
                    }
                }
                return {
                    ...step,
                    completed: false,
                }
            })
        })
    }

    console.log({steps})

    return (
        <div className={styles.container}>
            <ProgressBar 
                steps={steps} 
                currentStep={currentStep}
            />
            <div className={styles['stepper-container']}>
                {steps.map((step, i) => {
                    return (
                        <div key={i} className={styles['stepper-goal']} onClick={() => completeGoalHandler(i)} >
                            <input type="checkbox" id={`scales-${i}`} name={`scales-${i}`} onChange={() => {}} checked={step.completed} />
                            <label htmlFor={`scales-${i}`}>
                                <div className={styles.goalTitle}>{step.title}</div>
                                <div className={styles.goalDescription}>{step.description}</div>
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Stepper;